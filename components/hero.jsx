"use client";

import { FiArrowRight, FiFileText } from "react-icons/fi";
import { heroSectionLinks } from "../lib/utils";
import TypingName from "./ui/typing-name";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center md:pt-0"
    >
      <div className="flex max-w-5xl flex-col items-center justify-center">
        {/* Status */}
        {/* <div className="text-muted-foreground inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-2 text-xs">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            making things that should exist but don't yet. simple is hard, but
            worth it.
          </div> */}

        {/* Name */}
        {/* <h1 className="mt-8 text-5xl leading-[0.9] font-semibold tracking-[-0.08em] sm:text-6xl md:text-7xl lg:text-8xl">
            Veerender{" "}
            <span className="from-foreground via-foreground bg-linear-to-r to-emerald-400 bg-clip-text text-transparent">
              Nemali
            </span>
          </h1> */}
        <TypingName />

        {/* Role */}
        {/* <p className="text-muted-foreground mt-6 text-xl md:text-2xl">
            Software Engineer
          </p> */}

        {/* Main Value */}
        {/* <p className="text-muted-foreground mt-8 max-w-3xl text-lg leading-relaxed md:text-xl">
            I build scalable web applications and enjoy solving complex
            engineering problems. Experienced across frontend and backend
            development, with a strong focus on performance, clean architecture,
            and user experience.
          </p> */}

        <div className="mt-4 flex flex-wrap gap-4">
          {/* Primary CTA */}
          <a
            href="#projects"
            className="group md:text-md text-foreground inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5 text-xs backdrop-blur-sm transition-all duration-300 hover:border-emerald-500/30 hover:bg-emerald-500/15 hover:shadow-[0_0_30px_rgba(16,185,129,0.12)] md:px-6 md:py-3"
          >
            Projects
            <FiArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>

          {/* Secondary CTA */}
          <a
            href="/resume/VeerenderNemaliSoftwareEngineer.pdf"
            target="_blank"
            className="group md:text-md text-muted-foreground border-border/60 bg-background/30 hover:text-foreground hover:border-border hover:bg-background/50 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs backdrop-blur-sm transition-all duration-300 md:px-6 md:py-3"
          >
            <FiFileText className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
            Resume
          </a>
        </div>

        {/* Links */}
        {/* <div className="mt-12 flex items-center gap-8">
          {heroSectionLinks.map((skills) => {
            const Icon = skills.icon;

            return (
              <a
                key={skills.name}
                href={skills.href}
                target="_blank"
                rel="noreferrer"
                className="border-border/60 bg-background/40 text-muted-foreground flex h-11 w-11 items-center justify-center rounded-full border backdrop-blur-sm transition-all duration-300 hover:border-emerald-500/30 hover:bg-emerald-500/5 hover:text-emerald-400"
              >
                <Icon size={25} />
              </a>
            );
          })}
        </div> */}
      </div>
    </section>
  );
}
