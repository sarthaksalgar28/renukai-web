import { useState } from "react";
import { Palette, Check } from "lucide-react";
import { useTheme } from "@/app/contexts/ThemeContext";

export function ThemeSwitcher() {
  const { theme, themes, setThemeId } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Theme options panel */}
      {open && (
        <div
          className="rounded-2xl shadow-2xl border overflow-hidden min-w-[200px]"
          style={{ background: "white", borderColor: "rgba(0,0,0,0.1)" }}
        >
          <div className="px-4 py-3 border-b" style={{ borderColor: "rgba(0,0,0,0.06)" }}>
            <p className="text-xs font-bold uppercase tracking-wider text-gray-500">Choose Theme</p>
          </div>
          {themes.map((t) => (
            <button
              key={t.id}
              onClick={() => { setThemeId(t.id); setOpen(false); }}
              className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors"
            >
              {/* Color swatch */}
              <div className="flex gap-1 flex-shrink-0">
                <div
                  className="w-4 h-4 rounded-full"
                  style={{ background: t.primary }}
                />
                <div
                  className="w-4 h-4 rounded-full"
                  style={{ background: t.accent }}
                />
              </div>
              <div className="flex-1 text-left">
                <div className="text-sm font-semibold text-gray-800">{t.name}</div>
                <div className="text-xs text-gray-400">{t.label}</div>
              </div>
              {theme.id === t.id && (
                <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
              )}
            </button>
          ))}
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setOpen(!open)}
        className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110 active:scale-95"
        style={{
          background: `linear-gradient(135deg, ${theme.primary}, ${theme.accent})`,
          boxShadow: `0 4px 20px rgba(0,0,0,0.25)`,
        }}
        aria-label="Switch theme"
        title="Switch theme"
      >
        <Palette className="w-5 h-5 text-white" />
      </button>
    </div>
  );
}
