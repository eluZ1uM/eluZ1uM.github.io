# eluZ1uM Technologies — studio website

Static site for https://eluz1um.github.io (GitHub Pages, no server-side build).

## Pages

| English (source)        | Russian (generated)        |
| ----------------------- | -------------------------- |
| `index.html`            | `ru/index.html`            |
| `scribnox/index.html`   | `ru/scribnox/index.html`   |
| `helmavio/index.html`   | `ru/helmavio/index.html`   |

- `404.html` — bilingual "page not found" (absolute paths, GitHub Pages serves it for any missing URL)
- `oauth/` — sign-in relay for the Helmavio desktop app (not linked, `noindex`, blocked in `robots.txt`)
- `sitemap.xml`, `robots.txt` — for search engines (sitemap is generated)

## Editing text

1. Edit the English page. Translatable text carries `data-i18n="key"`; translatable attributes carry
   `data-i18n-attr="alt:key"`; Russian-only values (screenshots, URLs) carry `data-ru-NAME="…"`.
2. Add or change the Russian text for the same key in `i18n/ru.json`.
3. Rebuild the Russian pages and the sitemap, then commit everything:

   ```
   node tools/build-ru.mjs
   ```

   The script fails if a key has no Russian text and warns about keys that are no longer used.
   Never edit files under `ru/` by hand — they are overwritten.

Visitors whose browser language is Russian are sent from an English page to its Russian twin on their
first visit; the EN/RU switch is a normal link and remembers the choice.

## Assets

- `assets/styles.css` — dark/light styles; `assets/site.js` — theme, mobile menu, Store badges, reveal animation (no tracking)
- `assets/fonts/` — self-hosted Inter, Instrument Serif and Cormorant Garamond (OFL, see its README)
- `assets/og/` — social preview images (1200×630) per page and language
- `assets/icons/` — favicon and Apple touch icon; `assets/logo.svg` — logo
- `assets/sx/`, `assets/hm/`, `assets/*.webp` — product screenshots (`hm/ru-*` and `sx/*` show the Russian UI)

Products: Scribnox (Microsoft Store 9PL5TT6W1RSF), Helmavio (Microsoft Store 9NWDJV026M44), Pushup Battle (in development).
