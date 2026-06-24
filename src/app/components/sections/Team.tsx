import { Phone, Mail, Award, Linkedin, GraduationCap, Building2 } from "lucide-react";import { useTheme } from "@/app/contexts/ThemeContext";
import kedarImg from "@/imports/kedar.jpg";

interface TeamMember {
  name: string;
  quals: string;
  role: string;
  dept?: string;
  phone?: string;
  email?: string;
  note?: string;
  linkedin?: string;
  isPrincipal?: boolean;
}

const TEAM: TeamMember[] = [
  {
    name: "Kedar D. Kulkarni",
    quals: "BE, ME, BJS-MCJ",
    role: "Principal Consultant",
    dept: "RCC",
    phone: "9960404647",
    email: "renukaiconsultants@gmail.com",
    linkedin: "https://www.linkedin.com/in/kedar-kulkarni-2bb7ba179/",
    note: "Experience in high-rise structures up to G+42 stories",
    isPrincipal: true,
  },
];

export function Team() {
  const { theme } = useTheme();
  const principal = TEAM[0];

  return (
    <section id="team" className="py-24 overflow-hidden" style={{ background: theme.sectionBg }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <div
            className="text-xs font-bold uppercase tracking-widest mb-3"
            style={{ color: theme.accent, fontFamily: "'Poppins', sans-serif" }}
          >
            The People Behind the Work
          </div>
          <h2
            className="text-4xl font-bold"
            style={{ color: theme.primary, fontFamily: "'Poppins', sans-serif" }}
          >
            Meet the Principal Consultant
          </h2>
        </div>

        {/* Creative split card */}
        <div
          className="relative rounded-3xl overflow-hidden shadow-2xl"
          style={{ background: theme.primary }}
        >
          {/* Decorative circles */}
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-10 pointer-events-none" style={{ background: theme.accent }} />
          <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full opacity-5 pointer-events-none" style={{ background: theme.accent }} />

          <div className="relative flex flex-col lg:flex-row">

            {/* Photo */}
            <div className="lg:w-2/5 relative flex-shrink-0">
              <div className="relative h-80 lg:h-full min-h-[420px]">
                <img
                  src={kedarImg}
                  alt="Kedar D. Kulkarni"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 hidden lg:block" style={{ background: `linear-gradient(to right, transparent 55%, ${theme.primary} 100%)` }} />
                <div className="absolute inset-0 lg:hidden" style={{ background: `linear-gradient(to top, ${theme.primary} 25%, transparent 65%)` }} />
              </div>
            </div>

            {/* Info */}
            <div className="lg:w-3/5 px-8 pb-10 pt-6 lg:pt-14 lg:pr-14 flex flex-col justify-center relative z-10">

              {/* Qual badges */}
              <div className="flex flex-wrap gap-2 mb-5">
                {principal.quals.split(", ").map((q) => (
                  <span key={q} className="text-xs font-bold px-3 py-1 rounded-full" style={{ background: `rgba(${theme.accentRgb},0.18)`, color: theme.accent }}>
                    {q}
                  </span>
                ))}
              </div>

              {/* Name */}
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
                {principal.name}
              </h3>

              {/* Role */}
              <div className="flex items-center gap-2 mb-5">
                <Award className="w-4 h-4 flex-shrink-0" style={{ color: theme.accent }} />
                <span className="font-semibold text-sm" style={{ color: theme.accent, fontFamily: "'Poppins', sans-serif" }}>
                  {principal.role} – {principal.dept}
                </span>
              </div>

              {/* Divider */}
              <div className="w-16 h-0.5 mb-6 rounded-full" style={{ background: theme.accent }} />

              {/* Info blocks */}
              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {principal.note && (
                  <div className="flex items-start gap-3 p-4 rounded-2xl" style={{ background: `rgba(${theme.accentRgb},0.08)` }}>
                    <Building2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: theme.accent }} />
                    <p className="text-white/80 text-sm leading-relaxed">{principal.note}</p>
                  </div>
                )}
                <div className="flex items-start gap-3 p-4 rounded-2xl" style={{ background: "rgba(255,255,255,0.05)" }}>
                  <GraduationCap className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: theme.accent }} />
                  <p className="text-white/60 text-sm leading-relaxed">Bachelor of Engineering · Master of Engineering · BJS-MCJ</p>
                </div>
              </div>

              {/* Contact buttons */}
              <div className="flex flex-wrap gap-3">
                {principal.phone && (
                  <a href={`tel:+91${principal.phone}`} className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all hover:scale-105 hover:shadow-lg" style={{ background: theme.accent, color: theme.primary }}>
                    <Phone className="w-4 h-4" />
                    {principal.phone}
                  </a>
                )}
                {principal.email && (
                  <a href={`mailto:${principal.email}`} className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all hover:scale-105" style={{ background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.85)" }}>
                    <Mail className="w-4 h-4" />
                    {principal.email}
                  </a>
                )}
                {principal.linkedin && (
                  <a href={principal.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all hover:scale-105" style={{ background: "rgba(10,102,194,0.25)", color: "#5BA4F5" }}>
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
