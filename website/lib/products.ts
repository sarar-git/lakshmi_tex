/**
 * Product data layer for the editorial catalogue.
 *
 * Data architecture rules (see IMPLEMENTATION RULES in the task brief):
 * - Types mirror `collections/products.js` (Mongoose schema) exactly.
 *   No extra fields are invented; missing attributes are omitted gracefully.
 * - DB-first: when a MongoDB URI is configured in the environment, products
 *   are read from the real `Product` collection.
 * - Fallback: when no database is reachable (the current state of this repo —
 *   no .env, no seed data), the catalogue renders a clearly-marked placeholder
 *   set (Process.md: "seed script with clearly marked placeholder content").
 *   Every placeholder record carries `placeholder: true` and is badged in the UI.
 * - No prices exist in the schema → "BULK PRICING AVAILABLE". Never invent prices.
 */

/** The 5 real enum values from collections/products.js (U+2011 hyphen preserved). */
export const PRODUCT_CATEGORIES = [
  "T‑shirt",
  "Shorts",
  "Track Pants",
  "Sports Gown",
  "Complete Kit",
] as const;

export type ProductCategory = (typeof PRODUCT_CATEGORIES)[number];

/** collections/products.js → colours: [{ hex, stock }] */
export interface ProductColour {
  hex?: string;
  stock?: number;
}

/** collections/products.js → seo: { title, metaDescription, ogImage, canonical } */
export interface ProductSeo {
  title?: string;
  metaDescription?: string;
  ogImage?: string;
  canonical?: string;
}

/** Mirrors the ProductSchema in collections/products.js. */
export interface Product {
  name: string;
  slug: string;
  category?: ProductCategory;
  fabricSpecification?: string;
  sizes?: string[];
  colours?: ProductColour[];
  images?: string[];
  gsm?: number;
  moq?: number;
  leadTime?: string;
  seo?: ProductSeo;
  /** True only for built-in fallback records (not schema data). */
  placeholder?: boolean;
}

/**
 * No price field exists in the schema and quotes are project-based.
 * This is the only pricing treatment allowed.
 */
export const BULK_PRICING_LABEL = "BULK PRICING AVAILABLE";

/**
 * Category copy — sourced from Plan.md §4.4 "Range-specific notes" and the
 * §4.4 listing spec. Not invented claims.
 */
export const CATEGORY_COPY: Record<
  ProductCategory,
  { label: string; blurb: string }
> = {
  "T‑shirt": {
    label: "T‑Shirts",
    blurb:
      "Dry‑fit and moisture‑wicking options with side stripes and contrast piping. Round neck and collar styles for sports days, inter‑school meets and daily PE.",
  },
  Shorts: {
    label: "Shorts",
    blurb:
      "Length and inseam options, elastic and drawstring waist, inner lining where needed, and pocket options for athletics and team sports.",
  },
  "Track Pants": {
    label: "Track Pants",
    blurb:
      "Dry‑fit and moisture‑wicking options with side stripes, contrast piping and ankle or cuff styles for warm‑ups and travel kits.",
  },
  "Sports Gown": {
    label: "Sports Gowns",
    blurb:
      "Warm‑up and cover‑up gowns — fabric, length, zip or button front and hood option. Exact specification confirmed with your order brief.",
  },
  "Complete Kit": {
    label: "Complete Kits",
    blurb:
      "Pre‑built combinations (T‑shirt + shorts, T‑shirt + track pants) with one size chart, one coordinated colourway and one quote.",
  },
};

/**
 * Clearly-marked placeholder catalogue.
 *
 * These records exist ONLY because the repository has no database connection,
 * no .env and no seed data (verified in Phase 1). They carry `placeholder: true`
 * so the UI can badge them, and they use only real schema fields:
 * name, slug, category, fabricSpecification, sizes, colours, images, gsm, moq,
 * leadTime. No product codes, no prices, no specs beyond Plan.md §4.4 copy.
 */
