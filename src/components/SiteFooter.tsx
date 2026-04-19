import { Link } from "@tanstack/react-router";
import { SITE } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-secondary/40">
      <div className="container-prose grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground font-serif text-lg">A</span>
            <span className="font-serif text-xl">Acquena</span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            A gentle daily face cleanser crafted for modern Indian skin —
            hydrating, sulfate-free, dermatologist-tested.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-foreground">Explore</h3>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/product" className="hover:text-primary">Product</Link></li>
            <li><Link to="/blog" className="hover:text-primary">Skincare Journal</Link></li>
            <li><Link to="/about" className="hover:text-primary">About Acquena</Link></li>
            <li><Link to="/faq" className="hover:text-primary">FAQ</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-foreground">Company</h3>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
            <li><Link to="/privacy" className="hover:text-primary">Privacy Policy</Link></li>
            <li>
              <a href={SITE.amazonUrl} target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                Buy on Amazon
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/60">
        <div className="container-prose flex flex-col gap-2 py-5 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <p>Made with care in India.</p>
        </div>
      </div>
    </footer>
  );
}
