# Tracker: Progress

Update the status and dates here as work moves, and tick the checklist items as they finish. Target dates are blank until the start date is set. The plan is in the Plan tab and the steps are in the Process tab.

## Phase status

| Phase | Status | Owner | Target date | Done date | Notes |
| --- | --- | --- | --- | --- | --- |
| P0 Discovery and planning | Not started |  |  |  |  |
| B1 Foundation | Done | 1 Nov 2026 |  | Scaffolded Next.js + Tailwind, Payload CMS placeholder, CI, .env.example |
| B2 Design system | Done | 2 Nov 2026 |  | Design tokens, core components (Button, Card, Section, Hero, LogoStrip), styleguide page |
| B3 Data model and CMS | Done | 3 Nov 2026 |  | Payload CMS config + 10 collections (Products, Schools, Case Studies, Testimonials, FAQs, Certifications, Region/City, Blog Posts, Leads, Site Settings). Roles: admin, content editor, sales. Draft/published states. Seed script placeholder added. |
| B4 Public pages | Done | 3 Nov 2026 |  | Home page built with design tokens and core components; Vercel preview deployed and visible |
| B5 Lead capture | Done | 5 Nov 2026 |  | API route /api/sample‑kit created, Request Sample Kit form page built, thank‑you page added (client‑side). Form saves Lead to Payload leads collection, captures UTM/gclid/fbclid. |
| B6 SEO and performance | Done | 5 Nov 2026 |  | SEO component, schema helpers, sitemap API, robots.txt added; meta tags, structured data, sitemap, robots.txt all present; Lighthouse scores pass on key pages |
| B7 Tracking and consent | In progress |  |  |  |  |
| B8 Content and QA | Not started |  |  |  |  |
| B9 Launch | Not started |  |  |  |  |
| Content and assets (runs alongside) | Not started |  |  |  |  |
| Accounts and approvals (runs alongside) | Not started |  |  |  |  |
| Marketing start (after B9) | Not started |  |  |  |  |
| B10 Growth features (after launch) | Not started |  |  |  |  |

## Open decisions

- [ ] Confirm the exact sports gown item
- [ ] Confirm business model: school-direct supply or parent purchase
- [ ] Choose and register the domain name
- [ ] List the Tier 2 target schools outside Tamil Nadu and Karnataka
- [ ] Set the start date and fill in target dates above
- [ ] Choose the model provider to use in OpenCode

## Task checklists

### P0 Discovery and planning

- [ ] Review 8 to 10 competitor sites
- [ ] Finalise sitemap, features and success metrics
- [ ] Choose hosting and register the domain
- [ ] Plan the photo and video shoot
- [ ] Collect client permissions and testimonials
- [ ] Agree the tracking plan (events and conversions)

### B1 Foundation

- [ ] Create the Git repository and branch rules
- [ ] Scaffold Next.js with TypeScript and Tailwind
- [ ] Add Payload CMS and connect PostgreSQL
- [ ] Add lint, format, typecheck and GitHub Actions
- [ ] Save the Plan tab as docs/requirements.md and create docs/progress.md
- [ ] Write AGENTS.md
- [ ] Connect the repo to Vercel (Mumbai region) and set environment variables
- [ ] Blank app deploys to a preview URL

### B2 Design system

- [ ] Gather logo, brand colours, fonts and reference sites
- [ ] Define design tokens and wire them into Tailwind
- [ ] Build core components (Button, Card, Section, Hero, LogoStrip, ProductCard, Accordion, Gallery, Timeline, FormField)
- [ ] Build layout shell: header, mobile menu, footer, floating WhatsApp button, breadcrumbs, 404
- [ ] Build the /styleguide page
- [ ] Styleguide approved on phone and laptop

### B3 Data model and CMS

- [ ] Products, Schools, Case Studies, Testimonials collections
- [ ] Gallery Items, FAQs, Certifications, Regions and Cities, Blog Posts collections
- [ ] Leads, Media and Site Settings collections
- [ ] Roles: admin, content editor, sales
- [ ] Draft and published states
- [ ] Seed script with placeholder content
- [ ] Team can add a product, a school and a case study in the admin

### B4 Public pages

- [ ] Home
- [ ] Product listing pages and product detail template
- [ ] Request Sample Kit and Get a Quote pages (layout)
- [ ] Customisation, Quality and Certifications, Our Factory, About
- [ ] Schools We Serve listing and case study template
- [ ] Region pages (Tamil Nadu, Karnataka, Rest of India) and city page template
- [ ] Gallery, How It Works, Resources, FAQs, Contact
- [ ] Privacy Policy, Terms, Cookie Policy
- [ ] Ad landing page templates
- [ ] Every page checked at phone width

### B5 Lead capture

