# Content Corrections — sourced from live sites

**Source 1:** https://li-its.de (live L&I site — authoritative for L&I facts)
**Source 2:** https://deste-solutions.de and https://deste-solutions.de/leistungen/ki-loesungen (D'Este Solutions — authoritative for KI projects since we're mirroring their data)

This document overrides anything in PRD.md or the v2.10 mockup where they conflict. These are real, verifiable facts from currently-live public pages.

---

## 1. L&I contact + legal facts (CRITICAL CORRECTIONS)

**Address (CORRECTION — PRD was wrong):**
```
L&I IT-solutions GmbH & Co. KG
Werderstr. 4
69469 Weinheim
```
NOT "Weiler Nächstenbach 12" — that was a PRD hallucination. Apply everywhere (footer, Impressum, meta tags).

**Phone:**
```
+49 (0) 841 / 13 80 769-0
```
Formatted options: `0841 / 13 80 769-0` (as on current site) or `+49 841 1380 7690` (international). Use the current-site format for consistency.

**Email addresses:**
- General: `info@li-its.de` (confirmed)
- Datenschutz: `datenschutz@li-its.de` (confirmed)

**Company legal details (for Impressum):**
- Full name: **L&I IT-solutions GmbH & Co. KG** (note the hyphen + lowercase "solutions" — the current public site styles it this way, NOT "IT-Solutions" with capital S)
- HRA: **712555 Amtsgericht Mannheim**
- Persönlich haftender Gesellschafter: **lawyer&insurer IT-solutions GmbH** (HRB 754265 Amtsgericht Mannheim)
- Geschäftsführer: **Kai Bieler**
- Steuer-ID: **DE272228145**
- Externer Datenschutzbeauftragter: **Herr Günther Otten** — email `datenschutz@li-its.de`

**Brand name styling (IMPORTANT):**
The current live site uses `L&I IT-solutions` (lowercase "solutions" with a hyphen). Our mockup uses `L&I IT-Solutions` (capital S). Need to decide which is canonical going forward.

- Option A: match current-site styling `IT-solutions` (lowercase s) — preserves established brand
- Option B: modernize to `IT-Solutions` (capital S) — more standard

**Recommendation: Option A** (keep `IT-solutions`, lowercase s) to match Impressum/HRA/all official documents. Changing capitalization on an established KG name touches legal identity concerns.

---

## 2. ISO 27001 certification details (corrections + additions)

