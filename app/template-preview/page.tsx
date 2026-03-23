const LINKEDIN_URL = "https://www.linkedin.com/in/madelinerodz/";

export default function TemplatePreviewPage() {
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
          <p className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold tracking-wide text-slate-600">
            PREVIEW ONLY
          </p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Resume Template Kit
          </h1>
          <p className="mt-3 max-w-3xl text-base leading-7 text-slate-600">
            A clean, recruiter-readable template built from real hiring patterns. This is a visual preview of how a
            $9 purchasable template page could look.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <div className="rounded-xl border border-slate-200 p-5">
              <p className="text-sm font-medium text-slate-500">Price</p>
              <p className="mt-1 text-3xl font-semibold text-slate-900">$9</p>
            </div>
            <div className="rounded-xl border border-slate-200 p-5">
              <p className="text-sm font-medium text-slate-500">Includes</p>
              <p className="mt-1 text-base font-semibold text-slate-900">ATS-friendly format + examples</p>
            </div>
            <div className="rounded-xl border border-slate-200 p-5">
              <p className="text-sm font-medium text-slate-500">Best for</p>
              <p className="mt-1 text-base font-semibold text-slate-900">Candidates targeting high-growth tech</p>
            </div>
          </div>

          <div className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-5">
            <h2 className="text-lg font-semibold text-slate-900">What you get</h2>
            <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
              <li>• One polished base template (Google Doc + Word format in real implementation)</li>
              <li>• Bullet structure prompts: action, scope, impact, outcome</li>
              <li>• Summary framework with examples by level</li>
              <li>• Formatting guidance to avoid common recruiter red flags</li>
            </ul>
          </div>

          <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-5">
            <h3 className="text-base font-semibold text-amber-900">Future gated option (v2)</h3>
            <p className="mt-2 text-sm leading-6 text-amber-900/90">
              Optional: include 3 tracked edits, then unlock unlimited edits via upgrade. This requires login + usage
              tracking and would be implemented after launch.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              type="button"
              disabled
              className="cursor-not-allowed rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white opacity-60"
            >
              Buy Template (Preview)
            </button>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400"
            >
              LinkedIn
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
