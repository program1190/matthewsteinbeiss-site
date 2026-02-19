import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Making — Matthew Steinbeiss",
  description: "3D printing and woodworking projects.",
};

export default function MakingPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-24">
      <div className="mb-16 max-w-2xl">
        <h1 className="mb-4 font-serif text-4xl italic text-foreground">
          Making
        </h1>
        <p className="mb-4 text-muted">
          Physical objects shaped by the same curiosity that drives the music
          and visual work. 3D printing and woodworking — fabrication as a form
          of creative expression, not just production.
        </p>
        <p className="text-muted">
          There&apos;s something about an object you can hold — something that
          occupies real space and has weight — that connects directly to why the
          music and the art exist. Intimate connection through physical things.
        </p>
      </div>
      <div className="border-t border-border pt-10">
        <p className="text-sm text-muted">Projects coming soon.</p>
      </div>
    </div>
  );
}
