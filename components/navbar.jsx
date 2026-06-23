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
        className={`relative mx-auto flex h-16 max-w-4xl items-center justify-between overflow-hidden rounded-full border border-white/[0.12] bg-white/[0.04] px-7 shadow-[0_8px_40px_rgba(0,0,0,0.15)] backdrop-blur-[40px] dark:bg-white/[0.03]`}
      >
        <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-b from-white/[0.18] via-white/[0.04] to-transparent" />
        <div className="pointer-events-none absolute inset-[1px] rounded-full border border-white/[0.06]" />
        <div className="pointer-events-none absolute top-0 -left-20 h-full w-32 rotate-12 animate-[shine_8s_linear_infinite] bg-gradient-to-r from-transparent via-white/[0.12] to-transparent blur-xl" />
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
              className="text-muted-foreground hover:text-foreground text-sm transition-all duration-300 hover:scale-105"
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
            className="hidden items-center rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-400 backdrop-blur-xl transition-all duration-300 hover:bg-emerald-500/20 hover:shadow-[0_0_20px_rgba(16,185,129,0.15)] sm:inline-flex"
          >
            Resume
          </a>

          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
