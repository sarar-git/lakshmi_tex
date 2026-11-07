import React from "react";
import { Navigation } from "./navigation";
import { Footer } from "./footer";
import {
  DecorativeLetter,
  EditorialHeading,
  Eyebrow,
  ImageFrame,
  PrimaryCTA,
  Rule,
  SecondaryCTA,
} from "./editorial";
import EditorialProductPoster from "./EditorialProductPoster";
import {
  SPORTSWEAR_COLLECTIONS,
  collectionGarments,
} from "../lib/collections";
import {
  BULK_PRICING_LABEL,
  CATEGORY_COPY,
  PRODUCT_CATEGORIES,
  assignVariant,
  type Product,
} from "../lib/products";

/**
 * Editorial homepage (master brief section 6, sections 01–09).
 *
 * Imagery: the repository has no photography yet, so every intended photo
 * slot renders a labeled placeholder frame documenting the required asset
 * (master brief section 13). Product data comes from the real catalogue.
 */

export interface HomeProps {
  /** Featured products for section 04 (from getStaticProps). */
  products?: Product[];
}

/* ------------------------------------------------------------------ */
/* Section 03 data — real product categories only                      */
/* ------------------------------------------------------------------ */

const CATEGORY_FEATURES: { category: (typeof PRODUCT_CATEGORIES)[number]; frame: string }[] = [
  { category: "T‑shirt", frame: "SPORTS T-SHIRTS" },
  { category: "Shorts", frame: "SPORTS SHORTS" },
  { category: "Track Pants", frame: "TRACK PANTS" },
  { category: "Sports Gown", frame: "SPORTS GOWNS" },
  { category: "Complete Kit", frame: "COMPLETE KITS" },
];

/* ------------------------------------------------------------------ */
/* Section 05 data — customization possibilities                       */
/* ------------------------------------------------------------------ */

const CUSTOMIZATION_ITEMS = [
  {
    label: "SCHOOL COLOUR COMBINATIONS",
    caption: "Palettes built from your school colours and carried across the full kit.",
  },
  {
    label: "LOGO AND CREST PLACEMENT",
    caption: "Crest placement developed against your artwork, with vector-file approval.",
  },
  {
    label: "SPORTS JERSEY PATTERNS",
    caption: "Stripes, colour blocks and panels composed for your team identity.",
  },
  {
    label: "COLLAR AND SLEEVE DESIGNS",
    caption: "Collar and sleeve finishes specified garment by garment.",
  },
  {
    label: "SHORTS AND TRACK-PANT COORDINATION",
    caption: "Matching shorts and track pants drawn from the same colour scheme.",
  },
  {
    label: "HOUSE-WISE SPORTSWEAR",
    caption: "House colours carried across the range for inter-house competition.",
  },
];

/* ------------------------------------------------------------------ */
/* Section 07 data — manufacturing journey                             */
/* ------------------------------------------------------------------ */

const MANUFACTURING_STEPS = [
  "Understand institutional requirements",
  "Develop the uniform design",
  "Confirm colours and branding",
  "Prepare the sample",
  "Obtain approval",
  "Manufacture bulk orders",
  "Inspect and dispatch",
];

/* ------------------------------------------------------------------ */
/* Section 06 data — preserved verified quality information            */
/* ------------------------------------------------------------------ */

const QUALITY_NOTES = [
  {
    title: "Shade Consistency",
    body: "Our fabrics are lab-tested for consistent colour across batches, so every uniform looks the same.",
  },
  {
    title: "Wash-Tested Fabric",
    body: "All materials withstand multiple washes without shrinking or fading, keeping uniforms looking new.",
  },
  {
    title: "Crest Customisation",
    body: "Embroidery, print or heat-transfer options for school logos, with vector-file approval.",
  },
  {
    title: "On-Time Delivery",
    body: "Production schedules are planned around the academic calendar, with reliable dispatch dates.",
  },
];

/* ================================================================== */

