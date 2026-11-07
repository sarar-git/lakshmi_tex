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
 * /about — company positioning (master brief sections 2 and 5).
 * Only claims that already exist on the site or in Plan.md are used;
 * no leadership names, customer names or credentials are invented.
 */

const WHY_SCHOOLS_CHOOSE_US = [
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

export default function AboutPage() {
  return (
    <>
      <SEO
        title="About"
        description="Lakshmi Tex is a custom school sportswear manufacturer working with schools and institutions — coordinated, institution-specific collections from sample development to bulk supply."
        canonical="https://yourdomain.com/about"
        ogTitle="About Lakshmi Tex"
        ogDescription="Custom school sportswear design and manufacturing for institutions."
        twitterCard="summary_large_image"
      />
      <Navigation activeLink="/about" />

      <main className="min-h-screen bg-ivory font-sans text-espresso">
        {/* Header */}
        <section className="relative overflow-hidden bg-ivory pb-14 pt-32 lg:pb-16 lg:pt-40">
          <DecorativeLetter className="right-[-2rem] top-20 text-[12rem] text-champagne/60 lg:text-[18rem]">
            A
          </DecorativeLetter>
          <div className="relative mx-auto max-w-7xl px-5 md:px-6">
            <Eyebrow>ABOUT LAKSHMI TEX</Eyebrow>
            <EditorialHeading
              as="h1"
              className="mt-5 max-w-[17ch] text-[2.8rem] uppercase sm:text-6xl lg:text-[4.2rem]"
            >
              A sportswear design house for schools.
            </EditorialHeading>
            <Rule className="my-7 max-w-md" />
            <p className="max-w-2xl text-base leading-relaxed text-graphite lg:text-lg">
              Lakshmi Tex exclusively focuses on school sportswear manufacturing —
              coordinated, institution-specific collections for schools and
              educational institutions, not off-the-shelf garments.
            </p>
          </div>
        </section>

        {/* Story */}
        <section className="bg-softwhite py-16 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-6 lg:grid-cols-2 lg:gap-16">
            <div>
              <Eyebrow>OUR POSITIONING</Eyebrow>
              <EditorialHeading className="mt-5 text-[2.2rem] uppercase sm:text-4xl lg:text-[3rem]">
                Built for institutions, not retail.
              </EditorialHeading>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-graphite">
                <p>
                  Our primary customer is the school or educational institution.
                  Every collection is developed around that school&apos;s
                  requirements — colours, crest, house structure and the sports it
                  plays.
                </p>
                <p>
                  We supply sports T-shirts, shorts, track pants, sports gowns and
                  complete coordinated kits — as individual garments or as one
                  institutional design across the whole range.
                </p>
                <p>
                  The journey starts with a sample: review the fabric, finish and
                  branding in hand, approve it, then move to bulk manufacturing on
                  an agreed schedule.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <PrimaryCTA href="/request-sample-kit">
                  Request Sample Kit
                </PrimaryCTA>
                <SecondaryCTA href="/products">View Catalogue</SecondaryCTA>
              </div>
            </div>

            <div className="grid gap-6">
              <ImageFrame
                label="STUDIO PHOTOGRAPH"
                caption="Student models in coordinated school sportswear — full body"
                aspect="aspect-[4/3]"
                tone="champagne"
              />
              <div className="grid grid-cols-2 gap-6">
                <ImageFrame
                  label="GARMENT DETAIL"
                  caption="Crest and stitching close-up"
                  aspect="aspect-square"
                  tone="softwhite"
                />
                <ImageFrame
                  label="GARMENT DETAIL"
                  caption="Fabric and finishing close-up"
                  aspect="aspect-square"
                  tone="softwhite"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why schools choose us */}
        <section className="bg-ivory py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 md:px-6">
            <div className="max-w-3xl">
              <Eyebrow>WHY SCHOOLS CHOOSE US</Eyebrow>
              <EditorialHeading className="mt-5 text-[2.2rem] uppercase sm:text-4xl lg:text-[3rem]">
                The details schools notice.
              </EditorialHeading>
            </div>
            <div className="mt-10 grid gap-8 border-t border-champagne pt-10 sm:grid-cols-2 lg:grid-cols-4">
              {WHY_SCHOOLS_CHOOSE_US.map((note) => (
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
          </div>
        </section>

        {/* Conversion */}
        <section className="bg-espresso py-20 text-center text-softwhite lg:py-24">
          <div className="mx-auto max-w-2xl px-5 md:px-6">
            <Eyebrow tone="gold">START HERE</Eyebrow>
            <EditorialHeading className="mt-5 text-[2.2rem] uppercase text-softwhite sm:text-4xl lg:text-[3rem]">
              Let&apos;s design your school&apos;s sportswear.
            </EditorialHeading>
            <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-softwhite/70">
              Share your school&apos;s requirements and begin the development of a
              custom sportswear collection.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="/request-sample-kit"
                className="inline-flex items-center justify-center bg-softwhite px-7 py-4 text-[11px] font-bold uppercase leading-none tracking-[0.2em] text-espresso transition-colors hover:bg-champagne"
              >
                Request Your Sample Kit
              </a>
              <SecondaryCTA href="/contact" tone="softwhite">
                Contact Us
              </SecondaryCTA>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
