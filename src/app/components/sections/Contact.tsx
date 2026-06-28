import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Phone, Mail, MapPin, CheckCircle2, MessageCircle, Instagram } from "lucide-react";
import { useTheme } from "@/app/contexts/ThemeContext";
import { useLanguage } from "@/app/contexts/LanguageContext";

const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID  as string;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY  as string;

export function Contact() {
  const { theme } = useTheme();
  const { c } = useLanguage();
  const t = c.contact;
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError(null);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone:      formData.phone || "Not provided",
          service:    formData.service || "Not specified",
          message:    formData.message,
        },
        EMAILJS_PUBLIC_KEY
      );
      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", service: "", message: "" });
    } catch {
      setError(t.errorMsg);
    } finally {
      setSending(false);
    }
  };

  const inputStyle = {
    borderColor: `rgba(${theme.primaryRgb},0.15)`,
    background: theme.sectionBg,
  };

  return (
    <section id="contact" className="py-24" style={{ background: theme.cardBg }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div
            className="text-xs font-bold uppercase tracking-widest mb-3"
            style={{ color: theme.accent, fontFamily: "'Poppins', sans-serif" }}
          >
            {t.eyebrow}
          </div>
          <h2
            className="text-4xl font-bold mb-4"
            style={{ color: theme.primary, fontFamily: "'Poppins', sans-serif" }}
          >
            {t.title}
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <div
            className="p-8 rounded-3xl border shadow-sm"
            style={{ borderColor: `rgba(${theme.primaryRgb},0.08)` }}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                  style={{ background: `rgba(${theme.accentRgb},0.15)` }}
                >
                  <CheckCircle2 className="w-8 h-8" style={{ color: theme.accent }} />
                </div>
                <h3
                  className="text-xl font-bold mb-2"
                  style={{ color: theme.primary, fontFamily: "'Poppins', sans-serif" }}
                >
                  {t.successTitle}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {t.successText}
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 px-6 py-3 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-90"
                  style={{ background: theme.primary, fontFamily: "'Poppins', sans-serif" }}
                >
                  {t.sendAnother}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3
                  className="text-lg font-bold mb-6"
                  style={{ color: theme.primary, fontFamily: "'Poppins', sans-serif" }}
                >
                  {t.formHeading}
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold mb-1.5" style={{ color: theme.primary, fontFamily: "'Poppins', sans-serif" }}>
                      {t.fullName}
                    </label>
                    <input
                      required
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border text-sm outline-none focus:ring-2 transition-all"
                      style={inputStyle}
                      placeholder={t.fullNamePlaceholder}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold mb-1.5" style={{ color: theme.primary, fontFamily: "'Poppins', sans-serif" }}>
                      {t.email}
                    </label>
                    <input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border text-sm outline-none focus:ring-2 transition-all"
                      style={inputStyle}
                      placeholder={t.emailPlaceholder}
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold mb-1.5" style={{ color: theme.primary, fontFamily: "'Poppins', sans-serif" }}>
                      {t.phone}
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border text-sm outline-none focus:ring-2 transition-all"
                      style={inputStyle}
                      placeholder={t.phonePlaceholder}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold mb-1.5" style={{ color: theme.primary, fontFamily: "'Poppins', sans-serif" }}>
                      {t.serviceRequired}
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border text-sm outline-none focus:ring-2 transition-all"
                      style={inputStyle}
                    >
                      <option value="">{t.selectService}</option>
                      {t.serviceOptions.map((opt) => (
                        <option key={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold mb-1.5" style={{ color: theme.primary, fontFamily: "'Poppins', sans-serif" }}>
                    {t.projectDescription}
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border text-sm outline-none focus:ring-2 transition-all resize-none"
                    style={inputStyle}
                    placeholder={t.projectPlaceholder}
                  />
                </div>
                {error && (
                  <p className="text-sm text-red-500 text-center">{error}</p>
                )}
                <button
                  type="submit"
                  disabled={sending}
                  className="w-full py-4 rounded-xl font-semibold text-white transition-all hover:scale-[1.02] hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                  style={{
                    background: `linear-gradient(135deg, ${theme.primary}, ${theme.primary}CC)`,
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  {sending ? t.sending : t.send}
                </button>
              </form>
            )}
          </div>

          {/* Contact info */}
          <div className="space-y-6">
            {[
              { icon: Phone,     value: "+91 99604 04647",          href: "tel:+919960404647",                                    external: false },
              { icon: Mail,      value: "renukaiconsultants@gmail.com",   href: "mailto:renukaiconsultants@gmail.com",                         external: false },
              { icon: Instagram, value: "@rcc_4647",                href: "https://www.instagram.com/rcc_4647", external: true  },
              { icon: MapPin,    value: "Renukai Consultants & Constructions", href: "https://maps.app.goo.gl/c6DA914CiZ4UZavW9",          external: true  },
            ].map((item, i) => (
              <a
                key={i}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="flex items-start gap-4 p-5 rounded-2xl border hover:shadow-md transition-all group block"
                style={{ borderColor: `rgba(${theme.primaryRgb},0.08)`, background: theme.sectionBg }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform"
                  style={{ background: `linear-gradient(135deg, ${theme.primary}, ${theme.primary}CC)` }}
                >
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-muted-foreground mb-0.5">{t.info[i].label}</div>
                  <div className="font-semibold text-sm" style={{ color: theme.primary, fontFamily: "'Poppins', sans-serif" }}>
                    {item.value}
                  </div>
                  <div className="text-xs text-muted-foreground mt-0.5">{t.info[i].sub}</div>
                </div>
              </a>
            ))}

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/919960404647"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl font-semibold text-white transition-all hover:scale-[1.02] hover:shadow-lg"
              style={{
                background: "linear-gradient(135deg, #25D366, #128C7E)",
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              <MessageCircle className="w-5 h-5" />
              {t.whatsapp}
            </a>

            {/* Google Maps embed */}
            <div
              className="rounded-2xl overflow-hidden border"
              style={{ borderColor: `rgba(${theme.primaryRgb},0.08)`, height: 220 }}
            >
              <iframe
                title="Renukai Consultants & Construction location"
                src="https://maps.google.com/maps?q=18.4046928,76.5604424&output=embed&z=16"
                width="100%"
                height="100%"
                style={{ border: 0, display: 'block' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
