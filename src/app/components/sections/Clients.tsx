import { useTheme } from "@/app/contexts/ThemeContext";
import { CLIENTS } from "@/app/data";

export function Clients() {
  const { theme } = useTheme();

  return (
    <section className="py-20" style={{ background: theme.cardBg }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div
            className="text-xs font-bold uppercase tracking-widest mb-3"
            style={{ color: theme.accent, fontFamily: "'Poppins', sans-serif" }}
          >
            Who We Work With
          </div>
          <h2
            className="text-4xl font-bold mb-4"
            style={{ color: theme.primary, fontFamily: "'Poppins', sans-serif" }}
          >
            Our Trusted Clients
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: theme.textMuted }}>
            Proud to have partnered with leading institutions and organisations across infrastructure, education, and industry.
          </p>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {CLIENTS.map((client) => (
            <div
              key={client.name}
              className="flex items-center justify-center p-5 transition-all duration-300 hover:scale-105"
              style={{}}
              title={client.name}
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-16 w-auto object-contain transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
