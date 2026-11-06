import React, { useState } from "react";
import { Button } from "@/components/button";
import { Card } from "@/components/card";
import { Section } from "@/components/section";

// ============================================================
// Premium Sample Request Page – designed per Superly reference
// All existing form fields and submission logic are preserved.
// ============================================================

export default function RequestSampleKit() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

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
    return (
      <ThankYouInline />
    );
  }

  return (
    <main className="min-h-screen bg-bg-light">
      {/* ============================================================
         Background canvas – deep forest green with layered visuals
         ============================================================ */}
      <div className="relative overflow-hidden min-h-screen bg-forest">
        {/* Decorative deep-green gradient overlay */}
        <div className="absolute inset-0 bg-deep gradient-to-br from-transparent via-white to-transparent" />
        {/* Left credentials panel – upper-left */}
        <div className="absolute top-6 left-6 max-w-sm">
          <div className="p-6 rounded-lg bg-white/30 backdrop-blur-sm border border-white/20">
            <h3 className="text-xl font-medium text-navy mb-3">School Sportswear Manufacturing</h3>
            <ul className="space-y-2 text-sm text-navy/80">
              <li>Custom Designs & Branding</li>
              <li>Bulk Production Capability</li>
              <li>Quality-Assured Materials</li>
            </ul>
          </div>
        </div>
        {/* Lower-left product visual – premium photography */}
        <div className="absolute bottom-6 left-6 w-48 h-64 rounded-lg overflow-hidden bg-white/20 backdrop-blur-sm">
          <img
            src="/students-uniforms.jpg"
            alt="Students in coordinated school sports uniforms"
            className="w-full h-full object-cover rounded-t-lg"
          />
        </div>

        {/* ============================================================
           Right-side white floating interface
           ============================================================ */}
        <div className="relative inset-0 pt-24 sm:pt-12">
          {/* Navigation – logo left, minimal nav right */}
          <header className="max-w-7xl mx-auto flex items-center justify-between px-6">
            <div className="flex items-center gap-3">
              <img
                src="/placeholder-logo.svg"
                alt="School Sportswear Manufacturer"
                className="h-8 w-auto"
              />
              <span className="text-xl font-navy tracking-wider">School Sportswear</span>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a href="/" className="text-navy hover:text-lime transition-colour">Home</a>
              <a href="/products" className="text-navy hover:text-lime transition-colour">Products</a>
              <a href="/request-sample-kit" className="text-navy hover:text-lime transition-colour">Sample</a>
            </nav>
            <button
              className="md:hidden bg-lime text-navy py-2 px-4 rounded-full hover:bg-lime-dark transition-colour"
              aria-label="Open menu"
            >
              Menu
            </button>
          </header>

          {/* Main heading – oversized editorial typography */}
          <h1 className="text-5xl md:text-6lg font-normal text-navy mb-8">
            Let's create your school's sportswear.
          </h1>
          <p className="text-l md:text-xl text-navy/80 mb-10">
            Tell us what your institution needs. We'll help you explore the right fabrics, designs and customisation options.
          </p>

          {/* Thin horizontal divider */}
          <hr className="border-lime w-24 my-10" />

          {/* Three info blocks – CUSTOM, DESIGN, SAMPLE */}
          <div className="grid grid-cols-3 gap-6 mb-12">
            <div>
              <h3 className="text-base font-medium text-lime uppercase tracking-wider">CUSTOM SCHOOL UNIFORMS</h3>
              <p className="text-navy/80 text-sm my-2">
                Purpose-built sportswear for schools and educational institutions.
              </p>
            </div>
            <div>
              <h3 className="text-base font-medium text-lime uppercase tracking-wider">DESIGN & CUSTOMISATION</h3>
              <p className="text-navy/80 text-sm my-2">
                Explore colours, logos, patterns and personalised uniforms.
              </p>
            </div>
            <div>
              <h3 className="text-base font-medium text-lime uppercase tracking-wider">SAMPLE REQUEST</h3>
              <p className="text-navy/80 text-sm my-2">
                Submit your requirements to initiate the sample development process.
              </p>
            </div>
          </div>

          {/* Form heading and supporting text */}
          <h2 className="text-3xl md:text-4xl font-normal text-navy mb-6">
            Request Your Sample
          </h2>
          <p className="text-navy/80 text-base mb-8">
            Share your requirements and let us understand the sportswear your institution is looking for.
          </p>

          {/* Existing sample request form – preserved unchanged */}
          <form onSubmit={handleSubmit} className="space-y-8 max-w-3xl">
            {/* School name */}
            <div>
              <label className="block text-sm font-medium text-navy">School name</label>
              <input
                name="schoolName"
                type="text"
                required
                className="mt-1 block w-full rounded-md border-light px-3 py-2 focus:outline-none focus:ring-2 focus:ring-lime"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-navy">Contact person</label>
              <input
                name="contactPerson"
                type="text"
                required
                className="mt-1 block w-full rounded-md border-light px-3 py-2 focus:outline-none focus:ring-2 focus:ring-lime"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-navy">Designation</label>
              <input
                name="designation"
                type="text"
                className="mt-1 block w-full rounded-md border-light px-3 py-2 focus:outline-none focus:ring-2 focus:ring-lime"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-navy">Phone</label>
                <input
                  name="phone"
                  type="tel"
                  placeholder="+91‑XXXX‑XXXXXX"
                  className="mt-1 block w-full rounded-md border-light px-3 py-2 focus:outline-none focus:ring-2 focus:ring-lime"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-navy">WhatsApp number</label>
                <input
                  name="whatsapp"
                  type="tel"
                  placeholder="+91‑XXXX‑XXXXXX"
                  className="mt-1 block w-full rounded-md border-light px-3 py-2 focus:outline-none focus:ring-2 focus:ring-lime"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-navy">Email</label>
              <input
                name="email"
                type="email"
                required
                className="mt-1 block w-full rounded-md border-light px-3 py-2 focus:outline-none focus:ring-2 focus:ring-lime"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-navy">Approx. student strength</label>
              <input
                name="studentStrength"
                type="number"
                min={1}
                className="mt-1 block w-full rounded-md border-light px-3 py-2 focus:outline-none focus:ring-2 focus:ring-lime"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-navy">Items you're interested in</label>
              <div className="grid grid-cols-2 gap-2">
                <label>
                  <input
                    type="checkbox"
                    name="itemsInterested"
                    value="T‑shirt"
                    className="rounded cursor-pointer border-light"
                  />
                  T‑shirt
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="itemsInterested"
                    value="Shorts"
                    className="rounded cursor-border border-light"
                  />
                  Shorts
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="itemsInterested"
                    value="Track Pants"
                    className="rounded cursor-pointer border-light"
                  />
                  Track Pants
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="itemsInterested"
                    value="Sports Gown"
                    className="rounded cursor-pointer border-light"
                  />
                  Sports Gown
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-navy">Preferred colours (hex)</label>
              <input
                name="coloursRequested"
                type="text"
                placeholder="#0055A4, #FFFFFF"
                className="mt-1 block w-full rounded-md border-light px-3 py-2 focus:outline-none focus:ring-2 focus:ring-lime"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-navy">Delivery address</label>
              <textarea
                name="deliveryAddress"
                rows={2}
                className="mt-1 block w-full rounded-md border-light px-3 py-2 focus:outline-none focus:ring-2 focus:ring-lime"
              ></textarea>
            </div>

            <div>
              <label className="block text-sm font-medium text-navy">Optional note</label>
              <textarea
                name="notes"
                rows={2}
                className="mt-1 block w-full rounded-md border-light px-3 py-2 focus:outline-none focus:ring-2 focus:ring-lime"
              ></textarea>
            </div>

            {/* Hidden UTM / click‑ID fields – values will be filled by a small script on the page */}
            <input type="hidden" name="utmSource" value="" />
            <input type="hidden" name="utmMedium" value="" />
            <input type="hidden" name="utmCampaign" value="" />
            <input type="hidden" name="gclid" value="" />
            <input type="hidden" name="fbclid" value="" />
            <input type="hidden" name="state" value="" />
            <input type="hidden" name="city" value="" />
            <input type="hidden" name="board" value="" />

            {/* Pill-shaped lime-green CTA */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-lime text-navy py-3 rounded-full text-lg font-medium transition-colour hover:bg-lime-dark focus:outline-none focus:ring-2 focus:ring-lime focus:ring-offset-2"
            >
              {loading ? "Sending…" : "Request My Sample"}
            </button>

            {error && (
              <p className="text-red-600 text-sm my-2">{error}</p>
            )}
          </form>
        </div>

        {/* ============================================================
           Right-side premium product photograph beside the form
           ============================================================ */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-80 md:w-96 rounded-t-lg overflow-hidden bg-white/30 backdrop-blur-sm">
          <img
            src="/school-uniform-collection.jpg"
            alt="Coordinated school sports uniform collection"
            className="w-full h-auto object-cover rounded-t-lg"
          />
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
          Your sample‑kit request has been received. We'll send a physical kit to the address you provided within 5‑7 business days.
        </p>
        <p>You can close this tab.</p>
      </section>
    </main>
  );
}