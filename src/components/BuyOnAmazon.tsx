import { SITE } from "@/lib/site";

interface Props {
  size?: "sm" | "md" | "lg";
  label?: string;
  className?: string;
}

export function BuyOnAmazon({ size = "md", label = "Buy Now on Amazon", className = "" }: Props) {
  const sizeClasses = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-7 py-3.5 text-[0.95rem]",
    lg: "px-9 py-4 text-base",
  }[size];

  return (
    <a
      href={SITE.amazonUrl}
      target="_blank"
      rel="noopener noreferrer sponsored"
      aria-label="Buy Acquena Face Cleanser on Amazon"
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-amazon font-semibold text-white shadow-[0_4px_14px_-4px_oklch(0.72_0.16_65/0.5)] transition-all hover:-translate-y-0.5 hover:bg-amazon-hover hover:shadow-lg ${sizeClasses} ${className}`}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M15.93 17.09c-.18.16-.43.17-.63.06-.89-.74-1.05-1.08-1.54-1.79-1.47 1.5-2.51 1.95-4.42 1.95-2.25 0-4.01-1.39-4.01-4.17 0-2.18 1.18-3.66 2.86-4.39 1.46-.64 3.49-.76 5.04-.93v-.35c0-.64.05-1.39-.33-1.94-.32-.49-.95-.7-1.5-.7-1.02 0-1.93.52-2.15 1.61-.05.24-.22.48-.46.49l-2.6-.28c-.22-.05-.46-.22-.4-.55C6.31 3.39 9.07 2 11.55 2c1.27 0 2.93.34 3.93 1.3 1.27 1.18 1.15 2.76 1.15 4.47v4.05c0 1.22.5 1.75.97 2.41.16.23.2.51-.01.68-.52.43-1.45 1.24-1.96 1.69l-.01-.01" />
        <path d="M20.13 18.9c-2.4 1.77-5.88 2.71-8.88 2.71-4.21 0-8-1.55-10.87-4.14-.23-.21-.02-.49.25-.32 3.09 1.8 6.91 2.88 10.86 2.88 2.66 0 5.59-.55 8.28-1.69.41-.18.75.27.36.56" />
      </svg>
      {label}
    </a>
  );
}
