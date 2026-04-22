export default function About() {
  return (
    <section
      id="about"
      data-testid="about-section"
      className="relative py-28 md:py-40 lg:py-48"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Left image, offset */}
          <div className="col-span-12 md:col-span-6 relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
              <img
                src="https://images.pexels.com/photos/4338103/pexels-photo-4338103.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1100&w=900"
                alt="Icelandic glacier landscape"
                data-testid="about-image"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030C1A]/80 via-transparent to-transparent" />
            </div>
            {/* Floating stat badge */}
            <div className="hidden md:block absolute -right-6 bottom-10 lg:-right-12 glass rounded-2xl p-6 w-[220px]">
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#00D084] mb-2">
                Active Pilots
              </p>
              <p className="font-display text-4xl font-light">240+</p>
              <p className="text-xs text-white/50 mt-1">across 28 countries</p>
            </div>
          </div>

          {/* Right content */}
          <div className="col-span-12 md:col-span-6 md:pl-8">
            <p className="text-[11px] font-bold uppercase tracking-[0.35em] text-[#50B4D8] mb-8">
              <span className="inline-block w-10 h-[1px] bg-[#50B4D8] align-middle mr-4" />
              Our Story
            </p>
            <h2
              data-testid="about-title"
              className="font-display font-light text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.05]"
            >
              Born in the
              <br />
              <span className="italic">North Atlantic.</span>
            </h2>
            <p className="mt-8 text-white/70 text-base md:text-lg leading-relaxed max-w-lg">
              vIcelandAir brings the severe beauty of the North Atlantic to your
              simulator. Whether you're threading the ILS into Keflavík in
              crosswinds, or cruising above the auroras bound for Boston, we
              simulate the disciplined, premium operations of Iceland's flagship
              carrier — one flight at a time.
            </p>
            <p className="mt-6 text-white/70 text-base md:text-lg leading-relaxed max-w-lg">
              Fully integrated with VAMSYS, our pilots fly real schedules, log
              hours, progress ranks, and operate a growing fleet of
              passenger and cargo aircraft.
            </p>

            <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
              <Stat value="18k+" label="Hours Flown" />
              <Stat value="42" label="Destinations" />
              <Stat value="9" label="Aircraft Types" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }) {
  return (
    <div
      data-testid={`stat-${label.replace(/\s+/g, "-").toLowerCase()}`}
      className="border-t border-white/15 pt-4"
    >
      <p className="font-display text-3xl md:text-4xl font-light tracking-tight">
        {value}
      </p>
      <p className="text-[10px] uppercase tracking-[0.25em] text-white/50 mt-2">
        {label}
      </p>
    </div>
  );
}
