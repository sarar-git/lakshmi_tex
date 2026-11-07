import React from "react";
import SEO from "@/components/seo";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import {
  EditorialHeading,
  Eyebrow,
  ImageFrame,
  PrimaryCTA,
  Rule,
  SecondaryCTA,
} from "@/components/editorial";
import {
  SPORTSWEAR_COLLECTIONS,
  collectionGarments,
} from "@/lib/collections";
import {
  BULK_PRICING_LABEL,
  CATEGORY_COPY,
  type Product,
} from "@/lib/products";

/**
 * /collections — coordinated school sportswear collections (master brief
 * section 7, discovery method B). Data-driven from lib/collections; garment
 * counts come from the real catalogue (DB-first with placeholder fallback).
 */

interface CollectionsPageProps {
  products: Product[];
}

function countIn(products: Product[], categories: string[]): number {
  return products.filter(
    (p) => p.category && categories.includes(p.category)
  ).length;
}

export default function CollectionsPage({ products }: CollectionsPageProps) {
  return (
    <>
      <SEO
        title="Collections"
        description="Coordinated school sportswear collections from Lakshmi Tex — school sports, house sports, winter sportswear and custom team sets built from one institutional design."
        canonical="https://yourdomain.com/collections"
        ogTitle="School Sportswear Collections — Lakshmi Tex"
        ogDescription="Coordinated, institution-specific sportswear collections for schools."
        twitterCard="summary_large_image"
      />
      <Navigation activeLink="/collections" />

      <main className="min-h-screen bg-ivory font-sans text-espresso">
        {/* Page header */}
        <section className="relative overflow-hidden bg-ivory pb-14 pt-32 lg:pb-16 lg:pt-40">
          <div className="mx-auto max-w-7xl px-5 md:px-6">
            <Eyebrow>COORDINATED SETS</Eyebrow>
            <EditorialHeading
              as="h1"
              className="mt-5 max-w-[18ch] text-[2.8rem] uppercase sm:text-6xl lg:text-[4.2rem]"
            >
              Complete sportswear collections.
            </EditorialHeading>
            <Rule className="my-7 max-w-md" />
            <p className="max-w-2xl text-base leading-relaxed text-graphite lg:text-lg">
              A collection is one coordinated institutional design carried across
              several garment categories — same colours, same crest, same detailing.
              Browse by collection here, or by individual garment category in the
              catalogue.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <PrimaryCTA href="/products">Browse the Catalogue</PrimaryCTA>
              <SecondaryCTA href="/request-sample-kit">
                Request Sample Kit
              </SecondaryCTA>
            </div>
          </div>
        </section>

        {/* Collection editorial entries */}
        <section className="bg-softwhite py-16 lg:py-24">
          <div className="mx-auto max-w-7xl space-y-20 px-5 md:px-6">
            {SPORTSWEAR_COLLECTIONS.map((collection, i) => {
              const garments = collectionGarments(collection);
              const count = countIn(products, garments);
              const flip = i % 2 === 1;
              return (
                <article
                  key={collection.slug}
                  id={collection.slug}
                  className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14"
                >
                  <div className={flip ? "lg:order-2" : ""}>
                    <ImageFrame
                      label={`COLLECTION — ${collection.title.toUpperCase()}`}
                      caption="Editorial photograph of the coordinated set on student models"
                      aspect="aspect-[4/3]"
                      tone={i % 2 === 0 ? "ivory" : "champagne"}
                    />
                    <div className="mt-4 grid grid-cols-2 gap-4">
                      <ImageFrame
                        label="GARMENT DETAIL"
                        caption="Crest or fabric close-up from the set"
                        aspect="aspect-[4/3]"
                        tone="softwhite"
                      />
                      <ImageFrame
                        label="GARMENT DETAIL"
                        caption="Colour coordination close-up from the set"
                        aspect="aspect-[4/3]"
                        tone="softwhite"
                      />
                    </div>
                  </div>

                  <div className={flip ? "lg:order-1" : ""}>
                    <div className="flex items-baseline gap-4">
                      <span className="font-cormorant text-lg font-semibold text-gold">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <Eyebrow>{count} PRODUCTS IN CATALOGUE</Eyebrow>
                    </div>
                    <EditorialHeading className="mt-4 text-[2.2rem] sm:text-4xl lg:text-[3rem]">
                      {collection.title}
                    </EditorialHeading>
                    <p className="mt-4 max-w-[54ch] text-base leading-relaxed text-graphite">
                      {collection.blurb}
                    </p>

                    <dl className="mt-7 border-t border-champagne">
                      <div className="flex items-baseline justify-between gap-6 border-b border-champagne py-3">
                        <dt className="text-[10px] font-semibold uppercase tracking-[0.22em] text-taupe">
                          Garment categories
                        </dt>
                        <dd className="text-right text-sm font-medium text-espresso">
                          {garments.join(" · ")}
                        </dd>
                      </div>
                      <div className="flex items-baseline justify-between gap-6 border-b border-champagne py-3">
                        <dt className="text-[10px] font-semibold uppercase tracking-[0.22em] text-taupe">
                          Included garments
                        </dt>
                        <dd className="text-right text-sm text-graphite">
                          {garments
                            .map((g) => CATEGORY_COPY[g]?.label ?? g)
                            .join(", ")}
                        </dd>
                      </div>
                      <div className="flex items-baseline justify-between gap-6 border-b border-champagne py-3">
                        <dt className="text-[10px] font-semibold uppercase tracking-[0.22em] text-taupe">
                          Pricing
                        </dt>
                        <dd className="text-right text-sm font-semibold tracking-[0.14em] text-espresso">
                          {BULK_PRICING_LABEL}
                        </dd>
                      </div>
                    </dl>

                    <div className="mt-7 flex flex-wrap gap-4">
                      {garments.map((g) => (
                        <a
                          key={g}
                          href={`/products?category=${encodeURIComponent(g)}`}
                          className="border border-espresso/30 px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.18em] text-espresso transition-colors hover:bg-espresso hover:text-softwhite"
                        >
                          {CATEGORY_COPY[g]?.label ?? g}
                        </a>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* Conversion */}
        <section className="bg-ivory py-20 text-center lg:py-24">
          <div className="mx-auto max-w-2xl px-5 md:px-6">
            <Eyebrow>NOT SURE WHERE TO START?</Eyebrow>
            <EditorialHeading className="mt-5 text-[2.2rem] uppercase sm:text-4xl lg:text-[3rem]">
              We&apos;ll build the set around your school.
            </EditorialHeading>
            <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-graphite">
              Request a sample kit, or tell us which collection your school is
              exploring and we&apos;ll take it from there.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <PrimaryCTA href="/request-sample-kit">
                Request Your Sample Kit
              </PrimaryCTA>
              <SecondaryCTA href="/contact">Discuss a Collection</SecondaryCTA>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export async function getStaticProps(): Promise<{
  props: CollectionsPageProps;
  revalidate?: number;
}> {
  const { loadProducts } = await import("@/lib/products-db");
  const products = await loadProducts();
  return { props: { products }, revalidate: 3600 };
}
