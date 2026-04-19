import { createFileRoute, Link } from "@tanstack/react-router";
import { POSTS } from "@/lib/blog";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Skincare Journal — Tips, Reviews & Routines | Acquena" },
      { name: "description", content: "Honest skincare guides, ingredient deep-dives and product reviews from the Acquena team. Made for real Indian skin." },
      { property: "og:title", content: "Acquena Skincare Journal" },
      { property: "og:description", content: "Skincare tips, routines and ingredient guides for Indian skin." },
    ],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  const [hero, ...rest] = POSTS;
  return (
    <div className="container-prose py-16 md:py-24">
      <header className="mx-auto max-w-2xl text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-primary">Skincare Journal</p>
        <h1 className="mt-3 font-serif text-4xl text-foreground sm:text-5xl">
          Notes on healthy, happy skin.
        </h1>
        <p className="mt-5 text-muted-foreground">
          Honest guides, ingredient deep-dives and routines that actually work
          — written for the way Indians live.
        </p>
      </header>

      <Link to="/blog/$slug" params={{ slug: hero.slug }} className="group mt-16 grid gap-8 overflow-hidden rounded-3xl border border-border bg-card md:grid-cols-2">
        <img src={hero.image} alt={hero.title} width={1024} height={640} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 md:aspect-auto" />
        <div className="flex flex-col justify-center p-8 md:p-12">
          <p className="text-xs uppercase tracking-wider text-primary">{hero.category} · Featured</p>
          <h2 className="mt-3 font-serif text-2xl text-foreground sm:text-3xl group-hover:text-primary">{hero.title}</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{hero.description}</p>
          <p className="mt-5 text-xs text-muted-foreground">{hero.readTime}</p>
        </div>
      </Link>

      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {rest.map((p) => (
          <Link key={p.slug} to="/blog/$slug" params={{ slug: p.slug }} className="group block">
            <div className="overflow-hidden rounded-2xl">
              <img src={p.image} alt={p.title} width={1024} height={640} loading="lazy" className="aspect-[5/3] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <p className="mt-4 text-xs uppercase tracking-wider text-muted-foreground">{p.category} · {p.readTime}</p>
            <h3 className="mt-2 font-serif text-xl leading-snug text-foreground group-hover:text-primary">{p.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{p.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
