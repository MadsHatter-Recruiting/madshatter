const CALENDLY_URL = "https://calendly.com/madshatter/30min";

export default function InterviewPage() {
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
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Interview Prep</h1>
          <p className="mt-4 max-w-4xl text-base leading-7 text-slate-700">
            Interview preparation built from real hiring environments. This is designed to help you understand how
            interviewers think, what signals they are looking for, and how decisions actually get made in hiring
            debriefs.
          </p>

          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-lg font-semibold text-slate-900">What we&apos;ll work on</h2>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
                <li>• Framing your experience clearly</li>
                <li>• Answering leadership and impact questions</li>
                <li>• Handling difficult interview questions</li>
                <li>• Communicating scope and ownership</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-slate-900">Who this is for</h2>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
                <li>• Senior ICs preparing for leadership roles</li>
                <li>• Managers interviewing for Director or VP positions</li>
                <li>• Candidates moving into new industries</li>
                <li>• Anyone who wants to understand how hiring decisions actually happen</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white"
            >
              Book Interview Prep Session
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
