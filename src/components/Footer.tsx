import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Instagram, Twitter, Linkedin, Mail, Bug } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "Instagram",
      icon: <Instagram className="w-5 h-5" />,
      url: "#",
      color: "hover:text-pink-400"
    },
    {
      name: "Twitter",
      icon: <Twitter className="w-5 h-5" />,
      url: "#",
      color: "hover:text-blue-400"
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      url: "https://www.linkedin.com/in/jesse-amiandah/",
      color: "hover:text-blue-600"
    },
    {
      name: "Medium",
      icon: <span className="font-serif font-bold text-lg">M</span>,
      url: "https://medium.com/@amiandah8",
      color: "hover:text-foreground"
    },
    {
      name: "WakaTime",
      icon: <span className="font-mono font-bold text-sm">WT</span>,
      url: "https://wakatime.com/@web_weaver",
      color: "hover:text-blue-400"
    },
    {
      name: "Wonderful.dev",
      icon: <span className="font-mono font-bold text-sm">W</span>,
      url: "https://wonderful.dev/webweaver",
      color: "hover:text-purple-400"
    },
    {
      name: "Email",
      icon: <Mail className="w-5 h-5" />,
      url: "mailto:jesse.amianda@chrisdevcode.com",
      color: "hover:text-accent"
    }
  ];

  return (
    <footer className="py-20 px-6 border-t border-border/20" id="footer">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 text-primary text-2xl font-bold mb-4">
              <Bug className="w-8 h-8" />
              <span>Developer & Tester</span>
            </div>
            <p className="text-lg text-muted-foreground italic mb-8">
              "Like what you see? Let's squash some bugs together."
            </p>
          </div>

          <div className="flex justify-center gap-4 mb-12">
            {socialLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Button
                  variant="outline"
                  size="icon"
                  className={`hover:scale-110 transition-all duration-300 ${link.color} border-border/30 hover:border-primary/50`}
                  asChild
                >
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    {link.icon}
                  </a>
                </Button>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
            className="border-t border-border/20 pt-8"
          >
            <p className="text-muted-foreground text-sm">
              © {currentYear} Jesse Amiandah Andayi. Built with React, TypeScript, and lots of ☕
            </p>
            <p className="text-muted-foreground text-xs mt-1 font-mono">
              No bugs were harmed in the making of this website... probably.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
