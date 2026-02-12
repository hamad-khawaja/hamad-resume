"use client";

import { interests } from "@/data/resume";
import TerminalHeader from "./TerminalHeader";
import ScrollReveal from "./ScrollReveal";

export default function Interests() {
  return (
    <section className="bg-bg-secondary py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <ScrollReveal>
          <TerminalHeader command="neofetch --hobbies" id="interests" />
        </ScrollReveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {interests.map((interest, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <div className="rounded border border-bg-tertiary bg-bg-primary p-5 transition-colors hover:border-terminal-green/30">
                <div className="mb-2 flex items-center gap-3">
                  <span className="text-2xl">{interest.icon}</span>
                  <h3 className="font-mono font-bold text-terminal-green">
                    {interest.name}
                  </h3>
                </div>
                <p className="text-sm text-text-muted">{interest.description}</p>
                {interest.link && (
                  <a
                    href={interest.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block font-mono text-xs text-terminal-cyan transition-colors hover:underline"
                  >
                    → view profile
                  </a>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
