import { createFileRoute, Link } from "@tanstack/react-router";
import { BuyOnAmazon } from "@/components/BuyOnAmazon";
import heroProduct from "@/assets/hero-product.jpeg";
import lifestyle from "@/assets/lifestyle.jpg";
import ingredients from "@/assets/ingredients.jpg";
import { POSTS } from "@/lib/blog";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Acquena Skincare — Gentle Daily Face Cleanser for Indian Skin" },
      { name: "description", content: "A sulfate-free, hydrating face cleanser for oily, dry and combination skin. Made for India's climate. Available exclusively on Amazon." },
      { property: "og:title", content: "Acquena Skincare — Gentle Daily Face Cleanser" },
      { property: "og:description", content: "Sulfate-free, dermatologist-tested, made for Indian skin. Shop on Amazon." },
      { property: "og:image", content: heroProduct },
      { name: "twitter:image", content: heroProduct },
      { name: "keywords", content: "best face cleanser for oily skin, hydrating face wash India, gentle face cleanser, Acquena face wash, sulfate free face cleanser India" },
    ],
  }),
  component: HomePage,
});

const benefits = [
  { icon: "💧", title: "Deep Hydration", text: "Hyaluronic acid and glycerin lock in moisture from the very first wash." },
  { icon: "🌿", title: "Sulfate-Free", text: "Gentle surfactants cleanse without stripping your skin's natural oils." },
  { icon: "✨", title: "Visible Glow", text: "Niacinamide brightens, evens tone and refines pores over time." },
  { icon: "🧴", title: "Lightweight Gel", text: "Soft, low-foam texture rinses clean — never tight, never greasy." },
  { icon: "🌸", title: "Fragrance-Free", text: "No synthetic perfume. Safe for sensitive skin and daily use." },
  { icon: "🇮🇳", title: "Made for India", text: "Formulated for humid climates, pollution and Indian skin tones." },
];

