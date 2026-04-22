import { ArrowDown, ExternalLink } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="top"
      data-testid="hero-section"
      className="relative min-h-screen w-full overflow-hidden flex items-end"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-fixed-hero bg-center bg-cover"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/31661630/pexels-photo-31661630.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1200&w=1800')",
        }}
      />
      {/* Gradient overlay: preserves contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#030C1A]/60 via-[#030C1A]/40 to-[#030C1A]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#030C1A]/80 via-transparent to-transparent" />
      <div className="aurora-glow" />

      {/* Top-right stat panel */}
      <div className="hidden lg:block absolute top-32 right-16 z-10 max-w-[280px] glass rounded-2xl p-6 reveal reveal-delay-2">
        <p className="text-[10px] uppercase tracking-[0.3em] text-[#50B4D8] mb-3">
          Hub • BIKF
        </p>
        <p className="font-display text-4xl font-light tracking-tight">
          Keflavík
        </p>
        <p className="text-sm text-white/60 mt-2">
          64°N · Gateway between Europe and North America.
        </p>
      </div>

      {/* Main content bottom-left */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 pb-24 md:pb-32">
        <div className="max-w-4xl">
          <p
            data-testid="hero-overline"
            className="text-[11px] font-bold uppercase tracking-[0.35em] text-[#50B4D8] mb-8 reveal"
          >
            <span className="inline-block w-10 h-[1px] bg-[#50B4D8] align-middle mr-4" />
            Virtual Airline · Since 2024
          </p>
          <h1
            data-testid="hero-title"
            className="font-display font-extralight display-clamp text-white reveal reveal-delay-1"
          >
            The spirit of
            <br />
            <span className="italic font-light bg-gradient-to-r from-[#50B4D8] via-[#00D084] to-[#50B4D8] bg-clip-text text-transparent">
              Iceland
            </span>
            , virtually.
          </h1>
          <p
            data-testid="hero-subtitle"
            className="mt-8 max-w-xl text-base md:text-lg text-white/70 leading-relaxed reveal reveal-delay-2"
          >
            A boutique virtual airline recreating Icelandair's commercial and
            cargo operations across MSFS and X-Plane. Fly the North Atlantic.
            Chase the midnight sun.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-4 reveal reveal-delay-3">
            <a
              href="https://vamsys.io/register"
              target="_blank"
              rel="noreferrer"
              data-testid="hero-vamsys-cta"
              className="group inline-flex items-center justify-center gap-3 bg-white text-[#030C1A] font-semibold px-8 py-4 rounded-full hover:bg-[#50B4D8] hover:text-white transition-all duration-500 shadow-[0_0_40px_rgba(80,180,216,0.15)]"
            >
              Join via VAMSYS
              <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="#fleet"
              data-testid="hero-fleet-cta"
              className="inline-flex items-center justify-center gap-3 border border-white/20 hover:border-white/50 text-white font-medium px-8 py-4 rounded-full transition-all"
            >
              Explore the fleet
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 hidden md:flex items-center gap-3 text-[11px] uppercase tracking-[0.25em] text-white/40">
        Scroll
        <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
      </div>
    </section>
  );
}
