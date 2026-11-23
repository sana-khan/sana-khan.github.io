import { existsSync, readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { JSDOM } from 'jsdom';
import { beforeAll, describe, expect, it } from 'vitest';

import { apps, featured } from '../src/data/apps';

// ── Colour contrast, read straight from the stylesheet ──────────────────────

const scss = readFileSync(new URL('../src/styles/main.scss', import.meta.url), 'utf8');

/** Pulls `--name: #hex` pairs out of the first block that follows a selector. */
function tokens(selector: string): Record<string, string> {
  const start = scss.indexOf(selector);
  const block = scss.slice(start, scss.indexOf('}', start));
  return Object.fromEntries([...block.matchAll(/--([\w-]+):\s*(#[0-9a-f]{6})/gi)].map(([, name, hex]) => [name, hex]));
}

function luminance(hex: string) {
  const [r, g, b] = [1, 3, 5]
    .map((i) => parseInt(hex.slice(i, i + 2), 16) / 255)
    .map((c) => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4));
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function contrast(a: string, b: string) {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
}

const themes = {
  light: tokens(':root {'),
  dark: tokens('@mixin dark {'),
  'high contrast': tokens(":root[data-theme='contrast'] {"),
};

const pairs: [fg: string, bg: string, min: number][] = [
  ['ink', 'paper', 4.5],
  ['ink', 'surface', 4.5],
  ['ink', 'tile-hover', 4.5],
  ['ink-soft', 'paper', 4.5],
  ['ink-soft', 'surface', 4.5],
  ['link', 'paper', 4.5],
  ['link', 'surface', 4.5],
  ['on-sun', 'sun', 4.5],
  ['focus', 'paper', 3],
  ['line-strong', 'surface', 3],
];

describe.each(Object.entries(themes))('%s theme meets WCAG AA contrast', (_, palette) => {
  it.each(pairs)('%s on %s ≥ %s:1', (fg, bg, min) => {
    expect(palette[fg], `missing --${fg}`).toBeDefined();
    expect(palette[bg], `missing --${bg}`).toBeDefined();
    expect(contrast(palette[fg], palette[bg])).toBeGreaterThanOrEqual(min);
  });
});

// ── The built page (run `npm run build` first) ──────────────────────────────

const built = new URL('../dist/index.html', import.meta.url);

describe.skipIf(!existsSync(built))('built page', () => {
  let dom: JSDOM;
  let document: Document;

  beforeAll(() => {
    dom = new JSDOM(readFileSync(built, 'utf8'), { runScripts: 'outside-only' });
    document = dom.window.document;
  });

  it('lists every app, each linking to its Google Play page', () => {
    const tiles = document.querySelectorAll('.tile a');
    expect(tiles).toHaveLength(apps.length);
    for (const link of tiles) {
      expect(link.getAttribute('href')).toMatch(/^https:\/\/play\.google\.com\/store\/apps\/details\?id=/);
    }
  });

  it('shows the featured apps with described screenshots', () => {
    expect(document.querySelectorAll('.feature')).toHaveLength(featured.length);
    for (const shot of document.querySelectorAll('.filmstrip img')) {
      expect(shot.getAttribute('alt')).toMatch(/screenshot \d+ of \d+/);
    }
  });

  it('keeps the phone number off the public site', () => {
    expect(document.documentElement.outerHTML).not.toMatch(/966|551\s*2236/);
  });

  it('offers no CV downloads (CVs are shared directly)', () => {
    expect(document.querySelectorAll('a[href$=".pdf"]')).toHaveLength(0);
  });

  it('has no axe-core violations (contrast is covered by the tests above)', async () => {
    const require = createRequire(import.meta.url);
    dom.window.eval(readFileSync(require.resolve('axe-core/axe.min.js'), 'utf8'));
    const axe = (dom.window as unknown as { axe: typeof import('axe-core') }).axe;
    const results = await axe.run(document, { rules: { 'color-contrast': { enabled: false } } });
    const summary = results.violations.map((v) => `${v.id}: ${v.nodes.map((n) => n.target.join(' ')).join(', ')}`);
    expect(summary).toEqual([]);
  });
});
