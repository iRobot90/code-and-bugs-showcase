import { motion } from "framer-motion";
import GlassCard from "./GlassCard";
import { TestTube, Code, Shield, Layers } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "QA & Manual Testing",
      description: "Functional, exploratory, and regression testing across web and mobile.",
      icon: <TestTube className="w-5 h-5" />,
    },
    {
      title: "Test Automation",
      description: "E2E, API, and CI/CD-integrated automated test suites.",
      icon: <Shield className="w-5 h-5" />,
    },
    {
      title: "Full-Stack Development",
      description: "Scalable web apps with Next.js, React, Python, and Django.",
      icon: <Code className="w-5 h-5" />,
    },
    {
      title: "Data Annotation",
      description: "Dataset labeling, annotation workflows, and AI training support.",
      icon: <Layers className="w-5 h-5" />,
    },
  ];

  return (
    <section className="section-padding" id="services">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="section-heading">Services</h2>
          <p className="section-intro">
            From breaking your application to building it stronger. Testing and development
            services to keep your software robust and user-friendly.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <GlassCard className="h-full">
                <div className="text-muted-foreground mb-4">{service.icon}</div>
                <h3 className="text-base font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
