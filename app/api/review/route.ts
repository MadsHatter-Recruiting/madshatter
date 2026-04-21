import OpenAI from "openai";
import pdfParse from "pdf-parse";
import { NextResponse } from "next/server";
import { normalizeReview } from "@/lib/review-schema";

export const runtime = "nodejs";

type ReviewMode = "general" | "targeted";

const generalSchema = {
  type: "object",
  additionalProperties: false,
  required: [
    "recruiter_score",
    "score_rationale",
    "top_fixes",
    "strengths",
    "issues",
    "priority_rewrites",
    "next_steps"
  ],
  properties: {
    recruiter_score: { type: "number", minimum: 0, maximum: 10 },
    score_rationale: { type: "string" },
    top_fixes: { type: "array", minItems: 3, maxItems: 3, items: { type: "string" } },
    strengths: { type: "array", maxItems: 8, items: { type: "string" } },
    issues: { type: "array", maxItems: 10, items: { type: "string" } },
    priority_rewrites: {
      type: "array",
      minItems: 3,
      maxItems: 6,
      items: {
        type: "object",
        additionalProperties: false,
        required: ["original", "improved", "why"],
        properties: {
          original: { type: "string" },
          improved: { type: "string" },
          why: { type: "string" }
        }
      }
    },
    next_steps: { type: "array", maxItems: 8, items: { type: "string" } }
  }
} as const;

const targetedSchema = {
  type: "object",
  additionalProperties: false,
  required: [
    "recruiter_score",
    "score_rationale",
    "match_score",
    "top_fixes",
    "strengths",
    "issues",
    "missing_keywords",
    "priority_rewrites",
    "tailored_summary",
    "next_steps"
  ],
  properties: {
    recruiter_score: { type: "number", minimum: 0, maximum: 10 },
    score_rationale: { type: "string" },
    match_score: { type: "number", minimum: 0, maximum: 100 },
    top_fixes: { type: "array", minItems: 3, maxItems: 3, items: { type: "string" } },
    strengths: { type: "array", maxItems: 8, items: { type: "string" } },
    issues: { type: "array", maxItems: 10, items: { type: "string" } },
    missing_keywords: { type: "array", items: { type: "string" } },
    priority_rewrites: {
      type: "array",
      minItems: 3,
      maxItems: 6,
      items: {
        type: "object",
        additionalProperties: false,
        required: ["original", "improved", "why"],
        properties: {
          original: { type: "string" },
          improved: { type: "string" },
          why: { type: "string" }
        }
      }
    },
    tailored_summary: { type: "string" },
    next_steps: { type: "array", maxItems: 8, items: { type: "string" } }
  }
} as const;

const buildSystemPrompt = (mode: ReviewMode) => {
  const base = [
    "You are Mads: a direct, high-signal hiring operator who thinks like a hiring manager and founder, not a resume coach.",
    "Use a 6-10 second scan mindset: prioritize what proves interview readiness fast.",
    "Scan in this order: role-title alignment, recency of relevant roles, location fit (secondary for remote), JD keyword coverage, summary quality, then formatting readability.",
    "Assume recruiters screen very high volumes; speed and signal density matter more than polished prose.",
    "Be candid, specific, and constructive. No corporate fluff.",
    "Prioritize impact, metrics, ownership, scope, seniority signals, and role alignment.",
    "Employer brand signal matters in real screening: experience at widely recognized, high-performing companies can increase confidence and interview odds.",
    "Treat lesser-known employers as neutral by default, but require clearer proof of scope, ownership, and outcomes to create equivalent confidence.",
    "Do not dismiss candidates only because an employer is lesser-known; evaluate evidence quality, but acknowledge market-recognition bias as a real screening factor.",
    "Summary expectations: concise, non-fluffy synopsis of fit. Optional highlights are fine if brief and specific.",
    "Formatting expectations: clean, bullet-led, easy to scan. Flag complex layouts/graphics/boxes that reduce readability or ATS parsing confidence.",
    "Progression expectations: identify tenure clarity and growth over time. If company tenure is long but role-tenure presentation is unclear, flag it.",
    "Tenure yellow-flag rule: repeated tenure under 18 months is a yellow flag for junior-to-mid roles; for Director+ profiles, repeated tenure under 24 months is a yellow flag.",
    "When tenure yellow flags appear, do not be offensive or judgmental. Frame it as interview risk and advise the candidate to come prepared to explain progression and why they want this specific role at this specific organization.",
    "Call out weak signals explicitly: vague claims, task-only bullets, unclear scope, missing outcomes, inflated titles, and tenure yellow flags when relevant.",
    "Treat issues as a yellow/red-flags pass plus fixable execution gaps.",
    "Avoid generic advice (for example, 'use action verbs') unless tied to a concrete resume example.",
    "Strong bullet standard: what the candidate did, what changed because of it, and (when available) metrics and cross-functional context.",
    "If bullets only list duties, rewrite toward ownership, process improvement, collaboration, and measurable outcomes.",
    "Priority rewrites must be sharp and realistic. Do not invent employers, titles, or metrics.",
    "If resume bullets are messy, create representative original snippets grounded in the provided resume text, then rewrite them.",
    "If something is unclear, say so in issues/next_steps instead of guessing.",
    "Scoring logic: higher scores require strong title alignment, keyword coverage, clear progression, readable structure, impact-oriented bullets, and credible employer/context signals.",
    "Score calibration: make a 10 extremely rare (near-exceptional, almost no weaknesses), treat 8.5 as very strong, and place most resumes in the 6.0-7.5 range unless evidence is clearly stronger or weaker.",
    "Include score_rationale as one sentence max explaining why the resume earned its recruiter_score.",
    "Include top_fixes as exactly 3 items, ordered from highest to lowest impact on interview odds.",
    "Return valid JSON only. No markdown or commentary.",
    "Limits: strengths <= 8, issues <= 10, priority_rewrites 3-6, next_steps <= 8, recruiter_score 0-10 (one decimal allowed)."
  ];

  if (mode === "targeted") {
    base.push(
      "Because a job description is provided, you must include match_score (0-100), missing_keywords, and tailored_summary.",
      "Make the gap analysis concrete: compare resume evidence against role requirements and state what is missing or weak.",
      "Judge match by demonstrated paper evidence translating to the target role, not by generic claims."
    );
  }

  return base.join(" ");
};

