export default function Skills() {
    const skillCategories = [
        { category: "Frontend", skills: ["React", "Next.js", "Tailwind CSS", "JavaScript"] },
        { category: "Backend", skills: ["Node.js", "Express", "MongoDB", "PostgreSQL"] },
        { category: "Tools", skills: ["Git", "Docker", "VS Code", "Figma"] },
    ];

    return (
        <section id="skills" className="py-20 bg-secondary">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-4xl font-bold mb-12 text-center">Skills</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {skillCategories.map((category) => (
                        <div key={category.category} className="bg-background p-6 rounded-lg">
                            <h3 className="text-2xl font-semibold mb-4">{category.category}</h3>
                            <ul className="space-y-2">
                                {category.skills.map((skill) => (
                                    <li key={skill} className="text-muted-foreground flex items-center">
                                        <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
