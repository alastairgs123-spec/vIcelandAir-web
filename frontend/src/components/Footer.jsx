import { Send, Github, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer
      data-testid="footer"
      className="relative border-t border-white/10 pt-20 md:pt-28 pb-10 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-12 gap-10 md:gap-16">
          <div className="col-span-12 md:col-span-5">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-14 px-4 rounded-2xl bg-white flex items-center justify-center">
                <img
                  src="https://customer-assets.emergentagent.com/job_skylines-hub/artifacts/y50xzq7f_vIce.png"
                  alt="vIcelandAir"
                  className="h-10 w-auto object-contain"
                />
              </div>
              <span className="font-display text-xl font-medium">
                vIcelandAir
              </span>
            </div>
            <p className="text-white/60 max-w-sm text-sm leading-relaxed">
              A virtual airline for flight simulation enthusiasts. Recreating
              Icelandair's commercial and cargo operations across MSFS and
              X-Plane via VAMSYS.
            </p>

            <div className="mt-8 flex gap-3">
              <SocialLink
                testid="social-discord"
                label="Discord"
                href="https://discord.gg/YayPTbdrey"
                icon={<MessageCircle className="w-4 h-4" />}
              />
              <SocialLink
                testid="social-github"
                label="GitHub"
                href="https://github.com"
                icon={<Github className="w-4 h-4" />}
              />
              <SocialLink
                testid="social-email"
                label="Email"
                href="mailto:ops@vicelandair.virtual"
                icon={<Send className="w-4 h-4" />}
              />
            </div>
          </div>

          <FooterCol
            title="Airline"
            links={[
              { label: "About", href: "#about" },
              { label: "Operations", href: "#operations" },
              { label: "Fleet", href: "#fleet" },
              { label: "Network", href: "#destinations" },
            ]}
          />
          <FooterCol
            title="Pilots"
            links={[
              { label: "Join via VAMSYS", href: "https://vamsys.io/register" },
              { label: "Discord", href: "https://discord.gg/YayPTbdrey" },
              { label: "Training Wiki", href: "#" },
              { label: "SimBrief", href: "https://simbrief.com" },
            ]}
          />
          <FooterCol
            title="Resources"
            links={[
              { label: "VATSIM", href: "https://vatsim.net" },
              { label: "IVAO", href: "https://ivao.aero" },
              { label: "Charts", href: "#" },
              { label: "Careers", href: "#join" },
            ]}
          />
        </div>

        {/* Mega logo */}
        <div className="mt-20 md:mt-24 relative overflow-hidden">
          <div className="pointer-events-none select-none text-center">
            <p className="font-display font-extralight mega-clamp bg-gradient-to-b from-white/15 via-white/5 to-transparent bg-clip-text text-transparent">
              vICELANDAIR
            </p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-white/40">
          <p data-testid="footer-disclaimer" className="max-w-xl leading-relaxed">
            vIcelandAir is a virtual airline for flight simulation purposes
            only. Not affiliated with, endorsed by, or connected to the
            real-world Icelandair Group hf.
          </p>
          <p>© {new Date().getFullYear()} vIcelandAir · Fly the North</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }) {
  return (
    <div className="col-span-6 md:col-span-2 lg:col-span-2">
      <p className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-5">
        {title}
      </p>
      <ul className="space-y-3">
        {links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              data-testid={`footer-link-${l.label.replace(/\W+/g, "-").toLowerCase()}`}
              className="text-sm text-white/75 hover:text-white transition-colors link-under"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialLink({ testid, label, href, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      data-testid={testid}
      className="w-10 h-10 rounded-full border border-white/15 hover:border-white/50 hover:bg-white/5 flex items-center justify-center text-white/70 hover:text-white transition-all"
    >
      {icon}
    </a>
  );
}
