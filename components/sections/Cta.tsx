import { cta } from "@/constants/cta";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";

export default function Cta() {
    return (
        <Section>
            <Container>
                <div className="rounded-2xl border border-zinc-800 bg-zinc-950 px-8 py-16 text-center">
                    <Heading
                        as="h2"
                        title={cta.title}
                        description={cta.description}
                        align="center"
                    />

                    <div className="mt-10">
                        <Button>
                            {cta.action}
                        </Button>
                    </div>
                </div>
            </Container>
        </Section>
    );
}