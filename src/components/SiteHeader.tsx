import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { BuyOnAmazon } from "./BuyOnAmazon";

const nav = [
  { to: "/", label: "Home" },
  { to: "/product", label: "Product" },
  { to: "/blog", label: "Journal" },
  { to: "/about", label: "About" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="container-prose flex h-16 items-center justify-between md:h-20">
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground font-serif text-lg">A</span>
          <span className="font-serif text-xl tracking-wide text-foreground">Acquena</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: item.to === "/" }}
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <BuyOnAmazon size="sm" label="Shop on Amazon" />
        </div>

        <button
          className="md:hidden p-2 -mr-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
            {open ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background md:hidden">
          <nav className="container-prose flex flex-col py-4" aria-label="Mobile">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                activeProps={{ className: "text-primary" }}
                activeOptions={{ exact: item.to === "/" }}
                className="py-3 text-base text-foreground"
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-3">
              <BuyOnAmazon size="md" />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
