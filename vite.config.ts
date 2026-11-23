import type { Plugin } from 'vite';
import { defineConfig } from 'vitest/config';

import { apps, categories, featured, playStoreAppUrl, type Category } from './src/data/apps';

const escape = (text: string) =>
  text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const byId = new Map(apps.map((app) => [app.id, app]));

function featuredHtml(): string {
  return featured
    .map(({ id, note, shots }) => {
      const app = byId.get(id);
      if (!app) throw new Error(`Featured app ${id} is not in the apps list`);
      const headingId = `app-${app.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
      const images = shots
        .map(
          (shot, index) =>
            `<li><img src="${shot}=h560" alt="${escape(app.name)} screenshot ${index + 1} of ${shots.length}" height="280" loading="lazy" decoding="async"></li>`,
        )
        .join('');
      return `
        <article class="feature" aria-labelledby="${headingId}">
          <div class="feature-text">
            <img class="feature-icon" src="${app.icon}=s128-rw" alt="" width="56" height="56" loading="lazy">
            <h3 id="${headingId}">${escape(app.name)}</h3>
            <p class="feature-tagline">${escape(app.tagline)}</p>
            <p>${escape(note)}</p>
            <a href="${playStoreAppUrl(id)}">${escape(app.name)} on Google Play</a>
          </div>
          <ul class="filmstrip" role="list" aria-label="${escape(app.name)} screenshots" tabindex="0">${images}</ul>
        </article>`;
    })
    .join('');
}

function wallHtml(): string {
  const counts = Object.fromEntries(
    (Object.keys(categories) as Category[]).map((key) => [key, apps.filter((app) => app.category === key).length]),
  ) as Record<Category, number>;

  const filters = [
    `<button type="button" class="filter" data-filter="all" aria-pressed="true">All <span class="filter-count">${apps.length}</span></button>`,
    ...(Object.entries(categories) as [Category, string][]).map(
      ([key, label]) =>
        `<button type="button" class="filter" data-filter="${key}" aria-pressed="false">${label} <span class="filter-count">${counts[key]}</span></button>`,
    ),
  ].join('');

  const tiles = apps
    .map(
      (app) => `
        <li class="tile" data-category="${app.category}">
          <a href="${playStoreAppUrl(app.id)}">
            <img src="${app.icon}=s144-rw" alt="" width="72" height="72" loading="lazy" decoding="async">
            <span class="tile-name">${escape(app.name)}</span>
            <span class="tile-tagline">${escape(app.tagline)}</span>
          </a>
        </li>`,
    )
    .join('');

  return `
    <div class="filters" role="group" aria-label="Show apps by category">${filters}</div>
    <p class="wall-status" role="status">Showing all ${apps.length} apps and games.</p>
    <ul class="wall" role="list">${tiles}</ul>`;
}

/** Fills the <!--featured-apps-->, <!--app-wall--> and <!--app-count--> markers in index.html. */
function portfolioContent(): Plugin {
  return {
    name: 'portfolio-content',
    transformIndexHtml(html) {
      return html
        .replace('<!--featured-apps-->', featuredHtml())
        .replace('<!--app-wall-->', wallHtml())
        .replaceAll('<!--app-count-->', String(apps.length));
    },
  };
}

export default defineConfig({
  base: '/',
  plugins: [portfolioContent()],
  test: {
    environment: 'node',
  },
});
