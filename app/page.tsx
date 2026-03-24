"use client";

const LINKEDIN_URL = "https://www.linkedin.com/in/madelinerodz/";

const PROOF_METRICS = ["8+ years advisory", "25% faster time-to-hire", "+30% qualified applicant lift"] as const;

const FEATURES = [
  {
    title: "Resume Review",
    href: "/candidates#review",
    description: "See how your experience reads in a real hiring scan, and what needs tightening before interviews.",
    accent: "border-sky-300",
  },
  {
    title: "Interview Prep",
    href: "/interview",
    description: "Prepare for high-signal questions, delivery, and debrief criteria used by hiring teams.",
    accent: "border-emerald-300",
  },
  {
    title: "Offer Negotiation",
    href: "/negotiation",
    description: "Understand compensation mechanics and negotiate with clarity while preserving trust.",
    accent: "border-amber-300",
  },
] as const;

export default function HomePage() {
  return (
    <main
      id="top"
      className="bg-[radial-gradient(circle_at_10%_-15%,#e0f2fe,transparent_34%),radial-gradient(circle_at_85%_0%,#d1fae5,transparent_32%),linear-gradient(to_bottom,#f8fafc,#f8fafc)] pb-20 pt-6 sm:pb-24 sm:pt-8"
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
                  About Mads
                </a>
              </nav>
            </details>
          </div>
        </header>

        <section className="mb-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="grid gap-0 lg:grid-cols-[1.2fr_1fr]">
            <div className="border-b border-slate-200 p-5 sm:p-7 lg:border-b-0 lg:border-r">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">The Mads Hatter</p>
              <h1 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-4xl">
                Built from real hiring decisions.
              </h1>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600">
                Candidate support and startup advisory shaped by how hiring decisions are actually made in fast-growth
                environments.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="/candidates"
                  className="rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  Candidate Support
                </a>
                <a
                  href="/advisory"
                  className="rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-slate-400"
                >
                  Advisory Services
                </a>
              </div>
            </div>

            <div className="flex flex-col justify-between bg-slate-50/60 p-5 sm:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Founder</p>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                Founder &amp; CEO Mads Rodriguez has helped scale teams at Sui, Polygon, Robinhood, DoorDash, and Yelp
                and advises founders on building talent systems from zero.
              </p>
              <a
                href="/mads"
                className="mt-6 inline-flex w-fit rounded-lg border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-slate-400"
              >
                About the Founder
              </a>
            </div>
          </div>
        </section>

        <section className="mb-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">What You Can Use This For</p>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {FEATURES.map((feature) => (
              <a
                key={feature.title}
                href={feature.href}
                className={`group rounded-lg border-l-4 border-slate-200 bg-slate-50/50 p-4 transition hover:bg-white ${feature.accent}`}
              >
                <p className="text-base font-semibold text-slate-900 group-hover:underline">{feature.title}</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">{feature.description}</p>
              </a>
            ))}
          </div>
          <div className="mt-5 border-t border-slate-200 pt-5">
            <p className="text-center text-xs uppercase tracking-wide text-slate-500">
              Trained on real hiring decisions from teams at
            </p>
            <p className="mt-2 text-center text-base tracking-wide text-slate-700">
              Sui • Polygon • Robinhood • DoorDash • Yelp
            </p>
          </div>
        </section>

        <section className="mb-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Proof</p>
          <div className="mt-4 flex flex-wrap gap-x-8 gap-y-3">
            {PROOF_METRICS.map((metric) => (
              <p key={metric} className="text-sm font-medium text-slate-700">
                {metric}
              </p>
            ))}
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
