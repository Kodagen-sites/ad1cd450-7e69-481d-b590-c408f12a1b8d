import type { Metadata } from "next";
import { Archivo_Black, Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/content/site-config";
import EditorBridge from "@/components/__kodagen/EditorBridge";

const display = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const siteUrl = "https://signalai.io";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteConfig.company.name} — ${siteConfig.company.tagline}`,
    template: `%s · ${siteConfig.company.name}`,
  },
  description: siteConfig.company.description,
  keywords: [
    "AI intelligence platform",
    "market monitoring",
    "news monitoring",
    "open-source intelligence",
    "signal detection",
    "defense intelligence",
  ],
  openGraph: {
    type: "website",
    siteName: siteConfig.company.name,
    title: `${siteConfig.company.name} — ${siteConfig.company.tagline}`,
    description: siteConfig.company.description,
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.company.name} — ${siteConfig.company.tagline}`,
    description: siteConfig.company.description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="bg-bg text-ink antialiased">
        {children}
        <EditorBridge />
      </body>
    </html>
  );
}
