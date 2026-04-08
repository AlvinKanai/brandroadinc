import Link from "next/link";
import type { LinkProps } from "next/link";
import { type ButtonHTMLAttributes, type ReactNode } from "react";

type Variant = "primary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

type ButtonBaseProps = {
    children: ReactNode;
    variant?: Variant;
    size?: Size;
    className?: string;
    ariaLabel?: string;
};

type ButtonProps = ButtonBaseProps &
    ButtonHTMLAttributes<HTMLButtonElement> & {
        href?: never;
    };

type LinkButtonProps = ButtonBaseProps & {
    href: string;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> &
    Omit<LinkProps, "href">;

const sizeClasses: Record<Size, string> = {
    sm: "h-10 px-4 text-sm",
    md: "h-11 px-6 text-sm",
    lg: "h-12 px-7 text-base",
};

const variantClasses: Record<Variant, string> = {
    primary:
        "bg-brand-purple !text-white border border-brand-purple shadow-[0_10px_24px_rgba(61,30,45,0.28)] hover:bg-[#2f1623] hover:!text-brand-cream",
    outline:
        "bg-(--color-muted-surface) text-brand-cream border border-brand-purple/35 hover:border-brand-purple hover:text-brand-orange",
    ghost: "bg-transparent text-brand-cream border border-transparent hover:bg-brand-red/10 hover:text-brand-orange",
};

function sharedClasses(variant: Variant, size: Size, className?: string): string {
    return [
        "inline-flex items-center justify-center rounded-full text-sm font-normal tracking-[0.06em] uppercase transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple/55 disabled:pointer-events-none disabled:opacity-50",
        sizeClasses[size],
        variantClasses[variant],
        className ?? "",
    ]
        .join(" ")
        .trim();
}

export function Button({
    children,
    variant = "primary",
    size = "md",
    className,
    ariaLabel,
    ...rest
}: ButtonProps) {
    return (
        <button aria-label={ariaLabel} className={sharedClasses(variant, size, className)} {...rest}>
            {children}
        </button>
    );
}

export function LinkButton({
    children,
    href,
    variant = "primary",
    size = "md",
    className,
    ariaLabel,
    ...rest
}: LinkButtonProps) {
    return (
        <Link href={href} aria-label={ariaLabel} className={sharedClasses(variant, size, className)} {...rest}>
            {children}
        </Link>
    );
}
