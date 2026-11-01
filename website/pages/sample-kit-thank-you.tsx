// client-side only thank-you page – uses window.location.query
export const dynamic = "force-dynamic";

export default function SampleKitThankYou() {
  const urlParams = new URLSearchParams(window.location.search);
  const leadId = urlParams.get("lead");
  return (
    <main className="min-h-screen flex items-center justify-center bg-bg-light">
      <section className="py-12 text-center">
        <h1 className="text-4xl font-bold text-primary">Thank you!</h1>
        <p>
          Your sample‑kit request has been received (Lead ID: <strong>{leadId}</strong>).
        </p>
        <p>
          We’ll send a physical kit to the address you provided within 5‑7 business days.
        </p>
        <p>You can close this tab.</p>
      </section>
    </main>
  );
}