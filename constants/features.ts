import type { FeatureIcon } from "./feature-icons";

interface Feature {
    icon: FeatureIcon;
    title: string;
    description: string;
}

export const features = [
    {
        icon: "git-branch",
        title: "Git Integration",
        description:
            "Deploy directly from your Git repository with a straightforward workflow.",
    },
    {
        icon: "rocket",
        title: "Fast Deployments",
        description:
            "Build and publish your application in seconds with optimized pipelines.",
    },
    {
        icon: "globe",
        title: "Custom Domains",
        description:
            "Connect your own domain without complicated configuration.",
    },
    {
        icon: "history",
        title: "Deployment History",
        description:
            "Review previous deployments and keep track of every release.",
    },
    {
        icon: "settings",
        title: "Simple Configuration",
        description:
            "Minimal setup so you can focus on building instead of configuring.",
    },
    {
        icon: "server",
        title: "Reliable Hosting",
        description:
            "Serve static sites with consistent performance and predictable behavior.",
    },
] as const;