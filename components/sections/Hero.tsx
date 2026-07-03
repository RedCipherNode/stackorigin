import { hero } from "@/constants/hero";

import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";

export default function Hero() {
    return (
        <Section>
            <Container>
                <div className="mx-auto max-w-3xl text-center">
                    <Badge>
                        {hero.badge}
                    </Badge>

                    <Heading
                        as="h1"
                        title={hero.title}
                        description={hero.description}
                        align="center"
                        className="mt-8"
                    />

                    <div className="mt-10 flex justify-center gap-4">
                        <Button>
                            {hero.actions.primary}
                        </Button>

                        <Button variant="secondary">
                            {hero.actions.secondary}
                        </Button>
                    </div>
                </div>

                <Card className="mx-auto mt-20 max-w-4xl">
                    <div className="space-y-3 font-mono text-sm">
                        {hero.terminal.map((line, index) => {
                            const isCommand = index === 0;
                            const isUrl = index === hero.terminal.length - 1;

                            return (
                                <p
                                    key={line}
                                    className={
                                        isCommand
                                            ? "text-zinc-500"
                                            : isUrl
                                              ? "border-t border-zinc-800 pt-4 text-zinc-300"
                                              : "text-emerald-400"
                                    }
                                >
                                    {line}
                                </p>
                            );
                        })}
                    </div>
                </Card>
            </Container>
        </Section>
    );
}