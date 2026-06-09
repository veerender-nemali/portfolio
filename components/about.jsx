export default function About() {
    return (
        <section className="min-h-screen flex items-center">

            <div className="mx-auto max-w-6xl w-full px-5 sm:px-6 lg:px-8">

                <div className="grid md:grid-cols-2 gap-20 items-start">

                    {/* LEFT SIDE - ABOUT */}
                    <div>

                        <h2 className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                            About Me
                        </h2>

                        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                            I’m a Full Stack Software Engineer focused on building
                            scalable web applications with clean architecture and
                            strong user experience.
                            <br /><br />
                            I enjoy solving real-world problems through code and
                            turning ideas into production-ready products.
                        </p>

                        {/* Optional highlight */}
                        <div className="mt-10 space-y-2 text-sm text-muted-foreground">

                            <p>📍 India-based Developer</p>
                            <p>💡 Focused on MERN + Next.js ecosystem</p>
                            <p>🚀 Passionate about product building</p>

                        </div>

                    </div>

                    {/* RIGHT SIDE - SKILLS */}
                    <div>

                        <h2 className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                            Skills & Technologies
                        </h2>

                        <p className="mt-6 text-sm text-muted-foreground">
                            Technologies I use to build scalable full-stack applications.
                        </p>

                        <div className="mt-6 flex flex-wrap gap-2">

                            {[
                                "JavaScript",
                                "React",
                                "Next.js",
                                "Node.js",
                                "Express",
                                "MongoDB",
                                "Tailwind",
                                "Redux",
                                "JWT",
                                "REST APIs",
                                "Git",
                                "Postman"
                            ].map((skill) => (
                                <span className="rounded-full border border-emerald-400/70 bg-background px-3 py-1 text-sm text-muted-foreground hover:border-emerald-400/60 hover:text-foreground transition-colors">
                                    {skill}
                                </span>
                            ))}

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}