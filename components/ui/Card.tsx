import type { HTMLAttributes } from "react";

import { cn } from "@/lib/cn";

interface CardProps extends HTMLAttributes<HTMLDivElement> {}

export default function Card({
    className,
    children,
    ...props
}: Readonly<CardProps>) {
    return (
        <div
            className={cn(
                "rounded-2xl border border-zinc-800 bg-zinc-950 p-6",
                className,
            )}
            {...props}
        >
            {children}
        </div>
    );
}