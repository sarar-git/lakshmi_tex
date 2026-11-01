import React, { useState } from "react";
import { Button } from "../components/button";
import { Card } from "../components/card";
import { Section } from "../components/section";

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
      <Section pad="4">
        <h1 className="text-3xl font-bold text-primary mb-6">Request Your Sample Kit</h1>

        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
          <div>
            <label className="block text-sm font-medium text-text">School name</label>
            <input
              name="schoolName"
              type="text"
              required
              className="mt-1 block w-full rounded-md border-border px-3 py-2 focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-text">Contact person</label>
            <input
              name="contactPerson"
              type="text"
              required
              className="mt-1 block w-full rounded-md border-border px-3 py-2 focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-text">Designation</label>
            <input
              name="designation"
              type="text"
              className="mt-1 block w-full rounded-md border-border px-3 py-2 focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-text">Phone</label>
              <input
                name="phone"
                type="tel"
                placeholder="+91‑XXXX‑XXXXXX"
                className="mt-1 block w-full rounded-md border-border px-3 py-2 focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text">WhatsApp number</label>
              <input
                name="whatsapp"
                type="tel"
                placeholder="+91‑XXXX‑XXXXXX"
                className="mt-1 block w-full rounded-md border-border px-3 py-2 focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-text">Email</label>
            <input
              name="email"
              type="email"
              required
              className="mt-1 block w-full rounded-md border-border px-3 py-2 focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-text">Approx. student strength</label>
            <input
              name="studentStrength"
              type="number"
              min={1}
              className="mt-1 block w-full rounded-md border-border px-3 py-2 focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-text">Items you're interested in</label>
            <div className="grid grid-cols-2 gap-2">
              <label>
                <input
                  type="checkbox"
                  name="itemsInterested"
                  value="T‑shirt"
                  className="rounded cursor-pointer"
                />
                T‑shirt
              </label>
              <label>
                <input
                  type="checkbox"
                  name="itemsInterested"
                  value="Shorts"
                  className="rounded cursor-pointer"
                />
                Shorts
              </label>
              <label>
                <input
                  type="checkbox"
                  name="itemsInterested"
                  value="Track Pants"
                  className="rounded cursor-pointer"
                />
                Track Pants
              </label>
              <label>
                <input
                  type="checkbox"
                  name="itemsInterested"
                  value="Sports Gown"
                  className="rounded cursor-pointer"
                />
                Sports Gown
              </label>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-text">Preferred colours (hex)</label>
            <input
              name="coloursRequested"
              type="text"
              placeholder="#0055A4, #FFFFFF"
              className="mt-1 block w-full rounded-md border-border px-3 py-2 focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-text">Delivery address</label>
            <textarea
              name="deliveryAddress"
              rows={2}
              className="mt-1 block w-full rounded-md border-border px-3 py-2 focus:ring-2 focus:ring-primary"
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium text-text">Optional note</label>
            <textarea
              name="notes"
              rows={2}
              className="mt-1 block w-full rounded-md border-border px-3 py-2 focus:ring-2 focus:ring-primary"
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

          <Button disabled={loading} className="w-full">
            {loading ? "Sending…" : "Request Sample Kit"}
          </Button>

          {error && (
            <p className="mt-2 text-red-600 text-sm">{error}</p>
          )}
        </form>
      </Section>
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
          Your sample‑kit request has been received. We’ll send a physical kit to the address you provided within 5‑7 business days.
        </p>
        <p>You can close this tab.</p>
      </section>
    </main>
  );
}