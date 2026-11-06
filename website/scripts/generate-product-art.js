/**
 * Generates clearly-marked placeholder product artwork for the editorial
 * catalogue (public/products/*.svg).
 *
 * Why placeholders: the repository contains no product photography and the
 * Product collection has no seeded images (verified in Phase 1). These SVGs
 * are wired through the real `images[]` field of the product schema, so real
 * photography can replace them later with zero component changes.
 *
 * Art direction: flat fashion-illustration silhouettes in the industrial
 * palette (#172333 ink, #8999A8 steel, #687989 graphite, #DCE4EB mist).
 * Figures are neutral, non-identifiable silhouettes — editorial poster style.
 *
 * Run: node scripts/generate-product-art.js
 */

const fs = require("fs");
const path = require("path");

const OUT = path.join(__dirname, "..", "public", "products");
fs.mkdirSync(OUT, { recursive: true });

const INK = "#172333";
const STEEL = "#8999A8";
const GRAPHITE = "#687989";
const MIST = "#DCE4EB";
const WHITE = "#FFFFFF";

/* ------------------------------------------------------------------ */
/* Shared figure parts (800×1000 canvas)                               */
/* ------------------------------------------------------------------ */

function figureBase() {
  // Neutral standing figure: head, neck, arms, legs — drawn under garments.
  return `
  <g>
    <!-- legs -->
    <path d="M345 560 L338 930 L382 930 L392 640 L408 640 L418 930 L462 930 L455 560 Z" fill="${INK}"/>
    <!-- feet -->
    <path d="M330 930 L388 930 L388 962 Q358 974 326 962 Z" fill="#0D1520"/>
    <path d="M412 930 L470 930 L472 962 Q442 974 410 962 Z" fill="#0D1520"/>
    <!-- arms -->
    <path d="M296 268 Q262 380 268 508 Q270 540 296 542 Q320 542 320 512 Q316 400 336 300 Z" fill="${INK}"/>
    <path d="M504 268 Q538 380 532 508 Q530 540 504 542 Q480 542 480 512 Q484 400 464 300 Z" fill="${INK}"/>
    <!-- neck -->
    <rect x="378" y="176" width="44" height="70" fill="#2A3546"/>
    <!-- head -->
    <circle cx="400" cy="132" r="58" fill="#2A3546"/>
    <path d="M344 118 Q352 66 400 64 Q450 66 456 118 Q440 96 400 96 Q360 96 344 118 Z" fill="#0D1520"/>
  </g>`;
}

function shadow() {
  return `<ellipse cx="400" cy="972" rx="220" ry="20" fill="${INK}" opacity="0.14"/>`;
}

/* ------------------------------------------------------------------ */
/* Per-category garments                                               */
/* ------------------------------------------------------------------ */

function teeBody(accent, opts = {}) {
  const stripe = opts.stripe || false;
  const vneck = opts.vneck || false;
  const collar = vneck
    ? `<path d="M348 244 L400 300 L452 244 L432 236 L400 274 L368 236 Z" fill="${accent}"/>`
    : `<path d="M364 240 Q400 272 436 240 L436 230 Q400 258 364 230 Z" fill="${accent}" opacity="0.9"/>`;
  const sideStripe = stripe
    ? `<path d="M318 330 L330 560 L352 560 L342 330 Z" fill="${accent}" opacity="0.85"/>
       <path d="M482 330 L470 560 L448 560 L458 330 Z" fill="${accent}" opacity="0.85"/>`
    : "";
  return `
  <!-- t-shirt -->
  <path d="M340 236 Q400 262 460 236 L540 268 L516 356 L478 340 L478 566 L322 566 L322 340 L284 356 L260 268 Z" fill="${accent}"/>
  <path d="M340 236 Q400 262 460 236 L540 268 L524 306 L464 282 Q400 306 336 282 L276 306 L260 268 Z" fill="${WHITE}" opacity="0.14"/>
  ${collar}
  ${sideStripe}
  <path d="M322 540 L478 540 L478 566 L322 566 Z" fill="${INK}" opacity="0.25"/>`;
}

