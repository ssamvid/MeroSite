import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-4xl px-6 py-16">
      <Reveal>
        <h2 className="text-2xl font-semibold tracking-tight">Experience</h2>
      </Reveal>
      <Reveal delay={100}>
        <div className="glow-card mt-8 rounded-2xl border border-border bg-card p-6">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="font-medium">Anaya Food Delivery and Ordering System</h3>
            <span className="text-sm text-muted">School group project</span>
          </div>
          <p className="mt-1 text-sm text-accent">Backend Developer</p>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            Part of a five-person team, each owning a distinct part of the
            system. I ended up owning almost all of the backend:
          </p>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              Designed and integrated the database for the ordering system
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              Built login validation and security logic
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              Implemented a WhatsApp OTP flow for password recovery
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              Used AI tools to speed up development without sacrificing quality
            </li>
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
