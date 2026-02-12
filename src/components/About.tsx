"use client";

import Image from "next/image";
import { summary, companies } from "@/data/resume";
import TerminalHeader from "./TerminalHeader";
import ScrollReveal from "./ScrollReveal";

export default function About() {
  const paragraphs = summary.split("\n\n");

  return (
    <section className="bg-bg-secondary py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <ScrollReveal>
          <TerminalHeader command="cat about.md" id="about" />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="space-y-4">
            {paragraphs.map((p, i) => (
              <p key={i} className="text-lg leading-relaxed text-text-primary">
                {p}
              </p>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="mt-8 flex flex-wrap items-center gap-8">
            <span className="font-mono text-sm text-text-muted">
              Companies I&apos;ve worked at:
            </span>
            {companies.map((company) => (
              <div key={company.name} className="flex items-center gap-2">
                {company.logo ? (
                  <Image
                    src={company.logo}
                    alt={`${company.name} logo`}
                    width={80}
                    height={32}
                    className="h-8 w-auto brightness-0 invert opacity-70 hover:opacity-100 transition-opacity"
                  />
                ) : (
                  <span className="font-mono text-sm font-bold text-text-muted hover:text-text-primary transition-colors">
                    {company.name}
                  </span>
                )}
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="mt-8 rounded border border-bg-tertiary bg-bg-primary p-4 font-mono text-sm">
            <p className="text-text-muted">$ work-auth --check</p>
            <p className="mt-2 text-terminal-green">
              ✓ US Citizen | Authorized to work in the United States
            </p>
            <p className="text-text-muted">
              No sponsorship required. Ready to deploy anywhere.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
