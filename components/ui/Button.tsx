import type { ButtonHTMLAttributes } from "react";

import { cn } from "@/lib/cn";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
}

type ButtonVariant = keyof typeof buttonVariants;
type ButtonSize = keyof typeof buttonSizes;

const buttonVariants = {
    primary:
        "bg-indigo-600 text-white hover:bg-indigo-500 focus-visible:outline-indigo-500",
    secondary:
        "border border-zinc-800 bg-zinc-900 text-zinc-100 hover:bg-zinc-800 focus-visible:outline-zinc-500",
    ghost:
        "text-zinc-300 hover:bg-zinc-900 hover:text-white focus-visible:outline-zinc-500",
} as const;

const buttonSizes = {
    sm: "h-9 px-3 text-sm",
    md: "h-10 px-4 text-sm",
    lg: "h-11 px-6 text-base",
} as const;

export default function Button({
    variant = "primary",
    size = "md",
    className,
    children,
    type = "button",
    ...props
}: Readonly<ButtonProps>) {
    return (
        <button
            type={type}
            className={cn(
                "inline-flex cursor-pointer items-center justify-center rounded-xl font-medium transition-colors duration-200 ...",
                buttonVariants[variant],
                buttonSizes[size],
                className,
            )}
            {...props}
        >
            {children}
        </button>
    );
}