# Post-Launch Backlog

Deferred from Phase 1 to get the homepage live faster.

## Content additions
- [ ] Revert KI section on homepage back to 4-6 category summary view
- [ ] Build /ki-projekte subpage with all 29 projects (currently on homepage)
- [ ] Re-enable "Alle KI-Projekte ansehen" button on homepage pointing to new subpage
- [ ] Build /zertifikate page mirroring old li-its.de/iso/ layout (ISO + 6 partner sections, each with logo + description)
- [ ] Copy Datenschutzerklärung to /datenschutz on new site (currently links externally)
- [ ] Improve /impressum stub formatting
- [ ] Build service sub-pages (Systemintegration, Softwareentwicklung, Datacenter, IT-Service, Hotline & Support, Beratung, VoIP Telefonie)
- [ ] Build AGB page (currently removed from footer)
- [ ] Build "Über uns" / "Unternehmen" page (currently removed from nav)
- [ ] Build "Karriere" page (currently removed from footer)

## Phase 2 — Product page enhancements
- [ ] Build /produkte index page (overview of all 4 products)
- [ ] Add hero illustrations or screenshots to each product page
- [ ] Add customer testimonials / case studies
- [ ] Add FAQ accordion to each product page
- [ ] Consider video embeds for product demos

## UX/UI improvements
- [ ] Proper mobile nav with burger menu (currently hides at ≤900px)
- [ ] Real booking tool integration (Calendly / cal.com) if adopted instead of mailto
- [ ] Proper OG image design (currently a hero screenshot)
- [ ] Decide whether KI category headers need hover treatment once we revert to the 4-category summary view (currently only Leistungen cards have neural hover)

## Technical/SEO
- [ ] Analytics (DSGVO-friendly: Plausible or Matomo)
- [ ] Cookie consent banner (only if anything added requires consent)
- [ ] Sitemap.xml
- [ ] robots.txt properly configured for production
- [ ] Remove noindex from homepage BaseLayout when swapping staging → production
- [ ] Replace public/robots.txt with production version (allow crawling, link sitemap.xml)
- [ ] Structured data / JSON-LD (Organization, LocalBusiness, Product)
- [ ] Switch staging → production: swap document root on IONOS from li-its.de to Astro output
- [ ] Expand CASP card copy with more differentiator detail once Rahel reviews the old /produkte/casp/ page carefully
- [ ] Expand Löschmanager card copy similarly
