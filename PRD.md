# PRD — L&I IT-Solutions Website, Phase 1: Homepage

**Version:** 1.0  
**Date:** 2026-04-23  
**Owner:** Kai Bieler (L&I IT-Solutions)  
**Status:** Ready for implementation  
**Scope:** Phase 1 — Homepage only (`/` route). Inner pages covered in a later PRD.

---

## 1. Context

### 1.1 Company

**L&I IT-Solutions GmbH & Co. KG** is a German B2B IT company headquartered in Weinheim with an own datacenter in München. They operate in two divisions — Systemintegration (IT operations, networking, hosting) and Softwareentwicklung (custom software development, AI projects).

**Audience:** Banks, insurance companies, law firms, and the regulated German Mittelstand. Conservative buyers (CIOs, CTOs, Datenschutzbeauftragte) for whom credibility and security posture precede everything else.

**Key credentials:**
- ISO 27001:2022 certified (through DEKRA Certification GmbH, active since 2022, re-certified 2025)
- BSI Allianz für Cyber-Sicherheit member
- Own datacenter in München (fully in German jurisdiction)
- Tech partnerships: Proxmox (Authorized Reseller), Starface (Advanced Partner), ABBYY (Certified Partner), GFI (Bronze Partner), Easybell

**Own products:**
- **INVOICE-Auditor** — automated legal-invoice checking (OCR-driven, RVG-compliant, Inhouse/ASP)
- **Data Agenda Datenschutzmanager** — DSGVO management platform (partnership with GDD e.V., multi-tenant, German-hosted)

**Location / contact:**
- Headquarters: Weiler Nächstenbach 12, 69469 Weinheim
- Datacenter: München
- Domain: li-its.de (currently running old site), staging at v2.li-its.de

### 1.2 Positioning

**Core message:** "The IT partner who ships modern AI solutions without compromising the security posture your regulators require."

The AI/KI work is the new differentiator. The existing site does not communicate this at all. Everyone else in the German Systemhaus space looks identical: sterile corporate or tech-bro-sleek. L&I's opportunity is to be distinctly *serious but interesting* — character without compromise on credibility.

### 1.3 Why this redesign exists

1. The current site confuses clients and prospects
2. L&I has invested heavily in AI/KI capabilities that the site doesn't reflect
3. The site must read as credible to an audited-industry CIO (ISO-compliant vibe) while also showing the firm knows modern tech
4. Competitors (deste-solutions.de, instinctools, innowise) demonstrate what's possible; L&I wants to exceed them within brand constraints

---

## 2. Design System (locked, non-negotiable)

### 2.1 Logo

Keeping the existing **puzzle-piece shield** (SVG already embedded inline in the mockup). Not redesigning. A "V1 Refined" color refresh was applied — the colors below are the canonical logo colors.

### 2.2 Color palette

Matched exactly to the refreshed logo:

```css
--green-900: #0A2E1D;   /* deepest shadow */
--green-800: #0E4D30;   /* deep forest, primary */
--green-700: #155A3D;
--green-600: #1F7A45;
--green-500: #2F9E54;   /* mid-green, accent */
--green-400: #3FAE6B;   /* bright */
--green-100: #E4EFD9;   /* refined sage */
--cream:     #FAFAF6;   /* page background */
--ink:       #0B0F0D;   /* primary text */
```

Full CSS variable definitions are at the top of `mockups/li-its-homepage-v2-10.html`.

### 2.3 Typography (three-voice system)

- **Newsreader** (Google Fonts, variable serif) — all headlines, logo wordmark, product names, section titles, CTA heading, footer brand. The *serious statement voice*.
  - Display sizes (40px+): `font-variation-settings: "opsz" 72;`
  - Text sizes (small wordmarks): `font-variation-settings: "opsz" 20;`
- **Geist Sans** (Google Fonts) — body copy, supporting text, service card headings, buttons, nav links. The *supporting story voice*.
- **JetBrains Mono** (Google Fonts, always green-700/green-400) — eyebrows, labels, status indicators, kolophon data, neural hover canvas. The *technical / cool counterpoint voice*.

**Newsreader italic (always colored green)** is used for accent words — `<span class="italic">Vertrauen</span>`, etc. This is the "black serious, green cool" contrast system the whole design rests on.

### 2.4 Signature moments (all must be preserved)

1. **Cinematic staged intro animation** (~7s total)
   - Logo + wordmark reveal with blur-slide (0-2s)
   - Headline 1 reveals (at 2s)
   - Headline 2 reveals (at 4s)
   - "Weiterlesen" hint fades in (at 5.8s)
   - Full intro dismisses at 7s or on click/scroll
   - Respects `prefers-reduced-motion`
   - **Demo controls (bottom-right replay/skip buttons) must be removed in production build**

