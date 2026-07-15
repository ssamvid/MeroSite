import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-sm">
      <nav className="flex items-center justify-between px-6 py-4 sm:px-10">
        <a href="#top" className="font-display text-lg tracking-tight">
          SMVD
        </a>
        <div className="flex items-center gap-8">
          <ul className="hidden items-center gap-6 text-sm text-muted sm:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="nav-link hover:text-foreground">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
