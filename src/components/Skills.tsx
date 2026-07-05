import Reveal from "./Reveal";

const skillGroups = [
  {
    title: "Backend",
    items: ["REST API design", "Authentication & validation logic", "Server-side application logic"],
  },
  {
    title: "Databases",
    items: ["Relational database design", "Schema & data integration"],
  },
  {
    title: "Integrations",
    items: ["Third-party API integration", "WhatsApp OTP-based flows"],
  },
  {
    title: "How I Work",
    items: ["AI-assisted development", "Fast learner, low ego", "Owns problems end-to-end"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-4xl px-6 py-16">
      <Reveal>
        <h2 className="text-2xl font-semibold tracking-tight">Skills</h2>
        <p className="mt-2 text-sm text-muted">
          Still growing this list — here&apos;s what&apos;s already proven on a real project.
        </p>
      </Reveal>
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {skillGroups.map((group, i) => (
          <Reveal key={group.title} delay={i * 80}>
            <div className="glow-card h-full rounded-2xl border border-border bg-card p-6">
              <h3 className="font-medium">{group.title}</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted">
                {group.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
