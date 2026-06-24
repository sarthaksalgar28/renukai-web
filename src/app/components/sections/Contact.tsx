import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Phone, Mail, MapPin, CheckCircle2, MessageCircle, Instagram } from "lucide-react";
import { useTheme } from "@/app/contexts/ThemeContext";

const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID  as string;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY  as string;

export function Contact() {
  const { theme } = useTheme();
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
      setError("Failed to send message. Please try again or contact us directly.");
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
            Get In Touch
          </div>
          <h2
            className="text-4xl font-bold mb-4"
            style={{ color: theme.primary, fontFamily: "'Poppins', sans-serif" }}
          >
            Contact Us
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Ready to start your structural engineering project? Reach out for a free initial consultation.
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
                  Message Received!
                </h3>
                <p className="text-muted-foreground text-sm">
                  Thank you for reaching out. Our team will contact you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 px-6 py-3 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-90"
                  style={{ background: theme.primary, fontFamily: "'Poppins', sans-serif" }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3
                  className="text-lg font-bold mb-6"
                  style={{ color: theme.primary, fontFamily: "'Poppins', sans-serif" }}
                >
                  Request a Consultation
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold mb-1.5" style={{ color: theme.primary, fontFamily: "'Poppins', sans-serif" }}>
                      Full Name *
                    </label>
                    <input
                      required
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border text-sm outline-none focus:ring-2 transition-all"
                      style={inputStyle}
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold mb-1.5" style={{ color: theme.primary, fontFamily: "'Poppins', sans-serif" }}>
                      Email Address *
                    </label>
                    <input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border text-sm outline-none focus:ring-2 transition-all"
                      style={inputStyle}
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold mb-1.5" style={{ color: theme.primary, fontFamily: "'Poppins', sans-serif" }}>
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border text-sm outline-none focus:ring-2 transition-all"
                      style={inputStyle}
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold mb-1.5" style={{ color: theme.primary, fontFamily: "'Poppins', sans-serif" }}>
                      Service Required
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border text-sm outline-none focus:ring-2 transition-all"
                      style={inputStyle}
                    >
                      <option value="">Select a service</option>
                      <option>RCC Structural Design</option>
                      <option>Structural Analysis</option>
                      <option>Project Management</option>
                      <option>Structural Audit</option>
                      <option>Retrofitting</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold mb-1.5" style={{ color: theme.primary, fontFamily: "'Poppins', sans-serif" }}>
                    Project Description
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border text-sm outline-none focus:ring-2 transition-all resize-none"
                    style={inputStyle}
                    placeholder="Briefly describe your project, location, and requirements..."
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
                  {sending ? "Sending…" : "Send Message"}
                </button>
              </form>
            )}
          </div>

          {/* Contact info */}
          <div className="space-y-6">
            {[
              { icon: Phone,     label: "Phone / WhatsApp", value: "+91 99604 04647",          sub: "Mon–Sat, 9am–7pm",          href: "tel:+919960404647",                                    external: false },
              { icon: Mail,      label: "Email",            value: "renukaiconsultants@gmail.com",   sub: "We respond within 24 hours", href: "mailto:renukaiconsultants@gmail.com",                         external: false },
              { icon: Instagram, label: "Instagram",        value: "@rcc_4647",                sub: "Follow us for project updates", href: "https://www.instagram.com/rcc_4647", external: true  },
              { icon: MapPin,    label: "Office Address",   value: "Renukai Consultants & Constructions", sub: "Latur, Maharashtra, India – 413512", href: "https://maps.app.goo.gl/c6DA914CiZ4UZavW9",          external: true  },
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
                  <div className="text-xs font-semibold text-muted-foreground mb-0.5">{item.label}</div>
                  <div className="font-semibold text-sm" style={{ color: theme.primary, fontFamily: "'Poppins', sans-serif" }}>
                    {item.value}
                  </div>
                  <div className="text-xs text-muted-foreground mt-0.5">{item.sub}</div>
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
              Chat on WhatsApp
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
