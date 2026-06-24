import {
  Layers, Layers3, Search, Home, Building2, Factory, HardHat,
  Briefcase, Ruler, Wrench, Award, TrendingUp, Shield, Clock, Users, Zap, FileSearch,
} from "lucide-react";
import type { NavLink, Stat, Service, WhyUsItem, Project, ProcessStep, Testimonial, FAQ, Theme } from "@/app/types";

import img_om_apartment from "@/imports/OM_BUILDERS_APARTMENT_VIEW_4.png";
import img_elite_township from "@/imports/elite_township.jpg";
import img_aerial from "@/imports/IMG-20250909-WA0034.jpg";
import img_residential from "@/imports/IMG-20250909-WA0018.jpg";
import img_multistorey from "@/imports/multistoreyresidential.jpg";
import img_structural from "@/imports/Screenshot__16_.png";
import img_s14 from "@/imports/Screenshot__14_.png";
import img_s15 from "@/imports/Screenshot__15_.png";
import img_s17 from "@/imports/Screenshot__17_.png";
import img_s18 from "@/imports/Screenshot__18_.png";
import img_s19 from "@/imports/Screenshot__19_.png";
import img_jspm from "@/imports/jspm_logo.png";
import img_jspm1 from "@/imports/jspm1.jpg";
import img_jspm2 from "@/imports/jspm2.jpg";
import img_mit_r1 from "@/imports/mit1.jpg";
import img_mit_r2 from "@/imports/mit2.jpg";
import img_mit_r3 from "@/imports/mit3.jpg";
import img_mit_r4 from "@/imports/mit4.jpg";
import img_mit_r5 from "@/imports/mit5.jpg";
import img_mit_r6 from "@/imports/mit6.jpg";
import img_mit_r7 from "@/imports/mit7.jpg";
import img_rajmane_r1 from "@/imports/rajmane1.jpg";
import img_rajmane_r2 from "@/imports/rajmane2.jpg";
import img_ombuilder_r1 from "@/imports/ombuilder1.png";
import img_ombuilder_r2 from "@/imports/ombuilder2.png";
import img_ombuilder_r3 from "@/imports/ombuilder3.png";
import img_ombuilder_r4 from "@/imports/ombuilder4.png";
import img_panchshil_r1 from "@/imports/PANnchshil1.png";
import img_birajdar_r1 from "@/imports/birajdar1.png";
import img_birajdar_r2 from "@/imports/birajdar2.png";

export { img_om_apartment, img_aerial, img_elite_township, img_residential, img_multistorey, img_structural, img_s14, img_s15, img_s17, img_s18, img_s19, img_jspm, img_jspm1, img_jspm2, img_mit_r1, img_mit_r2, img_mit_r3, img_mit_r4, img_mit_r5, img_mit_r6, img_mit_r7, img_rajmane_r1, img_rajmane_r2, img_ombuilder_r1, img_ombuilder_r2, img_ombuilder_r3, img_ombuilder_r4, img_panchshil_r1, img_birajdar_r1, img_birajdar_r2 };

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Team", href: "#team" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export const STATS: Stat[] = [
  { value: "170+", label: "Projects Completed" },
  { value: "20+", label: "Cities Served" },
  { value: "100%", label: "Quality Assured" },
];

export const SERVICES: Service[] = [
  { icon: Layers, title: "RCC Structural Design", desc: "Complete reinforced cement concrete structural design for all building types, ensuring structural integrity and code compliance." },
  { icon: Search, title: "Structural Analysis", desc: "Advanced analysis using STAAD Pro, ETABS, and manual methods to determine load paths and structural behavior." },
  { icon: Home, title: "Residential Building Design", desc: "Custom structural design for bungalows, row houses, villas, and multi-storey residential apartments." },
  { icon: Building2, title: "Commercial Building Design", desc: "Structural solutions for offices, malls, hotels, and commercial complexes with optimal column spacing." },
  { icon: Factory, title: "Structural Design", desc: "Heavy-duty industrial sheds, warehouses, and pre-engineered building structural design." },
  { icon: HardHat, title: "Construction Supervision", desc: "On-site quality supervision ensuring construction conforms to approved structural drawings and standards." },
  { icon: Briefcase, title: "Project Management", desc: "End-to-end project management including scheduling, resource planning, and progress monitoring (PMC Services)." },
  { icon: Ruler, title: "Site Inspection", desc: "Detailed structural site inspections, condition assessments, and structural audit reports for existing buildings." },
  { icon: Wrench, title: "Retrofitting & Rehabilitation", desc: "Strengthening of distressed structures using FRP jacketing, column jacketing, and modern repair techniques." },
  { icon: Layers3, title: "BIM Services", desc: "Building Information Modeling (BIM) for coordinated 3D structural models, clash detection, quantity take-offs, and seamless collaboration across architectural, MEP, and structural disciplines — delivered in Revit and compatible formats." },
  { icon: Zap, title: "Post Tensioning & Pre Tensioning Works", desc: "Design and supervision of post-tensioned and pre-tensioned slabs, beams, and bridge elements for long spans and load-intensive structures." },
  { icon: FileSearch, title: "Structural Auditing", desc: "Comprehensive structural audit of existing buildings including condition assessment, load-carrying capacity evaluation, crack mapping, and written audit certification." },
];

