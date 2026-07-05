import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-4xl px-6 py-16">
      <Reveal>
        <h2 className="text-2xl font-semibold tracking-tight">About</h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-muted">
          I&apos;m early in my career, and I know it — but &ldquo;early&rdquo; doesn&apos;t
          mean untested. When my team needed a backend, I didn&apos;t just
          write endpoints; I owned the database, the login security, and a
          real OTP recovery flow, end to end, mostly on my own. I care about
          the parts of software that quietly determine whether a product
          works: data integrity, auth that doesn&apos;t break, and systems
          that fail gracefully instead of catastrophically. I use every tool
          available, including AI, to close the gap between where I am and
          where I&apos;m headed — fast.
        </p>
      </Reveal>
    </section>
  );
}
