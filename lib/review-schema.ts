import { ReviewResponse } from "@/lib/types";

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

const cleanStringList = (value: unknown, maxItems: number): string[] => {
  if (!Array.isArray(value)) return [];
  return value
    .map((item) => (typeof item === "string" ? item.trim() : ""))
    .filter(Boolean)
    .slice(0, maxItems);
};

const cleanRewrites = (value: unknown) => {
  if (!Array.isArray(value)) return [];
  return value
    .map((item) => {
      const record = item as Record<string, unknown>;
      const original = typeof record?.original === "string" ? record.original.trim() : "";
      const improved = typeof record?.improved === "string" ? record.improved.trim() : "";
      const why = typeof record?.why === "string" ? record.why.trim() : "";
      if (!original || !improved || !why) return null;
      return { original, improved, why };
    })
    .filter((item): item is { original: string; improved: string; why: string } => Boolean(item))
    .slice(0, 6);
};

const cleanOneSentence = (value: unknown): string => {
  if (typeof value !== "string") return "";
  const text = value.trim().replace(/\s+/g, " ");
  if (!text) return "";
  const sentenceEnd = text.search(/[.!?](\s|$)/);
  if (sentenceEnd >= 0) {
    return text.slice(0, sentenceEnd + 1).trim();
  }
  return text;
};

export const normalizeReview = (raw: unknown, hasJobDescription: boolean): ReviewResponse => {
  const data = (raw ?? {}) as Record<string, unknown>;
  const recruiterScoreRaw = Number(data.recruiter_score);
  const recruiter_score = Number.isFinite(recruiterScoreRaw)
    ? Number(clamp(recruiterScoreRaw, 0, 10).toFixed(1))
    : 0;
  const score_rationale = cleanOneSentence(data.score_rationale);

  const topFixes = cleanStringList(data.top_fixes, 3);
  while (topFixes.length < 3) {
    topFixes.push("Strengthen your highest-impact bullets with clear outcomes and scope.");
  }

  const base = {
    recruiter_score,
    score_rationale,
    top_fixes: topFixes,
    strengths: cleanStringList(data.strengths, 8),
    issues: cleanStringList(data.issues, 10),
    priority_rewrites: cleanRewrites(data.priority_rewrites).slice(0, 6),
    next_steps: cleanStringList(data.next_steps, 8)
  };

  if (!hasJobDescription) {
    return base;
  }

  const matchScoreRaw = Number(data.match_score);
  const match_score = Number.isFinite(matchScoreRaw) ? Math.round(clamp(matchScoreRaw, 0, 100)) : 0;
  const tailored_summary =
    typeof data.tailored_summary === "string" ? data.tailored_summary.trim() : "";

  return {
    ...base,
    match_score,
    missing_keywords: cleanStringList(data.missing_keywords, 20),
    tailored_summary
  };
};
