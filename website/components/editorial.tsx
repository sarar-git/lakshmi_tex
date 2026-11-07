import React from "react";

/**
 * Shared editorial primitives for the luxury lookbook design system
 * (master brief sections 4 and 13).
 *
 * - Cormorant Garamond serif display headings
 * - Wide-tracked uppercase micro-labels
 * - Fine decorative dividers
 * - Labeled placeholder frames documenting the photography we still need
 * - Sharp-cornered CTAs (no pills, no gradients)
 */

/* ------------------------------------------------------------------ */
/* Micro-label (refined uppercase annotation)                          */
/* ------------------------------------------------------------------ */

export function Eyebrow({
  children,
  className = "",
  tone = "taupe",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "taupe" | "gold" | "espresso" | "softwhite";
}) {
  const tones = {
    taupe: "text-taupe",
    gold: "text-gold",
    espresso: "text-espresso",
    softwhite: "text-softwhite/70",
  };
  return (
    <span
      className={`inline-block text-[11px] font-semibold uppercase leading-none tracking-[0.28em] ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* Serif display heading                                               */
/* ------------------------------------------------------------------ */

export function EditorialHeading({
  children,
  as: Tag = "h2",
  className = "",
}: {
  children: React.ReactNode;
  as?: "h1" | "h2" | "h3" | "h4" | "p";
  className?: string;
}) {
  return (
    <Tag
      className={`font-cormorant font-semibold leading-[0.98] tracking-[-0.01em] text-espresso ${className}`}
    >
      {children}
    </Tag>
  );
}

/* ------------------------------------------------------------------ */
/* Fine decorative divider                                             */
/* ------------------------------------------------------------------ */

export function Rule({
  label,
  className = "",
  tone = "champagne",
}: {
  label?: React.ReactNode;
  className?: string;
  tone?: "champagne" | "taupe" | "softwhite";
}) {
  const line = {
    champagne: "bg-champagne",
    taupe: "bg-taupe/40",
    softwhite: "bg-softwhite/30",
  }[tone];

  if (label) {
    return (
      <div className={`flex items-center gap-4 ${className}`}>
        <span className={`h-px flex-1 ${line}`} />
        <Eyebrow>{label}</Eyebrow>
        <span className={`h-px flex-1 ${line}`} />
      </div>
    );
  }
  return <span className={`block h-px w-full ${line} ${className}`} aria-hidden="true" />;
}

/* ------------------------------------------------------------------ */
/* Oversized decorative background letter (aria-hidden by design)      */
/* ------------------------------------------------------------------ */

export function DecorativeLetter({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute select-none font-cormorant font-semibold leading-none text-champagne/70 ${className}`}
    >
      {children}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* Labeled placeholder frame                                           */
/*                                                                     */
/* The repository contains no photography yet (master brief section    */
/* 13). Every intended image slot renders one of these frames so the   */
/* composition, aspect ratio and asset requirement stay documented.    */
/* ------------------------------------------------------------------ */

export function ImageFrame({
  label,
  caption,
  aspect = "aspect-[4/5]",
  className = "",
  tone = "ivory",
}: {
  /** Short asset name, also used as the accessible label */
  label: string;
  /** Full description of the photograph that belongs here */
  caption: string;
  aspect?: string;
  className?: string;
  tone?: "ivory" | "champagne" | "softwhite" | "espresso";
}) {
  const tones = {
    ivory: "bg-ivory",
    champagne: "bg-champagne/60",
    softwhite: "bg-softwhite",
    espresso: "bg-espresso",
  }[tone];
  const ink = tone === "espresso" ? "text-softwhite/70" : "text-taupe";
  const border =
    tone === "espresso" ? "border-softwhite/25" : "border-taupe/35";

  return (
    <div
      role="img"
      aria-label={`${label} — placeholder. ${caption}`}
      className={`relative flex ${aspect} w-full flex-col items-center justify-center gap-3 overflow-hidden border ${border} ${tones} ${className}`}
    >
      <span
        aria-hidden="true"
        className={`absolute inset-3 border border-dashed ${border} md:inset-4`}
      />
      <span
        className={`relative px-6 text-center text-[10px] font-semibold uppercase leading-relaxed tracking-[0.24em] ${ink}`}
      >
        {label}
      </span>
      <span
        className={`relative max-w-[34ch] px-6 text-center text-[11px] leading-snug tracking-wide ${ink} opacity-80`}
      >
        {caption}
      </span>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* CTAs — sharp corners, wide tracking, no pills                       */
/* ------------------------------------------------------------------ */

const ctaBase =
  "inline-flex items-center justify-center px-7 py-4 text-[11px] font-bold uppercase leading-none tracking-[0.2em] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ivory";

export function PrimaryCTA({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`${ctaBase} bg-espresso text-softwhite hover:bg-black ${className}`}
    >
      {children}
    </a>
  );
}

export function SecondaryCTA({
  href,
  children,
  className = "",
  tone = "espresso",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  tone?: "espresso" | "softwhite";
}) {
  const tones =
    tone === "softwhite"
      ? "border-softwhite/50 text-softwhite hover:bg-softwhite hover:text-espresso"
      : "border-espresso/40 text-espresso hover:bg-espresso hover:text-softwhite";
  return (
    <a href={href} className={`${ctaBase} border ${tones} ${className}`}>
      {children}
    </a>
  );
}
