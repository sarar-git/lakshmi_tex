# Plan: School Sports Wear Website (Requirements, Tech Stack and Expected Outcomes)

A B2B lead-generation website for a school sports wear manufacturer, built to win top-tier schools in Tamil Nadu, Karnataka and across India.

**Product range:** sports wear for schools and institutions: sports T-shirts, shorts, track pants and sports gowns where needed, supplied as individual items or complete kits.

**Target market:** schools and institutions in Tamil Nadu and Karnataka first (school‑direct), then other top schools across India (secondary focus).

**Marketing timing:** promotion starts only after the complete website is built, tested and live. Tracking is built into the site beforehand so data is clean from day one.

This tab is the what: requirements, tech stack and expected outcomes. The step-by-step phases are in the Process tab, and progress is tracked in the Tracker tab.

## 1. Project Overview

**Goal:** Make principals, admin heads and trustees see the company as a credible, organised supplier within 30 seconds, and convert them into sample-kit requests and quote enquiries.

**Type of site:** B2B lead generation (not e-commerce). No public pricing, no cart.

**Primary conversions:**

1. Sample kit request
2. Quote request
3. WhatsApp enquiry
4. Phone call
5. Catalogue download

**Target users:** Principal and management, admin/purchase head, PE/sports head, and indirectly parents.

**Success metrics (first 6 months):**

- Qualified enquiries per month (target set with the business, e.g. 20-40)
- Sample kit requests per month
- Enquiry-to-sample and sample-to-order conversion rate
- Cost per qualified lead from ads
- Organic visibility for "school uniform manufacturer" keywords

## 1A. Expected Outcomes

The website should become a credible, always-on sales channel to schools: a complete lead-generation site at launch, then a steady flow of qualified enquiries from Tamil Nadu and Karnataka, and the first conversions from top schools elsewhere in India. The targets below are proposals to confirm with the business, not forecasts.

**At launch (deliverables):**

- Live, mobile-first site with every page in the sitemap, built on the final stack
- Sample kit, quote, contact, catalogue and factory-visit forms feeding one lead dashboard, with instant email and WhatsApp alerts
- A CMS the team can update without a developer: products, schools, case studies, gallery, FAQs
- Region pages for Tamil Nadu and Karnataka and a Rest of India page
- Tracking, consent and conversion events installed and verified, with campaigns still off
- Handover document and team training

**Quality outcomes:**

- Core Web Vitals passing on mobile and no critical bugs at launch
- Accessibility basics met and consent working before any marketing tag fires
- Every lead traceable to its source, campaign and region

**Business outcomes (targets to confirm):**

| Timeframe | Expected outcome | Measured by |
| --- | --- | --- |
| Launch + 30 days | Site stable, all forms working, first direct and organic enquiries arriving | Lead dashboard, uptime reports |
| Month 3 | First campaigns running in Tamil Nadu and Karnataka; first sample kits sent; cost per lead known | GA4, Google Ads, Meta, CRM |
| Month 6 | Steady monthly flow of qualified enquiries; first orders traced back to the site | Leads by source, sample-to-order rate |
| Month 12 | Site is a primary source of new school leads; new case studies published; Tier 2 schools engaged | Lead share by source, orders by region, case studies published |

Numeric targets for each row (enquiries per month, sample requests, conversion rates) are set with the business once the first month of real data is in.

## 2. Tech Stack (Final Decision)

| Layer | Recommendation | Notes |
| --- | --- | --- |
| Frontend | Next.js (App Router) + TypeScript + Tailwind CSS, Framer Motion for subtle animation | Fast, SEO-friendly, easy to extend with portal later |
| CMS | Payload CMS 3 (inside the Next.js app) | So the team can add schools, case studies and gallery images without a developer |
| Forms and leads | Next.js server actions + PostgreSQL (Neon, Mumbai region) + email and WhatsApp Business API notification | Store every lead; never rely on email alone |
| Hosting | Vercel (Mumbai region) | Use Cloudflare for CDN, security and DNS |
| Images/video | Cloudflare R2 or Cloudinary for media, Next Image (WebP/AVIF), YouTube for video | Keep pages light |
| Analytics | Google Tag Manager, GA4, Microsoft Clarity | Detailed in section 8 |
| Email | Resend for transactional email, plus business domain email | SPF, DKIM and DMARC set up |
| CRM (simple) | Payload admin as the lead dashboard, synced to Zoho CRM or Google Sheets | Every lead tracked to closure |

