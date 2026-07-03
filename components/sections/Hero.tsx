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
                        Early Access
                    </Badge>

                    <Heading
                        title="Build. Deploy. Iterate."
                        description="Deploy static sites and modern web applications with a clean workflow and straightforward tools."
                        align="center"
                        className="mt-8"
                    />

                    <div className="mt-10 flex justify-center gap-4">
                        <Button>
                            Get Started
                        </Button>

                        <Button variant="secondary">
                            View on GitHub
                        </Button>
                    </div>
                </div>

                <Card className="mx-auto mt-20 max-w-4xl">
                    <div className="space-y-3 font-mono text-sm">
                        <p className="text-zinc-500">
                            $ stackorigin deploy
                        </p>

                        <p className="text-emerald-400">
                            ✓ Building project...
                        </p>

                        <p className="text-emerald-400">
                            ✓ Running tests...
                        </p>

                        <p className="text-emerald-400">
                            ✓ Deployment successful
                        </p>

                        <div className="border-t border-zinc-800 pt-4">
                            <p className="text-zinc-300">
                                https://app.stackorigin.dev
                            </p>
                        </div>
                    </div>
                </Card>
            </Container>
        </Section>
    );
}