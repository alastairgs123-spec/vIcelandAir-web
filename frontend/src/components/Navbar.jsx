import { useEffect, useState } from "react";
import { ExternalLink, Menu, X } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Operations", href: "#operations" },
  { label: "Fleet", href: "#fleet" },
  { label: "Network", href: "#destinations" },
  { label: "Join", href: "#join" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#030C1A]/80 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 h-20 flex items-center justify-between">
        <a
          href="#top"
          data-testid="nav-logo"
          className="flex items-center gap-3 group"
        >
          <div className="h-11 px-3 rounded-full bg-white flex items-center justify-center shadow-[0_0_20px_rgba(80,180,216,0.15)]">
            <img
              src="https://customer-assets.emergentagent.com/job_skylines-hub/artifacts/y50xzq7f_vIce.png"
              alt="vIcelandAir"
              className="h-8 w-auto object-contain"
            />
          </div>
          <div className="hidden sm:flex flex-col leading-none">
            <span className="font-display text-lg font-medium tracking-tight">
              vIcelandAir
            </span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-white/40">
              Virtual Airline
            </span>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-testid={`nav-link-${l.label.toLowerCase()}`}
              className="text-sm font-medium tracking-wide text-white/70 hover:text-white transition-colors link-under"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="https://vamsys.io/register"
          target="_blank"
          rel="noreferrer"
          data-testid="nav-vamsys-cta"
          className="hidden md:inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-full bg-white text-[#030C1A] hover:bg-[#50B4D8] hover:text-white transition-all duration-300"
        >
          Join via VAMSYS
          <ExternalLink className="w-3.5 h-3.5" />
        </a>

        <button
          data-testid="nav-mobile-toggle"
          onClick={() => setOpen((o) => !o)}
          className="md:hidden w-10 h-10 rounded-full border border-white/15 flex items-center justify-center"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div
          data-testid="mobile-menu"
          className="md:hidden border-t border-white/10 bg-[#030C1A]/95 backdrop-blur-xl px-6 py-8 flex flex-col gap-6"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-testid={`mobile-link-${l.label.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="text-xl font-display text-white/80 hover:text-white"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://vamsys.io/register"
            target="_blank"
            rel="noreferrer"
            data-testid="mobile-vamsys-cta"
            className="mt-2 inline-flex items-center gap-2 text-sm font-semibold px-5 py-3 rounded-full bg-white text-[#030C1A] w-fit"
          >
            Join via VAMSYS
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      )}
    </header>
  );
}