Final stack: Next.js with Payload CMS in one codebase, PostgreSQL and Vercel in the Mumbai region. One codebase gives fast, SEO-friendly pages, a no-code admin for the team, a built-in lead dashboard, and room to add the school portal and design studio later without a rebuild. WordPress or Webflow would launch sooner but make the lead dashboard, portal and design studio harder to add.

## 3. Site Map

- Home
- About Us (story, leadership, why choose us)
- Products
  - Sports T-shirts (listing and product pages)
  - Sports Shorts
  - Track Pants
  - Sports Gowns (exact item to be confirmed)
  - Complete Sports Kits (house kits, sports day kits, event kits)
  - Browse by sport or use (athletics, football, cricket, basketball, annual sports day, inter-school meets)
- Customisation (crest, house colours, name and number, embroidery vs print vs sublimation)
- Quality and Certifications
- Our Factory
- Schools We Serve
  - Client listing with filters by state, city and board
  - Individual case studies
- Regions We Serve
  - Tamil Nadu (with city pages)
  - Karnataka (with city pages)
  - Rest of India
- Gallery / Portfolio
- How It Works (process and timelines)
- Request Sample Kit
- Get a Quote
- Resources (catalogue download, size guides, care guide, blog)
- FAQs
- Contact
- Ad landing pages (outside the main menu, built before launch and used when campaigns start)
- Legal pages: Privacy Policy, Terms, Cookie Policy
- Phase 2: School Login Portal and Design Studio

## 4. Detailed Feature Requirements

### 4.1 Global elements (every page)

- **Sticky header:** logo, main menu, persistent "Request Sample Kit" button; shrinks on scroll.
- **Mobile menu:** hamburger with large tap targets; call and WhatsApp icons in the mobile header.
- **Floating WhatsApp button** with pre-filled message ("Hi, I'd like to know more about school uniforms for \[School name\]"), appearing on all pages.
- **Click-to-call** on all phone numbers.
- **Footer:** quick links, address with map link, phone, email, WhatsApp, social links, catalogue download, GST number, legal links.
- **Breadcrumbs** on inner pages.
- **Cookie consent banner** (Consent Mode v2 compatible) with accept, reject and manage options.
- **Custom 404 page** with links back to products and contact.
- **Language support:** English at launch; structure ready for Hindi/regional languages if needed.

### 4.2 Home page

1. Hero: full-width photo/video of kids in uniform, one-line value proposition, two buttons (Request Sample Kit, Get a Quote).
2. Trust strip: client logo row plus 3-4 key numbers (years, schools served, uniforms delivered, monthly capacity).
3. Product cards: T-shirts, Shorts, Track Pants and Sports Gowns.
4. Why schools choose us: four icon blocks (shade consistency, wash-tested fabric, crest customisation, on-time delivery).
5. Featured case studies: three cards.
6. Process timeline: enquiry, mockup, sample, approval, production, delivery.
7. Quality and certifications block.
8. One strong testimonial with name, designation, school and photo.
9. Closing call to action with an embedded short quote form.
10. Catalogue download banner.

### 4.3 About Us

- Company story, founding year, leadership with photos
- Mission and values focused on child comfort and school service
- Milestones timeline
- Team and factory numbers (employees, machines, capacity)
- Certifications and memberships
- Call to action to request a sample

### 4.4 Product listing pages (T-shirts, Shorts, Track Pants, Sports Gowns, Complete Kits)

- Grid of product cards with image, name, key fabric line and "View details"
- Filters: product type, sport or use (athletics, football, cricket, basketball, annual sports day, house kits, inter-school meets), school level (primary, middle, senior), style (polo, round neck, dry-fit, piping, side stripe)
- No prices; each card has "Request quote" shortcut
- Short intro text per category (SEO content, 150-250 words)

**Range-specific notes:**

