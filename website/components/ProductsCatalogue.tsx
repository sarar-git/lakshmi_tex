import React, { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";
import { Navigation } from "./navigation";
import { Footer } from "./footer";
import {
  Product,
  ProductCategory,
  PRODUCT_CATEGORIES,
  CATEGORY_COPY,
  assignVariant,
} from "@/lib/products";
import EditorialProductPoster from "./EditorialProductPoster";

export interface ProductsCatalogueProps {
  /** All catalogue products (DB-first, placeholder fallback). */
  products: Product[];
}

const ALL = "All Products";

function isCategory(value: string): value is ProductCategory {
  return (PRODUCT_CATEGORIES as readonly string[]).includes(value);
}

export default function ProductsCatalogue({ products }: ProductsCatalogueProps) {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState<string>(ALL);

  // Poster numbering + deterministic variant assignment (by category, never random).
  const decorated = useMemo(() => {
    const seen: Record<string, number> = {};
    return products.map((product, i) => {
      const key = product.category ?? "";
      const idxInCategory = seen[key] ?? 0;
      seen[key] = idxInCategory + 1;
      return {
        product,
        variant: assignVariant(product.category, idxInCategory),
        index: i,
      };
    });
  }, [products]);

  // Sync from ?category= on first ready render (preserves URL behaviour).
  useEffect(() => {
    if (!router.isReady) return;
    const raw = router.query.category;
    const value = Array.isArray(raw) ? raw[0] : raw;
    if (value && isCategory(value)) setActive(value);
    else if (value === ALL || !value) setActive(ALL);
  }, [router.isReady, router.query.category]);

  function selectCategory(next: string) {
    setActive(next);
    router.replace(
      {
        pathname: router.pathname,
        query: next === ALL ? {} : { category: next },
      },
      undefined,
      { shallow: true }
    );
  }

  const visible =
    active === ALL
      ? decorated
      : decorated.filter((d) => d.product.category === active);

  const available = PRODUCT_CATEGORIES.filter((c) =>
    products.some((p) => p.category === c)
  );

  const activeBlurb =
    active !== ALL && isCategory(active)
      ? CATEGORY_COPY[active].blurb
      : "Every poster below links to full product details and the existing sample request form. Bulk pricing is quotation-based across the range.";

  return (
    <div className="min-h-screen bg-haze font-manrope">
      <Navigation isMenuOpen={menuOpen} setIsMenuOpen={setMenuOpen} activeLink="/products" />

      {/* ================================================================
         SECTION 01 — CATALOGUE HERO
         ================================================================ */}
      <section className="relative overflow-hidden bg-mist pb-16 pt-28 sm:pb-20 lg:pb-24 lg:pt-36">
        {/* Oversized decorative typography (behind content, hidden from AT) */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-6 bottom-[-3.5rem] select-none text-[9rem] font-extrabold leading-none tracking-[-0.06em] text-ink/[0.06] sm:text-[13rem] lg:bottom-[-5rem] lg:text-[18rem]"
        >
          TEAM
        </span>

        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-end gap-10 px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-14">
          <div className="animate-panel-in">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.28em] text-graphite">
              Product Catalogue
            </p>
            <h1 className="mt-4 text-[2.6rem] font-extrabold uppercase leading-[0.95] tracking-[-0.03em] text-ink sm:text-6xl lg:text-[4.5rem]">
              Sportswear that
              <br />
              defines your
              <br />
              team.
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-graphite lg:text-lg">
              Explore custom school uniforms and sportswear designed for
              institutions, teams and educational communities.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/request-sample-kit"
                className="inline-flex items-center justify-center bg-ink px-6 py-3.5 text-xs font-extrabold tracking-[0.16em] text-white transition-colors hover:bg-graphite focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-mist"
              >
                REQUEST A SAMPLE
              </a>
              <a
                href="#catalogue"
                className="inline-flex items-center justify-center border border-ink/40 px-6 py-3.5 text-xs font-extrabold tracking-[0.16em] text-ink transition-colors hover:bg-ink hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-mist"
              >
                BROWSE CATALOGUE
              </a>
            </div>
          </div>

          {/* Premium group photograph */}
          <div className="animate-fade-in relative">
            <div className="overflow-hidden border border-ink/10 shadow-[0_24px_60px_-30px_rgba(23,35,51,0.45)]">
              <img
                src="/products/hero-group.svg"
                alt="Group of students wearing coordinated school sportswear"
                width={1200}
                height={800}
                className="h-auto w-full object-cover"
                decoding="async"
              />
            </div>
            {/* Intentional overlap: colour chip card */}
            <div className="absolute -bottom-5 left-5 flex items-center gap-3 border border-ink/10 bg-white px-4 py-3 shadow-[0_16px_40px_-24px_rgba(23,35,51,0.5)]">
              <span className="flex gap-1.5" aria-hidden="true">
                <span className="h-4 w-4 rounded-full bg-ink" />
                <span className="h-4 w-4 rounded-full bg-steel" />
                <span className="h-4 w-4 rounded-full border border-ink/20 bg-white" />
              </span>
              <span className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-graphite">
                Your school colours
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
         SECTION 02 — PRODUCT CATEGORY NAVIGATION
         ================================================================ */}
      <nav
        aria-label="Product categories"
        id="catalogue"
        className="sticky top-16 z-30 border-b border-ink/10 bg-white/95 backdrop-blur-sm"
      >
        <div className="mx-auto flex max-w-7xl items-center gap-3 overflow-x-auto px-6 py-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {[ALL, ...available].map((cat) => {
            const isActive = active === cat;
            const label =
              cat === ALL || !isCategory(cat) ? cat : CATEGORY_COPY[cat].label;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => selectCategory(cat)}
                aria-current={isActive ? "true" : undefined}
                className={`shrink-0 whitespace-nowrap px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.16em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 ${
                  isActive
                    ? "bg-ink text-white"
                    : "border border-ink/25 text-graphite hover:border-ink hover:text-ink"
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>
      </nav>

      {/* Active category intro copy (Plan §4.4) */}
      <div className="mx-auto max-w-7xl px-6 pb-2 pt-8">
        <p className="max-w-3xl text-sm leading-relaxed text-graphite">
          <span className="font-extrabold uppercase tracking-[0.14em] text-ink">
            {active === ALL ? "All products" : CATEGORY_COPY[active as ProductCategory].label}
            {" — "}
          </span>
          {activeBlurb}
        </p>
      </div>

      {/* ================================================================
         SECTION 03 — EDITORIAL PRODUCT POSTER COLLECTION
         ================================================================ */}
      <main className="mx-auto max-w-7xl px-6 py-10">
        {visible.length === 0 ? (
          <p className="py-20 text-center text-sm font-semibold uppercase tracking-[0.18em] text-graphite">
            No products in this category yet.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
            {visible.map(({ product, variant, index }) => (
              <EditorialProductPoster
                key={product.slug}
                product={product}
                variant={variant}
                index={index}
              />
            ))}
          </div>
        )}
      </main>

      {/* ================================================================
         SECTION 04 — MANUFACTURING CTA
         ================================================================ */}
      <section className="relative overflow-hidden bg-ink">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -left-4 top-2 select-none text-[8rem] font-extrabold leading-none tracking-[-0.06em] text-white/[0.05] sm:text-[11rem] lg:-left-6 lg:text-[15rem]"
        >
          YOURS
        </span>
        <div className="relative mx-auto max-w-7xl px-6 py-20 text-center lg:py-28">
          <h2 className="mx-auto max-w-4xl text-[2.2rem] font-extrabold uppercase leading-[1] tracking-[-0.03em] text-white sm:text-5xl lg:text-[3.75rem]">
            Your school. Your colours. Your identity.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-mist/80">
            Create a coordinated sportswear collection that represents your
            institution.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a
              href="/request-sample-kit"
              className="inline-flex items-center justify-center bg-white px-7 py-4 text-xs font-extrabold tracking-[0.16em] text-ink transition-colors hover:bg-mist focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
            >
              REQUEST A SAMPLE
            </a>
            <a
              href="/request-sample-kit?intent=bulk"
              className="inline-flex items-center justify-center border border-white/60 px-7 py-4 text-xs font-extrabold tracking-[0.16em] text-white transition-colors hover:bg-white hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
            >
              DISCUSS BULK REQUIREMENTS
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