export const WHY_US: WhyUsItem[] = [
  { icon: Award, title: "Certified Engineers", desc: "Our team comprises licensed structural engineers with advanced degrees and professional certifications from leading institutions." },
  { icon: TrendingUp, title: "Proven Expertise", desc: "Executing complex structural projects across residential, commercial, industrial, and infrastructure sectors." },
  { icon: Shield, title: "Quality Assurance", desc: "Rigorous design checks, peer reviews, and adherence to IS codes, NBC, and international standards on every project." },
  { icon: Clock, title: "Timely Delivery", desc: "We respect project schedules. Systematic planning and monitoring ensure your structural designs are delivered on time." },
  { icon: Briefcase, title: "Cost-Effective Solutions", desc: "Optimized structural designs that reduce material usage while maintaining full safety — saving significant construction costs." },
  { icon: Users, title: "Modern Engineering Practices", desc: "Latest software tools, BIM workflows, and contemporary design methodologies for precision engineering outcomes." },
];

export const PROJECTS: Project[] = [
  {
    image: img_ombuilder_r1,
    images: [img_ombuilder_r1, img_ombuilder_r2, img_ombuilder_r3, img_ombuilder_r4],
    title: "OM Builders – P+6 Residential Apartment",
    location: "Maharashtra",
    category: "Commercial",
    services: "RCC Structural Design, Construction Supervision",
    client: "OM Builders",
  },
  {
    image: img_elite_township,
    title: "84 Elite – Township Development",
    location: "Latur, Maharashtra",
    category: "Residential",
    services: "Structural Design, Project Management, CAD Drafting",
    client: "JK Associates",
  },
  {
    image: img_multistorey,
    title: "Multi-Storey Residential Complex",
    location: "Solapur, Maharashtra",
    category: "Residential",
    services: "RCC Structural Design, Site Inspection",
    client: "Confidential",
  },

  {
    image: img_jspm1,
    images: [img_jspm1, img_jspm2],
    imagePosition: "center 20%",
    title: "JSPM Institutes – G+7 College Building",
    location: "Latur, Maharashtra",
    category: "Commercial",
    services: "Structural Design (Post-Tensioning), PMC Services, Structural Audit",
    client: "JSPM Institutes Latur",
  },
  {
    image: img_mit_r1,
    images: [img_mit_r1, img_mit_r2, img_mit_r3, img_mit_r4, img_mit_r5, img_mit_r6, img_mit_r7],
    title: "MIT – Multi-Storey Institutional Complex",
    location: "Latur, Maharashtra",
    category: "Commercial",
    services: "RCC Structural Design, 3D Visualization, PMC Services",
    client: "MIT",
  },
  {
    image: img_rajmane_r1,
    images: [img_rajmane_r1, img_rajmane_r2],
    title: "Rajmane Commercial Apartment",
    location: "Latur, Maharashtra",
    category: "Commercial",
    services: "RCC Structural Design, 3D Visualization",
    client: "Rajmane",
  },
  {
    image: img_panchshil_r1,
    title: "Panchshil Developers – G+5 Residential Apartment",
    location: "Latur, Maharashtra",
    category: "Residential",
    services: "RCC Structural Design, Construction Supervision",
    client: "Panchshil Developers",
  },
  {
    image: img_birajdar_r1,
    images: [img_birajdar_r1, img_birajdar_r2],
    title: "Tushar Birajdar – G+5 Residential Apartment",
    location: "Deoni, Maharashtra",
    category: "Residential",
    services: "RCC Structural Design, Construction Supervision",
    client: "Tushar Birajdar",
  },

];

