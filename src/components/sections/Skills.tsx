"use client";

import { motion } from "framer-motion";
import SkillBar from "@/components/ui/SkillBar";

type Skill = { label: string; level: number };

const skills: Skill[] = [
  { label: "JavaScript", level: 90 },
  { label: "TypeScript", level: 86 },
  { label: "React.js", level: 90 },
  { label: "Next.js", level: 88 },
  { label: "React Native", level: 75 },
  { label: "GraphQL", level: 72 },
  { label: "Git (GitHub, GitLab)", level: 85 },
];

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-20">
      <motion.h2
        className="text-3xl font-bold"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Skills
      </motion.h2>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {skills.map((s, idx) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.03 }}
          >
            <SkillBar label={s.label} level={s.level} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}