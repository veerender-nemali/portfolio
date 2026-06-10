"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();

    return (
        <button
            onClick={() =>
                setTheme(theme === "dark" ? "light" : "dark")
            }
            className="
flex
h-10
w-10
items-center
justify-center

rounded-full

border
border-white/10

bg-white/5

backdrop-blur-xl

text-muted-foreground

transition-all
duration-300

hover:border-emerald-500/20
hover:bg-emerald-500/5
hover:text-emerald-400

hover:scale-105
active:scale-95
"
        >
            {theme === "dark" ? (
                <Sun size={16} />
            ) : (
                <Moon size={16} />
            )}
        </button>
    );
}