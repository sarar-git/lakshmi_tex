export interface SectionProps {
  /** Optional heading */
  heading?: React.ReactNode;
  /** Children content */
  children: React.ReactNode;
  /** Horizontal padding (1-6) */
  pad?: "1" | "2" | "3" | "4" | "5" | "6";
}

export function Section({ heading, children, pad = "4" }: SectionProps) {
  const padMap: Record<string, string> = {
    "1": "px-1 py-4",
    "2": "px-2 py-6",
    "3": "px-4 py-8",
    "4": "px-6 py-12",
    "5": "px-8 py-16",
    "6": "px-12 py-24",
  };

  return (
    <section className={`max-w-7xl mx-auto ${padMap[pad]}`}>
      {heading && <h2 className="text-2xl font-bold text-text mb-6">{heading}</h2>}
      <div className="prose lg:prose-xl">{children}</div>
    </section>
  );
}