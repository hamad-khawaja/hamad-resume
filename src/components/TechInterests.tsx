"use client";

import { techInterests } from "@/data/resume";
import TerminalHeader from "./TerminalHeader";
import ScrollReveal from "./ScrollReveal";
import { SiArchlinux, SiRaspberrypi, SiLinux } from "react-icons/si";

export default function TechInterests() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <ScrollReveal>
          <TerminalHeader command="cat /etc/hamad/homelab.conf" />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="rounded border border-bg-tertiary bg-bg-secondary p-6 font-mono text-sm">
            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <SiArchlinux className="h-4 w-4 text-terminal-cyan" />
                <span className="text-terminal-cyan">OS</span>
                <span className="text-text-muted">: </span>
                <span className="text-terminal-green">{techInterests.os}</span>
              </p>
              <p className="flex items-center gap-2">
                <SiRaspberrypi className="h-4 w-4 text-terminal-cyan" />
                <span className="text-terminal-cyan">Homelab</span>
                <span className="text-text-muted">: </span>
                <span className="text-terminal-green">{techInterests.homelab}</span>
              </p>
              <p>
                <span className="text-terminal-cyan">Currently tinkering with</span>
                <span className="text-text-muted">:</span>
              </p>
              {techInterests.tinkering.map((item, i) => (
                <p key={i} className="pl-4 text-terminal-green">
                  - {item}
                </p>
              ))}
              <p className="mt-4 flex items-center gap-2 border-t border-bg-tertiary pt-4">
                <SiLinux className="h-4 w-4 text-terminal-cyan" />
                <span className="text-terminal-cyan">Philosophy</span>
                <span className="text-text-muted">: </span>
                <span className="text-text-primary italic">
                  &quot;{techInterests.philosophy}&quot;
                </span>
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
