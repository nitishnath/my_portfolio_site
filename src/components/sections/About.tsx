"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-20">
      <motion.h2
        className="text-3xl font-bold"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>

      <div className="mt-8 grid gap-10 md:grid-cols-2">
        <motion.p
          className="text-zinc-300"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          I&apos;m a software engineer who enjoys building functional, user-friendly,
          and performant web apps. I focus on clean architecture, delightful
          micro-interactions, and measurable performance improvements.
        </motion.p>

        <div className="space-y-4">
          <motion.h3
            className="text-xl font-semibold text-zinc-100"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Experience & Focus
          </motion.h3>
          <motion.p
            className="text-zinc-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            I design and build front-end experiences with React and Next.js,
            craft native-feeling mobile UIs with React Native, and integrate
            APIs (including GraphQL) to deliver reliable product features.
          </motion.p>

          <motion.h3
            className="text-xl font-semibold text-zinc-100"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Highlights
          </motion.h3>
          <ul className="list-inside list-disc space-y-1 text-zinc-300">
            <li>Performance-first: Core Web Vitals, code splitting, image optimization</li>
            <li>Polished UX: Framer Motion animations and micro-interactions</li>
            <li>Accessibility: semantic HTML, keyboard navigation, color contrast</li>
            <li>Scalable architecture: typed components, modular design, testing mindset</li>
          </ul>

          <motion.h3
            className="text-xl font-semibold text-zinc-100"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            How I Work
          </motion.h3>
          <motion.p
            className="text-zinc-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            I collaborate closely with designers and back-end teams, document trade-offs,
            and iterate quickly with CI/CD. My goal is shipping thoughtful, maintainable
            interfaces that users love.
          </motion.p>
        </div>
      </div>

      {/* Interactive panel following mouse */}
      <motion.div
        className="mt-10 h-24 rounded-xl bg-white/5"
        whileHover={{ scale: 1.01 }}
        onMouseMove={(e) => {
          const target = e.currentTarget;
          const rect = target.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          target.style.setProperty("--x", `${x}px`);
          target.style.setProperty("--y", `${y}px`);
        }}
        style={{
          background:
            "radial-gradient(600px circle at var(--x) var(--y), rgba(255,255,255,0.08), transparent 40%)",
        }}
      />
    </section>
  );
}