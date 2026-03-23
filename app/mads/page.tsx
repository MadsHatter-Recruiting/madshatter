const LINKEDIN_URL = "https://www.linkedin.com/in/madelinerodz/";
const MADS_PHOTO_URL = "/mads-photo.jpg";

export default function MadsPage() {
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
                  About Mads
                </a>
              </nav>
            </details>
          </div>
        </header>

        <section className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200 sm:p-10">
          <div className="flex flex-wrap items-center gap-4">
            <img
              src={MADS_PHOTO_URL}
              alt="Mads Rodriguez"
              className="h-20 w-20 rounded-full object-cover ring-1 ring-slate-200"
            />
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-sky-600">About Mads</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Mads Rodriguez</h1>
            </div>
          </div>
          <div className="mt-6 max-w-4xl space-y-7 text-base leading-7 text-slate-700">
            <div className="space-y-4">
              <p className="text-xl font-semibold leading-8 text-slate-900">See hiring the way insiders do.</p>
              <p>Most candidates never get a clear look at how hiring decisions are actually made.</p>
              <p>The Mads Hatter was built to change that.</p>
              <p>
                This tool reviews your resume through the same lens recruiters and hiring managers use every day
                helping you understand what stands out, what might raise questions, and how to strengthen your story
                before you enter the process.
              </p>
              <p>
                Beyond the tool, Mads operates as a talent and organizational amplifier: helping leaders turn business
                priorities into hiring strategy, team design, and execution rhythms that scale.
              </p>
              <p className="font-medium text-slate-900">Built from real hiring environments, not resume theory.</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-slate-900">Why This Exists</h2>
              <div className="mt-2 space-y-4">
                <p>
                  After years working inside hiring teams, one thing became clear: many talented people are navigating
                  the job search without visibility into how decisions are actually made.
                </p>
                <p>The Mads Hatter was built to offer that perspective.</p>
                <p>
                  It brings together patterns from real hiring environments from early-career roles to executive
                  searches to help candidates better understand how their experience is likely to be interpreted
                  inside the room.
                </p>
                <p>
                  The same advisory lens is used with startups and growth-stage teams: clarify org needs, tighten
                  hiring decisions, and build talent systems that improve speed and quality at the same time.
                </p>
                <p>
                  The goal is simple: give people clearer insight so they can present their work, their story, and
                  their value with more confidence.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-slate-900">About Mads</h2>
              <div className="mt-2 space-y-4">
                <p>
                  Madeline (Mads) Rodriguez has spent her career inside high-growth companies helping teams scale and
                  making hiring decisions across roles ranging from entry-level talent to executive leadership.
                </p>
                <p>
                  Her experience spans companies including OpenAI, Sui, Polygon, Robinhood, DoorDash, and Yelp.
                </p>
                <p>
                  Over the years she&apos;s participated in thousands of resume reviews, interviews, and hiring
                  debriefs — the conversations where final decisions are made.
                </p>
                <p>
                  She also advises founders and executive teams on organizational growth, acting as a practical
                  operator across talent strategy, role calibration, and recruiting infrastructure.
                </p>
                <p>The Mads Hatter is her way of sharing some of that perspective more broadly.</p>
              </div>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700"
            >
              LinkedIn
            </a>
            <a
              href="/"
              className="rounded-lg border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700"
            >
              Back to the tool
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
