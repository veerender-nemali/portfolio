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
    // { label: "Learning", href: "#learning" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed right-0 left-0 z-50 px-4 transition-all duration-300 ${scrolled ? "top-3" : "top-6"} `}
    >
      <nav
        className={`bg-background/50 relative mx-auto flex h-16 max-w-4xl items-center justify-between rounded-full border border-white/10 px-6 backdrop-blur-3xl transition-all duration-300 ${
          scrolled
            ? "shadow-[0_10px_40px_rgba(0,0,0,0.12)]"
            : "shadow-[0_8px_30px_rgba(0,0,0,0.05)]"
        } `}
      >
        {/* Glass Glow */}
        <div className="pointer-events-none absolute inset-0 rounded-full bg-linear-to-r from-emerald-500/5 via-transparent to-emerald-500/5" />

        {/* Logo */}
        <a
          href="#home"
          className="relative flex items-center gap-2 text-lg font-semibold tracking-tight transition-all duration-300"
        >
          <span className="text-foreground">VN</span>

          <span className="text-emerald-400">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-muted-foreground relative text-sm transition-all duration-300 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-emerald-400 after:transition-all after:duration-300 hover:text-emerald-400 hover:after:w-full"
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
            className="hidden items-center rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-2 text-sm text-emerald-400 transition-all duration-300 hover:border-emerald-500/40 hover:bg-emerald-500/10 sm:inline-flex"
          >
            Resume
          </a>

          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
