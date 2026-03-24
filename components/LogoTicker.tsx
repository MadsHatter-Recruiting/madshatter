const COMPANIES = [
  "Sui",
  "Polygon",
  "Robinhood",
  "DoorDash",
  "Yelp",
  "Instawork",
  "GoPuff",
  "Habitat Company",
  "Swoon",
] as const;

export default function LogoTicker() {
  return (
    <section className="mt-4 rounded-xl bg-white px-5 py-4 shadow-sm ring-1 ring-slate-200 sm:px-6">
      <p className="mb-3 text-center text-xs font-medium tracking-wide text-slate-500 sm:text-sm">
        Experience hiring and advising teams at
      </p>
      <p className="text-center text-sm font-medium tracking-wide text-slate-600/80 sm:text-base">
        {COMPANIES.join(" • ")}
      </p>
    </section>
  );
}
