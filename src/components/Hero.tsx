export default function Hero() {
  return (
    <section
      id="top"
      className="flex h-[calc(100dvh-4rem)] flex-col justify-between px-6 py-8 sm:px-10 sm:py-10"
    >
      <p className="text-sm font-medium uppercase tracking-widest text-muted">
        AI Assisted Developer
      </p>

      <h1 className="font-display -mx-1 text-[clamp(4rem,18vw,15rem)] leading-[0.78] tracking-[-0.04em]">
        Samvid
        <br />
        Shrestha
      </h1>

      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-sm">
          <p className="text-base leading-relaxed text-muted">
            19 years old and eager to learn everything I can about
            AI assisted development. I love using AI tools to build real
            projects and picking up new skills along the way.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:opacity-90"
            >
              Let&apos;s talk
            </a>
            <a
              href="#"
              aria-disabled="true"
              title="Resume coming soon"
              className="rounded-full border border-border px-5 py-2.5 text-sm font-medium text-muted transition-colors hover:border-accent hover:text-foreground"
            >
              Download resume
            </a>
          </div>
        </div>

        <div className="flex flex-row gap-3 sm:flex-col sm:items-end">
          <span className="flex items-center gap-2 rounded-full border border-border px-3 py-1.5 text-xs text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Open to work
          </span>
          <span className="rounded-full border border-border px-3 py-1.5 text-xs text-muted">
            Kathmandu, Nepal
          </span>
        </div>
      </div>
    </section>
  );
}
