"use client";

function toggleTheme() {
  const html = document.documentElement;
  const next = html.getAttribute("data-theme") === "dark" ? "light" : "dark";
  html.setAttribute("data-theme", next);
  try {
    localStorage.setItem("theme", next);
  } catch {}
}

export default function ThemeToggle() {
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle color theme"
      className="nav-link text-sm text-muted transition-colors hover:text-foreground"
    >
      <span className="theme-label-light">● Dark</span>
      <span className="theme-label-dark">○ Light</span>
    </button>
  );
}
