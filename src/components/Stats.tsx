import { motion } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";

const Stats = () => {
  const stats = [
    { value: 15, suffix: "+", label: "Projects Delivered" },
    { value: 8, suffix: "+", label: "Happy Clients" },
    { value: 2, suffix: "+", label: "Years in QA" },
    { value: 99, suffix: "%", label: "Bug Free Rate*" },
  ];

  return (
    <section className="py-16 px-6 border-y border-border">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-semibold text-foreground mb-1">
                <AnimatedCounter end={stat.value} />
                {stat.suffix}
              </div>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <p className="text-center text-xs text-muted-foreground mt-10">
          * The other 1% makes for good debugging stories
        </p>
      </div>
    </section>
  );
};

export default Stats;
