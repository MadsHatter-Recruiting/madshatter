
const SUPPORTED_ORGS = [
  "Wonders",
  "DoorDash",
  "Eventbrite",
  "Exact Data",
  "Instawork",
  "GoPuff",
  "Habitat Company",
  "Swoon",
] as const;

export default function AdvisoryPage() {
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
                • Partner with founders and executive teams on hiring roadmaps, role calibration, and search strategy.
              </li>
              <li>
                • Build recruiting systems, interview design, and tech stacks that improve speed, signal, and process consistency.
              </li>
              <li>
                • Launch targeted recruiting programs that improve candidate quality, hiring efficiency, and diversity outcomes.
              </li>
              <li>
                • Step in on a contract or advisory basis when a team needs senior recruiting judgment without a full-time buildout.
              </li>
            </ul>
          </div>

          <div className="mt-8 rounded-xl border border-slate-200 p-5">
            <h2 className="text-lg font-semibold text-slate-900">Capabilities and focus areas</h2>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <article className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">Talent Strategy</p>
                <ul className="mt-2 space-y-1 text-sm text-slate-700">
                  <li>• Hiring roadmap design aligned to business milestones</li>
                  <li>• Role calibration and leveling for critical hires</li>
                  <li>• Headcount planning and sequencing by priority</li>
                  <li>• Founder and executive partnership on hiring decisions</li>
                </ul>
              </article>
              <article className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">Execution Systems</p>
                <ul className="mt-2 space-y-1 text-sm text-slate-700">
                  <li>• 0→1 recruiting process and operating cadence</li>
                  <li>• Interview architecture, scorecards, and decision quality</li>
                  <li>• Funnel instrumentation, KPI design, and reporting</li>
                  <li>• ATS/workflow optimization for speed and consistency</li>
                </ul>
              </article>
              <article className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">Sourcing and Market Reach</p>
                <ul className="mt-2 space-y-1 text-sm text-slate-700">
                  <li>• Outbound-first sourcing architecture</li>
                  <li>• Talent market mapping and competitive targeting</li>
                  <li>• Employer narrative and role-positioning strategy</li>
                  <li>• Pipeline quality improvement across priority functions</li>
                </ul>
              </article>
              <article className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">Org and Team Scaling</p>
                <ul className="mt-2 space-y-1 text-sm text-slate-700">
                  <li>• Recruiting team design and capability buildout</li>
                  <li>• Hiring manager enablement and interview training</li>
                  <li>• Cross-functional alignment on talent priorities</li>
                  <li>• Systems that balance hiring speed with quality bar</li>
                </ul>
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
