import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { formatFullAddress, site } from "@/lib/site";

const quickLinks = [
  { href: "/listings", label: "MLS Search" },
  { href: "/neighborhoods/summerlin", label: "Summerlin homes" },
  { href: "/neighborhoods/henderson", label: "Henderson homes" },
  { href: "/buyers", label: "Buy with Dr. Jan" },
  { href: "/sellers", label: "Sell your home" },
  { href: "/home-valuation", label: "Home valuation" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-3 md:px-6">
        <div>
          <h2 className="font-display text-2xl text-brand-gold">
            {site.brand}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-white/75">
            {site.shortName} · {site.brokerage}. Opportunity Zone and Las Vegas
            Valley real estate guidance backed by Berkshire Hathaway
            HomeServices.
          </p>
          <p className="mt-4 text-xs text-white/55">
            License {site.license}
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-gold">
            Explore
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-brand-gold">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-gold">
            Office
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-white/85">
            <li className="flex gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" />
              <span>{formatFullAddress()}</span>
            </li>
            <li className="flex gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" />
              <a href={site.phone.href} className="hover:text-brand-gold">
                {site.phone.display}
              </a>
            </li>
            <li className="flex gap-2">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" />
              <a href={`mailto:${site.email}`} className="hover:text-brand-gold">
                {site.email}
              </a>
            </li>
          </ul>
          <p className="mt-4 text-xs text-white/55">
            Mon–Fri 9am–6pm · Sat 10am–4pm · Sun by appointment
          </p>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-4 text-center text-xs text-white/50">
        © {year} {site.shortName} | {site.brokerage} | {site.domain}
      </div>
    </footer>
  );
}
