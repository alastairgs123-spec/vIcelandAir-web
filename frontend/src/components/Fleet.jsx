const fleet = [
  {
    id: "b757",
    type: "Boeing 757-200",
    role: "Long-Haul Workhorse",
    range: "7,200 km",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Icelandair_Boeing_757-200_TF-FIN_Logan_International_Airport.jpg?width=1800",
    span: "col-span-12 md:col-span-8 md:row-span-2",
    size: "large",
  },
  {
    id: "a321n",
    type: "Airbus A321neo LR",
    role: "Long-Range Narrowbody",
    range: "7,400 km",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Airbus_A321-271NXLR_(c-n_12213,_TF-IAA)_2025-10-22_Andre_Gerwing_Collection_ID_027038.jpg?width=1400",
    span: "col-span-12 md:col-span-4",
    size: "med",
  },
  {
    id: "b763er",
    type: "Boeing 767-300ER",
    role: "Transatlantic Premium",
    range: "11,065 km",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Icelandair_Boeing_767-300ER_(TF-ISO)_at_Frankfurt_Airport.jpg?width=1400",
    span: "col-span-12 md:col-span-4",
    size: "med",
  },
  {
    id: "b738m",
    type: "Boeing 737 MAX 8",
    role: "Next-Gen Efficiency",
    range: "6,570 km",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Icelandair_Boeing_737-8_MAX_TF-ICS_ZRH_2025_01.jpg?width=1400",
    span: "col-span-12 md:col-span-4",
    size: "med",
  },
  {
    id: "b739m",
    type: "Boeing 737 MAX 9",
    role: "Stretched Efficiency",
    range: "6,570 km",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Icelandair_TF-ICB_Boeing_737-MAX_9_Stockholm-Arlanda_Airport_(ARN_ESSA)_(52712352660).jpg?width=1400",
    span: "col-span-12 md:col-span-4",
    size: "med",
  },
  {
    id: "b763f",
    type: "Boeing 767-300F",
    role: "Heavy Freighter",
    range: "6,025 km",
    payload: "54 t",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/TF-ISH_JFK_Taxiing_In_FI_B767_304_ER_BCF_Small_(52700559960).png?width=1400",
    span: "col-span-12 md:col-span-4",
    size: "med",
    tag: "CARGO",
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
            Six type-ratings. From long-range narrowbodies to heavy freighters —
            each airframe matched to the route, the payload, and the North
            Atlantic weather window.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-4 md:gap-6 auto-rows-[240px] md:auto-rows-[280px]">
          {fleet.map((a, i) => (
            <FleetCard key={a.id} index={i} {...a} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FleetCard({
  index,
  id,
  type,
  role,
  range,
  payload,
  image,
  span,
  size,
  tag,
}) {
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
      <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-white/5 rounded-3xl" />

      {tag && (
        <span className="absolute top-5 right-5 z-10 px-3 py-1 rounded-full bg-[#00D084]/15 border border-[#00D084]/40 text-[9px] font-bold tracking-[0.25em] text-[#00D084]">
          {tag}
        </span>
      )}

      <div className="relative h-full flex flex-col justify-between p-7 md:p-9">
        <div className="flex items-center justify-between">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#50B4D8]">
            {role}
          </span>
          <span className="text-[10px] uppercase tracking-[0.25em] text-white/40">
            {tag ? "" : String(index + 1).padStart(2, "0")}
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
            {payload && (
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-white/40">
                  Payload
                </p>
                <p className="font-display text-lg mt-1">{payload}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
