"use client";

import { rolesNotWanted } from "@/data/resume";
import TerminalHeader from "./TerminalHeader";
import ScrollReveal from "./ScrollReveal";

export default function RolesNotWanted() {
  return (
    <section className="bg-bg-secondary py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <ScrollReveal>
          <TerminalHeader command="job-search --blacklist" />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="rounded border border-bg-tertiary bg-bg-primary p-6 font-mono text-sm">
            <p className="mb-4 text-terminal-cyan"># /etc/hamad/nope.conf</p>
            {rolesNotWanted.map((item, i) => (
              <p key={i} className="mb-1">
                <span className="text-red-400">{item.rule}</span>
                <span className="pl-6 text-text-muted"># {item.comment}</span>
              </p>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
