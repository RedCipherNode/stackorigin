import type { ReactNode } from "react";

import { metadata } from "@/config/metadata";

import "./globals.css";
import "./styles/background.css";

interface RootLayoutProps {
    children: ReactNode;
}

export { metadata };

export default function RootLayout({
    children,
}: Readonly<RootLayoutProps>) {
    return (
        <html lang="en">
            <body>
    <div className="background-canvas" />

        {children}
    </body>
        </html>
    );
}