2. **Hero animated background**
   - 4 drifting blurred green gradient spheres on separate loops (22s / 28s / 32s / 26s)
   - Subtle dot grain texture overlay (24px grid, 1px dot, rgba ink at 0.025)
   - No "data-line" or progress bar at the top (was explicitly removed in v2.10 — felt like a loading bar)

3. **Neural network hover effect** on service cards (Leistungen, 3x) and KI domain cards (4x in dark section)
   - Canvas-based
   - Dots distributed across card, connected by lines when close
   - Dots near cursor grow and pulse outward
   - Only one card animates at a time (the hovered one)
   - Light variant uses `--green-600` / `--green-500`; dark variant uses `--green-400` on dark background
   - Respects `prefers-reduced-motion`

4. **Scroll-triggered reveals**
   - IntersectionObserver-based
   - All major elements fade + slide-up when entering viewport
   - Staggered delays on grid children (0.1s / 0.2s / 0.3s / 0.4s)
   - Threshold: 0.15, rootMargin: `0px 0px -50px 0px`

5. **Animated number counter** on KI stats (50+, 100%, ISO)
   - Counts from 0 to target value on scroll into view
   - Duration: 1600ms
   - Easing: cubic ease-out

### 2.5 Sections (in order)

1. Staged Intro (overlay, dismisses after ~7s)
2. Nav (sticky, blurred backdrop)
3. Hero (with animated blob background, dual-column: headline/CTA left, kolophon masthead card right)
4. Trust strip (certifications + partnership marks, horizontal)
5. Leistungen (3 service cards with neural hover) — Systemintegration, Softwareentwicklung, Rechenzentrum
6. KI-Projekte section (dark green background) — section intro, 3 stats with count-up, 4 domain cards with neural hover, closing CTA
7. Produkte (2 cards) — INVOICE-Auditor, Datenschutzmanager
8. Trust / Zertifikate section — credential article with cert list and drop-cap paragraph
9. CTA section (dark ink background)
10. Footer

---

## 3. Technical Requirements

### 3.1 Stack

- **Framework:** Astro (latest stable, v5.x)
- **Styling:** Plain CSS (no Tailwind, no SCSS). The mockup is already plain CSS; we preserve that approach.
- **JavaScript:** Vanilla JS. No React, Vue, Alpine, or other frameworks for interactivity. The mockup's IntersectionObserver + canvas animations are already vanilla JS and port directly.
- **Fonts:** Loaded via Google Fonts (`<link>` tag in head). Preconnect to `fonts.googleapis.com` and `fonts.gstatic.com`.
- **Language:** German (`<html lang="de">`)

### 3.2 Deployment target

- **Hosting:** IONOS Webhosting (existing, already paid for)
- **Staging URL:** `https://v2.li-its.de` — SSL active as of 2026-04
- **Production URL (future):** `https://li-its.de` — swap to new site once full site is complete
- **Upload method:** SFTP or IONOS browser file manager
- **Deploy workflow:** Manual for Phase 1 (`npm run build` → upload `dist/` contents). GitHub Actions automation is out of scope for now, can be added in Phase 3.

### 3.3 Quality standards

- **Accessibility:** Semantic HTML5 (`<nav>`, `<main>`, `<section>`, `<article>`). All interactive elements keyboard-accessible. `prefers-reduced-motion` honored on every animation.
- **Performance:** Astro's zero-JS-by-default output should produce a page that scores 95+ on Lighthouse Performance. No unused JS shipped.
- **SEO:** Meta title, description, Open Graph tags present. Site is indexable once on production URL.
- **Browser support:** Modern evergreen browsers (Chrome, Firefox, Safari, Edge — last 2 major versions). No IE11.
- **Mobile:** Responsive down to 375px. All animations work on touch devices. Neural hover effect only runs on hover-capable devices (`@media (hover: hover)`).

### 3.4 Component architecture (proposed, Claude Code can refine)

