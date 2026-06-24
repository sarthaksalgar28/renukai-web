import { useState, useEffect } from "react";
import { Phone, Menu, X, ChevronRight } from "lucide-react";
import { useTheme } from "@/app/contexts/ThemeContext";
import { NAV_LINKS } from "@/app/data";
import { RCCLogo } from "@/app/components/RCCLogo";

interface NavbarProps {
  scrollTo: (href: string) => void;
}

export function Navbar({ scrollTo }: NavbarProps) {
  const { theme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? theme.navBg : "transparent",
        boxShadow: scrolled ? "0 4px 24px rgba(0,0,0,0.2)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between" style={{ height: "72px" }}>
        {/* Logo */}
        <div className="cursor-pointer" onClick={() => scrollTo("#home")}>
          <RCCLogo size={44} color="white" accentColor={theme.accent} />
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              className="text-sm font-medium text-white/80 hover:text-white transition-colors relative group"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              {l.label}
              <span
                className="absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"
                style={{ background: theme.accent }}
              />
            </button>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://wa.me/919960404647"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-white transition-all hover:scale-105 hover:shadow-lg"
            style={{
              background: `linear-gradient(135deg, ${theme.accent}, ${theme.accentDark})`,
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            <Phone className="w-4 h-4" />
            Get Consultation
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="md:hidden border-t border-white/10 px-6 py-4"
          style={{ background: theme.navBg }}
        >
          {NAV_LINKS.map((l) => (
            <button
              key={l.href}
              onClick={() => { scrollTo(l.href); setMobileOpen(false); }}
              className="flex items-center justify-between w-full text-left py-3 text-white/80 hover:text-white text-sm font-medium border-b border-white/10 last:border-0 transition-colors"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              {l.label}
              <ChevronRight className="w-4 h-4 opacity-40" />
            </button>
          ))}
          <button
            onClick={() => { scrollTo("#contact"); setMobileOpen(false); }}
            className="mt-4 w-full py-3 rounded-lg text-sm font-semibold text-white text-center transition-all hover:opacity-90"
            style={{
              background: `linear-gradient(135deg, ${theme.accent}, ${theme.accentDark})`,
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            Request Consultation
          </button>
        </div>
      )}
    </header>
  );
}
