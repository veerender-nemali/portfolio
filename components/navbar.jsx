import ThemeToggle from "./theme-toggle";

export default function Navbar() {
    return (
        <header
            className="
            fixed
            top-0
            left-0
            right-0
            z-50
            "
        >
            <div
                className="
                mx-auto
                flex
                h-16
                max-w-6xl
                items-center
                justify-between
                px-5
                sm:px-6
                lg:px-8
                "
            >
                <a
                    href="#"
                    className="font-medium tracking-tight"
                >
                    VN
                </a>

                <div className="flex items-center gap-6">

                    <a
                        href="#projects"
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                        Projects
                    </a>

                    <a
                        href="#experience"
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                        Experience
                    </a>

                    <a
                        href="#contact"
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                        Contact
                    </a>

                    <ThemeToggle />

                </div>
            </div>
        </header>
    );
}