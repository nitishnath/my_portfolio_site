"use client";

import { motion } from "framer-motion";

function Card({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <motion.div
      className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 shadow-md"
      whileHover={{ y: -2 }}
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-yellow-300">★</div>
      <div>
        <p className="font-semibold text-white">{title}</p>
        <p className="text-sm text-zinc-400">{subtitle}</p>
      </div>
    </motion.div>
  );
}

export default function AboutPanel() {
  return (
    <section className="rounded-2xl bg-white/5 p-6 shadow-xl ring-1 ring-white/10">
      <motion.h2 className="text-2xl font-bold" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
        About Me
      </motion.h2>
      <div className="mt-3 h-1 w-16 rounded bg-yellow-400/80" />

      <motion.p className="mt-4 text-zinc-300" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        I’m a software engineer with excellent problem‑solving skills and a strong focus on
        collaboration. I’m passionate about coding and continual learning. I have hands-on
        experience building products with React, Next.js and mobile UIs with React Native,
        with a solid background in modern front‑end architectures and performance.
      </motion.p>
      <motion.p className="mt-4 text-zinc-300" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        My job is to build products that are functional, user‑friendly, and efficient,
        while also maintaining an attractive design. Outside of work, I enjoy sports and movies.
      </motion.p>

      <motion.h3 className="mt-8 text-xl font-semibold text-white" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
        What I’m Doing
      </motion.h3>

      <div className="mt-4 grid gap-6 md:grid-cols-2">
        <Card title="Front End Development" subtitle="React, Next.js (3+ years)" />
        <Card title="Back End Development" subtitle="Node.js APIs (2+ years)" />
        <Card title="Cloud Service" subtitle="Deployments and CI/CD" />
        <Card title="Activities" subtitle="Movies, outdoor sports, quick sprints" />
      </div>
    </section>
  );
}