function shortsBody(accent) {
  return `
  <!-- shorts -->
  <path d="M326 560 L474 560 L482 700 L408 700 L400 636 L392 700 L318 700 Z" fill="${accent}"/>
  <path d="M326 560 L474 560 L476 594 L324 594 Z" fill="${INK}" opacity="0.3"/>
  <rect x="324" y="574" width="152" height="8" rx="4" fill="${WHITE}" opacity="0.55"/>
  <path d="M396 580 L400 616 L404 580" stroke="${WHITE}" stroke-width="5" fill="none" opacity="0.8"/>`;
}

function trackPantBody(accent) {
  return `
  <!-- track pants -->
  <path d="M324 560 L476 560 L470 926 L416 926 L400 660 L384 926 L330 926 Z" fill="${accent}"/>
  <path d="M324 560 L476 560 L475 596 L325 596 Z" fill="${INK}" opacity="0.3"/>
  <path d="M340 610 L336 920 L356 920 L362 610 Z" fill="${WHITE}" opacity="0.5"/>
  <path d="M460 610 L464 920 L444 920 L438 610 Z" fill="${WHITE}" opacity="0.5"/>
  <rect x="388" y="574" width="6" height="40" fill="${WHITE}" opacity="0.8"/>
  <rect x="406" y="574" width="6" height="40" fill="${WHITE}" opacity="0.8"/>`;
}

function gownBody(accent) {
  return `
  <!-- sports gown / warm-up cover-up -->
  <path d="M340 236 Q400 260 460 236 L536 266 L520 380 L486 366 L494 810 Q400 842 306 810 L314 366 L280 380 L264 266 Z" fill="${accent}"/>
  <path d="M400 262 L400 830" stroke="${INK}" stroke-width="7" opacity="0.55"/>
  <path d="M400 262 L400 830" stroke="${WHITE}" stroke-width="2.5" opacity="0.7" stroke-dasharray="14 10"/>
  <circle cx="424" cy="420" r="7" fill="${INK}"/>
  <circle cx="424" cy="500" r="7" fill="${INK}"/>
  <circle cx="424" cy="580" r="7" fill="${INK}"/>
  <path d="M340 236 Q400 260 460 236 L466 260 Q400 292 334 260 Z" fill="${INK}" opacity="0.35"/>
  <path d="M306 810 Q400 842 494 810 L494 836 Q400 868 306 836 Z" fill="${INK}" opacity="0.3"/>`;
}

function kitBodies(accent) {
  return teeBody(accent, { stripe: true }) + shortsBody(accent);
}

/* ------------------------------------------------------------------ */
/* Model artwork                                                       */
/* ------------------------------------------------------------------ */

