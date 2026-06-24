import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useTheme } from "@/app/contexts/ThemeContext";
import { FAQS } from "@/app/data";

export function FAQ() {
  const { theme } = useTheme();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section className="py-24" style={{ background: theme.sectionBg }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div
            className="text-xs font-bold uppercase tracking-widest mb-3"
            style={{ color: theme.accent, fontFamily: "'Poppins', sans-serif" }}
          >
            FAQ
          </div>
          <h2
            className="text-4xl font-bold mb-4"
            style={{ color: theme.primary, fontFamily: "'Poppins', sans-serif" }}
          >
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <div
              key={i}
              className="rounded-2xl border overflow-hidden transition-all"
              style={{ borderColor: `rgba(${theme.primaryRgb},0.08)`, background: "white" }}
            >
              <button
                className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                aria-expanded={openFaq === i}
              >
                <span
                  className="font-semibold text-sm pr-4"
                  style={{ color: theme.primary, fontFamily: "'Poppins', sans-serif" }}
                >
                  {faq.q}
                </span>
                <span className="flex-shrink-0" style={{ color: theme.accent }}>
                  {openFaq === i
                    ? <ChevronUp className="w-5 h-5" />
                    : <ChevronDown className="w-5 h-5" />}
                </span>
              </button>
              {openFaq === i && (
                <div className="px-5 pb-5 pt-0">
                  <div className="h-px mb-4" style={{ background: `rgba(${theme.primaryRgb},0.06)` }} />
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
