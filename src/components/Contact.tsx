"use client";

import { personalInfo } from "@/data/resume";
import TerminalHeader from "./TerminalHeader";
import ScrollReveal from "./ScrollReveal";

export default function Contact() {
  return (
    <section className="bg-bg-secondary py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <ScrollReveal>
          <TerminalHeader command="contact --info" id="contact" />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="rounded border border-bg-tertiary bg-bg-primary p-6 font-mono text-sm">
            <div className="space-y-2">
              <p>
                <span className="text-text-muted">email</span>
                <span className="text-text-muted">    : </span>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-terminal-green transition-colors hover:underline"
                >
                  {personalInfo.email}
                </a>
              </p>
              <p>
                <span className="text-text-muted">location</span>
                <span className="text-text-muted"> : </span>
                <span className="text-terminal-green">{personalInfo.location}</span>
              </p>
              <p>
                <span className="text-text-muted">github</span>
                <span className="text-text-muted">   : </span>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-terminal-green transition-colors hover:underline"
                >
                  {personalInfo.github}
                </a>
              </p>
              <p>
                <span className="text-text-muted">linkedin</span>
                <span className="text-text-muted"> : </span>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-terminal-green transition-colors hover:underline"
                >
                  {personalInfo.linkedin}
                </a>
              </p>
              <p>
                <span className="text-text-muted">goodreads</span>
                <span className="text-text-muted">: </span>
                <a
                  href={personalInfo.goodreads}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-terminal-green transition-colors hover:underline"
                >
                  {personalInfo.goodreads}
                </a>
              </p>
            </div>

            <div className="mt-6 border-t border-bg-tertiary pt-4">
              <p className="text-text-muted">
                $ echo &quot;Let&apos;s build something&quot;
              </p>
              <p className="mt-1 text-terminal-green">
                Ready for new challenges. Reach out anytime.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
