import Reveal from "./Reveal";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-4xl px-6 py-16">
      <Reveal>
        <h2 className="text-2xl font-semibold tracking-tight">Projects</h2>
      </Reveal>
      <Reveal delay={100}>
        <div className="glow-card mt-8 rounded-2xl border border-border bg-card p-6">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="font-medium">Anaya Food Delivery and Ordering System</h3>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            A food delivery and ordering platform built as a school group
            project. Responsible for the backend: database design, login
            validation, and a WhatsApp OTP-based password recovery flow.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {["Backend", "Database", "Authentication", "OTP Integration"].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border px-3 py-1 text-xs text-muted transition-colors hover:border-accent hover:text-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
          <a
            href="https://github.com/ssamvid"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-block text-sm font-medium text-accent hover:underline"
          >
            View on GitHub →
          </a>
        </div>
      </Reveal>
    </section>
  );
}
