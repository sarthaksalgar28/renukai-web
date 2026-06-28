import { useState, useEffect } from "react";
import { Phone, Menu, X, ChevronRight, Palette, Check } from "lucide-react";
import { useTheme } from "@/app/contexts/ThemeContext";
import { useLanguage } from "@/app/contexts/LanguageContext";
import { NAV_LINKS } from "@/app/data";
import type { Language } from "@/app/data/i18n";
import rccLogoImg from "@/imports/rcc-logo.png";

interface NavbarProps {
  scrollTo: (href: string) => void;
}

export function Navbar({ scrollTo }: NavbarProps) {
  const { theme, themes, setThemeId } = useTheme();
  const { lang, setLang, c } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [themeOpen, setThemeOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const navItems = NAV_LINKS.map((l, i) => ({ href: l.href, label: c.nav[i] }));

  const langOptions: { code: Language; label: string }[] = [
    { code: "en", label: "EN" },
    { code: "mr", label: "मराठी" },
  ];

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
          <img src={rccLogoImg} alt="RCC Logo" className="h-20 w-auto object-contain" style={{ filter: "brightness(0) invert(1)" }} />
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((l) => (
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

        {/* CTA + Language + Theme switcher */}
        <div className="hidden md:flex items-center gap-3">
          {/* Language switcher */}
          <div
            className="flex items-center rounded-lg overflow-hidden border"
            style={{ borderColor: "rgba(255,255,255,0.25)" }}
          >
            {langOptions.map((opt) => (
              <button
                key={opt.code}
                onClick={() => setLang(opt.code)}
                className="px-2.5 py-1.5 text-xs font-semibold transition-all"
                style={{
                  background: lang === opt.code ? theme.accent : "transparent",
                  color: lang === opt.code ? theme.primary : "rgba(255,255,255,0.8)",
                  fontFamily: "'Poppins', sans-serif",
                }}
                aria-pressed={lang === opt.code}
              >
                {opt.label}
              </button>
            ))}
          </div>

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
            {c.navCta}
          </a>

          {/* Theme switcher */}
          <div className="relative">
            <button
              onClick={() => setThemeOpen(!themeOpen)}
              className="w-9 h-9 rounded-lg flex items-center justify-center transition-all hover:scale-110 active:scale-95"
              style={{ background: `linear-gradient(135deg, ${theme.primary}, ${theme.accent})` }}
              aria-label="Switch theme"
              title="Switch theme"
            >
              <Palette className="w-4 h-4 text-white" />
            </button>
            {themeOpen && (
              <div
                className="absolute right-0 top-11 rounded-2xl shadow-2xl border overflow-hidden min-w-[200px] z-50"
                style={{ background: "white", borderColor: "rgba(0,0,0,0.1)" }}
              >
                <div className="px-4 py-3 border-b" style={{ borderColor: "rgba(0,0,0,0.06)" }}>
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-500">{c.chooseTheme}</p>
                </div>
                {themes.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => { setThemeId(t.id); setThemeOpen(false); }}
                    className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex gap-1 flex-shrink-0">
                      <div className="w-4 h-4 rounded-full" style={{ background: t.primary }} />
                      <div className="w-4 h-4 rounded-full" style={{ background: t.accent }} />
                    </div>
                    <div className="flex-1 text-left">
                      <div className="text-sm font-semibold text-gray-800">{t.name}</div>
                      <div className="text-xs text-gray-400">{t.label}</div>
                    </div>
                    {theme.id === t.id && <Check className="w-4 h-4 text-green-500 flex-shrink-0" />}
                  </button>
                ))}
              </div>
            )}
          </div>
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
          {/* Language switcher (mobile) */}
          <div className="flex items-center gap-2 mb-4">
            {langOptions.map((opt) => (
              <button
                key={opt.code}
                onClick={() => setLang(opt.code)}
                className="flex-1 py-2 rounded-lg text-sm font-semibold transition-all border"
                style={{
                  background: lang === opt.code ? theme.accent : "transparent",
                  color: lang === opt.code ? theme.primary : "rgba(255,255,255,0.8)",
                  borderColor: lang === opt.code ? theme.accent : "rgba(255,255,255,0.2)",
                  fontFamily: "'Poppins', sans-serif",
                }}
                aria-pressed={lang === opt.code}
              >
                {opt.label}
              </button>
            ))}
          </div>

          {navItems.map((l) => (
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
            {c.mobileCta}
          </button>
        </div>
      )}
    </header>
  );
}
