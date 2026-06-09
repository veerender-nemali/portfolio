import { Github, Linkedin, Mail } from "lucide-react";

export default function Contact() {
    return (
        <section className="min-h-screen flex items-center">

            <div className="mx-auto max-w-3xl w-full px-5 sm:px-6 lg:px-8 text-center">

                {/* Header */}
                <h2 className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                    Contact
                </h2>

                <h3 className="mt-6 text-3xl md:text-4xl font-semibold tracking-tight">
                    Let’s build something together
                </h3>

                <p className="mt-4 text-muted-foreground leading-relaxed">
                    I’m currently open to opportunities. If you like my work,
                    feel free to reach out.
                </p>

                {/* Email CTA */}
                <div className="mt-10">
                    <a
                        href="mailto:veerender@example.com"
                        className="
            inline-flex items-center gap-2
            rounded-xl
            bg-foreground
            text-background
            px-6 py-3
            text-sm
            font-medium
            hover:opacity-90
            transition
            "
                    >
                        {/* <Mail size={16} /> */}
                        Get in touch
                    </a>
                </div>

                {/* Social Links */}
                <div className="mt-10 flex justify-center gap-8 text-muted-foreground">

                    <a
                        href="https://github.com/veerender-nemali"
                        target="_blank"
                        className="flex items-center gap-2 hover:text-foreground transition-colors"
                    >
                        {/* <Github size={16} /> */}
                        GitHub
                    </a>

                    <a
                        href="https://www.linkedin.com/in/veerender-nemali/"
                        target="_blank"
                        className="flex items-center gap-2 hover:text-foreground transition-colors"
                    >
                        {/* <Linkedin size={16} /> */}
                        LinkedIn
                    </a>

                </div>

                {/* Footer note */}
                <p className="mt-16 text-xs text-muted-foreground">
                    Built with Next.js + Tailwind CSS
                </p>

            </div>

        </section>
    );
}