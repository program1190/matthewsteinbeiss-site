import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Making — Matthew Steinbeiss",
  description: "3D printing and woodworking projects.",
};

export default function MakingPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-24">
      <h1 className="mb-4 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
        Making
      </h1>
      <p className="mb-8 text-zinc-500 dark:text-zinc-400">Coming soon.</p>
    </div>
  );
}
