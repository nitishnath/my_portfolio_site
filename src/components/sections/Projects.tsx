"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import Modal from "@/components/ui/Modal";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
}

const projects: Project[] = [
  {
    id: "p1",
    title: "Dashboard UI",
    description: "Responsive dashboard with real-time charts and role-based access.",
    image: "/window.svg",
  },
  {
    id: "p2",
    title: "E-commerce",
    description: "Product catalog, cart, checkout flow with optimized images.",
    image: "/globe.svg",
  },
  {
    id: "p3",
    title: "Portfolio",
    description: "Animated portfolio with Next.js App Router and Framer Motion.",
    image: "/file.svg",
  },
];

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="text-3xl font-bold">Projects</h2>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <motion.button
            key={p.id}
            className="group relative overflow-hidden rounded-xl bg-white/5 p-4 text-left shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            onClick={() => setSelected(p)}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="relative h-36 w-full">
              <Image
                src={p.image}
                alt="Project preview"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-contain opacity-80 transition-opacity group-hover:opacity-100"
                priority={false}
              />
            </div>
            <div className="mt-3">
              <h3 className="text-lg font-semibold text-zinc-100">{p.title}</h3>
              <p className="text-sm text-zinc-400">{p.description}</p>
            </div>

            {/* 3D hover effect via perspective */}
            <div className="pointer-events-none absolute inset-0 rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.35)] transition-transform group-hover:[transform:perspective(600px)_rotateX(2deg)]" />
          </motion.button>
        ))}
      </div>

      <Modal open={!!selected} onClose={() => setSelected(null)}>
        {selected && (
          <div>
            <h3 className="text-xl font-bold">{selected.title}</h3>
            <p className="mt-2 text-sm text-zinc-300">{selected.description}</p>
          </div>
        )}
      </Modal>
    </section>
  );
}