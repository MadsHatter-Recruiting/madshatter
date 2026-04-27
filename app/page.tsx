"use client";

const LINKEDIN_URL = "https://www.linkedin.com/company/113022676/";

const CREDIBILITY_POINTS = [
  "0→1 recruiting systems",
  "Executive and founder advisory",
  "Candidate strategy and negotiation",
] as const;

const PRACTICE_AREAS = [
  {
    title: "Candidate Strategy",
    href: "/candidates#review",
    description: "Resume positioning, recruiter-style review, and practical edits tied to interview outcomes.",
  },
  {
    title: "Interview Prep",
    href: "/interview",
    description: "Preparation built around signal, hiring debrief patterns, and delivery under pressure.",
  },
  {
    title: "Offer Negotiation",
    href: "/negotiation",
    description: "Compensation framing, leverage strategy, and negotiation support without losing trust.",
  },
  {
    title: "Talent Advisory",
    href: "/advisory",
    description: "Hiring strategy, recruiting systems, and org design for teams building from zero.",
  },
] as const;

export default function HomePage() {
  return (
    <main
      id="top"
      className="relative overflow-hidden bg-[radial-gradient(circle_at_0%_-10%,#dbeafe,transparent_36%),radial-gradient(circle_at_96%_2%,#d1fae5,transparent_40%),linear-gradient(to_bottom,#f8fafc,#f8fafc)] pb-20 pt-6 sm:pb-24 sm:pt-8"
    >
      <div className="pointer-events-none absolute -left-24 top-24 h-56 w-56 rounded-full bg-sky-200/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 top-44 h-72 w-72 rounded-full bg-emerald-200/35 blur-3xl" />
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
              <a href="/candidates#review" className="transition hover:text-slate-900">
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
                About Us
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
                <a
                  href="/candidates#review"
                  className="block rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
                >
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
                  About Us
                </a>
              </nav>
            </details>
          </div>
        </header>

        <section className="mb-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="grid gap-0 lg:grid-cols-[1.2fr_0.95fr]">
            <div className="border-b border-slate-200 p-6 sm:p-10 lg:border-b-0 lg:border-r">
              <p className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-600">
                The Mads Hatter
              </p>
              <h1 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-5xl">
                Talent advisory and candidate strategy built from real hiring decisions.
              </h1>
              <p className="mt-5 max-w-2xl text-[15px] leading-7 text-slate-600">
                Mads Hatter helps companies build stronger hiring systems and helps candidates position themselves with
                more clarity, leverage, and credibility.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="/advisory"
                  className="rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-800"
                >
                  Explore Advisory
                </a>
                <a
                  href="/candidates"
                  className="rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-400"
                >
                  Candidate Services
                </a>
              </div>
              <div className="mt-8 grid gap-4 border-t border-slate-200 pt-6 sm:grid-cols-3">
                {CREDIBILITY_POINTS.map((point) => (
                  <p key={point} className="text-sm font-medium text-slate-700">
                    {point}
                  </p>
                ))}
              </div>
            </div>

            <div className="relative bg-slate-950 p-6 text-white sm:p-10">
              <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-sky-300/25 blur-3xl" />
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">Practice</p>
              <div className="mt-4 space-y-5">
                <div className="border-b border-white/10 pb-4">
                  <p className="text-sm font-semibold text-white">Advisory</p>
                  <p className="mt-2 text-sm leading-7 text-slate-200">
                    Partnership on hiring strategy, recruiting operations, and organizational buildout.
                  </p>
                </div>
                <div className="border-b border-white/10 pb-4">
                  <p className="text-sm font-semibold text-white">Candidate Services</p>
                  <p className="mt-2 text-sm leading-7 text-slate-200">
                    Direct support across resume review, interview preparation, and offer negotiation.
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Operating Context</p>
                  <p className="mt-2 text-sm leading-7 text-slate-200">
                    Experience across high-growth technology, leadership hiring, and 0→1 recruiting buildouts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-3 border-b border-slate-200 pb-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Practice Areas</p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">Focused support across both sides of hiring</h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-slate-600">
              The firm is structured around a small number of focused engagements rather than broad generalist services.
            </p>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {PRACTICE_AREAS.map((feature) => (
              <a
                key={feature.title}
                href={feature.href}
                className="group rounded-xl border border-slate-200 bg-slate-50/40 p-5 transition hover:-translate-y-0.5 hover:border-slate-300 hover:bg-white"
              >
                <p className="text-base font-semibold text-slate-900">{feature.title}</p>
                <p className="mt-3 text-sm leading-6 text-slate-600">{feature.description}</p>
              </a>
            ))}
          </div>
          <div className="mt-5 border-t border-slate-200 pt-5">
            <p className="text-center text-xs uppercase tracking-wide text-slate-500">
              Experience across high-growth teams including
            </p>
            <p className="mt-2 text-center text-base tracking-wide text-slate-700">
              Sui • Polygon • Robinhood • DoorDash • Yelp • Instawork • GoPuff • Habitat Company • Swoon
            </p>
          </div>
        </section>

        <section className="mb-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-3 border-b border-slate-200 pb-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Engagement Paths</p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">Start with the context that fits you</h2>
            </div>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <a
              href="/candidates"
              className="rounded-xl border border-slate-200 bg-white p-6 transition hover:-translate-y-0.5 hover:border-slate-300"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Candidates</p>
              <p className="mt-2 text-lg font-semibold text-slate-900">Positioning, preparation, and negotiation</p>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Structured support for professionals who want sharper materials, stronger interview performance, and
                better offer outcomes.
              </p>
            </a>
            <a
              href="/advisory"
              className="rounded-xl border border-slate-200 bg-white p-6 transition hover:-translate-y-0.5 hover:border-slate-300"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Companies</p>
              <p className="mt-2 text-lg font-semibold text-slate-900">Hiring systems, search strategy, and org design</p>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Advisory for founders and leadership teams building recruiting infrastructure and making higher-quality
                hiring decisions.
              </p>
            </a>
          </div>
        </section>

        <section className="mb-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-3 border-b border-slate-200 pb-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">About Us</p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">
                Built for hiring decisions that need more signal and less noise
              </h2>
            </div>
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="space-y-3 text-sm leading-7 text-slate-600">
              <p>
                Mads Hatter operates at the intersection of talent advisory and candidate strategy. The work is shaped
                by real hiring environments where speed, judgment, and signal matter.
              </p>
              <p>
                The service is designed for two groups: companies building stronger hiring systems and professionals
                who want sharper positioning, better preparation, and stronger negotiation outcomes.
              </p>
            </div>
            <div className="space-y-3 text-sm leading-7 text-slate-600">
              <p>
                Rather than broad coaching or generic consulting, the approach stays focused on practical decisions:
                role calibration, interview readiness, recruiting structure, and how hiring judgment works in the
                market.
              </p>
              <p>
                Every engagement is built to improve clarity, tighten execution, and increase confidence on both sides
                of the hiring process.
              </p>
            </div>
          </div>
        </section>

        <footer className="mt-10 text-center text-sm text-slate-500">
          <p className="mb-3 text-xs leading-5 text-slate-500">
            This tool provides hiring insight based on industry experience and does not guarantee job placement.
          </p>
          <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="underline-offset-2 hover:underline">
            LinkedIn
          </a>
        </footer>
      </div>
    </main>
  );
}
