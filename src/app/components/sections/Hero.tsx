import { ArrowRight, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { useTheme } from "@/app/contexts/ThemeContext";
import { STATS, img_mit_r7 } from "@/app/data";
import rccLogoImg from "@/imports/rcc-logo.png";

interface HeroProps {
  scrollTo: (href: string) => void;
}

export function Hero({ scrollTo }: HeroProps) {
  const { theme } = useTheme();

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden" style={{ background: theme.heroBg }}>
      {/* Background image */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src={img_mit_r7}
          alt="Modern multi-storey residential building structural project"
          className="w-full h-full object-cover opacity-60"
        />
        <div
          className="absolute inset-0"
          style={{ background: `linear-gradient(135deg, ${theme.heroOverlay.replace(/0\.9[0-9]/,"0.52")} 0%, ${theme.heroOverlay.replace(/0\.9[0-9]/,"0.42")} 50%, ${theme.heroOverlay.replace(/0\.9[0-9]/,"0.60")} 100%)` }}
        />
      </div>

      {/* Animated grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(${theme.accentRgb},0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(${theme.accentRgb},0.6) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Radial glow */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: `radial-gradient(ellipse 80% 60% at 20% 50%, rgba(${theme.accentRgb},0.15) 0%, transparent 70%)`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full border mb-6"
            style={{
              borderColor: theme.accent,
              background: `rgba(${theme.accentRgb},0.1)`,
            }}
          >
            <img src={rccLogoImg} alt="RCC Logo" className="h-7 w-auto object-contain" style={{ filter: "brightness(0) invert(1)" }} />
            <span
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: theme.accent, fontFamily: "'Poppins', sans-serif" }}
            >
              Renukai Consultants &amp; Constructions
            </span>
          </div>

          {/* Headline */}
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Building Strong Foundations for a{" "}
            <span style={{ color: theme.accent }}>Better Tomorrow</span>
          </h1>

          <p className="text-lg text-white/70 mb-10 leading-relaxed max-w-2xl" style={{ fontFamily: "'Inter', sans-serif" }}>
            Professional Structural Consulting & Designing, RCC Design, Construction Consulting, Project Management, and Engineering Solutions for Residential, Commercial, and Industrial Projects.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-16">
            <button
              onClick={() => scrollTo("#contact")}
              className="flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white transition-all hover:scale-105 hover:shadow-xl"
              style={{
                background: `linear-gradient(135deg, ${theme.accent}, ${theme.accentDark})`,
                fontFamily: "'Poppins', sans-serif",
                boxShadow: `0 8px 32px rgba(${theme.accentRgb},0.3)`,
              }}
            >
              Request Consultation
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => scrollTo("#projects")}
              className="flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white border border-white/30 hover:bg-white/10 transition-all"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              View Projects
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="px-5 py-4 rounded-2xl border transition-all hover:scale-105"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  backdropFilter: "blur(12px)",
                  borderColor: `rgba(${theme.accentRgb},0.25)`,
                }}
              >
                <div
                  className="text-2xl font-bold mb-1"
                  style={{ color: theme.accent, fontFamily: "'Poppins', sans-serif" }}
                >
                  {s.value}
                </div>
                <div className="text-xs text-white/60 leading-tight">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40 animate-bounce">
        <div className="text-white text-xs" style={{ fontFamily: "'Poppins', sans-serif" }}>Scroll</div>
        <div className="w-px h-8 bg-white/40" />
      </div>

      {/* Bottom gradient bar */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1"
        style={{ background: `linear-gradient(90deg, transparent, ${theme.accent}, transparent)` }}
      />
    </section>
  );
}
