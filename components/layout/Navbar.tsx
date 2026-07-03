import Link from "next/link";

import { navigation } from "@/config/navigation";

import Container from "@/components/ui/Container";

export default function Navbar() {
    return (
        <header className="border-b border-zinc-900">
            <Container>
                <nav className="flex h-16 items-center justify-between">
                    <Link
                        href="/"
                        className="text-lg font-semibold tracking-tight"
                    >
                        StackOrigin
                    </Link>

                    <ul className="flex items-center gap-8">
                        {navigation.map((item) => (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    className="text-sm text-zinc-400 transition-colors hover:text-white"
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </Container>
        </header>
    );
}