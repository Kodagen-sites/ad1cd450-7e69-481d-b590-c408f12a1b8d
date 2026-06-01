import Link from "next/link";
import { siteConfig } from "@/content/site-config";
import { SocialLinks } from "@/components/social-icons";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-navy/12 bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-2.5" aria-label={`${siteConfig.company.name} home`}>
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-navy">
                <span className="block h-2.5 w-2.5 rounded-full bg-bg" />
              </span>
              <span className="font-display text-sm uppercase tracking-[0.14em] text-ink">
                {siteConfig.company.name}
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink/65">
              {siteConfig.company.description}
            </p>
            <SocialLinks socials={siteConfig.social} className="mt-6 text-navy" />
          </div>

          <div>
            <h3 className="font-display text-xs uppercase tracking-[0.2em] text-ink/50">
              Explore
            </h3>
            <ul className="mt-4 space-y-2.5">
              {siteConfig.nav.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-ink/70 transition-colors hover:text-navy"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-xs uppercase tracking-[0.2em] text-ink/50">
              Company
            </h3>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a href={`mailto:${siteConfig.company.email}`} className="text-sm text-ink/70 transition-colors hover:text-navy">
                  {siteConfig.company.email}
                </a>
              </li>
              <li>
                <Link href="/privacy" className="text-sm text-ink/70 transition-colors hover:text-navy">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-ink/70 transition-colors hover:text-navy">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-navy/12 pt-6 text-xs text-ink/50 md:flex-row md:items-center md:justify-between">
          <span>
            © {year} {siteConfig.legalName}. All rights reserved.
          </span>
          <span>{siteConfig.company.location}</span>
        </div>
      </div>
    </footer>
  );
}
