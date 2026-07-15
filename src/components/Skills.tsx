const phrase =
  "Still building my toolkit — learning backend development, AI assisted workflows, and how to ship real products.";

export default function Skills() {
  const doubled = [phrase, phrase, phrase, phrase];

  return (
    <section id="skills" className="border-y border-border py-8">
      <div className="overflow-hidden">
        <div className="marquee marquee-slow gap-16">
          {doubled.map((text, i) => (
            <span
              key={i}
              className="whitespace-nowrap text-sm text-muted"
            >
              {text}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