export const PROCESS_STEPS: ProcessStep[] = [
  { num: "01", title: "Initial Consultation", desc: "Understanding client requirements, project scope, site conditions, and budget constraints." },
  { num: "02", title: "Site Analysis", desc: "Soil investigation review, site visit, and assessment of existing structural conditions." },
  { num: "03", title: "Structural Planning", desc: "Conceptual structural layout, system selection, and load calculation framework." },
  { num: "04", title: "Design Development", desc: "Detailed structural analysis and design using STAAD Pro / ETABS and IS code provisions." },
  { num: "05", title: "Approval Process", desc: "Preparation of drawings and documentation for local authority / municipal approvals." },
  { num: "06", title: "Execution Support", desc: "On-site support, RFI responses, and technical guidance during construction phase." },
  { num: "07", title: "Quality Verification", desc: "Final structural inspection, certification, and project closeout documentation." },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Rajesh Patil",
    position: "Director, OM Builders",
    review: "Renukai Consultants delivered an exceptional structural design for our P+6 apartment project. The team's technical depth and attention to detail gave us complete confidence throughout the project.",
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
    review: "We engaged RCC Consultants for our G+7 college building with post-tensioning. The team demonstrated exemplary expertise and the structural audit report was extremely thorough.",
    rating: 5,
    avatar: "SM",
  },

];

export const FAQS: FAQ[] = [
  {
    q: "What engineering services do you provide?",
    a: "We offer a comprehensive range of structural consulting & designing services including RCC structural design, structural analysis, residential and commercial building design, structural design, construction supervision, project management (PMC), site inspection, structural audit, retrofitting, quantity estimation, and CAD drafting services.",
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

export const CATEGORY_COLORS: Record<string, string> = {
  Residential: "bg-blue-100 text-blue-800",
  Commercial: "bg-purple-100 text-purple-800",
  Industrial: "bg-orange-100 text-orange-800",

};

export const THEMES: Theme[] = [
  {
    id: "navy-gold",
    name: "Navy & Gold",
    label: "Professional",
    primary: "#002244",
    primaryDark: "#001122",
    primaryRgb: "0,34,68",
    accent: "#D4AF37",
    accentDark: "#B8962E",
    accentRgb: "212,175,55",
    heroBg: "#001833",
    heroOverlay: "rgba(0,22,68,0.92)",
    sectionBg: "#F8F9FB",
    cardBg: "#FFFFFF",
    footerBg: "#001122",
    navBg: "#002244",
  },
  {
    id: "slate-cyan",
    name: "Slate & Cyan",
    label: "Modern",
    primary: "#0F172A",
    primaryDark: "#020617",
    primaryRgb: "15,23,42",
    accent: "#06B6D4",
    accentDark: "#0891B2",
    accentRgb: "6,182,212",
    heroBg: "#0A0F1E",
    heroOverlay: "rgba(10,15,30,0.92)",
    sectionBg: "#F1F5F9",
    cardBg: "#FFFFFF",
    footerBg: "#020617",
    navBg: "#0F172A",
  },
  {
    id: "forest-amber",
    name: "Forest & Amber",
    label: "Premium",
    primary: "#1A3A2A",
    primaryDark: "#0D1F16",
    primaryRgb: "26,58,42",
    accent: "#F59E0B",
    accentDark: "#D97706",
    accentRgb: "245,158,11",
    heroBg: "#0D1F16",
    heroOverlay: "rgba(13,31,22,0.92)",
    sectionBg: "#F7F8F4",
    cardBg: "#FFFFFF",
    footerBg: "#0A1510",
    navBg: "#1A3A2A",
  },
  {
    id: "forest-lime",
    name: "Forest & Lime",
    label: "Natural",
    primary: "#2B521A",
    primaryDark: "#1A3310",
    primaryRgb: "43,82,26",
    accent: "#8DB833",
    accentDark: "#6E9228",
    accentRgb: "141,184,51",
    heroBg: "#182A10",
    heroOverlay: "rgba(24,42,16,0.93)",
    sectionBg: "#F4F7F0",
    cardBg: "#FFFFFF",
    footerBg: "#101E0A",
    navBg: "#2B521A",
  },
  {
    id: "teal-rose",
    name: "Teal & Rose",
    label: "Coastal",
    primary: "#1B3A48",
    primaryDark: "#0E2030",
    primaryRgb: "27,58,72",
    accent: "#8E4255",
    accentDark: "#6E3241",
    accentRgb: "142,66,85",
    heroBg: "#101E28",
    heroOverlay: "rgba(16,30,40,0.93)",
    sectionBg: "#EFF5F7",
    cardBg: "#FFFFFF",
    footerBg: "#090F16",
    navBg: "#1B3A48",
  },
];
