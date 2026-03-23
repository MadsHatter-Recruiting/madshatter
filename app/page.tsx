"use client";

import { FormEvent, useMemo, useState } from "react";
import { isTargetedReview, ReviewResponse } from "@/lib/types";
import LogoTicker from "@/components/LogoTicker";

const LINKEDIN_URL = "https://www.linkedin.com/in/madelinerodz/";
const CALENDLY_URL = "https://calendly.com/madshatter/30min";

const FEATURES = [
  {
    title: "Resume Review",
    href: "#review",
    description: "See how your resume reads through a hiring manager's lens.",
    cardClass: "border-sky-100 hover:border-sky-300 hover:bg-sky-50/50",
    titleClass: "text-sky-800"
  },
  {
    title: "Interview Prep",
    href: "/interview",
    description: "Prepare for interviews using real hiring patterns and debrief insights.",
    cardClass: "border-emerald-100 hover:border-emerald-300 hover:bg-emerald-50/50",
    titleClass: "text-emerald-800"
  },
  {
    title: "Offer Negotiation",
    href: "/negotiation",
    description: "Understand how compensation decisions are made and how to negotiate effectively.",
    cardClass: "border-amber-100 hover:border-amber-300 hover:bg-amber-50/50",
    titleClass: "text-amber-800"
  }
] as const;

type ApiError = { error?: string };

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-2xl font-semibold tracking-tight text-slate-900">{children}</h2>
);

