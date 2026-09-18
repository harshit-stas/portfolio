const groups = [
  {
    title: "Analysis",
    items: ["SQL (SELECT, JOINs, GROUP BY & aggregations)", "Python (pandas)", "Statistics (Stata)", "Excel (pivot tables)"],
  },
  {
    title: "BI & reporting",
    items: ["Power BI (data modelling, DAX)", "Google Sheets"],
  },
  {
    title: "Data quality",
    items: ["Data cleaning & deduplication", "Cross-source reconciliation", "Rule-based validation"],
  },
  {
    title: "Systems & operations",
    items: ["Zoho CRM (setup, automation, workflows)", "Stakeholder & SPOC communication"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="border-b border-rule">
      <div className="mx-auto max-w-report px-6 py-16 sm:px-10">
        <div className="flex items-baseline gap-4 border-b border-rule pb-6">
          <span className="font-mono text-sm text-gold">03</span>
          <h2 className="font-serif text-2xl text-ink">Capabilities</h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {groups.map((group) => (
            <div key={group.title}>
              <h3 className="font-serif text-base text-ink">{group.title}</h3>
              <ul className="mt-3 space-y-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="font-sans text-sm leading-snug text-muted"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
