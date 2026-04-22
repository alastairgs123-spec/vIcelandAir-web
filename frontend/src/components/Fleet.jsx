const fleet = [
  {
    id: "b757",
    type: "Boeing 757-200",
    role: "Long-Haul Workhorse",
    range: "7,200 km",
    seats: "183 · Y/C",
    image:
      "https://images.unsplash.com/photo-1740911299424-f9e1e91a920b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNTl8MHwxfHNlYXJjaHwyfHxib2VpbmclMjBjb21tZXJjaWFsJTIwYWlycGxhbmV8ZW58MHx8fHwxNzc2ODc4MDE0fDA&ixlib=rb-4.1.0&q=85",
    span: "col-span-12 md:col-span-8 md:row-span-2",
    size: "large",
  },
  {
    id: "b737",
    type: "Boeing 737 MAX 8",
    role: "Next-Gen Efficiency",
    range: "6,570 km",
    seats: "160 · Y",
    image:
      "https://images.unsplash.com/photo-1718099439740-bee549d83d83?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNTl8MHwxfHNlYXJjaHwzfHxib2VpbmclMjBjb21tZXJjaWFsJTIwYWlycGxhbmV8ZW58MHx8fHwxNzc2ODc4MDE0fDA&ixlib=rb-4.1.0&q=85",
    span: "col-span-12 md:col-span-4",
    size: "med",
  },
  {
    id: "b767f",
    type: "Boeing 767-300F",
    role: "Heavy Freighter",
    range: "6,025 km",
    seats: "54 t · Payload",
    image:
      "https://images.pexels.com/photos/20240513/pexels-photo-20240513.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1200",
    span: "col-span-12 md:col-span-4",
    size: "med",
  },
];

export default function Fleet() {
  return (
    <section
      id="fleet"
      data-testid="fleet-section"
      className="relative py-28 md:py-36 lg:py-44"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.35em] text-[#50B4D8] mb-6">
              <span className="inline-block w-10 h-[1px] bg-[#50B4D8] align-middle mr-4" />
              The Fleet
            </p>
            <h2
              data-testid="fleet-title"
              className="font-display font-light text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.05] max-w-3xl"
            >
              Every aircraft
              <br />
              <span className="italic">built for the North.</span>
            </h2>
          </div>
          <p className="text-white/60 max-w-sm text-sm md:text-base leading-relaxed">
            A hand-picked fleet optimised for range, reliability, and the
            unforgiving North Atlantic weather windows.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-4 md:gap-6 auto-rows-[240px] md:auto-rows-[280px]">
          {fleet.map((a) => (
            <FleetCard key={a.id} {...a} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FleetCard({ id, type, role, range, seats, image, span, size }) {
  return (
    <article
      data-testid={`fleet-${id}`}
      className={`${span} group relative overflow-hidden rounded-3xl glass hover:border-white/25 transition-all duration-500`}
    >
      <img
        src={image}
        alt={type}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-90 group-hover:scale-105 transition-all duration-1000"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#030C1A] via-[#030C1A]/60 to-transparent" />
      {/* Inner border accent */}
      <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-white/5 rounded-3xl" />

      <div className="relative h-full flex flex-col justify-between p-7 md:p-9">
        <div className="flex items-center justify-between">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#50B4D8]">
            {role}
          </span>
          <span className="text-[10px] uppercase tracking-[0.25em] text-white/40">
            0{fleet.findIndex((f) => f.id === id) + 1}
          </span>
        </div>

        <div>
          <h3
            className={`font-display font-light tracking-tight ${
              size === "large"
                ? "text-4xl md:text-6xl"
                : "text-2xl md:text-3xl"
            }`}
          >
            {type}
          </h3>
          <div className="mt-5 flex items-center gap-8">
            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-white/40">
                Range
              </p>
              <p className="font-display text-lg mt-1">{range}</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-white/40">
                Config
              </p>
              <p className="font-display text-lg mt-1">{seats}</p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
