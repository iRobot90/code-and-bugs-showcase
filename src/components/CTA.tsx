import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="section-padding bg-muted/30" id="contact">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-xl mx-auto"
        >
          <p className="text-sm text-muted-foreground mb-4 tracking-wide uppercase">
            Available for new projects
          </p>

          <h2 className="section-heading mb-4">Got a project in mind?</h2>

          <p className="text-muted-foreground mb-10 leading-relaxed">
            Whether you need a new build, QA coverage, or help improving an existing
            product. Let's talk.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              size="lg"
              className="bg-foreground text-background hover:bg-foreground/90 rounded-md font-medium group"
              asChild
            >
              <a
                href="https://www.linkedin.com/in/jesse-amiandah/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open LinkedIn profile"
              >
                Start a Conversation
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-border hover:border-accent hover:text-accent rounded-md font-medium"
              asChild
            >
              <a href="mailto:jesse.amianda@chrisdevcode.com">Send Email Directly</a>
            </Button>
          </div>

          <p className="text-xs text-muted-foreground mt-6">
            Usually reply within 24 hours
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
