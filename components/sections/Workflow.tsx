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
                    description="From local development to production in a streamlined deployment pipeline."
                    align="center"
                />

                <div className="mx-auto mt-20 max-w-5xl">
                    <div className="grid gap-8 md:grid-cols-3">
                        {workflow.map((step, index) => (
                            <Card key={step.title}>
                                <div className="flex items-center gap-4">
                                    <div
                                        className="
                                            flex
                                            h-10
                                            w-10
                                            items-center
                                            justify-center
                                            rounded-full
                                            border
                                            border-indigo-500/30
                                            bg-indigo-500/10
                                            text-sm
                                            font-semibold
                                            text-indigo-300
                                        "
                                    >
                                        {index + 1}
                                    </div>

                                    <h3 className="text-xl font-semibold">
                                        {step.title}
                                    </h3>
                                </div>

                                <p className="mt-6 leading-7 text-zinc-400">
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