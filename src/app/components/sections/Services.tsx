import { ChevronRight } from "lucide-react";
import { useTheme } from "@/app/contexts/ThemeContext";
import { SERVICES } from "@/app/data";

export function Services() {
  const { theme } = useTheme();

  return (
    <section id="services" className="py-24" style={{ background: theme.sectionBg }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className="text-xs font-bold uppercase tracking-widest mb-3"
            style={{ color: theme.accent, fontFamily: "'Poppins', sans-serif" }}
          >
            What We Do
          </div>
          <h2
            className="text-4xl font-bold mb-4"
            style={{ color: theme.primary, fontFamily: "'Poppins', sans-serif" }}
          >
            Our Engineering Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive structural consulting & designing solutions tailored to every project scale and complexity.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {SERVICES.map((svc, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl p-6 border hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-default"
              style={{ borderColor: `rgba(${theme.primaryRgb},0.08)` }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                style={{ background: `linear-gradient(135deg, ${theme.primary}, ${theme.primary}CC)` }}
              >
                <svc.icon className="w-6 h-6 text-white" />
              </div>
              <h3
                className="font-semibold text-sm mb-2 leading-snug"
                style={{ color: theme.primary, fontFamily: "'Poppins', sans-serif" }}
              >
                {svc.title}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{svc.desc}</p>
              <div
                className="mt-4 flex items-center gap-1 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ color: theme.accent }}
              >
                Learn more <ChevronRight className="w-3 h-3" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
