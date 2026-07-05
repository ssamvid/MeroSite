import Reveal from "./Reveal";

const EMAIL = "samvidstha25@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/samvidshrestha";
const GITHUB = "https://github.com/ssamvid";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-4xl px-6 py-16">
      <Reveal>
        <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
        <p className="mt-4 max-w-2xl text-muted">
          Want to get in touch? Send an email or find me on the links below.
        </p>
      </Reveal>

      <Reveal delay={100}>
        <form
          action={`mailto:${EMAIL}`}
          method="post"
          encType="text/plain"
          className="mt-8 max-w-xl space-y-4"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="mt-1 w-full rounded-lg border border-border bg-background px-4 py-2 text-sm outline-none transition-colors focus:border-accent"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Your Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="mt-1 w-full rounded-lg border border-border bg-background px-4 py-2 text-sm outline-none transition-colors focus:border-accent"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="mt-1 w-full rounded-lg border border-border bg-background px-4 py-2 text-sm outline-none transition-colors focus:border-accent"
            />
          </div>
          <button
            type="submit"
            className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-black transition-all hover:scale-105 hover:shadow-[0_0_24px_rgba(45,212,191,0.55)]"
          >
            Send Message
          </button>
        </form>
      </Reveal>

      <Reveal delay={150}>
        <div className="mt-10 flex flex-wrap gap-6 text-sm">
          <a href={`mailto:${EMAIL}`} className="text-muted transition-colors hover:text-accent">
            {EMAIL}
          </a>
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition-colors hover:text-accent"
          >
            LinkedIn
          </a>
          <a
            href={GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition-colors hover:text-accent"
          >
            GitHub
          </a>
        </div>
      </Reveal>
    </section>
  );
}
