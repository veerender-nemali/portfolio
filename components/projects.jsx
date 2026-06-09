import { Github, ExternalLink } from "lucide-react";

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
        <section className="min-h-screen flex items-center">

            <div className="mx-auto max-w-6xl w-full px-5 sm:px-6 lg:px-8">

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
                        <article
                            key={project.title}
                            className="
    group
    relative
    overflow-hidden
    rounded-3xl
    border
    border-border
    bg-background/40
    backdrop-blur-sm
    p-8
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

                                <span className="text-xs tracking-[0.25em] text-emerald-500">
                                    0{index + 1}
                                </span>

                                <h3 className="mt-4 text-2xl font-semibold tracking-tight">
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

                                <div className="mt-8 flex items-center gap-6">

                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="
          text-sm
          text-muted-foreground
          hover:text-foreground
          transition-colors
          "
                                    >
                                        View Code →
                                    </a>

                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="
          text-sm
          text-muted-foreground
          hover:text-foreground
          transition-colors
          "
                                    >
                                        Live Demo →
                                    </a>

                                </div>

                            </div>

                        </article>
                    ))}

                </div>

            </div>

        </section>
    );
}