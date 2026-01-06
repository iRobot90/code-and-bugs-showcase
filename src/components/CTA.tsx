import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const CTA = () => {
    // Note: contact form is temporarily disabled; "Start a Conversation" links to LinkedIn.
    // subtle sparkle will animate below the heading
    return (
        <section className="py-20 px-6 relative overflow-hidden">
            {/* Minimal background: no gradients or heavy blur for a cleaner look */}

            <div className="max-w-4xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center p-12"
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

                    {/* Subtle sparkle using Tailwind pulse, respects reduced motion */}
                    <div className="flex justify-center mt-2 text-primary/80" aria-hidden>
                        <Sparkles className="w-5 h-5 motion-safe:animate-pulse motion-reduce:opacity-100" />
                    </div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        viewport={{ once: true }}
                        className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
                    >
                        Let's turn your ideas into reality. Whether it is building from scratch or fixing what is broken, I am here to help. I offer freelance data annotation and trainer platform support. Services include dataset labeling, annotation workflows, quality assurance and platform tooling to help fine tune models.
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
