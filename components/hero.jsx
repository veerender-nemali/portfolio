import { Button } from "./ui/button";
import Reveal from "./reveal";
import {
    FaGithub,
    FaLinkedin,
} from "react-icons/fa";

import { SiLeetcode } from "react-icons/si";
import { FiArrowRight, FiFileText } from "react-icons/fi";

const socialLinks = [
    {
        name: "GitHub",
        href: "https://github.com/veerender-nemali",
        icon: FaGithub,
    },
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/veerender-nemali/",
        icon: FaLinkedin,
    },
    {
        name: "LeetCode",
        href: "https://leetcode.com/u/veerender_nemali/",
        icon: SiLeetcode,
    },
];

export default function Hero() {
    return (
        <Reveal>
            <section
                id="home"
                className="relative min-h-screen flex items-center pt-24 md:pt-0"
            >
                <div className="max-w-5xl">

                    {/* Status */}
                    <div
                        className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-emerald-500/20
                    bg-emerald-500/5
                    px-4
                    py-2
                    text-xs
                    text-muted-foreground
                    "
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                        </span>

                        making things that should exist but don't yet. simple is hard, but worth it.
                    </div>

                    {/* Name */}
                    <h1
                        className="
                    mt-8
                    text-5xl
                    sm:text-6xl
                    md:text-7xl
                    lg:text-8xl
                    font-semibold
                    tracking-[-0.08em]
                    leading-[0.9]
                    "
                    >
                        Veerender{" "}

                        <span
                            className="
                        bg-gradient-to-r
                        from-foreground
                        via-foreground
                        to-emerald-400
                        bg-clip-text
                        text-transparent
                        "
                        >
                            Nemali
                        </span>
                    </h1>

                    {/* Role */}
                    <p
                        className="
                    mt-6
                    text-xl
                    md:text-2xl
                    text-muted-foreground
                    "
                    >
                        Software Engineer
                    </p>

                    {/* Main Value */}
                    <p
                        className="
                    mt-8
                    max-w-3xl
                    text-lg
                    md:text-xl
                    leading-relaxed
                    text-muted-foreground
                    "
                    >
                        I build scalable web applications and enjoy solving
                        complex engineering problems. Experienced across
                        frontend and backend development, with a strong focus on
                        performance, clean architecture, and user experience.
                    </p>

                    {/* Focus Areas */}
                    {/* <div className="mt-8 flex flex-wrap gap-3">

                    {[
                        "Full Stack Development",
                        "System Design",
                        "Problem Solving",
                        "Scalable Architecture",
                    ].map((item) => (
                        <span
                            key={item}
                            className="
                            rounded-full
                            border
                            border-border
                            px-4
                            py-2
                            text-sm
                            text-muted-foreground
                            "
                        >
                            {item}
                        </span>
                    ))}

                </div> */}

                    {/* CTA */}


                    <div className="mt-12 flex flex-wrap gap-4">

                        {/* Primary CTA */}
                        <a
                            href="#projects"
                            className="
      group
      inline-flex
      items-center
      gap-2
      rounded-full
      bg-emerald-500/10
      md:px-6 md:py-3
      px-3 py-1.5
      text-xs
      md:text-md
      text-foreground
      backdrop-blur-sm
      border border-emerald-500/20
      transition-all duration-300
      hover:bg-emerald-500/15
      hover:border-emerald-500/30
      hover:shadow-[0_0_30px_rgba(16,185,129,0.12)]
    "
                        >
                            View Projects
                            <FiArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </a>

                        {/* Secondary CTA */}
                        <a
                            href="/resume/VeerenderNemaliSoftwareEngineer.pdf"
                            target="_blank"
                            className="
      group
      inline-flex
      items-center
      gap-2
      rounded-full
      md:px-6 md:py-3
      px-3 py-1.5
      text-xs
      md:text-md
      text-muted-foreground
      border border-border/60
      bg-background/30
      backdrop-blur-sm
      transition-all duration-300
      hover:text-foreground
      hover:border-border
      hover:bg-background/50
    "
                        >
                            <FiFileText className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                            Resume
                        </a>

                    </div>
                    {/* <div className="mt-12 flex flex-wrap gap-4">

                    <Button asChild>
                        <a href="#projects">
                            Projects
                        </a>
                    </Button>
                    <Button asChild>
                        <a
                            href="/resume/VeerenderNemaliSoftwareEngineer.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Resume
                        </a>
                    </Button>

                    <Button variant="outline" asChild>
                        <a
                            href="/resume/VeerenderNemaliSoftwareEngineer.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Resume
                        </a>
                    </Button>

                </div> */}

                    {/* Links */}
                    <div className="mt-12 flex items-center gap-8">

                        {socialLinks.map(skills => {

                            const Icon = skills.icon

                            return (<a
                                href={skills.href}
                                target="_blank"
                                rel="noreferrer"
                                className="
  flex
  h-11
  w-11
  items-center
  justify-center

  rounded-full

  border
  border-border/60

  bg-background/40
  backdrop-blur-sm

  text-muted-foreground

  transition-all
  duration-300

  hover:text-emerald-400
  hover:border-emerald-500/30
  hover:bg-emerald-500/5

  "
                            >
                                <Icon size={25} />
                            </a>)
                        })}

                    </div>

                    {/* Quick Stats */}
                    {/* <div
                    className="
                    mt-16
                    flex
                    flex-wrap
                    gap-10
                    border-t
                    border-border
                    pt-8
                    "
                >
                    <div>
                        <p className="text-2xl font-semibold">500+</p>
                        <p className="text-sm text-muted-foreground">
                            DSA Problems
                        </p>
                    </div>

                    <div>
                        <p className="text-2xl font-semibold">3+</p>
                        <p className="text-sm text-muted-foreground">
                            Full Stack Projects
                        </p>
                    </div>

                    <div>
                        <p className="text-2xl font-semibold">1</p>
                        <p className="text-sm text-muted-foreground">
                            Industry Internship
                        </p>
                    </div>
                </div> */}

                </div>
            </section>
        </Reveal>
    );
}