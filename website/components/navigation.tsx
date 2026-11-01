import React, { useState } from "react";
import { Button } from "./button";
import { LogoStrip } from "./logo-strip";

export interface NavigationProps {
  /** Mobile menu open state */
  isMenuOpen?: boolean;
  /** Toggle mobile menu */
  setIsMenuOpen?: (open: boolean) => void;
  /** Current active link (for active styling) */
  activeLink?: string;
}

export function Navigation({
  isMenuOpen = false,
  setIsMenuOpen,
  activeLink,
}: NavigationProps) {
  const menuLinks = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/request-sample-kit", label: "Sample Kit" },
    { href: "/about", label: "About" },
    { href: "/quality-certifications", label: "Quality" },
    { href: "/our-factory", label: "Factory" },
    { href: "/schools-we-serve", label: "Schools" },
    { href: "/case-studies", label: "Case Studies" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-bg-light/80 backdrop-blur-sm border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / Brand */}
        <div className="flex items-center gap-3">
          <img
            src="/placeholder-logo.svg"
            alt="School Sportswear Manufacturer"
            className="h-8 w-auto"
          />
          <span className="text-xl font-bold text-primary">School Sportswear</span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:block">
          <ul className="flex gap-8">
            {menuLinks.map((link) => (
              <li key={link.href} className={activeLink === link.href ? "font-medium text-primary" : "text-text hover:text-primary"}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsMenuOpen?.(true)}
          className="md:hidden"
        >
          Menu
        </Button>
      </div>

      {/* Mobile Menu (full screen) */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-bg-dark z-40 flex flex-col items-center justify-center gap-8">
          <Button variant="secondary" size="lg" onClick={() => setIsMenuOpen?.(false)}>
            Close
          </Button>
          <ul className="flex-col gap-6 text-lg">
            {menuLinks.map((link) => (
              <li key={link.href} className="hover:text-primary">
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}