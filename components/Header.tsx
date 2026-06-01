"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { siteConfig } from "@/content/site-config";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -56, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-x-3 top-3 z-50 flex justify-center md:inset-x-0 md:top-5"
      >
        <div
          className={`flex w-full max-w-5xl items-center justify-between rounded-2xl px-3 py-2 pl-4 backdrop-blur-xl transition-all duration-500 ${
            scrolled
              ? "border border-navy/15 bg-bg/85 shadow-[0_12px_40px_-16px_rgba(14,28,51,0.45)]"
              : "border border-navy/10 bg-bg/55"
          }`}
        >
          <Link href="/" className="flex items-center gap-2.5" aria-label={`${siteConfig.company.name} home`}>
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-navy">
              <span className="block h-2.5 w-2.5 rounded-full bg-bg" />
            </span>
            <span className="font-display text-sm uppercase tracking-[0.14em] text-ink">
              {siteConfig.company.name}
            </span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {siteConfig.nav.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-1.5 text-xs font-medium uppercase tracking-[0.12em] text-ink/65 transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="hidden items-center gap-1.5 rounded-xl bg-navy px-4 py-2 text-xs font-semibold text-bg transition-all hover:brightness-110 sm:inline-flex"
            >
              {siteConfig.cta.primary}
              <ArrowRight size={13} />
            </a>
            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              className="flex h-9 w-9 items-center justify-center rounded-xl text-ink hover:bg-navy/10 md:hidden"
            >
              <Menu size={18} />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-bg md:hidden"
          >
            <div className="flex items-center justify-between p-6">
              <span className="font-display text-sm uppercase tracking-[0.14em] text-ink">
                {siteConfig.company.name}
              </span>
              <button onClick={() => setMenuOpen(false)} aria-label="Close menu" className="text-ink">
                <X size={24} />
              </button>
            </div>
            <ul className="flex flex-col gap-5 p-6">
              {siteConfig.nav.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="font-display text-3xl text-ink transition-colors hover:text-navy"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-4">
                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="inline-flex items-center gap-2 rounded-xl bg-navy px-6 py-3 text-sm font-semibold text-bg"
                >
                  {siteConfig.cta.primary}
                  <ArrowRight size={15} />
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
