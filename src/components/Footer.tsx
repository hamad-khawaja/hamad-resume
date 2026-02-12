import { personalInfo } from "@/data/resume";

export default function Footer() {
  return (
    <footer className="border-t border-bg-tertiary bg-bg-secondary py-8">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
          <p className="font-mono text-sm text-text-muted">
            Built with Next.js, caffeine, and too many terminal tabs.
          </p>
          <div className="flex items-center gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted transition-colors hover:text-terminal-green"
              aria-label="GitHub"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted transition-colors hover:text-terminal-green"
              aria-label="LinkedIn"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href={personalInfo.goodreads}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted transition-colors hover:text-terminal-green"
              aria-label="Goodreads"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.002 1C6.506 1 2.003 5.504 2.003 11.002c0 5.496 4.503 9.998 9.999 9.998 5.498 0 10.001-4.502 10.001-9.998C22.003 5.504 17.5 1 12.002 1zm2.466 15.474h-.05c-.074.112-.232.334-.475.507a2.627 2.627 0 0 1-1.326.516c-1.869.155-3.166-.89-3.636-2.085-.47-1.196-.399-2.742.314-3.856.712-1.114 1.834-1.769 3.095-1.623.502.058.916.238 1.244.488.327.25.552.519.671.735h.03V7.354h1.103v8.68c0 .31.012.622.035.877h-1.005v-.437zm-.03-3.104c-.028-.532-.268-1.08-.632-1.467-.363-.388-.862-.625-1.422-.636-1.322-.025-2.111.898-2.313 1.861-.201.963.09 2.091 1.066 2.627.553.304 1.235.36 1.82.137.585-.223 1.044-.663 1.312-1.2.18-.361.213-.748.17-1.322z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