export default function Home({ products = [] }: HomeProps) {
  const featured = products.slice(0, 2);

  return (
    <>
      <Navigation activeLink="/" />

      <main className="min-h-screen bg-ivory font-sans text-espresso">
        {/* ============================================================ */}
        {/* SECTION 01 — Editorial hero                                  */}
        {/* ============================================================ */}
        <section className="relative overflow-hidden bg-ivory pb-16 pt-28 sm:pb-20 lg:pb-24 lg:pt-36">
          <DecorativeLetter
            className="left-1/2 top-16 -translate-x-1/2 text-[14rem] leading-none text-champagne/60 sm:text-[18rem] lg:top-24 lg:text-[24rem]"
          >
            LT
          </DecorativeLetter>
          <span
            aria-hidden="true"
            className="absolute -right-24 top-0 h-72 w-72 rounded-full bg-champagne/40 blur-3xl"
          />

          <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 px-5 md:px-6 lg:grid-cols-[1fr_1.25fr_1fr] lg:gap-12">
            {/* LEFT — girls' model plate */}
            <div className="order-2 lg:order-1">
              <div className="mb-3 flex items-baseline justify-between">
                <Eyebrow>COLLECTION PLATE 01</Eyebrow>
                <Eyebrow tone="gold">GIRLS</Eyebrow>
              </div>
              <ImageFrame
                label="FULL-BODY MODEL PHOTOGRAPH"
                caption="Girls in coordinated school sportswear — full body, studio light, warm ivory backdrop"
                aspect="aspect-[4/5]"
                tone="champagne"
              />
              <div className="mt-4 grid grid-cols-2 gap-4">
                <ImageFrame
                  label="GARMENT DETAIL"
                  caption="Crest and stitching close-up"
                  aspect="aspect-square"
                  tone="softwhite"
                />
                <ImageFrame
                  label="GARMENT DETAIL"
                  caption="Collar and hem close-up"
                  aspect="aspect-square"
                  tone="softwhite"
                />
              </div>
            </div>

            {/* CENTRE — brand, headline, copy, CTAs */}
            <div className="order-1 pb-4 text-center lg:order-2 lg:pt-8">
              <Eyebrow>LAKSHMI TEX — CUSTOM SCHOOL SPORTSWEAR</Eyebrow>
              <EditorialHeading
                as="h1"
                className="mx-auto mt-6 max-w-[16ch] text-[3rem] uppercase sm:text-[3.8rem] lg:text-[4.6rem]"
              >
                Sportswear, designed for your school.
              </EditorialHeading>
              <Rule className="mx-auto my-7 max-w-xs" />
              <p className="mx-auto max-w-xl text-base leading-relaxed text-graphite lg:text-lg">
                Custom-designed school sportswear collections, thoughtfully developed
                around your institution&apos;s identity, colours and requirements.
              </p>

              <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
                <PrimaryCTA href="/collections">Explore Collections</PrimaryCTA>
                <SecondaryCTA href="/request-sample-kit">
                  Request Sample Kit
                </SecondaryCTA>
              </div>

              <p className="mt-8 text-[10px] font-semibold uppercase tracking-[0.26em] text-taupe">
                {BULK_PRICING_LABEL} · Samples for schools
              </p>
            </div>

            {/* RIGHT — boys' model plate */}
            <div className="order-3">
              <div className="mb-3 flex items-baseline justify-between">
                <Eyebrow>COLLECTION PLATE 02</Eyebrow>
                <Eyebrow tone="gold">BOYS</Eyebrow>
              </div>
              <ImageFrame
                label="FULL-BODY MODEL PHOTOGRAPH"
                caption="Boys in coordinated school sportswear — full body, studio light, warm ivory backdrop"
                aspect="aspect-[4/5]"
                tone="champagne"
              />
              <div className="mt-4 grid grid-cols-2 gap-4">
                <ImageFrame
                  label="GARMENT DETAIL"
                  caption="Fabric texture close-up"
                  aspect="aspect-square"
                  tone="softwhite"
                />
                <ImageFrame
                  label="GARMENT DETAIL"
                  caption="Print and piping close-up"
                  aspect="aspect-square"
                  tone="softwhite"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* SECTION 02 — Complete sportswear collections                 */}
        {/* ============================================================ */}
        <section id="collections" className="bg-softwhite py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 md:px-6">
            <div className="max-w-3xl">
              <Eyebrow>COORDINATED SETS</Eyebrow>
              <EditorialHeading className="mt-5 text-[2.6rem] uppercase sm:text-5xl lg:text-[3.6rem]">
                Complete sportswear collections.
              </EditorialHeading>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-graphite">
                One institution, one visual identity. Each collection brings several
                garment categories together into a single coordinated design —
                colours, crest and detailing carried across every piece.
              </p>
            </div>

            <div className="mt-12 grid gap-x-10 gap-y-14 md:grid-cols-2">
              {SPORTSWEAR_COLLECTIONS.map((collection, i) => (
                <article key={collection.slug} className="group">
                  <ImageFrame
                    label={`COLLECTION — ${collection.title.toUpperCase()}`}
                    caption="Editorial photograph of the coordinated set on student models"
                    aspect="aspect-[4/3]"
                    tone={i % 2 === 0 ? "ivory" : "champagne"}
                  />
                  <div className="mt-5 flex items-baseline gap-4">
                    <span className="font-cormorant text-lg font-semibold text-gold">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <EditorialHeading as="h3" className="text-2xl sm:text-[1.7rem]">
                      {collection.title}
                    </EditorialHeading>
                  </div>
                  <p className="mt-3 max-w-[52ch] text-sm leading-relaxed text-graphite">
                    {collection.blurb}
                  </p>
                  <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-taupe">
                    Includes: {collectionGarments(collection).join(" · ")}
                  </p>
                  <a
                    href={collection.href}
                    className="mt-5 inline-block border-b border-espresso/30 pb-1 text-[11px] font-bold uppercase tracking-[0.2em] text-espresso transition-colors hover:border-gold hover:text-gold"
                  >
                    Explore Collection →
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* SECTION 03 — Individual sportswear categories                */}
        {/* ============================================================ */}
        <section className="relative overflow-hidden bg-ivory py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 md:px-6">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <Eyebrow>THE CATALOGUE</Eyebrow>
                <EditorialHeading className="mt-5 text-[2.6rem] uppercase sm:text-5xl lg:text-[3.6rem]">
                  Explore our sportswear.
                </EditorialHeading>
              </div>
              <a
                href="/products"
                className="border-b border-espresso/30 pb-1 text-[11px] font-bold uppercase tracking-[0.2em] text-espresso transition-colors hover:border-gold hover:text-gold"
              >
                View full catalogue →
              </a>
            </div>

            <div className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {CATEGORY_FEATURES.map(({ category, frame }, i) => (
                <article
                  key={category}
                  className={i % 3 === 1 ? "lg:mt-14" : i % 3 === 2 ? "lg:mt-7" : ""}
                >
                  <ImageFrame
                    label={frame}
                    caption={CATEGORY_COPY[category]?.blurb ?? ""}
                    aspect="aspect-[4/5]"
                    tone={i % 2 === 0 ? "softwhite" : "ivory"}
                  />
                  <div className="mt-4 flex items-baseline justify-between gap-3">
                    <EditorialHeading as="h3" className="text-xl sm:text-2xl">
                      {CATEGORY_COPY[category]?.label ?? category}
                    </EditorialHeading>
                    <span className="text-[10px] font-semibold tracking-[0.2em] text-taupe">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-graphite">
                    {CATEGORY_COPY[category]?.blurb}
                  </p>
                  <a
                    href={`/products?category=${encodeURIComponent(category)}`}
                    className="mt-4 inline-block border-b border-espresso/30 pb-1 text-[11px] font-bold uppercase tracking-[0.2em] text-espresso transition-colors hover:border-gold hover:text-gold"
                  >
                    View category →
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* SECTION 04 — Featured product editorial                      */}
        {/* ============================================================ */}
        {featured.length > 0 && (
          <section className="bg-softwhite py-20 lg:py-28">
            <div className="mx-auto max-w-7xl px-5 md:px-6">
              <div className="flex flex-wrap items-end justify-between gap-6">
                <div>
                  <Eyebrow>FEATURED PRODUCT EDITORIAL</Eyebrow>
                  <EditorialHeading className="mt-5 text-[2.6rem] uppercase sm:text-5xl lg:text-[3.6rem]">
                    From the catalogue.
                  </EditorialHeading>
                </div>
                <a
                  href="/products"
                  className="border-b border-espresso/30 pb-1 text-[11px] font-bold uppercase tracking-[0.2em] text-espresso transition-colors hover:border-gold hover:text-gold"
                >
                  All products →
                </a>
              </div>

              <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
                {featured.map((product, i) => (
                  <EditorialProductPoster
                    key={product.slug}
                    product={product}
                    variant={assignVariant(product.category, i)}
                    index={i}
                  />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ============================================================ */}
        {/* SECTION 05 — Customization studio                            */}
        {/* ============================================================ */}
        <section className="relative overflow-hidden bg-espresso py-20 text-softwhite lg:py-28">
          <DecorativeLetter className="right-[-3rem] top-8 text-[14rem] text-softwhite/[0.05] lg:text-[20rem]">
            C
          </DecorativeLetter>
          <div className="relative mx-auto max-w-7xl px-5 md:px-6">
            <div className="max-w-3xl">
              <Eyebrow tone="gold">CUSTOMIZATION STUDIO</Eyebrow>
              <EditorialHeading
                className="mt-5 text-[2.6rem] uppercase text-softwhite sm:text-5xl lg:text-[3.6rem]"
              >
                Your school. Your colours. Your identity.
              </EditorialHeading>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-softwhite/70">
                Every collection is developed around your institution — school colours,
                crest placement and coordinated detailing specified before a single
                garment is cut.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {CUSTOMIZATION_ITEMS.map((item) => (
                <div key={item.label}>
                  <ImageFrame
                    label={item.label}
                    caption={item.caption}
                    aspect="aspect-[4/3]"
                    tone="espresso"
                  />
                </div>
              ))}
            </div>

            <div className="mt-12 flex flex-wrap gap-4">
              <a
                href="/customization"
                className="inline-flex items-center justify-center bg-softwhite px-7 py-4 text-[11px] font-bold uppercase leading-none tracking-[0.2em] text-espresso transition-colors hover:bg-champagne"
              >
                Explore Customization
              </a>
              <SecondaryCTA href="/request-sample-kit" tone="softwhite">
                Request a Sample
              </SecondaryCTA>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* SECTION 06 — Fabric and finishing                            */}
        {/* ============================================================ */}
        <section className="bg-ivory py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 md:px-6">
            <div className="max-w-3xl">
              <Eyebrow>FABRIC AND FINISHING</Eyebrow>
              <EditorialHeading className="mt-5 text-[2.6rem] uppercase sm:text-5xl lg:text-[3.6rem]">
                Quality is in every detail.
              </EditorialHeading>
            </div>

            {/* Asymmetric image composition */}
            <div className="mt-12 grid gap-6 lg:grid-cols-12">
              <ImageFrame
                label="FABRIC TEXTURE"
                caption="Close-up of the sports jersey fabric weave"
                aspect="aspect-[4/3] lg:aspect-[16/11]"
                tone="champagne"
                className="lg:col-span-7"
              />
              <div className="grid gap-6 lg:col-span-5">
                <ImageFrame
                  label="COLLAR DETAIL"
                  caption="Neckline and collar construction close-up"
                  aspect="aspect-[16/9]"
                  tone="softwhite"
                />
                <ImageFrame
                  label="STITCHING"
                  caption="Seam and hem stitching close-up"
                  aspect="aspect-[16/9]"
                  tone="softwhite"
                />
              </div>
              <ImageFrame
                label="EMBROIDERY"
                caption="Embroidered school crest close-up"
                aspect="aspect-[4/3]"
                tone="ivory"
                className="lg:col-span-4"
              />
              <ImageFrame
                label="PRINTED LOGO"
                caption="Heat-transfer or screen-printed logo close-up"
                aspect="aspect-[4/3]"
                tone="ivory"
                className="lg:col-span-4"
              />
              <ImageFrame
                label="PIPING AND FINISHING"
                caption="Contrast piping and final garment finishing"
                aspect="aspect-[4/3]"
                tone="ivory"
                className="lg:col-span-4"
              />
            </div>

            {/* Preserved verified quality information */}
            <div className="mt-14 grid gap-8 border-t border-champagne pt-10 sm:grid-cols-2 lg:grid-cols-4">
              {QUALITY_NOTES.map((note) => (
                <div key={note.title}>
                  <EditorialHeading as="h3" className="text-lg">
                    {note.title}
                  </EditorialHeading>
                  <span
                    aria-hidden="true"
                    className="mt-3 block h-px w-10 bg-gold"
                  />
                  <p className="mt-3 text-sm leading-relaxed text-graphite">
                    {note.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* SECTION 07 — Manufacturing story                             */}
        {/* ============================================================ */}
        <section className="bg-softwhite py-20 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-6 lg:grid-cols-2 lg:gap-16">
            <div>
              <Eyebrow>MANUFACTURING STORY</Eyebrow>
              <EditorialHeading className="mt-5 text-[2.6rem] uppercase sm:text-5xl lg:text-[3.6rem]">
                From design to delivery.
              </EditorialHeading>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-graphite">
                A defined development path — from the first conversation about your
                school&apos;s requirements to inspected, dispatched bulk orders.
              </p>

              <ol className="mt-9 space-y-0 border-t border-champagne">
                {MANUFACTURING_STEPS.map((step, i) => (
                  <li
                    key={step}
                    className="flex items-baseline gap-5 border-b border-champagne py-4"
                  >
                    <span className="font-cormorant text-lg font-semibold text-gold">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm font-medium tracking-wide text-espresso">
                      {step}
                    </span>
                  </li>
                ))}
              </ol>

              <div className="mt-9">
                <PrimaryCTA href="/manufacturing">Our Manufacturing Process</PrimaryCTA>
              </div>
            </div>

            <div className="grid gap-6">
              <ImageFrame
                label="FACTORY FLOOR"
                caption="Cutting and stitching floor — real manufacturing photograph required"
                aspect="aspect-[4/3]"
                tone="champagne"
              />
              <div className="grid grid-cols-2 gap-6">
                <ImageFrame
                  label="SAMPLE DEVELOPMENT"
                  caption="Sample garment on the work table"
                  aspect="aspect-square"
                  tone="softwhite"
                />
                <ImageFrame
                  label="QUALITY INSPECTION"
                  caption="Finished garments checked before dispatch"
                  aspect="aspect-square"
                  tone="softwhite"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* SECTION 08 — Sample request conversion                        */}
        {/* ============================================================ */}
        <section className="relative overflow-hidden bg-ivory py-24 text-center lg:py-32">
          <DecorativeLetter className="left-1/2 top-6 -translate-x-1/2 text-[12rem] text-champagne/50 sm:text-[16rem] lg:text-[20rem]">
            S
          </DecorativeLetter>
          <div className="relative mx-auto max-w-3xl px-5 md:px-6">
            <Eyebrow>START A CONVERSATION</Eyebrow>
            <EditorialHeading className="mt-6 text-[2.6rem] uppercase sm:text-5xl lg:text-[3.8rem]">
              Let&apos;s design your school&apos;s sportswear.
            </EditorialHeading>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-graphite">
              Share your school&apos;s requirements and begin the development of a
              custom sportswear collection.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <PrimaryCTA href="/request-sample-kit">
                Request Your Sample Kit
              </PrimaryCTA>
              <SecondaryCTA href="/contact">Discuss a Collection</SecondaryCTA>
            </div>
            <p className="mt-8 text-[10px] font-semibold uppercase tracking-[0.26em] text-taupe">
              {BULK_PRICING_LABEL}
            </p>
          </div>
        </section>
      </main>

      {/* SECTION 09 — Footer */}
      <Footer />
    </>
  );
}
