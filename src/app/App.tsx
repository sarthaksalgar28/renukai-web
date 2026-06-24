import { useState, useEffect, useRef } from "react";
import {
  Building2, ChevronDown, ChevronUp, Phone, Mail, MapPin, Star,
  Shield, Clock, Award, TrendingUp, Users, CheckCircle2, ArrowRight,
  Layers, Ruler, Home, Briefcase, Factory, HardHat, ClipboardList,
  Search, Wrench, Calculator, PenTool, Menu, X, MessageCircle,
  Facebook, Instagram, Linkedin, Twitter, ChevronRight
} from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import img_om_apartment from "@/imports/OM_BUILDERS_APARTMENT_VIEW_4.png";
import img_aerial from "@/imports/IMG-20250909-WA0034.jpg";
import img_residential from "@/imports/IMG-20250909-WA0018.jpg";
import img_elite_gate from "@/imports/IMG-20250909-WA0019.jpg";
import img_structural from "@/imports/Screenshot__16_.png";

// ─── Data ────────────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

const STATS = [
  { value: "150+", label: "Projects Completed" },
  { value: "12+", label: "Years of Experience" },
  { value: "80+", label: "Happy Clients" },
  { value: "100%", label: "Quality Assured" },
];

const SERVICES = [
  { icon: Layers, title: "RCC Structural Design", desc: "Complete reinforced cement concrete structural design for all building types, ensuring structural integrity and code compliance." },
  { icon: Search, title: "Structural Analysis", desc: "Advanced analysis using STAAD Pro, ETABS, and manual methods to determine load paths and structural behavior." },
  { icon: Home, title: "Residential Building Design", desc: "Custom structural design for bungalows, row houses, villas, and multi-storey residential apartments." },
  { icon: Building2, title: "Commercial Building Design", desc: "Structural solutions for offices, malls, hotels, and commercial complexes with optimal column spacing." },
  { icon: Factory, title: "Industrial Structure Design", desc: "Heavy-duty industrial sheds, warehouses, and pre-engineered building structural design." },
  { icon: HardHat, title: "Construction Supervision", desc: "On-site quality supervision ensuring construction conforms to approved structural drawings and standards." },
  { icon: Briefcase, title: "Project Management", desc: "End-to-end project management including scheduling, resource planning, and progress monitoring (PMC Services)." },
  { icon: Ruler, title: "Site Inspection", desc: "Detailed structural site inspections, condition assessments, and structural audit reports for existing buildings." },
  { icon: Wrench, title: "Retrofitting & Rehabilitation", desc: "Strengthening of distressed structures using FRP jacketing, column jacketing, and modern repair techniques." },
  { icon: ClipboardList, title: "Quantity Estimation", desc: "Accurate BOQ preparation, rate analysis, and quantity estimation for tendering and budgeting purposes." },
  { icon: PenTool, title: "CAD Drafting Services", desc: "Detailed structural drawings, bar bending schedules, and shop drawings using AutoCAD and Revit." },
  { icon: Calculator, title: "Engineering Consultation", desc: "Expert structural engineering consultation for feasibility studies, due diligence, and dispute resolution." },
];

const WHY_US = [
  { icon: Award, title: "Certified Engineers", desc: "Our team comprises licensed structural engineers with advanced degrees and professional certifications from leading institutions." },
  { icon: TrendingUp, title: "12+ Years Experience", desc: "Over a decade of executing complex structural projects across residential, commercial, industrial, and infrastructure sectors." },
  { icon: Shield, title: "Quality Assurance", desc: "Rigorous design checks, peer reviews, and adherence to IS codes, NBC, and international standards on every project." },
  { icon: Clock, title: "Timely Delivery", desc: "We respect project schedules. Systematic planning and monitoring ensure your structural designs are delivered on time." },
  { icon: Calculator, title: "Cost-Effective Solutions", desc: "Optimized structural designs that reduce material usage while maintaining full safety — saving significant construction costs." },
  { icon: Users, title: "Modern Engineering Practices", desc: "Latest software tools, BIM workflows, and contemporary design methodologies for precision engineering outcomes." },
];

