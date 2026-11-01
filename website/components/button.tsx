export interface ButtonProps {
  /** Label text */
  children: React.ReactNode;
  /** Optional variant: primary, secondary, ghost */
  variant?: "primary" | "secondary" | "ghost";
  /** Optional size: sm, md, lg */
  size?: "sm" | "md" | "lg";
  /** On click handler */
  onClick?: () => void;
  /** Disabled state */
  disabled?: boolean;
  /** Additional CSS className */
  className?: string;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  onClick,
  disabled = false,
  className,
}: ButtonProps) {
  const baseClasses = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

  const variantClasses = variant === "primary"
    ? "bg-primary text-white hover:bg-primary-dark"
    : variant === "secondary"
    ? "bg-secondary text-white hover:bg-gray-800"
    : "border border-text text-text hover:bg-bg-light";

  const sizeClasses = size === "sm"
    ? "py-1.5 px-3 text-xs"
    : size === "lg"
    ? "py-3 px-6 text-lg"
    : "py-2 px-4";

  const mergedClasses = `${baseClasses} ${variantClasses} ${sizeClasses} disabled:opacity-50 disabled:cursor-not-allowed${className ? " " + className : ""}`;

  return (
    <button
      className={mergedClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}