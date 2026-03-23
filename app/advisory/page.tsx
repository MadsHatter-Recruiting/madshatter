
const SUPPORTED_ORGS = ["Wonders", "DoorDash", "Eventbrite", "Exact Data"] as const;

const ADVISORY_CASE_STUDIES = [
  {
    company: "Wonders",
    problem: "Needed a more disciplined recruiting strategy with better speed and stronger diversity outcomes.",
    action:
      "Developed a data-driven recruiting strategy, expanded sourcing channels, optimized the ATS, and introduced a skills-based interview process.",
    outcome: "Reduced time-to-hire by 25% and increased diverse hires by 15%.",
  },
  {
    company: "DoorDash",
    problem: "Needed a sharper GTM recruiting approach with better candidate flow and stronger applicant quality.",
    action:
      "Led a beta test to overhaul GTM recruiting strategy through employer branding, search-optimized job descriptions, and broader social sourcing.",
    outcome: "Increased qualified applications by 30% and improved candidate quality by 10% while lowering recruiting costs.",
  },
  {
    company: "Eventbrite",
    problem: "HR leadership needed a clearer talent acquisition plan to support rapid growth across multiple roles.",
    action:
      "Built detailed hiring plans, launched an internal referral program, and improved the candidate experience across the funnel.",
    outcome: "Improved hiring speed for key roles by 20% and reduced cost per hire by 15%.",
  },
  {
    company: "Exact Data",
    problem: "Needed a GTM recruiting process and supporting tech stack to create a more scalable hiring foundation.",
    action:
      "Launched the GTM recruiting process and implemented the recruiting tech stack to support more consistent execution and visibility.",
    outcome: "Established a repeatable operating foundation for GTM hiring and future scale.",
  },
] as const;

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
            <h2 className="text-lg font-semibold text-slate-900">Selected advisory case studies</h2>
            <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {ADVISORY_CASE_STUDIES.map((study) => (
                <article key={study.company} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{study.company}</p>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-slate-500">Problem</p>
                  <p className="mt-1 text-sm text-slate-700">{study.problem}</p>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-slate-500">Action</p>
                  <p className="mt-1 text-sm text-slate-700">{study.action}</p>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-slate-500">Outcome</p>
                  <p className="mt-1 text-sm text-slate-700">{study.outcome}</p>
                </article>
              ))}
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
