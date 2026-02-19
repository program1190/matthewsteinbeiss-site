"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export type Artwork = {
  src: string;
  title: string;
  medium: string;
  year: number;
  alt: string;
};

export default function ArtGallery({ artworks }: { artworks: Artwork[] }) {
  const [selected, setSelected] = useState<Artwork | null>(null);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    if (selected) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKey);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [selected]);

  return (
    <>
      <div className="columns-1 gap-6 sm:columns-2">
        {artworks.map((work) => (
          <div
            key={work.title}
            className="mb-6 cursor-zoom-in break-inside-avoid"
            onClick={() => setSelected(work)}
          >
            <div className="overflow-hidden rounded-lg">
              <Image
                src={work.src}
                alt={work.alt}
                width={1200}
                height={900}
                className="block h-auto w-full transition-opacity hover:opacity-90"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
            <div className="mt-3">
              <p className="font-serif italic text-foreground">{work.title}</p>
              <p className="text-xs text-muted">
                {work.medium}, {work.year}
              </p>
            </div>
          </div>
        ))}
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-50 flex cursor-zoom-out items-center justify-center bg-black/90 p-6"
          onClick={() => setSelected(null)}
        >
          <button
            className="absolute right-6 top-6 text-3xl leading-none text-white/60 transition-colors hover:text-white"
            onClick={() => setSelected(null)}
            aria-label="Close"
          >
            ×
          </button>
          <div
            className="flex max-h-[90vh] max-w-[90vw] cursor-default flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selected.src}
              alt={selected.alt}
              width={1600}
              height={1200}
              className="max-h-[80vh] w-auto rounded-lg object-contain"
              sizes="90vw"
              priority
            />
            <div className="mt-4">
              <p className="font-serif text-lg italic text-white">
                {selected.title}
              </p>
              <p className="text-sm text-white/50">
                {selected.medium}, {selected.year}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
