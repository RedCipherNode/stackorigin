import Link from "next/link";
import { navigation } from "@/config/navigation";
import Container from "@/components/ui/Container";
import Image from "next/image";
export default function Navbar() {
    return (
        <header
            className="
                sticky
                top-0
                z-50
                border-b
                border-white/5
                bg-zinc-950/70
                backdrop-blur-xl
            "
        >
            <Container>
                <nav className="flex h-18 items-center justify-between">

                    <Link
                        href="/"
                        className="flex items-center gap-2"
                    >
                        <Image
                            src="/logos/stackorigin-symbol.svg"
                            alt="StackOrigin"
                            width={32}
                            height={32}
                            priority
                        />

                        <span className="text-lg font-semibold tracking-tight">
                            StackOrigin
                        </span>
                    </Link>

                    <ul className="flex items-center gap-8">
                        {navigation.map((item) => (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    className="
                                        text-sm
                                        text-zinc-400
                                        transition-all
                                        duration-200
                                        hover:text-white
                                    "
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