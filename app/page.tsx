"use client";

const LINKEDIN_URL = "https://www.linkedin.com/in/madelinerodz/";
const CALENDLY_URL = "https://calendly.com/madshatter/30min";

const PROOF_METRICS = [
  { label: "Recruiting built from zero", value: "0 \u2192 1 systems" },
  { label: "Time-to-fill improvement", value: "210d \u2192 42d" },
  { label: "Advisory experience", value: "8+ years" }
] as const;

type ApiError = { error?: string };

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-2xl font-semibold tracking-tight text-slate-900">{children}</h2>
);

export default function HomePage() {
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

        <section className="sticky top-3 z-20 mb-6 rounded-2xl border border-slate-200 bg-white/95 px-4 py-3 shadow-sm backdrop-blur sm:px-6">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">Go to:</span>
            <a
              href="/candidates"
              className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1.5 text-xs font-semibold text-sky-800 transition hover:border-sky-300"
            >
              Candidate Support
            </a>
            <a
              href="/advisory"
              className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-800 transition hover:border-emerald-300"
            >
              Advisory Services
            </a>
            <a
              href="/candidates#review"
              className="rounded-full border border-slate-300 px-3 py-1.5 text-xs font-semibold text-slate-700 transition hover:border-slate-400"
            >
              Resume Tool
            </a>
          </div>
        </section>

        <section className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200 sm:p-10">
          <SectionTitle>Choose your path</SectionTitle>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Start here: pick the experience that fits you best.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <a
              href="/advisory"
              className="rounded-xl border border-emerald-200 bg-emerald-50/40 p-5 transition hover:border-emerald-300"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">For businesses</p>
              <h3 className="mt-2 text-lg font-semibold text-slate-900">Startup Hiring Advisory</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Strategic advisory for founders and leaders building recruiting foundations from zero.
              </p>
              <p className="mt-3 text-sm font-medium text-emerald-800">View advisory services</p>
            </a>
            <a
              href="/candidates"
              className="rounded-xl border border-sky-200 bg-sky-50/40 p-5 transition hover:border-sky-300"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-sky-700">For candidates</p>
              <h3 className="mt-2 text-lg font-semibold text-slate-900">Resume + Interview Support</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                One experience for resume review, interview prep, and offer negotiation support.
              </p>
              <p className="mt-3 text-sm font-medium text-sky-800">Get candidate support</p>
            </a>
          </div>
        </section>

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
              <p className="mt-3">
                She also advises seed and early-stage startups through MadsHatter LLC, helping teams design scalable,
                data-driven recruiting foundations and hire with stronger speed, signal, and market alignment.
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

        <section className="mt-6 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">
          <div className="grid gap-3 sm:grid-cols-3">
            {PROOF_METRICS.map((metric) => (
              <div key={metric.label} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{metric.label}</p>
                <p className="mt-1 text-2xl font-bold text-slate-900">{metric.value}</p>
              </div>
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
          <span className="mx-2">•</span>
          <a href={CALENDLY_URL} target="_blank" rel="noreferrer" className="underline-offset-2 hover:underline">
            Chat with Mads
          </a>
        </footer>
      </div>
    </main>
  );
}
