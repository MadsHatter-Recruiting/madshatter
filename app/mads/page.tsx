const LINKEDIN_URL = "https://www.linkedin.com/in/madelinerodz/";
const CALENDLY_URL = "https://calendly.com/madshatter/30min";
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
              <a href="/#review" className="transition hover:text-slate-900">
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
                <a href="/#review" className="block rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-slate-50">
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
            <div>
              <h2 className="text-lg font-semibold text-slate-900">What She Does</h2>
              <p className="mt-2">
                Mads helps candidates position their experience so hiring managers see clear signal fast. She built
                Mads Hatter to mirror how real recruiting decisions are made under time pressure, not how resumes are
                graded in theory.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-slate-900">Why She Built This</h2>
              <div className="mt-2 space-y-4">
                <p>
                  Mads Rodriguez is a talent leader who has built and scaled recruiting functions inside high-growth
                  tech companies including Sui Foundation, Polygon, Robinhood, DoorDash, and Yelp.
                </p>
                <p>
                  Over the years, she has reviewed thousands of resumes, run hundreds of interviews, and sat in
                  hiring debriefs where final decisions actually get made. Most candidates never get visibility into
                  those conversations.
                </p>
                <p>
                  She built this tool to give people a real view into how hiring decisions happen, from C-suite roles
                  to entry-level roles, and to make that playbook accessible to everyone.
                </p>
                <p>
                  She built this platform to bring greater transparency to offer negotiations and to help ensure
                  professionals are equipped to advocate for compensation that reflects their true market value at
                  every level of an organization.
                </p>
                <p>
                  Think of it as her recruiting brain attached to an AI tool: practical, direct guidance designed to
                  get candidates to interviews and help them negotiate from a stronger position.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-slate-900">Credibility</h2>
              <p className="mt-2">
                She has led hiring work across Sui Foundation, Polygon, Robinhood, DoorDash, and Yelp.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-slate-900">Scale Proof</h2>
              <p className="mt-2">
                She has built recruiting functions from zero and scaled hiring across engineering, product,
                go-to-market, and leadership roles, from entry-level through C-suite.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-slate-900">Background</h2>
              <p className="mt-2">
                Mads did not follow an elite-school or pedigree-network path. She built her career through pattern
                recognition, thousands of candidate conversations, and years inside real hiring environments.
              </p>
              <p className="mt-3 font-medium text-slate-900">
                Her approach comes from real hiring environments, not resume theory.
              </p>
            </div>

            <p>
              If the feedback feels direct, that&apos;s intentional. The goal is clarity and interview outcomes.
            </p>
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
              href={CALENDLY_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg bg-sky-600 px-5 py-3 text-sm font-semibold text-white"
            >
              Chat with Mads
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
