# sana-khan.github.io

The portfolio of **Sana Faraz Khan**, UI engineer and UI/UX designer: **https://sana-khan.github.io/**

It is a one-page site written in plain HTML, Sass and a little TypeScript, built with Vite. There is no framework on
purpose: the page is fast, readable without JavaScript, and easy for search engines and link previews to read.

## What's on it

- **Selected work** — two open-source code samples ([a11y-theme-kit](https://github.com/sana-khan/a11y-theme-kit) and
  [Pocket](https://github.com/sana-khan/pocket-budget-rn)), and four anonymised case studies from client work under NDA
- **Apps and games** — four featured apps with screenshots, and a filterable wall of every app published as greybits
  on Google Play
- **How I work, experience, skills and contact**, with CVs for UI engineering and UI/UX design roles

## How it's built

- `src/data/apps.ts` lists every app. At build time a small Vite plugin (`vite.config.ts`) turns it into the featured
  section and the app wall, so the HTML arrives complete. Adding an app means adding one line.
- `src/styles/main.scss` holds three themes (light, dark, high contrast) as custom properties. The **Display** menu
  switches theme and text size, and remembers the choice; "Match my device" follows the system setting.
- `src/main.ts` is the only script: the Display menu and the app filters, both of which work with a keyboard and
  announce changes to screen readers.

## Accessibility checks

`npm test` runs after the build and checks:

- WCAG AA contrast for every text and control colour pair in all three themes, read straight from the stylesheet
- an axe-core scan of the built page
- that every app links to its Play Store page, screenshots have descriptions, CV links work, and no phone number is
  published

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build
npm test         # after a build
```

Pushing to `main` runs lint, build and tests in GitHub Actions and deploys to GitHub Pages.

## Licence

Code: MIT. App icons and screenshots are from Sana's own apps on Google Play.
