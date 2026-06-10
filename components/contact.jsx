"use client";

import { motion } from "framer-motion";
import {
    FaGithub,
    FaLinkedin,
    FaInstagram,
    FaTwitter,
    FaHeart,
    FaCoffee,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const socialLinks = [
    { name: "GitHub", href: "https://github.com/veerender-nemali", icon: FaGithub },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/veerender-nemali/", icon: FaLinkedin },
    { name: "LeetCode", href: "https://leetcode.com/u/veerender_nemali/", icon: SiLeetcode },
    { name: "Instagram", href: "https://instagram.com/_veerender.73", icon: FaInstagram },
    { name: "X", href: "https://x.com/veerendernemali", icon: FaTwitter },
];

const steamDots = [
    { x: 0, delay: 0 },
    { x: 4, delay: 0.2 },
    { x: -4, delay: 0.4 },
];

function CoffeeSteam() {
    return (
        <div className="relative inline-block w-6 h-6">
            {steamDots.map((dot, i) => (
                <motion.span
                    key={i}
                    className="absolute bottom-4 left-1/2 w-1 h-1 bg-amber-500 rounded-full"
                    initial={{ opacity: 0, y: 0, x: dot.x }}
                    animate={{
                        opacity: [0, 0.8, 0],
                        y: [-2, -10],
                    }}
                    transition={{
                        duration: 1.2,
                        repeat: Infinity,
                        delay: dot.delay,
                        ease: "easeOut",
                    }}
                />
            ))}
        </div>
    );
}

export default function Contact() {
    const beatVariant = {
        rest: { scale: 1 },
        hover: {
            scale: [1, 1.3, 0.95, 1.15, 1],
            transition: { duration: 0.6, ease: "easeInOut" },
        },
    };

    return (
        <motion.section
            id="contact"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="min-h-screen flex items-center justify-center px-6"
        >
            <div className="w-full max-w-4xl text-center flex flex-col items-center">

                {/* Header */}
                <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground">
                    Contact
                </p>

                <h2 className="mt-6 text-5xl md:text-7xl font-semibold tracking-[-0.06em] leading-[0.95]">
                    Let's build
                    <br />
                    <span className="bg-gradient-to-r from-foreground via-foreground to-emerald-500 bg-clip-text text-transparent">
                        something meaningful.
                    </span>
                </h2>

                <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                    I'm actively seeking Software Engineer opportunities and enjoy working on
                    products that solve real problems.
                </p>

                {/* CTA */}
                <div className="mt-10">
                    <a
                        href="mailto:nemaliveerender73@gmail.com"
                        className="inline-flex items-center rounded-2xl border border-emerald-500/20 bg-emerald-500/10 px-8 py-4 text-sm font-medium transition-all duration-300 hover:border-emerald-500/40 hover:bg-emerald-500/15 hover:shadow-[0_0_40px_rgba(16,185,129,0.15)]"
                    >
                        nemaliveerender73@gmail.com
                    </a>
                </div>

                {/* Socials */}
                <div className="mt-14 flex flex-wrap items-center justify-center gap-6">
                    {socialLinks.map((item) => {
                        const Icon = item.icon;
                        return (
                            <a
                                key={item.name}
                                href={item.href}
                                target="_blank"
                                rel="noreferrer"
                                className="flex h-11 w-11 items-center justify-center rounded-full border border-border/60 bg-background/40 backdrop-blur-sm text-muted-foreground transition-all duration-300 hover:text-emerald-400 hover:border-emerald-500/30 hover:bg-emerald-500/5"
                            >
                                <Icon size={22} />
                            </a>
                        );
                    })}
                </div>

                {/* FOOTER AREA */}
                <div className="mt-16 w-full border-t border-border/40 pt-8">
                    <div className="space-y-3 text-center text-sm text-muted-foreground">

                        <p className="flex items-center justify-center gap-2">
                            Built with
                            <motion.span
                                variants={beatVariant}
                                initial="rest"
                                whileHover="hover"
                                className="inline-block"
                            >
                                <FaHeart className="w-4 h-4 text-red-500" />
                            </motion.span>
                            and lots of
                            <span className="relative inline-flex items-center">
                                <FaCoffee className="w-4 h-4 text-amber-600" />
                                <span className="absolute -top-4 left-1/2 -translate-x-1/2">
                                    <CoffeeSteam />
                                </span>
                            </span>
                        </p>

                        <p className="text-xs opacity-70">
                            © 2026 Veerender Nemali
                        </p>
                    </div>
                </div>

            </div>
        </motion.section>
    );
}