import { PRODUCT_CATEGORIES, type ProductCategory } from "./products";

/**
 * Coordinated school sportswear collections (master brief sections 6 and 7).
 *
 * A collection is a curated grouping of the EXISTING product categories — no
 * new products, categories, specs or prices are introduced here. The four
 * collections follow the brief's suggested set and map only onto the five
 * categories that exist in the product schema.
 */
export interface SportswearCollection {
  slug: string;
  title: string;
  /** Short editorial description grounded in what the site already claims */
  blurb: string;
  /** Which real product categories this collection brings together */
  categories: ProductCategory[];
  /** Where the Explore CTA lands */
  href: string;
}

export const SPORTSWEAR_COLLECTIONS: SportswearCollection[] = [
  {
    slug: "school-sports",
    title: "School Sports Collection",
    blurb:
      "The everyday sports kit — sports T-shirts and shorts developed together in your school colours, with crest placement and coordinated detailing.",
    categories: ["T‑shirt", "Shorts"],
    href: "/products?category=T‑shirt",
  },
  {
    slug: "house-sports",
    title: "House Sports Collection",
    blurb:
      "House-wise sportswear for inter-house meets and sports days — house colours carried across T-shirts, shorts and track pants so every team reads instantly.",
    categories: ["T‑shirt", "Shorts", "Track Pants"],
    href: "/products?category=Track Pants",
  },
  {
    slug: "winter-sportswear",
    title: "Winter Sportswear Collection",
    blurb:
      "Warm-up layers for cooler mornings and travel days — track pants and sports gowns cut to work as one coordinated set.",
    categories: ["Track Pants", "Sports Gown"],
    href: "/products?category=Track Pants",
  },
  {
    slug: "custom-team",
    title: "Custom Team Collection",
    blurb:
      "Complete coordinated kits for teams, squads and annual sports days — T-shirt, shorts and track pieces presented as one institutional design.",
    categories: ["Complete Kit"],
    href: "/products?category=Complete Kit",
  },
];

/** Category labels for a collection, in schema order, without duplicates. */
export function collectionGarments(
  collection: SportswearCollection
): ProductCategory[] {
  return PRODUCT_CATEGORIES.filter((c) => collection.categories.includes(c));
}
