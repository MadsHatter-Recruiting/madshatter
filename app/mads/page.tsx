const LINKEDIN_URL = "https://www.linkedin.com/company/113022676/";

export default function MadsPage() {
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
                <a href="/candidates#review" className="block rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-slate-50">
                  Resume Tool
                </a>
                <a href="/interview" className="block rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-slate-50">
                  Interview Prep
                </a>
                <a href="/negotiation" className="block rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-slate-50">
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

        <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="grid gap-0 lg:grid-cols-[1.15fr_1fr]">
            <div className="border-b border-slate-200 p-6 sm:p-8 lg:border-b-0 lg:border-r">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">About Us</p>
              <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                Mads Hatter
              </h1>
              <div className="mt-6 max-w-3xl space-y-4 text-[15px] leading-7 text-slate-700">
                <p className="text-xl font-semibold leading-8 text-slate-900">See hiring the way insiders do.</p>
                <p>
                  Most candidates never get a clear look at how hiring decisions are actually made. The Mads Hatter
                  was built to change that.
                </p>
                <p>
                  This tool reviews your resume through the same lens recruiters and hiring managers use every day:
                  helping you understand what stands out, what raises questions, and how to strengthen your story
                  before you enter the process.
                </p>
                <p>Built from real hiring environments, not resume theory.</p>
              </div>
            </div>

            <div className="relative bg-slate-950 p-6 text-white sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">Service Focus</p>
              <p className="mt-4 text-sm leading-7 text-slate-100">
                Mads Hatter supports both sides of the hiring process: companies building stronger recruiting systems
                and candidates preparing for higher-stakes career decisions.
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-100">
                The work is informed by real hiring environments across high-growth technology, executive search,
                interview debriefs, recruiting operations, and offer strategy.
              </p>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex rounded-lg border border-white/30 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>

        <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-xl border border-slate-200 bg-slate-50/70 p-5">
              <h2 className="text-lg font-semibold text-slate-900">Why This Exists</h2>
              <div className="mt-3 space-y-3 text-sm leading-7 text-slate-700">
                <p>
                  After years inside hiring teams, one thing became clear: many talented people are navigating the job
                  search without visibility into how decisions are actually made.
                </p>
                <p>
                  The Mads Hatter brings together patterns from real hiring environments, from early-career roles to
                  executive searches, so candidates can better understand how their experience is interpreted inside
                  the room.
                </p>
              </div>
            </article>

            <article className="rounded-xl border border-slate-200 bg-slate-50/70 p-5">
              <h2 className="text-lg font-semibold text-slate-900">Operator + Advisor</h2>
              <div className="mt-3 space-y-3 text-sm leading-7 text-slate-700">
                <p>
                  The service is designed to bring more structure, signal, and clarity to both hiring strategy and
                  candidate decision-making.
                </p>
                <p>
                  Beyond resume review, the work extends into interview preparation, offer negotiation, recruiting
                  infrastructure, and organizational advisory.
                </p>
              </div>
            </article>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/"
              className="rounded-lg border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700"
            >
              Back to the tool
            </a>
            <a
              href="/advisory"
              className="rounded-lg border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700"
            >
              Advisory Services
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
