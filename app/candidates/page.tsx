const CALENDLY_URL = "https://calendly.com/madshatter/30min";

export default function CandidatesPage() {
  return (
    <main id="top" className="pb-20 pt-6 sm:pb-24 sm:pt-8">
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
            Resume, interview, and offer support
          </h1>
          <p className="mt-4 max-w-4xl text-base leading-7 text-slate-700">
            This side of Mads Hatter is for professionals who want direct, high-signal feedback and practical support
            to improve interview outcomes.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <a href="/#review" className="rounded-xl border border-sky-200 bg-sky-50/40 p-5 transition hover:border-sky-300">
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
            <a href="/#review" className="rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white">
              Start Resume Review
            </a>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700"
            >
              Book a Session
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
