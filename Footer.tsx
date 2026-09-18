export default function Footer() {
  return (
    <footer id="contact" className="bg-ink text-paper">
      <div className="mx-auto max-w-report px-6 py-16 sm:px-10">
        <h2 className="max-w-lg font-serif text-3xl leading-tight">
          Open to Data Analyst, BI Analyst, and Business Analyst roles.
        </h2>
        <p className="mt-4 max-w-md font-sans text-sm leading-relaxed text-paper/70">
          Resume available on request — reach out on LinkedIn and I'll send
          it over.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="https://www.linkedin.com/in/harshitraman/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-sm border border-paper px-5 py-2.5 font-sans text-sm transition-colors hover:bg-paper hover:text-ink"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/harshit-stas"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-sm border border-paper px-5 py-2.5 font-sans text-sm transition-colors hover:bg-paper hover:text-ink"
          >
            GitHub
          </a>
        </div>

        <p className="mt-16 font-mono text-xs text-paper/50">
          Harshit Raman — Data & Analytics
        </p>
      </div>
    </footer>
  );
}
