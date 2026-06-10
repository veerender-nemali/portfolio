import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Projects from "@/components/projects";
import Experience from "@/components/experience";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <div className="relative overflow-x-hidden">

      {/* Ambient Background */}
      <div className="pointer-events-none fixed inset-0 -z-10">

        {/* Main Glow */}
        <div
          className="
          absolute
          right-[-45%]
          top-[-20%]

          h-[500px]
          w-[500px]

          sm:h-[700px]
          sm:w-[700px]

          lg:h-[1200px]
          lg:w-[1200px]

          rounded-full
          bg-emerald-500/12
          blur-[120px]

          sm:blur-[180px]
          lg:blur-[260px]
          "
        />

        {/* Secondary Glow */}
        <div
          className="
          absolute
          left-[-40%]
          bottom-[-30%]

          h-[400px]
          w-[400px]

          sm:h-[600px]
          sm:w-[600px]

          lg:h-[1000px]
          lg:w-[1000px]

          rounded-full
          bg-emerald-400/6
          blur-[100px]

          sm:blur-[160px]
          lg:blur-[220px]
          "
        />

        {/* Subtle radial overlay */}
        <div
          className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_80%_10%,rgba(16,185,129,0.08),transparent_40%)]
          "
        />
      </div>

      <Navbar />

      <main className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8 space-y-14 md:space-y-0">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}