- Shorts: length and inseam options, elastic and drawstring waist, inner lining where needed, pocket options
- Sports gowns: exact item to be confirmed (for example warm-up or cover-up gowns); fabric, length, zip or button front, hood option, size range
- T-shirts and track pants: dry-fit and moisture-wicking options, side stripes and contrast piping, ankle and cuff styles
- Complete kits: pre-built combinations (T-shirt + shorts, T-shirt + track pants) with one size chart and one quote

### 4.5 Product detail page

- Image gallery: front, back, detail close-ups, on-model photos, zoom and lightbox
- Short video where available
- Fabric specification: composition, GSM, finish, features (breathable, moisture-wicking, stretch)
- Customisation options shown visually: collar types, sleeve styles, piping, panels, side stripes, crest placement, embroidery vs print vs heat transfer
- Colour options and shade-consistency statement
- Size chart: age-wise and height-wise, with a "how to measure" guide
- Care instructions and wash-test results
- Minimum order quantity and lead time (as ranges, not prices)
- Buttons: Request this in your school colours, Request sample, Download spec sheet (PDF)
- Related products and "complete the set" suggestion
- Product schema markup for SEO

### 4.6 Customisation page

- Visual breakdown of what a school can customise: crest, colours, collar, sleeves, piping, stripes, house colours, name/number printing, labels
- Examples gallery (before: flat design, after: finished uniform)
- Embroidery vs print vs heat transfer comparison table
- "How to share your crest" guidance (accepted file formats, vector preferred)
- Call to action: Start your design

### 4.7 Quality and Certifications

- Quality process steps: fabric sourcing, lab testing, cutting, stitching, in-line checks, final inspection, packing
- Test standards explained in plain language: colourfastness, shrinkage tolerance, pilling, stitching strength
- Certificates displayed as images with downloadable PDFs (only certifications actually held)
- Skin-safe and azo-free dye statement, if verified
- Photos of the testing lab and checking stations
- Batch consistency promise and how reorders are matched to approved shade

### 4.8 Our Factory

- Factory video tour (2-3 minutes) and photo gallery
- Capacity, machines, departments, workforce
- Compliance and workplace standards
- Location map and an "Arrange a factory visit" button (form)

### 4.9 Schools We Serve and Case Studies

- **Listing page:** grid of school cards (logo, city, student strength, items supplied, years of partnership), filterable by city, board and school type.
- **Case study template:** hero photo, school need, solution, process and timeline, result, quote, gallery, "Request something similar" button.
- **Homepage logo wall:** greyscale logos, colour on hover.
- Written permission stored for every logo, name and photo used.
- Anonymised option ("A leading CBSE school in \[City\], 1,800 students") for clients who prefer privacy.

### 4.10 Gallery / Portfolio

- Masonry grid with lightbox
- Filter chips: T-shirts, Track Pants, House colours, Sports day, Crest embroidery, Detail shots
- Video section with short clips
- Downloadable portfolio PDF
- Each image has alt text and a caption (school, item)

### 4.11 How It Works

- Step timeline: enquiry, consultation, mockup, sample, approval, production, quality check, delivery, after-sales
- Typical timeline for each step in days
- Deadline guidance ("order by X to deliver before session start")
- Call to action at the end

### 4.12 Request Sample Kit (primary conversion page)

**Form fields:** School name, city, contact person name, designation, phone (WhatsApp number), email, approximate student strength, items interested in, preferred colours, delivery address, optional message, optional crest upload.

**Behaviour:**

- Short, friendly, two-step form on mobile
- Inline validation, spam protection (honeypot plus reCAPTCHA or Cloudflare Turnstile)
- Clear promise on the page: what is in the kit and expected arrival time
- Success page with next steps (also used as the conversion trigger for ads)
- Instant email confirmation to the school and instant notification (email plus WhatsApp) to the sales team
- Lead saved to the database/CRM with source, medium and campaign (UTM) captured

### 4.13 Get a Quote

- Shorter form: school name, city, contact, phone, email, items, approximate quantity, required delivery date, notes
- Optional file upload (crest, existing uniform photo, previous order sheet)
- Success page with expected response time
- Separate thank-you URL for tracking

### 4.14 Resources

- Catalogue PDF download (gated with a light form: name, school, phone, email, for lead capture)
- Size guide, fabric guide, care guide
- Blog / articles (e.g. "How to choose a school uniform fabric", "Uniform checklist for new academic year", "House T-shirt ideas for sports day")
- Newsletter signup (optional)

