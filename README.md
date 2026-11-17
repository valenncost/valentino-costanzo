# Valentino Costanzo: portfolio

My personal portfolio as a web developer, in English and Spanish (ES / EN toggle). The design reuses the look of the Cono site, as a personal brand.

**Live:** https://valentino-costanzo.costanzovalentino09.workers.dev

## Stack
Static HTML, CSS and vanilla JS (GSAP from cdnjs, Google Fonts), WebP screenshots. No build step.

All texts and data (projects, services, FAQ, links) live in `config.js`, with `en` and `es` versions. Static strings in `index.html` are marked with `data-i18n="key"` and read from `CONFIG.textos`.

## Deploy
Cloudflare Workers (static assets), Worker `valentino-costanzo`:

```bash
npx wrangler deploy
```

`notas/` holds reference screenshots and is not published (see `.assetsignore`).
