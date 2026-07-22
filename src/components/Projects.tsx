import Reveal from "./Reveal";

const projects = [
  {
    number: "01",
    title: "FitTrack",
    context: "Personal project",
    role: "Solo Developer",
    description:
      "A fitness and nutrition app for tracking daily progress toward a weight goal. Users log meals to track calories, protein, and carbs, log their weight each day, and see a growth chart of how their weight is trending against their target. Built solo with an AI assisted development workflow.",
    tags: ["Full Stack", "Nutrition Tracking", "Data Visualization", "AI Assisted Development"],
    link: "https://fitness-bcce3.web.app",
    linkLabel: "View Live App",
    repoLink: undefined,
  },
  {
    number: "02",
    title: "E-Nable Nepal Account Management System",
    context: "Nonprofit project",
    role: "Solo Developer",
    description:
      "An accounting system built for E-Nable Nepal, a nonprofit that provides prosthetic arms to children with limb differences. Lets staff scan bills, keep a ledger, and track profit and loss over weeks, months, or years, instead of managing it by hand.",
    tags: ["Full Stack", "Accounting", "Bill Scanning", "Nonprofit"],
    link: undefined,
    linkLabel: "Repo coming soon",
    repoLink: undefined,
  },
  {
    number: "03",
    title: "Anaya Food Delivery and Ordering System",
    context: "School group project",
    role: "Backend Developer",
    description:
      "A food delivery and ordering platform built with a five person team. Owned the backend almost entirely: database design, login validation and security, and a WhatsApp OTP based password recovery flow.",
    tags: ["Backend", "Database", "Authentication", "OTP Integration"],
    link: "https://github.com/ssamvid",
    linkLabel: "View on GitHub",
    repoLink: undefined,
  },
  {
    number: "04",
    title: "NoteTaker",
    context: "Personal project",
    role: "Solo Developer",
    description:
      "A note-taking app for saving, searching, grouping, and pinning notes. Built for quick capture and easy retrieval, with organization features that keep notes structured as they pile up.",
    tags: ["Full Stack", "Search", "Organization"],
    link: "https://silver-mermaid-8e8506.netlify.app",
    linkLabel: "View Live App",
    repoLink: "https://github.com/ssamvid/NoteTaker",
  },
];

export default function Projects() {
  return (
    <section id="work" className="mx-auto max-w-4xl px-6 py-16">
      <Reveal>
        <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">Work</h2>
      </Reveal>

      <div className="mt-8 space-y-6">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={i * 80}>
            <div className="card rounded-2xl border border-border bg-card p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <span className="mt-1 font-mono text-sm text-muted">
                  {project.number}
                </span>
                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-lg font-medium">{project.title}</h3>
                    <span className="text-sm text-muted">{project.context}</span>
                  </div>
                  <p className="mt-1 text-sm text-accent">{project.role}</p>
                  <p className="mt-4 text-base leading-relaxed text-muted">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border px-3 py-1 text-xs text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 flex flex-wrap items-center gap-4">
                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-sm font-medium text-accent hover:underline"
                      >
                        {project.linkLabel} →
                      </a>
                    ) : (
                      <span className="inline-block text-sm font-medium text-muted">
                        {project.linkLabel}
                      </span>
                    )}
                    {project.repoLink ? (
                      <a
                        href={project.repoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-sm font-medium text-accent hover:underline"
                      >
                        View on GitHub →
                      </a>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
