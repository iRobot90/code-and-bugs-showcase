import { motion } from "framer-motion";
import GlassCard from "./GlassCard";
import { TestTube, Code, FileText, Zap, Shield, Rocket, Layers } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Data Annotation & Model Training",
      description: "High quality dataset labeling and trainer platform support",
      icon: <Layers className="w-8 h-8" />,
      features: ["Dataset labeling", "Annotation workflows", "Quality assurance", "Tooling and platform integration"]
    },
    {
      title: "Manual Testing",
      description: "Comprehensive testing across usability, functionality, and user experience",
      icon: <TestTube className="w-8 h-8" />,
      features: ["Usability Testing", "API Testing", "Voice Testing", "Streaming Testing", "Localization", "Regression Testing"]
    },
    {
      title: "Test Automation",
      description: "Building robust automated test suites for efficient continuous testing",
      icon: <Zap className="w-8 h-8" />,
      features: ["E2E Automation", "API Test Automation", "Performance Testing", "CI/CD Integration"]
    },
    {
      title: "Full-Stack Development",
      description: "Creating scalable web applications with modern technologies",
      icon: <Code className="w-8 h-8" />,
      features: ["Next.js & React", "Python & Django", "Database Design", "API Development"]
    },
    {
      title: "Quality Assurance",
      description: "Ensuring your applications meet the highest standards of quality",
      icon: <Shield className="w-8 h-8" />,
      features: ["Test Strategy", "Quality Metrics", "Bug Tracking", "Process Improvement"]
    },
    {
      title: "Technical Writing",
      description: "Clear documentation and technical communication",
      icon: <FileText className="w-8 h-8" />,
      features: ["API Documentation", "Test Plans", "User Guides", "Technical Specs"]
    },
    {
      title: "Performance Optimization",
      description: "Optimizing applications for speed, reliability, and scalability",
      icon: <Rocket className="w-8 h-8" />,
      features: ["Load Testing", "Code Optimization", "Database Tuning", "Monitoring Setup"]
    }
  ];

  return (
    <section className="py-20 px-6" id="services">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6">
            Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From breaking your application to building it stronger. I offer comprehensive testing and development services 
            to ensure your software is robust, scalable, and user-friendly.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <GlassCard className="h-full hover:scale-105 transition-transform duration-300">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full text-background mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </div>
                
                <div className="space-y-2">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                      <span className="text-sm text-foreground font-mono">{feature}</span>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;