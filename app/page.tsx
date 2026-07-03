import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

import Cta from "@/components/sections/Cta";
import Faq from "@/components/sections/Faq";
import Features from "@/components/sections/Features";
import Hero from "@/components/sections/Hero";
import Pricing from "@/components/sections/Pricing";
import Workflow from "@/components/sections/Workflow";

export default function HomePage() {
    console.log({
    Navbar: typeof Navbar,
    Hero: typeof Hero,
    Workflow: typeof Workflow,
    Features: typeof Features,
    Pricing: typeof Pricing,
    Faq: typeof Faq,
    Cta: typeof Cta,
    Footer: typeof Footer,
});
    return (
        <>
            {/* <Navbar /> */}

            <main>
                <Hero />
                <Workflow />
                <Features />
                <Pricing />
                <Faq />
                {/* <Cta /> */}
            </main>

            {/* <Footer /> */}
        </>
    );
}