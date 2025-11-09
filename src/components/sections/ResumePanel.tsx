"use client";

import { motion } from "framer-motion";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-6">
      <motion.h3 className="text-xl font-semibold text-white" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        {title}
      </motion.h3>
      <div className="mt-2 space-y-3">{children}</div>
    </div>
  );
}

function Item({ role, company, time, details }: { role: string; company: string; time: string; details: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <p className="font-semibold text-zinc-100">{role}</p>
      <p className="text-sm text-zinc-300">{company}</p>
      <p className="mt-1 text-xs text-zinc-400">{time}</p>
      <p className="mt-2 text-sm text-zinc-300">{details}</p>
    </div>
  );
}

export default function ResumePanel() {
  return (
    <section className="rounded-2xl bg-white/5 p-6 shadow-xl ring-1 ring-white/10">
      <motion.h2 className="text-2xl font-bold" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
        Resume
      </motion.h2>
      <div className="mt-3 h-1 w-16 rounded bg-yellow-400/80" />

      <Section title="Experience">
        <Item role="Software Engineer" company="Company, Bangalore" time="Aug 2022 — Present" details="Front-end development with React/Next.js, API integration, Azure deployments." />
        <Item role="Intern" company="Company, Bangalore" time="Mar 2022 — May 2022" details="Worked on UI components, assisted with integration and testing." />
      </Section>

      <Section title="Certificates">
        <Item role="Programming, DSA Using Python" company="NPTEL, CMI Madras" time="Sep 2021" details="Completed certification focused on algorithms and Python tooling." />
      </Section>

      <Section title="Education">
        <Item role="B.Tech" company="Your University" time="Year — Year" details="Computer Science and Engineering." />
      </Section>
    </section>
  );
}