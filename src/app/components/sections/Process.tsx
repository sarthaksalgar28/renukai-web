import { useTheme } from "@/app/contexts/ThemeContext";
import { PROCESS_STEPS } from "@/app/data";

export function Process() {
  const { theme } = useTheme();

  return (
    <section id="process" className="py-24" style={{ background: theme.primary }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div
            className="text-xs font-bold uppercase tracking-widest mb-3"
            style={{ color: theme.accent, fontFamily: "'Poppins', sans-serif" }}
          >
            How We Work
          </div>
          <h2
            className="text-4xl font-bold mb-4 text-white"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Our Engineering Process
          </h2>
          <p className="max-w-xl mx-auto text-white/60">
            A systematic 7-step process that ensures every project is delivered to the highest technical standards, on time and within budget.
          </p>
        </div>

        {/* Desktop horizontal timeline */}
        <div className="hidden lg:block relative">
          <div
            className="absolute top-8 left-0 right-0 h-px"
            style={{ background: `linear-gradient(90deg, transparent, rgba(${theme.accentRgb},0.4), transparent)` }}
          />
          <div className="grid grid-cols-7 gap-4">
            {PROCESS_STEPS.map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center group">
                <div
                  className="relative w-16 h-16 rounded-full flex items-center justify-center mb-5 flex-shrink-0 z-10 transition-all group-hover:scale-110"
                  style={{
                    background: `linear-gradient(135deg, ${theme.accent}, ${theme.accentDark})`,
                    boxShadow: `0 0 24px rgba(${theme.accentRgb},0.3)`,
                  }}
                >
                  <span className="text-white font-bold text-sm" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    {step.num}
                  </span>
                </div>
                <h3 className="text-xs font-bold text-white mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  {step.title}
                </h3>
                <p className="text-xs leading-relaxed text-white/55">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile vertical timeline */}
        <div className="lg:hidden space-y-6">
          {PROCESS_STEPS.map((step, i) => (
            <div key={i} className="flex gap-5">
              <div className="flex flex-col items-center">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: `linear-gradient(135deg, ${theme.accent}, ${theme.accentDark})` }}
                >
                  <span className="text-white font-bold text-xs" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    {step.num}
                  </span>
                </div>
                {i < PROCESS_STEPS.length - 1 && (
                  <div className="w-px flex-1 mt-2" style={{ background: `rgba(${theme.accentRgb},0.3)` }} />
                )}
              </div>
              <div className="pb-6">
                <h3 className="text-sm font-bold text-white mb-1" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  {step.title}
                </h3>
                <p className="text-xs leading-relaxed text-white/55">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
