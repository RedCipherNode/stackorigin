import type { HTMLAttributes } from "react";

import { cn } from "@/lib/cn";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
    variant?: BadgeVariant;
}

type BadgeVariant = keyof typeof badgeVariants;

const badgeVariants = {
    primary:
        "border border-indigo-500/30 bg-indigo-500/10 text-indigo-300",

    secondary:
        "border border-zinc-800 bg-zinc-900 text-zinc-300",

    success:
        "border border-emerald-500/30 bg-emerald-500/10 text-emerald-300",
} as const;

export default function Badge({
    variant = "primary",
    className,
    children,
    ...props
}: Readonly<BadgeProps>) {
    return (
        <span
            className={cn(
                "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
                badgeVariants[variant],
                className,
            )}
            {...props}
        >
            {children}
        </span>
    );
}