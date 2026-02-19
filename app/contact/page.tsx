import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Matthew Steinbeiss",
  description: "Get in touch with Matthew Steinbeiss.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-24">
      <div className="max-w-2xl">
        <h1 className="mb-4 font-serif text-4xl italic text-foreground">
          Contact
        </h1>
        <p className="mb-12 text-muted">
          For commissions, collaborations, licensing, or just to say hello.
        </p>
        <div className="border-t border-border pt-10">
          <a
            href="mailto:steinbeiss@gmail.com"
            className="font-serif text-2xl italic text-foreground underline-offset-4 transition-colors hover:text-accent hover:underline"
          >
            steinbeiss@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}
