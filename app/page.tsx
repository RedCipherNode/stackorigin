import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";

export default function HomePage() {
    return (
        <main>
            <Section>
                <Container>
                    <Heading
                        title="StackOrigin"
                        description="A fictional deployment platform."
                    />

                    <div className="mt-6 flex items-center gap-3">
                        <Badge>Early Access</Badge>

                        <Badge variant="secondary">
                            Version 1.0
                        </Badge>

                        <Badge variant="success">
                            Healthy
                        </Badge>
                    </div>

                    <div className="mt-8 flex gap-4">
                        <Button>Primary</Button>

                        <Button variant="secondary">
                            Secondary
                        </Button>

                        <Button variant="ghost">
                            Ghost
                        </Button>
                    </div>
                </Container>
            </Section>
        </main>
    );
}