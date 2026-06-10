import Reveal from "./reveal";

export default function Experience() {
    return (
        <Reveal delay={0.15}>
            <section
                id="experience"
                className="relative min-h-screen flex items-center"
            >
                <div className="w-full">

                    <div className="mb-16">
                        <h2 className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                            Experience
                        </h2>

                        <h3 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight">
                            Professional Journey
                        </h3>
                    </div>

                    <div className="relative">

                        {/* Timeline Line */}
                        <div className="absolute left-[11px] top-0 h-full w-px bg-border" />

                        {/* Experience Item */}
                        <div className="relative pl-12">

                            {/* Timeline Dot */}
                            <div
                                className="
                            absolute
                            left-0
                            top-2
                            h-6
                            w-6
                            rounded-full
                            border
                            border-emerald-500/50
                            bg-emerald-500/10
                            "
                            />

                            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">

                                <div>

                                    <h4 className="text-xl font-semibold">
                                        Full Stack Developer Intern
                                    </h4>

                                    <p className="mt-1 text-muted-foreground">
                                        PatternLab.ai
                                    </p>

                                </div>

                                <span className="text-sm text-muted-foreground">
                                    Nov 2025 – Mar 2026
                                </span>

                            </div>

                            <ul className="mt-8 space-y-4 text-muted-foreground">

                                <li>
                                    Built responsive dashboards and data visualization
                                    interfaces for a manufacturing analytics platform,
                                    enabling real-time monitoring of machine performance.
                                </li>

                                <li>
                                    Developed scalable REST APIs and backend services
                                    to process machine-generated production data.
                                </li>

                                <li>
                                    Collaborated across frontend and backend systems,
                                    ensuring efficient data flow and application performance.
                                </li>

                                <li>
                                    Implemented reusable React components and optimized
                                    state management for complex data-driven workflows.
                                </li>

                                <li>
                                    Worked with large datasets to deliver actionable
                                    production insights through charts, metrics, and reports.
                                </li>

                            </ul>

                        </div>

                    </div>

                </div>
            </section>
        </Reveal>
    );
}