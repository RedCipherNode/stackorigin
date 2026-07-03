import type { ElementType, HTMLAttributes } from "react";

import { cn } from "@/lib/cn";

interface HeadingProps extends HTMLAttributes<HTMLDivElement> {
    as?: ElementType;
    title: string;
    description?: string;
    align?: HeadingAlignment;
}

type HeadingAlignment = keyof typeof headingAlignment;

const headingAlignment = {
    left: "text-left",
    center: "text-center",
} as const;

export default function Heading({
    as: Component = "h2",
    title,
    description,
    align = "left",
    className,
    ...props
}: Readonly<HeadingProps>) {
    return (
        <div
            className={cn(
                "space-y-5",
                headingAlignment[align],
                className,
            )}
            {...props}
        >
            <Component className="text-4xl font-semibold tracking-tight">
                {title}
            </Component>

            {description && (
                <p className="mx-auto max-w-2xl text-base leading-7 text-zinc-400">
                    {description}
                </p>
            )}
        </div>
    );
}