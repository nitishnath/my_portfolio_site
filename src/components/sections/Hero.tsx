"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function useTypewriter(text: string, speed = 35) {
  const [display, setDisplay] = useState("");
  useEffect(() => {
    setDisplay("");
    let i = 0;
    const id = setInterval(() => {
      i++;
      setDisplay(text.slice(0, i));
      if (i >= text.length) clearInterval(id);
    }, speed);
    return () => clearInterval(id);
  }, [text, speed]);
  return display;
}

export default function Hero() {
  const typed = useTypewriter("Software Engineer crafting delightful web experiences.");
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return (
    <section id="top" className="relative flex min-h-[80vh] items-center justify-center overflow-hidden">
      {/* Animated gradient waves */}
      <motion.div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-indigo-800/40 via-purple-800/20 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      />

      {/* Subtle particles after mount to avoid hydration mismatch */}
      {mounted && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.25 }}
        >
          {[...Array(20)].map((_, i) => (
            <motion.span
              key={i}
              className="absolute h-1.5 w-1.5 rounded-full bg-white/30"
              initial={{ x: Math.random() * 1200, y: Math.random() * 600 }}
              animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
              transition={{ duration: 6 + Math.random() * 4, repeat: Infinity }}
            />
          ))}
        </motion.div>
      )}

      <div className="mx-auto max-w-4xl px-6 text-center">
        <motion.h1
          className="text-4xl font-bold tracking-tight sm:text-6xl"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Nitish Kumar Nath
        </motion.h1>
        <motion.p
          className="mt-4 text-lg text-zinc-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          {typed}
        </motion.p>

        {/* Scroll down indicator */}
        <motion.a
          href="#about"
          className="mt-10 inline-flex items-center gap-2 text-zinc-300 hover:text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.span
            aria-hidden
            className="inline-block h-6 w-6 rounded-full border border-white/40"
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.2 }}
          />
          Scroll Down
        </motion.a>
      </div>
    </section>
  );
}