### 4.15 FAQs

- Grouped: ordering, customisation, fabric and safety, delivery, reorders, payments, after-sales
- Accordion layout with FAQ schema markup
- Call to action at the bottom

### 4.16 Contact

- Contact form, phone, WhatsApp, email, address, Google Map embed, business hours
- Separate contact for schools vs general enquiries if applicable
- Social links

### 4.17 Phase 2 features

**Uniform Design Studio:**

- Choose product (T-shirt/track pant), collar, sleeve, piping, stripes
- Pick colours from a palette or enter hex values
- Upload crest and place it on the garment preview
- Save the design and send as a quote request with the preview image attached

**School Login Portal:**

- Secure login for existing school accounts
- Order history and invoices
- Saved specifications, approved shade references and size data
- Quick reorder and reorder request form
- Order status tracking and document downloads (invoice, packing list)

**Parent ordering / retail partner locator (only if the business model needs it):**

- School-specific page showing where parents can buy, or an ordering portal with size selection and online payment

### 4.18 Regional and Multilingual Requirements

- Region landing pages for Tamil Nadu and Karnataka, each with local client logos, regional case studies, delivery timelines and a regional WhatsApp and phone contact
- City pages (for example Chennai, Coimbatore, Madurai, Tiruchirappalli, Salem, Bengaluru, Mysuru, Mangaluru, Hubballi) created only where the business can genuinely serve, each with unique content
- A Rest of India page for top schools outside the two home states: outstation sampling process, dispatch and transit timelines, logistics partners, and how mockups and approvals work remotely
- State and city captured as required fields on every form, plus a school board field (CBSE, ICSE, State Board, IB, Cambridge) to segment leads
- Lead routing rules so leads from each region reach the right salesperson automatically
- Tamil and Kannada versions of the key pages (Home, Products, Sample Request, Contact) planned for Phase 6; English at launch, with the structure ready (hreflang, translated slugs) so they can be added without rework
- Google Business Profile for each office or showroom location
- One shipping and service-area statement, reused across pages

## 5. Admin and Backend Requirements

- Role-based admin login (admin, content editor, sales)
- Manage products, categories, schools, case studies, gallery, testimonials, FAQs, blog posts and certifications without code
- Lead dashboard: all form submissions with status (new, contacted, sample sent, quote sent, won, lost), assigned owner and notes
- Export leads to CSV/Excel
- Automatic notifications: email and WhatsApp to the sales team on every new lead
- Auto-reply email templates for sample and quote requests
- Follow-up reminders (e.g. 2 days after sample dispatch)
- Media library with image optimisation
- SEO fields per page (title, meta description, Open Graph image, canonical URL)
- Redirect manager
- Activity log and automated backups

## 6. Non-Functional Requirements

**Performance:**

- Largest Contentful Paint under 2.5s on mobile, CLS under 0.1, INP under 200ms
- Images in WebP/AVIF, lazy loading, CDN delivery
- Total page weight under 2 MB for key pages

**Responsive and accessibility:**

- Mobile-first, tested on common Android and iOS devices and browsers
- WCAG 2.1 AA basics: contrast, alt text, keyboard navigation, focus states, form labels

**Security:**

- HTTPS everywhere, HSTS, security headers
- Spam and bot protection on all forms
- Input validation and sanitisation, file upload type and size limits
- Rate limiting on forms and login
- Regular updates and automated backups

**Compliance and privacy:**

- Privacy policy covering data collected via forms, analytics and ads
- Cookie consent with Google Consent Mode v2 and blocking of marketing tags until consent where required
- Compliance with the Digital Personal Data Protection Act, 2023 (India) and, if targeting overseas visitors, GDPR
- Data retention policy for lead data
- Special care: the site is about children's products, but the audience is adults; never collect data from children and do not use child imagery in ways that identify individuals without written parental or school permission. Observe ad-platform policies on child-related content (see section 8).

**SEO foundations:**

- Clean URLs, XML sitemap, robots.txt, canonical tags
- Structured data: Organization, LocalBusiness, Product, FAQ, Breadcrumb, Review (only genuine reviews)
- Open Graph and Twitter cards so shared WhatsApp links look good
- Image alt text and descriptive file names
- Internal linking between products, case studies and process pages

