# Handoff — Phase 1 + 1.6 → Production Swap

End of Phase 1.6. The new site is now self-contained: no remaining
external links to `li-its.de/produkte/*`. Ready for production swap.

---

## Current state

- **Staging URL:** https://v2.li-its.de
- **Branch:** `main`
- **Pages built (`npm run build` → `dist/`):**
  - `/` — homepage
  - `/impressum/`
  - `/produkte/invoice-auditor/`
  - `/produkte/casp/`
  - `/produkte/datenschutzmanager/`
  - `/produkte/loeschmanager/`

All 4 product cards on the homepage now link internally to
`/produkte/[slug]/` (no `target="_blank"`).

`Datenschutzmanager` and `Löschmanager` retain a secondary CTA to
`dataagenda.de` (partner-operated domain — fine to link to).

---

## Before swapping staging → production

These need to flip when the document root moves from `li-its.de` to
the Astro `dist/` output:

1. **Remove `noindex` on homepage and product pages.** Currently
   `BaseLayout.astro` honours a `noindex` prop and every page passes
   `noindex={true}` while on staging. Either drop the prop on each
   page, or change the default in `BaseLayout.astro`. Same for the
   four `/produkte/*` pages and `/impressum`.
2. **Replace `public/robots.txt`.** The staging version disallows all
   crawlers. Production should allow crawling and reference the
   sitemap.
3. **Build with the right `site` URL.** `astro.config.mjs` should
   point at `https://li-its.de` for canonical + OG URLs. Confirm
   before deploying.

See `TODO-POST-LAUNCH.md` (in the project root, one level above
this repo) for the full deferred backlog.

---

## What's deferred (post-launch)

Not blocking the swap, tracked in `TODO-POST-LAUNCH.md`:

- `/produkte` index page (Phase 2)
- Product page enhancements: hero illustrations, testimonials,
  FAQ, video embeds
- `/zertifikate` page mirroring old ISO partner layout
- `/datenschutz` page (currently links externally to old site)
- Service sub-pages, AGB, "Über uns", "Karriere"
- Mobile burger menu (currently nav hides at ≤900px)
- Analytics, sitemap.xml, structured data

---

## Sanity checklist for the colleague handling deploy

- [ ] `npm run build` clean
- [ ] All 6 pages present in `dist/`
- [ ] Homepage product cards click through to internal pages
- [ ] Product pages render hero, sections, closing CTA
- [ ] Partner links (Datenschutzmanager, Löschmanager) open in new
  tab and point to `dataagenda.de/datenschutzmanager/` and
  `dataagenda.de/Loeschmanager/` respectively
- [ ] `noindex` removed from all pages on production build
- [ ] `robots.txt` swapped to production version
- [ ] `astro.config.mjs` `site` set to production URL
