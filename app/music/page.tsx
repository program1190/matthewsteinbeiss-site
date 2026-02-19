import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Music — Matthew Steinbeiss",
  description:
    "Three projects — acoustic songwriting as The Slow Sink, electronic production as Matthew Ashed, and ambient composition as Constraints.",
};

const projects = [
  {
    name: "The Slow Sink",
    tag: "Songwriting & Composition",
    description:
      "The most personal project. A blend of acoustic and synthesized sound built around songwriting and authentic connection. Influenced by the indie music of the early 2000s, the independent underground of the 1990s, and a range of electronic and avant-garde acts. Guitar, bass, keys, analog synthesis, and audio engineering — all of it in service of a song.",
    links: [] as { label: string; href: string }[],
    releases: [] as string[],
  },
  {
    name: "Matthew Ashed",
    tag: "Electronic",
    description:
      "The electronic alias. Purely synthesized, dance-oriented and headphone-oriented in equal measure. More machine, less song — but still driven by the same hunger for something that lands.",
    links: [
      {
        label: "Apple Music",
        href: "https://music.apple.com/us/artist/matthew-ashed/1479752340",
      },
    ],
    releases: [
      "Grizzly (2020)",
      "My Dear Friend (2019)",
      "Huh, You Said (2019)",
      "Longing (2019)",
    ],
  },
  {
    name: "Constraints",
    tag: "Ambient",
    description:
      "The ambient project. Limitation as a compositional force — wide, slow, and immersive. Music for spaces and states of mind rather than for stages.",
    links: [
      {
        label: "YouTube",
        href: "https://www.youtube.com/watch?v=04ZeGRSr7oU",
      },
    ],
    releases: ["High Altitude Spaces (published as Field of Streams — rebrand in progress)"],
  },
];

export default function MusicPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-24">
      <div className="mb-16 max-w-2xl">
        <h1 className="mb-4 font-serif text-4xl italic text-foreground">
          Music
        </h1>
        <p className="text-muted">
          Three distinct projects, each occupying a different part of the
          spectrum between acoustic and electronic, between song and sound
          design. Trippy without being psychedelic. Organic without being
          nostalgic.
        </p>
      </div>
      <div className="space-y-0">
        {projects.map(({ name, tag, description, links, releases }) => (
          <div key={name} className="border-t border-border py-10">
            <div className="mb-3 flex flex-wrap items-baseline gap-4">
              <h2 className="font-serif text-2xl italic text-foreground">
                {name}
              </h2>
              <span className="text-xs uppercase tracking-widest text-muted">
                {tag}
              </span>
            </div>
            <p className="mb-4 max-w-xl text-muted">{description}</p>
            {releases.length > 0 && (
              <ul className="mb-4 space-y-1">
                {releases.map((r) => (
                  <li key={r} className="text-sm text-muted">
                    {r}
                  </li>
                ))}
              </ul>
            )}
            {links.length > 0 ? (
              <div className="flex gap-4">
                {links.map(({ label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-accent underline-offset-4 hover:underline"
                  >
                    {label} →
                  </a>
                ))}
              </div>
            ) : (
              <p className="text-xs text-muted">Releases coming soon.</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
