import React from "react";
import { motion } from "framer-motion";
import { Layers } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
    const featured = [
        {
            title: "Full Stack Engineering",
            description: "End to end web application delivery focused on product outcomes. Expertise with Next.js, React and Django plus API and database design.",
            icon: Layers,
        },
        {
            title: "Data annotation and trainer platform support",
            description: "Dataset labeling, annotation workflows, quality assurance and platform tooling to prepare data for training and fine tune systems.",
            icon: Layers,
        },
    ];

    const otherServices = [
        "Technical writing and docs",
        "Performance tuning and observability",
        "Maintenance and support"
    ];

    return (
        <section className="py-16 px-6" id="services">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                        Services
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Focused services that help teams ship and maintain high quality products. Featured work highlights full stack engineering with Next.js and Django alongside dataset and platform support for training workflows.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {featured.map((s) => {
                        const Icon = s.icon;
                        return (
                            <div key={s.title} className="border rounded-md p-6 bg-transparent">
                                <div className="flex items-start gap-3">
                                    <Icon className="w-6 h-6 text-primary mt-1" />
                                    <div className="flex-1">
                                        <h3 className="text-lg font-semibold text-foreground">{s.title}</h3>
                                        <p className="text-sm text-muted-foreground mt-2">{s.description}</p>

                                        <div className="mt-4 flex flex-wrap gap-2">
                                            <span className="text-xs px-2 py-1 rounded bg-muted/10 text-muted-foreground">Next.js</span>
                                            <span className="text-xs px-2 py-1 rounded bg-muted/10 text-muted-foreground">Django</span>
                                            <span className="text-xs px-2 py-1 rounded bg-muted/10 text-muted-foreground">TypeScript</span>
                                            <span className="text-xs px-2 py-1 rounded bg-muted/10 text-muted-foreground">React</span>
                                        </div>

                                        <div className="mt-4 flex gap-3">
                                            <Button size="sm" className="bg-primary text-white" asChild>
                                                <a href="/#projects">View projects</a>
                                            </Button>
                                            <Button size="sm" variant="outline" asChild>
                                                <a href="https://www.linkedin.com/in/jesse-amiandah/" target="_blank" rel="noopener noreferrer">Hire me</a>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="mt-8">
                    <h4 className="text-sm font-medium text-foreground mb-2">Other services</h4>
                    <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                        {otherServices.map((o) => (
                            <li key={o}>{o}</li>
                        ))}
                    </ul>
                </div>

                <div className="mt-12 border rounded-md p-6 bg-transparent">
                    <h4 className="text-lg font-semibold text-foreground mb-2">Trust and results</h4>
                    <p className="text-sm text-muted-foreground">
                        I focus on measurable outcomes. Typical engagements include delivering a production feature, improving performance, or preparing curated data that speeds up training and evaluation. Case studies and references available on request.
                    </p>
                    <div className="mt-4 flex gap-3">
                        <Button size="sm" className="bg-primary text-white" asChild>
                            <a href="/#projects">See featured projects</a>
                        </Button>
                        <Button size="sm" variant="outline" asChild>
                            <a href="mailto:jesse.amianda@chrisdevcode.com">Email to hire</a>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;