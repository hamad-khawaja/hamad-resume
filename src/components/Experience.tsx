"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { experience } from "@/data/resume";
import TerminalHeader from "./TerminalHeader";
import ScrollReveal from "./ScrollReveal";

export default function Experience() {
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <section className="bg-bg-secondary py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <ScrollReveal>
          <TerminalHeader command="history --career" id="experience" />
        </ScrollReveal>

        <div className="relative">
          {/* Timeline line */}
          <div className="timeline-line absolute left-4 top-0 bottom-0 w-0.5 md:left-6" />

          <div className="space-y-8">
            {experience.map((exp, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="relative pl-10 md:pl-14">
                  {/* Timeline dot */}
                  <div className="glow-dot absolute left-2.5 top-1.5 h-3 w-3 rounded-full bg-terminal-green md:left-4.5" />

                  <button
                    onClick={() => setExpanded(expanded === i ? null : i)}
                    className="w-full text-left"
                  >
                    <div className="rounded border border-bg-tertiary bg-bg-primary p-5 transition-colors hover:border-terminal-green/30">
                      <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                        <h3 className="font-mono text-lg font-bold text-terminal-green">
                          {exp.title}
                        </h3>
                        <span className="font-mono text-sm text-text-muted">
                          {exp.dates}
                        </span>
                      </div>
                      <p className="mt-1 text-sm text-terminal-cyan">
                        {exp.company} — {exp.location}
                      </p>

                      <AnimatePresence>
                        {expanded === i && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <ul className="mt-4 space-y-2">
                              {exp.bullets.map((bullet, j) => (
                                <li
                                  key={j}
                                  className="flex gap-2 text-sm text-text-primary"
                                >
                                  <span className="mt-1 shrink-0 text-terminal-green">
                                    &gt;
                                  </span>
                                  {bullet}
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <p className="mt-3 font-mono text-xs text-text-muted">
                        {expanded === i ? "[ click to collapse ]" : "[ click to expand ]"}
                      </p>
                    </div>
                  </button>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
