import { CheckCircle2 } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { useTheme } from "@/app/contexts/ThemeContext";
import { img_aerial, img_structural } from "@/app/data";

export function About() {
  const { theme } = useTheme();

  return (
    <section id="about" className="py-24" style={{ background: theme.cardBg }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image column */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl ring-1" style={{ boxShadow: `0 25px 60px rgba(${theme.primaryRgb},0.15)`, ringColor: `rgba(${theme.accentRgb},0.2)` }}>
              <ImageWithFallback
                src={img_aerial}
                alt="Aerial view of Renukai Consultants township project"
                className="w-full h-[480px] object-cover"
              />
            </div>
            {/* Floating badge */}
            <div
              className="absolute -bottom-6 -right-6 p-5 rounded-2xl shadow-xl"
              style={{ background: theme.primary }}
            >
              <div className="text-3xl font-bold mb-1" style={{ color: theme.accent, fontFamily: "'Poppins', sans-serif" }}>RCC</div>
              <div className="text-white text-xs font-medium">Trusted<br />Consultants</div>
            </div>
            {/* Structural wireframe thumbnail */}
            <div
              className="absolute -top-6 -left-6 w-28 h-28 rounded-2xl overflow-hidden shadow-xl border-2"
              style={{ borderColor: theme.accent }}
            >
              <ImageWithFallback
                src={img_structural}
                alt="3D structural analysis model"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text column */}
          <div>
            <div
              className="text-xs font-bold uppercase tracking-widest mb-3"
              style={{ color: theme.accent, fontFamily: "'Poppins', sans-serif" }}
            >
              About Renukai Consultants &amp; Constructions
            </div>
            <h2
              className="text-4xl font-bold mb-6 leading-tight"
              style={{ color: theme.primary, fontFamily: "'Poppins', sans-serif" }}
            >
              Engineering Excellence,<br />Built on Trust
            </h2>
            <p className="text-muted-foreground mb-5 leading-relaxed">
              Renukai Consultants &amp; Constructions (RCC) is a leading structural consulting &amp; designing firm. We specialize in the complete structural lifecycle — from concept design and analysis through construction supervision and quality certification.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our firm has successfully delivered over 150 projects spanning residential apartments, commercial complexes, industrial structures, and critical infrastructure including railway station buildings across Maharashtra and beyond.
            </p>

            {/* Mission / Vision / Values */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {[
                { label: "Mission", text: "Delivering safe, efficient, and economical structural solutions that stand the test of time." },
                { label: "Vision", text: "To be Maharashtra's most trusted structural consulting & designing practice, known for precision and integrity." },
                { label: "Values", text: "Safety First · Technical Excellence · Client Commitment · Timely Delivery" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="p-4 rounded-xl border"
                  style={{ borderColor: `rgba(${theme.primaryRgb},0.12)`, background: theme.sectionBg }}
                >
                  <div
                    className="text-xs font-bold uppercase tracking-wider mb-2"
                    style={{ color: theme.accent, fontFamily: "'Poppins', sans-serif" }}
                  >
                    {item.label}
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>

            {/* Achievement highlights */}
            <div className="flex flex-wrap gap-4">
              {[
                { val: "170+", lbl: "Projects" },
                { val: "20+", lbl: "Cities" },
              ].map((a) => (
                <div key={a.lbl} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: theme.accent }} />
                  <span className="text-sm font-semibold" style={{ color: theme.primary, fontFamily: "'Poppins', sans-serif" }}>
                    {a.val} {a.lbl}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
