import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Art — Matthew Steinbeiss",
  description:
    "Visual art exploring the boundary between natural forms and digital manipulation.",
};

export default function ArtPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-24">
      <div className="mb-16 max-w-2xl">
        <h1 className="mb-4 font-serif text-4xl italic text-foreground">
          Art
        </h1>
        <p className="mb-4 text-muted">
          Visual work under the name{" "}
          <a
            href="https://instagram.com/mindovermaffer"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground underline-offset-4 hover:underline"
          >
            @mindovermaffer
          </a>
          . A portfolio in progress.
        </p>
        <p className="text-muted">
          The same impulse that drives the music — bridging the natural and the
          synthetic, the analog and the digital — shows up here visually.
          &ldquo;Trippy&rdquo; as a quality of experience rather than a genre.
          Work that unsettles the familiar and makes something new from it.
        </p>
      </div>
      <div className="border-t border-border pt-10">
        <p className="text-sm text-muted">
          Portfolio in progress.{" "}
          <a
            href="https://instagram.com/mindovermaffer"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline-offset-4 hover:underline"
          >
            Follow on Instagram →
          </a>
        </p>
      </div>
    </div>
  );
}
