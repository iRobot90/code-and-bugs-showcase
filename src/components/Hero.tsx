import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Hero: React.FC = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToPetoria = () => {
    document.getElementById("petoria")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToHaaafla = () => {
    document.getElementById("haaafla")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="relative pt-32 pb-20 px-6 overflow-hidden min-h-screen flex items-center justify-center">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-purple-500/30 rounded-full blur-[100px] animate-blob" />
        <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-blue-500/30 rounded-full blur-[100px] animate-blob animation-delay-2000" />
        <div className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-pink-500/30 rounded-full blur-[100px] animate-blob animation-delay-4000" />
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left space-y-6 order-2 lg:order-1"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-left" // Ensure text is left-aligned for the new layout
          >
            <h2 className="text-2xl font-medium text-primary mb-2">yo, i'm jesse.</h2>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 pb-2">
              I hunt bugs,
            </h1>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground pb-2">
              then craft solutions.
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0"
          >
            <p className="font-semibold text-foreground mb-1">Software Developer, Frontend Engineer & QA Specialist</p>
            <p>Building reliable, user-focused experiences with Django, React & Next.js.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4"
          >
            <Button
              size="lg"
              onClick={scrollToProjects}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              View Projects
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => document.getElementById("footer")?.scrollIntoView({ behavior: "smooth" })}
              className="border-2 hover:bg-accent/50 backdrop-blur-sm"
            >
              Let's Collaborate
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToPetoria} // Defaults to Petoria scroll, but label implies both. 
              // Ideally we might want a dropdown or just scroll to a startups section if it existed. 
              // Keeping as is for now but changing text.
              className="border-2 hover:bg-accent/50 backdrop-blur-sm"
            >
              View Startups (Petoria & Haaafla)
            </Button>
          </motion.div>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="order-1 lg:order-2 flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-600 to-pink-600 rounded-[2rem] rotate-6 opacity-30 blur-2xl animate-pulse" />
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-[2rem] -rotate-6 opacity-30 blur-2xl" />

            <motion.div
              whileHover={{ scale: 1.02, rotate: 2 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative w-full h-full rounded-[2rem] overflow-hidden border-4 border-white/20 shadow-2xl bg-white/10 backdrop-blur-sm"
            >
              <img
                src="/profile.jpg"
                alt="Jesse Amianda"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </header>
  );
};

export default Hero;

