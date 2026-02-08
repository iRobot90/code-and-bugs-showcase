import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Hero: React.FC = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("footer")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToPetoria = () => {
    document.getElementById("petoria")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToHaaafla = () => {
    document.getElementById("haaafla")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Build. Test. Ship.
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I help teams ship reliable web apps — from QA and automation to full‑stack development.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <Button size="lg" onClick={scrollToProjects} className="bg-primary text-white">
              View Projects
            </Button>
            <Button size="lg" variant="outline" onClick={scrollToContact}>
              Let's Collaborate
            </Button>
            <Button size="lg" variant="ghost" onClick={scrollToPetoria}>
              View Petoria
            </Button>
            <Button size="lg" variant="ghost" onClick={scrollToHaaafla}>
              View Haaafla
            </Button>
          </div>
        </motion.div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
    </header>
  );
};

export default Hero;
