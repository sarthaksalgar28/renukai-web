import { useTheme } from "@/app/contexts/ThemeContext";
import { WHY_US } from "@/app/data";

export function WhyUs() {
  const { theme } = useTheme();

  return (
    <section className="py-24" style={{ background: theme.cardBg }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <div
              className="text-xs font-bold uppercase tracking-widest mb-3"
              style={{ color: theme.accent, fontFamily: "'Poppins', sans-serif" }}
            >
              Why Us
            </div>
            <h2
              className="text-4xl font-bold mb-6 leading-tight"
              style={{ color: theme.primary, fontFamily: "'Poppins', sans-serif" }}
            >
              Why Choose RCC<br />Structural Engineering?
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Clients across Maharashtra trust us because we combine deep technical expertise with a genuine commitment to their project's success. Here is what sets us apart:
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { val: "IS 456", lbl: "Code Compliance" },
                { val: "ETABS", lbl: "Advanced Analysis" },
                { val: "24/7", lbl: "Project Support" },
                { val: "Zero", lbl: "Structural Failures" },
              ].map((item) => (
                <div
                  key={item.lbl}
                  className="p-4 rounded-xl text-center transition-all hover:shadow-md"
                  style={{
                    background: theme.sectionBg,
                    border: `1px solid rgba(${theme.primaryRgb},0.08)`,
                  }}
                >
                  <div
                    className="text-xl font-bold mb-1"
                    style={{ color: theme.accent, fontFamily: "'Poppins', sans-serif" }}
                  >
                    {item.val}
                  </div>
                  <div className="text-xs text-muted-foreground">{item.lbl}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right grid */}
          <div className="grid sm:grid-cols-2 gap-5">
            {WHY_US.map((item, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl border hover:shadow-lg transition-all group"
                style={{ borderColor: `rgba(${theme.primaryRgb},0.08)`, background: theme.sectionBg }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-3 transition-all group-hover:scale-110"
                  style={{
                    background: `rgba(${theme.accentRgb},0.12)`,
                    border: `1px solid rgba(${theme.accentRgb},0.3)`,
                  }}
                >
                  <item.icon className="w-5 h-5" style={{ color: theme.accent }} />
                </div>
                <h3
                  className="font-semibold text-sm mb-2"
                  style={{ color: theme.primary, fontFamily: "'Poppins', sans-serif" }}
                >
                  {item.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
