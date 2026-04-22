import { Plane } from "lucide-react";

const europe = [
  "London LHR",
  "Copenhagen CPH",
  "Amsterdam AMS",
  "Paris CDG",
  "Frankfurt FRA",
  "Oslo OSL",
  "Stockholm ARN",
  "Madrid MAD",
  "Zurich ZRH",
  "Dublin DUB",
  "Helsinki HEL",
  "Berlin BER",
];
const northAmerica = [
  "New York JFK",
  "Boston BOS",
  "Toronto YYZ",
  "Seattle SEA",
  "Chicago ORD",
  "Washington IAD",
  "Denver DEN",
  "Minneapolis MSP",
];
const cargo = [
  "Liege LGG",
  "Anchorage ANC",
  "East Midlands EMA",
  "Cincinnati CVG",
  "Hong Kong HKG",
];

export default function Destinations() {
  return (
    <section
      id="destinations"
      data-testid="destinations-section"
      className="relative py-28 md:py-36 lg:py-44 border-t border-white/10"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-12 gap-8 lg:gap-16">
          <div className="col-span-12 lg:col-span-5">
            <p className="text-[11px] font-bold uppercase tracking-[0.35em] text-[#50B4D8] mb-6">
              <span className="inline-block w-10 h-[1px] bg-[#50B4D8] align-middle mr-4" />
              Network
            </p>
            <h2
              data-testid="destinations-title"
              className="font-display font-light text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.05]"
            >
              Three continents.
              <br />
              <span className="italic">One stopover.</span>
            </h2>
            <p className="mt-6 text-white/60 max-w-md leading-relaxed">
              Keflavík sits exactly between Europe and North America — a natural
              transfer point that makes every connection feel seamless.
            </p>

            <div className="mt-12 glass rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-[#00D084]/20 blur-3xl pointer-events-none" />
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#00D084] mb-3">
                Hub Airport
              </p>
              <p className="font-display text-5xl font-light tracking-tight">
                BIKF
              </p>
              <p className="mt-2 text-white/70">Keflavík International</p>
              <div className="mt-6 h-[1px] bg-white/10" />
              <div className="mt-6 grid grid-cols-3 gap-4">
                <Info v="64°N" l="Latitude" />
                <Info v="2" l="Runways" />
                <Info v="UTC+0" l="Timezone" />
              </div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-7 space-y-10">
            <DestColumn
              testid="dest-europe"
              title="Europe"
              count={europe.length + 14}
              items={europe}
            />
            <DestColumn
              testid="dest-na"
              title="North America"
              count={northAmerica.length + 4}
              items={northAmerica}
            />
            <DestColumn
              testid="dest-cargo"
              title="Cargo Nodes"
              count={cargo.length + 6}
              items={cargo}
              accent="#00D084"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Info({ v, l }) {
  return (
    <div>
      <p className="font-display text-xl font-light">{v}</p>
      <p className="text-[10px] uppercase tracking-[0.25em] text-white/40 mt-1">
        {l}
      </p>
    </div>
  );
}

function DestColumn({ testid, title, count, items, accent = "#50B4D8" }) {
  return (
    <div data-testid={testid}>
      <div className="flex items-end justify-between mb-5 border-b border-white/10 pb-4">
        <div className="flex items-baseline gap-4">
          <Plane className="w-4 h-4" style={{ color: accent }} />
          <h3 className="font-display text-2xl md:text-3xl font-light tracking-tight">
            {title}
          </h3>
        </div>
        <span className="text-[10px] uppercase tracking-[0.25em] text-white/40">
          {count}+ airports
        </span>
      </div>
      <div className="flex flex-wrap gap-2.5">
        {items.map((c) => (
          <span
            key={c}
            className="text-xs md:text-sm tracking-wide text-white/75 px-4 py-2 rounded-full border border-white/10 hover:border-white/30 hover:text-white transition-colors"
          >
            {c}
          </span>
        ))}
      </div>
    </div>
  );
}
