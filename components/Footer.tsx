export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-5xl px-6 py-6 text-center text-sm text-muted">
        © {new Date().getFullYear()} Matthew Steinbeiss
      </div>
    </footer>
  );
}
