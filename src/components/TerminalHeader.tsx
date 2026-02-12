"use client";

interface TerminalHeaderProps {
  command: string;
  id?: string;
}

export default function TerminalHeader({ command, id }: TerminalHeaderProps) {
  return (
    <div id={id} className="mb-8 scroll-mt-24">
      <span className="font-mono text-lg text-terminal-green md:text-xl">
        <span className="text-text-muted">$</span> {command}
        <span className="cursor-blink text-terminal-green">_</span>
      </span>
    </div>
  );
}
