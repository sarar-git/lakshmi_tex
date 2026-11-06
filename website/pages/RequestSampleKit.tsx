import React, { useState } from "react";

// ============================================================
// Premium Sample Request Page – Superly-inspired composition
// All existing form fields and submission logic are preserved.
// ============================================================

const inputClass =
  "w-full border-0 border-b-2 border-light bg-transparent px-0 py-2.5 text-[15px] text-navy placeholder:text-navy/35 transition-colors focus:border-lime focus:outline-none";

const labelClass =
  "block text-[12px] font-medium tracking-wide text-navy/70 mb-1";

export default function RequestSampleKit() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    const form = new FormData(e.target as HTMLFormElement);
    const data: Record<string, unknown> = {};
    form.forEach((value, name) => {
      data[name as string] = value;
    });

    try {
      const resp = await fetch("/api/sample-kit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await resp.json();
      if (resp.ok) {
        window.location.href = result.thankYouUrl;
      } else {
        setError(result.error || "Submission failed");
      }
    } catch (e) {
      setError("Network error");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return <ThankYouInline />;
  }

  return (
    <main className="min-h-screen bg-deep p-0 lg:p-6">
      {/* ============================================================
         Green canvas – deep forest gradient, rounded outer corners
         ============================================================ */}
      <div className="relative overflow-hidden bg-gradient-to-br from-forest via-forest to-deep lg:rounded-[32px]">
        {/* Decorative layered shapes */}
        <div
          aria-hidden
          className="animate-float-soft pointer-events-none absolute -right-24 top-1/3 hidden h-72 w-72 rounded-full bg-lime/10 blur-2xl lg:block"
        />
        <div
          aria-hidden
          className="animate-float-soft pointer-events-none absolute -left-16 bottom-24 hidden h-56 w-56 rounded-full bg-white/5 blur-xl lg:block"
        />

        <div className="relative flex min-h-screen flex-col lg:min-h-[calc(100vh-3rem)] lg:flex-row">
          {/* ============================================================
             Left visual column – credentials + product photography
             ============================================================ */}
          <aside className="flex w-full shrink-0 flex-col gap-6 p-6 sm:p-8 lg:w-[32%] lg:p-10">
            {/* Manufacturing credentials panel */}
            <div className="animate-fade-in rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-sm">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-lime">
                School Sportswear Manufacturing
              </p>
              <ul className="mt-4 space-y-3 text-[14px] leading-snug text-white/85">
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-lime" />
                  Custom Designs &amp; Branding
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-lime" />
                  Bulk Production Capability
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-lime" />
                  Quality-Assured Materials
                </li>
              </ul>
            </div>

            {/* Sportswear product visual */}
            <div className="min-h-[240px] flex-1 overflow-hidden rounded-2xl border border-white/10 bg-white/5 lg:mt-auto lg:h-[520px] lg:flex-none">
              <img
                src="/students-uniforms.svg"
                alt="Students wearing coordinated school sports uniforms"
                className="h-full w-full object-cover"
              />
            </div>
          </aside>

          {/* ============================================================
             White floating interface
             ============================================================ */}
          <section className="animate-panel-in relative w-full flex-1 bg-white px-6 pb-14 pt-8 sm:px-10 lg:rounded-tl-[48px] lg:px-14 lg:pb-16 lg:pt-12 xl:px-16">
            {/* Navigation */}
            <header className="relative flex items-center justify-between gap-4">
              <a href="/" className="flex items-center gap-3">
                <img
                  src="/placeholder-logo.svg"
                  alt="School Sportswear"
                  className="h-9 w-9"
                />
                <span className="text-[15px] font-semibold tracking-tight text-navy">
                  School Sportswear
                </span>
              </a>

              <nav className="hidden items-center gap-7 md:flex">
                <a
                  href="/"
                  className="text-[13px] font-medium text-navy/70 transition-colors hover:text-forest"
                >
                  Home
                </a>
                <a
                  href="/request-sample-kit"
                  className="text-[13px] font-medium text-navy/70 transition-colors hover:text-forest"
                >
                  Sample Kit
                </a>
                <a
                  href="/request-sample-kit"
                  className="rounded-full bg-navy px-5 py-2.5 text-[12px] font-semibold text-white transition-colors hover:bg-forest"
                >
                  Request Sample
                </a>
              </nav>

              <button
                type="button"
                aria-label="Open menu"
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen((v) => !v)}
                className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full border border-light md:hidden"
              >
                <span className="block h-0.5 w-4 bg-navy" />
                <span className="block h-0.5 w-4 bg-navy" />
                <span className="block h-0.5 w-4 bg-navy" />
              </button>

              {menuOpen && (
                <nav className="absolute right-0 top-12 z-30 flex flex-col gap-4 rounded-2xl border border-light bg-white p-5 shadow-lg md:hidden">
                  <a
                    href="/"
                    className="text-[14px] font-medium text-navy"
                    onClick={() => setMenuOpen(false)}
                  >
                    Home
                  </a>
                  <a
                    href="/request-sample-kit"
                    className="text-[14px] font-medium text-navy"
                    onClick={() => setMenuOpen(false)}
                  >
                    Sample Kit
                  </a>
                </nav>
              )}
            </header>

            {/* Main heading – oversized editorial typography */}
            <h1 className="mt-10 max-w-[560px] text-[36px] font-normal leading-[1.06] tracking-tight text-navy sm:text-[42px] lg:text-[46px]">
              Let&apos;s create your school&apos;s sportswear.
            </h1>
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-navy/70">
              Tell us what your institution needs. We&apos;ll help you explore
              the right fabrics, designs and customisation options.
            </p>

            <hr className="mt-10 border-t border-light" />

            {/* Three information blocks */}
            <div className="mt-8 grid gap-8 sm:grid-cols-3">
              <div>
                <span aria-hidden className="mb-3 block h-1 w-10 bg-lime" />
                <h2 className="text-[13px] font-semibold uppercase tracking-[0.1em] text-navy">
                  Custom School Uniforms
                </h2>
                <p className="mt-2 text-[13px] leading-relaxed text-navy/60">
                  Purpose-built sportswear for schools and educational
                  institutions.
                </p>
              </div>
              <div>
                <span aria-hidden className="mb-3 block h-1 w-10 bg-lime" />
                <h2 className="text-[13px] font-semibold uppercase tracking-[0.1em] text-navy">
                  Design &amp; Customization
                </h2>
                <p className="mt-2 text-[13px] leading-relaxed text-navy/60">
                  Explore colours, logos, patterns and personalized uniforms.
                </p>
              </div>
              <div>
                <span aria-hidden className="mb-3 block h-1 w-10 bg-lime" />
                <h2 className="text-[13px] font-semibold uppercase tracking-[0.1em] text-navy">
                  Sample Request
                </h2>
                <p className="mt-2 text-[13px] leading-relaxed text-navy/60">
                  Submit your requirements to initiate the sample development
                  process.
                </p>
              </div>
            </div>

            <hr className="mt-10 border-t border-light" />

            {/* Form + portrait photograph */}
            <div className="mt-10 grid gap-10 xl:grid-cols-[minmax(0,1fr)_280px] xl:gap-10">
              <div>
                {/* Form heading */}
                <h2 className="text-[30px] font-normal leading-tight tracking-tight text-navy lg:text-[36px]">
                  Request Your Sample
                </h2>
                <p className="mt-3 max-w-lg text-[14px] leading-relaxed text-navy/70">
                  Share your requirements and let us understand the sportswear
                  your institution is looking for.
                </p>

                {/* Existing sample request form – fields & logic unchanged */}
                <form
                  onSubmit={handleSubmit}
                  className="mt-8 grid max-w-2xl gap-x-8 gap-y-6 md:grid-cols-2"
                >
                  {/* School name */}
                  <div className="md:col-span-2">
                    <label className={labelClass} htmlFor="schoolName">
                      School name
                    </label>
                    <input
                      id="schoolName"
                      name="schoolName"
                      type="text"
                      required
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className={labelClass} htmlFor="contactPerson">
                      Contact person
                    </label>
                    <input
                      id="contactPerson"
                      name="contactPerson"
                      type="text"
                      required
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className={labelClass} htmlFor="designation">
                      Designation
                    </label>
                    <input
                      id="designation"
                      name="designation"
                      type="text"
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className={labelClass} htmlFor="phone">
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+91‑XXXX‑XXXXXX"
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className={labelClass} htmlFor="whatsapp">
                      WhatsApp number
                    </label>
                    <input
                      id="whatsapp"
                      name="whatsapp"
                      type="tel"
                      placeholder="+91‑XXXX‑XXXXXX"
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className={labelClass} htmlFor="email">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className={labelClass} htmlFor="studentStrength">
                      Approx. student strength
                    </label>
                    <input
                      id="studentStrength"
                      name="studentStrength"
                      type="number"
                      min={1}
                      className={inputClass}
                    />
                  </div>

                  {/* Items of interest */}
                  <fieldset className="md:col-span-2">
                    <legend className={labelClass}>
                      Items you&apos;re interested in
                    </legend>
                    <div className="mt-2 grid grid-cols-2 gap-3 sm:grid-cols-4">
                      <label className="flex cursor-pointer items-center gap-2 text-[14px] text-navy">
                        <input
                          type="checkbox"
                          name="itemsInterested"
                          value="T‑shirt"
                          className="h-4 w-4 cursor-pointer accent-forest"
                        />
                        T‑shirt
                      </label>
                      <label className="flex cursor-pointer items-center gap-2 text-[14px] text-navy">
                        <input
                          type="checkbox"
                          name="itemsInterested"
                          value="Shorts"
                          className="h-4 w-4 cursor-pointer accent-forest"
                        />
                        Shorts
                      </label>
                      <label className="flex cursor-pointer items-center gap-2 text-[14px] text-navy">
                        <input
                          type="checkbox"
                          name="itemsInterested"
                          value="Track Pants"
                          className="h-4 w-4 cursor-pointer accent-forest"
                        />
                        Track Pants
                      </label>
                      <label className="flex cursor-pointer items-center gap-2 text-[14px] text-navy">
                        <input
                          type="checkbox"
                          name="itemsInterested"
                          value="Sports Gown"
                          className="h-4 w-4 cursor-pointer accent-forest"
                        />
                        Sports Gown
                      </label>
                    </div>
                  </fieldset>

                  <div className="md:col-span-2">
                    <label className={labelClass} htmlFor="coloursRequested">
                      Preferred colours (hex)
                    </label>
                    <input
                      id="coloursRequested"
                      name="coloursRequested"
                      type="text"
                      placeholder="#0055A4, #FFFFFF"
                      className={inputClass}
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className={labelClass} htmlFor="deliveryAddress">
                      Delivery address
                    </label>
                    <textarea
                      id="deliveryAddress"
                      name="deliveryAddress"
                      rows={2}
                      className={inputClass}
                    ></textarea>
                  </div>

                  <div className="md:col-span-2">
                    <label className={labelClass} htmlFor="notes">
                      Optional note
                    </label>
                    <textarea
                      id="notes"
                      name="notes"
                      rows={2}
                      className={inputClass}
                    ></textarea>
                  </div>

                  {/* Hidden UTM / click-ID fields */}
                  <input type="hidden" name="utmSource" value="" />
                  <input type="hidden" name="utmMedium" value="" />
                  <input type="hidden" name="utmCampaign" value="" />
                  <input type="hidden" name="gclid" value="" />
                  <input type="hidden" name="fbclid" value="" />
                  <input type="hidden" name="state" value="" />
                  <input type="hidden" name="city" value="" />
                  <input type="hidden" name="board" value="" />

                  {/* Pill-shaped lime CTA */}
                  <div className="md:col-span-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="inline-flex w-full items-center justify-center rounded-full bg-lime px-10 py-3.5 text-[14px] font-semibold tracking-wide text-navy transition-colors hover:bg-lime-dark focus:outline-none focus:ring-2 focus:ring-forest focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                    >
                      {loading ? "Sending…" : "Request My Sample"}
                    </button>

                    {error && (
                      <p className="mt-4 text-sm text-red-600">{error}</p>
                    )}
                  </div>
                </form>
              </div>

              {/* Right-side portrait photograph */}
              <figure className="max-w-[360px] self-start overflow-hidden rounded-t-[140px] rounded-b-2xl border border-light bg-bg-light xl:max-w-none">
                <img
                  src="/school-uniform-collection.svg"
                  alt="Matching school sportswear collection — jersey, shorts and track pants"
                  className="aspect-[3/4] w-full object-cover"
                />
              </figure>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

// Inline thank‑you component shown after successful submission
function ThankYouInline() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-bg-light">
      <section className="py-12 text-center">
        <h1 className="text-4xl font-bold text-primary">Thank you!</h1>
        <p>
          Your sample‑kit request has been received. We&apos;ll send a physical
          kit to the address you provided within 5‑7 business days.
        </p>
        <p>You can close this tab.</p>
      </section>
    </main>
  );
}
