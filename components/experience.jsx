import Reveal from "./reveal";

export default function Experience() {
  return (
    <Reveal delay={0.15}>
      <section
        id="experience"
        className="relative flex min-h-screen items-center"
      >
        <div className="w-full">
          <div className="mb-16">
            <h2 className="text-muted-foreground text-sm tracking-[0.2em] uppercase">
              Experience
            </h2>

            <h3 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              Professional Journey
            </h3>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="bg-border absolute top-0 left-[11px] h-full w-px" />

            {/* Experience Item */}
            <div className="relative pl-12">
              {/* Timeline Dot */}
              <div className="absolute top-2 left-0 h-6 w-6 rounded-full border border-emerald-500/50 bg-emerald-500/10" />

              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <h4 className="text-xl font-semibold">
                    Full Stack Developer Intern
                  </h4>

                  <p className="text-muted-foreground mt-1">PatternLab.ai</p>
                </div>

                <span className="text-muted-foreground text-sm">
                  Nov 2025 – Mar 2026
                </span>
              </div>

              <ul className="text-muted-foreground mt-8 space-y-4">
                <li>
                  Built responsive dashboards and data visualization interfaces
                  for a manufacturing analytics platform, enabling real-time
                  monitoring of machine performance.
                </li>

                <li>
                  Developed scalable REST APIs and backend services to process
                  machine-generated production data.
                </li>

                <li>
                  Collaborated across frontend and backend systems, ensuring
                  efficient data flow and application performance.
                </li>

                <li>
                  Implemented reusable React components and optimized state
                  management for complex data-driven workflows.
                </li>

                <li>
                  Worked with large datasets to deliver actionable production
                  insights through charts, metrics, and reports.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
