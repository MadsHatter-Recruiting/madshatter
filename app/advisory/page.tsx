const CALENDLY_URL = "https://calendly.com/madshatter/30min";

const SUPPORTED_ORGS = ["DoorDash", "WondersCo", "Eventbrite", "GoPuff", "Instawork", "Exact Data"] as const;

export default function AdvisoryPage() {
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
          <p className="text-xs font-semibold uppercase tracking-widest text-emerald-700">Strategic Advisory</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Hiring advisory for seed and early-stage startups
          </h1>
          <p className="mt-4 max-w-4xl text-base leading-7 text-slate-700">
            I partner with seed and early-stage startups to build scalable, data-driven recruiting foundations that
            attract top talent from day one. With a strategic focus on hiring velocity, market alignment, and founder
            enablement, I help teams hire smarter, not just faster.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-slate-200 p-4">
              <p className="text-xs font-medium uppercase tracking-wide text-slate-500">Role</p>
              <p className="mt-2 text-sm font-semibold text-slate-900">Strategic Advisor</p>
            </div>
            <div className="rounded-xl border border-slate-200 p-4">
              <p className="text-xs font-medium uppercase tracking-wide text-slate-500">Company</p>
              <p className="mt-2 text-sm font-semibold text-slate-900">MadsHatter LLC (Self-employed)</p>
            </div>
            <div className="rounded-xl border border-slate-200 p-4">
              <p className="text-xs font-medium uppercase tracking-wide text-slate-500">Since</p>
              <p className="mt-2 text-sm font-semibold text-slate-900">June 2017</p>
            </div>
          </div>

          <div className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-5">
            <h2 className="text-lg font-semibold text-slate-900">Organizations I have supported</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700">{SUPPORTED_ORGS.join(" • ")}</p>
          </div>

          <div className="mt-8 rounded-xl border border-slate-200 p-5">
            <h2 className="text-lg font-semibold text-slate-900">How I help</h2>
            <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
              <li>• Build recruiting infrastructure from zero (process, scorecards, interview loops)</li>
              <li>• Calibrate role architecture, level expectations, and market realities</li>
              <li>• Improve hiring velocity while preserving quality bar and decision rigor</li>
              <li>• Coach founders and leaders on interview quality and close strategy</li>
            </ul>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white"
            >
              Book Advisory Call
            </a>
            <a href="/" className="rounded-lg border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700">
              Back to Home
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
