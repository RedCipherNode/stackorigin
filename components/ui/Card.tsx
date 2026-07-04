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
                `
                rounded-2xl
                border
                border-white/5
                bg-zinc-950/70
                p-6

                transition-all
                duration-300

                hover:-translate-y-1
                hover:border-indigo-500/30
                hover:shadow-[0_0_40px_rgba(99,102,241,0.08)]
                `,
                className,
            )}
            {...props}
        >
            {children}
        </div>
    );
}