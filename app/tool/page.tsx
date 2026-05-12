import type { Metadata } from "next";
import ResumeReviewTool from "@/components/ResumeReviewTool";

export const metadata: Metadata = {
  title: "Mads Hatter | Resume Review Tool",
  description: "Standalone resume review tool built from real hiring decisions."
};

export default function ToolPage() {
  return (
    <main
      id="top"
      className="bg-[radial-gradient(circle_at_0%_-10%,#dbeafe,transparent_36%),radial-gradient(circle_at_96%_2%,#d1fae5,transparent_40%),linear-gradient(to_bottom,#f8fafc,#f8fafc)] min-h-screen pb-20 pt-6 sm:pb-24 sm:pt-8"
    >
      <div className="section-shell max-w-4xl">
        <header className="mb-6 rounded-2xl bg-white px-5 py-4 shadow-sm ring-1 ring-slate-200 sm:px-6">
          <div className="flex items-center gap-3">
            <img src="/mads-hatter-mark.svg" alt="MH" className="h-11 w-11" />
            <div>
              <p className="text-sm font-semibold tracking-wide text-slate-900">Mads Hatter</p>
              <p className="text-xs uppercase tracking-[0.16em] text-slate-500">Resume Review Tool</p>
            </div>
          </div>
        </header>

        <section className="mb-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="grid gap-0 md:grid-cols-[1.1fr_0.9fr]">
            <div className="border-b border-slate-200 p-6 sm:p-8 md:border-b-0 md:border-r">
              <p className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-600">
                Standalone Access
              </p>
              <h1 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                Review a resume the way a hiring team actually screens it.
              </h1>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600">
                Upload a PDF or paste resume text to get a structured recruiter-style review, score rationale,
                highest-impact fixes, and realistic rewrites.
              </p>
            </div>
            <div className="bg-slate-950 p-6 text-white sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">What You Get</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-100">
                <li>Recruiter score with one-sentence rationale</li>
                <li>Top fixes ordered by impact</li>
                <li>Strengths, issues, and rewrite guidance</li>
                <li>Match score and keyword gaps in job-target mode</li>
              </ul>
            </div>
          </div>
        </section>

        <ResumeReviewTool standalone />
      </div>
    </main>
  );
}
