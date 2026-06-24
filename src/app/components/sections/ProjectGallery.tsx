import { useEffect, useRef, useState, useCallback } from "react";
import { X, ChevronLeft, ChevronRight, Images } from "lucide-react";
import { useTheme } from "@/app/contexts/ThemeContext";
import type { Project } from "@/app/types";

interface Props {
  project: Project;
  onClose: () => void;
}

export function ProjectGallery({ project, onClose }: Props) {
  const { theme } = useTheme();
  const allImages = project.images && project.images.length > 0 ? project.images : [project.image];
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const thumbsRef = useRef<HTMLDivElement>(null);

  const go = useCallback(
    (index: number) => {
      if (isAnimating || index === current) return;
      setIsAnimating(true);
      setCurrent(index);
      setTimeout(() => setIsAnimating(false), 300);
    },
    [isAnimating, current]
  );

  const prev = useCallback(() => go((current - 1 + allImages.length) % allImages.length), [current, allImages.length, go]);
  const next = useCallback(() => go((current + 1) % allImages.length), [current, allImages.length, go]);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next, onClose]);

  // Prevent body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  // Scroll active thumbnail into view
  useEffect(() => {
    const thumbs = thumbsRef.current;
    if (!thumbs) return;
    const active = thumbs.children[current] as HTMLElement;
    if (active) active.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  }, [current]);

  // Touch swipe
  const onTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) diff > 0 ? next() : prev();
    touchStartX.current = null;
  };

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col"
      style={{ background: "rgba(0,0,0,0.96)" }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 sm:px-6 py-4 flex-shrink-0">
        <div className="flex items-center gap-3 min-w-0">
          <div
            className="flex items-center justify-center w-8 h-8 rounded-lg flex-shrink-0"
            style={{ background: `rgba(${theme.accentRgb},0.15)` }}
          >
            <Images className="w-4 h-4" style={{ color: theme.accent }} />
          </div>
          <div className="min-w-0">
            <p
              className="font-semibold text-white text-sm truncate"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              {project.title}
            </p>
            <p className="text-xs text-white/40">{project.client}</p>
          </div>
        </div>
        <div className="flex items-center gap-4 flex-shrink-0 ml-4">
          <span className="text-white/50 text-sm font-mono">
            {current + 1} / {allImages.length}
          </span>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full flex items-center justify-center transition-colors hover:bg-white/10"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      {/* Main image */}
      <div
        className="flex-1 relative flex items-center justify-center overflow-hidden px-2 sm:px-12"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <img
          key={current}
          src={allImages[current]}
          alt={`${project.title} — view ${current + 1}`}
          className="max-h-full max-w-full object-contain rounded-xl select-none"
          style={{
            animation: "galleryFadeIn 0.3s ease",
            boxShadow: "0 8px 48px rgba(0,0,0,0.6)",
          }}
          draggable={false}
        />

        {/* Prev / Next arrows — hidden on single image */}
        {allImages.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-2 sm:left-4 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all hover:scale-110"
              style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(8px)" }}
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </button>
            <button
              onClick={next}
              className="absolute right-2 sm:right-4 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all hover:scale-110"
              style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(8px)" }}
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </button>
          </>
        )}
      </div>

      {/* Thumbnail strip */}
      {allImages.length > 1 && (
        <div className="flex-shrink-0 py-4 px-4">
          <div
            ref={thumbsRef}
            className="flex gap-2 overflow-x-auto pb-1 justify-start sm:justify-center"
            style={{ scrollbarWidth: "none" }}
          >
            {allImages.map((src, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                className="flex-shrink-0 rounded-lg overflow-hidden transition-all duration-200"
                style={{
                  width: 64,
                  height: 48,
                  border: i === current
                    ? `2px solid ${theme.accent}`
                    : "2px solid transparent",
                  opacity: i === current ? 1 : 0.45,
                  transform: i === current ? "scale(1.05)" : "scale(1)",
                }}
                aria-label={`Go to image ${i + 1}`}
              >
                <img
                  src={src}
                  alt=""
                  className="w-full h-full object-cover"
                  draggable={false}
                />
              </button>
            ))}
          </div>
        </div>
      )}

      <style>{`
        @keyframes galleryFadeIn {
          from { opacity: 0; transform: scale(0.97); }
          to   { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}
