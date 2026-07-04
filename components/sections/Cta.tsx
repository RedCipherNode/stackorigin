import { ArrowRight, BookOpen } from "lucide-react";

import { cta } from "@/constants/cta";

import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";

export default function Cta() {
    return (
        <Section>
            <Container>
                <div className="rounded-3xl border border-white/5 bg-zinc-950/70 px-8 py-20 text-center">
                    <Badge>
                        {cta.badge}
                    </Badge>

                    <Heading
                        as="h2"
                        title={cta.title}
                        description={cta.description}
                        align="center"
                        className="mt-8"
                    />

                    <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                        <Button>
                            {cta.primaryAction}

                            <ArrowRight
                                size={18}
                                className="ml-2"
                            />
                        </Button>

                        <Button variant="secondary">
                            <BookOpen
                                size={18}
                                className="mr-2"
                            />

                            {cta.secondaryAction}
                        </Button>
                    </div>
                </div>
            </Container>
        </Section>
    );
}