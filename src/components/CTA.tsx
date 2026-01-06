import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const CTA = () => {
    // Note: contact form is temporarily disabled; "Start a Conversation" links to LinkedIn.
    // subtle sparkle will animate below the heading
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
                    className="text-center relative overflow-hidden group p-6"
                >

                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring" }}
                        viewport={{ once: true }}
                        className="mb-6"
                    >
                        <span className="text-sm font-mono text-primary inline-flex items-center gap-2">
                            <Sparkles className="w-4 h-4 text-primary" />
                            Available for new projects
                        </span>
                    </motion.div>

                    

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-foreground mb-4"
                   > 
                        Got a project in mind?
                    </motion.h2>

                    {/* Subtle sparkle animation using Framer Motion */}
                    <motion.div
                        aria-hidden
                        initial={{ opacity: 0, y: 6, scale: 0.9 }}
                        animate={{ opacity: [0, 0.9, 0.4], y: [6, 0, -4], scale: [0.9, 1.05, 0.95] }}
                        transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
                        className="flex justify-center mt-2 text-primary/80"
                    >
                        <Sparkles className="w-5 h-5" />
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        viewport={{ once: true }}
                        className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
                    >
                        Let's turn your ideas into reality. Whether it's building from scratch or fixing what's broken, I'm here to help. I also offer freelance data annotation and AI training support, with hands-on experience on AI trainer platforms — dataset labeling, annotation workflows, quality assurance, and tooling to help fine-tune models.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        viewport={{ once: true }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <Button size="lg" className="bg-primary text-white hover:shadow-md transition-all duration-200 group" asChild>
                            <a href="https://www.linkedin.com/in/jesse-amiandah/" target="_blank" rel="noreferrer">
                                Start a Conversation
                                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </Button>

                        <Button
                            size="lg"
                            variant="outline"
                            className="border-primary/30 hover:bg-primary/10 hover:border-primary"
                            asChild
                        >
                            <a href="mailto:jesse.amianda@chrisdevcode.com">
                                Send Email Directly
                            </a>
                        </Button>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        viewport={{ once: true }}
                        className="text-sm text-muted-foreground mt-6 font-mono"
                    >
                        Usually reply within 24 hours
                    </motion.p>
                </motion.div>
            </div>
        </section>
    );
};

export default CTA;
