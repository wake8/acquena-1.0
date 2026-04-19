import { createFileRoute, Link } from "@tanstack/react-router";
import { BuyOnAmazon } from "@/components/BuyOnAmazon";
import lifestyle from "@/assets/lifestyle.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Acquena — Our Story & Promise" },
      { name: "description", content: "Acquena is an Indian skincare brand on a mission to make gentle, effective everyday skincare. Read our story." },
      { property: "og:title", content: "About Acquena Skincare" },
      { property: "og:description", content: "An Indian brand making gentle, effective everyday skincare." },
      { property: "og:image", content: lifestyle },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="container-prose py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-primary">Our Story</p>
          <h1 className="mt-3 font-serif text-4xl text-foreground sm:text-5xl md:text-6xl">
            Skincare made gentle, made for here.
          </h1>
        </div>
      </section>

      <section className="container-prose">
        <img src={lifestyle} alt="Soft cream fabric with eucalyptus" width={1024} height={1024} loading="lazy" className="mx-auto aspect-[16/8] w-full max-w-5xl rounded-3xl object-cover shadow-[var(--shadow-soft)]" />
      </section>

      <section className="container-prose mt-16 max-w-2xl space-y-7 pb-12 text-base leading-[1.8] text-foreground/85">
        <p>
          Acquena began with a simple frustration. Walking the skincare aisle
          in India, every label seemed to shout — promising miracles, packed
          with sulfates, fragrance and ingredients no one could pronounce.
          What we couldn't find was a quiet, gentle, everyday cleanser that
          respected the skin instead of attacking it.
        </p>
        <p>
          So we made one. We worked with cosmetic chemists in Bengaluru and
          dermatologists in Mumbai to formulate a face wash that does one
          thing exceptionally well: cleanse without disturbing the skin's
          delicate balance.
        </p>

        <h2 className="font-serif text-2xl text-foreground">What we believe</h2>
        <p>
          Good skin doesn't come from doing more — it comes from doing less,
          consistently, with the right products. We believe in transparent
          ingredient lists, formulas backed by real science, and prices that
          don't ask you to choose between quality and accessibility.
        </p>

        <h2 className="font-serif text-2xl text-foreground">Made in India, for India</h2>
        <p>
          Indian skin lives through humidity, pollution, hard water and
          intense sun. Most global formulas weren't built for this. Acquena
          is — every batch is made and bottled in India, designed for the
          way our skin actually behaves.
        </p>

        <h2 className="font-serif text-2xl text-foreground">Our promise</h2>
        <ul className="space-y-2">
          {["Sulfate-free, paraben-free, fragrance-free", "Vegan & cruelty-free, always", "Transparent ingredient lists", "Dermatologist-tested formulas", "Made in India with global standards"].map((p) => (
            <li key={p} className="flex items-start gap-3"><span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" /> {p}</li>
          ))}
        </ul>
      </section>

      <section className="container-prose pb-20">
        <div className="rounded-3xl bg-primary px-6 py-14 text-center text-primary-foreground sm:px-12">
          <h2 className="mx-auto max-w-xl font-serif text-3xl sm:text-4xl">Join the ritual.</h2>
          <p className="mx-auto mt-3 max-w-md text-sm opacity-80">Available exclusively on Amazon India.</p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <BuyOnAmazon size="lg" />
            <Link to="/product" className="inline-flex items-center justify-center gap-2 rounded-full border border-primary-foreground/40 px-6 py-3 text-sm font-medium hover:bg-primary-foreground/10">
              Explore product
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
