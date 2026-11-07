import React from "react";
import SEO from "@/components/seo";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import {
  DecorativeLetter,
  EditorialHeading,
  Eyebrow,
  ImageFrame,
  PrimaryCTA,
  Rule,
  SecondaryCTA,
} from "@/components/editorial";

/**
 * /manufacturing — manufacturing and quality page (master brief section 10).
 * Verified quality information from the existing site is preserved; no
 * production capacities, machinery or factory credentials are invented.
 */

const PROCESS = [
  {
    title: "Fabric selection",
    body: "Fabric chosen for the garment's job — knit for sports T-shirts, brushed and lined options for warm-up pieces — and checked for shade consistency before cutting.",
    frame: "FABRIC SELECTION",
    caption: "Fabric rolls and swatches on the cutting table",
  },
  {
    title: "Pattern development",
    body: "Patterns developed for your size range and garment specifications, with fit confirmed against the approved sample.",
    frame: "PATTERN DEVELOPMENT",
    caption: "Paper patterns and technical sketch on the work table",
  },
  {
    title: "Cutting and stitching",
    body: "Bulk fabric cut to pattern and stitched by garment, with seam and hem finishing checked during assembly.",
    frame: "CUTTING AND STITCHING",
    caption: "Cutting and stitching floor in operation",
  },
  {
    title: "Branding application",
    body: "Crests and school branding applied by the agreed technique — embroidery, print or heat transfer — from your approved artwork.",
    frame: "BRANDING",
    caption: "Embroidery or print application on a finished garment",
  },
  {
    title: "Quality inspection",
    body: "Finished garments inspected for shade, stitching and branding before packing, so what ships matches the approved sample.",
    frame: "QUALITY INSPECTION",
    caption: "Inspector checking a finished garment",
  },
  {
    title: "Sample development",
    body: "A sample is prepared for your review and approval before bulk production begins — colours, branding and fit confirmed in hand.",
    frame: "SAMPLE DEVELOPMENT",
    caption: "Approved sample garment presented for review",
  },
  {
    title: "Bulk production",
    body: "Once the sample is approved, bulk orders are manufactured to the confirmed specification and schedule.",
    frame: "BULK PRODUCTION",
    caption: "Bulk production line in operation",
  },
  {
    title: "Dispatch",
    body: "Orders are packed and dispatched against the agreed schedule, planned around the academic calendar.",
    frame: "DISPATCH",
    caption: "Packed orders prepared for dispatch",
  },
];

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

export default function ManufacturingPage() {
  return (
    <>
      <SEO
        title="Manufacturing"
        description="How Lakshmi Tex manufactures custom school sportswear — fabric selection, pattern development, cutting and stitching, branding, quality inspection, sample development, bulk production and dispatch."
        canonical="https://yourdomain.com/manufacturing"
        ogTitle="Manufacturing — Lakshmi Tex"
        ogDescription="From design to delivery: the school sportswear manufacturing journey."
        twitterCard="summary_large_image"
      />
      <Navigation activeLink="/manufacturing" />

      <main className="min-h-screen bg-ivory font-sans text-espresso">
        {/* Header */}
        <section className="relative overflow-hidden bg-ivory pb-14 pt-32 lg:pb-16 lg:pt-40">
          <DecorativeLetter className="right-[-2rem] top-20 text-[12rem] text-champagne/60 lg:text-[18rem]">
            M
          </DecorativeLetter>
          <div className="relative mx-auto max-w-7xl px-5 md:px-6">
            <Eyebrow>MANUFACTURING AND QUALITY</Eyebrow>
            <EditorialHeading
              as="h1"
              className="mt-5 max-w-[14ch] text-[2.8rem] uppercase sm:text-6xl lg:text-[4.2rem]"
            >
              From design to delivery.
            </EditorialHeading>
            <Rule className="my-7 max-w-md" />
            <p className="max-w-2xl text-base leading-relaxed text-graphite lg:text-lg">
              A defined manufacturing path for institutional orders — sample first,
              approval before bulk, inspection before dispatch.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <PrimaryCTA href="/request-sample-kit">
                Request a Sample
              </PrimaryCTA>
              <SecondaryCTA href="/manufacturing#process">
                See the Process
              </SecondaryCTA>
            </div>
          </div>
        </section>

        {/* Process */}
        <section id="process" className="bg-softwhite py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 md:px-6">
            <Eyebrow>THE PROCESS</Eyebrow>
            <div className="mt-10 grid gap-x-8 gap-y-14 md:grid-cols-2">
              {PROCESS.map((step, i) => (
                <article
                  key={step.title}
                  className="grid gap-6 sm:grid-cols-[1.1fr_1fr] sm:items-start"
                >
                  <ImageFrame
                    label={step.frame}
                    caption={step.caption}
                    aspect="aspect-[4/3]"
                    tone={i % 2 === 0 ? "ivory" : "champagne"}
                  />
                  <div>
                    <div className="flex items-baseline gap-3">
                      <span className="font-cormorant text-lg font-semibold text-gold">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <EditorialHeading as="h3" className="text-xl">
                        {step.title}
                      </EditorialHeading>
                    </div>
                    <span
                      aria-hidden="true"
                      className="mt-3 block h-px w-10 bg-gold"
                    />
                    <p className="mt-3 text-sm leading-relaxed text-graphite">
                      {step.body}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Quality */}
        <section className="bg-ivory py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 md:px-6">
            <div className="max-w-3xl">
              <Eyebrow>QUALITY</Eyebrow>
              <EditorialHeading className="mt-5 text-[2.2rem] uppercase sm:text-4xl lg:text-[3rem]">
                Quality is in every detail.
              </EditorialHeading>
            </div>
            <div className="mt-10 grid gap-8 border-t border-champagne pt-10 sm:grid-cols-2 lg:grid-cols-4">
              {QUALITY_NOTES.map((note) => (
                <div key={note.title}>
                  <EditorialHeading as="h3" className="text-lg">
                    {note.title}
                  </EditorialHeading>
                  <span aria-hidden="true" className="mt-3 block h-px w-10 bg-gold" />
                  <p className="mt-3 text-sm leading-relaxed text-graphite">
                    {note.body}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-14 grid gap-6 lg:grid-cols-3">
              <ImageFrame
                label="FACTORY FLOOR"
                caption="Real manufacturing floor photograph required"
                aspect="aspect-[4/3]"
                tone="champagne"
                className="lg:col-span-2"
              />
              <ImageFrame
                label="FINISHED GOODS"
                caption="Inspected, packed garments ready for dispatch"
                aspect="aspect-[4/3]"
                tone="softwhite"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
