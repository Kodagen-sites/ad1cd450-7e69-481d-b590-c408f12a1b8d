import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./content/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Deep Navy & Cream — locked brand palette
        bg: "#FAF6EE",        // cream page background
        surface: "#E8DFCF",   // raised panels / sand
        primary: "#1F3252",   // navy — brand accent, buttons, links
        accent: "#1F3252",    // alias for navy accent
        navy: "#1F3252",
        ink: "#0E1C33",       // darkest navy — headings & body text
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
    },
  },
  plugins: [],
} satisfies Config;
