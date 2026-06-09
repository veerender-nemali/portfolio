import { Button } from "./ui/button";

export default function Hero() {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center"
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

                    Available for opportunities
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
                <div className="mt-8 flex flex-wrap gap-3">

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

                </div>

                {/* CTA */}
                <div className="mt-12 flex flex-wrap gap-4">

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

                {/* Links */}
                <div className="mt-12 flex items-center gap-8">

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

                {/* Quick Stats */}
                <div
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
                </div>

            </div>
        </section>
    );
}