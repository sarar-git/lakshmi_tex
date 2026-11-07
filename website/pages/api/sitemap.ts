import type { NextApiRequest, NextApiResponse } from "next";

const baseUrl = process.env.NEXT_PUBLIC_URL || "https://example.com";

/**
 * Only routes that actually render a page are listed. Legacy placeholder
 * destinations that never had a page (privacy/terms/regions/gallery …) are
 * tracked as open items rather than advertised to crawlers.
 */
const routes = [
  "",
  "/products",
  "/collections",
  "/customization",
  "/manufacturing",
  "/about",
  "/contact",
  "/request-sample-kit",
  "/sample-kit-thank-you",
];

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  // Product detail pages (DB-first, placeholder fallback) — server-only import.
  let productRoutes: string[] = [];
  try {
    const { loadProducts } = await import("@/lib/products-db");
    const products = await loadProducts();
    productRoutes = products.map((p) => `/products/${p.slug}`);
  } catch {
    productRoutes = [];
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${[...routes, ...productRoutes]
    .map((route) => `<url><loc>${baseUrl}${route}</loc></url>`)
    .join("\n")}
</urlset>`;

  res.setHeader("Content-Type", "application/xml");
  res.status(200).send(xml);
}
