import { Github, ExternalLink } from "lucide-react";

const projects = [
    {
        title: "DevConnect",
        description:
            "Developer networking platform with authentication, real-time connections, and profile matching system.",
        tech: ["Next.js", "Node.js", "MongoDB"],
        github: "https://github.com/",
        live: "#",
    },
    {
        title: "TaskFlow",
        description:
            "Task management tool with drag-and-drop UI, authentication, and team collaboration features.",
        tech: ["React", "Express", "MongoDB"],
        github: "https://github.com/",
        live: "#",
    },
    {
        title: "CodeTrack",
        description:
            "LeetCode tracker dashboard with analytics, progress charts, and problem grouping.",
        tech: ["Next.js", "Tailwind", "Chart.js"],
        github: "https://github.com/",
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
                        Projects
                    </h2>

                    <p className="mt-4 text-muted-foreground max-w-xl">
                        A selection of projects focused on full-stack development,
                        performance, and clean UI design.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 gap-6">

                    {projects.map((project) => (
                        <div
                            key={project.title}
                            className="
              group
              rounded-xl
              border border-border
              bg-background
              p-6
              transition-all
              hover:border-emerald-500/30
              hover:shadow-[0_0_30px_rgba(16,185,129,0.08)]
              "
                        >

                            {/* Title */}
                            <h3 className="text-lg font-medium">
                                {project.title}
                            </h3>

                            {/* Description */}
                            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                                {project.description}
                            </p>

                            {/* Tech stack */}
                            <div className="mt-4 flex flex-wrap gap-2">
                                {project.tech.map((t) => (
                                    <span
                                        key={t}
                                        className="
                    text-xs
                    px-2 py-1
                    rounded-full
                    border border-emerald-500/20
                    text-muted-foreground
                    "
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>

                            {/* Links */}
                            <div className="mt-6 flex gap-4">
                                <a
                                    href={project.github}
                                    target="_blank"
                                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    {/* <Github size={16} /> */}
                                    Code
                                </a>

                                <a
                                    href={project.live}
                                    target="_blank"
                                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    {/* <ExternalLink size={16} /> */}
                                    Live
                                </a>
                            </div>

                        </div>
                    ))}

                </div>

            </div>

        </section>
    );
}