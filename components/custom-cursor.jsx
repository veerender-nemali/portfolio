"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const mouseMove = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const addHover = () => setHovering(true);
    const removeHover = () => setHovering(false);

    window.addEventListener("mousemove", mouseMove);

    const elements = document.querySelectorAll("a, button");

    elements.forEach((el) => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });

    return () => {
      window.removeEventListener("mousemove", mouseMove);

      elements.forEach((el) => {
        el.removeEventListener("mouseenter", addHover);
        el.removeEventListener("mouseleave", removeHover);
      });
    };
  }, []);

  return (
    <motion.div
      animate={{
        x: position.x,
        y: position.y,
        width: hovering ? 40 : 10,
        height: hovering ? 40 : 10,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 35,
      }}
      className="pointer-events-none fixed top-0 left-0 z-[9999] -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-400 bg-emerald-400/20 backdrop-blur-sm"
    />
  );
}
