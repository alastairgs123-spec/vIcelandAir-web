import { Users, Package, ArrowUpRight } from "lucide-react";

export default function Operations() {
  return (
    <section
      id="operations"
      data-testid="operations-section"
      className="relative py-28 md:py-36 lg:py-44 border-y border-white/10"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.35em] text-[#50B4D8] mb-6">
              <span className="inline-block w-10 h-[1px] bg-[#50B4D8] align-middle mr-4" />
              Operations
            </p>
            <h2
              data-testid="operations-title"
              className="font-display font-light text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.05] max-w-2xl"
            >
              Two divisions.
              <br />
              One disciplined airline.
            </h2>
          </div>
          <p className="text-white/60 max-w-sm text-sm md:text-base leading-relaxed">
            From paying passengers to time-critical freight, our ops desk keeps
            aircraft moving 24/7 between continents.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-6 lg:gap-8">
          <OpsCard
            testid="ops-commercial"
            tag="Division 01"
            icon={<Users className="w-5 h-5" />}
            title="Passenger"
            tagline="Connecting Europe and North America."
            desc="Daily long-haul rotations out of Keflavík, seasonal leisure flights, and short-hop regional legs. Fly the 757-200, 767-300ER, A321neo LR, or either MAX variant depending on the route."
            metrics={[
              { v: "31", l: "Commercial routes" },
              { v: "BIKF", l: "Primary hub" },
            ]}
            image="https://images.unsplash.com/photo-1740911299424-f9e1e91a920b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNTl8MHwxfHNlYXJjaHwyfHxib2VpbmclMjBjb21tZXJjaWFsJTIwYWlycGxhbmV8ZW58MHx8fHwxNzc2ODc4MDE0fDA&ixlib=rb-4.1.0&q=85"
          />
          <OpsCard
            testid="ops-cargo"
            tag="Division 02"
            icon={<Package className="w-5 h-5" />}
            title="Cargo"
            tagline="Night ops and heavy freight."
            desc="Dedicated 767F operations hauling pharmaceuticals, seafood, and e-commerce across the North Atlantic. High-stakes, schedule-critical, weather-immune."
            metrics={[
              { v: "11", l: "Freight routes" },
              { v: "B767F", l: "Primary fleet" },
            ]}
            image="https://images.pexels.com/photos/20240513/pexels-photo-20240513.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          />
        </div>
      </div>
    </section>
  );
}

function OpsCard({ testid, tag, icon, title, tagline, desc, metrics, image }) {
  return (
    <div
      data-testid={testid}
      className="col-span-12 md:col-span-6 group relative overflow-hidden rounded-3xl glass p-8 md:p-10 flex flex-col min-h-[520px] hover:border-white/20 transition-all duration-500"
    >
      {/* Image bg */}
      <div className="absolute inset-0 -z-10">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover opacity-20 group-hover:opacity-40 group-hover:scale-105 transition-all duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#030C1A] via-[#030C1A]/90 to-[#030C1A]/60" />
      </div>

      <div className="flex items-center justify-between">
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/40">
          {tag}
        </span>
        <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/80">
          {icon}
        </div>
      </div>

      <div className="mt-auto">
        <h3 className="font-display text-5xl md:text-6xl font-light tracking-tight mt-16">
          {title}
        </h3>
        <p className="mt-4 text-[#50B4D8] text-sm tracking-wide">{tagline}</p>
        <p className="mt-6 text-white/70 text-base leading-relaxed max-w-md">
          {desc}
        </p>

        <div className="mt-10 flex gap-10">
          {metrics.map((m) => (
            <div key={m.l}>
              <p className="font-display text-2xl font-light tracking-tight">
                {m.v}
              </p>
              <p className="text-[10px] uppercase tracking-[0.25em] text-white/40 mt-1">
                {m.l}
              </p>
            </div>
          ))}
          <div className="ml-auto">
            <ArrowUpRight className="w-6 h-6 text-white/30 group-hover:text-white group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" />
          </div>
        </div>
      </div>
    </div>
  );
}
