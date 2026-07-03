import { features } from "@/constants/features";

import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";

export default function Features() {
    return (
        <Section id="features">
            <Container>
                <Heading
                    as="h2"
                    title="Features"
                    description="Everything you need to deploy modern web applications without unnecessary complexity."
                    align="center"
                />

                <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {features.map((feature) => (
                        <Card key={feature.title}>
                            <h3 className="text-xl font-semibold">
                                {feature.title}
                            </h3>

                            <p className="mt-4 text-sm leading-7 text-zinc-400">
                                {feature.description}
                            </p>
                        </Card>
                    ))}
                </div>
            </Container>
        </Section>
    );
}