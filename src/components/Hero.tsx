import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="section-padding min-h-screen flex items-center pt-32">
      <div className="section-container w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-8 order-2 lg:order-1"
          >
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-4 tracking-wide uppercase">
                Software Developer · QA Engineer · Test Engineer
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground leading-tight">
                I hunt bugs,
                <br />
                then craft solutions.
              </h1>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              Building reliable, user-focused experiences with Django, React & Next.js.
              Two years of professional QA taught me to think in edge cases before writing a single line of code.
            </p>

            <div className="flex flex-wrap gap-3">
              <Button
                size="lg"
                onClick={() => scrollTo("projects")}
                className="bg-foreground text-background hover:bg-foreground/90 rounded-md font-medium"
              >
                View Projects
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollTo("contact")}
                className="border-border hover:border-accent hover:text-accent rounded-md font-medium"
              >
                Let's Collaborate
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollTo("petoria")}
                className="border-border hover:border-accent hover:text-accent rounded-md font-medium"
              >
                View Startups
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative w-56 h-56 md:w-72 md:h-72">
              <div className="w-full h-full rounded-full overflow-hidden border-2 border-accent/50">
                <img
                  src="/profile.jpg"
                  alt="Jesse Amiandah Andayi"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
