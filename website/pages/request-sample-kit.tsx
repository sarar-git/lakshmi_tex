import RequestSampleKit from "./RequestSampleKit";
import SEO from "@/components/seo";

export default function RequestSampleKitPage() {
  return (
    <>
      <SEO
        title="Request Sample Kit"
        description="Request a free sample kit for school sports uniforms. Provide your school details and we'll ship a kit within 5‑7 days."
        canonical="https://yourdomain.com/request-sample-kit"
        ogImage="https://example.com/og-sample-kit.jpg"
        ogTitle="Request Sample Kit"
        ogDescription="Request a free sample kit for school sports uniforms."
        twitterCard="summary"
      />
      <RequestSampleKit />
    </>
  );
}