"use client";

import { useState } from "react";

import { ChevronDown } from "lucide-react";

import { faq } from "@/constants/faq";

import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";

export default function Faq() {
    const [openIndex, setOpenIndex] = useState(0);

    function handleToggle(index: number) {
        setOpenIndex((current) => (current === index ? -1 : index));
    }

    return (
        <Section id="faq">
            <Container>
                <Heading
                    as="h2"
                    title="Frequently Asked Questions"
                    description="Answers to common questions about StackOrigin."
                    align="center"
                />

                <div className="mx-auto mt-20 max-w-4xl space-y-4">
                    {faq.map((item, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <Card key={item.question}>
                                <button
                                    type="button"
                                    onClick={() => handleToggle(index)}
                                    className="
                                        flex
                                        w-full
                                        items-center
                                        justify-between
                                        gap-6
                                        text-left
                                    "
                                >
                                    <span className="text-lg font-semibold">
                                        {item.question}
                                    </span>

                                    <ChevronDown
                                        size={20}
                                        className={`
                                            transition-transform
                                            duration-200
                                            ${isOpen ? "rotate-180" : ""}
                                        `}
                                    />
                                </button>

                                {isOpen && (
                                    <p className="mt-6 leading-7 text-zinc-400">
                                        {item.answer}
                                    </p>
                                )}
                            </Card>
                        );
                    })}
                </div>
            </Container>
        </Section>
    );
}