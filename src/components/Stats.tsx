import { motion } from "framer-motion";
import { Code, Users, Coffee, Award } from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";

const Stats = () => {
    const stats = [
        {
            icon: <Code className="w-8 h-8" />,
            value: 15,
            suffix: "+",
            label: "Projects Delivered",
            color: "text-blue-400"
        },
        {
            icon: <Users className="w-8 h-8" />,
            value: 8,
            suffix: "+",
            label: "Happy Clients",
            color: "text-green-400"
        },
        {
            icon: <Coffee className="w-8 h-8" />,
            value: 1000,
            suffix: "+",
            label: "Cups of Coffee",
            color: "text-amber-400"
        },
        {
            icon: <Award className="w-8 h-8" />,
            value: 99,
            suffix: "%",
            label: "Bug-Free Rate*",
            color: "text-purple-400"
        }
    ];

    return (
        <section className="py-20 px-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-8"
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="relative group"
                        >
                            <div className="backdrop-blur-md bg-card/20 border border-border/20 rounded-xl p-6 text-center hover:border-primary/30 transition-all duration-300 hover:shadow-glow">
                                <div className={`${stat.color} mb-4 flex justify-center group-hover:scale-110 transition-transform`}>
                                    {stat.icon}
                                </div>
                                <div className="text-3xl md:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                                    <AnimatedCounter end={stat.value} />
                                    {stat.suffix}
                                </div>
                                <p className="text-sm text-muted-foreground font-mono">{stat.label}</p>
                            </div>

                            {/* Glow effect */}
                            <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 rounded-xl blur-xl transition-opacity duration-300 -z-10" />
                        </motion.div>
                    ))}
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center text-xs text-muted-foreground mt-8 font-mono"
                >
                    * The other 1% makes for good debugging stories
                </motion.p>
            </div>
        </section>
    );
};

export default Stats;
