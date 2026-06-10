import { Github, ExternalLink } from "lucide-react";
import Reveal from "./reveal";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const projects = [
    {
        title: "DevTinder",
        description:
            "A platform that connects developers with similar skills, interests, and passion. enabling them to chat, collaborate, and even meet in real life.",
        tech: ["React.js", "Node.js", "MongoDB", "Express.js", "TailwindCss", "Redux-Toolkit", "React-Router"],
        github: "https://github.com/veerender-nemali/DevTinder.git",
        live: "#",
    },
    {
        title: "LedgerFlow",
        description:
            "Built a ledger based transaction processing backend using Node.js, Express.js, and MongoDB to simulate money transfers",
        tech: ["Node.js", "Express", "MongoDB", "JWT", "NodeMailer"],
        github: "https://github.com/veerender-nemali/Banking-Ledger-System.git",
        live: "#",
    },
    {
        title: "StreamiFy",
        description:
            "A video streaming platform which is similar to youtube UI, where you can stream youtube videos like, dislike, save, subscribe to your favourite channels, search your favourite videos and more.",
        tech: ["React.js", "React-Router", "Redux-Toolkit", "Youtube APIs", "TailwindCss"],
        github: "https://github.com/veerender-nemali/Youtube-UI-clone.git",
        live: "#",
    },
];

export default function Projects() {
    return (
        <section id="projects" className="relative min-h-screen flex items-center ">

            <div className="mx-auto max-w-6xl w-full">

                {/* Header */}
                <div className="mb-14">
                    <h2 className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                        Selected Work
                    </h2>

                    <h3 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight">
                        Projects I've built
                    </h3>
                    {/* 
                    <p className="mt-4 max-w-2xl text-muted-foreground">
                        A collection of products focused on full-stack engineering,
                        scalable architecture, and user-centric experiences.
                    </p> */}
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 gap-6">

                    {projects.map((project, index) => (
                        <Reveal
                            key={project.title}
                            delay={index * 0.1}
                        >
                            <article
                                key={project.title}
                                className="
    group
    relative
    rounded-3xl
    border
    border-border
    bg-background/40
    backdrop-blur-sm
    p-5
    transition-all
    duration-300
    hover:border-emerald-500/30
    hover:shadow-[0_0_50px_rgba(16,185,129,0.08)]
    "
                            >

                                {/* Glow */}
                                <div
                                    className="
      absolute
      inset-0
      opacity-0
      transition-opacity
      duration-500
      group-hover:opacity-100
      bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.08),transparent_40%)]
      "
                                />

                                <div className="relative">
                                    {/* 
                                    <span className="text-xs tracking-[0.25em] text-emerald-500">
                                        0{index + 1}
                                    </span> */}

                                    <h3 className="mt-2 text-2xl font-semibold tracking-tight">
                                        {project.title}
                                    </h3>

                                    <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
                                        {project.description}
                                    </p>

                                    <div className="mt-6 flex flex-wrap gap-2">
                                        {project.tech.map((tech) => (
                                            <span
                                                key={tech}
                                                className="
            rounded-full
            border
            border-border
            px-3
            py-1
            text-xs
            text-muted-foreground
            "
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="mt-8 flex items-center gap-5">

                                        {/* Live Demo (primary) */}
                                        {/* <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="
      group/link
      inline-flex
      items-center
      gap-2
      text-sm
      font-medium
      text-emerald-400
      transition-all
      duration-300
      hover:text-emerald-300
    "
                                        >
                                            Live Demo
                                            <FiExternalLink className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />

                                            underline effect
                                            <span className="absolute mt-5 h-[1px] w-0 bg-emerald-400 transition-all duration-300 group-hover/link:w-full" />
                                        </a> */}

                                        {/* GitHub (secondary) */}
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="
      group/link2
      inline-flex
      items-center
      gap-2
      text-sm
      text-muted-foreground
      transition-all
      duration-300
      hover:text-foreground
    "
                                        >
                                            <FiGithub className="w-4 h-4 transition-transform duration-300 group-hover/link2:scale-110" />
                                            View Code

                                            {/* <span className="absolute mt-5 h-[1px] w-0 bg-muted-foreground transition-all duration-300 group-hover/link2:w-full" /> */}
                                        </a>

                                    </div>

                                </div>

                            </article>
                        </Reveal>
                    ))}

                </div>

            </div>

        </section>
    );
}