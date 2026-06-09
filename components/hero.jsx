import { Button } from "@/components/ui/button";
// import {
//     GitHub,
//     Linkedin,
//     Code2,
// } from "lucide-react";

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center">
            <div className="relative max-w-4xl">

                <span className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
                    <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75"></span>
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                    </span>

                    Available for work
                </span>

                <h1
                    className="
  mt-8
  text-5xl
sm:text-6xl
md:text-7xl
  font-semibold
  tracking-[-0.06em]
  leading-[0.92]
  "
                >
                    <span className="text-foreground">
                        Veerender
                    </span>{" "}

                    <span
                        className="
        bg-linear-to-r
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

                <h2 className="mt-5 text-lg font-medium uppercase tracking-[0.15em] text-muted-foreground">
                    Full Stack Software Developer
                </h2>

                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                    Building scalable full-stack applications with React,
                    Next.js, Node.js, and MongoDB, focused on performance,
                    usability, and clean architecture.
                </p>

                <div className="mt-8 flex flex-wrap gap-2">
                    {[
                        "React",
                        "Node.js",
                        "Typescript",
                        "MongoDB",
                        "JavaScript",
                    ].map((tech) => (
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

                <div className="mt-10 flex flex-wrap gap-4">
                    <Button asChild>
                        <a href="#projects">
                            View Projects
                        </a>
                    </Button>

                    <Button variant="outline" asChild>
                        <a
                            href="/resume/veerenderNemaliSoftwareEngineer.pdf"
                            target="_blank"
                        >
                            Resume
                        </a>
                    </Button>
                </div>

                <div className="mt-8 flex items-center gap-6">
                    <a
                        href="https://github.com/veerender-nemali"
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                        GitHub
                    </a>

                    <a
                        href="https://www.linkedin.com/in/veerender-nemali/"
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                        LinkedIn
                    </a>

                    <a
                        href="https://leetcode.com/u/veerender_nemali/"
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                        LeetCode
                    </a>
                </div>

            </div>
        </section>
    );
}