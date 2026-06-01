import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroScrub from "@/components/HeroScrub";
import {
  FadeUp,
  StaggerChildren,
  TextReveal,
  ImageRevealMask,
  MagneticButton,
  FilmGrain,
} from "@/components/motion";
import { siteConfig } from "@/content/site-config";
import assetManifest from "@/content/asset-manifest.json";

const dashboardImg = assetManifest.images["section-dashboard"];
const networkImg = assetManifest.images["section-network"];

export default function HomePage() {
  return (
    <main className="relative overflow-x-hidden bg-bg">
      <FilmGrain opacity={0.04} />
      <Header />

      {/* ── Hero: scroll-cinematic scrub ───────────────────────── */}
      <HeroScrub />

      {/* ── Platform overview ──────────────────────────────────── */}
      <section id="platform" className="relative bg-bg px-6 py-28 md:py-36">
        <div className="mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-2">
          <div>
            <FadeUp>
              <p className="font-mono text-xs uppercase tracking-[0.32em] text-navy/70">
                {siteConfig.platform.eyebrow}
              </p>
            </FadeUp>
            <FadeUp delay={0.08}>
              <h2 className="mt-5 font-display text-4xl leading-[1.05] text-ink md:text-5xl">
                {siteConfig.platform.title}
              </h2>
            </FadeUp>
            <FadeUp delay={0.16}>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-ink/70">
                {siteConfig.platform.description}
              </p>
            </FadeUp>
            <StaggerChildren staggerDelay={0.08} initialDelay={0.24} className="mt-8 space-y-4">
              {siteConfig.platform.bullets.map((b) => (
                <div key={b.title} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-navy" />
                  <div>
                    <div className="font-display text-sm text-ink">{b.title}</div>
                    <div className="mt-0.5 text-sm text-ink/60">{b.description}</div>
                  </div>
                </div>
              ))}
            </StaggerChildren>
          </div>

          <ImageRevealMask
            src={dashboardImg}
            alt="Signal AI intelligence dashboard"
            aspectClass="aspect-[4/3]"
            className="rounded-2xl border border-navy/12 bg-surface shadow-[0_30px_80px_-30px_rgba(14,28,51,0.4)]"
          />
        </div>
      </section>

      {/* ── Manifesto band ─────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-navy px-6 py-28 md:py-40">
        <div className="mx-auto max-w-6xl">
          <FadeUp>
            <p className="font-mono text-xs uppercase tracking-[0.4em] text-bg/55">
              {siteConfig.capabilities.eyebrow}
            </p>
          </FadeUp>
          <TextReveal
            as="h2"
            stagger={0.09}
            className="mt-6 break-words font-display text-[18vw] leading-[0.86] tracking-tight text-bg md:text-[12rem]"
          >
            {siteConfig.manifestoWord}
          </TextReveal>
          <FadeUp delay={0.3}>
            <p className="mt-10 max-w-xl text-lg leading-relaxed text-bg/75">
              {siteConfig.manifesto}
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── Capabilities grid ──────────────────────────────────── */}
      <section id="capabilities" className="relative bg-bg px-6 py-28 md:py-36">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <FadeUp>
              <p className="font-mono text-xs uppercase tracking-[0.32em] text-navy/70">
                {siteConfig.capabilities.eyebrow}
              </p>
            </FadeUp>
            <FadeUp delay={0.08}>
              <h2 className="mt-5 font-display text-4xl leading-[1.05] text-ink md:text-5xl">
                {siteConfig.capabilities.heading}
              </h2>
            </FadeUp>
          </div>

          <StaggerChildren
            staggerDelay={0.07}
            initialDelay={0.15}
            className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {siteConfig.capabilities.items.map((item) => (
              <div
                key={item.slug}
                className="group rounded-2xl border border-navy/12 bg-surface/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-navy/30 hover:shadow-[0_20px_50px_-25px_rgba(14,28,51,0.45)]"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy/10">
                  <span className="h-2.5 w-2.5 rounded-full bg-navy transition-transform duration-300 group-hover:scale-125" />
                </span>
                <h3 className="mt-5 font-display text-lg text-ink">{item.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">{item.description}</p>
              </div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ── How it works ───────────────────────────────────────── */}
      <section id="how" className="relative bg-surface px-6 py-28 md:py-36">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <FadeUp>
              <p className="font-mono text-xs uppercase tracking-[0.32em] text-navy/70">
                {siteConfig.process.eyebrow}
              </p>
            </FadeUp>
            <FadeUp delay={0.08}>
              <h2 className="mt-5 font-display text-4xl leading-[1.05] text-ink md:text-5xl">
                {siteConfig.process.heading}
              </h2>
            </FadeUp>
          </div>

          <StaggerChildren staggerDelay={0.1} initialDelay={0.15} className="mt-14 grid gap-8 md:grid-cols-3">
            {siteConfig.process.steps.map((s) => (
              <div key={s.step} className="border-t border-navy/20 pt-6">
                <span className="font-display text-5xl text-navy/30">{s.step}</span>
                <h3 className="mt-4 font-display text-xl text-ink">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">{s.description}</p>
              </div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ── Coverage ───────────────────────────────────────────── */}
      <section id="coverage" className="relative overflow-hidden bg-ink px-6 py-28 md:py-36">
        <img
          src={networkImg}
          alt=""
          aria-hidden
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{ background: "linear-gradient(to right, rgba(14,28,51,0.92), rgba(14,28,51,0.55))" }}
        />
        <div className="relative mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <FadeUp>
              <p className="font-mono text-xs uppercase tracking-[0.32em] text-bg/55">
                {siteConfig.coverage.eyebrow}
              </p>
            </FadeUp>
            <FadeUp delay={0.08}>
              <h2 className="mt-5 font-display text-4xl leading-[1.05] text-bg md:text-5xl">
                {siteConfig.coverage.heading}
              </h2>
            </FadeUp>
            <FadeUp delay={0.16}>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-bg/70">
                {siteConfig.coverage.description}
              </p>
            </FadeUp>
          </div>

          <StaggerChildren staggerDelay={0.08} initialDelay={0.24} className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-bg/15 bg-bg/10 md:grid-cols-4">
            {siteConfig.coverage.stats.map((stat) => (
              <div key={stat.label} className="bg-ink/40 p-7 backdrop-blur-sm">
                <div className="font-display text-3xl text-bg md:text-4xl">{stat.value}</div>
                <div className="mt-2 font-mono text-[11px] uppercase tracking-[0.2em] text-bg/55">
                  {stat.label}
                </div>
              </div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ── Contact / CTA ──────────────────────────────────────── */}
      <section id="contact" className="relative bg-bg px-6 py-28 md:py-36">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-3xl border border-navy/12 bg-surface px-8 py-16 text-center md:px-16 md:py-20">
            <FadeUp>
              <h2 className="font-display text-4xl leading-[1.0] text-ink md:text-6xl">
                {siteConfig.ctaBlock.heading}
              </h2>
            </FadeUp>
            <FadeUp delay={0.12}>
              <p className="mx-auto mt-6 max-w-xl text-lg text-ink/70">
                {siteConfig.ctaBlock.description}
              </p>
            </FadeUp>
            <FadeUp delay={0.24}>
              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <MagneticButton
                  as="a"
                  href={`mailto:${siteConfig.company.email}`}
                  className="inline-flex min-h-[48px] items-center justify-center rounded-xl bg-navy px-8 py-3.5 font-display text-sm font-medium text-bg transition-all hover:brightness-110"
                >
                  {siteConfig.cta.primary}
                </MagneticButton>
                <a
                  href={`mailto:${siteConfig.company.email}`}
                  className="inline-flex min-h-[48px] items-center justify-center rounded-xl border border-navy/25 px-8 py-3.5 font-display text-sm font-medium text-ink transition-colors hover:bg-navy/5"
                >
                  Talk to our team
                </a>
              </div>
            </FadeUp>
            <FadeUp delay={0.36}>
              <div className="mt-10 flex flex-wrap justify-center gap-x-5 gap-y-2 font-mono text-[11px] uppercase tracking-[0.18em] text-ink/45">
                {siteConfig.trustBar.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
