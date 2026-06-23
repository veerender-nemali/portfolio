"use client";

import { motion } from "framer-motion";
import { FaHeart, FaCoffee } from "react-icons/fa";
import { contactLinks } from "../lib/utils";

const steamDots = [
  { x: 0, delay: 0 },
  { x: 4, delay: 0.2 },
  { x: -4, delay: 0.4 },
];

function CoffeeSteam() {
  return (
    <div className="relative inline-block h-7 w-7">
      {steamDots.map((dot, i) => (
        <motion.span
          key={i}
          className="absolute bottom-4 left-1/2 h-1 w-1 rounded-full bg-amber-500"
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
    // <motion.section
    //   id="contact"
    //   initial={{ opacity: 0, y: 40 }}
    //   whileInView={{ opacity: 1, y: 0 }}
    //   viewport={{ once: true }}
    //   transition={{ duration: 0.8 }}
    //   className="flex min-h-screen items-center justify-center px-6"
    // >
    <div
      id="contact"
      className="flex min-h-screen items-center justify-center px-6"
    >
      <div className="flex w-full max-w-4xl flex-col items-center text-center">
        {/* Header */}
        <p className="text-muted-foreground text-sm tracking-[0.25em] uppercase">
          Contact
        </p>

        <h2 className="mt-6 text-4xl leading-[0.95] font-semibold tracking-[-0.06em] md:text-6xl">
          Let's build
          <br />
          <span className="from-foreground via-foreground bg-linear-to-r to-emerald-500 bg-clip-text text-transparent">
            something meaningful.
          </span>
        </h2>

        <p className="text-muted-foreground mt-8 max-w-2xl text-lg leading-relaxed">
          I'm actively seeking Software Engineer opportunities and enjoy working
          on products that solve real problems.
        </p>

        {/* CTA */}
        <div className="mt-10">
          <a
            href="mailto:nemaliveerender73@gmail.com"
            className="group bg-background/50 relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full border border-emerald-500/20 px-8 shadow-[0_8px_32px_rgba(16,185,129,0.08)] backdrop-blur-3xl transition-all duration-300 hover:scale-[1.02] hover:border-emerald-500/30 hover:bg-emerald-500/10 hover:shadow-[0_8px_40px_rgba(16,185,129,0.15)]"
          >
            {/* Glass highlight */}
            <span className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-b from-white/20 via-transparent to-transparent dark:from-white/10" />

            <span className="relative text-sm font-medium text-emerald-600 dark:text-emerald-400">
              nemaliveerender73@gmail.com
            </span>
          </a>
        </div>

        {/* Socials */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-6">
          {contactLinks.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="border-border/60 bg-background/40 text-muted-foreground flex h-11 w-11 items-center justify-center rounded-full border backdrop-blur-sm transition-all duration-300 hover:border-emerald-500/30 hover:bg-emerald-500/5 hover:text-emerald-400"
              >
                <Icon size={22} />
              </a>
            );
          })}
        </div>

        {/* FOOTER AREA */}
        <div className="border-border/40 mt-5 w-full border-t pt-8">
          <div className="text-muted-foreground space-y-3 text-center text-sm">
            <div className="flex items-center justify-center gap-2">
              Built with
              <motion.span
                variants={beatVariant}
                initial="rest"
                whileHover="hover"
                className="inline-block"
              >
                <FaHeart className="h-4 w-4 text-red-500" />
              </motion.span>
              and lots of
              <span className="relative inline-flex items-center">
                <FaCoffee className="h-4 w-4 text-amber-600" />
                <span className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <CoffeeSteam />
                </span>
              </span>
            </div>

            <p className="text-xs opacity-70">
              Designed and Developed by Veerender Nemali
            </p>
          </div>
        </div>
      </div>
    </div>
    // </motion.section>
  );
}
