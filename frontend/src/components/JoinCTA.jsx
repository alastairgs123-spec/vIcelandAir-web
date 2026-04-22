import { ExternalLink, CheckCircle2 } from "lucide-react";

const perks = [
  "Free to join — VAMSYS pilot account",
  "Schedule-based real-world routes",
  "Dedicated Discord ops room",
  "MSFS 2020 / 2024 & X-Plane 12",
  "Rank progression & hour logging",
  "Monthly group flights & events",
];

export default function JoinCTA() {
  return (
    <section
      id="join"
      data-testid="join-section"
      className="relative py-28 md:py-36 lg:py-44 overflow-hidden"
    >
      <div
        className="absolute inset-0 -z-10 opacity-50"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/31661630/pexels-photo-31661630.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1600')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#030C1A] via-[#030C1A]/85 to-[#030C1A]" />
      <div className="aurora-glow" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-12 gap-8 lg:gap-16 items-center">
          <div className="col-span-12 lg:col-span-7">
            <p className="text-[11px] font-bold uppercase tracking-[0.35em] text-[#50B4D8] mb-8">
              <span className="inline-block w-10 h-[1px] bg-[#50B4D8] align-middle mr-4" />
              Fly With Us
            </p>
            <h2
              data-testid="join-title"
              className="font-display font-light text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[0.95]"
            >
              A cockpit is<br />
              <span className="italic">waiting.</span>
            </h2>
            <p className="mt-8 text-white/70 max-w-xl text-base md:text-lg leading-relaxed">
              Our pilot applications are handled through VAMSYS — the industry-
              standard virtual airline management platform. Set up your profile,
              join our fleet, and you'll be airborne within minutes.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="https://vamsys.io/register"
                target="_blank"
                rel="noreferrer"
                data-testid="join-vamsys-cta"
                className="group inline-flex items-center justify-center gap-3 bg-white text-[#030C1A] font-semibold px-8 py-4 rounded-full hover:bg-[#50B4D8] hover:text-white transition-all duration-500 shadow-[0_0_40px_rgba(80,180,216,0.15)]"
              >
                Join via VAMSYS
                <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href="https://discord.com"
                target="_blank"
                rel="noreferrer"
                data-testid="join-discord-cta"
                className="inline-flex items-center justify-center gap-3 border border-white/20 hover:border-white/50 text-white font-medium px-8 py-4 rounded-full transition-all"
              >
                Discord Briefing Room
              </a>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-5">
            <div className="glass rounded-3xl p-8 md:p-10">
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#00D084] mb-6">
                What you get
              </p>
              <ul className="space-y-4">
                {perks.map((p) => (
                  <li
                    key={p}
                    data-testid={`perk-${p.slice(0, 12).replace(/\W+/g, "-").toLowerCase()}`}
                    className="flex items-start gap-3 text-white/85"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#00D084] flex-shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