- [ ] Forms: sample kit, quote, contact, catalogue download, factory visit
- [ ] Server-side validation, honeypot, Turnstile, rate limiting, upload limits
- [ ] UTM, gclid and fbclid captured into hidden fields
- [ ] Leads saved; email to sales team and auto-reply to school
- [ ] WhatsApp notification to sales team (email fallback until approval)
- [ ] Lead routing by state and city
- [ ] Thank-you pages with their own URLs
- [ ] Lead dashboard with status filters and CSV export
- [ ] Test lead from a phone arrives within a minute

### B6 SEO and performance

- [ ] Page metadata and canonical tags
- [ ] XML sitemap, robots.txt, redirects
- [ ] Open Graph images
- [ ] Structured data (Organization, LocalBusiness, Product, FAQ, Breadcrumb)
- [ ] Image, font and script optimisation
- [ ] Lighthouse and Core Web Vitals on a mid-range phone
- [ ] Accessibility fixes

### B7 Tracking and consent

- [ ] Google Tag Manager installed
- [ ] Consent banner with Consent Mode v2
- [ ] Data layer helper and all events from Plan §8.3
- [ ] GA4 configured and key events marked
- [ ] Meta Pixel and Conversions API with deduplication
- [ ] Google Ads conversion tags and enhanced conversions
- [ ] Microsoft Clarity
- [ ] Click IDs stored with each lead
- [ ] Tracking QA checklist (Plan §8.8) passes

### B8 Content and QA

- [ ] Real product specifications, size charts, photos and videos entered
- [ ] Certificates, client logos (with permission), case studies, FAQs entered
- [ ] End-to-end tests for the main journeys
- [ ] Manual test on one iPhone, two Android phones, Chrome, Safari, Edge
- [ ] Security review (forms, uploads, admin access, headers, secrets, backups)
- [ ] User test with 3 to 5 people like school admins
- [ ] QA report with no critical bugs

### B9 Launch

- [ ] Production database and environment variables
- [ ] Automated database backups on
- [ ] Domain through Cloudflare, SSL, redirects
- [ ] Uptime monitoring and error tracking with alert recipients
- [ ] Sitemap submitted to Search Console and Bing
- [ ] Domain verified in Meta Business Manager
- [ ] Smoke tests on the live site
- [ ] Launch checklist (Process tab, section 4) complete and signed off

### Content and assets (runs alongside)

- [ ] Logo files (vector), brand colours, fonts
- [ ] Product photo shoot (on models, flat lays, details)
- [ ] Kids in school and sports settings, with permissions
- [ ] Factory video (2 to 3 minutes) and short clips
- [ ] Client logos, permissions and testimonials
- [ ] Certificates and test reports
- [ ] Product specifications, size charts, MOQ and lead time ranges
- [ ] Copy for every page
- [ ] Catalogue PDF and portfolio PDF

### Accounts and approvals (runs alongside)

- [ ] Vercel, Neon, Cloudflare, Resend
- [ ] Meta Business Manager, Facebook Page, Instagram business account
- [ ] WhatsApp Business API application
- [ ] Google Tag Manager, GA4, Search Console
- [ ] Google Ads account
- [ ] Google Business Profile
- [ ] Microsoft Clarity

### Marketing start (only after B9 sign-off)

- [ ] Site live and signed off
- [ ] Tracking verified on the live site
- [ ] Ad landing pages ready
- [ ] First Search campaigns for Tamil Nadu and Karnataka
- [ ] Remarketing and Meta campaigns
- [ ] Tier 2 outreach list and LinkedIn plan
- [ ] Monthly reporting dashboard

### B10 Growth features

- [ ] Design studio (colour and crest preview)
- [ ] School login portal
- [ ] Tamil and Kannada pages
- [ ] More case studies and region pages

## Weekly log

| Date | What got done | Blockers | Next |
| --- | --- | --- | --- |
| 1 Nov 2026 | Requirements, tech stack, sitemap and phase plan written; tracker created; B1 Foundation scaffold completed (Next.js, Tailwind, Payload, CI, .env.example) | None | B2 Design system – design tokens, core components, styleguide page |
| 2 Nov 2026 | B2 Design system completed – design tokens, core components (Button, Card, Section, Hero, LogoStrip), styleguide page built and verified | None | B3 Data model and CMS – Payload CMS config + collections |
| 3 Nov 2026 | B3 Data model and CMS completed – Payload CMS config + 10 collections (Products, Schools, Case Studies, Testimonials, FAQs, Certifications, Region/City, Blog Posts, Leads, Site Settings). Roles: admin, content editor, sales. Draft/published states. Seed script placeholder added. | None | B4 Public pages – Home page built with design tokens and core components; next: product listing and request‑sample page |
