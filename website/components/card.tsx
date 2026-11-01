export interface CardProps {
  /** Optional header title */
  title?: React.ReactNode;
  /** Children content */
  children: React.ReactNode;
  /** Optional shadow level */
  shadow?: "sm" | "md" | "lg";
}

export function Card({ title, children, shadow = "md" }: CardProps) {
  const shadowMap = {
    sm: "shadow-sm",
    md: "shadow-md",
    lg: "shadow-lg",
  };

  return (
    <div className="rounded-lg bg-white p-6 shadow-{shadow} border border-border">
      {title && <h3 className="text-lg font-medium text-text mb-4">{title}</h3>}
      <div>{children}</div>
    </div>
  );
}