**Current factual status** (from live li-its.de/iso page, authoritative):
- Originally certified: **2022, to ISO 27001:2017**
- Re-certified: **2025, to ISO 27001:2022 (new norm)**
- Certificate number: **DS-0722046**
- Certifier: not explicitly named on current page, but badge image shows issuer (look at the cert image at https://li-its.de/wp-content/uploads/2025/09/Zertifikat-ISO_IEC-27001_2022-DS-0722046_1-de-1.pdf if needed)
- Downloadable PDF: `https://li-its.de/wp-content/uploads/2025/09/Zertifikat-ISO_IEC-27001_2022-DS-0722046_1-de-1.pdf`

**Copy from current site that we can modernize a bit:**
> "Die L&I IT-Solutions ist seit 2022 nach dem Branchenstandard ISO 27001:2017 zertifiziert, und wurde 2025 nach der neuen Norm ISO 27001:2022 Re-Zertifiziert. Die ISO 27001 ist die international führende Norm für Informations-Managementsysteme. [...] Unsere ISO 27001 Zertifizierung dient auch als wichtiger Baustein für die ISO- und BSI-Zertifizierungen unserer Kunden."

**Proposed updated copy for our new homepage Trust section:**
> "Seit 2022 ISO 27001-zertifiziert, 2025 nach der aktuellen ISO 27001:2022 re-zertifiziert. Die international führende Norm für Informationssicherheits-Management — Grundlage nicht nur für unsere eigenen Prozesse, sondern auch ein wichtiger Baustein für die ISO- und BSI-Zertifizierungen unserer Kunden."

**Cert card update:**
- Badge: "Aktiv seit 2022 · Re-zertifiziert 2025 (27001:2022)"
- Heading: Keep "DIN EN ISO/IEC 27001:2022" — correct.
- Link "Alle Zertifikate einsehen" → change destination from `#` to the PDF: `https://li-its.de/wp-content/uploads/2025/09/Zertifikat-ISO_IEC-27001_2022-DS-0722046_1-de-1.pdf` (opens PDF directly, download or new tab)
- Alternative: un-hide this button and link it to the PDF (previously we said hide it — but now we have a real destination).

**Recommendation:** un-hide the button, repoint to the PDF.

---

## 3. Partnerships (confirmed list of 7)

From the live ISO/zertifikate page:
1. **ISO 27001:2022** (Informationssicherheit)
2. **BSI Allianz für Cyber-Sicherheit** (Mitglied)
3. **Starface Advanced Partner** (Kommunikation/Telefonie)
4. **Easybell** (VoIP-Telefonieanbieter, German)
5. **ABBYY Certified Partner** (OCR)
6. **GFI Software Bronze Partner** (darunter Kerio Control Firewall)
7. **Proxmox Virtual Environment Authorized Reseller** (virtualization, offizieller Support)

**Correction:** Easybell IS a named partner on the current site — add it to both our TrustStrip and cert-card list. Earlier I suggested leaving it off; that was wrong.

**Proposed Trust Strip order** (7 items — may need responsive wrapping):
```
ISO 27001:2022 · BSI Allianz · Proxmox Reseller · Starface Advanced · Easybell · ABBYY Certified · GFI Bronze Partner
```

If 7 items don't fit nicely on one line at some viewports, reasonable options:
- Collapse "Partner" suffix on some (e.g. "GFI Bronze" → "GFI")
- Use a subtle `·` separator and let them wrap to 2 lines
- Show 5 on mobile, all 7 on desktop

---

## 4. KI-Projekte stats + categories (CRITICAL — from deste-solutions.de)

**Headline numbers** (from the current live D'Este KI-Lösungen page):
```
80+   Projekte umgesetzt
8     Branchen abgedeckt
7     KI-Modelle im Einsatz
```

Our current mockup shows `50+ / 100% DSGVO / ISO 27001`. Two options:

**Option A — Use D'Este's actual numbers (since we're mirroring their KI offering):**
```
80+   realisierte KI-Projekte
8     Branchen abgedeckt
7     KI-Modelle im Einsatz
```

**Option B — Blend their numbers with L&I-specific credentials:**
```
80+   realisierte KI-Projekte
100%  DSGVO-konform in eigener Infrastruktur
ISO   27001:2022 — auch für KI-Workloads
```

**Recommendation: Option B.** Retains our positioning angle ("we do AI differently — with ISO posture") while using the real project count. Kai can decide.

---

**Category structure (REPLACE our current 4 with D'Este's real 6):**

Our current mockup categories are **not aligned** with D'Este's actual structure. We should mirror D'Este's categories since we're offering the same projects:

1. **Vertrieb & Kundenmanagement** (6 projects) — Intelligente Automatisierung für Kundenbeziehungen und Vertriebsprozesse
2. **Datenschutz & Compliance** (5 projects) — Fünf spezialisierte KI-Kanäle für durchgängige DSGVO-Compliance
3. **Fertigung & Qualitätssicherung** (4 projects) — Computer Vision und KI-Analyse für industrielle Anwendungen
4. **Büro & Kommunikation** (5 projects) — KI-gestützte Zusammenarbeit und intelligente Assistenten
5. **Finanzen & Produktivität** (6 projects) — Automatisierte Finanzprozesse und intelligentes Projektmanagement
6. **Mobilität & Services** (3 projects) — KI-gestützte Planung und praxisorientierte Wissensvermittlung

**Total shown: 29 projects. Claim: 80+ total (many not publicly showcased).**

**Design issue:** The v2.10 mockup has space for 4 domain cards (in a 2×2 grid). Six categories would need redesign to 3×2 or 2×3. **Need design decision:**

- Option (a) Keep 4-card layout, pick 4 most relevant categories for L&I's regulated-industry audience. Recommendation: **Datenschutz & Compliance, Finanzen & Produktivität, Fertigung & Qualitätssicherung, Büro & Kommunikation**. Drop Vertrieb and Mobilität as less banking/insurance-centric.
- Option (b) Expand to 6-card layout (3×2 grid). More faithful to D'Este offering, more layout work.
- Option (c) Re-group into 4 meta-categories.

**Recommendation: Option (a) — pick 4 most relevant.** Keeps v2.10 design intact, emphasizes regulated-industry angle.

**Proposed 4-card version for the new homepage:**

1. **Datenschutz & Compliance**
   - Count: 5 Projekte
   - Description: "DSGVO-Verfahrensverzeichnisse, AV-Vertragsanalyse, KI-gestütztes Onboarding und Wissens-Chatbots für Compliance-Teams."

2. **Finanzen & Produktivität**
   - Count: 6 Projekte
   - Description: "Automatisierte Rechnungsverarbeitung, E-Rechnung nach ZUGFeRD, KI-Belegextraktion per Computer Vision und Dashboard-Aggregation."

3. **Fertigung & Qualitätssicherung**
   - Count: 4 Projekte
   - Description: "Schadenserkennung per Foto, CNC-Zeichnungsanalyse, Materialrecherche und Predictive Maintenance für industrielle Anwendungen."

4. **Büro & Kommunikation**
   - Count: 5 Projekte
   - Description: "Meeting-Transkription, KI-Assistenten für Disposition, Workflow-Automatisierung und natürlich-sprachliche Messenger-Bots."

**These sum to 20 of 29 shown; 80+ total claim remains truthful.**

---

## 5. Products — correction needed

**Our mockup has 2 products.** Live site has at least 4 listed in nav:
- INVOICE-Auditor ✓ (already in mockup)
- CASP (missing from mockup — standalone product page exists)
- Datenschutzmanager (Data Agenda) ✓ (already in mockup)
- Löschmanager (missing from mockup — linked in "Sicherheit" menu)

**Options:**
- (a) Keep 2 products on homepage (INVOICE-Auditor + Datenschutzmanager) — our current mockup. They're the marquee products. CASP and Löschmanager can be on a dedicated /produkte page in Phase 2.
- (b) Expand to 4 product cards on homepage.

**Recommendation: Option (a) — keep 2.** Current card design is quite featured/large; 4 of them would dominate the page. Mention the others on the future /produkte subpage.

---

## 6. Services — copy modernization opportunities

Current live site homepage section titles (kept factual, could be spruced):

- "IT-Betreuung" → current mockup: "IT-Betrieb & Netzwerk" — our mockup title is fine
- "Softwareentwicklung" → same
- "Datacenter" → current mockup: "Hosting & Cloud" — I'd keep "Hosting & Cloud" since it's broader

**The current live homepage uses these exact subheaders/micro-copy for services:**

**IT-Betreuung:**
> "Sie suchen einen professionellen IT-Dienstleister, der Ihre IT und TK-Umgebung betreut oder integriert? Dann sind wir der richtige Partner für Sie."

**Softwareentwicklung:**
> "Wenn Ihre Anforderungen über den Gebrauch von standardmäßiger Software hinauswachsen, bietet sich die Erstellung einer speziell für Sie angefertigten Software."

**Support:**
> "Wir bieten unseren leistungsstarken zentralen Service für alle IT-Themen."

**Beratung:**
> "Wir helfen Ihnen unter Anderem in Sachen Projektmanagement, Softwarearchitektur und IT-Strategie."

These are factually fine but wordy and passive. Our mockup copy is already sharper — I recommend keeping our mockup copy for these three cards.

---

## 7. Impressum content (ready for a stub page)

Per our prior discussion, Phase 1 should have at minimum a stub Impressum before staging goes public. Ready-to-use content:

```markdown
# Impressum

© 2026 L&I IT-solutions GmbH & Co. KG
Werderstr. 4, 69469 Weinheim
HRA 712555 Amtsgericht Mannheim

**Persönlich haftender Gesellschafter:**
lawyer&insurer IT-solutions GmbH
HRB 754265 Amtsgericht Mannheim
Werderstr. 4, 69469 Weinheim, Deutschland

**Vertreten durch den Geschäftsführer:** Kai Bieler
**Telefon:** +49 (0) 841 / 13 80 769-0
**E-Mail:** info@li-its.de
**Website:** https://li-its.de

**Steuer-ID:** DE272228145

**Ansprechpartner für die Website und inhaltlich Verantwortlicher gem. § 55 RStV:**
L&I IT-solutions GmbH & Co. KG · Kai Bieler · Anschrift s.o.

**Externer Datenschutzbeauftragter:** Dipl.-Kfm. Günther Otten
E-Mail: datenschutz@li-its.de
```

**Note on year:** Copyright year should auto-generate via `{new Date().getFullYear()}` as previously agreed.

---

## 8. Datenschutz page (available for Phase 2 stub)

Full Datenschutzerklärung already exists on live site at https://li-its.de/datenschutz/. For Phase 1 we can either:
- (a) Link directly to the live page: `https://li-its.de/datenschutz/`
- (b) Copy content over to `/datenschutz` on the new site

**Recommendation: Option (a)** for Phase 1. Linking to the live page is valid and avoids duplicating legal text. Once v2.li-its.de becomes the production li-its.de, we migrate the content. Saves time.

---

## 9. What this changes in the homepage — summary

**Must fix:**
- [ ] Address everywhere: Werderstr. 4, 69469 Weinheim (NOT Weiler Nächstenbach)
- [ ] Footer: add phone `0841 / 13 80 769-0`
- [ ] Footer: email `info@li-its.de`
- [ ] Footer legal name: `L&I IT-solutions GmbH & Co. KG` (lowercase s decision pending — recommend lowercase)
- [ ] Trust Strip: add Easybell (7 items now)
- [ ] Cert card: update list to 6 partners (not 5)
- [ ] Cert card: un-hide "Zertifikat einsehen" button, link to PDF URL
- [ ] KI section: update stats to Option B (80+ / 100% / ISO)
- [ ] KI section: replace 4 domain cards with the 4 new ones (Datenschutz & Compliance, Finanzen & Produktivität, Fertigung & QS, Büro & Kommunikation) with correct counts + descriptions
- [ ] CTA "Termin vereinbaren" → keep as mailto (decided earlier)
- [ ] CTA "E-Mail schreiben" → `mailto:info@li-its.de?subject=Erstgespr%C3%A4ch%20zu%20Ihrem%20Projekt`

**Create new:**
- [ ] `src/pages/impressum.astro` — stub page using the content in section 7 above. Required before staging goes public.

**Update links:**
- [ ] Footer → Impressum: `/impressum` (internal link, now exists)
- [ ] Footer → Datenschutz: `https://li-its.de/datenschutz/` (external, direct to live site)
- [ ] Footer → AGB: keep `href="#"` for now (no AGB page exists; can be hidden if cleaner)

**Recommend hiding:**
- [ ] Footer → AGB link (no content, no need to display broken link)

---

## 10. Brand styling decision needed from Kai

The one real open question that's not infrastructure:

> **Do we modernize the brand styling to "L&I IT-Solutions" (capital S) for the new site, or preserve "L&I IT-solutions" (lowercase s) as on the current live site?**

Both are defensible. Lowercase matches the KG's registered name and all legal paperwork (Impressum, HRA, tax ID). Capital-S is more contemporary and matches common expectation for tech company names.

**My recommendation: lowercase** (match Impressum) for the brand wordmark in the nav + footer. Page body copy can use "IT-Solutions" freely — it's the wordmark that needs to match the legal name.

**Kai to confirm.**
