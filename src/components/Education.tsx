"use client";

import { education, certifications } from "@/data/resume";
import TerminalHeader from "./TerminalHeader";
import ScrollReveal from "./ScrollReveal";

export default function Education() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <ScrollReveal>
          <TerminalHeader command="cat ~/.credentials" />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="rounded border border-bg-tertiary bg-bg-secondary p-6 font-mono text-sm">
            <p className="mb-4 text-terminal-cyan"># education.conf</p>

            <div className="mb-6">
              <p>
                <span className="text-text-muted">degree</span>
                <span className="text-text-muted"> = </span>
                <span className="text-terminal-green">&quot;{education.degree}&quot;</span>
              </p>
              <p>
                <span className="text-text-muted">school</span>
                <span className="text-text-muted"> = </span>
                <span className="text-terminal-green">&quot;{education.school}&quot;</span>
              </p>
              <p>
                <span className="text-text-muted">dates</span>
                <span className="text-text-muted"> = </span>
                <span className="text-terminal-green">&quot;{education.dates}&quot;</span>
              </p>
              <p>
                <span className="text-text-muted">gpa</span>
                <span className="text-text-muted">   = </span>
                <span className="text-terminal-amber">{education.gpa}</span>
              </p>
              <p>
                <span className="text-text-muted">honors</span>
                <span className="text-text-muted"> = </span>
                <span className="text-terminal-green">[{education.honors.map((h) => `"${h}"`).join(", ")}]</span>
              </p>
            </div>

            <p className="mb-4 text-terminal-cyan"># certifications.conf</p>
            {certifications.map((cert, i) => (
              <p key={i}>
                <span className="text-text-muted">[{cert.year}]</span>{" "}
                <span className="text-terminal-green">{cert.name}</span>
              </p>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