## 7. Content and Asset Requirements

Content is the most common cause of delay, so start collecting it in Phase 0.

- Logo files (vector), brand colours, fonts
- Professional photo shoot: products on models, flat lays, detail shots, kids in school and sports settings (with permissions), factory and team
- Factory video (2-3 min) plus short clips for the hero and gallery
- Client logos, permissions, testimonials, case-study data
- Certificates and test reports
- Product specifications (fabric, GSM, sizes, colours, lead times, MOQ ranges)
- Size charts
- Company story, team bios
- Catalogue PDF and portfolio PDF
- Copy for every page (headlines, descriptions, FAQs)

## 8. Analytics, Ads and Tracking Setup

Tracking is built and tested before launch; campaigns start only after the complete site is live. The first campaigns focus on Tamil Nadu and Karnataka, then extend to top schools across India (section 8.9).

### 8.1 Foundation (do before running any ads)

**Accounts to create and verify under the company's own ownership (not a freelancer's):**

- Google Tag Manager container
- Google Analytics 4 property
- Google Search Console (domain property)
- Google Ads account, linked to GA4 and Search Console
- Google Business Profile
- Meta Business Manager, Facebook Page, Instagram business account, Meta Pixel (dataset), and domain verification
- Microsoft Clarity (free heatmaps and recordings)
- Optional: LinkedIn Campaign Manager with Insight Tag; Bing Webmaster Tools and Microsoft Advertising

**Cookie consent and privacy:**

- Consent banner integrated with GTM using Google Consent Mode v2 (ad\_storage, analytics\_storage, ad\_user\_data, ad\_personalization)
- Privacy policy updated to mention analytics, remarketing and data sharing with ad platforms
- Marketing tags fire according to consent status

### 8.2 Google Tag Manager

- Install one GTM snippet site-wide; manage all other tags inside it
- Use a consistent data layer for events and form data (no personal data in the data layer unless hashed for enhanced conversions)
- Maintain naming conventions and version notes; use workspaces and preview mode before publishing

### 8.3 Google Analytics 4

**Configuration:**

- One web data stream; enable enhanced measurement (scrolls, outbound clicks, file downloads, video engagement)
- Filter internal traffic (office and team IPs) and developer traffic
- Set data retention to 14 months
- Link to Google Ads and Search Console
- Define cross-domain tracking if any form or portal sits on another domain

**Key events (mark as conversions/key events):**

| Event | Trigger |
| --- | --- |
| generate\_lead\_sample | Sample kit form submitted (thank-you page or form success) |
| generate\_lead\_quote | Quote form submitted |
| generate\_lead\_contact | Contact form submitted |
| catalogue\_download | Catalogue form submitted or PDF downloaded |
| whatsapp\_click | Click on any WhatsApp button or link |
| phone\_click | Click on any tel: link |
| email\_click | Click on mailto: link |
| factory\_visit\_request | Factory visit form submitted |
| design\_studio\_start / design\_studio\_submit | Phase 2 |

**Supporting events:** form\_start, form\_abandon (field where users drop), video\_play and completion (factory video), gallery\_filter\_used, product\_view with product name, case\_study\_view with school name, scroll depth 50% and 90%, cta\_click with button label and location.

**Custom dimensions to register:** form\_name, product\_name, school\_city, cta\_location, lead\_type, traffic\_source\_detail.

**Audiences:** all visitors, product viewers, case-study viewers, form starters who did not submit, catalogue downloaders, converted leads (for exclusion).

**Reports to set up:** acquisition by channel, landing page performance, lead events by source/medium/campaign, device split, city-level traffic, funnel exploration from landing to lead.

### 8.4 Google Ads

**Account setup:**

- Conversion actions imported from GA4 or created via GTM: sample request (primary, highest value), quote request (primary), contact (primary), catalogue download (secondary), WhatsApp and phone clicks (secondary). Keep the primary set small and meaningful so bidding optimises for real leads.
- Assign conversion values reflecting lead quality (e.g. sample request higher than catalogue download)
- Enable **Enhanced Conversions for Leads** (hashed email/phone from the form)
- Set up **call tracking** (call extensions and website call conversions) with a minimum call duration
- Offline conversion import: upload CRM stages (qualified, sample sent, order won) using the Google Click ID captured in a hidden form field, so Google learns which leads become customers
- Add the global site tag via GTM; use the Conversion Linker tag