const BulletList = ({ items }: { items: string[] }) => (
  <ul className="space-y-2 text-sm leading-6 text-slate-700">
    {items.map((item, idx) => (
      <li className="flex gap-2" key={`${item}-${idx}`}>
        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

export default function HomePage() {
  const [file, setFile] = useState<File | null>(null);
  const [resumeText, setResumeText] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState<ReviewResponse | null>(null);

  const hasJobTarget = useMemo(() => Boolean(jobDescription.trim()), [jobDescription]);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setResult(null);

    if (!file && !resumeText.trim()) {
      setError("Please upload a PDF resume or paste resume text.");
      return;
    }

    try {
      setLoading(true);
      const formData = new FormData();
      if (file) {
        formData.append("file", file);
      }
      formData.append("resumeText", resumeText);
      formData.append("jobDescription", jobDescription);

      const response = await fetch("/api/review", {
        method: "POST",
        body: formData
      });

      const data = (await response.json()) as ReviewResponse & ApiError;
      if (!response.ok) {
        setError(data.error || "Could not review resume right now.");
        return;
      }

      setResult(data);
    } catch {
      setError("Unexpected error while reviewing. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main
      id="top"
      className="bg-gradient-to-b from-sky-50/60 via-slate-50 to-emerald-50/40 pb-20 pt-6 sm:pb-24 sm:pt-8"
    >
      <div className="section-shell">
        <header className="mb-6 rounded-2xl bg-white px-5 py-4 shadow-sm ring-1 ring-slate-200 sm:px-6">
          <div className="flex items-center justify-between gap-4">
            <a href="#top" aria-label="The Mads Hatter" className="flex items-center gap-3">
              <img src="/mads-hatter-mark.svg" alt="MH" className="h-11 w-11" />
              <span className="text-sm font-semibold tracking-wide text-slate-900">Mads Hatter</span>
            </a>

            <nav className="hidden items-center gap-5 text-sm font-medium text-slate-600 md:flex">
              <a href="/" className="transition hover:text-slate-900">
                Home
              </a>
              <a href="/candidates" className="transition hover:text-slate-900">
                Resume Help
              </a>
              <a href="/advisory" className="transition hover:text-slate-900">
                Advisory
              </a>
              <a href="/#review" className="transition hover:text-slate-900">
                Resume Tool
              </a>
              <a href="/interview" className="transition hover:text-slate-900">
                Interview Prep
              </a>
              <a href="/negotiation" className="transition hover:text-slate-900">
                Offer Negotiation
              </a>
              <a href="/pricing" className="transition hover:text-slate-900">
                Pricing
              </a>
              <a href="/mads" className="transition hover:text-slate-900">
                About Mads
              </a>
            </nav>

            <details className="relative md:hidden">
              <summary className="list-none cursor-pointer rounded-lg border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-700">
                Menu
              </summary>
              <nav className="absolute right-0 z-20 mt-2 w-52 rounded-xl bg-white p-2 shadow-lg ring-1 ring-slate-200">
                <a href="/" className="block rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-slate-50">
                  Home
                </a>
                <a href="/candidates" className="block rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-slate-50">
                  Resume Help
                </a>
                <a href="/advisory" className="block rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-slate-50">
                  Advisory
                </a>
                <a href="/#review" className="block rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-slate-50">
                  Resume Tool
                </a>
                <a href="/interview" className="block rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-slate-50">
                  Interview Prep
                </a>
                <a
                  href="/negotiation"
                  className="block rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
                >
                  Offer Negotiation
                </a>
                <a href="/pricing" className="block rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-slate-50">
                  Pricing
                </a>
                <a href="/mads" className="block rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-slate-50">
                  About Mads
                </a>
              </nav>
            </details>
          </div>
        </header>

        <section className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200 sm:p-10">
          <div className="grid gap-8 md:grid-cols-2 md:gap-10">
            <div>
              <img src="/mads-hatter-logo.png" alt="Mads Hatter logo" className="mb-6 w-full max-w-md" />
              <p className="max-w-4xl text-base leading-7 text-slate-600">Built from real hiring decisions.</p>
            </div>
            <div className="text-base leading-7 text-slate-600">
              <p>
                Built by Mads Rodriguez, a talent leader who has helped scale teams at Sui Foundation, Polygon,
                Robinhood, DoorDash, and Yelp.
              </p>
              <p className="mt-3">
                She has hired across every level of an organization &mdash; from entry-level roles to senior
                leadership and C-suite hires &mdash; and has partnered directly with founders and executives to build
                hiring strategy and teams from zero.
              </p>
              <div className="mt-6">
                <a
                  href="/mads"
                  className="inline-flex rounded-lg border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400"
                >
                  More about Mads
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-6 rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200 sm:p-10">
          <SectionTitle>Choose your path</SectionTitle>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            The Mads Hatter supports both sides: startup teams that need hiring advisory support and candidates who
            want stronger resume and interview outcomes.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <a
              href="/advisory"
              className="rounded-xl border border-emerald-200 bg-emerald-50/40 p-5 transition hover:border-emerald-300"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">For businesses</p>
              <h3 className="mt-2 text-lg font-semibold text-slate-900">Startup Hiring Advisory</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Build scalable, data-driven recruiting foundations with support tailored for seed and early-stage
                teams.
              </p>
              <p className="mt-3 text-sm font-medium text-emerald-800">View advisory work</p>
            </a>
            <a
              href="/candidates"
              className="rounded-xl border border-sky-200 bg-sky-50/40 p-5 transition hover:border-sky-300"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-sky-700">For candidates</p>
              <h3 className="mt-2 text-lg font-semibold text-slate-900">Resume + Interview Support</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Use the resume tool, interview prep, and negotiation support to improve your odds of landing the role.
              </p>
              <p className="mt-3 text-sm font-medium text-sky-800">Get resume help</p>
            </a>
          </div>
        </section>

        <LogoTicker />

        <section className="mt-6 rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200 sm:p-10">
          <SectionTitle>What you can use this for</SectionTitle>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {FEATURES.map((feature) => (
              <a
                key={feature.title}
                href={feature.href}
                className={`group rounded-xl border p-4 transition ${feature.cardClass}`}
              >
                <h3 className={`text-base font-semibold ${feature.titleClass}`}>{feature.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{feature.description}</p>
                <p className="mt-3 text-xs font-medium text-slate-400 transition group-hover:text-slate-600">
                  Open
                </p>
              </a>
            ))}
          </div>

          <div className="mt-8 border-t border-slate-200 pt-6">
            <p className="mx-auto max-w-3xl text-center text-sm leading-6 text-slate-500">
              Built from thousands of resumes reviewed, hundreds of interviews run, and the hiring debriefs where
              final decisions get made.
            </p>
          </div>
        </section>

        <section id="review" className="mt-6 rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200 sm:p-10">
          <SectionTitle>Try the tool</SectionTitle>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Used by recruiters who have hired thousands of candidates across high-growth technology companies.
          </p>
          <form onSubmit={onSubmit} className="mt-6 space-y-5">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">PDF Resume</label>
              <input
                type="file"
                accept="application/pdf"
                onChange={(event) => setFile(event.target.files?.[0] ?? null)}
                className="block w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-700 file:mr-3 file:rounded-md file:border-0 file:bg-slate-100 file:px-3 file:py-2 file:text-sm file:font-medium file:text-slate-700"
              />
            </div>

            <div>
              <label htmlFor="resumeText" className="mb-2 block text-sm font-medium text-slate-700">
                Paste Resume Text (optional)
              </label>
              <textarea
                id="resumeText"
                value={resumeText}
                onChange={(event) => setResumeText(event.target.value)}
                rows={8}
                placeholder="Paste your resume text here if you prefer not to upload a PDF..."
                className="block w-full rounded-lg border border-slate-300 px-3 py-2 text-sm leading-6 text-slate-700 placeholder:text-slate-400 focus:border-sky-500 focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="jobDescription" className="mb-2 block text-sm font-medium text-slate-700">
                Job Target Mode (optional)
              </label>
              <textarea
                id="jobDescription"
                value={jobDescription}
                onChange={(event) => setJobDescription(event.target.value)}
                rows={7}
                placeholder="Paste a job description to get match score + gap analysis..."
                className="block w-full rounded-lg border border-slate-300 px-3 py-2 text-sm leading-6 text-slate-700 placeholder:text-slate-400 focus:border-sky-500 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="inline-flex rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Reviewing..." : "Review Resume"}
            </button>
            <p className="text-xs text-slate-500">
              Your resume is analyzed to generate feedback. Don&apos;t upload sensitive personal info.
            </p>
          </form>

          {error ? <p className="mt-5 rounded-lg bg-red-50 p-3 text-sm text-red-700">{error}</p> : null}

          {result ? (
            <div className="mt-8 space-y-7 border-t border-slate-200 pt-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl bg-slate-100 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Recruiter Score</p>
                  <p className="mt-2 text-3xl font-bold text-slate-900">{result.recruiter_score.toFixed(1)} / 10</p>
                  <p className="mt-2 text-xs leading-5 text-slate-600">{result.score_rationale}</p>
                </div>
                {isTargetedReview(result) ? (
                  <div className="rounded-xl bg-sky-50 p-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-sky-700">Match Score</p>
                    <p className="mt-2 text-3xl font-bold text-sky-900">{result.match_score} / 100</p>
                  </div>
                ) : null}
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900">Top Fixes</h3>
                <div className="mt-3">
                  <BulletList items={result.top_fixes} />
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900">Strengths</h3>
                <div className="mt-3">
                  <BulletList items={result.strengths} />
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900">Issues</h3>
                <div className="mt-3">
                  <BulletList items={result.issues} />
                </div>
              </div>

              {isTargetedReview(result) ? (
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">Missing Keywords</h3>
                  <div className="mt-3">
                    <BulletList items={result.missing_keywords} />
                  </div>
                </div>
              ) : null}

              <div>
                <h3 className="text-lg font-semibold text-slate-900">Priority Rewrites</h3>
                <div className="mt-3 space-y-4">
                  {result.priority_rewrites.map((rewrite, index) => (
                    <article key={`${rewrite.original}-${index}`} className="rounded-lg border border-slate-200 p-4">
                      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Original</p>
                      <p className="mt-1 text-sm leading-6 text-slate-700">{rewrite.original}</p>
                      <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-slate-500">Improved</p>
                      <p className="mt-1 text-sm leading-6 text-slate-900">{rewrite.improved}</p>
                      <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-slate-500">Why</p>
                      <p className="mt-1 text-sm leading-6 text-slate-700">{rewrite.why}</p>
                    </article>
                  ))}
                </div>
              </div>

              {isTargetedReview(result) ? (
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">Tailored Summary</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-700">{result.tailored_summary}</p>
                </div>
              ) : null}

              <div>
                <h3 className="text-lg font-semibold text-slate-900">Next Steps</h3>
                <div className="mt-3">
                  <BulletList items={result.next_steps} />
                </div>
              </div>

              <div className="rounded-xl bg-slate-900 p-6 text-white">
                <h4 className="text-xl font-semibold">Want me to fix it with you live?</h4>
                <ul className="mt-4 space-y-2 text-sm text-slate-200">
                  <li>We&apos;ll rewrite your top 5 bullets together</li>
                  <li>We&apos;ll tailor it to your target role</li>
                  <li>You&apos;ll leave with an interview-ready version</li>
                </ul>
                <div className="mt-5 flex flex-wrap gap-3">
                  <a
                    href={CALENDLY_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-slate-900"
                  >
                    Chat with Mads
                  </a>
                  <a
                    href={LINKEDIN_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-lg border border-slate-500 px-4 py-2 text-sm font-semibold text-slate-100"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          ) : null}

          {!result && !loading && hasJobTarget ? (
            <p className="mt-5 text-sm text-slate-500">
              Job Target Mode is active. You&apos;ll get a match score, keyword gaps, and tailored summary.
            </p>
          ) : null}
        </section>

        <footer className="mt-10 text-center text-sm text-slate-500">
          <p className="mb-3 text-xs leading-5 text-slate-500">
            This tool provides hiring insight based on industry experience and does not guarantee job placement.
          </p>
          <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="underline-offset-2 hover:underline">
            LinkedIn
          </a>
          <span className="mx-2">•</span>
          <a href={CALENDLY_URL} target="_blank" rel="noreferrer" className="underline-offset-2 hover:underline">
            Chat with Mads
          </a>
        </footer>
      </div>
    </main>
  );
}
