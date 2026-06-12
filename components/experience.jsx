import Reveal from "./reveal";

export default function Experience() {
  return (
    <Reveal delay={0.15}>
      <section id="experience" className="flex min-h-screen items-center py-24">
        <div className="w-full">
          <div className="mb-16">
            <p className="text-muted-foreground text-sm tracking-[0.25em] uppercase">
              Experience
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              Where I've Worked
            </h2>
          </div>

          <div className="border-border bg-background/40 rounded-3xl border p-8 backdrop-blur-sm md:p-10">
            {/* Header */}

            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div>
                <h3 className="text-2xl font-semibold">
                  Full Stack Developer Intern
                </h3>

                <p className="text-muted-foreground mt-1">PatternLab.ai</p>
              </div>

              <span className="self-start rounded-full border border-emerald-500/20 bg-emerald-500/5 px-3 py-1 text-sm text-emerald-400">
                Nov 2025 – Mar 2026
              </span>
            </div>

            {/* Stack */}

            <div className="mt-8 flex flex-wrap gap-2">
              {[
                "React",
                "NestJS",
                "TypeScript",
                "MongoDB",
                "TanStack Query",
                "Zustand",
                "Highcharts",
              ].map((tech) => (
                <span
                  key={tech}
                  className="text-muted-foreground rounded-full border border-emerald-700 px-3 py-1 text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Work */}

            <ul className="mt-10 space-y-4">
              {[
                "Contributed to a manufacturing analytics platform for monitoring and visualizing machine production data.",
                "Built reusable filters and UI components with Ant Design and Material UI across multiple interfaces.",
                "Developed NestJS APIs, including analytics APIs from scratch, and worked with MongoDB for data storage and retrieval.",
                "Integrated REST APIs with TanStack Query, managed state using Zustand, and developed dashboards and visualizations with Highcharts.",
              ].map((item) => (
                <li
                  key={item}
                  className="text-muted-foreground flex items-start gap-3"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
