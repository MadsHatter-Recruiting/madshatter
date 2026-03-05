"use client";

import { useMemo, useState } from "react";

type LogoItem = {
  name: string;
  src: string;
};

const LOGOS: LogoItem[] = [
  { name: "Sui", src: "/logos/sui.svg" },
  { name: "Polygon", src: "/logos/polygon.svg" },
  { name: "Robinhood", src: "/logos/robinhood.svg" },
  { name: "DoorDash", src: "/logos/doordash.svg" },
  { name: "Yelp", src: "/logos/yelp.svg" }
];

export default function LogoTicker() {
  const [missing, setMissing] = useState<Record<string, boolean>>({});
  const logos = useMemo(() => LOGOS, []);

  return (
    <section className="mt-4 rounded-xl bg-white px-5 py-4 shadow-sm ring-1 ring-slate-200 sm:px-6">
      <p className="mb-3 text-center text-xs font-medium tracking-wide text-slate-500 sm:text-sm">
        Trained on real hiring decisions from teams at
      </p>

      <div className="ticker-wrap relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-white to-transparent" />

        <div className="ticker-scroll flex w-max items-center">
          <ul className="flex shrink-0 items-center gap-10 px-2">
            {logos.map((logo) => (
              <li key={logo.name} className="flex items-center">
                {missing[logo.name] ? (
                  <span className="text-lg font-semibold tracking-wide text-slate-700/70">{logo.name}</span>
                ) : (
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="h-7 w-auto opacity-70 saturate-0"
                    onError={() => setMissing((prev) => ({ ...prev, [logo.name]: true }))}
                  />
                )}
              </li>
            ))}
          </ul>

          <ul className="ticker-duplicate flex shrink-0 items-center gap-10 px-2" aria-hidden="true">
            {logos.map((logo) => (
              <li key={`${logo.name}-dup`} className="flex items-center">
                {missing[logo.name] ? (
                  <span className="text-lg font-semibold tracking-wide text-slate-700/70">{logo.name}</span>
                ) : (
                  <img
                    src={logo.src}
                    alt=""
                    className="h-7 w-auto opacity-70 saturate-0"
                    onError={() => setMissing((prev) => ({ ...prev, [logo.name]: true }))}
                  />
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
