import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { BuyOnAmazon } from "@/components/BuyOnAmazon";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Acquena Face Cleanser Questions Answered" },
      { name: "description", content: "Common questions about Acquena face cleanser: ingredients, skin types, usage, shipping and more." },
      { property: "og:title", content: "Acquena FAQ" },
      { property: "og:description", content: "Everything you need to know about Acquena face cleanser." },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: FaqPage,
});

const faqs = [
  { q: "Is Acquena suitable for oily skin?", a: "Yes — it's specifically formulated to balance oil production without stripping the skin. Niacinamide helps regulate sebum while gentle surfactants cleanse without over-drying." },
  { q: "Can people with dry or sensitive skin use it?", a: "Absolutely. The formula is sulfate-free, fragrance-free and contains hyaluronic acid, glycerin and aloe to keep dry and sensitive skin comfortable." },
  { q: "How often should I use Acquena?", a: "Twice daily — morning and night. If your skin is very dry, you can switch the morning wash to a simple water rinse." },
  { q: "Does it foam?", a: "Lightly. It's a gel-cream that produces a soft, low foam — by design. Heavy foaming usually means harsh sulfates, which Acquena doesn't contain." },
  { q: "Is it safe for daily long-term use?", a: "Yes. It's dermatologist-tested for daily use and contains no parabens, sulfates, mineral oil or synthetic fragrance." },
  { q: "Is it cruelty-free and vegan?", a: "Yes — Acquena is 100% vegan and never tested on animals." },
  { q: "Where can I buy Acquena?", a: "Acquena is sold exclusively on Amazon India for guaranteed authenticity and fast Prime shipping." },
  { q: "How long does one bottle last?", a: "A 150ml bottle typically lasts 2–3 months with twice-daily use." },
  { q: "Will it remove my makeup?", a: "Acquena will remove light makeup and SPF. For heavy or waterproof makeup, we recommend a dedicated makeup remover or oil cleanser first." },
  { q: "What is your return policy?", a: "Returns are managed through Amazon India's return policy. If you're unhappy with your purchase, contact Amazon support within the return window." },
];

function FaqPage() {
  return (
    <div className="container-prose py-16 md:py-24">
      <header className="mx-auto max-w-2xl text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-primary">FAQ</p>
        <h1 className="mt-3 font-serif text-4xl text-foreground sm:text-5xl">Frequently asked questions.</h1>
        <p className="mt-5 text-muted-foreground">Quick answers to the questions we hear most often.</p>
      </header>

      <div className="mx-auto mt-12 max-w-3xl">
        {faqs.map((f, i) => <FAQItem key={i} q={f.q} a={f.a} />)}
      </div>

      <div className="mx-auto mt-16 max-w-2xl text-center">
        <p className="text-muted-foreground">Still have questions?</p>
        <div className="mt-5"><BuyOnAmazon /></div>
      </div>
    </div>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-6 py-5 text-left"
        aria-expanded={open}
      >
        <span className="font-serif text-lg text-foreground">{q}</span>
        <span className={`flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-border text-primary transition-transform ${open ? "rotate-45" : ""}`}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12h14" /></svg>
        </span>
      </button>
      {open && <p className="pb-5 pr-12 text-sm leading-relaxed text-muted-foreground">{a}</p>}
    </div>
  );
}
