import { motion } from "framer-motion";
import GlassCard from "./GlassCard";
import { Code2, TestTube } from "lucide-react";

const About = () => {
  const skills = [
    {
      category: "Frontend",
      items: ["Next.js", "React", "Tailwind CSS", "Bootstrap", "TypeScript", "Vite"],
      icon: <Code2 className="w-5 h-5" />,
    },
    {
      category: "Backend",
      items: ["Python", "Django", "Django REST", "Node.js", "PostgreSQL", "MySQL"],
      icon: <Code2 className="w-5 h-5" />,
    },
    {
      category: "Testing & QA",
      items: [
        "Test Automation",
        "API Testing",
        "Usability Testing",
        "Performance Testing",
        "Regression Testing",
        "Postman",
        "pytest",
        "Jest",
      ],
      icon: <TestTube className="w-5 h-5" />,
    },
  ];

  return (
    <>
      <section className="section-padding" id="about">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16 max-w-2xl"
          >
            <h2 className="section-heading">About Me</h2>
            <p className="section-intro">
              I'm{" "}
              <span className="text-foreground font-medium">Jesse Amiandah Andayi</span>
              , a Software Developer and QA Engineer who crafts seamless experiences with
              Django, React, and Next.js. I find bugs before users do and build things
              that hold up under pressure.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding pt-0" id="skills">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="section-heading">Skills</h2>
            <p className="section-intro">
              A focused toolkit spanning frontend, backend, and quality assurance.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <GlassCard className="h-full">
                  <div className="text-muted-foreground mb-4">{skill.icon}</div>
                  <h3 className="text-base font-semibold text-foreground mb-4">
                    {skill.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className="inline-block bg-muted text-muted-foreground px-3 py-1 rounded-md text-xs font-medium"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
