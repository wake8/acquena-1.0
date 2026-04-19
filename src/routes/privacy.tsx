import { createFileRoute } from "@tanstack/react-router";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Acquena Skincare" },
      { name: "description", content: "How Acquena collects, uses and protects your information." },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <div className="container-prose py-16 md:py-24">
      <header className="mx-auto max-w-3xl">
        <p className="text-xs uppercase tracking-[0.2em] text-primary">Legal</p>
        <h1 className="mt-3 font-serif text-4xl text-foreground sm:text-5xl">Privacy Policy</h1>
        <p className="mt-3 text-sm text-muted-foreground">Last updated: April 2025</p>
      </header>

      <article className="mx-auto mt-12 max-w-3xl space-y-7 text-base leading-[1.8] text-foreground/85">
        <p>
          This Privacy Policy explains how {SITE.name} (“we”, “us”) collects,
          uses and protects information when you visit {SITE.domain}. By
          using this website, you agree to the practices described below.
        </p>

        <h2 className="font-serif text-2xl text-foreground">Information we collect</h2>
        <p>
          We collect minimal information. When you contact us, we receive
          your name, email address and the contents of your message. We do
          not sell or rent personal data.
        </p>

        <h2 className="font-serif text-2xl text-foreground">Cookies & analytics</h2>
        <p>
          We may use lightweight, privacy-respecting analytics to understand
          which pages are useful so we can improve them. No personally
          identifiable information is shared with third parties for
          marketing purposes.
        </p>

        <h2 className="font-serif text-2xl text-foreground">Purchases & shipping</h2>
        <p>
          All Acquena purchases are processed by Amazon India. Order, payment
          and shipping data is handled under Amazon's privacy policy. We do
          not store or process payment information on this website.
        </p>

        <h2 className="font-serif text-2xl text-foreground">Your rights</h2>
        <p>
          You can request access to, correction of, or deletion of any
          personal information we hold about you by emailing
          {" "}<a href={`mailto:${SITE.email}`} className="text-primary hover:underline">{SITE.email}</a>.
        </p>

        <h2 className="font-serif text-2xl text-foreground">Changes</h2>
        <p>
          We may update this policy from time to time. The “last updated”
          date at the top will reflect any changes.
        </p>

        <h2 className="font-serif text-2xl text-foreground">Contact</h2>
        <p>
          Questions about this policy? Email us at{" "}
          <a href={`mailto:${SITE.email}`} className="text-primary hover:underline">{SITE.email}</a>.
        </p>
      </article>
    </div>
  );
}
