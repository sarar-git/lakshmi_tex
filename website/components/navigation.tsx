import React, { useEffect, useState } from "react";

export interface NavigationProps {
  /** Mobile menu open state */
  isMenuOpen?: boolean;
  /** Toggle mobile menu */
  setIsMenuOpen?: (open: boolean) => void;
  /** Current active link (for active styling) */
  activeLink?: string;
}

/**
 * Premium minimal navigation (master brief section 5).
 *
 * - Lakshmi Tex wordmark + REQUEST SAMPLE KIT primary CTA
 * - Home / Products / Collections / Customization / Manufacturing / About / Contact
 * - Accessible mobile menu (aria-expanded, dialog, Escape to close)
 * - Header height fixed at 64px (+1px border) so the sticky category nav on
 *   /products keeps its top-16 offset.
 */
export function Navigation({
  isMenuOpen,
  setIsMenuOpen,
  activeLink,
}: NavigationProps) {
  // The component works both standalone (controlled) and self-managed.
  const [internalOpen, setInternalOpen] = useState(false);
  const open = isMenuOpen ?? internalOpen;
  const setOpen = (v: boolean) => {
    setInternalOpen(v);
    setIsMenuOpen?.(v);
  };

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const menuLinks = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/collections", label: "Collections" },
    { href: "/customization", label: "Customization" },
    { href: "/manufacturing", label: "Manufacturing" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  const linkClass = (href: string) =>
    `text-[11px] font-semibold uppercase tracking-[0.16em] transition-colors ${
      activeLink === href
        ? "text-gold"
        : "text-espresso/80 hover:text-espresso"
    }`;

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-champagne bg-softwhite/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-6">
        {/* Brand */}
        <a href="/" className="flex items-baseline gap-3" aria-label="Lakshmi Tex — home">
          <img src="/placeholder-logo.svg" alt="" aria-hidden="true" className="h-8 w-8" />
          <span className="font-cormorant text-2xl font-semibold leading-none tracking-tight text-espresso">
            Lakshmi Tex
          </span>
          <span className="hidden text-[9px] font-semibold uppercase leading-none tracking-[0.3em] text-taupe sm:inline">
            School Sportswear
          </span>
        </a>

        {/* Desktop menu */}
        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-7">
            {menuLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={linkClass(link.href)}>
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/request-sample-kit"
                className="inline-flex items-center bg-espresso px-5 py-3 text-[10px] font-bold uppercase leading-none tracking-[0.18em] text-softwhite transition-colors hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              >
                Request Sample Kit
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-10 items-center gap-2 border border-espresso/30 px-4 text-[10px] font-bold uppercase tracking-[0.18em] text-espresso lg:hidden"
        >
          <span aria-hidden="true" className="flex flex-col gap-[3px]">
            <span className="block h-px w-4 bg-espresso" />
            <span className="block h-px w-4 bg-espresso" />
            <span className="block h-px w-4 bg-espresso" />
          </span>
          Menu
        </button>
      </div>

      {/* Mobile menu (full screen) */}
      {open && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className="fixed inset-0 z-[60] flex flex-col bg-ivory lg:hidden"
        >
          <div className="flex h-16 items-center justify-end border-b border-champagne px-5">
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="flex h-10 items-center gap-2 border border-espresso/30 px-4 text-[10px] font-bold uppercase tracking-[0.18em] text-espresso"
            >
              Close ✕
            </button>
          </div>
          <nav aria-label="Mobile" className="flex flex-1 flex-col justify-center gap-1 px-8">
            {menuLinks.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-champagne/70 py-4 font-cormorant text-3xl font-medium text-espresso"
              >
                <span className="mr-4 text-[10px] font-semibold tracking-[0.2em] text-taupe">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {link.label}
              </a>
            ))}
            <a
              href="/request-sample-kit"
              onClick={() => setOpen(false)}
              className="mt-8 inline-flex items-center justify-center bg-espresso px-7 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-softwhite"
            >
              Request Sample Kit
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
