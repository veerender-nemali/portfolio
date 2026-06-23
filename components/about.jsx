import Reveal from "./reveal";
import { skills } from "../lib/utils";

export default function About() {
  return (
    // <Reveal>
    <section id="about" className="relative flex min-h-screen items-center">
      <div className="w-full">
        <div className="grid gap-20 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Left */}
          <div>
            <p className="text-muted-foreground text-sm tracking-[0.25em] uppercase">
              About
            </p>

            <h2 className="mt-6 text-3xl leading-tight font-semibold tracking-tight md:text-4xl">
              Building products, understanding systems, and solving problems.
            </h2>

            <div className="text-muted-foreground mt-10 space-y-6 text-lg leading-relaxed">
              <p>
                I'm a Software Engineer who enjoys understanding how systems
                work under the hood, building products from the ground up, and
                loves solving complex problems.
              </p>

              <p>
                Recently, I worked at
                <span className="text-foreground font-medium">
                  {" "}
                  PatternLab.ai{" "}
                </span>
                as a Full Stack Developer Intern, contributing to a
                manufacturing analytics platform that processes and visualizes
                machine data in real time.I worked across both frontend and
                backend, building dashboards, APIs, and scalable application
                features while focusing on performance, usability, and
                maintainability.
              </p>

              <p>
                Currently, I'm sharpening my problem-solving skills through Data
                Structures & Algorithms, exploring system design, and building
                production-ready applications with modern web technologies.
              </p>

              <p>
                When I'm not coding you'll find me playing cricket, badminton,
                or watching football.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <span className="border-border text-muted-foreground rounded-full border px-4 py-2 text-sm">
                📍 Hyderabad, Telangana, India - 500053
              </span>
            </div>
          </div>

          {/* Right */}
          <div>
            <div className="border-border bg-background/40 rounded-3xl border p-8 backdrop-blur-sm">
              <p className="text-muted-foreground text-sm tracking-[0.25em] uppercase">
                Technologies
              </p>

              <h3 className="mt-4 text-xl font-semibold">Tools I work with</h3>

              <div className="mt-8 flex flex-wrap justify-center gap-8">
                {skills.map((skill) => {
                  const Icon = skill.icon;

                  return (
                    <div
                      key={skill.name}
                      className="flex flex-col items-center justify-center gap-2"
                    >
                      <Icon className="h-7 w-7 shrink-0 sm:h-9 sm:w-9" />
                      <span className="text-xs sm:text-sm">{skill.name}</span>
                    </div>
                  );
                })}
              </div>

              <div className="border-border mt-10 border-t pt-8">
                <div className="space-y-4">
                  <div>
                    <p className="text-2xl font-semibold">130+</p>
                    <p className="text-muted-foreground text-sm">
                      DSA Problems Solved
                    </p>
                  </div>

                  <div>
                    <p className="text-2xl font-semibold">3+</p>
                    <p className="text-muted-foreground text-sm">Projects</p>
                  </div>

                  <div>
                    <p className="text-2xl font-semibold">1</p>
                    <p className="text-muted-foreground text-sm">
                      Industry Internship
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    // </Reveal>
  );
}
