import FunnelChart from "./FunnelChart";

type CaseStudy = {
  title: string;
  scope: string;
  problem: string;
  approach: string;
  outcome: string;
  stack: string[];
};

const caseStudies: CaseStudy[] = [
  {
    title: "Zoho CRM, designed from zero",
    scope: "Systems build · EdCreate Foundation",
    problem:
      "The organization's Zoho instance existed only to send invoices. There was no structured way to track partner-college leads, outreach stage, or deal status — follow-ups lived in memory and email threads.",
    approach:
      "Designed the CRM setup from scratch: pipeline stages, custom fields for college and program data, and automations/workflows to move records through stages without manual re-entry.",
    outcome:
      "Leadership can now see every college's pipeline stage in one place, in real time, instead of having no visibility at all.",
    stack: ["Zoho CRM", "Workflow automation", "Pipeline design"],
  },
  {
    title: "Tamil Nadu Skill Development Corporation dashboard",
    scope: "BI development · Power BI",
    problem:
      "TNSDC needed a college-wise view of program enrollment and completion across partner institutions, similar in shape to the Bihar reporting but for a different state body.",
    approach:
      "Built the Power BI dashboard from the ground up — data model, DAX measures, and visuals — rather than formatting an existing table. The dashboard tracks the same Enrolled → Active → Completed funnel used across NetAcad reporting.",
    outcome:
      "Gives TNSDC a self-serve, college-wise funnel view instead of a static exported report.",
    stack: ["Power BI", "DAX", "Data modelling"],
  },
  {
    title: "Cisco-AICTE VIP certificate validation",
    scope: "Data quality · Rule-based validation",
    problem:
      "Student internship certificate submissions needed to be verified against a roster before being accepted — names, courses, and completion dates are all inconsistently entered by students and colleges.",
    approach:
      "Built and applied a validation rule set: certificate name must match the roster, the course must match its declared column, and completion date must fall in the correct year — worked through college rosters systematically rather than ad hoc.",
    outcome:
      "A repeatable, auditable check that catches mismatched or invalid submissions before they're reported upward.",
    stack: ["Data validation", "Google Sheets/Forms", "Rule-based QA"],
  },
  {
    title: "Malnutrition across Lucknow wards vs. NFHS benchmarks",
    scope: "M.Sc. Biostatistics thesis · Primary field data",
    problem:
      "Assessing whether malnutrition indicators in specific Lucknow wards diverged from the national NFHS survey benchmarks — using primary, not secondary, data.",
    approach:
      "Part of a team that ran household surveys and field visits across 500+ respondents, then analyzed the results in Stata and compared them against published NFHS figures.",
    outcome:
      "Contributed to a formal thesis; personally responsible for both data collection and analysis.",
    stack: ["Stata", "Survey design", "Field data collection"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="border-b border-rule">
      <div className="mx-auto max-w-report px-6 py-16 sm:px-10">
        <div className="flex items-baseline gap-4 border-b border-rule pb-6">
          <span className="font-mono text-sm text-gold">02</span>
          <h2 className="font-serif text-2xl text-ink">Case studies</h2>
        </div>

        {/* Flagship case study with the real funnel chart */}
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-[220px_1fr]">
          <div>
            <p className="font-serif text-lg text-ink">
              Bihar SBTE enrollment &amp; certification reporting
            </p>
            <p className="mt-1 font-sans text-sm text-muted">
              Flagship reporting workflow
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {["Excel", "Pivot tables", "Data reconciliation", "Python (pandas)"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="rounded-sm border border-rule px-2 py-0.5 font-sans text-xs text-muted"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>

          <div>
            <div className="space-y-4 font-sans text-sm leading-relaxed text-muted">
              <p>
                <span className="font-serif not-italic text-ink">
                  Problem —{" "}
                </span>
                Cisco ASC exports arrive as raw, per-student records. Turning
                that into a trustworthy college-level report for a state
                education board means catching duplicate records,
                inconsistent college names, and mismatched program
                subscriptions before the numbers go anywhere near
                leadership or government reviewers.
              </p>
              <p>
                <span className="font-serif not-italic text-ink">
                  Approach —{" "}
                </span>
                Deduplicate and reconcile the raw export, roll it up to
                college level across Government and Private categories, and
                produce a monthly Enrolled → Active → Certified funnel per
                college with a grand total. Recently added a fourth step:
                flagging colleges with unusually low activation or
                certification rates for leadership follow-up.
              </p>
              <p>
                <span className="font-serif not-italic text-ink">
                  Outcome —{" "}
                </span>
                A monthly, government-facing report covering 116 colleges
                and over 55,000 enrolled learners, with early diagnostic
                work now identifying which specific colleges are losing
                learners between enrollment and certification.
              </p>
            </div>

            <div className="mt-6">
              <FunnelChart />
            </div>
          </div>
        </div>

        {/* Remaining case studies */}
        <div className="mt-16 space-y-12">
          {caseStudies.map((cs) => (
            <div
              key={cs.title}
              className="grid grid-cols-1 gap-6 border-t border-rule pt-10 md:grid-cols-[220px_1fr]"
            >
              <div>
                <p className="font-serif text-lg text-ink">{cs.title}</p>
                <p className="mt-1 font-sans text-sm text-muted">
                  {cs.scope}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {cs.stack.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-sm border border-rule px-2 py-0.5 font-sans text-xs text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="space-y-3 font-sans text-sm leading-relaxed text-muted">
                <p>
                  <span className="font-serif not-italic text-ink">
                    Problem —{" "}
                  </span>
                  {cs.problem}
                </p>
                <p>
                  <span className="font-serif not-italic text-ink">
                    Approach —{" "}
                  </span>
                  {cs.approach}
                </p>
                <p>
                  <span className="font-serif not-italic text-ink">
                    Outcome —{" "}
                  </span>
                  {cs.outcome}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
