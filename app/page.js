import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Projects from "@/components/projects";
import Experience from "@/components/experience";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">

      {/* Grid Background */}
      {/* <div
        className="
  fixed inset-0 -z-20

  bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),
      linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)]

  bg-[size:70px_70px]

  [mask-image:radial-gradient(circle_at_center,black_55%,transparent_100%)]
  "
      /> */}

      {/* Ambient Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">

        {/* Main Glow */}
        <div
          className="
          absolute
          right-[-30%]
          top-[-10%]

          h-[450px]
          w-[450px]

          sm:h-[600px]
          sm:w-[600px]

          md:h-[800px]
          md:w-[800px]

          lg:h-[1100px]
          lg:w-[1100px]

          rounded-full
          bg-emerald-500/20
          blur-[100px]

          sm:blur-[140px]
          md:blur-[180px]
          lg:blur-[220px]
          "
        />

        {/* Secondary Glow */}
        <div
          className="
          absolute
          left-[-35%]
          bottom-[-20%]

          h-[350px]
          w-[350px]

          sm:h-[500px]
          sm:w-[500px]

          md:h-[650px]
          md:w-[650px]

          lg:h-[900px]
          lg:w-[900px]

          rounded-full
          bg-emerald-400/8
          blur-[80px]

          sm:blur-[120px]
          md:blur-[160px]
          lg:blur-[200px]
          "
        />
      </div>

      <Navbar />

      <main className="mx-auto max-w-6xl px-6">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}