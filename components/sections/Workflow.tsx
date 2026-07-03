import { workflow } from "@/constants/workflow";

import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";

export default function Workflow() {
    return (
        <Section id="workflow">
            <Container>
                <Heading
                    as="h2"
                    title="Workflow"
                    description="A simple deployment flow from local project to production."
                    align="center"
                />

                <div className="mx-auto mt-16 max-w-4xl">
                    <div className="grid gap-6 md:grid-cols-3">
                        {workflow.map((step, index) => (
                            <Card key={step.title}>
                                <p className="text-sm text-zinc-500">
                                    Step {index + 1}
                                </p>

                                <h3 className="mt-4 text-xl font-semibold">
                                    {step.title}
                                </h3>

                                <p className="mt-3 text-sm leading-7 text-zinc-400">
                                    {step.description}
                                </p>
                            </Card>
                        ))}
                    </div>
                </div>
            </Container>
        </Section>
    );
}