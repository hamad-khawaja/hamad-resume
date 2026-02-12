"use client";

import { projects } from "@/data/resume";
import TerminalHeader from "./TerminalHeader";
import ScrollReveal from "./ScrollReveal";

export default function Projects() {
  return (
    <section className="bg-bg-secondary py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <ScrollReveal>
          <TerminalHeader command="ls ~/projects" id="projects" />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="rounded border border-bg-tertiary bg-bg-primary p-6 font-mono text-sm">
            <p className="mb-4 text-text-muted">
              total {projects.length}
            </p>
            {projects.map((project, i) => (
              <div key={i} className="mb-6 last:mb-0">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-text-muted">drwxr-xr-x</span>
                  <span className="text-terminal-green font-bold">
                    {project.name}/
                  </span>
                </div>
                <p className="mt-2 pl-4 font-sans text-sm text-text-primary">
                  {project.description}
                </p>
                <div className="mt-2 flex flex-wrap gap-2 pl-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded bg-bg-tertiary px-2 py-0.5 text-xs text-terminal-cyan"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block pl-4 text-xs text-terminal-green transition-colors hover:underline"
                  >
                    → {project.link}
                  </a>
                )}
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
