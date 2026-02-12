"use client";

import { motion } from "motion/react";
import { personalInfo } from "@/data/resume";

export default function Hero() {
  return (
    <section className="grid-bg relative flex min-h-screen items-center justify-center overflow-hidden px-4">
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="mb-4 font-mono text-4xl font-bold uppercase tracking-wider text-terminal-green sm:text-5xl md:text-7xl">
            {personalInfo.name}
            <span className="cursor-blink text-terminal-green">_</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="mb-6 font-mono text-xl text-terminal-cyan md:text-2xl">
            {personalInfo.title}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="mx-auto mb-10 max-w-2xl text-lg text-text-muted">
            I architect cloud infrastructure at enterprise scale, build AI tools, and
            lead engineering teams. 8+ years of shipping things that matter.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <a
            href="#about"
            className="rounded bg-terminal-green/10 px-6 py-3 font-mono text-sm text-terminal-green transition-all hover:bg-terminal-green/20"
          >
            View My Work ↓
          </a>
          <a
            href="/hamad_resume.pdf"
            download
            className="rounded border border-terminal-green px-6 py-3 font-mono text-sm text-terminal-green transition-all hover:bg-terminal-green/10"
          >
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}
