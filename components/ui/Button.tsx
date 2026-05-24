import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "outline" | "ghost" | "light";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-body font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender/60 focus-visible:ring-offset-2 focus-visible:ring-offset-cream disabled:opacity-60";

const sizes = {
  sm: "h-9 px-4 text-small",
  md: "h-11 px-6 text-body",
  lg: "h-13 px-8 text-body-lg",
} as const;

const variants: Record<Variant, string> = {
  primary: "bg-forest text-ivory hover:bg-forest-deep shadow-sm hover:shadow-md hover:-translate-y-0.5",
  outline: "border border-forest/40 text-forest hover:bg-forest hover:text-ivory",
  ghost: "text-forest hover:text-lavender",
  light: "bg-ivory text-forest hover:bg-white shadow-sm hover:-translate-y-0.5",
};

type CommonProps = {
  variant?: Variant;
  size?: keyof typeof sizes;
  className?: string;
  children: ReactNode;
};

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: CommonProps & ComponentProps<"button">) {
  return (
    <button className={`${base} ${sizes[size]} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}

export function ButtonLink({
  variant = "primary",
  size = "md",
  className = "",
  children,
  href,
  ...props
}: CommonProps & ComponentProps<typeof Link>) {
  return (
    <Link href={href} className={`${base} ${sizes[size]} ${variants[variant]} ${className}`} {...props}>
      {children}
    </Link>
  );
}
