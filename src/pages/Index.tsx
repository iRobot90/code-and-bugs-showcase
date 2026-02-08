import React from "react";
import Projects from "@/components/Projects";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import CTA from "@/components/CTA";

const Home = () => {
    return (
        <>
            {/* Projects moved to the top so recruiters see work first */}
            <main>
                <Projects />

                {/* Hero follows Projects to highlight the two featured roles */}
                <Hero />

                {/* Services section now emphasizes the two focused roles */}
                <Services />

                {/* CTA remains near the bottom */}
                <CTA />
            </main>
        </>
    );
};

export default Home;
