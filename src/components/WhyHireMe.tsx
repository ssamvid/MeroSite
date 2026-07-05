import Reveal from "./Reveal";

const points = [
  {
    title: "I take ownership, not tickets",
    description:
      "On a five-person team, I ended up owning the entire backend — database, auth, and recovery flow — because I don't wait to be told exactly what to do.",
  },
  {
    title: "I close gaps fast",
    description:
      "I don't pretend to know everything. I use every tool available, including AI, to learn what I need and ship it correctly, not just quickly.",
  },
  {
    title: "I build for failure, not just success",
    description:
      "Login validation and OTP recovery aren't glamorous — I built them anyway, because I think about what breaks, not just what demos well.",
  },
];

export default function WhyHireMe() {
  return (
    <section id="why-hire-me" className="mx-auto max-w-4xl px-6 py-16">
      <Reveal>
        <h2 className="text-2xl font-semibold tracking-tight">Why Hire Me</h2>
        <p className="mt-2 max-w-2xl text-sm text-muted">
          I&apos;m not the developer with ten years of experience. I&apos;m the
          one who will outwork that gap — give me a real problem and I&apos;ll
          own it the way I owned this one.
        </p>
      </Reveal>
      <div className="mt-8 grid gap-6 sm:grid-cols-3">
        {points.map((point, i) => (
          <Reveal key={point.title} delay={i * 80}>
            <div className="glow-card h-full rounded-2xl border border-border bg-card p-6">
              <h3 className="font-medium text-accent">{point.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{point.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
