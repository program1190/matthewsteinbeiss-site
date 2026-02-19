import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Music — Matthew Steinbeiss",
  description: "Original compositions, recordings, and musical projects.",
};

export default function MusicPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-24">
      <h1 className="mb-4 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
        Music
      </h1>
      <p className="text-zinc-500 dark:text-zinc-400">Coming soon.</p>
    </div>
  );
}
