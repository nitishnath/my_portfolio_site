"use client";

import { motion } from "framer-motion";

export interface SkillBarProps {
  label: string;
  level: number; // 0..100
}

export default function SkillBar({ label, level }: SkillBarProps) {
  return (
    <div className="w-full">
      <div className="mb-2 flex items-center justify-between text-sm">
        <span className="text-zinc-200">{label}</span>
        <span className="text-zinc-400">{level}%</span>
      </div>
      <div className="h-2 w-full rounded-full bg-white/10">
        <motion.div
          className="h-2 rounded-full bg-indigo-500"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />
      </div>
    </div>
  );
}