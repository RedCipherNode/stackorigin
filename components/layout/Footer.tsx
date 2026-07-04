import Link from "next/link";
import { navigation } from "@/config/navigation";
import { footer } from "@/constants/footer";
import Container from "@/components/ui/Container";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="border-t border-zinc-800">
            <Container>
                <div className="flex flex-col items-center gap-8 py-12">

                    <Link
                        href="/"
                        className="flex items-center gap-3"
                    >
                        <Image
                            src="/logos/stackorigin-symbol.svg"
                            alt="StackOrigin"
                            width={28}
                            height={28}
                        />

                        <span className="text-lg font-semibold tracking-tight">
                            StackOrigin
                        </span>
                    </Link>

                    <nav>
                        <ul className="flex flex-wrap justify-center gap-6">
                            {navigation.map((item) => (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        className="text-sm text-zinc-400 transition-colors duration-200 hover:text-white"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <p className="text-center text-sm text-zinc-500">
                        {footer.copyright}
                    </p>
                </div>
            </Container>
        </footer>
    );
}