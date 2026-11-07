import Home from "../components/home";
import SEO from "@/components/seo";
import { Product } from "@/lib/products";
import { loadProducts } from "@/lib/products-db";

interface IndexPageProps {
  products: Product[];
}

export default function Index({ products }: IndexPageProps) {
  return (
    <>
      <SEO
        title="Lakshmi Tex — Custom School Sportswear Manufacturer"
        description="Lakshmi Tex designs and manufactures fully customised school sportswear collections — coordinated T-shirts, shorts, track pants, gowns and complete kits for institutions. Request a sample kit."
        canonical="https://yourdomain.com"
        ogImage="https://example.com/og-home.jpg"
        ogTitle="Lakshmi Tex — Custom School Sportswear Manufacturer"
        ogDescription="Custom-designed school sportswear collections, developed around your institution's identity, colours and requirements."
        twitterCard="summary_large_image"
      />
      <Home products={products} />
    </>
  );
}

/**
 * DB-first product load at build/revalidate time; falls back to the marked
 * placeholder catalogue when no database is configured (same loader as the
 * products route — server-only, never imported into the client bundle).
 */
export async function getStaticProps(): Promise<{
  props: IndexPageProps;
  revalidate?: number;
}> {
  const products = await loadProducts();
  return { props: { products }, revalidate: 3600 };
}
