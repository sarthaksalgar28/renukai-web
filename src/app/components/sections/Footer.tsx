import { Phone, Mail, MapPin, ChevronRight, Instagram, Linkedin } from "lucide-react";
import { useTheme } from "@/app/contexts/ThemeContext";
import { NAV_LINKS, SERVICES } from "@/app/data";
import rccLogoImg from "@/imports/rcc-logo.png";

interface FooterProps {
  scrollTo: (href: string) => void;
}

export function Footer({ scrollTo }: FooterProps) {
  const { theme } = useTheme();

  return (
    <footer style={{ background: theme.footerBg }}>
      {/* Top accent bar */}
      <div
        className="h-px w-full"
        style={{ background: `linear-gradient(90deg, transparent, ${theme.accent}, transparent)` }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-5">
              <img src={rccLogoImg} alt="RCC Logo" className="h-20 w-auto object-contain" style={{ filter: "brightness(0) invert(1)" }} />
            </div>
            <p className="text-sm leading-relaxed mb-5 text-white/50">
              Professional structural consulting & designing firm serving clients across Maharashtra with integrity and engineering excellence.
            </p>
            <div className="flex gap-3">
              {[
                { Icon: Instagram, href: "https://www.instagram.com/rcc_4647", label: "Instagram", color: "#E1306C", bg: "rgba(225,48,108,0.18)" },
                { Icon: Linkedin,  href: "https://www.linkedin.com/in/kedar-kulkarni-2bb7ba179/", label: "LinkedIn",  color: "#0A66C2", bg: "rgba(10,102,194,0.18)" },
              ].map(({ Icon, href, label, color, bg }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg flex items-center justify-center transition-all hover:scale-110"
                  style={{ background: bg, color }}
                  aria-label={label}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-bold mb-5 text-white" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <button
                    onClick={() => scrollTo(l.href)}
                    className="text-sm flex items-center gap-2 text-white/50 hover:text-white transition-colors"
                  >
                    <ChevronRight className="w-3.5 h-3.5" style={{ color: theme.accent }} />
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-bold mb-5 text-white" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Services
            </h4>
            <ul className="space-y-3">
              {SERVICES.slice(0, 7).map((s, i) => (
                <li key={i} className="text-sm flex items-center gap-2 text-white/50">
                  <ChevronRight className="w-3.5 h-3.5 flex-shrink-0" style={{ color: theme.accent }} />
                  {s.title}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold mb-5 text-white" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Contact Details
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: theme.accent }} />
                <span className="text-sm text-white/50 leading-relaxed">
                  Latur, Maharashtra,<br />India – 413512
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 flex-shrink-0" style={{ color: theme.accent }} />
                <a href="tel:+919960404647" className="text-sm text-white/50 hover:text-white transition-colors">
                  +91 99604 04647
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 flex-shrink-0" style={{ color: theme.accent }} />
                <a href="mailto:renukaiconsultants@gmail.com" className="text-sm text-white/50 hover:text-white transition-colors">
                  renukaiconsultants@gmail.com
                </a>
              </li>
            </ul>

            <div
              className="mt-6 p-3 rounded-xl text-xs text-white/60"
              style={{
                background: `rgba(${theme.accentRgb},0.1)`,
                border: `1px solid rgba(${theme.accentRgb},0.2)`,
              }}
            >
              <span style={{ color: theme.accent }} className="font-semibold">Office Hours:</span><br />
              Monday – Saturday: 9:00 AM – 7:00 PM
            </div>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/35">
            © 2026 Renukai Consultants &amp; Constructions. All rights reserved.
          </p>
          <p className="text-xs text-white/25">
            Structural Consulting & Designing · RCC Design · Construction Consulting · Maharashtra
          </p>
        </div>
      </div>
    </footer>
  );
}
