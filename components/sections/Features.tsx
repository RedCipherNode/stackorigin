import {
    GitBranch,
    Globe,
    History,
    Rocket,
    Server,
    Settings,
} from "lucide-react";

import { features } from "@/constants/features";

import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";

const featureIcons = {
    "git-branch": GitBranch,
    rocket: Rocket,
    globe: Globe,
    history: History,
    settings: Settings,
    server: Server,
} as const;

export default function Features() {
    return (
        <Section id="features">
            <Container>
                <Heading
                    as="h2"
                    title="Features"
                    description="A focused set of tools for deployment, collaboration, monitoring, and application management."
                    align="center"
                />

                <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                    {features.map((feature) => {
                        const Icon = featureIcons[feature.icon];

                        return (
                            <Card key={feature.title}>
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-indigo-500/20 bg-indigo-500/10">
                                    <Icon
                                        size={22}
                                        className="text-indigo-400"
                                    />
                                </div>

                                <h3 className="mt-6 text-xl font-semibold">
                                    {feature.title}
                                </h3>

                                <p className="mt-4 leading-7 text-zinc-400">
                                    {feature.description}
                                </p>
                            </Card>
                        );
                    })}
                </div>
            </Container>
        </Section>
    );
}