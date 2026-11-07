import { Html, Head, Main, NextScript } from "next/document";

/**
 * Global document shell.
 * Loads the editorial typefaces as runtime stylesheets so no build-time font
 * download is required:
 *   - Cormorant Garamond: primary serif display face (master brief section 4)
 *   - Manrope: secondary sans face used for body copy and micro-labels
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
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Manrope:wght@400;500;600;700;800&display=swap"
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
