import { createFileRoute } from "@tanstack/react-router";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Acquena — Get in Touch" },
      { name: "description", content: "Reach the Acquena team for product questions, partnerships and customer support." },
      { property: "og:title", content: "Contact Acquena" },
      { property: "og:description", content: "We'd love to hear from you." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="container-prose py-16 md:py-24">
      <header className="mx-auto max-w-2xl text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-primary">Contact</p>
        <h1 className="mt-3 font-serif text-4xl text-foreground sm:text-5xl">We'd love to hear from you.</h1>
        <p className="mt-5 text-muted-foreground">
          Questions about your order, the product, or partnerships — drop us a line.
        </p>
      </header>

      <div className="mx-auto mt-14 grid max-w-4xl gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-border bg-card p-7">
          <h2 className="font-serif text-xl text-foreground">Email</h2>
          <p className="mt-2 text-sm text-muted-foreground">Best for product questions, press, partnerships.</p>
          <a href={`mailto:${SITE.email}`} className="mt-4 inline-block text-primary hover:underline">{SITE.email}</a>
        </div>
        <div className="rounded-2xl border border-border bg-card p-7">
          <h2 className="font-serif text-xl text-foreground">Order support</h2>
          <p className="mt-2 text-sm text-muted-foreground">All orders are fulfilled by Amazon India. For shipping or returns, please contact Amazon support.</p>
          <a href={SITE.amazonUrl} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-primary hover:underline">View on Amazon →</a>
        </div>
      </div>

      <form
        className="mx-auto mt-10 max-w-2xl rounded-2xl border border-border bg-card p-8"
        onSubmit={(e) => {
          e.preventDefault();
          window.location.href = `mailto:${SITE.email}?subject=Hello%20Acquena`;
        }}
      >
        <h2 className="font-serif text-2xl text-foreground">Send us a message</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Name</span>
            <input required type="text" className="mt-1 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none" />
          </label>
          <label className="block">
            <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Email</span>
            <input required type="email" className="mt-1 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none" />
          </label>
        </div>
        <label className="mt-4 block">
          <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Message</span>
          <textarea required rows={5} className="mt-1 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none" />
        </label>
        <button type="submit" className="mt-5 w-full rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground hover:opacity-90">
          Send message
        </button>
      </form>
    </div>
  );
}
