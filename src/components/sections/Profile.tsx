"use client";

import SidebarProfile from "@/components/ui/SidebarProfile";
import AboutResumePanel from "@/components/sections/AboutResumePanel";

export default function Profile() {
  return (
    <section className="mx-auto bg-zinc-800 px-4 py-6 shadow-xl ring-1 ring-white/10">
      <div className="grid gap-8 md:gap-12 lg:grid-cols-[406px_1fr]">
        <SidebarProfile />
        <AboutResumePanel />
      </div>
    </section>
  );
}