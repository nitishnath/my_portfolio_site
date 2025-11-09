"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("idle");
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      e.currentTarget.reset();
    } catch (err) {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="text-3xl font-bold">Contact</h2>
      <form onSubmit={onSubmit} className="mt-8 grid gap-4 sm:grid-cols-2" aria-label="Contact form">
        <motion.input
          name="name"
          placeholder="Name"
          className="rounded-lg bg-white/5 p-3 outline-none ring-0 focus:ring-2 focus:ring-indigo-400"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        />
        <motion.input
          name="email"
          type="email"
          placeholder="Email"
          className="rounded-lg bg-white/5 p-3 outline-none ring-0 focus:ring-2 focus:ring-indigo-400"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        />
        <motion.textarea
          name="message"
          placeholder="Message"
          className="sm:col-span-2 min-h-[140px] rounded-lg bg-white/5 p-3 outline-none ring-0 focus:ring-2 focus:ring-indigo-400"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        />
        <motion.button
          type="submit"
          className="sm:col-span-2 rounded-lg bg-indigo-600 px-5 py-3 font-medium text-white transition-colors hover:bg-indigo-500 focus:ring-2 focus:ring-indigo-400"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Send Message
        </motion.button>
      </form>

      {/* Success / Error messages */}
      <div className="mt-4 min-h-[24px]">
        {status === "success" && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-400">
            Thanks! Your message has been sent.
          </motion.p>
        )}
        {status === "error" && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-400">
            Oops! Something went wrong. Please try again.
          </motion.p>
        )}
      </div>

      {/* Social links */}
      <div className="mt-6 flex gap-4" aria-label="Social links">
        {["GitHub", "LinkedIn", "Twitter"].map((name) => (
          <motion.a
            key={name}
            href="#"
            className="rounded-full border border-white/20 px-3 py-1 text-sm text-zinc-200 hover:bg-white/10"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {name}
          </motion.a>
        ))}
      </div>
    </section>
  );
}