import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Bug, ArrowDown } from "lucide-react";
import ParticleBackground from "./ParticleBackground";
import React from "react";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("footer")?.scrollIntoView({ behavior: "smooth" });
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

          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-4">
            <Button
              size="lg"
              variant="ghost"
              onClick={() => document.getElementById("petoria")?.scrollIntoView({ behavior: "smooth" })}
              className="text-primary"
            >
              View Petoria
            </Button>
            <Button
              size="lg"
              variant="ghost"
              onClick={() => document.getElementById("haaafla")?.scrollIntoView({ behavior: "smooth" })}
              className="text-primary"
            >
              View Haaafla
            </Button>
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <ArrowDown className="w-6 h-6 text-muted-foreground animate-bounce" />
        </motion.div>

        {/* Featured roles: two focused, intertwined roles */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 items-start">
          <div className="border rounded-md p-6 text-left bg-transparent">
            <h3 className="text-lg font-semibold text-foreground">Full Stack Engineer</h3>
            <p className="text-sm text-muted-foreground mt-2">
              Build production web apps from frontend to backend with an emphasis on reliable, maintainable systems.
            </p>
            <ul className="mt-3 text-sm text-muted-foreground list-disc list-inside space-y-1">
              <li>Next.js and React for modern frontend</li>
              <li>Django for robust backend services</li>
              <li>TypeScript, API design and database modelling</li>
            </ul>
          </div>

          <div className="border rounded-md p-6 text-left bg-transparent">
            <h3 className="text-lg font-semibold text-foreground">Data annotation and trainer platform support</h3>
            <p className="text-sm text-muted-foreground mt-2">
              Hands on dataset labeling, annotation workflows and platform tooling to prepare high quality data for training and fine tuning.
            </p>
            <ul className="mt-3 text-sm text-muted-foreground list-disc list-inside space-y-1">
              <li>Dataset labeling and quality assurance</li>
              <li>Annotation workflow and tooling integration</li>
            </ul>
          </div>
        </div>

        {/* Startup Projects */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-foreground mb-4">Startup Projects</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {/* Haaafla */}
            <div className="border rounded-md p-6 bg-transparent">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-1">
                    Haaafla <span className="ml-2 text-xs px-2 py-1 bg-muted/10 rounded">Live • Private Repo</span>
                  </h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    A comprehensive event management platform connecting event organizers with vendors. Features vendor booking, event creation, payment processing, and organizer verification.
                  </p>

                  <ul className="text-sm list-disc list-inside space-y-1 mb-3">
                    <li>Event creation and management</li>
                    <li>Vendor booking system with real-time availability</li>
                    <li>Integrated payment processing</li>
                    <li>Organizer verification workflow</li>
                    <li>Role-based access control</li>
                  </ul>

                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="text-xs px-2 py-1 rounded bg-muted/10 text-muted-foreground">Next.js</span>
                    <span className="text-xs px-2 py-1 rounded bg-muted/10 text-muted-foreground">TypeScript</span>
                    <span className="text-xs px-2 py-1 rounded bg-muted/10 text-muted-foreground">Supabase</span>
                    <span className="text-xs px-2 py-1 rounded bg-muted/10 text-muted-foreground">Stripe</span>
                    <span className="text-xs px-2 py-1 rounded bg-muted/10 text-muted-foreground">Tailwind CSS</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Button size="sm" className="bg-primary text-white" asChild>
                  <a href="mailto:jesse.amianda@chrisdevcode.com">Partner with us</a>
                </Button>
                <Button size="sm" variant="outline" asChild>
                  <a href="#haaafla">Live Demo</a>
                </Button>
              </div>
            </div>

            {/* Petoria */}
            <div className="border rounded-md p-6 bg-transparent">
              <h4 className="text-lg font-semibold text-foreground mb-1">
                Petoria <span className="ml-2 text-xs px-2 py-1 bg-muted/10 rounded">Live</span>
              </h4>
              <p className="text-sm text-muted-foreground mb-3">
                Production web app — product work and deployment. Live demo shows UX, performance and integrations.
              </p>
              <div className="flex items-center gap-3 mb-3">
                <a
                  href="https://petoria-web.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm px-3 py-2 bg-primary text-white rounded hover:shadow-sm transition"
                >
                  Live Demo
                </a>
                <Button size="sm" variant="outline" asChild>
                  <a href="mailto:jesse.amianda@chrisdevcode.com">Partner with us</a>
                </Button>
              </div>
            </div>

            {/* HMS */}
            <div className="border rounded-md p-6 bg-transparent">
              <h4 className="text-lg font-semibold text-foreground mb-1">
                HMS (Hotel Management System) <span className="ml-2 text-xs px-2 py-1 bg-muted/10 rounded">In Progress</span>
              </h4>
              <p className="text-sm text-muted-foreground mb-3">
                Streamlining reservations, guest services, room management, and billing operations.
              </p>
              <ul className="text-sm list-disc list-inside space-y-1 mb-3">
                <li>Room reservation and availability tracking</li>
                <li>Guest check-in/check-out management</li>
                <li>Billing and payment processing</li>
                <li>Staff management and role-based access</li>
              </ul>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-2 py-1 rounded bg-muted/10 text-muted-foreground">React</span>
                <span className="text-xs px-2 py-1 rounded bg-muted/10 text-muted-foreground">Django</span>
                <span className="text-xs px-2 py-1 rounded bg-muted/10 text-muted-foreground">PostgreSQL</span>
                <span className="text-xs px-2 py-1 rounded bg-muted/10 text-muted-foreground">REST API</span>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
    </header>
  );
};

export default Hero;