const PLACEHOLDER_PRODUCTS: Product[] = [
  {
    name: "Performance Sports T‑shirt",
    slug: "performance-sports-tshirt",
    category: "T‑shirt",
    fabricSpecification:
      "Dry‑fit knit with moisture‑wicking finish. Side stripe and contrast piping options.",
    sizes: ["26", "28", "30", "32", "34", "36"],
    colours: [
      { hex: "#172333" },
      { hex: "#8999A8" },
      { hex: "#FFFFFF" },
    ],
    images: [
      "/products/tshirt-model.svg",
      "/products/tshirt-detail-1.svg",
      "/products/tshirt-detail-2.svg",
    ],
    placeholder: true,
  },
  {
    name: "House Colour Training T‑shirt",
    slug: "house-colour-training-tshirt",
    category: "T‑shirt",
    fabricSpecification:
      "Breathable single‑jersey with reinforced collar. Plain or blocked house colours.",
    sizes: ["26", "28", "30", "32", "34", "36"],
    colours: [
      { hex: "#172333" },
      { hex: "#687989" },
    ],
    images: [
      "/products/tshirt-model.svg",
      "/products/tshirt-detail-2.svg",
      "/products/tshirt-detail-1.svg",
    ],
    placeholder: true,
  },
  {
    name: "Athletic Team Shorts",
    slug: "athletic-team-shorts",
    category: "Shorts",
    fabricSpecification:
      "Lightweight sport short with elastic and drawstring waist, optional inner lining and pockets.",
    sizes: ["26", "28", "30", "32", "34", "36"],
    colours: [
      { hex: "#172333" },
      { hex: "#8999A8" },
      { hex: "#FFFFFF" },
    ],
    images: [
      "/products/shorts-model.svg",
      "/products/shorts-detail-1.svg",
      "/products/shorts-detail-2.svg",
    ],
    placeholder: true,
  },
  {
    name: "Inter‑School Match Shorts",
    slug: "inter-school-match-shorts",
    category: "Shorts",
    fabricSpecification:
      "Mesh‑back sport short with contrast side panel. Inseam length options per brief.",
    sizes: ["28", "30", "32", "34", "36"],
    colours: [
      { hex: "#172333" },
      { hex: "#687989" },
    ],
    images: [
      "/products/shorts-model.svg",
      "/products/shorts-detail-2.svg",
      "/products/shorts-detail-1.svg",
    ],
    placeholder: true,
  },
  {
    name: "Warm‑Up Track Pant",
    slug: "warm-up-track-pant",
    category: "Track Pants",
    fabricSpecification:
      "Dry‑fit track pant with side stripe, zip hem and cuff or ankle finish options.",
    sizes: ["26", "28", "30", "32", "34", "36"],
    colours: [
      { hex: "#172333" },
      { hex: "#8999A8" },
      { hex: "#FFFFFF" },
    ],
    images: [
      "/products/trackpants-model.svg",
      "/products/trackpants-detail-1.svg",
      "/products/trackpants-detail-2.svg",
    ],
    placeholder: true,
  },
  {
    name: "Travel Team Track Pant",
    slug: "travel-team-track-pant",
    category: "Track Pants",
    fabricSpecification:
      "Brushed‑back knit with contrast piping and elastic waist. Team travel standard.",
    sizes: ["28", "30", "32", "34", "36"],
    colours: [
      { hex: "#172333" },
      { hex: "#687989" },
    ],
    images: [
      "/products/trackpants-model.svg",
      "/products/trackpants-detail-2.svg",
      "/products/trackpants-detail-1.svg",
    ],
    placeholder: true,
  },
  {
    name: "Sports Warm‑Up Gown",
    slug: "sports-warm-up-gown",
    category: "Sports Gown",
    fabricSpecification:
      "Warm‑up gown — zip or button front, hood option, length confirmed with your brief.",
    sizes: ["28", "30", "32", "34", "36"],
    colours: [
      { hex: "#172333" },
      { hex: "#8999A8" },
    ],
    images: [
      "/products/gown-model.svg",
      "/products/gown-detail-1.svg",
      "/products/gown-detail-2.svg",
    ],
    placeholder: true,
  },
  {
    name: "Complete Team Kit — T‑shirt + Shorts",
    slug: "complete-team-kit-tshirt-shorts",
    category: "Complete Kit",
    fabricSpecification:
      "Pre‑built combination: T‑shirt + shorts with one size chart and one coordinated colourway.",
    sizes: ["26", "28", "30", "32", "34", "36"],
    colours: [
      { hex: "#172333" },
      { hex: "#8999A8" },
      { hex: "#FFFFFF" },
    ],
    images: [
      "/products/kit-model.svg",
      "/products/kit-detail-1.svg",
      "/products/kit-detail-2.svg",
    ],
    placeholder: true,
  },
  {
    name: "Complete Travel Kit — T‑shirt + Track Pant",
    slug: "complete-travel-kit-tshirt-trackpant",
    category: "Complete Kit",
    fabricSpecification:
      "Pre‑built combination: T‑shirt + track pant with one size chart and one coordinated colourway.",
    sizes: ["28", "30", "32", "34", "36"],
    colours: [
      { hex: "#172333" },
      { hex: "#687989" },
    ],
    images: [
      "/products/kit-model.svg",
      "/products/kit-detail-2.svg",
      "/products/kit-detail-1.svg",
    ],
    placeholder: true,
  },
];

