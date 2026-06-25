import { createContext, useContext, useState, type ReactNode } from "react";
import { THEMES } from "@/app/data";
import type { Theme } from "@/app/types";

const STORAGE_KEY = "renukai-theme-id";

interface ThemeContextValue {
  theme: Theme;
  setThemeId: (id: string) => void;
  themes: Theme[];
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: THEMES[0],
  setThemeId: () => {},
  themes: THEMES,
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [themeId, setThemeIdState] = useState<string>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return THEMES.find((t) => t.id === saved) ? saved! : THEMES[0].id;
  });

  const theme = THEMES.find((t) => t.id === themeId) ?? THEMES[0];

  function setThemeId(id: string) {
    setThemeIdState(id);
    localStorage.setItem(STORAGE_KEY, id);
  }

  return (
    <ThemeContext.Provider value={{ theme, setThemeId, themes: THEMES }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
