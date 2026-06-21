import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Projects from "@/components/projects";
import Experience from "@/components/experience";
import Contact from "@/components/contact";
import ScrollProgress from "@/components/scroll-progress";
import Learning from "@/components/learning";
// import TerminalCard from "@/components/terminal-card";

export default function Home() {
  return (
    <div className="relative overflow-x-hidden">
      {/* Ambient Background */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        {/* Top Right Main Glow */}
        <div className="absolute top-[-25%] right-[-35%] h-[500px] w-[500px] rounded-full bg-emerald-500/8 blur-[140px] sm:h-[800px] sm:w-[800px] sm:blur-[220px] lg:h-[1200px] lg:w-[1200px] lg:blur-[300px]" />

        {/* Bottom Left Secondary Glow */}
        {/* <div className="absolute bottom-[-30%] left-[-35%] h-[400px] w-[400px] rounded-full bg-emerald-400/5 blur-[120px] sm:h-[700px] sm:w-[700px] sm:blur-[180px] lg:h-[1000px] lg:w-[1000px] lg:blur-[260px]" /> */}

        {/* Center Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/[0.03] blur-[200px]" />

        {/* Radial Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(16,185,129,0.06),transparent_35%)]" />

        {/* Subtle Grid Fade */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(0,0,0,0.15))]" />
      </div>

      <ScrollProgress />

      <Navbar />

      <main className="mx-auto max-w-6xl space-y-14 px-5 sm:px-6 md:space-y-0 lg:px-8">
        <Hero />
        <About />
        {/* <Learning /> */}
        {/* <TerminalCard /> */}
        <Projects />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}
