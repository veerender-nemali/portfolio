"use client";

import ThemeToggle from "./theme-toggle";
import { useEffect, useState } from "react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const links = [
        { label: "About", href: "#about" },
        { label: "Projects", href: "#projects" },
        { label: "Experience", href: "#experience" },
        { label: "Contact", href: "#contact" },
    ];

    return (
        <header
            className={`
                fixed
                left-0
                right-0
                z-50
                px-4
                transition-all
                duration-300
                ${scrolled ? "top-3" : "top-6"}
            `}
        >
            <nav
                className={`
                    relative
                    mx-auto
                    flex
                    h-16
                    max-w-4xl
                    items-center
                    justify-between

                    rounded-full

                    border
                    border-white/10

                    bg-background/50

                    backdrop-blur-3xl

                    px-6

                    transition-all
                    duration-300

                    ${scrolled
                        ? "shadow-[0_10px_40px_rgba(0,0,0,0.12)]"
                        : "shadow-[0_8px_30px_rgba(0,0,0,0.05)]"
                    }
                `}
            >
                {/* Glass Glow */}
                <div
                    className="
                        pointer-events-none
                        absolute
                        inset-0
                        rounded-full
                        bg-gradient-to-r
                        from-emerald-500/5
                        via-transparent
                        to-emerald-500/5
                    "
                />

                {/* Logo */}
                <a
                    href="#home"
                    className="
                        relative
                        flex
                        items-center
                        gap-2

                        text-lg
                        font-semibold
                        tracking-tight

                        transition-all
                        duration-300
                    "
                >
                    <span className="text-foreground">
                        VN
                    </span>

                    <span className="text-emerald-400">
                        .
                    </span>
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {links.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="
                                relative
                                text-sm
                                text-muted-foreground

                                transition-all
                                duration-300

                                hover:text-emerald-400

                                after:absolute
                                after:left-0
                                after:-bottom-1
                                after:h-px
                                after:w-0
                                after:bg-emerald-400
                                after:transition-all
                                after:duration-300

                                hover:after:w-full
                            "
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* Right */}
                <div className="relative flex items-center gap-3">
                    <a
                        href="/resume/VeerenderNemaliSoftwareEngineer.pdf"
                        target="_blank"
                        rel="noreferrer"
                        className="
                            hidden
                            sm:inline-flex

                            items-center

                            rounded-full

                            border
                            border-emerald-500/20

                            bg-emerald-500/5

                            px-4
                            py-2

                            text-sm
                            text-emerald-400

                            transition-all
                            duration-300

                            hover:bg-emerald-500/10
                            hover:border-emerald-500/40
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