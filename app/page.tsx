import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://matthewsteinbeiss.com/",
  },
};

const sections = [
  {
    href: "/music",
    title: "Music",
    description:
      "Three projects spanning acoustic songwriting, electronic production, and ambient composition — each exploring the space between the organic and the synthesized.",
  },
  {
    href: "/art",
    title: "Art",
    description:
      "Visual work from @mindovermaffer — the boundary between natural forms and digital manipulation.",
  },
  {
    href: "/making",
    title: "Making",
    description:
      "Objects built by hand — 3D printing, woodworking, and the philosophy of making physical things.",
  },
  {
    href: "/social",
    title: "Social",
    description:
      "Find the music on Spotify, Apple Music, and YouTube. Follow along on Instagram.",
  },
];

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-24">
      <div className="mb-16 max-w-2xl">
        <h1 className="mb-6 font-serif text-5xl italic text-foreground">
          Matthew Steinbeiss
        </h1>
        <p className="mb-4 text-lg text-foreground">
          Artist, musician, and maker — working in the space between acoustic
          and electronic, organic and fabricated, the thing you hold and the
          sound you disappear into.
        </p>
        <p className="text-muted">
          Playing music since age eleven. The same curiosity that drives the
          songwriting — toward authentic connection, toward something genuinely
          felt — shows up in the visual work, the 3D printing, the woodworking.
          Making beautiful things that improve people&apos;s lives. That&apos;s
          the whole project.
        </p>
      </div>
      <div className="mb-16 overflow-hidden rounded-xl">
        <Link href="/art">
          <Image
            src="/art/Rift Acrylic.jpg"
            alt="Rift — Acrylic by Matthew Steinbeiss"
            width={1200}
            height={800}
            className="block h-auto w-full transition-opacity hover:opacity-95"
            sizes="(max-width: 1024px) 100vw, 1000px"
            priority
          />
        </Link>
        <p className="mt-3 text-sm italic text-muted">
          Rift — Acrylic.{" "}
          <Link href="/art" className="text-accent underline-offset-4 hover:underline">
            View all work →
          </Link>
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {sections.map(({ href, title, description }) => (
          <Link
            key={href}
            href={href}
            className="group rounded-xl border border-border bg-background p-6 transition-colors hover:border-accent"
          >
            <h2 className="mb-2 font-serif text-xl italic text-foreground transition-colors group-hover:text-accent">
              {title} →
            </h2>
            <p className="text-sm text-muted">{description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
