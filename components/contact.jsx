export default function Contact() {
    return (
        <section
            id="contact"
            className="min-h-screen flex items-center justify-center"
        >
            <div className="w-full text-center">

                <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground">
                    Contact
                </p>

                <h2
                    className="
                    mt-6
                    text-5xl
                    md:text-7xl
                    font-semibold
                    tracking-[-0.06em]
                    leading-[0.95]
                    "
                >
                    Let's build
                    <br />

                    <span
                        className="
                        bg-gradient-to-r
                        from-foreground
                        via-foreground
                        to-emerald-500
                        bg-clip-text
                        text-transparent
                        "
                    >
                        something meaningful.
                    </span>
                </h2>

                <p
                    className="
                    mx-auto
                    mt-8
                    max-w-2xl
                    text-lg
                    leading-relaxed
                    text-muted-foreground
                    "
                >
                    I'm actively seeking Software Engineer opportunities and
                    enjoy working on products that solve real problems.
                    If you'd like to discuss a role, collaboration, or simply connect,
                    I'd love to hear from you.
                </p>

                {/* CTA */}
                <div className="mt-12">

                    <a
                        href="mailto:YOUR_EMAIL@gmail.com"
                        className="
                        inline-flex
                        items-center
                        rounded-2xl
                        border
                        border-emerald-500/20
                        bg-emerald-500/10
                        px-8
                        py-4
                        text-sm
                        font-medium
                        text-foreground
                        transition-all
                        duration-300
                        hover:border-emerald-500/40
                        hover:bg-emerald-500/15
                        hover:shadow-[0_0_40px_rgba(16,185,129,0.15)]
                        "
                    >
                        nemaliveerender73@gmail.com
                    </a>

                </div>

                {/* Socials */}
                <div
                    className="
                    mt-16
                    flex
                    flex-wrap
                    items-center
                    justify-center
                    gap-8
                    "
                >

                    <a
                        href="https://github.com/veerender-nemali"
                        target="_blank"
                        rel="noreferrer"
                        className="
                        text-sm
                        text-muted-foreground
                        transition-colors
                        hover:text-foreground
                        "
                    >
                        GitHub
                    </a>

                    <a
                        href="https://www.linkedin.com/in/veerender-nemali/"
                        target="_blank"
                        rel="noreferrer"
                        className="
                        text-sm
                        text-muted-foreground
                        transition-colors
                        hover:text-foreground
                        "
                    >
                        LinkedIn
                    </a>

                    <a
                        href="https://leetcode.com/u/veerender_nemali/"
                        target="_blank"
                        rel="noreferrer"
                        className="
                        text-sm
                        text-muted-foreground
                        transition-colors
                        hover:text-foreground
                        "
                    >
                        LeetCode
                    </a>

                </div>

                {/* Footer */}
                <div className="mt-24">

                    <div className="mx-auto h-px max-w-md bg-border" />

                    <p className="mt-8 text-sm text-muted-foreground">
                        © 2026 Veerender Nemali
                    </p>

                </div>

            </div>
        </section>
    );
}