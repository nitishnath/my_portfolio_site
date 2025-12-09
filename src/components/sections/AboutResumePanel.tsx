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

function SkillBar({ label, percent }: { label: string; percent: number }) {
  return (
    <div className="py-3">
      <div className="flex items-center justify-between text-zinc-200">
        <span className="font-medium">{label}</span>
        <span className="text-zinc-400">{percent}%</span>
      </div>
      <div className="mt-2 h-2 w-full rounded-full bg-zinc-700/70">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percent}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="h-2 rounded-full bg-yellow-400"
        />
      </div>
    </div>
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

function ResumeItem({ role, company, time, details, isLast = false }: { role: string; company: string; time: string; details?: React.ReactNode; isLast?: boolean }) {
  return (
    <div className="relative pl-8">
      <span className="absolute left-0 top-2 h-3 w-3 rounded-full bg-yellow-400" />
      {!isLast && <span className="absolute left-1 top-6 bottom-0 w-px bg-white/10" />}
      <p className="text-lg font-semibold text-zinc-100">{role}</p>
      {company && <p className="text-sm md:text-base text-zinc-300">{company}</p>}
      {time && <p className="mt-1 text-sm text-yellow-300">{time}</p>}
      {details && <div className="mt-2 text-sm md:text-base text-zinc-300">{details}</div>}
    </div>
  );
}

export default function AboutResumePanel() {
  const [tab, setTab] = useState<"about" | "resume">("about");
  const heading = tab === "about" ? "About Me" : "Resume";

  return (
    <section className="rounded-2xl bg-zinc-900 p-8 md:p-8 shadow-xl ring-1 ring-white/10">
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
              href="https://drive.google.com/uc?export=download&id=1ijICpnPn8bQsDoBMpg5iIUQ7-KOj9tXD"
              target="_blank"
              rel="noopener noreferrer"
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
              An experienced Frontend Engineer (3+ years) specializing in React.js, Next.js, and React Native, with a
strong focus on crafting accessible (WCAG-compliant, ARIA labels), scalable, and high-performance applications.
Skilled in using Redux Toolkit for optimized state management and GraphQL for efficient API communication.
Passionate about building intuitive user interfaces, enhancing performance, and maintaining clean, modular codebases
in SaaS, inventory, and AdTech domains.
            </motion.p>
            <motion.p className="mt-3 text-lg leading-relaxed text-zinc-300" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
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
              <ResumeItem
                role="Frontend Engineer"
                company="TrackOlap · Full‑time"
                time="Sep 2022 — Present"
                details={
                  <div>
                    {/* <p className="text-zinc-400">Noida, Uttar Pradesh, India · On‑site</p> */}
                    <ul className="mt-2 list-disc pl-5 space-y-1">
                      <li>Led end‑to‑end development of 3 frontend projects from scratch through to deployment; executed complex tasks demonstrating problem‑solving and technical expertise.</li>
                      <li>Led a team of developers to design and implement robust, scalable client‑facing websites and internal applications, significantly enhancing business impact.</li>
                      <li>Improved frontend performance by ~40% using React.js via smart refactoring, lazy loading, and Webpack/Vite tuning.</li>
                      <li>Developed reusable component libraries and design systems to ensure consistency and accelerate development cycles.</li>
                      <li>Implemented config‑driven UIs with authentication and security best practices; optimized build processes for performance and scalability.</li>
                      <li>Used React Query to manage data efficiently, reducing repeated API calls by ~60% and improving UX with smart caching and background updates.</li>
                      <li>Conducted code reviews, shared knowledge, and authored technical documentation (code structure, API contracts, deployment steps), reducing onboarding time for new developers by ~50%.</li>
                    </ul>
                  </div>
                }
                isLast
              />
            </ResumeSection>

            <ResumeSection title="Education" icon="🎓">
              <ResumeItem
                role="Tezpur University"
                company="Master of Computer Applications (MCA), Computer Science"
                time="Nov 2020 — Jul 2022"
                details=""
              />
              <ResumeItem
                role="Cotton University"
                company="BCA, Computer Science and Information Technology"
                time="Aug 2017 — Aug 2020"
                details=""
                isLast
              />
            </ResumeSection>

            <ResumeSection title="My Skills" icon="🛠️">
              <div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
                <SkillBar label="JavaScript" percent={90} />
                <SkillBar label="React.js" percent={90} />
                <SkillBar label="Next.js" percent={85} />
                <SkillBar label="React Native" percent={80} />
                <SkillBar label="TypeScript" percent={85} />
                <SkillBar label="GraphQL" percent={75} />
              </div>
            </ResumeSection>
          </div>
        )}
      </motion.div>
    </section>
  );
}