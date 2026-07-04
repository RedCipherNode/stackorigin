export const hero = {
    badge: "Early Access",

    title: "Build. Deploy. Iterate.",

    description:
        "Deploy applications with a clean, predictable workflow from development to production.",

    actions: {
        primary: "Get Started",
        secondary: "View on GitHub",
    },

    terminal: [
        "$ stackorigin deploy",
        "✓ Building project...",
        "✓ Running tests...",
        "✓ Deployment successful",
        "https://app.stackorigin.dev",
    ],
} as const;