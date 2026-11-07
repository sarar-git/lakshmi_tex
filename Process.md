# Process: Phase-by-Phase Implementation

This tab covers how and when the site gets built: project phases, the OpenCode build plan, post-launch steps and the launch checklist. Requirements, tech stack and expected outcomes are in the Plan tab, and progress is in the Tracker tab. References marked Plan § point to sections of the Plan tab.

## 1. Project Phases

Timelines are indicative for a small team; adjust to your resources.

**Marketing gate:** no advertising or promotion begins until Phase 5 is signed off and the complete site is live. Tracking (Plan §8) is installed and tested in Phases 3 and 4 so data is clean from the first visit, but campaigns are switched on only after launch.

### Phase 0: Discovery and Planning (Week 1-2)

- [x] Confirm business model: school-direct (lead generation), service area and target school segment
- Competitor review of 8-10 uniform manufacturer sites
- Finalise sitemap, features and success metrics
- Choose tech stack, domain name and hosting
- Begin content and asset collection; schedule the photo and video shoot
- Collect client permissions and testimonials
- Decide tracking plan (events and conversions) before design

**Deliverables:** approved scope, sitemap, content checklist, shoot plan, tracking plan.

### Phase 1: Design (Week 3-5)

- Brand direction: palette, typography, photography style
- Wireframes for all key pages (mobile and desktop)
- High-fidelity designs for Home, Product, Case Study, Sample Request and Contact
- Design system: buttons, forms, cards, spacing
- Review and approval

**Deliverables:** approved design files and component library.

### Phase 2: Core Build (Week 5-9)

- Set up repository, environments (development, staging, production)
- Build global layout, header, footer, WhatsApp button
- Build CMS models and templates: products, schools, case studies, gallery, FAQs, testimonials
- Build all static pages and listing/detail pages
- Build forms (sample, quote, contact, catalogue download) with lead storage, notifications and auto-replies
- Build the admin lead dashboard
- Implement SEO fundamentals, sitemap and schema

**Deliverables:** working staging site with all Phase 1 pages and forms.

### Phase 3: Content Population, Tracking and Integration (Week 8-10)

- Add real content, photos, videos and documents
- Implement Google Tag Manager, GA4, Meta Pixel and Conversions API, Google Ads tags, Clarity and consent banner (Plan §8)
- Connect forms to CRM and notification channels
- Set up business email and email deliverability
- Set up thank-you pages and conversion events

**Deliverables:** fully populated staging site with tested tracking.

### Phase 4: Testing and QA (Week 10-11)

- Functional testing of all forms, file uploads, emails and WhatsApp notifications
- Cross-browser and device testing
- Performance testing (Lighthouse, PageSpeed Insights, WebPageTest)
- Accessibility and security checks
- Tracking validation: GTM preview, GA4 DebugView, Meta Pixel Helper, Google Tag Assistant, test conversions end to end
- SEO checks: titles, meta descriptions, canonical tags, redirects, sitemap, robots
- Content proofreading
- User testing with 3-5 people similar to school admins

**Deliverables:** QA report with all critical issues resolved.

### Phase 5: Launch (Week 12)

- Final backup and production deployment
- DNS, SSL, CDN and redirects live
- Submit sitemap to Google Search Console and Bing Webmaster Tools
- Verify domain in Meta Business Manager
- Re-test all forms and conversions on the live site
- Announce through LinkedIn, WhatsApp to existing clients and email signatures

**Deliverables:** live site, handover document, admin training.

### Phase 6: Growth Features (Month 4-6)

- Uniform Design Studio (colour and crest preview)
- School login portal with order history and quick reorder
- More case studies and blog content
- Regional language pages if needed
- A/B tests on hero, forms and calls to action

## 2. Build Plan with OpenCode

The site is built in ten build phases, each ending in something you can open and check. This is the engineering view of the project phases above: the order in which you and OpenCode actually build it. A solo builder using OpenCode can expect roughly 8 to 10 weeks to launch, most of it waiting on real content rather than code.

