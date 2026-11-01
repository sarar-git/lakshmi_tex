import React from "react";
import Head from "next/head";

type SEO = {
  title: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  ogTitle?: string;
  ogDescription?: string;
  twitterCard?: "summary" | "summary_large_image" | "player";
};

export default function SEO({
  title,
  description,
  canonical,
  ogImage,
  ogTitle,
  ogDescription,
  twitterCard,
}: SEO) {
  const siteName = "School Sportswear Manufacturer";

  return (
    <Head>
      <title>
        {title === siteName ? title : `${title} | ${siteName}`}
      </title>
      <meta name="description" content={description || ""} />
      <link rel="canonical" href={canonical || "https://example.com"} />

      {/* Open Graph */}
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={ogDescription || description || ""} />
      <meta property="og:type" content="website" />
      {ogImage && <meta property="og:image" content={ogImage} />}
      <meta property="og:site_name" content={siteName} />

      {/* Twitter Cards */}
      <meta name="twitter:card" content={twitterCard || "summary"} />
      {ogTitle && <meta name="twitter:title" content={ogTitle} />}
      {ogDescription && <meta name="twitter:description" content={ogDescription} />}
      {ogImage && <meta name="twitter:image" content={ogImage} />}
    </Head>
  );
}