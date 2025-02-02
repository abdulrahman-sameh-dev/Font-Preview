"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative p-2 rounded-md hover:bg-accent transition-colors overflow-hidden"
    >
      <div className="relative w-5 h-5">
        <span
          className={`absolute inset-0 transition-transform duration-300 ${
            theme === "dark"
              ? "rotate-0 scale-100"
              : "-rotate-90 scale-0"
          }`}
        >
          <Sun className="w-5 h-5" />
        </span>
        <span
          className={`absolute inset-0 transition-transform duration-300 ${
            theme === "dark"
              ? "rotate-90 scale-0"
              : "rotate-0 scale-100"
          }`}
        >
          <Moon className="w-5 h-5" />
        </span>
      </div>
      {/* <span className="sr-only">Toggle theme</span> */}
    </button>
  );
}
