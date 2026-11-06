import React, { useState } from "react";
import {
  Product,
  PosterVariant,
  BULK_PRICING_LABEL,
  CATEGORY_COPY,
  imageForColour,
} from "@/lib/products";

export interface EditorialProductPosterProps {
  /** Product record (real schema fields only). */
  product: Product;
  /** Composition variant A–D (deterministically assigned by category). */
  variant: PosterVariant;
  /** Position in the catalogue, for editorial numbering (01, 02 …). */
  index?: number;
}

/* ------------------------------------------------------------------ */
/* Shared atoms                                                        */
/* ------------------------------------------------------------------ */

function SwatchRow({
  product,
  activeHex,
  onSelect,
}: {
  product: Product;
  activeHex?: string;
  onSelect?: (hex: string | undefined) => void;
}) {
  if (!product.colours?.length) return null;
  return (
    <ul className="flex flex-wrap items-center gap-2" role="list">
      {product.colours.map((c, i) => {
        const isActive = (activeHex ?? product.colours?.[0]?.hex) === c.hex;
        return (
          <li key={`${c.hex ?? i}`}>
            <button
              type="button"
              aria-label={`Select colour ${c.hex ?? i + 1}`}
              aria-pressed={isActive}
              title={c.hex}
              onClick={() => onSelect?.(c.hex)}
              className={`h-6 w-6 rounded-full border transition-transform motion-safe:hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 ${
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
  );
}

function SizeRow({ product }: { product: Product }) {
  if (!product.sizes?.length) return null;
  return (
    <ul className="flex flex-wrap gap-1.5" role="list" aria-label="Available sizes">
      {product.sizes.map((s) => (
        <li
          key={s}
          className="border border-ink/25 px-2 py-0.5 text-[11px] font-bold tracking-wider text-ink/80"
        >
          {s}
        </li>
      ))}
    </ul>
  );
}

function BulkPricingChip({ light = false }: { light?: boolean }) {
  return (
    <span
      className={`inline-block px-3 py-1.5 text-[11px] font-extrabold tracking-[0.18em] ${
        light ? "bg-white text-ink" : "bg-ink text-white"
      }`}
    >
      {BULK_PRICING_LABEL}
    </span>
  );
}

function PlaceholderChip() {
  return (
    <span className="inline-block border border-ink/30 px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.18em] text-ink/60">
      Placeholder entry
    </span>
  );
}

function MetaLine({ product }: { product: Product }) {
  const bits: string[] = [];
  if (product.gsm) bits.push(`${product.gsm} GSM`);
  if (product.moq) bits.push(`MOQ ${product.moq}`);
  if (product.leadTime) bits.push(`Lead time ${product.leadTime}`);
  if (!bits.length) return null;
  return (
    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-graphite">
      {bits.join(" · ")}
    </p>
  );
}

function CTARow({
  product,
  stacked = false,
  light = false,
}: {
  product: Product;
  stacked?: boolean;
  light?: boolean;
}) {
  const sampleHref = `/request-sample-kit?product=${encodeURIComponent(product.slug)}`;
  const detailHref = `/products/${encodeURIComponent(product.slug)}`;
  return (
    <div
      className={`flex gap-2 ${stacked ? "flex-col w-full" : "flex-col sm:flex-row"}`}
    >
      <a
        href={sampleHref}
        className={`inline-flex items-center justify-center whitespace-nowrap px-4 py-2.5 text-[11px] font-extrabold tracking-[0.14em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 ${
          light
            ? "bg-white text-ink hover:bg-mist"
            : "bg-ink text-white hover:bg-graphite"
        }`}
      >
        REQUEST A SAMPLE
      </a>
      <a
        href={detailHref}
        className={`inline-flex items-center justify-center whitespace-nowrap border px-4 py-2.5 text-[11px] font-extrabold tracking-[0.14em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 ${
          light
            ? "border-white/70 text-white hover:bg-white hover:text-ink"
            : "border-ink/40 text-ink hover:bg-ink hover:text-white"
        }`}
      >
        VIEW PRODUCT
      </a>
    </div>
  );
}

function InfoPanel({
  product,
  align = "left",
  compact = false,
  activeHex,
  onSelectColour,
}: {
  product: Product;
  align?: "left" | "right";
  compact?: boolean;
  activeHex?: string;
  onSelectColour?: (hex: string | undefined) => void;
}) {
  const categoryLabel = product.category
    ? CATEGORY_COPY[product.category].label
    : "";
  return (
    <div
      className={`border border-ink/10 bg-white/75 p-4 backdrop-blur-[2px] ${
        align === "right" ? "text-right" : "text-left"
      }`}
    >
      <div
        className={`flex flex-wrap items-center gap-2 ${
          align === "right" ? "justify-end" : ""
        }`}
      >
        {product.placeholder && <PlaceholderChip />}
        {categoryLabel && (
          <span className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-graphite">
            {categoryLabel}
          </span>
        )}
      </div>
      <h3
        className={`mt-2 font-extrabold uppercase leading-[1.03] tracking-tight text-ink ${
          compact ? "text-xl" : "text-2xl xl:text-[1.75rem]"
        }`}
      >
        {product.name}
      </h3>
      {product.fabricSpecification && (
        <p className="mt-2 line-clamp-3 text-[13px] leading-relaxed text-graphite">
          {product.fabricSpecification}
        </p>
      )}
      <div
        className={`mt-3 flex flex-wrap items-center gap-3 ${
          align === "right" ? "justify-end" : ""
        }`}
      >
        <SizeRow product={product} />
        <SwatchRow
          product={product}
          activeHex={activeHex}
          onSelect={onSelectColour}
        />
      </div>
      <div
        className={`mt-3 flex flex-wrap items-center gap-2 ${
          align === "right" ? "justify-end" : ""
        }`}
      >
        <BulkPricingChip />
      </div>
      <MetaLine product={product} />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Poster                                                              */
/* ------------------------------------------------------------------ */

const BG_BY_VARIANT: Record<PosterVariant, string[]> = {
  A: ["bg-mist", "bg-haze"],
  B: ["bg-haze", "bg-white"],
  C: ["bg-white", "bg-mist"],
  D: ["bg-steel", "bg-steel"],
};

const MONOGRAM: Record<string, string> = {
  "T‑shirt": "TS",
  Shorts: "SH",
  "Track Pants": "TR",
  "Sports Gown": "SG",
  "Complete Kit": "CK",
};

function pad(n: number) {
  return String(n + 1).padStart(2, "0");
}

export function EditorialProductPoster({
  product,
  variant,
  index = 0,
}: EditorialProductPosterProps) {
  const [activeHex, setActiveHex] = useState<string | undefined>(
    product.colours?.[0]?.hex
  );

  const images = product.images ?? [];
  // Swap the displayed image only when a colour-matched image actually exists
  // (schema has no per-colour image mapping — so this stays on the main image
  // unless real photography adds one).
  const mainImage =
    (activeHex ? imageForColour(product, activeHex) : undefined) ??
    images[0] ??
    undefined;
  const supporting = images.slice(1, 3);
  const category = product.category;
  const monogram = category ? MONOGRAM[category] : "TX";
  const bg = BG_BY_VARIANT[variant][index % 2];
  const isDark = variant === "D";
  const number = pad(index);

  const decorative = (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute select-none font-extrabold leading-none ${
        isDark ? "text-white/25" : "text-ink/[0.06]"
      }`}
      style={{ letterSpacing: "-0.05em" }}
    >
      {monogram}
    </span>
  );

  const modelImage = mainImage ? (
    <img
      src={mainImage}
      alt={`${product.name} — model wearing the product`}
      width={328}
      height={964}
      className="h-full w-auto object-contain motion-safe:transition-transform motion-safe:duration-500"
      loading={index < 2 ? "eager" : "lazy"}
      decoding="async"
    />
  ) : (
    <div className="flex h-full items-center justify-center text-6xl font-extrabold text-ink/20">
      {monogram}
    </div>
  );

  const supportImages = supporting.map((src, i) => (
    <img
      key={src}
      src={src}
      alt={`${product.name} — product detail view ${i + 1}`}
      width={600}
      height={600}
      className="aspect-square w-full border border-ink/15 object-cover"
      loading="lazy"
      decoding="async"
    />
  ));

  return (
    <article
      className={`group relative overflow-hidden border border-ink/10 ${bg} font-manrope`}
      aria-label={`${product.name} product poster`}
    >
      {/* ---------------- Desktop: editorial composition (md+) --------------- */}
      <div className="relative hidden aspect-[4/5] md:block">
        {variant === "A" && (
          <>
            <span
              aria-hidden="true"
              className={`absolute left-5 top-5 z-10 text-[11px] font-extrabold tracking-[0.22em] ${
                isDark ? "text-white/70" : "text-ink/50"
              }`}
            >
              {number}
            </span>
            {decorative}
            <div className="absolute left-5 top-1/2 z-10 w-[24%] -translate-y-1/2 space-y-3">
              {supportImages}
            </div>
            <div className="absolute bottom-0 left-1/2 z-[1] flex h-[92%] -translate-x-1/2 items-end justify-center motion-safe:group-hover:scale-[1.02]">
              {modelImage}
            </div>
            <div className="absolute right-5 top-5 z-10 w-[44%]">
              <InfoPanel
                product={product}
                align="right"
                activeHex={activeHex}
                onSelectColour={setActiveHex}
              />
            </div>
            <div className="absolute bottom-5 left-5 z-10">
              <CTARow product={product} stacked />
            </div>
          </>
        )}

        {variant === "B" && (
          <>
            <span
              aria-hidden="true"
              className="absolute right-5 top-5 z-10 text-[11px] font-extrabold tracking-[0.22em] text-ink/50"
            >
              {number}
            </span>
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -left-6 top-[26%] z-0 select-none text-[16rem] font-extrabold leading-none tracking-[-0.06em] text-ink/[0.07]"
            >
              {monogram}
            </span>
            <div className="absolute bottom-0 right-[1%] z-[1] flex h-[92%] items-end justify-center motion-safe:group-hover:scale-[1.02]">
              {modelImage}
            </div>
            <div className="absolute left-5 top-5 z-10 w-[46%]">
              <InfoPanel
                product={product}
                activeHex={activeHex}
                onSelectColour={setActiveHex}
              />
            </div>
            <div className="absolute bottom-5 left-5 z-10 flex flex-col gap-3">
              <div className="grid w-[46%] min-w-[200px] grid-cols-2 gap-3">
                {supportImages}
              </div>
              <CTARow product={product} stacked />
            </div>
          </>
        )}

        {variant === "C" && (
          <>
            <span
              aria-hidden="true"
              className="absolute left-5 top-5 z-10 text-[11px] font-extrabold tracking-[0.22em] text-ink/50"
            >
              {number}
            </span>
            <span
              aria-hidden="true"
              className="pointer-events-none absolute bottom-[8%] left-[38%] z-0 select-none text-[18rem] font-extrabold leading-none tracking-[-0.06em] text-ink/[0.07]"
            >
              {monogram}
            </span>
            <div className="absolute bottom-0 left-[1%] z-[1] flex h-[92%] items-end justify-center motion-safe:group-hover:scale-[1.02]">
              {modelImage}
            </div>
            <div className="absolute right-5 top-5 z-10 w-[46%]">
              <InfoPanel
                product={product}
                align="right"
                activeHex={activeHex}
                onSelectColour={setActiveHex}
              />
            </div>
            <div className="absolute right-5 top-[47%] z-10 grid w-[42%] grid-cols-2 gap-3">
              {supportImages}
            </div>
            <div className="absolute bottom-5 right-5 z-10 w-[48%]">
              <CTARow product={product} stacked />
            </div>
          </>
        )}

        {variant === "D" && (
          <>
            <span
              aria-hidden="true"
              className="absolute left-5 top-5 z-20 text-[11px] font-extrabold tracking-[0.22em] text-white/80"
            >
              {number}
            </span>
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-[4%] z-0 select-none text-center text-[22rem] font-extrabold leading-none tracking-[-0.06em] text-white/25"
            >
              {monogram}
            </span>
            <div className="absolute bottom-[132px] left-1/2 z-[1] flex h-[78%] -translate-x-1/2 items-end justify-center motion-safe:group-hover:scale-[1.02]">
              {modelImage}
            </div>
            {/* Minimal lower information bar */}
            <div className="absolute inset-x-0 bottom-0 z-10 bg-ink p-5 text-white">
              <div className="flex items-start justify-between gap-4">
                <div>
                  {product.category && (
                    <span className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-steel">
                      {CATEGORY_COPY[product.category].label}
                    </span>
                  )}
                  <h3 className="mt-1 text-2xl font-extrabold uppercase leading-[1.05] tracking-tight">
                    {product.name}
                  </h3>
                </div>
                <div className="shrink-0">
                  <BulkPricingChip light />
                </div>
              </div>
              <div className="mt-3 flex items-end justify-between gap-4">
                <div className="flex flex-col gap-2">
                  <SwatchRow product={product} activeHex={activeHex} onSelect={setActiveHex} />
                  <SizeRow product={product} />
                </div>
                <div className="w-[56%] max-w-[380px]">
                  <CTARow product={product} light />
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      {/* ---------------- Mobile: recomposed single-column poster ----------- */}
      <div className="flex flex-col gap-4 p-5 md:hidden">
        <div className="flex items-center justify-between text-[11px] font-extrabold tracking-[0.22em]">
          <span className={isDark ? "text-white/70" : "text-ink/50"}>{number}</span>
          <span className={isDark ? "text-white/80" : "text-graphite"}>
            {product.category ? CATEGORY_COPY[product.category].label : ""}
          </span>
        </div>

        <div className="relative flex min-h-[300px] items-end justify-center overflow-hidden">
          <span
            aria-hidden="true"
            className={`pointer-events-none absolute inset-0 flex select-none items-center justify-center text-[11rem] font-extrabold leading-none tracking-[-0.06em] ${
              isDark ? "text-white/25" : "text-ink/[0.07]"
            }`}
          >
            {monogram}
          </span>
          <div className="relative z-[1] aspect-[328/964] w-[46%] max-w-[220px]">
            {modelImage}
          </div>
        </div>

        <InfoPanel
          product={product}
          activeHex={activeHex}
          onSelectColour={setActiveHex}
        />

        {supporting.length > 0 && (
          <div className="grid grid-cols-2 gap-3">{supportImages}</div>
        )}

        <CTARow product={product} stacked />
      </div>
    </article>
  );
}

export default EditorialProductPoster;
