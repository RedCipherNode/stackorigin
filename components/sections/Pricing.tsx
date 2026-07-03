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

                <Card className="mx-auto mt-16 max-w-2xl text-center">
                    <Badge variant="secondary">
                        Portfolio Project
                    </Badge>

                    <h3 className="mt-6 text-3xl font-bold">
                        {pricing.name}
                    </h3>

                    <p className="mt-2 text-5xl font-bold">
                        {pricing.price}
                    </p>

                    <p className="mt-4 text-zinc-400">
                        {pricing.description}
                    </p>

                    <ul className="mt-10 space-y-4 text-left">
                        {pricing.features.map((feature) => (
                            <li
                                key={feature}
                                className="text-zinc-300"
                            >
                                ✓ {feature}
                            </li>
                        ))}
                    </ul>

                    <Button className="mt-10 w-full">
                        Explore Project
                    </Button>
                </Card>

                <p className="mt-8 text-center text-sm text-zinc-500">
                    StackOrigin is a fictional product built to showcase frontend architecture,
                    reusable components, and modern React development practices.
                </p>
            </Container>
        </Section>
    );
}