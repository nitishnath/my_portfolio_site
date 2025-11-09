"use client";

import { useState } from "react";
import { motion } from "framer-motion";

function DoingCard({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <motion.div
      className="flex items-center gap-5 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-md"
      whileHover={{ y: -2 }}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/10 text-yellow-300">★</div>
      <div>
        <p className="text-lg font-semibold text-white">{title}</p>
        <p className="text-sm md:text-base text-zinc-400">{subtitle}</p>
      </div>
    </motion.div>
  );
}

function ResumeSection({ title, icon = "📘", children }: { title: string; icon?: string; children: React.ReactNode }) {
  return (
    <div className="mt-6">
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10 shadow-md text-yellow-300">
          <span aria-hidden>{icon}</span>
        </div>
        <motion.h3 className="text-2xl font-semibold text-white" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          {title}
        </motion.h3>
      </div>
      <div className="mt-3 space-y-4">{children}</div>
    </div>
  );
}

function ResumeItem({ role, company, time, details, isLast = false }: { role: string; company: string; time: string; details: string; isLast?: boolean }) {
  return (
    <div className="relative pl-8">
      <span className="absolute left-0 top-2 h-3 w-3 rounded-full bg-yellow-400" />
      {!isLast && <span className="absolute left-1 top-6 bottom-0 w-px bg-white/10" />}
      <p className="text-lg font-semibold text-zinc-100">{role}</p>
      {company && <p className="text-sm md:text-base text-zinc-300">{company}</p>}
      {time && <p className="mt-1 text-sm text-yellow-300">{time}</p>}
      {details && <p className="mt-2 text-sm md:text-base text-zinc-300">{details}</p>}
    </div>
  );
}

export default function AboutResumePanel() {
  const [tab, setTab] = useState<"about" | "resume">("about");
  const heading = tab === "about" ? "About Me" : "Resume";

  return (
    <section className="rounded-2xl bg-white/5 p-8 md:p-10 shadow-xl ring-1 ring-white/10">
      {/* Header row: title + tabs on the same line */}
      <div className="flex items-start justify-between">
        <div>
          <motion.h2 className="text-3xl md:text-4xl font-bold" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
            {heading}
          </motion.h2>
          <div className="mt-4 h-1.5 w-20 rounded bg-yellow-400/80" />
        </div>

        <div className="flex items-center gap-3">
          {tab === "resume" && (
            <a
              href="/resume.pdf"
              download
              className="rounded-lg border border-yellow-500 px-4 py-2 text-sm font-medium text-yellow-400 hover:bg-yellow-500 hover:text-black"
            >
              Download Resume
            </a>
          )}
          <div className="rounded-xl bg-white/5 p-1.5 ring-1 ring-white/10">
            {[
              { key: "about", label: "About" },
              { key: "resume", label: "Resume" },
            ].map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setTab(key as "about" | "resume")}
                className={`${tab === key ? "bg-yellow-500 text-black" : "text-zinc-300"} rounded-lg px-5 py-2.5 text-base transition-colors`}
                aria-pressed={tab === key}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content inside the same panel */}
      <motion.div key={tab} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
        {tab === "about" ? (
          <div>
            <motion.p className="mt-6 text-lg leading-relaxed text-zinc-300" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              I’m a software engineer with excellent problem‑solving skills and a strong focus on
              collaboration. I’m passionate about coding and continual learning. I have hands-on
              experience building products with React, Next.js and mobile UIs with React Native,
              with a solid background in modern front‑end architectures and performance.
            </motion.p>
            <motion.p className="mt-6 text-lg leading-relaxed text-zinc-300" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              My job is to build products that are functional, user‑friendly, and efficient,
              while also maintaining an attractive design. Outside of work, I enjoy sports and movies.
            </motion.p>

            <motion.h3 className="mt-10 text-2xl font-semibold text-white" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
              What I’m Doing
            </motion.h3>
            <div className="mt-6 grid gap-8 md:grid-cols-2">
              <DoingCard title="Front End Development" subtitle="React, Next.js (3+ years)" />
              <DoingCard title="Back End Development" subtitle="Node.js APIs (2+ years)" />
              <DoingCard title="Cloud Service" subtitle="Deployments and CI/CD" />
              <DoingCard title="Activities" subtitle="Movies, outdoor sports, quick sprints" />
            </div>
          </div>
        ) : (
          <div className="mt-6">
            <ResumeSection title="Experience" icon="📘">
              <ResumeItem role="Software Engineer" company="Allegion India, Bangalore" time="August 2022 — Present" details="Angular, ASP.NET, and Azure." />
              <ResumeItem role="Intern" company="Allegion India, Bangalore" time="March 2022 — May 2022" details="ML.NET and C#." isLast />
            </ResumeSection>

            <ResumeSection title="Certificates" icon="📜">
              <ResumeItem role="Programming, DSA Using Python" company="NPTEL, CMI Madras" time="September 2021" details="Certification focused on algorithms and Python." isLast />
            </ResumeSection>

            <ResumeSection title="Education" icon="🎓">
              <ResumeItem role="Tezpur University" company="" time="" details="" isLast />
            </ResumeSection>
          </div>
        )}
      </motion.div>
    </section>
  );
}