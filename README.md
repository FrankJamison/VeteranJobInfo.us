# VeteranJobInfo.us v2019

Developer notes for the **VeteranJobInfo.us (2019)** static site: a build-free, multi-page resource hub for U.S. military veterans and their families.

This project was created as an **SNHU IT-700 Capstone (Information Technology) final project**.

## TL;DR

- No build step, no backend.
- Open `index.html` directly, or serve the folder over HTTP.
- Shared UI (header/menu/footer) is injected client-side so edits stay centralized.

## Run locally

### Option A — Open directly

Open `index.html` in a browser.

### Option B — Serve via a local static server (recommended)

Some browsers restrict certain behaviors under `file://`. Serving over HTTP avoids that.

Python:

```bash
python -m http.server 8000
```

Node:

```bash
npx http-server -p 8000
```

Open:
`http://127.0.0.1:8000/index.html`

### Option C — VS Code task (project-specific)

This repo includes a VS Code task in `.vscode/tasks.json` that opens:

`http://veteranjobinfousv2019.localhost/`

That hostname only works if you have a local web server bound to it (and a hosts/DNS mapping).

## Project layout

- HTML pages: `*.html`
- Styles: `css/`
- Site JavaScript: `js/`
- Vendor libraries: `JQuery/`
- Images: `images/`
- Supporting docs: `docs/`

## Pages

- `index.html` — Home + ResponsiveSlides slideshow.
- `job-search-faqs.html` — FAQ-style resource list.
- `job-search-checklist.html` — Job search checklist.
- `va-office-directory.html` — VA office directory/resources.
- `vet-friendly-companies.html` — Vet-friendly companies/resources.
- `disabled-veteran-resources.html` — Disabled veteran resources.
- `contact.html` — Contact info + Google Maps “Get Directions” form.

## Architecture (shared layout)

This site keeps repeated UI consistent using lightweight client-side injection (no build tooling):

- `js/header.js` writes the header/logo markup via `document.write`.
- `js/menu.js` writes the global navigation via `document.write`.
- `js/sidebar.js` writes the sidebar images (and can be extended to include sidebar links/text).
- `footer.html` is embedded on each page via an `<iframe>`.
- `js/footer-copyright.js` writes the copyright line and the “scroll to top” anchor.

If you add a new page, copy the header/menu/footer patterns from an existing page to keep navigation and footer consistent.

## JavaScript behavior

- `js/javascripts.js`
  - Mobile menu toggle (`toggleMenu`) + optional click-away close under the ~740px breakpoint.
  - Scroll-to-top behavior (shows after ~100px scroll).
- `js/contact.js`
  - Writes the contact details used on `contact.html`.

## Styling and responsive breakpoints

- `css/style.css` — Main layout/typography, navigation, sidebar, footer, slideshow, forms.
- `css/media-queries.css` — Breakpoints and mobile behavior.

Notable breakpoints called out in the CSS:

- ~1250px and ~1040px: layout/menu adjustments
- ~740px: mobile menu behavior activates
- ~482px: small-screen typography/spacing

Accessibility detail: `.sr-only` is used for screen-reader-only labels (e.g., the scroll-to-top link).

## Slideshow (vendor + configuration)

The homepage slideshow uses vendored scripts in `JQuery/`:

- `JQuery/jquery-1.11.0.min.js`
- `JQuery/responsive-slides.js`
- `JQuery/responsive-slides-SETS.js` (site-specific settings)
- `JQuery/responsive-slides.css`

Treat `jquery-1.11.0.min.js` and `responsive-slides.js` as vendor code; make behavior changes in `responsive-slides-SETS.js` when possible.

## Common edits

- Update navigation: edit `js/menu.js`.
- Update header/logo/link target: edit `js/header.js`.
- Update sidebar images/links: edit `js/sidebar.js`.
- Update footer content/layout: edit `footer.html`.
- Update copyright + scroll-to-top anchor: edit `js/footer-copyright.js`.
- Update contact info: edit `js/contact.js`.

## Deployment

Any static host works (IIS/Apache/Nginx, GitHub Pages, Netlify/Vercel). Keep the folder structure intact so relative links to `css/`, `js/`, `images/`, and `JQuery/` keep working.

## Third‑party code and attribution

- jQuery and ResponsiveSlides are vendored under `JQuery/`.
- Some scripts/styles include template/vendor origin notes (e.g., “Allwebco” references). Keep attribution comments intact when modifying vendor-derived files.
