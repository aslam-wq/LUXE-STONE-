"use client";

export function Label({ children, className, ...props }) {
  return (
    <label className={`block text-sm font-medium text-foreground ${className}`} {...props}>
      {children}
    </label>
  );
}