| Build phase | Goal | Maps to | Indicative time | Done when |
| --- | --- | --- | --- | --- |
| B1 Foundation | Repo, stack, CI, rules file, requirements in the repo | Phase 2 | 2-3 days | Blank app builds and deploys to a preview URL |
| B2 Design system | Tokens, fonts, core components, layout shell | Phases 1-2 | 4-5 days | A /styleguide page is approved on mobile and desktop |
| B3 Data model and CMS | Payload collections, roles, seed data | Phase 2 | 4-5 days | Team can add a product, school and case study in the admin |
| B4 Public pages | Every page in the sitemap, driven by CMS data | Phase 2 | about 2 weeks | All sitemap pages render from CMS data, on mobile first |
| B5 Lead capture | Forms, storage, notifications, lead dashboard | Phase 2 | about 1 week | A test lead reaches the database, email and WhatsApp within a minute |
| B6 SEO and performance | Metadata, schema, sitemap, speed, accessibility | Phases 2-4 | 4-5 days | Core Web Vitals and Lighthouse targets met |
| B7 Tracking and consent | GTM, consent banner, GA4, Meta, Google Ads tags | Phase 3 | 4-5 days | Every event verified in GA4, Meta Events Manager and Google Ads |
| B8 Content and QA | Real content in, automated and manual testing | Phases 3-4 | 2-3 weeks | QA report with zero critical bugs |
| B9 Launch | Production deploy, DNS, monitoring, backups | Phase 5 | 2-3 days | Live site passes smoke tests; marketing still switched off |
| B10 Growth features | Design studio, school portal, Tamil and Kannada pages | Phase 6 | after launch | Each shipped as its own release |

### How to work with OpenCode

