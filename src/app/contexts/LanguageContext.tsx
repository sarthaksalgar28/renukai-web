import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { CONTENT, type Language, type SiteContent } from "@/app/data/i18n";

const STORAGE_KEY = "renukai-lang";

interface LanguageContextValue {
  /** The currently active language. */
  lang: Language;
  /** Content bundle for the active language. */
  c: SiteContent;
  /** Change the active language and persist the choice. */
  setLang: (lang: Language) => void;
  /** Whether the visitor has already chosen a language (first-visit gate). */
  hasChosen: boolean;
}

function readStoredLang(): Language | null {
  const saved = localStorage.getItem(STORAGE_KEY);
  return saved === "en" || saved === "mr" ? saved : null;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: "en",
  c: CONTENT.en,
  setLang: () => {},
  hasChosen: false,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [stored, setStored] = useState<Language | null>(() => readStoredLang());

  // The active language defaults to English until a choice is made.
  const lang: Language = stored ?? "en";

  // Keep <html lang> in sync so Devanagari fonts and accessibility work.
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  function setLang(next: Language) {
    setStored(next);
    localStorage.setItem(STORAGE_KEY, next);
  }

  return (
    <LanguageContext.Provider
      value={{ lang, c: CONTENT[lang], setLang, hasChosen: stored !== null }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
