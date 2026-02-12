"use client";

import { skills } from "@/data/resume";
import TerminalHeader from "./TerminalHeader";
import ScrollReveal from "./ScrollReveal";

export default function Skills() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <ScrollReveal>
          <TerminalHeader command="skills --list" id="skills" />
        </ScrollReveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <div className="rounded border border-bg-tertiary bg-bg-secondary p-5">
                <h3 className="mb-3 font-mono text-sm font-bold uppercase tracking-wider text-terminal-cyan">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded border border-bg-tertiary bg-bg-primary px-3 py-1 font-mono text-xs text-text-primary transition-colors hover:border-terminal-green/30 hover:text-terminal-green"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