const trust = [
  { stat: "4.6★", label: "Average rating" },
  { stat: "10K+", label: "Happy customers" },
  { stat: "100%", label: "Sulfate-free" },
  { stat: "Derm.", label: "Tested formula" },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-secondary/50 via-background to-background" />
        <div className="container-prose grid items-center gap-12 py-16 md:grid-cols-2 md:gap-16 md:py-24">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              New · Now on Amazon India
            </span>
            <h1 className="mt-6 font-serif text-4xl leading-[1.05] text-foreground sm:text-5xl md:text-6xl">
              Skin made <em className="text-primary not-italic">gentle,</em>
              <br /> every single day.
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
              Acquena's daily face cleanser washes away oil, dirt and pollution
              without disturbing your skin's moisture barrier. Soft, balanced
              and quietly effective — made for Indian skin.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <BuyOnAmazon size="lg" />
              <Link to="/product" className="btn-outline hover:bg-secondary">
                Learn more →
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-4 gap-4 border-t border-border pt-6">
              {trust.map((t) => (
                <div key={t.label}>
                  <p className="font-serif text-xl text-primary md:text-2xl">{t.stat}</p>
                  <p className="mt-1 text-[11px] uppercase tracking-wider text-muted-foreground">{t.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-8 -z-10 rounded-[3rem] bg-accent/30 blur-3xl" />
            <img
              src={heroProduct}
              alt="Acquena gentle daily face cleanser bottle on a stone surface with botanical leaves"
              width={1280}
              height={1280}
              className="rounded-3xl object-cover shadow-[0_30px_80px_-30px_oklch(0.45_0.06_145/0.4)]"
              fetchPriority="high"
            />
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="container-prose py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-primary">Why Acquena</p>
          <h2 className="mt-3 font-serif text-3xl text-foreground sm:text-4xl">
            Six reasons it earns a place on your shelf.
          </h2>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b) => (
            <div key={b.title} className="rounded-2xl border border-border bg-card p-7 transition-shadow hover:shadow-[var(--shadow-card)]">
              <span className="text-3xl">{b.icon}</span>
              <h3 className="mt-4 font-serif text-xl text-foreground">{b.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SPLIT IMAGE / INGREDIENTS */}
      <section className="bg-secondary/50 py-20">
        <div className="container-prose grid items-center gap-12 md:grid-cols-2">
          <img
            src={ingredients}
            alt="Natural skincare ingredients including aloe, niacinamide and vitamin E"
            width={1024}
            height={768}
            loading="lazy"
            className="rounded-3xl object-cover shadow-[var(--shadow-soft)]"
          />
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-primary">The formula</p>
            <h2 className="mt-3 font-serif text-3xl text-foreground sm:text-4xl">
              Quietly powerful, beautifully simple.
            </h2>
            <p className="mt-5 text-muted-foreground">
              Every ingredient earns its place. Niacinamide for clarity. Hyaluronic
              acid for hydration. Aloe vera and green tea to calm. Nothing
              harsh, nothing unnecessary.
            </p>
            <ul className="mt-6 space-y-3">
              {["Niacinamide 3% — refines pores & evens tone", "Hyaluronic acid — deep barrier hydration", "Aloe vera — soothes & calms", "Green tea extract — antioxidant defence"].map((i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  {i}
                </li>
              ))}
            </ul>
            <Link to="/product" className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all">
              See full ingredient list →
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="container-prose py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-primary">Loved by real people</p>
          <h2 className="mt-3 font-serif text-3xl text-foreground sm:text-4xl">What our customers say.</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            { name: "Priya S.", city: "Mumbai", text: "Finally a face wash that doesn't leave my skin feeling stripped. My T-zone is so much calmer and my pores look smaller." },
            { name: "Arjun M.", city: "Bengaluru", text: "I've tried every cleanser on the market. Acquena is the first one I've actually repurchased. Light, gentle, no scent — perfect." },
            { name: "Neha R.", city: "Delhi", text: "Loved the texture and the way it leaves my skin feeling soft, never tight. Worth every rupee. Highly recommend." },
          ].map((t) => (
            <figure key={t.name} className="rounded-2xl border border-border bg-card p-7">
              <div className="text-amazon">{"★".repeat(5)}</div>
              <blockquote className="mt-4 text-sm leading-relaxed text-foreground">"{t.text}"</blockquote>
              <figcaption className="mt-5 text-xs text-muted-foreground">
                <span className="font-semibold text-foreground">{t.name}</span> — {t.city}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* JOURNAL PREVIEW */}
      <section className="bg-secondary/40 py-20">
        <div className="container-prose">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-primary">Skincare Journal</p>
              <h2 className="mt-3 font-serif text-3xl text-foreground sm:text-4xl">From our notebook.</h2>
            </div>
            <Link to="/blog" className="hidden text-sm text-primary hover:underline sm:inline">View all →</Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {POSTS.slice(0, 3).map((p) => (
              <Link key={p.slug} to="/blog/$slug" params={{ slug: p.slug }} className="group block">
                <div className="overflow-hidden rounded-2xl">
                  <img src={p.image} alt={p.title} width={1024} height={640} loading="lazy" className="aspect-[5/3] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <p className="mt-4 text-xs uppercase tracking-wider text-muted-foreground">{p.category}</p>
                <h3 className="mt-2 font-serif text-xl leading-snug text-foreground group-hover:text-primary">{p.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-prose py-24">
        <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-16 text-center text-primary-foreground sm:px-12">
          <img src={lifestyle} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover opacity-10" />
          <div className="relative">
            <h2 className="mx-auto max-w-2xl font-serif text-3xl sm:text-4xl md:text-5xl">
              Ready to meet your skin's new everyday ritual?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-sm opacity-80">
              Available exclusively on Amazon India. Free Prime shipping.
            </p>
            <div className="mt-8">
              <BuyOnAmazon size="lg" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
