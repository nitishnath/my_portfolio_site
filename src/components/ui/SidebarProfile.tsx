"use client";

import { motion } from "framer-motion";

export default function SidebarProfile() {
  return (
    <aside className="rounded-2xl bg-white/5 p-8 shadow-xl ring-1 ring-white/10 lg:sticky lg:top-8 self-start">
      <div className="mx-auto flex flex-col items-center text-center">
        <motion.div
          className="h-32 w-32 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        />
        <h2 className="mt-5 text-xl font-semibold text-white">Nitish Kumar Nath</h2>
        <p className="mt-2 rounded-full bg-white/10 px-4 py-1.5 text-base text-zinc-300">Software Engineer</p>

        <div className="mt-8 space-y-5 w-full">
          {[
            { label: "Email", value: "nitish@example.com" },
            { label: "Phone", value: "+91 00000 00000" },
            { label: "Birthday", value: "Nov 23, 1998" },
            { label: "Location", value: "Bangalore, India" },
          ].map((item) => (
            <div key={item.label} className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3">
              <span className="text-sm md:text-base text-zinc-400">{item.label}</span>
              <span className="text-sm md:text-base text-zinc-200">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}