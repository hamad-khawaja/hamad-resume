"use client";

import { rolesWanted } from "@/data/resume";
import TerminalHeader from "./TerminalHeader";
import ScrollReveal from "./ScrollReveal";

export default function RolesWanted() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <ScrollReveal>
          <TerminalHeader command="job-search --preferences" />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="rounded border border-bg-tertiary bg-bg-secondary p-6 font-mono text-sm">
            <p className="mb-3 text-terminal-cyan"># target-roles.yml</p>
            <p className="text-text-muted">roles:</p>
            {rolesWanted.roles.map((role, i) => (
              <p key={i} className="pl-4 text-terminal-green">
                - {role}
              </p>
            ))}
            <p className="mt-3 text-text-muted">environment:</p>
            {rolesWanted.environment.map((env, i) => (
              <p key={i} className="pl-4 text-terminal-green">
                - {env}
              </p>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
