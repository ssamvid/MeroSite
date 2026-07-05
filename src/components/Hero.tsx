export default function Hero() {
  return (
    <section
      id="top"
      className="relative mx-auto max-w-4xl overflow-hidden px-6 pt-20 pb-16 sm:pt-28 sm:pb-24"
    >
      <div className="blob blob-accent -top-20 -left-20 h-72 w-72" />
      <div className="blob blob-accent-2 top-10 right-0 h-64 w-64" />

      <div className="relative">
        <p className="text-sm font-medium uppercase tracking-widest text-accent">
          Backend Developer · Building &amp; Shipping
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
          I&apos;m <span className="gradient-text">Samvid Shrestha</span>.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
          An early-career backend developer who took full ownership of a
          real system&apos;s database, security, and login flow — solo,
          inside a team project. I move fast, learn faster, and I&apos;m
          looking for the team that wants someone hungry, not just
          experienced.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#contact"
            className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-black transition-all hover:scale-105 hover:shadow-[0_0_24px_rgba(45,212,191,0.55)]"
          >
            Let&apos;s Talk
          </a>
          <a
            href="#"
            aria-disabled="true"
            title="Resume coming soon"
            className="rounded-full border border-border px-6 py-3 text-sm font-medium text-muted transition-colors hover:border-accent hover:text-foreground"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