const extractPdfText = async (file: File) => {
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  const parsed = await pdfParse(buffer);
  return (parsed.text || "").replace(/\s+/g, " ").trim();
};

export async function POST(req: Request) {
  try {
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "Server misconfigured: missing OPENAI_API_KEY." }, { status: 500 });
    }

    const form = await req.formData();
    const file = form.get("file");
    const resumeTextRaw = form.get("resumeText");
    const jobDescriptionRaw = form.get("jobDescription");
    const pastedResumeText = typeof resumeTextRaw === "string" ? resumeTextRaw.trim() : "";

    let resumeText = "";
    if (file instanceof File && file.size > 0) {
      if (!file.type.includes("pdf")) {
        return NextResponse.json({ error: "Uploaded file must be a PDF." }, { status: 400 });
      }

      try {
        resumeText = await extractPdfText(file);
      } catch {
        return NextResponse.json({ error: "Could not parse PDF. Please upload a valid PDF resume." }, { status: 400 });
      }
    } else {
      resumeText = pastedResumeText;
    }

    if (!resumeText) {
      return NextResponse.json(
        {
          error:
            "Please upload a text-based PDF or paste resume text. We could not find readable resume content."
        },
        { status: 400 }
      );
    }

    const jobDescription = typeof jobDescriptionRaw === "string" ? jobDescriptionRaw.trim() : "";
    const hasJobDescription = Boolean(jobDescription);
    const mode: ReviewMode = hasJobDescription ? "targeted" : "general";

    const userPrompt = hasJobDescription
      ? `Resume text:\n${resumeText}\n\nJob description:\n${jobDescription}`
      : `Resume text:\n${resumeText}\n\nNo job description was provided. Run a general recruiter-style review.`;

    const client = new OpenAI({ apiKey });
    const completion = await client.chat.completions.create({
      model: "gpt-4.1-mini",
      messages: [
        { role: "system", content: buildSystemPrompt(mode) },
        { role: "user", content: userPrompt }
      ],
      response_format: {
        type: "json_schema",
        json_schema: {
          name: mode === "targeted" ? "targeted_resume_review" : "general_resume_review",
          schema: mode === "targeted" ? targetedSchema : generalSchema,
          strict: true
        }
      },
      temperature: 0.2
    });

    const content = completion.choices[0]?.message?.content;
    if (!content) {
      return NextResponse.json({ error: "No response returned from AI reviewer." }, { status: 502 });
    }

    let parsed: unknown;
    try {
      parsed = JSON.parse(content);
    } catch {
      return NextResponse.json({ error: "AI response was not valid JSON." }, { status: 502 });
    }

    const result = normalizeReview(parsed, hasJobDescription);
    return NextResponse.json(result);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unexpected error.";
    return NextResponse.json({ error: `Review failed: ${message}` }, { status: 500 });
  }
}
