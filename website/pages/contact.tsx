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
 * /contact — contact page using only the verified contact details already
 * present on the site. No new form is introduced: enquiries run through the
 * existing Sample Kit journey (master brief sections 5 and 11), so no backend
 * change is required.
 */

const ENQUIRY_POINTS = [
  "Institution name and location",
  "Sportswear categories you need",
  "Approximate student or order quantity",
  "School colours, crest and branding requirements",
  "Reference designs or logo files",
  "Preferred delivery timeline",
];

export default function ContactPage() {
  return (
    <>
      <SEO
        title="Contact"
        description="Contact Lakshmi Tex about custom school sportswear — call, WhatsApp or email, or send your requirements through the sample kit enquiry form."
        canonical="https://yourdomain.com/contact"
        ogTitle="Contact — Lakshmi Tex"
        ogDescription="Talk to Lakshmi Tex about your school's sportswear requirements."
        twitterCard="summary_large_image"
      />
      <Navigation activeLink="/contact" />

      <main className="min-h-screen bg-ivory font-sans text-espresso">
        {/* Header */}
        <section className="relative overflow-hidden bg-ivory pb-14 pt-32 lg:pb-16 lg:pt-40">
          <DecorativeLetter className="right-[-2rem] top-20 text-[12rem] text-champagne/60 lg:text-[18rem]">
            C
          </DecorativeLetter>
          <div className="relative mx-auto max-w-7xl px-5 md:px-6">
            <Eyebrow>CONTACT</Eyebrow>
            <EditorialHeading
              as="h1"
              className="mt-5 max-w-[16ch] text-[2.8rem] uppercase sm:text-6xl lg:text-[4.2rem]"
            >
              Talk to us about your school.
            </EditorialHeading>
            <Rule className="my-7 max-w-md" />
            <p className="max-w-2xl text-base leading-relaxed text-graphite lg:text-lg">
              Call, message or email — or send your full requirements through the
              sample kit enquiry form and the team will pick it up from there.
            </p>
          </div>
        </section>

        {/* Contact channels */}
        <section className="bg-softwhite py-16 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 md:px-6 lg:grid-cols-3">
            <div className="border-t border-champagne pt-6">
              <Eyebrow>CALL</Eyebrow>
              <EditorialHeading as="h3" className="mt-4 text-2xl">
                <a href="tel:+918012345678" className="hover:text-gold">
                  +91 80‑1234‑5678
                </a>
              </EditorialHeading>
              <p className="mt-3 text-sm leading-relaxed text-graphite">
                Speak to the team directly about categories, quantities and
                timelines.
              </p>
            </div>

            <div className="border-t border-champagne pt-6">
              <Eyebrow>WHATSAPP</Eyebrow>
              <EditorialHeading as="h3" className="mt-4 text-2xl">
                <a
                  href="https://wa.me/918012345678"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold"
                >
                  Message on WhatsApp
                </a>
              </EditorialHeading>
              <p className="mt-3 text-sm leading-relaxed text-graphite">
                Share your school&apos;s colours, crest artwork or questions as
                photos and files.
              </p>
            </div>

            <div className="border-t border-champagne pt-6">
              <Eyebrow>EMAIL</Eyebrow>
              <EditorialHeading as="h3" className="mt-4 text-2xl">
                <a
                  href="mailto:info@schoolsportswear.com"
                  className="break-all hover:text-gold"
                >
                  info@schoolsportswear.com
                </a>
              </EditorialHeading>
              <p className="mt-3 text-sm leading-relaxed text-graphite">
                For detailed requirements, catalogues and purchase orders.
              </p>
            </div>
          </div>
        </section>

        {/* Enquiry guidance */}
        <section className="bg-ivory py-16 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-6 lg:grid-cols-2 lg:gap-16">
            <div>
              <Eyebrow>WHAT TO INCLUDE</Eyebrow>
              <EditorialHeading className="mt-5 text-[2.2rem] uppercase sm:text-4xl lg:text-[3rem]">
                A good enquiry starts here.
              </EditorialHeading>
              <ul className="mt-8 border-t border-champagne">
                {ENQUIRY_POINTS.map((point, i) => (
                  <li
                    key={point}
                    className="flex items-baseline gap-5 border-b border-champagne py-4"
                  >
                    <span className="font-cormorant text-lg font-semibold text-gold">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm font-medium tracking-wide text-espresso">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid content-start gap-6">
              <ImageFrame
                label="ENQUIRY"
                caption="Use the sample kit form — your requirements reach the team directly"
                aspect="aspect-[4/3]"
                tone="champagne"
              />
              <div className="flex flex-wrap gap-4">
                <PrimaryCTA href="/request-sample-kit">
                  Request Your Sample Kit
                </PrimaryCTA>
                <SecondaryCTA href="/request-sample-kit?intent=bulk">
                  Bulk Requirements
                </SecondaryCTA>
              </div>
              <p className="text-sm leading-relaxed text-graphite">
                The sample kit form carries your institution details, required
                sportswear categories, quantity, branding requirements and delivery
                information in one enquiry — no need to send it twice.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
