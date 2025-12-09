"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import myPic from "../../images/my_pic.jpeg";
import { useEffect, useState } from "react";

export default function SidebarProfile() {
  const [mobileOpen, setMobileOpen] = useState<boolean>(() => {
    if (typeof window === "undefined") return false; // default collapsed on mobile during SSR
    return window.matchMedia("(min-width: 768px)").matches; // open on desktop
  });

  // Ensure desktop view is always expanded even if user collapsed on mobile
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(min-width: 768px)");
    const handler = (e: MediaQueryListEvent | MediaQueryList) => {
      if ("matches" in e ? e.matches : (e as MediaQueryList).matches) {
        setMobileOpen(true);
      }
    };
    handler(mq);
    mq.addEventListener("change", handler as (e: MediaQueryListEvent) => void);
    return () => mq.removeEventListener("change", handler as (e: MediaQueryListEvent) => void);
  }, []);
  return (
    <aside className="rounded-2xl bg-zinc-900 p-8 shadow-xl ring-1 ring-zinc-800 lg:sticky lg:top-8 self-start">
      <div className="mx-auto w-full md:w-auto">
        <div className="flex items-center gap-4 text-left md:flex-col md:items-center md:text-center">
          <motion.div
            className="h-20 w-20 md:h-32 md:w-32 rounded-full overflow-hidden shadow-lg"
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
          <div>
            <h2 className="text-xl font-semibold text-white md:mt-5">Nitish Kumar Nath</h2>
            <p className="mt-1 md:mt-2 inline-block rounded-full bg-zinc-800 px-3 py-1 text-sm md:px-4 md:py-1.5 md:text-base text-zinc-300">Frontend Engineer</p>
          </div>
        </div>

        <div className="mt-8 w-full relative">
          {/* Mobile toggle button */}
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
            aria-controls="sidebar-items"
            className="md:hidden absolute -top-38 right-0 rounded-xl bg-zinc-800/90 ring-1 ring-zinc-700 p-2 text-yellow-400 shadow"
            title={mobileOpen ? "Collapse" : "Expand"}
          >
            <span
              aria-hidden
              className={`inline-block transition-transform duration-300 ${mobileOpen ? "rotate-180" : "rotate-0"}`}
            >
              ▾
            </span>
          </button>

          <motion.div
            id="sidebar-items"
            initial={false}
            animate={{ height: mobileOpen ? "auto" : 0, opacity: mobileOpen ? 1 : 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden space-y-5"
          >
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
                <div className="flex h-8 w-8 items-center justify-center rounded-md bg-zinc-700/60 text-yellow-300">
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
          </motion.div>
        </div>
      </div>
    </aside>
  );
}