```
src/
├── layouts/
│   └── BaseLayout.astro           # HTML shell, fonts, meta
├── components/
│   ├── IntroAnimation.astro       # ~7s staged intro overlay + logic
│   ├── Nav.astro                  # sticky nav with logo + menu + CTA
│   ├── Hero.astro                 # hero with animated blobs + headline + masthead card
│   ├── TrustStrip.astro           # horizontal credentials strip
│   ├── ServicesGrid.astro         # 3 Leistungen cards with neural hover
│   ├── NeuralCard.astro           # reusable card wrapper with canvas hover
│   ├── KIProjekte.astro           # dark section: stats + 4 domain cards + CTA
│   ├── KIStat.astro               # single stat with count-up animation
│   ├── Produkte.astro             # 2 product cards
│   ├── TrustSection.astro         # cert article + cert list
│   ├── CTASection.astro           # dark background final CTA
│   └── Footer.astro               # footer with brand + legal links
├── pages/
│   └── index.astro                # composes the above components
├── scripts/
│   ├── neural-network.js          # canvas hover effect
│   ├── scroll-reveal.js           # IntersectionObserver reveal logic
│   ├── number-counter.js          # count-up animation
│   └── intro-animation.js         # staged intro choreography
└── styles/
    ├── global.css                 # CSS variables, resets, typography
    └── components.css             # (or component-scoped CSS in each .astro file)
```

### 3.5 Content source of truth

All headline copy, body copy, service descriptions, KI domain content, product descriptions, certificate list, and every other piece of content is already present in `mockups/li-its-homepage-v2-10.html`. **Do not invent new copy.** If a piece of text seems ambiguous or too brief, ask before expanding.

---

## 4. What Phase 1 explicitly does NOT include

- **Inner pages** (Leistungen subpages, KI-Projekte detail page, Produkte detail pages, Sicherheit, Unternehmen, Kontakt, Impressum, Datenschutz, AGB). These are Phase 2.
- **CMS integration.** No Decap, no Sanity, no headless WordPress. Content lives in Astro files for now. Non-developer editing is explicitly out of scope.
- **Forms and form processing.** The CTA buttons link to `mailto:` or a future `/kontakt` page but don't have a real contact form on the homepage.
- **Analytics.** Can be added later. Not in Phase 1.
- **Cookie consent banner.** Required for production launch but Phase 1 is staging-only, so handled in Phase 2.
- **Blog / news section.** Not in scope at all for any phase currently.
- **GitHub Actions CI/CD.** Manual deploy is acceptable for now.
- **Multi-language support.** German only. English / other translations not planned.

---

## 5. Success Criteria

Phase 1 is successful when:

- [ ] Homepage (`/`) renders correctly at `https://v2.li-its.de`
- [ ] All animations from v2.10 work identically (intro, blobs, neural hover, scroll reveals, number counter)
- [ ] Typography matches v2.10 (Newsreader / Geist / JetBrains Mono, correct weights and italic treatments)
- [ ] Colors match v2.10 exactly (brand greens, cream, ink)
- [ ] Responsive behavior works down to 375px width
- [ ] Lighthouse Performance score ≥ 90 on mobile, ≥ 95 on desktop
- [ ] No console errors in any evergreen browser
- [ ] Demo controls (intro replay/skip buttons) are removed from production build
- [ ] `prefers-reduced-motion` users see no animations
- [ ] Site is deployed to `v2.li-its.de` via SFTP / IONOS file manager
- [ ] Stakeholder (Kai's boss) signs off that the production output looks identical to the v2.10 mockup

---

## 6. References

- **Source design:** `mockups/li-its-homepage-v2-10.html`
- **Reference sites:**
  - Hover effects inspiration: https://www.instinctools.com/
  - Hero blob background inspiration: https://innowise.com/
  - KI-Projekte section structure inspiration: https://deste-solutions.de
- **Design iteration history:** ~10 versions (v1 → v2.10) reviewed with stakeholder, final version approved
- **Anti-patterns to avoid:** Generic "IT-company" tone, purple gradients, Tailwind defaults, sterile corporate aesthetic, lime-green accents (boss rejected), editorial-magazine feel (rejected), dataline/progress-bar decorations at top of hero (rejected).

---

## 7. Open Questions for Implementation Agent

Before writing code, the implementing agent (Claude Code) should confirm or ask about:

1. **CSS architecture:** Global stylesheet vs component-scoped styles. The mockup uses one big `<style>` block. Astro supports both — recommend one based on maintainability.
2. **Font loading strategy:** Self-host fonts vs Google Fonts CDN. Self-hosting is better for performance and privacy (DSGVO) but more setup. Which does the stakeholder prefer?
3. **Inline SVG vs external:** The shield logo SVG is currently inlined 4x in the mockup (intro + nav + footer + potentially elsewhere). Recommend either a shared Astro component or a `public/shield.svg` referenced via `<img>`.
4. **Script placement:** All JS at end of body currently. Astro has `<script>` tag behavior that differs. Confirm approach.
5. **Deploy automation:** Any interest in setting up a simple `npm run deploy` script that handles build + SFTP upload? Out of scope per PRD but quick to add.
