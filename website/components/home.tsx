import { Hero } from "./hero";
import { LogoStrip } from "./logo-strip";
import { Card } from "./card";
import { Section } from "./section";
import { Navigation } from "./navigation";
import { Footer } from "./footer";
import React from "react";

export default function Home() {
  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-bg-light">
        <Section pad="4">
          <Hero
            title="School Sportswear Manufacturer"
            subtitle="B2B lead‑generation website for schools across India"
            ctaButton={{ label: "Request Sample Kit", onClick: () => alert("CTA clicked") }}
            bgImage="/placeholder-hero.jpg"
          />

          <h2 className="text-2xl font-medium text-text mt-12 mb-6">Why schools choose us</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card shadow="md">
              <h3 className="text-lg font-medium text-primary mb-3">Shade Consistency</h3>
              <p className="text-text-light">
                Our fabrics are lab‑tested for consistent colour across batches, so every uniform looks the same.
              </p>
            </Card>

            <Card shadow="md">
              <h3 className="text-lg font-medium text-primary mb-3">Wash‑Tested Fabric</h3>
              <p className="text-text-light">
                All materials withstand multiple washes without shrinking or fading, keeping uniforms looking new.
              </p>
            </Card>

            <Card shadow="md">
              <h3 className="text-lg font-medium text-primary mb-3">Crest Customisation</h3>
              <p className="text-text-light">
                Embroidery, print or heat‑transfer options for school logos, with vector‑file approval.
              </p>
            </Card>

            <Card shadow="md">
              <h3 className="text-lg font-medium text-primary mb-3">On‑Time Delivery</h3>
              <p className="text-text-light">
                Production schedules are planned around the academic calendar, with reliable dispatch dates.
              </p>
            </Card>
          </div>

          <h2 className="text-2xl font-medium text-text mt-12 mb-6">Featured Case Studies</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Card title="CBSE School, Chennai">
              <p className="text-text-light">
                A leading CBSE school in Chennai partnered with us for annual sports day kits.
                Over 2,000 uniforms delivered on time, with positive feedback from parents and staff.
              </p>
            </Card>

            <Card title="ICSE School, Bengaluru">
              <p className="text-text-light">
                An ICSE school in Bengaluru chose our moisture‑wicking T‑shirts and track pants.
                The school reported a 30 % reduction in parent complaints about fabric comfort.
              </p>
            </Card>
          </div>

          <a
            href="/request-sample-kit"
            className="mt-8 inline-block text-primary underline"
          >
            Request Sample Kit
          </a>
        </Section>
      </main>

      <Footer />
    </>
  );
}