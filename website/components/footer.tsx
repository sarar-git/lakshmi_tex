export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-espresso text-softwhite">
      <div className="mx-auto max-w-7xl px-5 pb-8 pt-16 md:px-6">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          {/* Brand & description */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-baseline gap-3">
              <img
                src="/placeholder-logo.svg"
                alt=""
                aria-hidden="true"
                className="h-8 w-8"
              />
              <span className="font-cormorant text-2xl font-semibold leading-none">
                Lakshmi Tex
              </span>
            </div>
            <p className="mt-4 max-w-[36ch] text-sm leading-relaxed text-softwhite/60">
              Custom school sportswear manufacturing. Coordinated, institution-specific
              collections developed around each school&apos;s colours, crest and requirements.
            </p>

            {/* Social */}
            <div className="mt-6 flex gap-4 text-softwhite/60">
              <a
                href="https://twitter.com/yourhandle"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Lakshmi Tex on X (Twitter)"
                className="transition-colors hover:text-champagne"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M23.953 4.59a10 10 0 1 1-6.47 2.949 9.973 9.973 0 0 0-4.922 2.182 5.978 5.978 0 0 1-1.513 1.045 5.956 5.956 0 0 1-.718 2.829c-.227.326-.451.653-.676.982a8.979 8.979 0 0 0-.178 2.043 8.956 8.956 0 0 1-.757 1.528.954.954 0 0 0 .013 2.057c.518 1.08.858 2.293 1.029 3.439 1.237 9.956 11.748 12.868 11.946 12.978 1.063.065 2.041.05 3.003-.116a13.03 13.03 0 0 1 2.197-2.728 11.964 11.964 0 0 0 1.967-3.751 5.99 5.99 0 0 1 .7-2.088 5.969 5.969 0 0 1 1.683-.557c.3 0 .598.03 .893.08a4.996 4.996 0 0 0 1.168-.187 4.991 4.991 0 0 0 .907-1.395 5.952 5.952 0 0 1 .636-2.318 5.929 5.929 0 0 0-1.088-2.061 5.911 5.911 0 0 0-1.367-.588c-.297 0-.578.018-.862.056a10.037 10.037 0 0 1-1.777-1.136 4.988 4.988 0 0 1-1.528-.876 4.979 4.979 0 0 1-.789-1.527 5.953 5.953 0 0 1-1.418-1.175 4.969 4.969 0 0 1-.381-.31 4.956 4.956 0 0 1-.221-.262c0-.217.007-.441.016-.662.014-.318.02-.626.015-.952a5.962 5.962 0 0 0-.428-2.406 5.987 5.987 0 0 1-.089-2.554 5.952 5.952 0 0 1 .26-2.717 5.927 5.927 0 0 1 .528-1.366c.25 0 .505.017.744.05 1.614.21 2.927.622 3.987 1.253a9.88 9.88 0 0 1 .037 1.734 5.953 5.953 0 0 0 .356 1.286 5.926 5.926 0 0 0 .29 1.123c.035.09.052.18.062.282.015.14.022.288.018.442a6.027 6.027 0 0 0 .082 1.988 5.978 5.978 0 0 1-.02 1.957 5.963 5.963 0 0 1-.25 1.395 5.945 5.945 0 0 1-.55.689 5.942 5.942 0 0 1-1.045.256 5.93 5.93 0 0 1-.834.038c-.32 0-.649-.017-.964-.055m4.417 5.474H8.973v-3.076c0-2.016 1.26-3.035 3.032-3.035 1.377 0 2.317.534 2.768 1.056a3.01 3.01 0 0 1 1.028 1.258c-.094.13-.188.27-.282.42a4.985 4.985 0 0 0-.069 1.086 3.007 3.007 0 0 1-.13.853c0 .17.02.35.05.53a3.968 3.968 0 0 0 1.065.622c1.264 0 2.295-.636 2.968-1.598a9.975 9.975 0 0 1 .713-3.218z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/company/yourcompany"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Lakshmi Tex on LinkedIn"
                className="transition-colors hover:text-champagne"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8.01h4.56V24H.22V8.01zM8.34 8.01h4.37v2.18h.06c.61-1.16 2.1-2.38 4.32-2.38 4.62 0 5.47 3.04 5.47 6.99V24h-4.56v-7.28c0-1.74-.03-3.97-2.42-3.97-2.42 0-2.79 1.89-2.79 3.85V24H8.34V8.01z" />
                </svg>
              </a>
              <a
                href="https://instagram.com/yourhandle"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Lakshmi Tex on Instagram"
                className="transition-colors hover:text-champagne"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.3-1.46.72-2.12 1.38C1.36 2.67.94 3.34.63 4.14.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.3.79.72 1.46 1.38 2.12.66.66 1.33 1.08 2.12 1.38.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56.79-.3 1.46-.72 2.12-1.38.66-.66 1.08-1.33 1.38-2.12.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91-.3-.79-.72-1.46-1.38-2.12C21.33 1.36 20.66.94 19.86.63c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84zM12 16a4 4 0 1 1 4-4 4 4 0 0 1-4 4zm7.85-10.4a1.44 1.44 0 1 1-1.44-1.44 1.44 1.44 0 0 1 1.44 1.44z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Explore */}
          <nav aria-label="Footer — explore">
            <h4 className="mb-4 text-[10px] font-bold uppercase tracking-[0.24em] text-champagne">
              Explore
            </h4>
            <ul className="space-y-3 text-sm text-softwhite/70">
              <li><a href="/" className="transition-colors hover:text-softwhite">Home</a></li>
              <li><a href="/products" className="transition-colors hover:text-softwhite">Products</a></li>
              <li><a href="/collections" className="transition-colors hover:text-softwhite">Collections</a></li>
              <li><a href="/customization" className="transition-colors hover:text-softwhite">Customization</a></li>
              <li><a href="/manufacturing" className="transition-colors hover:text-softwhite">Manufacturing</a></li>
            </ul>
          </nav>

          {/* Company */}
          <nav aria-label="Footer — company">
            <h4 className="mb-4 text-[10px] font-bold uppercase tracking-[0.24em] text-champagne">
              Company
            </h4>
            <ul className="space-y-3 text-sm text-softwhite/70">
              <li><a href="/about" className="transition-colors hover:text-softwhite">About</a></li>
              <li><a href="/contact" className="transition-colors hover:text-softwhite">Contact</a></li>
              <li>
                <a href="/request-sample-kit" className="transition-colors hover:text-softwhite">
                  Request Sample Kit
                </a>
              </li>
              <li>
                <a href="/products" className="transition-colors hover:text-softwhite">
                  Bulk Enquiries
                </a>
              </li>
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-[10px] font-bold uppercase tracking-[0.24em] text-champagne">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-softwhite/70">
              <li>
                <a href="tel:+918012345678" className="transition-colors hover:text-softwhite">
                  +91 80‑1234‑5678
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@schoolsportswear.com"
                  className="break-all transition-colors hover:text-softwhite"
                >
                  info@schoolsportswear.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/918012345678"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-softwhite"
                >
                  WhatsApp enquiry
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 border-t border-softwhite/15 pt-6">
          <div className="flex flex-col items-center justify-between gap-3 text-[11px] uppercase tracking-[0.18em] text-softwhite/45 md:flex-row">
            <p>
              © {year} Lakshmi Tex — custom school sportswear manufacturing
            </p>
            <p>Bulk pricing on request · Samples for schools</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
