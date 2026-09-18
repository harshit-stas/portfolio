export default function Education() {
  return (
    <section id="education" className="border-b border-rule">
      <div className="mx-auto max-w-report px-6 py-16 sm:px-10">
        <div className="flex items-baseline gap-4 border-b border-rule pb-6">
          <span className="font-mono text-sm text-gold">05</span>
          <h2 className="font-serif text-2xl text-ink">Education</h2>
        </div>

        <div className="mt-8">
          <p className="font-serif text-lg text-ink">M.Sc. Biostatistics</p>
          <p className="mt-2 max-w-xl font-sans text-sm leading-relaxed text-muted">
            Thesis work involved primary field data collection and
            statistical analysis in Stata, benchmarking ward-level
            malnutrition indicators in Lucknow against national NFHS
            survey figures — the statistical foundation behind the
            reporting and analysis work above.
          </p>
        </div>
      </div>
    </section>
  );
}
