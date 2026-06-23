"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="bg-background/30 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/10 backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:bg-white/[0.05]"
    >
      {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}
