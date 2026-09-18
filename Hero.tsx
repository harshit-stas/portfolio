const ledger = [
  {
    metric: "Partner colleges reported on",
    figure: "100+",
    context: "Multi-state Cisco NetAcad program tracking",
  },
  {
    metric: "Learners in a single report",
    figure: "55,175",
    context: "116-college Bihar SBTE enrollment report",
  },
  {
    metric: "CRM built from the ground up",
    figure: "0 → 1",
    context: "Zoho CRM: pipeline, automations, workflows",
  },
  {
    metric: "Field survey respondents",
    figure: "500+",
    context: "M.Sc. Biostatistics thesis, benchmarked to NFHS",
  },
];

export default function Hero() {
  return (
    <section id="top" className="border-b border-rule">
      <div className="mx-auto max-w-report px-6 pb-16 pt-14 sm:px-10 sm:pt-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[220px_1fr]">
          {/* Left meta column, like a report's front-matter block */}
          <div className="flex flex-row justify-between text-sm text-muted md:flex-col md:justify-start md:gap-6">
            <div>
              <p className="font-sans">Field</p>
              <p className="font-serif italic text-ink">Data & Analytics</p>
            </div>
            <div>
              <p className="font-sans">Based in</p>
              <p className="font-serif italic text-ink">India</p>
            </div>
            <div>
              <p className="font-sans">Status</p>
              <p className="font-serif italic text-ink">Open to roles</p>
            </div>
          </div>

          {/* Right: headline + proof ledger */}
          <div>
            <h1 className="max-w-2xl font-serif text-4xl leading-[1.15] text-ink sm:text-5xl">
              I turn scattered operational data into the systems and reports
              organizations actually run on.
            </h1>
            <p className="mt-6 max-w-xl font-sans text-base leading-relaxed text-muted">
              Senior Data Analyst at EdCreate Foundation, delivering the
              Cisco Networking Academy program, with an M.Sc. in
              Biostatistics. My work has spanned building a CRM from
              scratch, producing government-facing enrollment reports
              across 100+ colleges, and validating student data at scale —
              the infrastructure behind the dashboard, not just the
              dashboard.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-sm bg-ink px-5 py-2.5 font-sans text-sm text-paper transition-colors hover:bg-signal"
              >
                Read the case studies
              </a>
              <a
                href="https://github.com/harshit-stas"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-sm border border-ink px-5 py-2.5 font-sans text-sm text-ink transition-colors hover:bg-ink hover:text-paper"
              >
                GitHub
              </a>
            </div>

            {/* Proof ledger */}
            <div className="mt-12 border-t border-rule">
              <dl className="grid grid-cols-2 gap-x-8 gap-y-6 pt-6 sm:grid-cols-4">
                {ledger.map((row) => (
                  <div key={row.metric}>
                    <dt className="font-sans text-xs text-muted">
                      {row.metric}
                    </dt>
                    <dd className="mt-1 font-mono text-2xl tabular-figures text-ink">
                      {row.figure}
                    </dd>
                    <dd className="mt-1 font-sans text-xs leading-snug text-muted">
                      {row.context}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