**Campaign structure (suggested):**

1. **Search, high intent:** keywords such as school sports uniform manufacturer, school sports wear supplier, house t-shirt manufacturer for schools, school track pant manufacturer, sports day t-shirts bulk, custom school sports kit, plus city modifiers (Chennai, Coimbatore, Bengaluru and so on)
2. **Search, brand:** company name (cheap and protects the brand)
3. **Performance Max (later):** only after conversion tracking is solid and enough lead data exists, with proper audience signals and asset groups
4. **Remarketing (Display and YouTube):** visitors who viewed products or case studies but did not enquire, using the factory video and case studies

**Practices:**

- Start with Search only and exact/phrase match; add broad match only with strong conversion data and smart bidding
- Build a long negative keyword list (e.g. retail, wholesale for resellers, free, jobs, second hand, fabric only, stitching jobs, online shopping terms if not relevant)
- Geo-target the actual service area; use presence targeting, not interest
- Schedule budgets higher in the pre-session season (typically Feb to June and November to January, depending on your schools' academic calendar)
- Dedicated landing pages per theme (school uniform manufacturer, sports T-shirts, track pants) that match the ad's promise
- Ad assets: sitelinks (Request sample, Schools we serve, Quality, Process), callouts, structured snippets, call and location assets, image assets
- Review search terms weekly and refine
- Start with manual CPC or maximise conversions with a target, then move to target CPA once there are roughly 30 or more conversions a month

**Policy considerations for Google Ads:**

- The ads promote a business to schools, not to minors. Avoid child-targeted audiences; Google restricts personalised advertising for users known to be under 18, and restricts sensitive categories.
- Do not use images that identify individual children without permission; use school-approved or consented photos.
- Claims must be accurate (certifications, delivery times, "best", "No. 1" need substantiation).
- Landing page must have a working privacy policy, clear business contact details and fast loading.

### 8.5 Meta Ads (Facebook and Instagram)

**Setup:**

- Business Manager with the Page, Instagram account, ad account and pixel (dataset) assigned; domain verified
- Install Meta Pixel through GTM and set up **Conversions API** (server-side) for better match quality and resilience to browser restrictions; use the same event\_id for deduplication between pixel and server events
- Standard events: Lead (sample, quote, contact), Contact (WhatsApp/phone click), ViewContent (product and case study), plus custom events for catalogue download
- Enhanced matching with hashed email and phone, subject to consent
- Aggregated Event Measurement: prioritise the Lead event

**Campaign ideas for B2B school selling:**

- **Lead generation / traffic to site:** target admins, principals and school management via job-title and interest signals, plus geographic targeting by city; Meta's detailed targeting is limited, so rely on creative and location
- **Click-to-WhatsApp campaigns:** a strong fit for Indian school admins
- **Lookalike audiences:** built from uploaded customer/lead lists (schools you served)
- **Remarketing:** site visitors, video viewers (factory video), Instagram and Facebook page engagers
- **Creative:** short reels showing fabric tests, factory process, kids in motion at school sports day, case-study spotlights and testimonials from principals

**Policy considerations for Meta:**

- Meta restricts ad targeting options for users under 18; the target audience for these ads is adults, so keep age targeting 25+ or 18+
- Do not target or exploit children; use consented imagery
- Follow Meta's advertising standards on claims, before-and-after content, personal attributes and landing page quality
- Make sure the landing page matches the ad and loads quickly

### 8.6 Other ad and discovery channels

| Channel | Use | Notes |
| --- | --- | --- |
| LinkedIn Ads | Reach principals, administrators, trustees, school chains | Higher cost per click, strong for decision makers; install Insight Tag; use Lead Gen Forms or the site |
| Microsoft/Bing Ads | Cheap extra search volume | Import campaigns from Google Ads |
| YouTube Ads | Factory video and case-study stories | Use for remarketing and awareness before uniform season |
| Google Business Profile | Local pack, reviews, photos, posts | Collect genuine reviews from client schools |
| IndiaMART / TradeIndia / B2B directories | Extra discovery for manufacturers | Keep profile consistent with the website |
| WhatsApp Business | Catalogue, quick replies, labels for lead stages | Use a verified business profile; follow opt-in rules for broadcasts |
| Email marketing | Seasonal reminders to past and prospective schools | Only to opted-in or legitimately obtained contacts |

**Ad standards to follow everywhere:**

- Truthful, substantiated claims; no misleading before-and-after, no fake scarcity
- Respect child-safety rules: adults as the audience, no targeting by children's attributes, consented imagery only
- Transparent contact details and privacy policy on the landing page
- Use UTM parameters on every ad link (utm\_source, utm\_medium, utm\_campaign, utm\_term, utm\_content), a consistent naming convention, and capture them (with gclid, fbclid) in hidden form fields so every lead is traceable to its campaign
- Comply with India's Advertising Standards Council of India (ASCI) guidelines and applicable law

### 8.7 Landing pages for ads

Create separate, focused landing pages rather than sending ads to the homepage:

- /school-sports-wear-manufacturer (main offer, sample kit)
- /sports-house-tshirts
- /school-track-pants
- City pages for the strongest local markets (e.g. /school-sports-wear-manufacturer-coimbatore, /school-sports-wear-manufacturer-bengaluru), with unique content, not copied text

Each has: clear headline matching the ad, short proof section (logos, numbers, a testimonial), product visuals, a single form, WhatsApp and call buttons, minimal navigation, and fast load.

### 8.8 Tracking QA checklist

- Each form submission fires exactly one conversion per tool (no duplicates)
- GA4 DebugView shows events with correct parameters
- Meta Events Manager shows Lead events with deduplication between browser and server
- Google Ads conversion status shows "Recording conversions"
- Consent banner blocks marketing tags until consent and fires them after
- UTM and click IDs stored with each lead in the CRM
- Internal traffic is excluded
- Cross-device checks on iOS Safari and Android Chrome

### 8.9 Regional Targeting: Tamil Nadu, Karnataka and Rest of India

**Tier 1: Tamil Nadu and Karnataka (home markets)**

- Google Ads geo-targeting for the two states, then city-level campaigns for the biggest school clusters (for example Chennai, Coimbatore, Bengaluru) so budgets and messages can differ by city
- Region and city pages from section 4.18 used as ad destinations
- Keywords with local phrasing and spellings, plus Tamil and Kannada keyword sets once those pages exist
- Meta and Instagram ads geo-targeted by city, with click-to-WhatsApp as the main response path
- Budgets aligned to each region's academic and sports calendar; confirm timing with client schools

**Tier 2: Top schools across India**

- A named target list of top schools (by board, fee band and city), reached through LinkedIn matched audiences, direct outreach and sample kits
- Google Ads with broader geo-targeting only on high-intent terms, so budget is not spread thin
- Presence at school association meets, principals' conferences and sports events, with the site as the follow-up destination
- Separate reporting by region so cost per qualified lead can be compared between Tier 1 and Tier 2

## 9. Budget and Resource Considerations

Costs vary widely; plan for these categories:

- Design and development (or a template-based build if speed matters)
- Photo and video production (the highest-impact spend for this audience)
- Copywriting and content
- Hosting, domain, CDN, email and CMS/CRM subscriptions
- Monthly ads budget (separate for Google, Meta and LinkedIn) plus a management fee if outsourced
- Ongoing maintenance and content updates

**Suggested team roles:** project owner (business side), designer, developer, content writer, photographer/videographer, SEO and ads specialist, and a sales owner responsible for lead follow-up.

## 10. Risks and How to Handle Them

| Risk | Mitigation |
| --- | --- |
| Content and photos delayed | Start Phase 0 asset collection immediately; schedule the shoot early |
| Client permissions not granted | Use anonymised case studies; get written approvals in advance |
| Poor lead follow-up wastes ad spend | Define a response SLA and CRM process before launch |
| Tracking set up incorrectly | Plan events upfront and run the QA checklist before spending on ads |
| Slow mobile site | Optimise images and test performance throughout the build |
| Ad account suspension or policy issues | Keep claims accurate, avoid child-targeting, keep policies and landing pages compliant |
| Over-building at launch | Launch the marketing site first; add the studio and portal in Phase 6 |
