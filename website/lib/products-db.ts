/**
 * Server-only product data access (database-first).
 *
 * IMPORTANT: this module pulls in mongoose/Payload and must ONLY be imported
 * from getStaticProps / getStaticPaths (Next.js strips those imports from the
 * client bundle). Client code should import types and helpers from
 * `lib/products.ts` instead.
 *
 * Data rules:
 * - Reads the real `Product` collection (collections/products.js schema).
 * - No DB configured (no MONGODB_URI / MONGODB_URL) → returns the clearly-marked
 *   placeholder catalogue from lib/products.ts.
 * - DB configured but unreachable/empty → falls back to placeholders instead of
 *   failing the build.
 */

import type {
  Product,
  ProductCategory,
  ProductColour,
  ProductSeo,
} from "./products";
import { getProducts as getPlaceholderProducts } from "./products";

function isDbConfigured(): boolean {
  return Boolean(process.env.MONGODB_URI || process.env.MONGODB_URL);
}

function normalizeDoc(d: Record<string, unknown>): Product {
  return {
    name: String(d.name ?? ""),
    slug: String(d.slug ?? ""),
    category: d.category as ProductCategory | undefined,
    fabricSpecification: d.fabricSpecification as string | undefined,
    sizes: Array.isArray(d.sizes) ? (d.sizes as string[]) : undefined,
    colours: Array.isArray(d.colours)
      ? (d.colours as ProductColour[])
      : undefined,
    images: Array.isArray(d.images) ? (d.images as string[]) : undefined,
    gsm: typeof d.gsm === "number" ? d.gsm : undefined,
    moq: typeof d.moq === "number" ? d.moq : undefined,
    leadTime: d.leadTime as string | undefined,
    seo: d.seo as ProductSeo | undefined,
    placeholder: false,
  };
}

/** DB-first read; falls back to the marked placeholder catalogue. */
export async function loadProducts(): Promise<Product[]> {
  if (!isDbConfigured()) return getPlaceholderProducts();
  try {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const payloadConfig = require("../payload/config");
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const ProductModel = require("../collections/products");
    await payloadConfig.connect();
    const docs = await ProductModel.find().lean().exec();
    await payloadConfig.mongoose.connection
      .close()
      .catch(() => undefined);
    if (!Array.isArray(docs) || docs.length === 0) return getPlaceholderProducts();
    return docs.map((d: Record<string, unknown>) => normalizeDoc(d));
  } catch (err) {
    console.warn(
      "[products] Database unavailable, using placeholder catalogue:",
      err instanceof Error ? err.message : err
    );
    return getPlaceholderProducts();
  }
}

/** DB-first single product lookup. */
export async function loadProductBySlug(slug: string): Promise<Product | undefined> {
  const products = await loadProducts();
  return products.find((p) => p.slug === slug);
}
