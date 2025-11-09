"use client";

import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark" || theme === undefined; // default dark

  return (
    <motion.button
      className="rounded-full border border-white/20 px-3 py-1 text-xs text-zinc-200 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-zinc-400"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle dark/light theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      {isDark ? "Light" : "Dark"}
    </motion.button>
  );
}