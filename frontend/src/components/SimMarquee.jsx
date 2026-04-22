const items = [
  "MSFS 2020",
  "MSFS 2024",
  "X-PLANE 12",
  "VATSIM",
  "IVAO",
  "VAMSYS",
  "NORTH ATLANTIC TRACKS",
  "SIMBRIEF",
];

export default function SimMarquee() {
  const repeated = [...items, ...items, ...items];
  return (
    <section
      data-testid="sim-marquee"
      className="relative py-14 md:py-20 border-y border-white/10 overflow-hidden"
    >
      <div className="marquee-track flex gap-12 whitespace-nowrap">
        {repeated.map((t, i) => (
          <div
            key={i}
            className="flex items-center gap-12 font-display font-light text-3xl md:text-5xl lg:text-6xl tracking-tight text-white/30"
          >
            <span className="w-2 h-2 rounded-full bg-[#00D084]" />
            {t}
          </div>
        ))}
      </div>
    </section>
  );
}
