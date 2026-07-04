export const featureIconNames = [
    "git-branch",
    "rocket",
    "globe",
    "history",
    "settings",
    "server",
] as const;

export type FeatureIcon = (typeof featureIconNames)[number];