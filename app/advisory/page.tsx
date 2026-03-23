
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
            High-impact recruiting leader and talent operator focused on building and scaling talent functions from
            the ground up. I help founders and executive teams translate business strategy into hiring roadmaps,
            sourcing architecture, and org design that supports rapid, high-quality growth.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-slate-200 p-4">
              <p className="text-xs font-medium uppercase tracking-wide text-slate-500">Role</p>
              <p className="mt-2 text-sm font-semibold text-slate-900">Strategic Advisor</p>
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
            <h2 className="text-lg font-semibold text-slate-900">What this looks like in practice</h2>
            <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
              <li>
                • Built Sui Foundation&apos;s talent function from zero as first Head of Talent, scaling roughly 30 to
                75 FTE while supporting 25+ contractors.
              </li>
              <li>
                • Delivered 50+ hires across engineering, product, GTM, community, legal, compliance, and operations.
              </li>
              <li>
                • At Polygon, reduced average time-to-fill from 210 days to 42 days and improved top-of-funnel
                diversity by 23%.
              </li>
              <li>
                • At DoorDash, ran pilots that improved time-to-fill by up to 53% and supported org-wide rollout.
              </li>
              <li>
                • Built and coached recruiting teams, trained interviewers, and partnered directly with founders and
                C-suite leaders on hiring strategy.
              </li>
            </ul>
          </div>

          <div className="mt-8 rounded-xl border border-slate-200 p-5">
            <h2 className="text-lg font-semibold text-slate-900">Selected advisory case studies</h2>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              <article className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">Sui Foundation</p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-slate-500">Problem</p>
                <p className="mt-1 text-sm text-slate-700">No dedicated recruiting function during rapid growth.</p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-slate-500">Action</p>
                <p className="mt-1 text-sm text-slate-700">
                  Built talent ops from zero, led full-cycle hiring, and partnered on founder-level headcount planning.
                </p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-slate-500">Outcome</p>
                <p className="mt-1 text-sm text-slate-700">Scaled from ~30 to 75 FTE while supporting 25+ contractors.</p>
              </article>

              <article className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">Polygon</p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-slate-500">Problem</p>
                <p className="mt-1 text-sm text-slate-700">Slow hiring cycle and inconsistent recruiting process globally.</p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-slate-500">Action</p>
                <p className="mt-1 text-sm text-slate-700">
                  Implemented global recruiting strategy, KPIs/OKRs, and standardized interview process.
                </p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-slate-500">Outcome</p>
                <p className="mt-1 text-sm text-slate-700">
                  Reduced average time-to-fill from 210 days to 42 days and increased diversity at top of funnel by 23%.
                </p>
              </article>

              <article className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">DoorDash</p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-slate-500">Problem</p>
                <p className="mt-1 text-sm text-slate-700">Need to scale GTM hiring quality and speed across multiple verticals.</p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-slate-500">Action</p>
                <p className="mt-1 text-sm text-slate-700">
                  Led recruiting pilots, built reporting strategy, and partnered on process/training rollouts.
                </p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-slate-500">Outcome</p>
                <p className="mt-1 text-sm text-slate-700">Improved time-to-fill by an average of 53% in pilot roles.</p>
              </article>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="/" className="rounded-lg border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700">
              Back to Home
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
