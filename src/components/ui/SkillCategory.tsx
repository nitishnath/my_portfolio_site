"use client";

import { motion } from "framer-motion";
import SkillBar from "@/components/ui/SkillBar";

export interface SkillCategoryProps {
  title: string;
  items: string[];
  level?: number; // overall confidence for the category (0..100)
}

export default function SkillCategory({ title, items, level = 90 }: SkillCategoryProps) {
  return (
    <div className="rounded-xl bg-white/5 p-4">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-base font-semibold text-zinc-100">{title}</h3>
      </div>
      <SkillBar label={title} level={level} />
      <div className="mt-4 flex flex-wrap gap-2">
        {items.map((item, idx) => (
          <motion.span
            key={item}
            className="rounded-full border border-white/15 px-3 py-1 text-xs text-zinc-200 hover:bg-white/10"
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ delay: idx * 0.03 }}
          >
            {item}
          </motion.span>
        ))}
      </div>
    </div>
  );
}