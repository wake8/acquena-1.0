import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getPost, POSTS, type BlogPost } from "@/lib/blog";
import { BuyOnAmazon } from "@/components/BuyOnAmazon";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const { post } = loaderData;
    return {
      meta: [
        { title: `${post.title} | Acquena Journal` },
        { name: "description", content: post.description },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.description },
        { property: "og:type", content: "article" },
        { property: "og:image", content: post.image },
        { name: "twitter:image", content: post.image },
        { property: "article:published_time", content: post.date },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="container-prose py-32 text-center">
      <h1 className="font-serif text-4xl">Article not found</h1>
      <Link to="/blog" className="mt-6 inline-block text-primary hover:underline">← Back to Journal</Link>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="container-prose py-32 text-center">
      <h1 className="font-serif text-3xl">Something went wrong</h1>
      <p className="mt-2 text-muted-foreground">{error.message}</p>
    </div>
  ),
  component: PostPage,
});

function PostPage() {
  const { post } = Route.useLoaderData() as { post: BlogPost };
  const related = POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <article className="pb-20">
      <div className="container-prose pt-12 md:pt-20">
        <Link to="/blog" className="text-sm text-muted-foreground hover:text-primary">← Journal</Link>
        <header className="mx-auto mt-6 max-w-3xl text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-primary">{post.category}</p>
          <h1 className="mt-3 font-serif text-3xl leading-tight text-foreground sm:text-4xl md:text-5xl">{post.title}</h1>
          <p className="mt-5 text-base text-muted-foreground">{post.description}</p>
          <p className="mt-4 text-xs text-muted-foreground">
            {new Date(post.date).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })} · {post.readTime}
          </p>
        </header>
      </div>

      <div className="container-prose mt-12 max-w-4xl">
        <img src={post.image} alt={post.title} width={1024} height={640} className="w-full rounded-3xl object-cover shadow-[var(--shadow-soft)]" />
      </div>

      <div className="container-prose mt-12 max-w-2xl">
        <div className="space-y-7">
          {post.content.map((block, i) => (
            <div key={i}>
              {block.heading && <h2 className="font-serif text-2xl text-foreground">{block.heading}</h2>}
              <p className="mt-3 text-base leading-[1.8] text-foreground/85">{block.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-2xl border border-border bg-secondary/50 p-8 text-center">
          <h3 className="font-serif text-2xl text-foreground">Try Acquena for yourself</h3>
          <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">A gentle, sulfate-free face cleanser made for Indian skin.</p>
          <div className="mt-6"><BuyOnAmazon /></div>
        </div>
      </div>

      <section className="container-prose mt-20 max-w-5xl">
        <h2 className="font-serif text-2xl text-foreground">Keep reading</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {related.map((p) => (
            <Link key={p.slug} to="/blog/$slug" params={{ slug: p.slug }} className="group block">
              <div className="overflow-hidden rounded-2xl">
                <img src={p.image} alt={p.title} width={1024} height={640} loading="lazy" className="aspect-[5/3] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <h3 className="mt-3 font-serif text-lg text-foreground group-hover:text-primary">{p.title}</h3>
            </Link>
          ))}
        </div>
      </section>
    </article>
  );
}
