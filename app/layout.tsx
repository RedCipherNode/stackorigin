import type { ReactNode } from "react";

import { metadata } from "@/config/metadata";

import "./globals.css";

interface RootLayoutProps {
    children: ReactNode;
}

export { metadata };

export default function RootLayout({
    children,
}: Readonly<RootLayoutProps>) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}