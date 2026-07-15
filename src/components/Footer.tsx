export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-4xl px-6 py-8 text-sm text-muted">
        © {new Date().getFullYear()} Samvid Shrestha
      </div>
    </footer>
  );
}