const PROJECTS = [
  {
    image: img_om_apartment,
    title: "OM Builders – P+6 Residential Apartment",
    location: "Maharashtra",
    category: "Residential",
    services: "RCC Structural Design, Construction Supervision",
    client: "OM Builders",
  },
  {
    image: img_aerial,
    title: "84 Elite – Township Development",
    location: "Latur, Maharashtra",
    category: "Residential",
    services: "Structural Design, Project Management, CAD Drafting",
    client: "JK Associates",
  },
  {
    image: img_residential,
    title: "Multi-Storey Residential Complex",
    location: "Solapur, Maharashtra",
    category: "Residential",
    services: "RCC Structural Design, Site Inspection",
    client: "Confidential",
  },
  {
    image: img_elite_gate,
    title: "84 Elite – Entry Plaza & Gate",
    location: "Latur, Maharashtra",
    category: "Infrastructure",
    services: "Structural Design, CAD Drafting",
    client: "JK Associates",
  },
  {
    image: img_structural,
    title: "JSPM Institutes – G+7 College Building",
    location: "Latur, Maharashtra",
    category: "Commercial",
    services: "Structural Design (Post-Tensioning), PMC Services, Structural Audit",
    client: "JSPM Institutes Latur",
  },
  {
    image: img_aerial,
    title: "Central Railways – Station Buildings",
    location: "Solapur Division, Maharashtra",
    category: "Infrastructure",
    services: "Parcel Office Buildings, Community Hall, Entrance Gate Design",
    client: "Central Railways Solapur Division",
  },
];

const PROCESS_STEPS = [
  { num: "01", title: "Initial Consultation", desc: "Understanding client requirements, project scope, site conditions, and budget constraints." },
  { num: "02", title: "Site Analysis", desc: "Soil investigation review, site visit, and assessment of existing structural conditions." },
  { num: "03", title: "Structural Planning", desc: "Conceptual structural layout, system selection, and load calculation framework." },
  { num: "04", title: "Design Development", desc: "Detailed structural analysis and design using STAAD Pro / ETABS and IS code provisions." },
  { num: "05", title: "Approval Process", desc: "Preparation of drawings and documentation for local authority / municipal approvals." },
  { num: "06", title: "Execution Support", desc: "On-site support, RFI responses, and technical guidance during construction phase." },
  { num: "07", title: "Quality Verification", desc: "Final structural inspection, certification, and project closeout documentation." },
];

const TESTIMONIALS = [
  {
    name: "Rajesh Patil",
    position: "Director, OM Builders",
    review: "RCC Structural Engineering delivered an exceptional structural design for our P+6 apartment project. The team's technical depth and attention to detail gave us complete confidence throughout the project.",
    rating: 5,
    avatar: "RP",
  },
  {
    name: "Vikram Kulkarni",
    position: "Project Head, JK Associates",
    review: "Their work on our 84 Elite township project was outstanding. Structural drawings were precise, delivery was on schedule, and the on-site support during construction was invaluable.",
    rating: 5,
    avatar: "VK",
  },
  {
    name: "Dr. S. Mehta",
    position: "Dean (Infrastructure), JSPM Institutes",
    review: "We engaged RCC Structural for our G+7 college building with post-tensioning. The team demonstrated exemplary expertise and the structural audit report was extremely thorough.",
    rating: 5,
    avatar: "SM",
  },
  {
    name: "Pradeep Sharma",
    position: "Project Manager, Central Railways",
    review: "From parcel office buildings to community halls across multiple stations, RCC Structural Engineering proved to be a highly reliable and technically sound partner for our railway infrastructure projects.",
    rating: 5,
    avatar: "PS",
  },
];

const FAQS = [
  {
    q: "What engineering services do you provide?",
    a: "We offer a comprehensive range of structural engineering services including RCC structural design, structural analysis, residential and commercial building design, industrial structure design, construction supervision, project management (PMC), site inspection, structural audit, retrofitting, quantity estimation, and CAD drafting services.",
  },
  {
    q: "Do you handle residential projects of all scales?",
    a: "Yes, we handle residential projects of all scales — from individual bungalows and row houses to large multi-storey apartment complexes and township developments. Our team tailors the structural solution to the specific requirements and budget of each project.",
  },
  {
    q: "How long does a structural design project take?",
    a: "Timeline depends on project complexity. A typical residential bungalow structural design takes 7–14 days. Multi-storey buildings (G+4 to G+10) typically take 3–6 weeks. Large commercial or industrial projects may take 2–3 months. We provide a detailed timeline at project kickoff.",
  },
  {
    q: "Do you provide site inspections and structural audits?",
    a: "Yes. We conduct detailed site inspections during construction to verify compliance with structural drawings. We also offer standalone structural audit services for existing buildings, including condition assessment, load-carrying capacity evaluation, and written audit reports.",
  },
  {
    q: "What documents are required to start a structural design project?",
    a: "Typically required documents include: architectural drawings (floor plans, elevation, sections), soil investigation report (if available), location details, intended building use and occupancy, and local authority bylaws or FSI regulations. We guide you through the complete documentation requirement.",
  },
];

