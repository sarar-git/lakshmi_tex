import SEO from "@/components/seo";
import ProductDetail from "@/components/ProductDetail";
import { Product } from "@/lib/products";
import { loadProductBySlug, loadProducts } from "@/lib/products-db";
import { GetStaticPaths, GetStaticProps } from "next";

interface ProductDetailPageProps {
  product: Product;
  related: Product[];
}

export default function ProductDetailPage({
  product,
  related,
}: ProductDetailPageProps) {
  return (
    <>
      <SEO
        title={product.seo?.title || product.name}
        description={
          product.seo?.metaDescription ||
          product.fabricSpecification ||
          `${product.name} — custom school sportswear. Bulk pricing available; request a sample.`
        }
        canonical={
          product.seo?.canonical ||
          `https://yourdomain.com/products/${product.slug}`
        }
        ogImage={product.seo?.ogImage}
        ogTitle={product.seo?.title || product.name}
        ogDescription={
          product.seo?.metaDescription || product.fabricSpecification
        }
        twitterCard="summary_large_image"
      />
      <ProductDetail product={product} related={related} />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const products = await loadProducts();
  return {
    paths: products.map((p) => ({ params: { slug: p.slug } })),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<ProductDetailPageProps> = async ({
  params,
}) => {
  const slug = typeof params?.slug === "string" ? params.slug : "";
  const product = await loadProductBySlug(slug);
  if (!product) return { notFound: true, revalidate: 3600 };

  const all = await loadProducts();
  const related = all.filter(
    (p) => p.slug !== product.slug && p.category === product.category
  );
  // If same-category is empty, show the rest of the catalogue instead.
  const fallbackRelated = all.filter((p) => p.slug !== product.slug);

  return {
    props: {
      product,
      related: related.length > 0 ? related : fallbackRelated,
    },
    revalidate: 3600,
  };
};
