const PRICING_TIERS = [
  {
    name: "Free Candidate Consultation",
    price: "$0 · 15 min",
    details: "A quick intro chat to understand your goals and recommend the right support path."
  },
  {
    name: "Live Resume Review",
    price: "$149 · 30 min",
    details: "Live working session to improve your resume and positioning in real time."
  },
  {
    name: "Interview Prep Session",
    price: "$149 · 30 min",
    details: "Role-specific prep focused on signal, delivery, and hiring-debrief expectations."
  },
  {
    name: "Offer Negotiation Session",
    price: "$149 · 30 min",
    details: "Compensation strategy, negotiation framing, and how to push without losing trust."
  },
  {
    name: "All-In Package",
    price: "$399",
    details: "Complete support: resume strategy, interview prep, and offer negotiation guidance."
  }
] as const;

export default function PricingPage() {
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
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Pricing</h1>
          <p className="mt-3 max-w-3xl text-base leading-7 text-slate-600">
            Choose the level of support you want. All options are designed to improve interview outcomes.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {PRICING_TIERS.map((tier) => (
              <div key={tier.name} className="rounded-xl border border-slate-200 p-5">
                <p className="text-2xl font-semibold text-slate-900">{tier.name}</p>
                <p className="mt-2 text-sm font-medium text-slate-700">{tier.price}</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">{tier.details}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
