import React, { useMemo, useState } from "react";
import { Navigation } from "./navigation";
import { Footer } from "./footer";
import {
  Product,
  CATEGORY_COPY,
  BULK_PRICING_LABEL,
  imageForColour,
} from "@/lib/products";

export interface ProductDetailProps {
  /** The product being viewed (real schema fields only). */
  product: Product;
  /** Other products in the catalogue (for "complete the set"). */
  related: Product[];
}

function MetaLine({ product }: { product: Product }) {
  const bits: string[] = [];
  if (product.gsm) bits.push(`${product.gsm} GSM`);
  if (product.moq) bits.push(`MOQ ${product.moq}`);
  if (product.leadTime) bits.push(`Lead time ${product.leadTime}`);
  if (!bits.length) return null;
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-graphite">
      {bits.join(" · ")}
    </p>
  );
}

export default function ProductDetail({ product, related }: ProductDetailProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const images = product.images ?? [];
  const [activeHex, setActiveHex] = useState<string | undefined>(
    product.colours?.[0]?.hex
  );
  // Swap only when a colour-matched image actually exists; otherwise keep current.
  const colourMatched = activeHex
    ? imageForColour(product, activeHex)
    : undefined;
  const [activeImage, setActiveImage] = useState<string | undefined>(
    colourMatched ?? images[0]
  );

  const shownImage =
    colourMatched && images.includes(colourMatched) ? colourMatched : activeImage;

  const categoryLabel = product.category
    ? CATEGORY_COPY[product.category].label
    : "";

  const jsonLd = useMemo(
    () =>
      JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Product",
        name: product.name,
        description: product.fabricSpecification || product.seo?.metaDescription,
        category: product.category || undefined,
        brand: { "@type": "Brand", name: "School Sportswear Manufacturer" },
        image: images,
        // No price/offer: the schema has no price field and quotes are
        // project-based ("BULK PRICING AVAILABLE").
      }),
    [product, images]
  );

  const sampleHref = `/request-sample-kit?product=${encodeURIComponent(product.slug)}`;

  return (
    <div className="min-h-screen bg-haze font-manrope">
      <Navigation isMenuOpen={menuOpen} setIsMenuOpen={setMenuOpen} activeLink="/products" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd }}
      />

      <main className="mx-auto max-w-7xl px-6 pb-20 pt-28 lg:pt-36">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex flex-wrap items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-graphite">
            <li>
              <a href="/products" className="transition-colors hover:text-ink">
                Catalogue
              </a>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-ink">{product.name}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_1fr] lg:gap-12">
          {/* ---------------- Gallery ---------------- */}
          <section aria-label="Product gallery">
            <div className="relative aspect-[4/5] overflow-hidden border border-ink/10 bg-mist">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute bottom-4 right-4 select-none text-[7rem] font-cormorant font-semibold leading-none tracking-[-0.06em] text-ink/[0.06]"
              >
                {product.category ? product.category.slice(0, 2).toUpperCase() : "PR"}
              </span>
              {shownImage ? (
                <img
                  src={shownImage}
                  alt={`${product.name} — view ${images.indexOf(shownImage) + 1}`}
                  width={328}
                  height={964}
                  className="relative h-full w-full object-contain p-6"
                  decoding="async"
                />
              ) : (
                <div className="relative flex h-full items-center justify-center text-5xl font-cormorant font-semibold text-ink/20">
                  {product.name.slice(0, 2).toUpperCase()}
                </div>
              )}
            </div>

            {/* Thumbnails */}
            {images.length > 1 && (
              <ul
                className="mt-4 flex gap-3 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                role="list"
                aria-label="Gallery views"
              >
                {images.map((src, i) => (
                  <li key={src} className="shrink-0">
                    <button
                      type="button"
                      onClick={() => setActiveImage(src)}
                      aria-label={`Show view ${i + 1}`}
                      aria-pressed={shownImage === src}
                      className={`block h-20 w-20 overflow-hidden border-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 ${
                        shownImage === src
                          ? "border-ink"
                          : "border-transparent hover:border-ink/40"
                      }`}
                    >
                      <img
                        src={src}
                        alt=""
                        width={600}
                        height={600}
                        className="h-full w-full object-cover"
                        loading="lazy"
                        decoding="async"
                      />
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </section>

          {/* ---------------- Information ---------------- */}
          <section aria-label="Product information" className="flex flex-col gap-6">
            <div className="border border-ink/10 bg-white p-6 lg:p-8">
              <div className="flex flex-wrap items-center gap-2">
                {product.placeholder && (
                  <span className="border border-ink/30 px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.18em] text-ink/60">
                    Placeholder entry
                  </span>
                )}
                {categoryLabel && (
                  <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-graphite">
                    {categoryLabel}
                  </span>
                )}
              </div>

              <h1 className="mt-3 font-cormorant text-[2.4rem] font-semibold uppercase leading-[1.03] tracking-[0.01em] text-ink lg:text-[3rem]">
                {product.name}
              </h1>

              {product.fabricSpecification && (
                <p className="mt-4 text-sm leading-relaxed text-graphite">
                  {product.fabricSpecification}
                </p>
              )}

              <div className="mt-6 flex items-center gap-3">
                <span className="bg-ink px-3 py-1.5 text-[11px] font-semibold tracking-[0.2em] text-white">
                  {BULK_PRICING_LABEL}
                </span>
              </div>

              <MetaLine product={product} />

              {/* Colours — image swaps only if a matching image exists */}
              {product.colours && product.colours.length > 0 && (
                <div className="mt-7">
                  <h2 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-ink">
                    Colours
                  </h2>
                  <ul className="mt-3 flex flex-wrap gap-3" role="list">
                    {product.colours.map((c, i) => {
                      const isActive = activeHex === c.hex;
                      return (
                        <li key={`${c.hex ?? i}`}>
                          <button
                            type="button"
                            aria-label={`Select colour ${c.hex ?? i + 1}`}
                            aria-pressed={isActive}
                            title={c.hex}
                            onClick={() => {
                              setActiveHex(c.hex);
                              const match = imageForColour(product, c.hex);
                              if (match) setActiveImage(match);
                            }}
                            className={`h-8 w-8 rounded-full border-2 transition-transform motion-safe:hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 ${
                              isActive
                                ? "border-ink ring-2 ring-ink/30 scale-110"
                                : "border-ink/25"
                            }`}
                            style={{ backgroundColor: c.hex || "#FFFFFF" }}
                          />
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}

              {/* Sizes — only when present */}
              {product.sizes && product.sizes.length > 0 && (
                <div className="mt-7">
                  <h2 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-ink">
                    Sizes
                  </h2>
                  <ul className="mt-3 flex flex-wrap gap-2" role="list">
                    {product.sizes.map((s) => (
                      <li
                        key={s}
                        className="border border-ink/25 px-3 py-1.5 text-xs font-bold tracking-wider text-ink/80"
                      >
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* CTAs */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={sampleHref}
                  className="inline-flex flex-1 items-center justify-center bg-ink px-6 py-4 text-[11px] font-bold tracking-[0.2em] text-white transition-colors hover:bg-graphite focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2"
                >
                  REQUEST A SAMPLE
                </a>
                <a
                  href="/products"
                  className="inline-flex flex-1 items-center justify-center border border-ink/40 px-6 py-4 text-[11px] font-bold tracking-[0.2em] text-ink transition-colors hover:bg-ink hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2"
                >
                  BACK TO CATALOGUE
                </a>
              </div>
            </div>

            {/* Specs — only fields that actually exist */}
            {(product.gsm || product.moq || product.leadTime) && (
              <div className="border border-ink/10 bg-white p-6 lg:p-8">
                <h2 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-ink">
                  Production details
                </h2>
                <dl className="mt-4 divide-y divide-ink/10 text-sm">
                  {product.gsm && (
                    <div className="flex justify-between py-3">
                      <dt className="text-graphite">Fabric weight</dt>
                      <dd className="font-semibold text-ink">{product.gsm} GSM</dd>
                    </div>
                  )}
                  {product.moq && (
                    <div className="flex justify-between py-3">
                      <dt className="text-graphite">Minimum order quantity</dt>
                      <dd className="font-semibold text-ink">{product.moq} units</dd>
                    </div>
                  )}
                  {product.leadTime && (
                    <div className="flex justify-between py-3">
                      <dt className="text-graphite">Lead time</dt>
                      <dd className="font-semibold text-ink">{product.leadTime}</dd>
                    </div>
                  )}
                </dl>
              </div>
            )}
          </section>
        </div>

        {/* ---------------- Complete the set ---------------- */}
        {related.length > 0 && (
          <section className="mt-16" aria-label="Related products">
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.26em] text-graphite">
              Complete the set
            </h2>
            <div className="mt-5 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.slice(0, 3).map((rel) => (
                <a
                  key={rel.slug}
                  href={`/products/${encodeURIComponent(rel.slug)}`}
                  className="group block border border-ink/10 bg-white p-5 transition-colors hover:border-ink/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-graphite">
                      {rel.category ? CATEGORY_COPY[rel.category].label : ""}
                    </span>
                  </div>
                  <h3 className="mt-2 font-cormorant text-xl font-semibold uppercase leading-tight tracking-normal text-ink">
                    {rel.name}
                  </h3>
                  <span className="mt-3 inline-block text-[11px] font-bold tracking-[0.18em] text-ink underline decoration-ink/30 underline-offset-4 group-hover:decoration-ink">
                    VIEW PRODUCT
                  </span>
                </a>
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
