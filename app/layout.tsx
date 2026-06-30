import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "StackOrigin",
    description: "Deployment platform.",
};

interface RootLayoutProps {
    children: React.ReactNode;
}

export default function RootLayout({
    children,
}: Readonly<RootLayoutProps>) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}