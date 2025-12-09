"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import myPic from "../../images/my_pic.jpeg";

export default function SidebarProfile() {
  return (
    <aside className="rounded-2xl bg-zinc-900 p-8 shadow-xl ring-1 ring-white/10 lg:sticky lg:top-8 self-start">
      <div className="mx-auto flex flex-col items-center text-center">
        <motion.div
          className="h-32 w-32 rounded-full overflow-hidden shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <Image
            src={myPic}
            alt="Nitish Kumar Nath profile photo"
            className="h-full w-full object-cover rounded-full"
            placeholder="blur"
            priority
          />
        </motion.div>
        <h2 className="mt-5 text-xl font-semibold text-white">Nitish Kumar Nath</h2>
        <p className="mt-2 rounded-full bg-white/10 px-4 py-1.5 text-base text-zinc-300">Frontend Engineer</p>

        <div className="mt-8 space-y-5 w-full">
          {[
            { label: "Email", value: "nathnitish157@gmail.com", href: "mailto:nathnitish157@gmail.com", icon: "✉️" },
            { label: "Phone", value: "+91 700233 33138", icon: "📞" },
            { label: "Location", value: "Bangalore, India", icon: "📍" },
            {
              label: "LinkedIn",
              value: "linkedin.com/in/nitish-kumar-nath",
              href: "https://www.linkedin.com/in/nitish-kumar-nath-91b0a01a5/",
              icon: "🔗",
            },
            {
              label: "GitHub",
              value: "github.com/nitishkumarnath",
              href: "https://github.com/nitishkumarnath",
              icon: "🐙",
            },
          ].map((item) => (
            <div key={item.label} className="rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-3 md:flex md:items-center md:justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-md bg-zinc-700 text-yellow-300">
                  <span aria-hidden>{item.icon}</span>
                </div>
                <span className="text-sm md:text-base text-zinc-400">{item.label}</span>
              </div>
              {item.href ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-2 md:mt-0 block text-sm md:text-base ${item.href.startsWith("mailto:") ? "text-zinc-200" : "text-yellow-400 hover:underline md:pl-4"} truncate w-full md:max-w-[60%] md:text-right`}
                >
                  {item.value}
                </a>
              ) : (
                <span className="mt-2 md:mt-0 block text-sm md:text-base text-zinc-200 truncate w-full md:max-w-[60%] md:text-right md:pl-4">{item.value}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