/** All catalogue products.
 *
 * This module is intentionally free of Node/DB imports so it is safe to use
 * in client components (types, constants, helpers). Database access lives in
 * `lib/products-db.ts`, which is only imported from getStaticProps — keeping
 * mongoose out of the browser bundle.
 *
 * Returns the clearly-marked placeholder catalogue; real DB reads happen in
 * `loadProducts()` (products-db.ts) which tries the database first.
 */
export async function getProducts(): Promise<Product[]> {
  return PLACEHOLDER_PRODUCTS;
}

/** All catalogue products (DB-first, marked placeholder fallback). */
export async function getProductBySlug(slug: string): Promise<Product | undefined> {
  const products = await getProducts();
  return products.find((p) => p.slug === slug);
}

/** Categories that actually have products right now (for the filter bar). */
export function getAvailableCategories(products: Product[]): ProductCategory[] {
  const present = new Set(
    products.map((p) => p.category).filter(Boolean) as ProductCategory[]
  );
  return PRODUCT_CATEGORIES.filter((c) => present.has(c));
}

/**
 * Returns a gallery image that matches a colour, if one exists.
 * The schema maps colours as [{ hex, stock }] and images as a flat list, so a
 * match is only possible when an image filename/URL embeds the hex value.
 * Returns undefined when no matching image exists — callers must then keep the
 * current image (never invent an image swap).
 */
export function imageForColour(
  product: Product,
  hex?: string
): string | undefined {
  if (!hex || !product.images?.length) return undefined;
  const needle = hex.replace("#", "").toLowerCase();
  if (!needle) return undefined;
  return product.images.find((img) =>
    img.toLowerCase().includes(needle)
  );
}

/**
 * Composition variant (A–D) assignment — deterministic by category and the
 * product's position inside that category, never random.
 */
export type PosterVariant = "A" | "B" | "C" | "D";

const VARIANT_BY_CATEGORY: Record<ProductCategory, PosterVariant> = {
  "T‑shirt": "A",
  Shorts: "B",
  "Track Pants": "C",
  "Sports Gown": "D",
  "Complete Kit": "A",
};

export function assignVariant(
  category: ProductCategory | undefined,
  indexInCategory: number
): PosterVariant {
  const base: PosterVariant = category ? VARIANT_BY_CATEGORY[category] : "A";
  const order: PosterVariant[] = ["A", "B", "C", "D"];
  const baseIdx = order.indexOf(base);
  // Alternate with the next variant for siblings so same-category posters differ.
  return order[(baseIdx + indexInCategory) % order.length];
}
