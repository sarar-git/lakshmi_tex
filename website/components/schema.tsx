/**
 * Returns the JSON‑LD markup as a string.
 * Pages can use it with `dangerouslySetInnerHTML={{ __html: schemaFn(...) }}`.
 */

export function organizationLd(
  name: string,
  description: string,
  url: string,
  logo: string
): string {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Organization",
    name,
    description,
    url,
    logo,
    sameAs: [
      "https://twitter.com/yourhandle",
      "https://linkedin.com/company/yourcompany"
    ]
  }, null, 2);
}

export function productLd(
  name: string,
  description: string,
  url: string,
  image: string,
  price?: number,
  sku?: string
): string {
  const obj: any = {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    url,
    image
  };
  if (price !== undefined) obj.price = price;
  if (sku) obj.sku = sku;
  return JSON.stringify(obj, null, 2);
}

export function faqLd(questions: { question: string; answer: string }[]): string {
  const entities = questions.map((q) => ({
    "@type": "Question",
    name: q.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: q.answer
    }
  }));
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: entities
  }, null, 2);
}