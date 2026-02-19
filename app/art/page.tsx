import type { Metadata } from "next";
import ArtGallery, { type Artwork } from "@/components/ArtGallery";

export const metadata: Metadata = {
  title: "Art — Matthew Steinbeiss",
  description:
    "Visual art by Matthew Steinbeiss — acrylic painting, pen and ink, photography, and more.",
};

const artworks: Artwork[] = [
  {
    src: "/art/Rift Acrylic.jpg",
    title: "Rift",
    medium: "Acrylic",
    year: 2020,
    alt: "Fluid acrylic pour painting in luminous greens, teal, yellow-gold and white, suggestive of breaking atmosphere or water viewed from above",
  },
  {
    src: "/art/Dahlia Pen and Ink.jpg",
    title: "Dahlia",
    medium: "Pen and Ink",
    year: 2024,
    alt: "Detailed pen and ink botanical illustration of a dahlia flower, with dense hatching rendering petals in deep tonal gradations from near-black to white",
  },
  {
    src: "/art/Squid Acrylic on board.jpg",
    title: "Squid",
    medium: "Acrylic on Board",
    year: 2018,
    alt: "Dramatic acrylic pour in black and white with deep blue accents, featuring a spiral galaxy-like form and a trailing chain of cellular shapes",
  },
  {
    src: "/art/Squash Graphite.jpg",
    title: "Squash",
    medium: "Graphite",
    year: 2024,
    alt: "Graphite still life drawing of two winter squash — a tall butternut and a rounded delicata — with delicate tonal shading on white ground",
  },
  {
    src: "/art/Stairway Acrylic on Canvas.jpg",
    title: "Stairway",
    medium: "Acrylic on Canvas",
    year: 2020,
    alt: "Colorful fluid acrylic pour painting with swirling purples, crimson, teal, and grey forming layered organic movement across the canvas",
  },
  {
    src: "/art/Buena Vista Sky Astrophotography.jpg",
    title: "Buena Vista Sky",
    medium: "Astrophotography",
    year: 2026,
    alt: "Long-exposure night sky astrophotography showing Orion and the Pleiades above silhouetted high-desert trees in Buena Vista, Colorado",
  },
  {
    src: "/art/Wave Crash Acrylic on Canvas.jpg",
    title: "Wave Crash",
    medium: "Acrylic on Canvas",
    year: 2019,
    alt: "Acrylic pour painting in earthy greens, brown, and grey with forms suggesting an aerial view of forest floor or geological strata",
  },
  {
    src: "/art/Onion Pen and Ink.JPG",
    title: "Onion",
    medium: "Pen and Ink",
    year: 2025,
    alt: "Precise pen and ink botanical illustration of two green onions with detailed cross-hatching on bulbs and stems, signed MJS",
  },
];

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
          . Acrylic painting, pen and ink, photography, and more.
        </p>
        <p className="text-muted">
          The same impulse that drives the music — bridging the natural and the
          synthetic, the analog and the digital — shows up here visually.
          &ldquo;Trippy&rdquo; as a quality of experience rather than a genre.
          Work that unsettles the familiar and makes something new from it.
        </p>
      </div>
      <ArtGallery artworks={artworks} />
    </div>
  );
}