OpenCode is an open-source, terminal-first coding agent that works with many model providers. It ships with two built-in agents: Plan, which analyses and proposes without editing files, and Build, which does the actual development work ([agents documentation](https://opencode.ai/v2/docs/agents/)). Use them in that order for every task.

**The loop for every task (about 30 to 90 minutes each):**

1. **Plan:** in the Plan agent, point it at the requirement (OpenCode lets you reference files with @) and ask for files, components and data needed, with no edits.
2. **Review the plan:** fix wrong assumptions before any code exists.
3. **Build:** switch to the Build agent and ask it to implement the plan, then run lint, typecheck and build.
4. **Verify:** open the page in the browser yourself, check mobile width, read the diff.
5. **Commit:** one task per commit; update docs/progress.md with what is done and what is next.

**Set up once, before B1:**

- Export the Plan tab as Markdown and save it in the repo as docs/requirements.md, so every task can reference the exact section.
- Generate the project rules file (AGENTS.md) with OpenCode's /init after the first scaffold, then replace its contents with the starter below.
- Pick a strong model for the Plan agent and a capable, cheaper one for routine Build work; switch up when a task is hard.
- Create custom slash commands in .opencode/commands/ for things you repeat: a page scaffold, an SEO check, a pre-commit check, a section-by-section requirements review.
- Optionally add a reviewer subagent in .opencode/agents/ that reads diffs and reports problems without editing.
- Create these accounts early because approvals take days: Vercel, Neon, Cloudflare, Resend, Meta Business (WhatsApp Business API approval is the slowest), Google Tag Manager, GA4, Google Ads.

**Starter AGENTS.md:**

```markdown
# Project: School sports wear B2B website
Stack: Next.js (App Router, TypeScript), Tailwind CSS, Payload CMS 3, PostgreSQL, Vercel.
Source of truth: docs/requirements.md. Read the relevant section before every task.

## Commands
- Install: pnpm install
- Dev: pnpm dev
- Lint: pnpm lint
- Typecheck: pnpm typecheck
- Test: pnpm test
- Build: pnpm build

## Rules
- Small, focused changes; one task per commit with a clear message.
- Run lint, typecheck and build before saying a task is done.
- Mobile first. Use design tokens only; no hard-coded colours or fonts.
- Never invent client names, logos, certifications, statistics or testimonials. Use clearly marked placeholders.
- No secrets in code. Use environment variables and keep .env.example current.
- Every form is validated on the server and saved as a Lead.
- Every public page has title, meta description, canonical URL and structured data where relevant.
- Marketing tags must not fire before consent.
- Do not add dependencies without saying why.
- Ask before changing the data model or deleting files.
```

### B1. Foundation (2-3 days)

- Create the Git repository and branch rules (main plus one branch per build phase).
- Scaffold Next.js with TypeScript and Tailwind, then add Payload CMS inside the same app, connected to a local or Neon PostgreSQL database.
- Add linting, formatting, type checking and a GitHub Actions workflow that runs lint, typecheck and build on every push.
- Add docs/requirements.md and docs/progress.md, then write AGENTS.md.
- Connect the repo to Vercel (Mumbai region) for preview deployments; set up environment variables and .env.example.
- Example prompt (Plan agent): Read @docs/requirements.md sections 2 and 6. Propose the folder structure, environment variables and CI workflow for this stack. Do not edit files.
- **Done when:** a blank app builds in CI and deploys to a preview URL.

### B2. Design system (4-5 days)

- Provide inputs first: logo, brand colours, two font choices, and 5 to 10 reference sites or screenshots you like.
- Have OpenCode define design tokens (colours, type scale, spacing, radius, shadows) in one file, and wire them into Tailwind.
- Build core components: Button, Card, Section, Container, Hero, LogoStrip, StatBlock, ProductCard, CaseStudyCard, Accordion, Tabs, Gallery with lightbox, Timeline, FormField, Toast, Badge.
- Build the layout shell: sticky header with Request Sample button, mobile menu, footer, floating WhatsApp button, breadcrumbs, 404 page.
- Create a /styleguide page showing every component, so you can review the system in one place.
- **Done when:** the styleguide is approved on a phone and a laptop.

### B3. Data model and CMS (4-5 days)

- Define Payload collections from Plan §4 and §5: Products (type, fabric specification, sizes, customisation options, images, SEO fields), Schools (logo, city, state, board, strength, items supplied, permission flag), Case Studies, Testimonials, Gallery Items, FAQs, Certifications, Regions and Cities, Blog Posts, Leads, Media and Site Settings (phones, WhatsApp number, address, GST).
- The Lead collection stores form type, all fields, state, city, board, UTM values, gclid, fbclid, status, owner, notes and timestamps.
- Set up roles: admin, content editor, sales; sales sees leads only.
- Add validation, sensible admin labels and drafts versus published states.
- Write a seed script with clearly marked placeholder content so every page has something to render.
- Example prompt (Plan agent): Using @docs/requirements.md sections 4 and 5, propose the Payload collections and fields. List relationships and what each editor role can see. Do not edit files.
- **Done when:** the team can add a product, a school and a case study in the admin and see them saved.

### B4. Public pages (about 2 weeks)

Build in this order so the most important pages are ready first, one page per task:

1. Home
2. Product listing pages and product detail template
3. Request Sample Kit and Get a Quote pages (layout only; the logic comes in B5)
4. Customisation, Quality and Certifications, Our Factory, About
5. Schools We Serve listing and case study template
6. Region pages (Tamil Nadu, Karnataka, Rest of India) and city page template
7. Gallery, How It Works, Resources, FAQs, Contact
8. Privacy Policy, Terms, Cookie Policy
9. Ad landing page templates (built now, used when campaigns start)

Rules for every page: render from CMS data, build as server components with revalidation, mobile first, accessible headings and focus states, and no hard-coded copy that the team should be able to edit.

- **Done when:** every page in the sitemap renders from CMS data and passes a manual check at phone width.

### B5. Lead capture and notifications (about 1 week, can overlap B4)

- Build forms for sample kit, quote, contact, catalogue download and factory visit, with a shared form framework and server-side validation.
- Add spam protection (honeypot plus Cloudflare Turnstile), rate limiting, and file upload limits for crests.
- Capture UTM values, gclid and fbclid on landing and pass them into hidden fields.
- Save every submission as a Lead, then send an email to the sales team and an auto-reply to the school through Resend.
- Send a WhatsApp notification to the sales team through the WhatsApp Business API; keep email as a fallback until the API approval comes through.
- Add lead routing by state and city, thank-you pages with their own URLs, and a lead dashboard view with status filters and CSV export.
- **Done when:** a test lead from a phone reaches the database, the inbox and WhatsApp within a minute, and a failed notification is logged rather than lost.

### B6. SEO, performance and accessibility (4-5 days)

- Per-page metadata and canonical tags, XML sitemap, robots.txt, redirect handling, and Open Graph images so shared WhatsApp links look right.
- Structured data: Organization, LocalBusiness, Product, FAQ, Breadcrumb.
- Optimise images, fonts and scripts; check Lighthouse and Core Web Vitals on a mid-range phone.
- Run automated accessibility checks and fix keyboard, contrast and label issues.
- **Done when:** the targets in Plan §6 are met on the key pages.

### B7. Tracking and consent (4-5 days)

- Install Google Tag Manager once; build a consent banner with Google Consent Mode v2 and make marketing tags wait for consent.
- Push the events in Plan §8.3 to the data layer from one shared helper, so naming stays consistent.
- Add GA4, Meta Pixel with a server-side Conversions API route (using the same event ID for deduplication), Google Ads conversion tags, enhanced conversions and Microsoft Clarity.
- Store click IDs with each lead so offline conversions can be uploaded later.
- Keep campaigns off: the tags are installed and tested, but no ads run until the site is live.
- **Done when:** the tracking QA checklist in Plan §8.8 passes.

### B8. Content and QA (2-3 weeks, mostly content work)

- Enter real content: product specifications, size charts, photos, videos, certificates, client logos with permissions, case studies, FAQs.
- Have OpenCode write end-to-end tests for the main journeys (browse, request sample, request quote, WhatsApp click, catalogue download), then run them on every build.
- Run a manual test pass on at least one iPhone and two Android phones, plus Chrome, Safari and Edge.
- Review security: form abuse, file uploads, admin access, headers, secrets, backups.
- Ask a reviewer subagent or a fresh OpenCode session to review the whole diff of each phase for bugs and missing requirements, then fix what it finds.
- Ask 3 to 5 people who resemble school admins to try the site and report what confused them.
- **Done when:** the QA report shows no critical bugs and content is approved.

### B9. Launch (2-3 days)

- Create the production database and environment variables; turn on automated database backups.
- Point the domain through Cloudflare, confirm SSL, and set redirects from any old domain.
- Add uptime monitoring and error tracking, and decide who receives alerts.
- Submit the sitemap to Google Search Console and Bing Webmaster Tools; verify the domain in Meta Business Manager.
- Run smoke tests on the live site: every form, every notification, consent banner, tracking events.
- Go live. Marketing stays off until this checklist passes and you sign off.
- **Done when:** the live site passes all smoke tests and the launch readiness checklist (section 4 of this tab) is complete.

### B10. Growth features (after launch)

Ship each as a separate release, in this order of value:

1. Design studio: colour and crest preview that submits as a quote request
2. School login portal: order history, saved specifications, quick reorder
3. Tamil and Kannada versions of the key pages
4. More case studies, blog content and region pages as clients are added

### Guardrails when an AI agent writes most of the code

- Read every diff. Treat OpenCode as a fast junior developer: it needs clear tasks and review.
- Keep tasks small. One page or one feature per session gives better results than a whole phase at once.
- Never let it invent facts: client names, certifications, delivery claims and statistics must come from you.
- Keep secrets out of the repo and out of prompts; use environment variables.
- Commit often so any bad change can be undone quickly.
- Test on a real phone before approving any phase.
- When a session gets long or confused, start a fresh one and point it at docs/requirements.md and docs/progress.md.

## 3. Post-Launch Steps

### 3.1 First 48 hours

- Monitor uptime, form submissions, error logs and email delivery
- Submit a test lead on every form; confirm notification and auto-reply
- Check Search Console for indexing and coverage; request indexing of key pages
- Confirm GA4 real-time, Meta Pixel and Google Ads tags are receiving data
- Fix any critical bugs immediately

### 3.2 First 30 days

- Weekly review of traffic, lead sources, form completion rate and page speed
- Review Microsoft Clarity recordings and heatmaps to see where users struggle
- Google Business Profile: complete the profile, add photos and posts, request reviews from client schools
- Publish 2-4 blog posts or case studies
- Begin outreach: LinkedIn messages and emails to school admins with the site and sample offer
- Launch small-budget Search and remarketing campaigns; review search terms and negatives twice a week
- Set up a monthly reporting dashboard (Looker Studio) combining GA4, Google Ads, Meta and CRM data

### 3.3 Months 2-3

- A/B test hero message, form length, call-to-action wording and page layouts
- Add more case studies and testimonials as new deliveries complete
- Begin offline conversion imports from CRM to Google Ads and refine Meta audiences with customer lists
- Build links: directory listings, school association pages, press or industry mentions, supplier partnerships
- Improve pages that rank on page 2 with additional content and internal links
- Review Core Web Vitals in Search Console and fix issues

### 3.4 Ongoing (monthly and quarterly)

**Monthly:**

- Security and plugin/dependency updates; verify backups
- Check broken links, form functionality and certificate expiry
- Report: leads, cost per lead, cost per qualified lead, sample-to-order rate, top landing pages, top keywords
- Refresh seasonal creatives and landing page offers before uniform season

**Quarterly:**

- SEO audit and content plan
- Competitor review
- Conversion rate optimisation roadmap
- Review privacy policy and consent setup for changes in regulations or platform rules
- Plan Phase 6 features (design studio, portal) based on data and client feedback

### 3.5 Sales process around the website

- Respond to every lead within one hour during working hours (speed strongly improves conversion)
- Standard follow-up sequence: call and WhatsApp on day 0, sample dispatch confirmation, follow-up after delivery, quote follow-up on day 3 and day 7
- Track every lead's stage in the CRM and record the reason for lost deals
- Send a post-order feedback request and ask for a testimonial and permission to publish a case study
- Maintain a seasonal calendar so outreach to schools starts before their purchase decisions

## 4. Launch Readiness Checklist

- [ ] All pages complete, proofread and approved
- [ ] Real photos and videos in place
- [ ] All forms tested; notifications and auto-replies working
- [ ] GTM, GA4, Meta Pixel, Conversions API and Google Ads tags verified
- [ ] Consent banner working; privacy policy live
- [ ] Sitemap, robots.txt, canonical tags and schema in place
- [ ] Core Web Vitals passing on mobile
- [ ] Search Console and Bing Webmaster verified; sitemap submitted
- [ ] Google Business Profile and Meta Business assets verified
- [ ] CRM and lead follow-up process ready
- [ ] Backups and monitoring enabled
- [ ] Admin team trained

## 5. Next Steps

1. Confirm business model, service area and target school segment
2. Start the content and photo/video shoot plan
3. Choose the model provider in OpenCode and begin B1
4. Define the tracking plan and create all marketing accounts under company ownership

## 6. Editorial Redesign Execution (7 Nov 2026)

Stages run for the master-brief redesign (phases R1-R8 in the Plan tab):

1. **Design system first** - added the ivory/champagne editorial palette and Cormorant Garamond to Tailwind, remapped the existing industrial token names (steel/mist/ink/graphite/haze) to editorial values so old markup restyled without mass edits, then built shared primitives in `components/editorial.tsx`.
2. **Global chrome** - rewrote navigation and footer to the editorial style with only links that resolve to real pages; accessible mobile dialog menu (aria-expanded, Escape to close).
3. **Homepage** - rebuilt as the nine brief sections in `components/home.tsx`; `pages/index.tsx` now loads the real catalogue via getStaticProps for the featured-product editorial.
4. **Catalogue restyle** - serif typography + token remap across poster/catalogue/detail components; filtering and sample CTAs untouched.
5. **New pages** - /collections (data-driven from `lib/collections.ts`), /customization, /manufacturing, /about, /contact; sitemap rewritten to live routes only.
6. **Sample Kit** - className-only replacements in the form page; fields, validation, submit handler, payload and API never edited (re-verified: 22 fields, required-field blocking works).
7. **Verification** - served the site through a temporary viewport harness (`public/__viewport-harness.html`, same-origin iframe pinned to each test width) and drove it with the browser tools: six widths per route for horizontal scroll/overflow, computed-style checks for the serif face, console error reads, link fetches, and click tests for the category filter, mobile menu and product acknowledgement. Harness deleted after use.
8. **Build and push** - `npm run build` (22 pages) green; docs updated; changes committed and pushed per phase rule.

PowerShell note: no `&&` chaining - separate commands or `;` are used for sequential steps.
