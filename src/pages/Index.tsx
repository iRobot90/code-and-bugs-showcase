import React from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import QAExperience from "@/components/QAExperience";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Stats />
        <About />
        <QAExperience />
        <Projects />
        <Services />
        <CTA />
        <Footer />
      </main>
    </>
  );
};

export default Home;