const CATEGORY_COLORS: Record<string, string> = {
  Residential: "bg-blue-100 text-blue-800",
  Commercial: "bg-purple-100 text-purple-800",
  Industrial: "bg-orange-100 text-orange-800",
  Infrastructure: "bg-green-100 text-green-800",
};

// ─── Component ────────────────────────────────────────────────────────────────

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const filteredProjects = activeFilter === "All"
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeFilter);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground" style={{ fontFamily: "'Inter', sans-serif" }}>

      {/* ── Navbar ─────────────────────────────────────────────────────────── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#002244] shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-18" style={{ height: "72px" }}>
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollTo("#home")}>
            <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: "linear-gradient(135deg, #D4AF37, #B8962E)" }}>
              <Building2 className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-white font-bold text-sm leading-tight" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Renukai
              </div>
              <div className="text-xs leading-tight" style={{ color: "#D4AF37", fontFamily: "'Poppins', sans-serif" }}>
                Consultants
              </div>
            </div>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((l) => (
              <button
                key={l.href}
                onClick={() => scrollTo(l.href)}
                className="text-sm font-medium text-white/80 hover:text-white transition-colors"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                {l.label}
              </button>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-white transition-all hover:scale-105"
              style={{ background: "linear-gradient(135deg, #D4AF37, #B8962E)", fontFamily: "'Poppins', sans-serif" }}
            >
              <Phone className="w-4 h-4" />
              Get Consultation
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden bg-[#002244] border-t border-white/10 px-6 py-4">
            {NAV_LINKS.map((l) => (
              <button
                key={l.href}
                onClick={() => scrollTo(l.href)}
                className="block w-full text-left py-3 text-white/80 hover:text-white text-sm font-medium border-b border-white/10 last:border-0"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                {l.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("#contact")}
              className="mt-4 w-full py-3 rounded-lg text-sm font-semibold text-white text-center"
              style={{ background: "linear-gradient(135deg, #D4AF37, #B8962E)", fontFamily: "'Poppins', sans-serif" }}
            >
              Request Consultation
            </button>
          </div>
        )}
      </header>

      {/* ── Hero ────────────────────────────────────────────────────────────── */}
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-[#001833]">
        {/* Background image */}
        <div className="absolute inset-0">
          <ImageWithFallback
            src={img_residential}
            alt="Modern multi-storey residential building structural project"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(0,22,68,0.92) 0%, rgba(0,34,68,0.85) 50%, rgba(0,22,44,0.95) 100%)" }} />
        </div>

        {/* Decorative grid overlay */}
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: "linear-gradient(rgba(212,175,55,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.5) 1px, transparent 1px)", backgroundSize: "80px 80px" }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-semibold mb-6 uppercase tracking-widest"
              style={{ borderColor: "#D4AF37", color: "#D4AF37", fontFamily: "'Poppins', sans-serif", background: "rgba(212,175,55,0.1)" }}>
              <Building2 className="w-3.5 h-3.5" />
              Trusted Structural Engineering Partner
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6"
              style={{ fontFamily: "'Poppins', sans-serif" }}>
              Building Strong{" "}
              <span style={{ color: "#D4AF37" }}>Foundations</span>{" "}
              for Tomorrow
            </h1>

            <p className="text-lg text-white/70 mb-10 leading-relaxed max-w-2xl" style={{ fontFamily: "'Inter', sans-serif" }}>
              Professional Structural Engineering, RCC Design, Construction Consulting, Project Management, and Engineering Solutions for Residential, Commercial, and Industrial Projects.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-16">
              <button
                onClick={() => scrollTo("#contact")}
                className="flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white transition-all hover:scale-105 hover:shadow-xl"
                style={{ background: "linear-gradient(135deg, #D4AF37, #B8962E)", fontFamily: "'Poppins', sans-serif", boxShadow: "0 8px 32px rgba(212,175,55,0.3)" }}
              >
                Request Consultation
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => scrollTo("#projects")}
                className="flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white border border-white/30 hover:bg-white/10 transition-all"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                View Projects
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {STATS.map((s) => (
                <div
                  key={s.label}
                  className="px-5 py-4 rounded-2xl border"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    backdropFilter: "blur(12px)",
                    borderColor: "rgba(212,175,55,0.25)",
                  }}
                >
                  <div className="text-2xl font-bold mb-1" style={{ color: "#D4AF37", fontFamily: "'Poppins', sans-serif" }}>
                    {s.value}
                  </div>
                  <div className="text-xs text-white/60 leading-tight">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-50">
          <div className="text-white text-xs" style={{ fontFamily: "'Poppins', sans-serif" }}>Scroll</div>
          <div className="w-px h-8 bg-white/40" />
        </div>
      </section>

      {/* ── Gold accent bar ──────────────────────────────────────────────── */}
      <div className="h-1 w-full" style={{ background: "linear-gradient(90deg, #002244, #D4AF37, #002244)" }} />

      {/* ── About ────────────────────────────────────────────────────────── */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image column */}
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src={img_aerial}
                  alt="Aerial view of RCC Structural Engineering township project"
                  className="w-full h-[480px] object-cover"
                />
              </div>
              {/* Floating badge */}
              <div
                className="absolute -bottom-6 -right-6 p-5 rounded-2xl shadow-xl"
                style={{ background: "#002244" }}
              >
                <div className="text-3xl font-bold mb-1" style={{ color: "#D4AF37", fontFamily: "'Poppins', sans-serif" }}>12+</div>
                <div className="text-white text-xs font-medium">Years of<br />Excellence</div>
              </div>
              {/* Structural wireframe thumbnail */}
              <div
                className="absolute -top-6 -left-6 w-28 h-28 rounded-2xl overflow-hidden shadow-xl border-2"
                style={{ borderColor: "#D4AF37" }}
              >
                <ImageWithFallback
                  src={img_structural}
                  alt="3D structural analysis model"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Text column */}
            <div>
              <div className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#D4AF37", fontFamily: "'Poppins', sans-serif" }}>
                About RCC Structural Engineering
              </div>
              <h2 className="text-4xl font-bold mb-6 leading-tight" style={{ color: "#002244", fontFamily: "'Poppins', sans-serif" }}>
                Engineering Excellence,<br />Built on Trust
              </h2>
              <p className="text-muted-foreground mb-5 leading-relaxed">
                RCC Structural Engineering is a leading structural engineering and construction consulting firm with over 12 years of proven expertise. We specialize in the complete structural lifecycle — from concept design and analysis through construction supervision and quality certification.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Our firm has successfully delivered over 150 projects spanning residential apartments, commercial complexes, industrial structures, and critical infrastructure including railway station buildings across Maharashtra and beyond.
              </p>

              {/* Mission / Vision / Values */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                {[
                  { label: "Mission", text: "Delivering safe, efficient, and economical structural solutions that stand the test of time." },
                  { label: "Vision", text: "To be Maharashtra's most trusted structural engineering practice, known for precision and integrity." },
                  { label: "Values", text: "Safety First · Technical Excellence · Client Commitment · Timely Delivery" },
                ].map((item) => (
                  <div key={item.label} className="p-4 rounded-xl border" style={{ borderColor: "rgba(0,34,68,0.12)", background: "#F8F9FB" }}>
                    <div className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: "#D4AF37", fontFamily: "'Poppins', sans-serif" }}>{item.label}</div>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>

              {/* Achievement highlights */}
              <div className="flex flex-wrap gap-4">
                {[
                  { val: "150+", lbl: "Projects" },
                  { val: "12+", lbl: "Years" },
                  { val: "80+", lbl: "Clients" },
                  { val: "IS Codes", lbl: "Compliant" },
                ].map((a) => (
                  <div key={a.lbl} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: "#D4AF37" }} />
                    <span className="text-sm font-semibold" style={{ color: "#002244", fontFamily: "'Poppins', sans-serif" }}>{a.val} {a.lbl}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ─────────────────────────────────────────────────────── */}
      <section id="services" className="py-24" style={{ background: "#F8F9FB" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#D4AF37", fontFamily: "'Poppins', sans-serif" }}>
              What We Do
            </div>
            <h2 className="text-4xl font-bold mb-4" style={{ color: "#002244", fontFamily: "'Poppins', sans-serif" }}>
              Our Engineering Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive structural engineering and construction consulting solutions tailored to every project scale and complexity.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {SERVICES.map((svc, i) => (
              <div
                key={i}
                className="group bg-white rounded-2xl p-6 border hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-default"
                style={{ borderColor: "rgba(0,34,68,0.08)" }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                  style={{ background: "linear-gradient(135deg, #002244, #003366)" }}
                >
                  <svc.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-sm mb-2 leading-snug" style={{ color: "#002244", fontFamily: "'Poppins', sans-serif" }}>
                  {svc.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{svc.desc}</p>
                <div className="mt-4 flex items-center gap-1 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: "#D4AF37" }}>
                  Learn more <ChevronRight className="w-3 h-3" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ────────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#D4AF37", fontFamily: "'Poppins', sans-serif" }}>
                Why Us
              </div>
              <h2 className="text-4xl font-bold mb-6 leading-tight" style={{ color: "#002244", fontFamily: "'Poppins', sans-serif" }}>
                Why Choose RCC<br />Structural Engineering?
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Clients across Maharashtra trust us because we combine deep technical expertise with a genuine commitment to their project's success. Here is what sets us apart:
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { val: "IS 456", lbl: "Code Compliance" },
                  { val: "ETABS", lbl: "Advanced Analysis" },
                  { val: "24/7", lbl: "Project Support" },
                  { val: "Zero", lbl: "Structural Failures" },
                ].map((item) => (
                  <div key={item.lbl} className="p-4 rounded-xl text-center" style={{ background: "#F8F9FB", border: "1px solid rgba(0,34,68,0.08)" }}>
                    <div className="text-xl font-bold mb-1" style={{ color: "#D4AF37", fontFamily: "'Poppins', sans-serif" }}>{item.val}</div>
                    <div className="text-xs text-muted-foreground">{item.lbl}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              {WHY_US.map((item, i) => (
                <div
                  key={i}
                  className="p-5 rounded-2xl border hover:shadow-lg transition-all"
                  style={{ borderColor: "rgba(0,34,68,0.08)", background: "#F8F9FB" }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
                    style={{ background: "linear-gradient(135deg, rgba(212,175,55,0.15), rgba(212,175,55,0.05))", border: "1px solid rgba(212,175,55,0.3)" }}
                  >
                    <item.icon className="w-5 h-5" style={{ color: "#D4AF37" }} />
                  </div>
                  <h3 className="font-semibold text-sm mb-2" style={{ color: "#002244", fontFamily: "'Poppins', sans-serif" }}>{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Portfolio ─────────────────────────────────────────────────────── */}
      <section id="projects" className="py-24" style={{ background: "#F8F9FB" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#D4AF37", fontFamily: "'Poppins', sans-serif" }}>
              Our Portfolio
            </div>
            <h2 className="text-4xl font-bold mb-4" style={{ color: "#002244", fontFamily: "'Poppins', sans-serif" }}>
              Completed Projects
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              A showcase of structural engineering projects delivered across residential, commercial, and infrastructure sectors.
            </p>

            {/* Filter buttons */}
            <div className="flex flex-wrap justify-center gap-3">
              {["All", "Residential", "Commercial", "Industrial", "Infrastructure"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className="px-5 py-2 rounded-full text-sm font-medium transition-all"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    background: activeFilter === cat ? "#002244" : "white",
                    color: activeFilter === cat ? "white" : "#6B7280",
                    border: `1px solid ${activeFilter === cat ? "#002244" : "rgba(0,0,0,0.1)"}`,
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, i) => (
              <div
                key={i}
                className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-400"
              >
                <div className="relative h-64 bg-gray-100">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Overlay */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5"
                    style={{ background: "linear-gradient(to top, rgba(0,22,68,0.95) 0%, rgba(0,22,68,0.6) 60%, transparent 100%)" }}
                  >
                    <div className="text-white text-xs mb-1 opacity-80">{project.services}</div>
                    <div className="flex items-center gap-1 text-xs font-semibold" style={{ color: "#D4AF37" }}>
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
                </div>
                <div className="bg-white p-5 border-t" style={{ borderColor: "rgba(0,34,68,0.06)" }}>
                  <h3 className="font-semibold text-sm mb-1 leading-snug" style={{ color: "#002244", fontFamily: "'Poppins', sans-serif" }}>
                    {project.title}
                  </h3>
                  <div className="text-xs text-muted-foreground">{project.client}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process Timeline ──────────────────────────────────────────────── */}
      <section id="process" className="py-24" style={{ background: "#002244" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#D4AF37", fontFamily: "'Poppins', sans-serif" }}>
              How We Work
            </div>
            <h2 className="text-4xl font-bold mb-4 text-white" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Our Engineering Process
            </h2>
            <p className="max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.6)" }}>
              A systematic 7-step process that ensures every project is delivered to the highest technical standards, on time and within budget.
            </p>
          </div>

          {/* Timeline — desktop horizontal, mobile vertical */}
          <div className="hidden lg:block relative">
            {/* Connecting line */}
            <div className="absolute top-8 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.4), transparent)" }} />

            <div className="grid grid-cols-7 gap-4">
              {PROCESS_STEPS.map((step, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  {/* Dot */}
                  <div
                    className="relative w-16 h-16 rounded-full flex items-center justify-center mb-5 flex-shrink-0 z-10"
                    style={{ background: "linear-gradient(135deg, #D4AF37, #B8962E)", boxShadow: "0 0 24px rgba(212,175,55,0.3)" }}
                  >
                    <span className="text-white font-bold text-sm" style={{ fontFamily: "'Poppins', sans-serif" }}>{step.num}</span>
                  </div>
                  <h3 className="text-xs font-bold text-white mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>{step.title}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile timeline */}
          <div className="lg:hidden space-y-6">
            {PROCESS_STEPS.map((step, i) => (
              <div key={i} className="flex gap-5">
                <div className="flex flex-col items-center">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: "linear-gradient(135deg, #D4AF37, #B8962E)" }}
                  >
                    <span className="text-white font-bold text-xs" style={{ fontFamily: "'Poppins', sans-serif" }}>{step.num}</span>
                  </div>
                  {i < PROCESS_STEPS.length - 1 && (
                    <div className="w-px flex-1 mt-2" style={{ background: "rgba(212,175,55,0.3)" }} />
                  )}
                </div>
                <div className="pb-6">
                  <h3 className="text-sm font-bold text-white mb-1" style={{ fontFamily: "'Poppins', sans-serif" }}>{step.title}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ──────────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#D4AF37", fontFamily: "'Poppins', sans-serif" }}>
              Client Testimonials
            </div>
            <h2 className="text-4xl font-bold mb-4" style={{ color: "#002244", fontFamily: "'Poppins', sans-serif" }}>
              What Our Clients Say
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {TESTIMONIALS.map((t, i) => (
              <div
                key={i}
                className="relative p-6 rounded-2xl border"
                style={{
                  background: "linear-gradient(135deg, rgba(0,34,68,0.03), rgba(212,175,55,0.04))",
                  borderColor: "rgba(0,34,68,0.08)",
                  backdropFilter: "blur(8px)",
                }}
              >
                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-current" style={{ color: "#D4AF37" }} />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mb-5 leading-relaxed italic">{`"${t.review}"`}</p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
                    style={{ background: "linear-gradient(135deg, #002244, #003366)" }}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <div className="text-sm font-semibold" style={{ color: "#002244", fontFamily: "'Poppins', sans-serif" }}>{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.position}</div>
                  </div>
                </div>
                {/* Decorative quote */}
                <div className="absolute top-4 right-5 text-5xl font-serif leading-none opacity-8" style={{ color: "#D4AF37", opacity: 0.12 }}>"</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <section className="py-24" style={{ background: "#F8F9FB" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#D4AF37", fontFamily: "'Poppins', sans-serif" }}>
              FAQ
            </div>
            <h2 className="text-4xl font-bold mb-4" style={{ color: "#002244", fontFamily: "'Poppins', sans-serif" }}>
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <div
                key={i}
                className="rounded-2xl border overflow-hidden"
                style={{ borderColor: "rgba(0,34,68,0.08)", background: "white" }}
              >
                <button
                  className="w-full flex items-center justify-between p-5 text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-semibold text-sm pr-4" style={{ color: "#002244", fontFamily: "'Poppins', sans-serif" }}>{faq.q}</span>
                  <span className="flex-shrink-0" style={{ color: "#D4AF37" }}>
                    {openFaq === i ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 pt-0">
                    <div className="h-px mb-4" style={{ background: "rgba(0,34,68,0.06)" }} />
                    <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ───────────────────────────────────────────────────────── */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#D4AF37", fontFamily: "'Poppins', sans-serif" }}>
              Get In Touch
            </div>
            <h2 className="text-4xl font-bold mb-4" style={{ color: "#002244", fontFamily: "'Poppins', sans-serif" }}>
              Contact Us
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Ready to start your structural engineering project? Reach out for a free initial consultation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="p-8 rounded-3xl border shadow-sm" style={{ borderColor: "rgba(0,34,68,0.08)" }}>
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4" style={{ background: "rgba(212,175,55,0.15)" }}>
                    <CheckCircle2 className="w-8 h-8" style={{ color: "#D4AF37" }} />
                  </div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: "#002244", fontFamily: "'Poppins', sans-serif" }}>Message Received!</h3>
                  <p className="text-muted-foreground text-sm">Thank you for reaching out. Our team will contact you within 24 hours.</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 px-6 py-3 rounded-xl text-sm font-semibold text-white"
                    style={{ background: "#002244", fontFamily: "'Poppins', sans-serif" }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-lg font-bold mb-6" style={{ color: "#002244", fontFamily: "'Poppins', sans-serif" }}>Request a Consultation</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold mb-1.5" style={{ color: "#002244", fontFamily: "'Poppins', sans-serif" }}>Full Name *</label>
                      <input
                        required
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border text-sm outline-none focus:ring-2 transition-all"
                        style={{ borderColor: "rgba(0,34,68,0.15)", background: "#F8F9FB" }}
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold mb-1.5" style={{ color: "#002244", fontFamily: "'Poppins', sans-serif" }}>Email Address *</label>
                      <input
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border text-sm outline-none focus:ring-2 transition-all"
                        style={{ borderColor: "rgba(0,34,68,0.15)", background: "#F8F9FB" }}
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold mb-1.5" style={{ color: "#002244", fontFamily: "'Poppins', sans-serif" }}>Phone Number</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border text-sm outline-none focus:ring-2 transition-all"
                        style={{ borderColor: "rgba(0,34,68,0.15)", background: "#F8F9FB" }}
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold mb-1.5" style={{ color: "#002244", fontFamily: "'Poppins', sans-serif" }}>Service Required</label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border text-sm outline-none focus:ring-2 transition-all"
                        style={{ borderColor: "rgba(0,34,68,0.15)", background: "#F8F9FB" }}
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
                    <label className="block text-xs font-semibold mb-1.5" style={{ color: "#002244", fontFamily: "'Poppins', sans-serif" }}>Project Description</label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border text-sm outline-none focus:ring-2 transition-all resize-none"
                      style={{ borderColor: "rgba(0,34,68,0.15)", background: "#F8F9FB" }}
                      placeholder="Briefly describe your project, location, and requirements..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl font-semibold text-white transition-all hover:scale-[1.02] hover:shadow-lg"
                    style={{ background: "linear-gradient(135deg, #002244, #003366)", fontFamily: "'Poppins', sans-serif" }}
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Contact info */}
            <div className="space-y-6">
              {/* Info cards */}
              {[
                { icon: Phone, label: "Phone / WhatsApp", value: "+91 98765 43210", sub: "Mon–Sat, 9am–7pm", href: "tel:+919876543210" },
                { icon: Mail, label: "Email", value: "info@rccstructural.com", sub: "We respond within 24 hours", href: "mailto:info@rccstructural.com" },
                { icon: MapPin, label: "Office Address", value: "RCC Structural Engineering", sub: "Latur, Maharashtra, India – 413512", href: "#" },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  className="flex items-start gap-4 p-5 rounded-2xl border hover:shadow-md transition-all group block"
                  style={{ borderColor: "rgba(0,34,68,0.08)", background: "#F8F9FB" }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform"
                    style={{ background: "linear-gradient(135deg, #002244, #003366)" }}
                  >
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-muted-foreground mb-0.5">{item.label}</div>
                    <div className="font-semibold text-sm" style={{ color: "#002244", fontFamily: "'Poppins', sans-serif" }}>{item.value}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{item.sub}</div>
                  </div>
                </a>
              ))}

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl font-semibold text-white transition-all hover:scale-[1.02] hover:shadow-lg"
                style={{ background: "linear-gradient(135deg, #25D366, #128C7E)", fontFamily: "'Poppins', sans-serif" }}
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </a>

              {/* Map placeholder */}
              <div
                className="rounded-2xl overflow-hidden border h-48 flex items-center justify-center"
                style={{ borderColor: "rgba(0,34,68,0.08)", background: "linear-gradient(135deg, #EEF0F4, #E8EBF0)" }}
              >
                <div className="text-center">
                  <MapPin className="w-8 h-8 mx-auto mb-2" style={{ color: "#D4AF37" }} />
                  <div className="text-sm font-semibold" style={{ color: "#002244", fontFamily: "'Poppins', sans-serif" }}>Latur, Maharashtra</div>
                  <div className="text-xs text-muted-foreground">Google Maps integration</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ────────────────────────────────────────────────────────── */}
      <footer style={{ background: "#001122" }}>
        {/* Top gold bar */}
        <div className="h-px w-full" style={{ background: "linear-gradient(90deg, transparent, #D4AF37, transparent)" }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: "linear-gradient(135deg, #D4AF37, #B8962E)" }}>
                  <Building2 className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-white font-bold text-sm leading-tight" style={{ fontFamily: "'Poppins', sans-serif" }}>RCC STRUCTURAL</div>
                  <div className="text-xs leading-tight" style={{ color: "#D4AF37", fontFamily: "'Poppins', sans-serif" }}>ENGINEERING</div>
                </div>
              </div>
              <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(255,255,255,0.5)" }}>
                Professional structural engineering and construction consulting firm serving clients across Maharashtra with integrity and engineering excellence.
              </p>
              {/* Social */}
              <div className="flex gap-3">
                {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-8 h-8 rounded-lg flex items-center justify-center transition-all hover:scale-110"
                    style={{ background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.6)" }}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick links */}
            <div>
              <h4 className="text-sm font-bold mb-5 text-white" style={{ fontFamily: "'Poppins', sans-serif" }}>Quick Links</h4>
              <ul className="space-y-3">
                {NAV_LINKS.map((l) => (
                  <li key={l.href}>
                    <button
                      onClick={() => scrollTo(l.href)}
                      className="text-sm flex items-center gap-2 hover:text-white transition-colors"
                      style={{ color: "rgba(255,255,255,0.5)" }}
                    >
                      <ChevronRight className="w-3.5 h-3.5" style={{ color: "#D4AF37" }} />
                      {l.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-sm font-bold mb-5 text-white" style={{ fontFamily: "'Poppins', sans-serif" }}>Services</h4>
              <ul className="space-y-3">
                {SERVICES.slice(0, 7).map((s, i) => (
                  <li key={i} className="text-sm flex items-center gap-2" style={{ color: "rgba(255,255,255,0.5)" }}>
                    <ChevronRight className="w-3.5 h-3.5 flex-shrink-0" style={{ color: "#D4AF37" }} />
                    {s.title}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-sm font-bold mb-5 text-white" style={{ fontFamily: "'Poppins', sans-serif" }}>Contact Details</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "#D4AF37" }} />
                  <span className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>Latur, Maharashtra,<br />India – 413512</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 flex-shrink-0" style={{ color: "#D4AF37" }} />
                  <a href="tel:+919876543210" className="text-sm hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.5)" }}>+91 98765 43210</a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-4 h-4 flex-shrink-0" style={{ color: "#D4AF37" }} />
                  <a href="mailto:info@rccstructural.com" className="text-sm hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.5)" }}>info@rccstructural.com</a>
                </li>
              </ul>

              <div className="mt-6 p-3 rounded-xl text-xs" style={{ background: "rgba(212,175,55,0.1)", border: "1px solid rgba(212,175,55,0.2)", color: "rgba(255,255,255,0.6)" }}>
                <span style={{ color: "#D4AF37" }} className="font-semibold">Office Hours:</span><br />
                Monday – Saturday: 9:00 AM – 7:00 PM
              </div>
            </div>
          </div>
        </div>

        {/* Copyright bar */}
        <div className="border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
              © 2024 RCC Structural Engineering. All rights reserved.
            </p>
            <p className="text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>
              Structural Engineering · RCC Design · Construction Consulting · Maharashtra
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}
