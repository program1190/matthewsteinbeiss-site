import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Social — Matthew Steinbeiss",
  description:
    "Find Matthew Steinbeiss on Spotify, Instagram, Apple Music, and more.",
};

const platforms = [
  {
    name: "Apple Music",
    handle: "Matthew Ashed",
    href: "https://music.apple.com/us/artist/matthew-ashed/1479752340",
    description: "Electronic releases.",
  },
  {
    name: "YouTube",
    handle: "Matthew Ashed",
    href: "https://www.youtube.com/channel/UCPnU6ALT017LadQJd7Nd2sg",
    description: "Electronic releases via YouTube Music.",
  },
  {
    name: "Instagram",
    handle: "@mindovermaffer",
    href: "https://instagram.com/mindovermaffer",
    description: "Visual art and updates.",
  },
  {
    name: "X / Twitter",
    handle: "@mindovermaffer",
    href: "https://twitter.com/mindovermaffer",
    description: "Thoughts and news.",
  },
];

const comingSoon = ["Bandcamp", "SoundCloud"];

export default function SocialPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-24">
      <div className="mb-16 max-w-2xl">
        <h1 className="mb-4 font-serif text-4xl italic text-foreground">
          Social
        </h1>
        <p className="text-muted">Find the music, follow the work, connect.</p>
      </div>
      <div className="divide-y divide-border border-t border-border">
        {platforms.map(({ name, handle, href, description }) => (
          <a
            key={name}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between py-5 transition-colors"
          >
            <div>
              <span className="block font-serif text-lg italic text-foreground transition-colors group-hover:text-accent">
                {name}
              </span>
              <span className="text-sm text-muted">
                {handle} — {description}
              </span>
            </div>
            <span className="text-muted transition-colors group-hover:text-accent">
              →
            </span>
          </a>
        ))}
      </div>
      <div className="mt-12 border-t border-border pt-8">
        <p className="mb-3 text-xs uppercase tracking-widest text-muted">
          Also coming
        </p>
        <p className="text-sm text-muted">{comingSoon.join(", ")}</p>
      </div>
    </div>
  );
}
