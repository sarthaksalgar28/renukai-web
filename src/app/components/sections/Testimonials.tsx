import { Star } from "lucide-react";
import { useTheme } from "@/app/contexts/ThemeContext";
import { TESTIMONIALS } from "@/app/data";

export function Testimonials() {
  const { theme } = useTheme();

  return (
    <section className="py-24" style={{ background: theme.cardBg }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div
            className="text-xs font-bold uppercase tracking-widest mb-3"
            style={{ color: theme.accent, fontFamily: "'Poppins', sans-serif" }}
          >
            Client Testimonials
          </div>
          <h2
            className="text-4xl font-bold mb-4"
            style={{ color: theme.primary, fontFamily: "'Poppins', sans-serif" }}
          >
            What Our Clients Say
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="relative p-6 rounded-2xl border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              style={{
                background: theme.sectionBg,
                borderColor: `rgba(${theme.primaryRgb},0.08)`,
              }}
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-current" style={{ color: theme.accent }} />
                ))}
              </div>
              <p className="text-sm text-muted-foreground mb-5 leading-relaxed italic">{`"${t.review}"`}</p>
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
                  style={{ background: `linear-gradient(135deg, ${theme.primary}, ${theme.primary}CC)` }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div
                    className="text-sm font-semibold"
                    style={{ color: theme.primary, fontFamily: "'Poppins', sans-serif" }}
                  >
                    {t.position}
                  </div>
                </div>
              </div>
              {/* Decorative quote */}
              <div
                className="absolute top-4 right-5 text-5xl font-serif leading-none"
                style={{ color: theme.accent, opacity: 0.12 }}
              >
                "
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
