import type { NextApiRequest, NextApiResponse } from "next";

const baseUrl = process.env.NEXT_PUBLIC_URL || "https://example.com";

const routes = [
  "",
  "/request-sample-kit",
  "/sample-kit-thank-you",
  "/products",
  "/about",
  "/quality-certifications",
  "/our-factory",
  "/schools-we-serve",
  "/case-studies",
  "/region-tamil-nadu",
  "/region-karnataka",
  "/region-rest-of-india",
  "/gallery",
  "/how-it-works",
  "/resources",
  "/faqs",
  "/contact",
  "/privacy-policy",
  "/terms",
  "/cookie-policy",
];

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes.map((route) => `<url><loc>${baseUrl}${route}</loc></url>`).join("\n")}
</urlset>`;

  res.setHeader("Content-Type", "application/xml");
  res.status(200).send(xml);
}