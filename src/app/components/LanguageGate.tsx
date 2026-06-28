import { Globe, ChevronRight } from "lucide-react";
import { useTheme } from "@/app/contexts/ThemeContext";
import { useLanguage } from "@/app/contexts/LanguageContext";
import { CONTENT } from "@/app/data/i18n";
import rccLogoImg from "@/imports/rcc-logo.png";

/**
 * Full-screen language selection shown only on a visitor's first visit
 * (until a preference is stored). Lets the user choose English or Marathi
 * before entering the site.
 */
export function LanguageGate() {
  const { theme } = useTheme();
  const { setLang } = useLanguage();

  // Show each option's labels in its own language so it is self-explanatory.
  const en = CONTENT.en.gate;
  const mr = CONTENT.mr.gate;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center px-6 py-10 overflow-y-auto"
      style={{ background: theme.heroBg }}
    >
      {/* Decorative grid + glow */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(${theme.accentRgb},0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(${theme.accentRgb},0.6) 1px, transparent 1px)`,
          backgroundSize: "70px 70px",
        }}
      />
      <div
        className="absolute inset-0 opacity-25 pointer-events-none"
        style={{ background: `radial-gradient(ellipse 70% 60% at 50% 30%, rgba(${theme.accentRgb},0.18) 0%, transparent 70%)` }}
      />

      <div className="relative w-full max-w-lg text-center">
        {/* Logo */}
        <img
          src={rccLogoImg}
          alt="RCC Logo"
          className="h-24 w-auto object-contain mx-auto mb-6"
          style={{ filter: "brightness(0) invert(1)" }}
        />

        {/* Globe badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-5"
          style={{ borderColor: theme.accent, background: `rgba(${theme.accentRgb},0.1)` }}
        >
          <Globe className="w-4 h-4" style={{ color: theme.accent }} />
          <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: theme.accent }}>
            {en.welcome}
          </span>
        </div>

        <h1
          className="text-2xl sm:text-3xl font-bold text-white mb-3 leading-tight"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          {en.title}
        </h1>
        <p className="text-white/60 text-sm mb-8">
          {en.subtitle}
          <br />
          <span className="text-white/45">{mr.subtitle}</span>
        </p>

        {/* Options */}
        <div className="grid sm:grid-cols-2 gap-4">
          {([
            { lang: "en" as const, label: en.englishLabel, sub: en.englishSub },
            { lang: "mr" as const, label: mr.marathiLabel, sub: mr.marathiSub },
          ]).map((opt) => (
            <button
              key={opt.lang}
              onClick={() => setLang(opt.lang)}
              className="group flex items-center justify-between gap-3 p-5 rounded-2xl border text-left transition-all hover:scale-[1.03] hover:shadow-xl"
              style={{
                background: "rgba(255,255,255,0.06)",
                backdropFilter: "blur(12px)",
                borderColor: `rgba(${theme.accentRgb},0.3)`,
              }}
            >
              <div>
                <div
                  className="text-lg font-bold text-white mb-0.5"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {opt.label}
                </div>
                <div className="text-xs text-white/55">{opt.sub}</div>
              </div>
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-all group-hover:scale-110"
                style={{ background: `linear-gradient(135deg, ${theme.accent}, ${theme.accentDark})` }}
              >
                <ChevronRight className="w-4 h-4 text-white" />
              </div>
            </button>
          ))}
        </div>

        <p className="text-white/35 text-xs mt-7">
          {en.hint}
          <br />
          {mr.hint}
        </p>
      </div>
    </div>
  );
}
