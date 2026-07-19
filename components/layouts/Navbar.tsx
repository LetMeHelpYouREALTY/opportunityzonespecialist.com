import Link from "next/link";
import { Phone } from "lucide-react";
import { site } from "@/lib/site";

const links = [
  { href: "/listings", label: "Listings" },
  { href: "/neighborhoods", label: "Neighborhoods" },
  { href: "/buyers", label: "Buyers" },
  { href: "/sellers", label: "Sellers" },
  { href: "/home-valuation", label: "Home Value" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-brand-navy/95 text-white backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <Link href="/" className="min-w-0">
          <span className="block font-display text-lg tracking-wide md:text-xl">
            {site.brand}
          </span>
          <span className="block truncate text-[11px] uppercase tracking-[0.14em] text-brand-gold">
            {site.shortName} · BHHS Nevada
          </span>
        </Link>

        <nav className="hidden items-center gap-5 text-sm lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white/85 transition hover:text-brand-gold"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <a
          href={site.phone.href}
          className="inline-flex items-center gap-2 rounded-sm bg-brand-gold px-3 py-2 text-sm font-semibold text-brand-navy transition hover:bg-brand-sand"
        >
          <Phone className="h-4 w-4" aria-hidden />
          <span className="hidden sm:inline">{site.phone.display}</span>
          <span className="sm:hidden">Call</span>
        </a>
      </div>

      <nav className="flex gap-4 overflow-x-auto border-t border-white/10 px-4 py-2 text-xs lg:hidden">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="whitespace-nowrap text-white/80"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
