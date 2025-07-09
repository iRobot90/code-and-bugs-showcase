import { motion } from "framer-motion";
import GlassCard from "./GlassCard";
import { Code2, TestTube, Gamepad2, Mountain, Film, Bike } from "lucide-react";

const About = () => {
  const skills = [
    {
      category: "Frontend",
      items: ["Next.js", "React", "Tailwind CSS", "Bootstrap", "React+Vite"],
      icon: <Code2 className="w-6 h-6" />
    },
    {
      category: "Backend", 
      items: ["Python", "Django", "Node.js", "PostgreSQL"],
      icon: <Code2 className="w-6 h-6" />
    },
    {
      category: "Testing",
      items: ["Automation", "API Testing", "Usability", "Performance", "Voice Testing", "Streaming", "Localization", "Regression"],
      icon: <TestTube className="w-6 h-6" />
    }
  ];

  const hobbies = [
    { name: "Gaming", icon: <Gamepad2 className="w-5 h-5" />, description: "Major passion!" },
    { name: "Cycling", icon: <Bike className="w-5 h-5" />, description: "Weekend adventures" },
    { name: "Movies", icon: <Film className="w-5 h-5" />, description: "Cinema enthusiast" },
    { name: "Travel", icon: <Mountain className="w-5 h-5" />, description: "Exploring the world (weeeeel...Mombasa)" }
  ];

  const funTitles = [
    "404 Not Found? I Found It.",
    "Code Quality Guardian"
  ];

  return (
    <section className="py-20 px-6" id="about">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A meticulous tester and creative software developer with a passion for building robust, 
            user-friendly applications. I believe great software comes from understanding both how to break it and how to build it right.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <GlassCard>
              <h3 className="text-2xl font-bold text-primary mb-6">Fun Puns</h3>
              <div className="space-y-3">
                {funTitles.map((title, index) => (
                  <motion.div
                    key={title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                    <span className="text-foreground font-mono">{title}</span>
                  </motion.div>
                ))}
              </div>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <GlassCard>
              <h3 className="text-2xl font-bold text-primary mb-6">Hobbies & Interests</h3>
              <div className="grid grid-cols-2 gap-4">
                {hobbies.map((hobby, index) => (
                  <motion.div
                    key={hobby.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center p-4 rounded-lg border border-border/20 hover:border-primary/30 transition-colors"
                  >
                    <div className="text-accent mb-2 flex justify-center">{hobby.icon}</div>
                    <h4 className="font-semibold text-foreground mb-1">{hobby.name}</h4>
                    <p className="text-sm text-muted-foreground">{hobby.description}</p>
                  </motion.div>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center text-primary mb-8">Technical Skills</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <GlassCard className="text-center h-full">
                  <div className="text-accent mb-4 flex justify-center">{skill.icon}</div>
                  <h4 className="text-xl font-bold text-foreground mb-4">{skill.category}</h4>
                  <div className="space-y-2">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className="inline-block bg-muted/30 text-foreground px-3 py-1 rounded-full text-sm font-mono mr-2 mb-2"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;