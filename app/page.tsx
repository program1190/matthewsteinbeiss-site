import Link from "next/link";

const sections = [
  {
    href: "/music",
    title: "Music",
    description: "Original compositions, recordings, and musical projects.",
  },
  {
    href: "/art",
    title: "Art",
    description: "Visual art, illustrations, and creative works.",
  },
  {
    href: "/making",
    title: "Making",
    description: "3D printing and woodworking projects.",
  },
  {
    href: "/social",
    title: "Social",
    description: "Connect and follow along on social media.",
  },
];

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-24">
      <div className="mb-16">
        <h1 className="mb-4 text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          Matthew Steinbeiss
        </h1>
        <p className="max-w-xl text-lg text-zinc-600 dark:text-zinc-400">
          Artist, musician, and maker. This is my corner of the internet for
          art, music, 3D printing, and woodworking.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {sections.map(({ href, title, description }) => (
          <Link
            key={href}
            href={href}
            className="group rounded-xl border border-zinc-200 p-6 transition-colors hover:border-zinc-400 dark:border-zinc-800 dark:hover:border-zinc-600"
          >
            <h2 className="mb-2 text-lg font-medium text-zinc-900 dark:text-zinc-50">
              {title} →
            </h2>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              {description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
