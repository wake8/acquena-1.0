import { createFileRoute, Link } from "@tanstack/react-router";
import { BuyOnAmazon } from "@/components/BuyOnAmazon";
import productBottle from "@/assets/product-bottle.jpg";
import texture from "@/assets/texture.jpg";

export const Route = createFileRoute("/product")({
  head: () => ({
    meta: [
      { title: "Acquena Face Cleanser — Ingredients, Benefits & How to Use" },
      { name: "description", content: "Discover the full Acquena face cleanser: gentle sulfate-free formula, natural ingredients, benefits, how to use, and where to buy on Amazon India." },
      { property: "og:title", content: "Acquena Face Cleanser — Full Product Details" },
      { property: "og:description", content: "Sulfate-free, dermatologist-tested daily cleanser. See ingredients & buy on Amazon." },
      { property: "og:image", content: productBottle },
      { name: "twitter:image", content: productBottle },
    ],
  }),
  component: ProductPage,
});

const ingredients = [
  { name: "Niacinamide 3%", purpose: "Refines pores, evens skin tone, controls excess oil." },
  { name: "Hyaluronic Acid", purpose: "Pulls moisture into the skin and supports the barrier." },
  { name: "Aloe Vera Extract", purpose: "Soothes irritation and calms redness." },
  { name: "Green Tea Extract", purpose: "Antioxidant protection against pollution and free radicals." },
  { name: "Glycerin", purpose: "Locks in long-lasting hydration." },
  { name: "Vitamin E", purpose: "Nourishes and protects skin from environmental stress." },
  { name: "Coco-Glucoside", purpose: "Plant-derived gentle cleansing agent — no sulfates." },
  { name: "Panthenol (Pro-Vitamin B5)", purpose: "Strengthens the moisture barrier." },
];

const steps = [
  { n: 1, title: "Wet your face", text: "Splash with lukewarm water — never hot." },
  { n: 2, title: "Apply a pea-sized amount", text: "One pump is enough. Massage gently in upward circles for 30 seconds." },
  { n: 3, title: "Rinse thoroughly", text: "Rinse with lukewarm water until skin feels clean and refreshed." },
  { n: 4, title: "Pat dry & moisturise", text: "Pat — don't rub. Follow with your serum and moisturiser on damp skin." },
];

function ProductPage() {
  return (
    <>
      <section className="container-prose grid gap-12 py-12 md:grid-cols-2 md:py-20">
        <div className="relative">
          <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-accent/30 blur-2xl" />
          <img
            src={productBottle}
            alt="Acquena face cleanser frosted glass bottle"
            width={1024}
            height={1024}
            fetchPriority="high"
            className="rounded-3xl object-cover shadow-[var(--shadow-soft)]"
          />
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-xs uppercase tracking-[0.2em] text-primary">Daily Cleanser · 150ml</p>
          <h1 className="mt-3 font-serif text-4xl leading-tight text-foreground sm:text-5xl">
            Acquena Gentle Daily Face Cleanser
          </h1>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            A weightless, sulfate-free gel cleanser that lifts away oil, dirt
            and pollution while preserving your skin's natural moisture
            barrier. Suitable for all skin types — including sensitive.
          </p>

          <ul className="mt-6 space-y-2 text-sm text-foreground">
            {["Sulfate-free, paraben-free, fragrance-free", "Dermatologist-tested for daily use", "Vegan & cruelty-free", "Made in India"].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-primary">✓</span> {f}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <BuyOnAmazon size="lg" />
            <Link to="/faq" className="btn-outline hover:bg-secondary">Read FAQs</Link>
          </div>

          <p className="mt-4 text-xs text-muted-foreground">
            Sold exclusively on Amazon India · Free Prime shipping
          </p>
        </div>
      </section>

      {/* INGREDIENTS */}
      <section className="bg-secondary/40 py-20">
        <div className="container-prose">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs uppercase tracking-[0.2em] text-primary">Ingredients</p>
            <h2 className="mt-3 font-serif text-3xl text-foreground sm:text-4xl">
              Every ingredient earns its place.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Clean, transparent and clinically backed. Read the label —
              we're proud of every line.
            </p>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {ingredients.map((i) => (
              <div key={i.name} className="rounded-2xl border border-border bg-card p-6">
                <h3 className="font-serif text-lg text-foreground">{i.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{i.purpose}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW TO USE */}
      <section className="container-prose py-20">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <img
            src={texture}
            alt="Soft gel cleanser texture with water droplets and green leaf"
            width={1024}
            height={768}
            loading="lazy"
            className="rounded-3xl object-cover shadow-[var(--shadow-soft)]"
          />
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-primary">How to use</p>
            <h2 className="mt-3 font-serif text-3xl text-foreground sm:text-4xl">A 60-second daily ritual.</h2>
            <ol className="mt-8 space-y-6">
              {steps.map((s) => (
                <li key={s.n} className="flex gap-4">
                  <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-primary font-serif text-primary-foreground">{s.n}</span>
                  <div>
                    <h3 className="font-serif text-lg text-foreground">{s.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="container-prose pb-20">
        <div className="rounded-3xl bg-primary px-6 py-14 text-center text-primary-foreground sm:px-12">
          <h2 className="mx-auto max-w-xl font-serif text-3xl sm:text-4xl">Try Acquena risk-free on Amazon.</h2>
          <p className="mx-auto mt-3 max-w-md text-sm opacity-80">Backed by Amazon's return policy. Loved by 10,000+ customers across India.</p>
          <div className="mt-7"><BuyOnAmazon size="lg" /></div>
        </div>
      </section>
    </>
  );
}
