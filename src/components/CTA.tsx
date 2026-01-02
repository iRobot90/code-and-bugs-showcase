import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const CTA = () => {
    const scrollToContact = () => {
        document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="py-20 px-6 relative overflow-hidden">
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 animate-gradient" />
            <div className="absolute inset-0 backdrop-blur-3xl" />

            <div className="max-w-4xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="backdrop-blur-md bg-card/20 border border-primary/30 rounded-2xl p-12 text-center relative overflow-hidden group"
                >
                    {/* Animated border */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary opacity-20 animate-border-flow" />

                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring" }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-6"
                    >
                        <Sparkles className="w-4 h-4 text-primary" />
                        <span className="text-sm font-mono text-primary">Available for new projects</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4"
                    >
                        Got a project in mind?
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        viewport={{ once: true }}
                        className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
                    >
                        Let's turn your ideas into reality. Whether it's building from scratch or fixing what's broken, I'm here to help.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        viewport={{ once: true }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <Button
                            size="lg"
                            onClick={scrollToContact}
                            className="bg-gradient-primary hover:shadow-glow transition-all duration-300 group"
                        >
                            Start a Conversation
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            onClick={() => window.open('mailto:amiandah8@gmail.com', '_blank')}
                            className="border-primary/30 hover:bg-primary/10 hover:border-primary"
                        >
                            Send Email Directly
                        </Button>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        viewport={{ once: true }}
                        className="text-sm text-muted-foreground mt-6 font-mono"
                    >
                        💬 Usually reply within 24 hours
                    </motion.p>
                </motion.div>
            </div>
        </section>
    );
};

export default CTA;
