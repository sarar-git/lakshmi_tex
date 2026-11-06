import { Html, Head, Main, NextScript } from "next/document";

/**
 * Global document shell.
 * Loads Manrope (the editorial typeface used by the product catalogue and
 * requested in the design brief: "Manrope, Archivo or Sora") as a runtime
 * stylesheet so no build-time font download is required.
 */
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
