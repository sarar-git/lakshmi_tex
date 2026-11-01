import { Button } from "../components/button";
import { Card } from "../components/card";
import { Hero } from "../components/hero";
import { LogoStrip } from "../components/logo-strip";

export default function StyleGuide() {
  return (
    <main className="min-h-screen bg-bg-light">
      <section className="py-12">
        <h1 className="text-3xl font-bold text-primary mb-6">Design System Styleguide</h1>

        <h2 className="text-2xl font-medium text-text mb-4">Buttons</h2>
        <div className="grid grid-cols-2 gap-4">
          <Button variant="primary" size="md">Primary</Button>
          <Button variant="secondary" size="md">Secondary</Button>
          <Button variant="ghost" size="md">Ghost</Button>
          <Button size="sm">Small</Button>
          <Button size="lg">Large</Button>
        </div>

        <h2 className="text-2xl font-medium text-text mt-8 mb-4">Card</h2>
        <Card title="Sample Card">
          <p className="text-text-light">
            This is a sample card component. It uses the design tokens for spacing,
            colors, and shadows defined in the tokens.css file.
          </p>
        </Card>

        <h2 className="text-2xl font-medium text-text mt-8 mb-4">Hero Section</h2>
        <Hero
          title="School Sportswear Manufacturer"
          subtitle="B2B lead‑generation website for schools across India"
          ctaButton={{ label: "Request Sample Kit", onClick: () => alert("CTA clicked") }}
        />

        <h2 className="text-2xl font-medium text-text mt-8 mb-4">Logo Strip</h2>
        <LogoStrip logos={["School A", "School B", "School C"]} />
      </section>
    </main>
  );
}