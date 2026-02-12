"use client";

import { metrics } from "@/data/resume";
import TerminalHeader from "./TerminalHeader";
import ScrollReveal from "./ScrollReveal";
import AnimatedCounter from "./AnimatedCounter";

export default function Metrics() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <ScrollReveal>
          <TerminalHeader command="metrics --career" />
        </ScrollReveal>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
          {metrics.map((metric, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="flex flex-col items-center rounded border border-bg-tertiary bg-bg-secondary p-6 text-center">
                <AnimatedCounter
                  value={metric.numericValue}
                  prefix={metric.prefix}
                  suffix={metric.suffix}
                />
                <span className="mt-2 text-xs text-text-muted">{metric.label}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
