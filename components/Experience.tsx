const threads = [
  {
    title: "Reporting & data quality",
    body: "Consolidate raw exports from the Cisco ASC dashboard into college-level enrollment, activity, and certification reports — deduplicating student records, reconciling inconsistent college and program names, and validating figures before they reach leadership and government education bodies. Reports run monthly across 100+ partner colleges and multiple states.",
  },
  {
    title: "Zoho CRM, built from scratch",
    body: "Before this, Zoho was used only to send invoices — there was no visibility into partner-college leads or deal stages. Designed the full CRM setup: pipeline stages, custom fields, automations, and workflows. Leadership now sees every college's status across the pipeline instead of relying on memory or scattered email threads.",
  },
  {
    title: "Program & stakeholder operations",
    body: "Coordinate Cisco Ideathon and Cisco-AICTE Virtual Internship Program (VIP) delivery — communicating directly with college SPOCs, tracking training program participation, and validating student course-completion certificates against roster and eligibility rules before submissions go to Cisco/AICTE.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="border-b border-rule">
      <div className="mx-auto max-w-report px-6 py-16 sm:px-10">
        <div className="flex items-baseline gap-4 border-b border-rule pb-6">
          <span className="font-mono text-sm text-gold">01</span>
          <h2 className="font-serif text-2xl text-ink">Experience</h2>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-[220px_1fr]">
          <div>
            <p className="font-serif text-lg text-ink">Senior Data Analyst</p>
            <p className="mt-1 font-sans text-sm text-muted">
              EdCreate Foundation
            </p>
            <p className="mt-1 font-sans text-sm text-muted">
              Cisco Networking Academy program delivery
            </p>
          </div>

          <div className="space-y-8">
            {threads.map((thread) => (
              <div key={thread.title} className="border-t border-rule pt-6 first:border-t-0 first:pt-0">
                <h3 className="font-serif text-lg text-ink">
                  {thread.title}
                </h3>
                <p className="mt-2 max-w-2xl font-sans text-sm leading-relaxed text-muted">
                  {thread.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
