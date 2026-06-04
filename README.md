# ADIPATS Website (Static)

This repository contains a static single-file website split into modular assets for production readiness.

Quick start:

```bash
# serve locally
npm install
npm run serve
```

To build a minified bundle (very small, experimental):

```bash
npm run build
```

Notes:
- `css/styles.css` and `js/main.js` were extracted from `index.html`.
- GSAP is included from CDN in `index.html`; consider self-hosting for production.
- The contact form is a stub — implement a server endpoint before going live.
