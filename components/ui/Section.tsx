import type { HTMLAttributes } from "react";

import { layoutConfig } from "@/config/layout";
import { cn } from "@/lib/cn";

interface SectionProps extends HTMLAttributes<HTMLElement> {}

export default function Section({
    className,
    children,
    ...props
}: Readonly<SectionProps>) {
    return (
        <section
            className={cn(
                layoutConfig.section,
                className,
            )}
            {...props}
        >
            {children}
        </section>
    );
}