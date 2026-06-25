import { useState } from "react";
import { MapPin, Images } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { useTheme } from "@/app/contexts/ThemeContext";
import { PROJECTS, CATEGORY_COLORS } from "@/app/data";
import { ProjectGallery } from "@/app/components/sections/ProjectGallery";
import type { Project } from "@/app/types";

const FILTERS = ["All", "Residential", "Commercial", "Industrial"];

export function Projects() {
  const { theme } = useTheme();
  const [activeFilter, setActiveFilter] = useState("All");
  const [galleryProject, setGalleryProject] = useState<Project | null>(null);

  const filtered = activeFilter === "All"
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-24" style={{ background: theme.sectionBg }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div
            className="text-xs font-bold uppercase tracking-widest mb-3"
            style={{ color: theme.accent, fontFamily: "'Poppins', sans-serif" }}
          >
            Our Portfolio
          </div>
          <h2
            className="text-4xl font-bold mb-4"
            style={{ color: theme.primary, fontFamily: "'Poppins', sans-serif" }}
          >
            Completed Projects
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            A showcase of structural consulting & designing projects delivered across Residential, Commercial, and Infrastructure sectors.
          </p>

          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            {FILTERS.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className="px-5 py-2 rounded-full text-sm font-medium transition-all"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  background: activeFilter === cat ? theme.primary : "white",
                  color: activeFilter === cat ? "white" : "#6B7280",
                  border: `1px solid ${activeFilter === cat ? theme.primary : "rgba(0,0,0,0.1)"}`,
                  boxShadow: activeFilter === cat ? `0 4px 12px rgba(${theme.primaryRgb},0.25)` : "none",
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => {
            const photoCount = project.images?.length ?? 0;
            return (
              <div
                key={i}
                onClick={() => setGalleryProject(project)}
                className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                <div className="relative h-64 bg-gray-100">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    style={{ objectPosition: project.imagePosition ?? "center" }}
                  />
                  {/* Hover overlay */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5"
                    style={{ background: `linear-gradient(to top, rgba(${theme.primaryRgb},0.95) 0%, rgba(${theme.primaryRgb},0.6) 60%, transparent 100%)` }}
                  >
                    <div className="text-white text-xs mb-1 opacity-80">{project.services}</div>
                    <div className="flex items-center gap-1 text-xs font-semibold" style={{ color: theme.accent }}>
                      <MapPin className="w-3 h-3" />
                      {project.location}
                    </div>
                  </div>
                  {/* Category tag */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${CATEGORY_COLORS[project.category] ?? "bg-gray-100 text-gray-700"}`}>
                      {project.category}
                    </span>
                  </div>
                  {/* Photo count badge */}
                  {photoCount > 1 && (
                    <div
                      className="absolute top-4 right-4 flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold text-white"
                      style={{ background: "rgba(0,0,0,0.55)", backdropFilter: "blur(4px)" }}
                    >
                      <Images className="w-3 h-3" />
                      {photoCount}
                    </div>
                  )}
                </div>
                <div
                  className="bg-white p-5 border-t"
                  style={{ borderColor: `rgba(${theme.primaryRgb},0.06)` }}
                >
                  <h3
                    className="font-semibold text-sm mb-1 leading-snug"
                    style={{ color: theme.primary, fontFamily: "'Poppins', sans-serif" }}
                  >
                    {project.title}
                  </h3>
                  <div className="text-xs text-muted-foreground">{project.client}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox */}
      {galleryProject && (
        <ProjectGallery project={galleryProject} onClose={() => setGalleryProject(null)} />
      )}
    </section>
  );
}
