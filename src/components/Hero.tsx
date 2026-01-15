import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Bug, ArrowDown } from "lucide-react";
import ParticleBackground from "./ParticleBackground";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("footer")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground />

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl shadow-primary/10"
          >
            <img
              src="/profile.jpg"
              alt="Jesse Amiandah"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            className="inline-flex items-center gap-2 text-accent font-mono text-sm mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Bug className="w-5 h-5 animate-bounce" />
            <span>yo, i'm jesse.</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent leading-tight">
            I hunt bugs,
            <br />
            then craft solutions.
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            <span className="text-accent font-semibold">
              Software Developer
            </span>
            ,
            <span className="text-primary font-semibold">
              {" "}
              Frontend Engineer
            </span>{" "}
            &<span className="text-accent font-semibold"> QA Specialist</span>
            <br />
            Building reliable, user-focused experiences with Django, React &
            Next.js.
          </p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Button
              size="lg"
              onClick={scrollToProjects}
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
            >
              View Projects
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToContact}
              className="border-primary/30 hover:bg-primary/10 hover:border-primary"
            >
              Let's Collaborate
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <ArrowDown className="w-6 h-6 text-muted-foreground animate-bounce" />
        </motion.div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
    </section>
  );
};

export default Hero;
