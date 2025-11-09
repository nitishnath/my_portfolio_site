"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="fixed inset-0 grid place-items-center bg-black">
      <motion.div
        className="h-16 w-16 rounded-full border-4 border-white/30 border-t-white"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, ease: "linear", duration: 0.9 }}
      />
    </div>
  );
}