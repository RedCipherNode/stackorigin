import type { HTMLAttributes } from "react";

import { layoutConfig } from "@/config/layout";
import { cn } from "@/lib/cn";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {}

export default function Container({
    className,
    children,
    ...props
}: Readonly<ContainerProps>) {
    return (
        <div
            className={cn(
                layoutConfig.container,
                className,
            )}
            {...props}
        >
            {children}
        </div>
    );
}