export interface LogoStripProps {
  /** Array of logo alt texts or URLs */
  logos: string[];
  /** Optional spacing class */
  className?: string;
}

export function LogoStrip({ logos, className }: LogoStripProps) {
  return (
    <div
      className={`flex flex-wrap gap-4 ${className} pt-8 pb-8 border-t border-border`}
    >
      {logos.map((alt, index) => (
        <img
          key={index}
          src={`/placeholder-logo.svg`}
          alt={alt}
          className="h-8 w-auto"
        />
      ))}
    </div>
  );
}