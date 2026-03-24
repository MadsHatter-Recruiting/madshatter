import LogoTicker from "@/components/LogoTicker";
import ResumeReviewTool from "@/components/ResumeReviewTool";

export default function CandidatesPage() {
  return (
    <main
      id="top"
      className="bg-[radial-gradient(circle_at_0%_-10%,#dbeafe,transparent_36%),radial-gradient(circle_at_96%_2%,#d1fae5,transparent_40%),linear-gradient(to_bottom,#f8fafc,#f8fafc)] pb-20 pt-6 sm:pb-24 sm:pt-8"
    >
      <div className="section-shell">
        <header className="mb-6 rounded-2xl bg-white px-5 py-4 shadow-sm ring-1 ring-slate-200 sm:px-6">
          <div className="flex items-center justify-between gap-4">
            <a href="/" aria-label="The Mads Hatter" className="flex items-center gap-3">
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
              <a href="/pricing" className="transition hover:text-slate-900">
                Pricing
              </a>
              <a href="/mads" className="transition hover:text-slate-900">
                About Mads
              </a>
            </nav>
          </div>
        </header>

        <section className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200 sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-sky-700">For candidates</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            One candidate experience: resume, interview, and offer support
          </h1>
          <p className="mt-4 max-w-4xl text-base leading-7 text-slate-700">
            This side of Mads Hatter is for professionals who want direct, high-signal feedback and practical support
            to improve interview outcomes from first resume review through final offer discussion.
          </p>

          <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5">
            <p className="text-sm font-semibold text-slate-900">How to use this path</p>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Start with resume review, move into interview prep for your target role, then use negotiation support
              when offer conversations begin.
            </p>
          </div>

          <div className="mt-6 rounded-xl border border-slate-200 p-5">
            <p className="text-sm font-semibold text-slate-900">How it works</p>
            <div className="mt-3 grid gap-3 md:grid-cols-3">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Step 1</p>
                <p className="mt-1 text-sm font-semibold text-slate-900">Review your resume</p>
                <p className="mt-1 text-sm text-slate-600">Get structured feedback and clear fixes based on recruiter signal.</p>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Step 2</p>
                <p className="mt-1 text-sm font-semibold text-slate-900">Prep for interviews</p>
                <p className="mt-1 text-sm text-slate-600">Train your story, leadership signals, and answer structure for target roles.</p>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Step 3</p>
                <p className="mt-1 text-sm font-semibold text-slate-900">Negotiate your offer</p>
                <p className="mt-1 text-sm text-slate-600">Use a clear strategy to advocate for compensation with credibility.</p>
              </div>
            </div>
          </div>

          <div className="mt-6 overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
            <img
              src="/interview-roadmap-visual.svg"
              alt="Roadmap from resume to offer"
              className="h-44 w-full object-cover sm:h-56"
            />
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <a href="#review" className="rounded-xl border border-sky-200 bg-sky-50/40 p-5 transition hover:border-sky-300">
              <h2 className="text-base font-semibold text-slate-900">Resume Review Tool</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Upload a resume, add an optional job description, and get structured feedback fast.
              </p>
            </a>
            <a
              href="/interview"
              className="rounded-xl border border-emerald-200 bg-emerald-50/40 p-5 transition hover:border-emerald-300"
            >
              <h2 className="text-base font-semibold text-slate-900">Interview Prep</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Prepare for high-stakes interviews using real hiring-debrief patterns and signal frameworks.
              </p>
            </a>
            <a
              href="/negotiation"
              className="rounded-xl border border-amber-200 bg-amber-50/40 p-5 transition hover:border-amber-300"
            >
              <h2 className="text-base font-semibold text-slate-900">Offer Negotiation</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Learn how compensation decisions are made internally and how to negotiate with confidence.
              </p>
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#review" className="rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white">
              Start Resume Review
            </a>
          </div>

          <p className="mt-4 text-sm text-slate-600">
            Use the floating button to book a free consultation and identify the best support path.
          </p>
        </section>

        <ResumeReviewTool />
        <LogoTicker />
      </div>
    </main>
  );
}
