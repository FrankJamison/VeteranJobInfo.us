# VeteranJobInfo.com (Static Website)

VeteranJobInfo.com is a static website that curates job-search resources for U.S. military veterans and their families.

This site was created as an **SNHU IT-700 Capstone (Information Technology) final project**. From a hiring perspective, it’s a compact example of shipping a complete, responsive, multi-page website with consistent navigation, reusable layout components, and real-world content organization.

## What this project demonstrates (for employers & recruiters)

### Product and UX
- Clear information architecture: content is separated into FAQs, a checklist, directories, and targeted resource pages.
- Responsive layout and navigation patterns designed for desktop and mobile breakpoints.
- Lightweight interactions that improve usability (mobile menu toggle, click-away close, “scroll to top”).

### Engineering and maintainability
- Static-site architecture (HTML/CSS/JS) with no build step and no backend requirements.
- Reusable layout blocks (header, navigation, sidebar, footer) managed as shared client-side components.
- Safe separation between “site code” and vendor libraries (jQuery + ResponsiveSlides).

## Quick start

This is a classic static site. There is **no build step** and **no server-side code**.

### Option A — Open directly
Open `index.html` in a browser.

### Option B — Serve via a local static server (recommended)
Serving over HTTP avoids certain browser restrictions that can occur with `file://` URLs.

Python:
```bash
python -m http.server 8000
```

Node:
```bash
npx http-server -p 8000
```

Then open:
`http://127.0.0.1:8000/index.html`

### Option C — VS Code task (project-specific)
This repo includes a VS Code task that opens:

`http://2019veteranjobinfo.localhost/`

If you use it, make sure you have a local web server and DNS/hosts mapping configured for that hostname.

## Pages and content

Primary pages:
- `index.html` — Home page with responsive slideshow and curated resource links.
- `job-search-faqs.html` — Frequently asked questions with supporting links/documents.
- `job-search-checklist.html` — Practical checklist for job searching.
- `va-office-directory.html` — VA directory and related contact information.
- `vet-friendly-companies.html` — Vet-friendly companies/resources.
- `disabled-veteran-resources.html` — Disabled veteran resources.
- `contact.html` — Contact info + Google Maps directions form.

Shared footer:
- `footer.html` — Footer content loaded via an `<iframe>` on most pages.

## Site architecture

### Shared layout strategy
This site uses lightweight “client-side includes” to keep repeated UI consistent across pages:

- `js/header.js` — Writes the header/logo block.
- `js/menu.js` — Writes the global navigation menu.
- `js/sidebar.js` — Writes the right-side “quick links” list on pages that include it.
- `footer.html` — Loaded via `<iframe>` as the shared footer.
- `js/footer-copyright.js` — Writes the copyright line and the “scroll to top” anchor.

This approach keeps edits centralized (change a menu once, update across the site) while remaining build-free.

### JavaScript behavior (UX features)

- `js/javascripts.js`
  - Mobile menu toggle (`toggleMenu`) and responsive click-away behavior (menu closes when clicking outside it under the mobile breakpoint).
  - “Scroll to top” behavior that appears after the user scrolls down.
- `js/contact.js`
  - Writes contact details into the contact page.

## Design system and responsive behavior

### CSS layout
- `css/style.css` — Main stylesheet (typography, layout grid, navigation styling, sidebar, footer, slideshow styling, and form styles).
- `css/media-queries.css` — Responsive breakpoints and mobile menu behavior.

Notable responsive breakpoints (from the stylesheet):
- ~1250px: layout adjustments for narrower desktops.
- ~1040px: menu/layout tweaks.
- ~740px: “mobile menu” behavior becomes active.
- ~482px: small-screen typography and spacing adjustments.

### Accessibility-oriented details
The codebase includes a visually hidden utility class (`.sr-only`) intended for screen-reader-only labels.

## Vendor dependencies

This site includes vendored frontend libraries under `JQuery/`:

- `JQuery/jquery-1.11.0.min.js` — jQuery v1.11.0
- `JQuery/responsive-slides.js` — ResponsiveSlides plugin (vendor file)
- `JQuery/responsive-slides-SETS.js` — Site-specific slideshow configuration (auto-play, pager/nav, timings)
- `JQuery/responsive-slides.css` — Slideshow styles

Tip: treat `responsive-slides.js` and `jquery-1.11.0.min.js` as vendor code (avoid editing directly). Prefer configuration changes in `responsive-slides-SETS.js`.

## Repository map

Top-level:
- HTML pages: `*.html`
- `images/` — site images (logos, UI graphics, slideshow assets)
- `css/` — stylesheets
- `js/` — site JavaScript
- `JQuery/` — vendor JS/CSS for jQuery and slideshow
- `docs/` — project/supporting documents (e.g., `Unemployment_Info_State_Contacts.docx`)

## Common maintenance tasks

### Update the navigation menu
Edit `js/menu.js` to add/remove/reorder pages.

### Update header behavior
Edit `js/header.js` to adjust logo presentation and header link targets.

### Update footer content
- Update layout/images in `footer.html`.
- Update the copyright line and scroll-to-top anchor in `js/footer-copyright.js`.

### Update contact information
Edit `js/contact.js` (contact info is written into the page via `document.write`).

## Deployment

Because this is a static site, you can deploy it to any static host:
- IIS / Apache / Nginx static directory
- GitHub Pages (with minor adjustments if you want a custom domain)
- Netlify / Vercel (static)

Deployment checklist:
- Keep the folder structure intact (`css/`, `js/`, `images/`, `JQuery/`).
- Verify that `footer.html` is present (many pages load it via `<iframe>`).

## Modernization ideas (optional)

If you want to evolve this into a more modern frontend without changing the content:
- Replace `document.write` layout injection with server-side includes, a static-site generator, or fetch-based component injection.
- Remove the footer `<iframe>` and inline the footer component for simpler styling and better accessibility.
- Upgrade jQuery / reduce jQuery usage in favor of modern DOM APIs.
- Add a basic automated accessibility and link-check pass (especially useful for resource sites with many external links).

## Third‑party code and attribution notes

- jQuery is included in `JQuery/jquery-1.11.0.min.js` and is licensed by the jQuery Foundation.
- ResponsiveSlides is included in `JQuery/`.
- Some scripts/styles include template/vendor origin notes (e.g., “Allwebco” references in comments). Keep attribution comments intact when modifying vendor-derived files.