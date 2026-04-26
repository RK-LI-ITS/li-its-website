# Content Audit — Phase 1 Homepage

**Scanned:** all components in `li-its-astro/src/components/` + `src/layouts/BaseLayout.astro` + `src/pages/index.astro`
**Goal:** identify every piece of content, link, or asset that is placeholder / dead / factually unverified before shipping to `v2.li-its.de`.

Legend:
- **[AUTO]** — I can fix without input (strictly mechanical, no domain knowledge needed)
- **[INPUT]** — needs a real value from you
- **[REVIEW]** — I have a suggested fix, want you to approve the direction first

---

## 1. Dead links & empty hrefs

The site currently has **23 `href="#"` or empty-mailto links**. Breakdown by location:

### 1.1 Navigation ([Nav.astro](li-its-astro/src/components/Nav.astro))
- [ ] **[AUTO]** Logo link `<a href="#" class="logo">` → change to `href="/"` (canonical home)
- [ ] **[REVIEW]** Menu item "Unternehmen" points to `#unternehmen` but **no section with that ID exists** on Phase 1. Options:
  - (a) Remove the "Unternehmen" menu item for Phase 1, restore in Phase 2 when the subpage exists
  - (b) Repoint to `#trust` (the cert section is about the company's credentials) — weaker mapping
  - (c) Leave broken — looks dead when clicked
  - My suggestion: **(a) remove it**

### 1.2 Services grid ([ServicesGrid.astro](li-its-astro/src/components/ServicesGrid.astro))
- [ ] **[REVIEW]** 3× `.service-link` arrow `↗` circles with `href="#"` (one per card). In Phase 2 these would go to Leistungen subpages. Options:
  - (a) Keep as `href="#"` — arrow remains visible on hover, clicks do nothing
  - (b) Hide the `.service-link` arrow entirely for Phase 1 (delete the `<a>` element); restore in Phase 2
  - (c) Point each to `#kontakt` so clicking at least goes somewhere useful
  - My suggestion: **(b) hide them** — looks cleaner than a dead decorative arrow

### 1.3 KI-Projekte ([KIProjekte.astro](li-its-astro/src/components/KIProjekte.astro))
- [ ] **[REVIEW]** 4× `.ki-cat` domain cards have `cursor: pointer` in CSS but are plain `<div>` elements with no link target. Looks clickable, does nothing. Options:
  - (a) Remove `cursor: pointer` from CSS — honest signal that they're info-only
  - (b) Wrap each in an `<a href="#kontakt">` so clicking routes to the contact CTA
  - (c) Leave for Phase 2 (future domain detail pages)
  - My suggestion: **(a) remove cursor: pointer** — cheapest fix that matches current Phase 1 behavior
- [ ] **[REVIEW]** "Alle KI-Projekte ansehen →" button `href="#"` → Phase 2 destination is a `/ki-projekte` listing page. Options:
  - (a) Keep as `href="#"`
  - (b) Hide the button for Phase 1 (the section is still readable without it)
  - (c) Repoint to `#kontakt`
  - My suggestion: **(c) repoint to #kontakt** — preserves the CTA pattern ("want more? talk to us")

### 1.4 Products ([Produkte.astro](li-its-astro/src/components/Produkte.astro))
- [ ] **[REVIEW]** 2× `.product-arrow` circles (→) inside `<div>` — not wrapped in any link. Entire product card is non-clickable despite hover treatment. Options:
  - (a) Wrap each `.product-card` in an `<a href="#kontakt">` — the arrow becomes functional, routes to contact
  - (b) Wrap in `href="#"` to match current dead state
  - (c) Leave as non-clickable divs
  - My suggestion: **(a) wrap in `<a href="#kontakt">`** — otherwise the arrow + hover animation suggest clickability that doesn't exist

### 1.5 Trust / Zertifikate ([TrustSection.astro](li-its-astro/src/components/TrustSection.astro))
- [ ] **[REVIEW]** "Alle Zertifikate einsehen →" `href="#"` → Phase 2 destination is a `/zertifikate` detail page. Options:
  - (a) Keep as `href="#"`
  - (b) Hide the button for Phase 1
  - (c) Link directly to the ISO certificate PDF (if you have one)
  - My suggestion: **(b) hide** — the cert card next to it already shows the credential summary; button is redundant without a real destination

### 1.6 CTA section ([CTASection.astro](li-its-astro/src/components/CTASection.astro))
- [ ] **[INPUT]** "Termin vereinbaren →" `href="#"` — this is the primary contact CTA for the whole page. Needs a real destination:
  - A calendar/booking link? (Calendly, cal.com, etc.)
  - A phone number? (`tel:+49...`)
  - A mailto? (same as button beside it)
  - A future `/kontakt` form?
- [ ] **[INPUT]** "E-Mail schreiben" `href="mailto:"` — empty mailto. Need real contact email address (e.g. `info@li-its.de`, `kontakt@li-its.de`). I'll fill in `mailto:<address>?subject=Erstgespräch` once you provide.

### 1.7 Footer ([Footer.astro](li-its-astro/src/components/Footer.astro))
All three columns have `href="#"` on every link (11 total). I can remap the ones that have in-page targets:

- [ ] **[AUTO]** "Leistungen" column:
  - "Systemintegration" → `#leistungen` (section exists, will scroll to Leistungen)
  - "Softwareentwicklung" → `#leistungen`
  - "Rechenzentrum" → `#leistungen`
  - "KI-Projekte" → `#ki`
- [ ] **[AUTO]** "Unternehmen" column:
  - "Zertifikate" → `#trust`
  - "Kontakt" → `#kontakt`
  - "Über uns" → no target on Phase 1 — [REVIEW] keep as `#` or remove?
  - "Karriere" → no target on Phase 1 — [REVIEW] keep as `#` or remove?
- [ ] **[REVIEW]** "Rechtliches" column — Impressum / Datenschutz / AGB all Phase 2 per PRD §4. But these are legally required for any German commercial site going to a public URL. Options:
  - (a) Leave as `href="#"` since Phase 1 is staging-only (not publicly announced)
  - (b) Hide the "Rechtliches" column entirely until Phase 2
  - (c) Stub minimal pages now (just "in Bearbeitung" placeholders) so the links go somewhere
  - My suggestion: **(a) leave as #** — staging URL is `v2.li-its.de` which isn't the legal identity of the company, so German § 5 TMG Impressumspflicht is borderline. Revisit before the domain swap to `li-its.de`. **Flag: confirm with Kai that staging URL doesn't need Impressum yet.**

---

## 2. Numbers that may be placeholder

### 2.1 KI project counts ([KIProjekte.astro](li-its-astro/src/components/KIProjekte.astro))
- [ ] **[INPUT]** Top stat: **"50+"** realisierte KI-Projekte. Is this the real count or a round-number placeholder? The PRD doesn't specify.
- [ ] **[INPUT]** Domain counts — these look placeholder because they **sum to 42, which contradicts "50+"**:
  - "12 Projekte" — Dokumente & Compliance
  - "9 Projekte" — Vertrieb & Kundenservice
  - "7 Projekte" — Vision & Qualitätssicherung
  - "14 Projekte" — Büro & Automatisierung
  - Either the top stat is wrong or the breakdown is wrong — one is placeholder. Need real numbers or a "round" rule (e.g. "show the domain totals, let the top be `40+` to be honest", or "show real top but omit per-domain counts").
- [ ] **[INPUT]** Middle stat: **"100% DSGVO-konform in eigener Infrastruktur"** — is this accurate? Are all 50+ projects actually on the own infrastructure, or do some use hybrid/external cloud? The PRD does say hybrid is part of the offering, which is compatible with "in eigener Infrastruktur" if you mean "as a default posture" — but worth confirming the phrasing is what you want a CIO to read.
- [ ] **[INPUT]** Bottom stat label: **"ISO 27001:2022 — auch für KI-Workloads"** — correct framing?

### 2.2 Cert card dates ([TrustSection.astro](li-its-astro/src/components/TrustSection.astro))
- [ ] **[INPUT]** Badge text: **"Aktiv seit 2022 · Re-zertifiziert 2025"**. PRD §1.1 matches: "active since 2022, re-certified 2025". Confirm the 2025 re-cert already happened / is scheduled / is past? The audit date on the DEKRA certificate is the authoritative source.

---

## 3. Partnership / credential lists — PRD vs mockup discrepancy

The PRD §1.1 lists **Easybell** as a tech partner. The mockup (and therefore the current site) **does not** list Easybell anywhere — not in the trust strip, not in the cert-card list.

- [ ] **[REVIEW]** Two places this shows up:
  - [TrustStrip.astro](li-its-astro/src/components/TrustStrip.astro) — 6 items currently: ISO 27001:2022, BSI Cyber-Sicherheit, Proxmox Reseller, Starface Advanced, ABBYY Certified, GFI Bronze Partner
  - [TrustSection.astro](li-its-astro/src/components/TrustSection.astro) — 5 items in the cert card list (same partners minus ISO since that's the headline)
  - Add Easybell to both? Is Easybell a "partner" in the same tier (named, worth showing), or a reseller relationship that's less prominent?
  - My suggestion: **ask Kai** — PRD lists them alongside the others, but the mockup was already approved without them, so the omission may be intentional.

---

## 4. Missing assets

- [ ] **[REVIEW]** `/og-image.png` — referenced in [BaseLayout.astro:36](li-its-astro/src/layouts/BaseLayout.astro) meta but no file in `public/`. Per your earlier instruction: "Screenshot hero of v2.10 at 1200×630px, save as public/og-image.png." I can:
  - (a) Run `npm run build`, boot preview, take a 1200×630 screenshot of the hero, save as PNG
  - (b) Generate with Puppeteer/Playwright at build time (out of scope for Phase 1)
  - (c) Leave missing for now, fix before production swap
  - My suggestion: **(a) generate from the preview now**, and you approve the resulting image before deploy.

---

## 5. Placeholder mailto / contact methods

- [ ] **[INPUT]** Authoritative L&I **contact email** for the homepage CTA (see 1.6). If multiple addresses are in use, which is the right "general hello" one? (e.g. `info@`, `hallo@`, `kontakt@`, `it.hotline@`…)
- [ ] **[INPUT]** **Phone number** — nowhere on the page currently. Is a phone CTA desired in Phase 1? Common pattern for regulated-industry buyers who trust voice contact. Suggested placement: footer, above the copyright row.
- [ ] **[REVIEW]** Booking tool — if you use Calendly / cal.com / Zoho Meetings for `Termin vereinbaren`, I'll plug in the real URL. Otherwise it stays a mailto.

---

## 6. Copy: potential sharpening opportunities (mockup-canonical, but worth a look)

The mockup is canonical per our rule, but the audit surfaces these:

- [ ] **[REVIEW]** Hero kolophon card h3: **"Compliance-grade AI, end-to-end."** — only English-language sentence on the entire page. Intentional mixed-language branding (tech jargon feels right in English to German devs/CIOs) or should this be "Compliance-fähige KI, durchgängig."? My read: **keep as English** — "Compliance-grade" has no clean German equivalent, and for this audience the English reads as confident technical precision, not sloppiness. Flagging for awareness, not suggesting a change.
- [ ] **[REVIEW]** Services card 2 heading: **"Softwareentwicklung"** is also the eyebrow ("02 / Entwicklung"). The repetition makes the eyebrow redundant. Could the eyebrow be more distinctive (e.g. "02 / Softwarearchitektur" or "02 / Custom Dev")? — Mockup has it this way; mentioning in case you want to tighten later.
- [ ] **[REVIEW]** CTA section body: **"Ob laufende IT-Betreuung, individuelle Software oder ein KI-Projekt für Ihre Branche — wir freuen uns auf ein Erstgespräch."** Nicely direct. No issues.

No actual grammar bugs found in the German anywhere. `&shy;` soft hyphens are used correctly in the hero headline. Umlauts render correctly under the self-hosted fonts.

---

## 7. Footer factual items

- [ ] **[INPUT]** Footer copyright: **"© 2026 L&I IT-Solutions GmbH & Co. KG — Weinheim · München"**. 2026 matches today's date, but confirm — once the site's actually live, you probably want this to auto-generate (`{new Date().getFullYear()}`). **[AUTO]** trivially if you say go.
- [ ] **[INPUT]** Footer address: **"Weiler Nächstenbach 12, 69469 Weinheim"**. PRD §1.1 matches. Confirm this is the correct legal seat of the KG (since it will be tied to the Impressum in Phase 2).

---

## 8. Summary — what's blocking a confident "production-ready" ship

Items strictly blocking ("dead UI" someone would click and be confused"):
1. Dead primary CTA "Termin vereinbaren" (section 1.6) — **[INPUT needed]**
2. Empty mailto on "E-Mail schreiben" (section 1.6) — **[INPUT needed]**
3. Nav → "Unternehmen" links to nowhere (section 1.1) — **[REVIEW]**
4. 50+ vs 42 total number mismatch (section 2.1) — **[INPUT]**

Items high-priority but not strictly blocking:
5. Footer link anchors (section 1.7) — **[AUTO] once you say go**
6. Missing OG image (section 4) — **[REVIEW]**
7. Service-card and KI-cat "looks clickable, isn't" (sections 1.2, 1.3) — **[REVIEW]**

Items to confirm/clarify:
8. Per-domain KI project counts (section 2.1) — **[INPUT]**
9. Easybell partnership presence/absence (section 3) — **[REVIEW]**
10. Copyright year auto-generation (section 7) — **[AUTO]**

---

**Awaiting your input on the `[INPUT]` items and direction on the `[REVIEW]` items before making any edits.**
