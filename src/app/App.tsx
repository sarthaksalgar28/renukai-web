import { ThemeProvider } from "@/app/contexts/ThemeContext";
import { Navbar } from "@/app/components/sections/Navbar";
import { Hero } from "@/app/components/sections/Hero";
import { About } from "@/app/components/sections/About";
import { Services } from "@/app/components/sections/Services";
import { WhyUs } from "@/app/components/sections/WhyUs";
import { Team } from "@/app/components/sections/Team";
import { Projects } from "@/app/components/sections/Projects";
import { Process } from "@/app/components/sections/Process";
import { Clients } from "@/app/components/sections/Clients";
import { Contact } from "@/app/components/sections/Contact";
import { Footer } from "@/app/components/sections/Footer";

function scrollTo(href: string) {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground" style={{ fontFamily: "'Inter', sans-serif" }}>
        <Navbar scrollTo={scrollTo} />
        <Hero scrollTo={scrollTo} />
        <About />
        <Services />
        <WhyUs />
        <Team />
        <Projects />
        <Process />
        <Clients />
        <Contact />
        <Footer scrollTo={scrollTo} />
      </div>
    </ThemeProvider>
  );
}
