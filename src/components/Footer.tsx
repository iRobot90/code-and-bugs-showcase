import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" strokeWidth={1.5} />,
      url: "https://www.linkedin.com/in/jesse-amiandah/",
    },
    {
      name: "Medium",
      icon: <span className="text-base font-serif font-bold leading-none">M</span>,
      url: "https://medium.com/@amiandah8",
    },
    {
      name: "WakaTime",
      icon: <span className="text-xs font-mono font-bold leading-none tracking-tight">WT</span>,
      url: "https://wakatime.com/@web_weaver",
    },
    {
      name: "Email",
      icon: <Mail className="w-5 h-5" strokeWidth={1.5} />,
      url: "mailto:jesse.amianda@chrisdevcode.com",
    },
  ];

  return (
    <footer className="py-16 px-6 border-t border-border" id="footer">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-sm text-muted-foreground mb-8">
            Like what you see? Let's squash some bugs together.
          </p>

          <ul className="flex justify-center items-center gap-3 mb-10 list-none p-0 m-0">
            {socialLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-accent transition-colors"
                >
                  {link.icon}
                </a>
              </li>
            ))}
          </ul>

          <p className="text-xs text-muted-foreground">
            © {currentYear} Jesse Amiandah Andayi
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
