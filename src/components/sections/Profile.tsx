"use client";

import SidebarProfile from "@/components/ui/SidebarProfile";
import AboutResumePanel from "@/components/sections/AboutResumePanel";

export default function Profile() {
  return (
    <section className="mx-auto max-w-7xl px-8 py-10">
      <div className="grid gap-8 lg:grid-cols-[406px_1fr]">
        <SidebarProfile />
        <AboutResumePanel />
      </div>
    </section>
  );
}