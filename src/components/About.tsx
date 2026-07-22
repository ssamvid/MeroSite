import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-4xl px-6 py-16">
      <Reveal>
        <h2 className="text-2xl font-semibold tracking-tight">About</h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
          I&apos;m 19, still early in my career, and genuinely excited to
          learn — especially anything related to AI assisted development. I
          like using AI tools to build real projects end to end: databases,
          authentication and security, and the everyday features that make an
          app actually usable, like search, organization, and data
          visualization. I care about the parts of software that quietly
          determine whether a product works, and I&apos;m always looking for
          the next thing to pick up.
        </p>
      </Reveal>
    </section>
  );
}
