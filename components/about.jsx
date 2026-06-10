import Reveal from "./reveal";

import {
    SiJavascript,
    SiTypescript,
    SiReact,
    SiNextdotjs,
    SiNodedotjs,
    SiNestjs,
    SiExpress,
    SiMongodb,
    SiMysql,
    SiRedux,
    SiTailwindcss,
    SiGit,
    SiPostman,
} from "react-icons/si";

const skills = [
    {
        name: "JavaScript",
        icon: SiJavascript,
    },
    {
        name: "TypeScript",
        icon: SiTypescript,
    },
    {
        name: "React",
        icon: SiReact,
    },
    {
        name: "Next.js",
        icon: SiNextdotjs,
    },
    {
        name: "Node.js",
        icon: SiNodedotjs,
    },
    {
        name: "NestJS",
        icon: SiNestjs,
    },
    {
        name: "Express",
        icon: SiExpress,
    },
    {
        name: "MongoDB",
        icon: SiMongodb,
    },
    {
        name: "MySQL",
        icon: SiMysql,
    },
    {
        name: "Redux Toolkit",
        icon: SiRedux,
    },
    {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
    },
    {
        name: "Git",
        icon: SiGit,
    },
    {
        name: "Postman",
        icon: SiPostman,
    },
];

export default function About() {

    return (
        <Reveal>
            <section
                id="about"
                className=" relative min-h-screen flex items-center "
            >
                <div className="w-full">

                    <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-20">

                        {/* Left */}
                        <div>

                            <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground">
                                About
                            </p>

                            <h2
                                className="
                            mt-6
                            text-4xl
                            md:text-5xl
                            font-semibold
                            tracking-tight
                            leading-tight
                            "
                            >
                                Building products,
                                understanding systems,
                                and solving problems.
                            </h2>

                            <div
                                className="
                            mt-10
                            space-y-6
                            text-lg
                            leading-relaxed
                            text-muted-foreground
                            "
                            >
                                <p>
                                    I'm a Software Engineer who enjoys understanding
                                    how systems work under the hood, building
                                    products from the ground up, and loves solving
                                    complex problems.
                                </p>

                                <p>
                                    Recently, I worked at
                                    <span className="text-foreground font-medium">
                                        {" "}PatternLab.ai{" "}
                                    </span>
                                    as a Full Stack Developer Intern, contributing
                                    to a manufacturing analytics platform that
                                    processes and visualizes machine data in real time.I worked across both frontend and backend,
                                    building dashboards, APIs, and scalable
                                    application features while focusing on
                                    performance, usability, and maintainability.
                                </p>

                                <p>
                                    Currently, I'm sharpening my problem-solving
                                    skills through Data Structures & Algorithms,
                                    exploring system design, and building
                                    production-ready applications with modern web technologies.
                                </p>

                                <p>
                                    When I'm not coding you'll find me
                                    playing cricket, badminton,
                                    or watching football.
                                </p>

                            </div>

                            <div className="mt-10 flex flex-wrap gap-3">

                                <span
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
                                    📍 Hyderabad, Telangana, India  - 500053
                                </span>

                                {/* <span
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
                                Full Stack Developer
                            </span>

                            <span
                                className="
                                rounded-full
                                border
                                border-emerald-500/30
                                bg-emerald-500/10
                                px-4
                                py-2
                                text-sm
                                text-emerald-400
                                "
                            >
                                Learning System Design
                            </span> */}

                            </div>

                        </div>

                        {/* Right */}
                        <div>

                            <div
                                className="
                            rounded-3xl
                            border
                            border-border
                            bg-background/40
                            backdrop-blur-sm
                            p-8
                            "
                            >
                                <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground">
                                    Technologies
                                </p>

                                <h3 className="mt-4 text-xl font-semibold">
                                    Tools I work with
                                </h3>

                                <div className="mt-8 flex flex-wrap gap-8 justify-center">

                                    {skills.map((skill) => {
                                        const Icon = skill.icon;

                                        return (
                                            <div key={skill.name} className="flex flex-col justify-center items-center gap-2">
                                                <Icon className="h-7 w-7 sm:h-9 sm:w-9 shrink-0" />
                                                <span className="text-xs sm:text-sm">{skill.name}</span>
                                            </div>
                                        );
                                    })}

                                </div>

                                <div className="mt-10 border-t border-border pt-8">

                                    <div className="space-y-4">

                                        <div>
                                            <p className="text-2xl font-semibold">
                                                110+
                                            </p>
                                            <p className="text-sm text-muted-foreground">
                                                DSA Problems Solved
                                            </p>
                                        </div>

                                        <div>
                                            <p className="text-2xl font-semibold">
                                                3+
                                            </p>
                                            <p className="text-sm text-muted-foreground">
                                                Full Stack Projects
                                            </p>
                                        </div>

                                        <div>
                                            <p className="text-2xl font-semibold">
                                                1
                                            </p>
                                            <p className="text-sm text-muted-foreground">
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
        </Reveal>
    );
}