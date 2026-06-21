"use client";

import { motion } from "framer-motion";

export default function HeroTyping() {
  return (
    <div className="my-8 flex justify-center px-4">
      <div className="flex items-end">
        {/* Text */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "fit-content" }}
          transition={{
            duration: 2.5,
            ease: "linear",
          }}
          className="overflow-hidden pb-1 md:pb-2"
        >
          <h1 className="text-right text-[18px] leading-[0.9] font-semibold tracking-[-0.06em] whitespace-nowrap sm:text-xl md:text-3xl lg:text-5xl xl:text-6xl">
            Hi, I'm Veerender Nemali, a{" "}
            <span className="text-emerald-400">Software Engineer.</span>
          </h1>
        </motion.div>

        {/* Cursor */}
        <motion.span
          animate={{
            opacity: [1, 0, 1],
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
          }}
          className="mb-1 ml-1 block h-5 w-[3px] rounded-sm bg-emerald-400 sm:h-5 md:mb-2 md:ml-3 md:h-8 md:w-[4px] lg:h-12 xl:h-14"
        />
      </div>
    </div>
  );
}
