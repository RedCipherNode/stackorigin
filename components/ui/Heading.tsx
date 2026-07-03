import { cn } from "@/lib/cn";

interface HeadingProps {
    title: string;
    description?: string;
    align?: "left" | "center";
    className?: string;
}

const headingAlignment = {
    left: "text-left",
    center: "text-center",
} as const;

export default function Heading({
    title,
    description,
    align = "left",
    className,
}: Readonly<HeadingProps>) {
    return (
        <div
            className={cn(
                "space-y-6",
                headingAlignment[align],
                className,
            )}
        >
            <h2 className="text-4xl font-semibold tracking-tight">
                {title}
            </h2>

            {description && (
                <p className="max-w-2xl text-base leading-7 text-zinc-400">
                    {description}
                </p>
            )}
        </div>
    );
}