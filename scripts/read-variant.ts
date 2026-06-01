#!/usr/bin/env -S npx tsx
// ============================================================
// skill/scripts/read-variant.ts — CLI-mode equivalent of the API `read_variant`
// tool. The native `claude` CLI has no custom tools, so on the CLI build path the
// agent browses reference CATALOGS cheaply by running this via Bash instead of
// `Read`-ing the whole 30-50K file:
//     tsx /skill/scripts/read-variant.ts footer-variants          → INDEX (all ids + blurbs)
//     tsx /skill/scripts/read-variant.ts footer-variants FT2      → ONLY the FT2 section
//
// Pure-stdout, $0, no network. Reads skill/references directly (resolved relative
// to THIS file, so cwd doesn't matter). The section-extraction logic MIRRORS
// `readRefSection` in src/api/skillAgent.ts — scripts/verify-read-variant-fix.ts
// asserts the two stay byte-identical (parity test), so they can't drift.
// ============================================================
import { readFileSync, existsSync, realpathSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

// references dir: prefer the script's own location (skill/scripts → skill/references),
// fall back to $KODAGEN_SKILL_DIR/references, then /skill/references.
function refsDir(): string {
  const here = dirname(fileURLToPath(import.meta.url));
  const candidates = [
    join(here, "..", "references"),
    process.env.KODAGEN_SKILL_DIR ? join(process.env.KODAGEN_SKILL_DIR, "references") : "",
    "/skill/references",
  ].filter(Boolean);
  for (const c of candidates) if (existsSync(c)) return c;
  return candidates[0];
}

// MIRROR of readRefSection (skillAgent.ts). Operates on file TEXT so the parity
// test can feed it the same bytes the server reads. Keep in sync — the verifier
// fails if these diverge.
export function extractRefSection(text: string, clean: string, section?: string): string {
  const lines = text.split("\n");
  const headingLevel = (l: string): number => (/^(#{1,6})\s/.exec(l)?.[1].length ?? 0);
  const heads: { idx: number; level: number; text: string }[] = [];
  lines.forEach((l, idx) => {
    const lv = headingLevel(l);
    if (lv > 0) heads.push({ idx, level: lv, text: l.replace(/^#{1,6}\s+/, "").trim() });
  });
  const minLevel = heads.length ? Math.min(...heads.map((h) => h.level)) : 0;
  const idLike = (t: string) => /^[A-Za-z]{1,4}[-\s]?\d/.test(t.trim());
  const levels = [...new Set(heads.map((h) => h.level))];
  const idCount = (lv: number) => heads.filter((h) => h.level === lv && idLike(h.text)).length;
  const idLevel = levels.filter((lv) => idCount(lv) > 0).sort((a, b) => idCount(b) - idCount(a))[0];
  const deeper = heads.filter((h) => h.level > minLevel);
  const secLevel = idLevel ?? (deeper.length ? Math.min(...deeper.map((d) => d.level)) : minLevel);
  const sectionHeads = heads.filter((h) => h.level === secLevel);

  if (!section || !section.trim()) {
    if (sectionHeads.length === 0) return `(${clean}: no sub-sections — small doc, read it directly)`;
    const out: string[] = [`INDEX of references/${clean}.md — run: tsx /skill/scripts/read-variant.ts ${clean} <id>  for one section:`];
    for (const h of sectionHeads) {
      let blurb = "";
      for (let j = h.idx + 1; j < lines.length && headingLevel(lines[j]) === 0; j++) {
        const t = lines[j].trim();
        if (t) { blurb = t.slice(0, 110); break; }
      }
      out.push(`  • ${h.text}${blurb ? "  — " + blurb : ""}`);
    }
    return out.join("\n");
  }

  const want = section.trim().toLowerCase();
  const wantId = want.split(/[\s—–-]+/)[0];
  const matches = (h: { text: string }) => {
    const ht = h.text.toLowerCase();
    return ht.includes(want) || ht.split(/[\s—–-]+/)[0] === wantId;
  };
  const start = sectionHeads.find(matches) ?? heads.find(matches);
  if (!start) {
    return `read-variant: section "${section}" not found in ${clean}. ` +
      `Available:\n${sectionHeads.map((h) => "  • " + h.text).join("\n")}`;
  }
  let endIdx = lines.length;
  for (const h of heads) {
    if (h.idx > start.idx && h.level <= start.level) { endIdx = h.idx; break; }
  }
  return lines.slice(start.idx, endIdx).join("\n").trim();
}

function main() {
  const [refArg, sectionArg] = process.argv.slice(2);
  if (!refArg) {
    console.log('usage: tsx /skill/scripts/read-variant.ts <catalog> [section-id]\n  e.g. ... footer-variants        (index)\n       ... footer-variants FT2    (one variant)');
    process.exit(2);
  }
  const clean = String(refArg).trim().replace(/^references\//, "").replace(/\.md$/, "");
  if (!/^[a-z0-9-]+$/i.test(clean)) {
    console.error(`read-variant error: invalid catalog "${refArg}". Use a name like "footer-variants".`);
    process.exit(2);
  }
  const path = join(refsDir(), `${clean}.md`);
  if (!existsSync(path)) {
    console.error(`read-variant error: reference "${clean}" not found at ${path}.`);
    process.exit(2);
  }
  console.log(extractRefSection(readFileSync(path, "utf8"), clean, sectionArg));
}

// Run only when invoked directly (not when imported by the parity test).
const invokedDirectly = (() => {
  try { return !!process.argv[1] && realpathSync(process.argv[1]) === fileURLToPath(import.meta.url); }
  catch { return false; }
})();
if (invokedDirectly) main();
