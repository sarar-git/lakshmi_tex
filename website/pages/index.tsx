import Home from "../components/home";
import SEO from "@/components/seo";

export default function Index() {
  return (
    <>
      <SEO
        title="School Sportswear Manufacturer"
        description="B2B lead‑generation website for schools across India. Request samples, get quotes, and view case studies."
        canonical="https://yourdomain.com"
        ogImage="https://example.com/og-home.jpg"
        ogTitle="School Sportswear Manufacturer"
        ogDescription="B2B website for school sports uniforms."
        twitterCard="summary_large_image"
      />
      <Home />
    </>
  );
}