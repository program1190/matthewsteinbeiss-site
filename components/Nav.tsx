import Link from "next/link";

const links = [
  { href: "/music", label: "Music" },
  { href: "/art", label: "Art" },
  { href: "/making", label: "Making" },
  { href: "/social", label: "Social" },
];

export default function Nav() {
  return (
    <header className="border-b border-border bg-background">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-serif text-xl italic text-foreground"
        >
          Matthew Steinbeiss
        </Link>
        <ul className="flex gap-6 text-sm text-muted">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="transition-colors hover:text-accent"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
