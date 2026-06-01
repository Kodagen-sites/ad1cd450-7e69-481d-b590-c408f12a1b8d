"use client";

import { useState } from "react";
import ScrollCanvas from "@/components/ScrollCanvas";
import { HeroScrollText } from "@/components/motion";
import { siteConfig } from "@/content/site-config";
import framesManifest from "@/content/frames-manifest.json";

export default function HeroScrub() {
  const [progress, setProgress] = useState(0);
  const { chapters } = siteConfig.hero;
  const { scrollDistance, loadingLabel, loadingVariant } = siteConfig.scrollHero;

  return (
    <ScrollCanvas
      frameCount={framesManifest.frameCount}
      pattern={framesManifest.frameUrlTemplate}
      padLength={4}
      scrollDistance={scrollDistance}
      loadingLabel={loadingLabel}
      loadingVariant={loadingVariant}
      onProgress={setProgress}
    >
      <HeroScrollText
        progress={progress}
        position="bottom-left"
        textColor="#FAF6EE"
        accentColor="#E8DFCF"
        accentTextColor="#0E1C33"
        chapters={[
          {
            at: 0,
            eyebrow: chapters[0].eyebrow,
            headlineLines: [...chapters[0].lines],
            subline: chapters[0].sub,
          },
          {
            at: 0.4,
            eyebrow: chapters[1].eyebrow,
            headlineLines: [...chapters[1].lines],
            subline: chapters[1].sub,
          },
          {
            at: 0.72,
            eyebrow: chapters[2].eyebrow,
            headlineLines: [...chapters[2].lines],
            subline: chapters[2].sub,
            cta: { label: siteConfig.cta.primary, href: "#contact" },
          },
        ]}
      />
    </ScrollCanvas>
  );
}
