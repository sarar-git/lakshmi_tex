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
 * /customization — how schools develop their own sportswear designs
 * (master brief section 9). Existing capabilities are separated from future
 * possibilities; no unsupported capability is claimed.
 */

const EXISTING_CAPABILITIES = [
  {
    title: "School colours",
    body: "Your school's palette developed across every garment in the collection — main body, contrast panels, trims and ribbing.",
  },
  {
    title: "Logo and crest placement",
    body: "Crest developed from your artwork with vector-file approval, placed by garment and technique: embroidery, print or heat transfer.",
  },
  {
    title: "Jersey patterns",
    body: "Stripes, colour blocks and panel compositions designed around your house or school identity.",
  },
  {
    title: "Collar and sleeve designs",
    body: "Neckline and sleeve finishes specified per garment so the set reads as one design.",
  },
  {
    title: "Matching shorts and track pants",
    body: "Shorts and track pants drawn from the same colour scheme for full coordination.",
  },
  {
    title: "House-wise sportswear",
    body: "House colours carried across the range so every inter-house team is instantly recognisable.",
  },
];

const FUTURE_POSSIBILITIES = [
  "Interactive uniform design configurator — preview colour combinations live before ordering.",
  "School portal for repeat ordering and re-order history.",
];

export default function CustomizationPage() {
  return (
    <>
      <SEO
        title="Customization"
        description="Develop your school's own sportswear identity — school colours, crest placement, jersey patterns, collar and sleeve designs, matching sets and house-wise sportswear from Lakshmi Tex."
        canonical="https://yourdomain.com/customization"
        ogTitle="Customization Studio — Lakshmi Tex"
        ogDescription="Custom school sportswear designed around your institution's identity."
        twitterCard="summary_large_image"
      />
      <Navigation activeLink="/customization" />

      <main className="min-h-screen bg-ivory font-sans text-espresso">
        {/* Header */}
        <section className="relative overflow-hidden bg-ivory pb-14 pt-32 lg:pb-16 lg:pt-40">
          <DecorativeLetter className="right-[-2rem] top-20 text-[12rem] text-champagne/60 lg:text-[18rem]">
            C
          </DecorativeLetter>
          <div className="relative mx-auto max-w-7xl px-5 md:px-6">
            <Eyebrow>CUSTOMIZATION STUDIO</Eyebrow>
            <EditorialHeading
              as="h1"
              className="mt-5 max-w-[16ch] text-[2.8rem] uppercase sm:text-6xl lg:text-[4.2rem]"
            >
              Your school. Your colours. Your identity.
            </EditorialHeading>
            <Rule className="my-7 max-w-md" />
            <p className="max-w-2xl text-base leading-relaxed text-graphite lg:text-lg">
              Every Lakshmi Tex collection is developed around one institution.
              Below is what the customization process covers today — and what we
              are building for the future.
            </p>
          </div>
        </section>

        {/* Visual capability grid */}
        <section className="bg-softwhite py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 md:px-6">
            <Eyebrow>WHAT WE CUSTOMIZE TODAY</Eyebrow>
            <div className="mt-10 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {EXISTING_CAPABILITIES.map((item, i) => (
                <article key={item.title}>
                  <ImageFrame
                    label={item.title.toUpperCase()}
                    caption="Design example photograph or technical sketch required"
                    aspect="aspect-[4/3]"
                    tone={i % 2 === 0 ? "ivory" : "champagne"}
                  />
                  <EditorialHeading as="h3" className="mt-4 text-xl">
                    {item.title}
                  </EditorialHeading>
                  <span aria-hidden="true" className="mt-3 block h-px w-10 bg-gold" />
                  <p className="mt-3 text-sm leading-relaxed text-graphite">
                    {item.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="bg-ivory py-16 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-6 lg:grid-cols-2 lg:gap-16">
            <div>
              <Eyebrow>HOW A DESIGN IS DEVELOPED</Eyebrow>
              <EditorialHeading className="mt-5 text-[2.2rem] uppercase sm:text-4xl lg:text-[3rem]">
                From brief to sample.
              </EditorialHeading>
              <ol className="mt-8 border-t border-champagne">
                {[
                  "Share your school colours, crest and requirements",
                  "We develop the collection design across garments",
                  "Confirm colours, branding and placement",
                  "We prepare the sample for your approval",
                  "Approve, then move to bulk production",
                ].map((step, i) => (
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
            </div>

            <div>
              <Eyebrow>FUTURE POSSIBILITIES</Eyebrow>
              <EditorialHeading className="mt-5 text-[2.2rem] uppercase sm:text-4xl lg:text-[3rem]">
                On our roadmap.
              </EditorialHeading>
              <p className="mt-4 max-w-[52ch] text-sm leading-relaxed text-graphite">
                These are not available yet. They are listed so expectations are
                clear about what exists today versus what is planned.
              </p>
              <ul className="mt-6 space-y-4">
                {FUTURE_POSSIBILITIES.map((item) => (
                  <li
                    key={item}
                    className="flex gap-4 border-b border-champagne pb-4 text-sm text-espresso"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-1.5 block h-1.5 w-1.5 shrink-0 rotate-45 bg-gold"
                    />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex flex-wrap gap-4">
                <PrimaryCTA href="/request-sample-kit">
                  Request a Sample
                </PrimaryCTA>
                <SecondaryCTA href="/contact">Discuss Your Design</SecondaryCTA>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
