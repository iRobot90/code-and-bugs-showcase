import { motion } from "framer-motion";
import GlassCard from "./GlassCard";
import { Quote, Star } from "lucide-react";

const Testimonials = () => {
    const testimonials = [
        {
            name: "Green World Campaign",
            role: "Project Lead, AIRS Platform",
            content: "Jesse delivered a complex fintech platform that exceeded our expectations. The integration of impact tracking with digital incentives was seamless.",
            rating: 5,
            initials: "GWC"
        },
        {
            name: "Swahilipot Hub Foundation",
            role: "Tech Director",
            content: "Working with Jesse on multiple projects has been fantastic. From our main website to SPHFM radio platform, everything was delivered on time and with excellent quality.",
            rating: 5,
            initials: "SPH"
        },
        {
            name: "ZNG Company",
            role: "Operations Manager",
            content: "The task management system Jesse built transformed how our team collaborates. It's intuitive, fast, and exactly what we needed.",
            rating: 5,
            initials: "ZNG"
        }
    ];

    return (
        <section className="py-20 px-6" id="testimonials">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
                        What Clients Say
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Don't just take my word for it. Here's what people I've worked with have to say.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <GlassCard className="h-full relative">
                                <Quote className="w-8 h-8 text-primary/30 absolute top-4 right-4" />

                                <div className="flex items-center gap-1 mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                                    ))}
                                </div>

                                <p className="text-foreground mb-6 italic">
                                    "{testimonial.content}"
                                </p>

                                <div className="flex items-center gap-3 mt-auto">
                                    <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-sm font-bold text-background">
                                        {testimonial.initials}
                                    </div>
                                    <div>
                                        <p className="font-semibold text-foreground">{testimonial.name}</p>
                                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                                    </div>
                                </div>
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