function modelSvg(category, garment, opts = {}) {
  const accent = opts.accent || INK;
  // Tight viewBox crops to the figure so the model fills the poster frame.
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="236 36 328 964" width="328" height="964" role="img" aria-label="Placeholder illustration: model wearing ${category}">
  <title>Placeholder product illustration — ${category}</title>
  <desc>Placeholder artwork generated by scripts/generate-product-art.js. Replace with real product photography via the product images field.</desc>
  ${shadow()}
  ${figureBase()}
  ${garment(accent, opts)}
</svg>
`;
}

/* ------------------------------------------------------------------ */
/* Detail artwork (600×600)                                            */
/* ------------------------------------------------------------------ */

function fabricTexture(accent, kind) {
  const defs = `<defs>
    <pattern id="weave" width="26" height="26" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
      <rect width="26" height="26" fill="${MIST}"/>
      <rect width="13" height="26" fill="${accent}" opacity="0.28"/>
    </pattern>
    <pattern id="mesh" width="30" height="30" patternUnits="userSpaceOnUse">
      <rect width="30" height="30" fill="${accent}"/>
      <circle cx="15" cy="15" r="6" fill="${MIST}" opacity="0.55"/>
    </pattern>
  </defs>`;

  let art = "";
  if (kind === "stitch") {
    art = `
    <rect width="600" height="600" fill="url(#weave)"/>
    <path d="M60 300 Q300 180 540 300" stroke="${INK}" stroke-width="10" fill="none"/>
    <path d="M60 330 Q300 210 540 330" stroke="${WHITE}" stroke-width="5" fill="none" stroke-dasharray="22 16"/>
    <path d="M60 270 Q300 150 540 270" stroke="${WHITE}" stroke-width="5" fill="none" stroke-dasharray="22 16"/>
    <circle cx="470" cy="450" r="66" fill="${INK}" opacity="0.9"/>
    <path d="M444 450 l18 20 l34 -42" stroke="${WHITE}" stroke-width="9" fill="none" stroke-linecap="round"/>`;
  } else if (kind === "mesh") {
    art = `
    <rect width="600" height="600" fill="url(#mesh)"/>
    <rect x="48" y="48" width="504" height="504" fill="none" stroke="${INK}" stroke-width="8"/>
    <path d="M48 380 L552 380" stroke="${INK}" stroke-width="10"/>
    <path d="M48 404 L552 404" stroke="${WHITE}" stroke-width="5" stroke-dasharray="20 14"/>`;
  } else if (kind === "stripe") {
    art = `
    <rect width="600" height="600" fill="${MIST}"/>
    <rect x="0" y="180" width="600" height="90" fill="${accent}"/>
    <rect x="0" y="300" width="600" height="40" fill="${INK}"/>
    <rect x="0" y="370" width="600" height="16" fill="${GRAPHITE}"/>
    <path d="M0 180 L600 180 M0 270 L600 270" stroke="${INK}" stroke-width="6"/>`;
  } else {
    // collar / seam close-up
    art = `
    <rect width="600" height="600" fill="${accent}"/>
    <path d="M0 0 L600 0 L600 210 Q300 320 0 210 Z" fill="${INK}" opacity="0.92"/>
    <path d="M0 232 Q300 342 600 232" stroke="${WHITE}" stroke-width="7" fill="none" stroke-dasharray="24 16"/>
    <path d="M0 268 Q300 378 600 268" stroke="${WHITE}" stroke-width="4" fill="none" stroke-dasharray="18 14" opacity="0.7"/>
    <rect x="0" y="440" width="600" height="160" fill="${MIST}" opacity="0.25"/>
    <path d="M0 470 L600 470" stroke="${WHITE}" stroke-width="5" stroke-dasharray="22 16" opacity="0.8"/>`;
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="600" height="600" role="img" aria-label="Placeholder fabric detail illustration">
  <title>Placeholder fabric detail illustration</title>
  <desc>Placeholder artwork generated by scripts/generate-product-art.js. Replace with real photography via the product images field.</desc>
  ${defs}
  ${art}
</svg>
`;
}

/* ------------------------------------------------------------------ */
/* Emit                                                                */
/* ------------------------------------------------------------------ */

const categories = [
  { key: "tshirt", label: "T‑shirt", garment: (a, o) => teeBody(a, o), accent: STEEL, d1: "collar", d2: "stitch" },
  { key: "shorts", label: "Shorts", garment: () => shortsBody(GRAPHITE), accent: GRAPHITE, d1: "stitch", d2: "mesh" },
  { key: "trackpants", label: "Track Pants", garment: () => trackPantBody(INK), accent: INK, d1: "stripe", d2: "stitch" },
  { key: "gown", label: "Sports Gown", garment: () => gownBody(GRAPHITE), accent: GRAPHITE, d1: "collar", d2: "stitch" },
  { key: "kit", label: "Complete Kit", garment: (a) => kitBodies(a), accent: STEEL, d1: "mesh", d2: "stripe" },
];

for (const c of categories) {
  fs.writeFileSync(
    path.join(OUT, `${c.key}-model.svg`),
    modelSvg(c.label, c.garment, { accent: c.accent, stripe: c.key === "kit" })
  );
  fs.writeFileSync(
    path.join(OUT, `${c.key}-detail-1.svg`),
    fabricTexture(c.accent, c.d1)
  );
  fs.writeFileSync(
    path.join(OUT, `${c.key}-detail-2.svg`),
    fabricTexture(c.accent, c.d2)
  );
  console.log(`generated ${c.key}-model.svg, ${c.key}-detail-1.svg, ${c.key}-detail-2.svg`);
}

console.log("done →", OUT);
