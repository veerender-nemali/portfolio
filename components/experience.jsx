export default function Experience() {
    return (
        <section className="min-h-screen flex items-center">

            <div className="mx-auto max-w-6xl w-full px-5 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="mb-14">
                    <h2 className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                        Experience
                    </h2>

                    <p className="mt-4 text-muted-foreground max-w-xl">
                        Internship experience and practical exposure building full-stack applications.
                    </p>
                </div>

                {/* Timeline */}
                <div className="space-y-10">

                    {/* Item 1 */}
                    <div className="relative pl-6 border-l border-border">

                        <div className="absolute left-[-5px] top-1.5 h-2.5 w-2.5 rounded-full bg-emerald-500" />

                        <h3 className="text-lg font-medium">
                            Full Stack Developer Intern
                        </h3>

                        <p className="text-sm text-muted-foreground">
                            Built scalable web applications using React, Node.js, and MongoDB.
                        </p>

                        <div className="mt-3 flex flex-wrap gap-2">
                            {["React", "Node.js", "MongoDB", "Express"].map((t) => (
                                <span
                                    key={t}
                                    className="text-xs px-2 py-1 rounded-full border border-emerald-500/20 text-muted-foreground"
                                >
                                    {t}
                                </span>
                            ))}
                        </div>

                    </div>

                    {/* Item 2 (Project-style experience) */}
                    <div className="relative pl-6 border-l border-border">

                        <div className="absolute left-[-5px] top-1.5 h-2.5 w-2.5 rounded-full bg-emerald-500/70" />

                        <h3 className="text-lg font-medium">
                            Personal Projects
                        </h3>

                        <p className="text-sm text-muted-foreground">
                            Built multiple full-stack projects focusing on authentication, APIs, and UI systems.
                        </p>

                        <div className="mt-3 flex flex-wrap gap-2">
                            {["Next.js", "JWT", "REST APIs", "Tailwind"].map((t) => (
                                <span
                                    key={t}
                                    className="text-xs px-2 py-1 rounded-full border border-emerald-500/20 text-muted-foreground"
                                >
                                    {t}
                                </span>
                            ))}
                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}