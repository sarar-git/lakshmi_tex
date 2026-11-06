import SEO from "@/components/seo";
import ProductsCatalogue from "@/components/ProductsCatalogue";
import { Product } from "@/lib/products";
import { loadProducts } from "@/lib/products-db";

interface ProductsPageProps {
  products: Product[];
}

export default function ProductsPage({ products }: ProductsPageProps) {
  return (
    <>
      <SEO
        title="Products"
        description="Explore custom school uniforms and sportswear — T‑shirts, shorts, track pants, sports gowns and complete kits. Bulk pricing available; request a sample."
        canonical="https://yourdomain.com/products"
        ogImage="https://example.com/og-products.jpg"
        ogTitle="School Sportswear Catalogue"
        ogDescription="Editorial catalogue of custom school sportswear — request a sample."
        twitterCard="summary_large_image"
      />
      <ProductsCatalogue products={products} />
    </>
  );
}

/**
 * DB-first product load at build/revalidate time; falls back to the marked
 * placeholder catalogue when no database is configured.
 */
export async function getStaticProps(): Promise<{
  props: ProductsPageProps;
  revalidate?: number;
}> {
  const products = await loadProducts();
  return { props: { products }, revalidate: 3600 };
}
