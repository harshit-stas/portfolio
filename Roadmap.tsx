const items = [
  {
    title: "Advanced SQL",
    body: "Comfortable with SELECT, JOINs, and GROUP BY aggregations. Currently building a project using CTEs, window functions, and subqueries against enrollment-funnel-shaped data, similar to the reporting work above.",
  },
  {
    title: "Pipeline automation",
    body: "The monthly reporting process above is still run manually — extract, clean, and merge by hand. Next step is scripting that workflow so it runs with less manual intervention each cycle.",
  },
  {
    title: "Cloud data warehousing",
    body: "No hands-on GCP/BigQuery experience yet. On the list for the next few months.",
  },
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="border-b border-rule">
      <div className="mx-auto max-w-report px-6 py-16 sm:px-10">
        <div className="flex items-baseline gap-4 border-b border-rule pb-6">
          <span className="font-mono text-sm text-gold">04</span>
          <h2 className="font-serif text-2xl text-ink">
            Currently building
          </h2>
        </div>
        <p className="mt-6 max-w-2xl font-sans text-sm leading-relaxed text-muted">
          A working list, not a hidden gap. These are the areas I'm
          deliberately strengthening next, based on what recruiter-facing
          Data Analyst roles actually ask for.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {items.map((item) => (
            <div key={item.title} className="border-t border-rule pt-4">
              <h3 className="font-serif text-base text-ink">{item.title}</h3>
              <p className="mt-2 font-sans text-sm leading-relaxed text-muted">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
