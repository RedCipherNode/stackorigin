import { pricing } from "@/constants/pricing";

import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";

export default function Pricing() {
    return (
        <Section id="pricing">
            <Container>
                <Heading
                    as="h2"
                    title="Pricing"
                    description="Simple, transparent, and intentionally minimal."
                    align="center"
                />

                <Card className="mx-auto mt-20 max-w-2xl">
                    <div className="text-center">
                        <div className="inline-flex rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-2 text-sm font-medium text-indigo-300">
                            Portfolio Project
                        </div>

                        <h3 className="mt-8 text-3xl font-bold">
                            {pricing.name}
                        </h3>

                        <p className="mt-3 text-5xl font-bold tracking-tight">
                            {pricing.price}
                        </p>

                        <p className="mx-auto mt-5 max-w-md leading-7 text-zinc-400">
                            {pricing.description}
                        </p>
                    </div>

                    <div className="my-10 h-px bg-white/5" />

                    <ul className="space-y-5">
                        {pricing.features.map((feature) => (
                            <li
                                key={feature}
                                className="flex items-center gap-3 text-zinc-300"
                            >
                                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/10 text-xs text-emerald-400">
                                    ✓
                                </span>

                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>

                    <Button className="mt-10 w-full">
                        Explore Project
                    </Button>
                </Card>

                <p className="mt-8 text-center text-sm text-zinc-500">
                    A modern deployment platform designed for developers who value speed, simplicity, and reliability.
                </p>
            </Container>
        </Section>
    );
}