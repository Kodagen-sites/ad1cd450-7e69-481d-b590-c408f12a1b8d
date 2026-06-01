export const siteConfig = {
  company: {
    name: "Signal AI",
    tagline: "Intelligence at the speed of the world",
    description:
      "Signal AI is an AI intelligence platform that monitors global markets and news in real time — surfacing the signals that matter, before they become headlines.",
    email: "contact@signalai.io",
    phone: "+1 (202) 555-0140",
    location: "Washington, D.C. · Global coverage",
  },

  brand: {
    bg: "#FAF6EE",
    surface: "#E8DFCF",
    primary: "#1F3252",
    ink: "#0E1C33",
  },

  headerVariant: "pill-floating",

  cta: {
    primary: "Start free trial",
    secondary: "See how it works",
  },

  // Scroll-cinematic hero (Archetype G · scrub mode). frameCount + pattern are
  // read from content/frames-manifest.json at render time.
  scrollHero: {
    archetype: "G",
    renderMode: "scrub-cinematic",
    scrollDistance: 5,
    loadingLabel: "Calibrating signal",
    loadingVariant: "L4" as const,
  },

  nav: [
    { href: "#platform", label: "Platform" },
    { href: "#capabilities", label: "Capabilities" },
    { href: "#how", label: "How it works" },
    { href: "#coverage", label: "Coverage" },
    { href: "#contact", label: "Contact" },
  ],

  hero: {
    eyebrow: "AI intelligence platform",
    chapters: [
      {
        eyebrow: "Real-time intelligence",
        lines: ["The world is", "talking."],
        sub: "Signal AI listens to millions of sources across markets and news — continuously, in every language.",
      },
      {
        eyebrow: "Signal, not noise",
        lines: ["We surface", "what matters."],
        sub: "AI separates the meaningful signal from the relentless noise, so your team acts on insight — not overload.",
      },
      {
        eyebrow: "Decision advantage",
        lines: ["Know first.", "Move first."],
        sub: "Detect emerging events, shifts, and risks before they reach the front page.",
      },
    ],
  },

  platform: {
    eyebrow: "Platform overview",
    title: "One pane of glass for global intelligence.",
    description:
      "Signal AI unifies market data, breaking news, and open-source signals into a single, AI-driven workspace — built for teams who cannot afford to be surprised.",
    bullets: [
      {
        title: "Live signal map",
        description: "Watch events propagate across regions and sources in real time.",
      },
      {
        title: "AI summarization",
        description: "Dense developments distilled into briefings your team can act on.",
      },
      {
        title: "Risk & sentiment",
        description: "Quantified sentiment and risk scoring across entities and topics.",
      },
    ],
  },

  manifestoWord: "Foresight",
  manifesto:
    "Foresight is no longer a luxury. In a world that moves faster than any analyst can read, the advantage belongs to those who see the signal first.",

  capabilities: {
    eyebrow: "Capabilities",
    heading: "Built for intelligence operations.",
    items: [
      {
        slug: "market-monitoring",
        name: "Market monitoring",
        description:
          "Track equities, commodities, currencies, and macro events with AI-driven anomaly detection.",
      },
      {
        slug: "news-monitoring",
        name: "News monitoring",
        description:
          "Continuous coverage of global news and broadcast media, translated and classified in real time.",
      },
      {
        slug: "osint",
        name: "Open-source intelligence",
        description:
          "Fuse public signals into a single, verifiable picture with full source provenance.",
      },
      {
        slug: "alerting",
        name: "Real-time alerting",
        description:
          "Configurable thresholds push the right signal to the right team the moment it emerges.",
      },
      {
        slug: "ai-briefings",
        name: "AI briefings",
        description:
          "Automated situation reports and daily briefings generated from your watchlists.",
      },
      {
        slug: "secure-deployment",
        name: "Secure deployment",
        description:
          "Air-gapped and sovereign deployment options engineered for government and defense.",
      },
    ],
  },

  process: {
    eyebrow: "How it works",
    heading: "From signal to decision in three steps.",
    steps: [
      {
        step: "01",
        title: "Ingest",
        description:
          "Connect millions of market, news, and open-source feeds. Signal AI normalizes and translates everything as it arrives.",
      },
      {
        step: "02",
        title: "Detect",
        description:
          "AI models score relevance, sentiment, and risk — separating meaningful movement from background noise.",
      },
      {
        step: "03",
        title: "Act",
        description:
          "Briefings, alerts, and a live signal map put decision-ready intelligence in front of your team instantly.",
      },
    ],
  },

  coverage: {
    eyebrow: "Coverage",
    heading: "Global by design.",
    description:
      "Signal AI watches the world around the clock, across languages, markets, and media — so nothing material slips past your team.",
    stats: [
      { label: "Monitoring", value: "24 / 7" },
      { label: "Source coverage", value: "Global" },
      { label: "Latency", value: "Real-time" },
      { label: "Languages", value: "Multilingual" },
    ],
  },

  ctaBlock: {
    heading: "See the signal first.",
    description:
      "Start a free trial and put real-time global intelligence to work for your team today.",
  },

  trustBar: [
    "Built for government & defense",
    "Secure & sovereign deployment",
    "Real-time global coverage",
  ],

  social: {
    twitter: "https://twitter.com/signalai",
    linkedin: "https://linkedin.com/company/signalai",
    youtube: "https://youtube.com/@signalai",
  },

  legalName: "Signal AI, Inc.",
} as const;

export type SiteConfig = typeof siteConfig;
