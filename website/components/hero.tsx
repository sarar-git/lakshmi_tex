import { Button } from "./button";

export interface HeroProps {
  /** Main title */
  title: React.ReactNode;
  /** Subtitle */
  subtitle?: React.ReactNode;
  /** Primary CTA button props */
  ctaButton?: {
    label: React.ReactNode;
    onClick: () => void;
  };
  /** Optional background image URL */
  bgImage?: string;
}

export function Hero({ title, subtitle, ctaButton, bgImage }: HeroProps) {
  // Determine additional background classes based on presence of an image
  const bgClass = bgImage ? "bg-no-repeat bg-center" : "";

  return (
    <section
      className={`relative min-h-[60vh] flex items-center bg-bg-light overflow-hidden ${bgClass}`}
    >
      {bgImage ? (
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("${bgImage}")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      ) : null}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">{title}</h1>
        {subtitle && <p className="text-lg text-text-light mb-8">{subtitle}</p>}
        {ctaButton && (
          <Button onClick={ctaButton.onClick} className="inline-block">
            {ctaButton.label}
          </Button>
        )}
      </div>
    </section>
  );
}