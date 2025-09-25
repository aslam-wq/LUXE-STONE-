"use client";

export function Button({ children, className, variant, ...props }) {
  const baseStyles = "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    outline: "border border-primary text-primary hover:bg-primary hover:text-primary-foreground"
  };

  const variantClass = variants[variant] || variants.default;

  return (
    <button className={`${baseStyles} ${variantClass} ${className}`} {...props}>
      {children}
    </button>
  );
}
