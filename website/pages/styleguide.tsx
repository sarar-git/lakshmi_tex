import SEO from "@/components/seo";

export default function StyleGuide() {
  return (
    <>
      <SEO
        title="Design System Styleguide"
        description="Styleguide for the School Sportswear Manufacturer website."
        canonical="https://yourdomain.com/styleguide"
      />
      <main className="min-h-screen bg-bg-light">
        <section className="py-12">
          <h1 className="text-3xl font-bold text-primary mb-6">Design System Styleguide</h1>
          <p>Styleguide content would go here.</p>
        </section>
      </main>
    </>
  );
}