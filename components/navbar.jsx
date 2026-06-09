import ThemeToggle from "./theme-toggle";

export default function Navbar() {
    return (
        <header
            className="
            fixed
            top-6
            left-0
            right-0
            z-50
            px-4
            "
        >
            <nav
                className="
                mx-auto
                flex
                h-14
                max-w-4xl
                items-center
                justify-between

                rounded-2xl
                border
                border-border/60

                bg-background/60
                backdrop-blur-xl

                px-6
                shadow-sm
                "
            >
                {/* Logo */}

                <a
                    href="#home"
                    className="
                    text-sm
                    font-semibold
                    tracking-[0.2em]
                    "
                >
                    VN
                </a>

                {/* Navigation */}

                <div className="hidden md:flex items-center gap-8">

                    <a
                        href="#about"
                        className="
                        text-sm
                        text-muted-foreground
                        transition-colors
                        hover:text-foreground
                        "
                    >
                        About
                    </a>

                    <a
                        href="#projects"
                        className="
                        text-sm
                        text-muted-foreground
                        transition-colors
                        hover:text-foreground
                        "
                    >
                        Projects
                    </a>

                    <a
                        href="#experience"
                        className="
                        text-sm
                        text-muted-foreground
                        transition-colors
                        hover:text-foreground
                        "
                    >
                        Experience
                    </a>

                    <a
                        href="#contact"
                        className="
                        text-sm
                        text-muted-foreground
                        transition-colors
                        hover:text-foreground
                        "
                    >
                        Contact
                    </a>

                </div>

                {/* Right Side */}

                <div className="flex items-center gap-3">

                    <a
                        href="/resume/veerenderNemaliSoftwareEngineer.pdf"
                        target="_blank"
                        className="
                        hidden
                        sm:inline-flex

                        rounded-lg
                        border
                        border-border

                        px-3
                        py-1.5

                        text-sm
                        text-muted-foreground

                        hover:text-foreground
                        transition-colors
                        "
                    >
                        Resume
                    </a>

                    <ThemeToggle />

                </div>

            </nav>
        </header>
    );
}