import type { LucideIcon } from "lucide-react";

export interface NavLink {
  label: string;
  href: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Service {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export interface WhyUsItem {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export interface Project {
  image: string;
  images?: string[];
  imagePosition?: string;
  title: string;
  location: string;
  category: string;
  services: string;
  client: string;
}

export interface ProcessStep {
  num: string;
  title: string;
  desc: string;
}

export interface Testimonial {
  name: string;
  position: string;
  review: string;
  rating: number;
  avatar: string;
}

export interface FAQ {
  q: string;
  a: string;
}

export interface Theme {
  id: string;
  name: string;
  label: string;
  primary: string;
  primaryDark: string;
  primaryRgb: string;
  accent: string;
  accentDark: string;
  accentRgb: string;
  heroBg: string;
  heroOverlay: string;
  sectionBg: string;
  cardBg: string;
  footerBg: string;
  navBg: string;
}
