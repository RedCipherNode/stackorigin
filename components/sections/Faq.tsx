import { faq } from "@/constants/faq";

import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";

export default function Faq() {
    return (
        <Section id="faq">
            <Container>
                <Heading
                    as="h2"
                    title="Frequently Asked Questions"
                    description="Answers to common questions about StackOrigin."
                    align="center"
                />

                <div className="mx-auto mt-16 max-w-4xl space-y-6">
                    {faq.map((item) => (
                        <Card key={item.question}>
                            <h3 className="text-lg font-semibold">
                                {item.question}
                            </h3>

                            <p className="mt-4 text-sm leading-7 text-zinc-400">
                                {item.answer}
                            </p>
                        </Card>
                    ))}
                </div>
            </Container>
        </Section>
    );
}