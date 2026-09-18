const stages = [
  { label: "Enrolled", value: 55175 },
  { label: "Active", value: 27940 },
  { label: "Certified", value: 20990 },
];

const max = stages[0].value;

export default function FunnelChart() {
  return (
    <div className="rounded-sm border border-rule bg-white/40 p-6">
      <p className="font-sans text-xs text-muted">
        Bihar SBTE report — Jan&ndash;Jul 2026, 116 colleges
      </p>
      <div className="mt-5 space-y-4">
        {stages.map((stage, i) => {
          const widthPct = (stage.value / max) * 100;
          const pctOfEnrolled = ((stage.value / max) * 100).toFixed(1);
          return (
            <div key={stage.label}>
              <div className="flex items-baseline justify-between">
                <span className="font-sans text-sm text-ink">
                  {stage.label}
                </span>
                <span className="font-mono text-sm tabular-figures text-ink">
                  {stage.value.toLocaleString("en-IN")}
                  <span className="ml-2 text-xs text-muted">
                    {i === 0 ? "" : `(${pctOfEnrolled}% of enrolled)`}
                  </span>
                </span>
              </div>
              <div className="mt-1.5 h-2 w-full rounded-sm bg-rule/60">
                <div
                  className="h-2 rounded-sm bg-signal"
                  style={{
                    width: `${widthPct}%`,
                    backgroundColor: i === 2 ? "#A9822E" : "#2B4C6F",
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
      <p className="mt-5 border-t border-rule pt-4 font-sans text-xs leading-relaxed text-muted">
        Roughly 1 in 4 enrolled learners drop off before becoming active, and
        just over a third of all enrollments convert to certification.
        Recently began root-causing conversion drop-off at the college level
        to flag low-engagement partners to leadership.
      </p>
    </div>
  );
}
