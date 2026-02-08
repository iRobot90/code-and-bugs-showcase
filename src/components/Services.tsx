import { motion } from "framer-motion";
import GlassCard from "./GlassCard";
import { TestTube, Code, FileText, Zap, Shield, Rocket, Layers, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      title: "Data Annotation & Model Training",
      description: "High quality dataset labeling and trainer platform support",
      icon: <Layers className="w-8 h-8" />,
      features: ["Dataset labeling", "Annotation workflows", "Quality assurance", "Tooling and platform integration"]
    },
    {
      title: "Manual Testing",
      description: "Comprehensive testing across usability, functionality, and user experience",
      icon: <TestTube className="w-8 h-8" />,
      features: ["Usability Testing", "API Testing", "Voice Testing", "Streaming Testing", "Localization", "Regression Testing"]
    },
    {
      title: "Test Automation",
      description: "Building robust automated test suites for efficient continuous testing",
      icon: <Zap className="w-8 h-8" />,
      features: ["E2E Automation", "API Test Automation", "Performance Testing", "CI/CD Integration"]
    },
    {
      title: "Full-Stack Development",
      description: "Creating scalable web applications with modern technologies",
      icon: <Code className="w-8 h-8" />,
      features: ["Next.js & React", "Python & Django", "Database Design", "API Development"]
    },
    {
      title: "Quality Assurance",
      description: "Ensuring your applications meet the highest standards of quality",
      icon: <Shield className="w-8 h-8" />,
      features: ["Test Strategy", "Quality Metrics", "Bug Tracking", "Process Improvement"]
    },
    {
      title: "Technical Writing",
      description: "Clear documentation and technical communication",
      icon: <FileText className="w-8 h-8" />,
      features: ["API Documentation", "Test Plans", "User Guides", "Technical Specs"]
    },
    {
      title: "Performance Optimization",
      description: "Optimizing applications for speed, reliability, and scalability",
      icon: <Rocket className="w-8 h-8" />,
      features: ["Load Testing", "Code Optimization", "Database Tuning", "Monitoring Setup"]
    }
  ];

  return (
    <section className="py-20 px-6" id="services">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6">
            Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From breaking your application to building it stronger. I offer comprehensive testing and development services
            to ensure your software is robust, scalable, and user-friendly.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <GlassCard className="h-full hover:scale-105 transition-transform duration-300">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full text-background mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </div>

                <div className="space-y-2">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                      <span className="text-sm text-foreground font-mono">{feature}</span>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Startup showcase */}
        <div className="mt-10 grid md:grid-cols-2 gap-6">
           {/* Petoria */}
           <div id="petoria" className="border rounded-md p-6 bg-transparent">
             <h4 className="text-lg font-semibold text-foreground mb-2">Petoria</h4>
             <p className="text-sm text-muted-foreground mb-4">
               Production web app — product work and deployment. Live site shows UX, performance and integration work.
             </p>
             <div className="flex items-center gap-3">
               <a
                 href="https://petoria-web.vercel.app/"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="inline-block text-sm px-3 py-2 bg-primary text-white rounded hover:shadow-sm transition"
                 aria-label="Open Petoria"
               >
                 View Petoria
               </a>
               <Button size="sm" variant="outline" asChild>
                 <a href="mailto:jesse.amianda@chrisdevcode.com">Partner with us</a>
               </Button>
             </div>
           </div>
 
            {/* Haaafla */}
            <div id="haaafla" className="border rounded-md p-6 bg-transparent">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-1">Haaafla <span className="ml-2 text-xs px-2 py-1 bg-muted/10 rounded">Live • Private Repo</span></h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    A comprehensive event management platform connecting event organizers with vendors. Vendor booking, event creation, payments and organizer verification.
                  </p>

                  <ul className="text-sm list-disc list-inside space-y-1 mb-3">
                    <li>Event creation and management</li>
                    <li>Vendor booking with real-time availability</li>
                    <li>Integrated payment processing</li>
                    <li>Organizer verification workflow & role-based access</li>
                  </ul>

                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="text-xs px-2 py-1 rounded bg-muted/10 text-muted-foreground">Next.js</span>
                    <span className="text-xs px-2 py-1 rounded bg-muted/10 text-muted-foreground">TypeScript</span>
                    <span className="text-xs px-2 py-1 rounded bg-muted/10 text-muted-foreground">Supabase</span>
                    <span className="text-xs px-2 py-1 rounded bg-muted/10 text-muted-foreground">Stripe</span>
                    <span className="text-xs px-2 py-1 rounded bg-muted/10 text-muted-foreground">Tailwind CSS</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
               <Button size="sm" className="bg-primary text-white" asChild>
                 <a href="mailto:jesse.amianda@chrisdevcode.com">Partner with us</a>
               </Button>
               <Button size="sm" variant="outline" asChild>
                 <a href="#haaafla">View Haaafla</a>
               </Button>
             </div>
           </div>
         </div>
 
        {/* HMS + Support startups */}
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          {/* HMS (Hotel Management System) */}
          <div className="border rounded-md p-6 bg-transparent">
            <h4 className="text-lg font-semibold text-foreground mb-2">HMS (Hotel Management System) <span className="text-xs px-2 py-1 bg-muted/10 rounded">In Progress</span></h4>
            <p className="text-sm text-muted-foreground mb-3">
              Streamlining reservations, guest services, room management, and billing operations.
            </p>
            <ul className="text-sm list-disc list-inside space-y-1 mb-3">
              <li>Room reservation & availability tracking</li>
              <li>Guest check-in/check-out management</li>
              <li>Billing and payment processing</li>
              <li>Staff management & role-based access</li>
            </ul>
            <div className="flex items-center gap-3">
              <span className="text-xs px-2 py-1 rounded bg-muted/10 text-muted-foreground">React</span>
              <span className="text-xs px-2 py-1 rounded bg-muted/10 text-muted-foreground">Django</span>
              <span className="text-xs px-2 py-1 rounded bg-muted/10 text-muted-foreground">PostgreSQL</span>
              <span className="text-xs px-2 py-1 rounded bg-muted/10 text-muted-foreground">REST API</span>
            </div>
          </div>

          {/* Support startups */}
           <div className="mt-8">
             <div className="border rounded-md p-6 bg-transparent">
               <h4 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                 <Coffee className="w-5 h-5 text-primary" aria-hidden="true" />
                 Support startups
               </h4>
               <p className="text-sm text-muted-foreground mb-4">
                 Help fund early-stage projects and open-source work. Small contributions keep prototypes and deployments running.
               </p>

               <div className="flex flex-wrap gap-3 items-center">
                 <Button size="sm" className="bg-primary text-white" asChild>
                   <a href="https://www.buymeacoffee.com/jesseamiandah" target="_blank" rel="noopener noreferrer">Buy me a coffee</a>
                 </Button>

                 <Button size="sm" variant="outline" asChild>
                   <a
                     href="https://www.paypal.com/donate?business=amiandah8%40gmail.com"
                     target="_blank"
                     rel="noopener noreferrer"
                     aria-label="Donate via PayPal"
                   >
                     Donate via PayPal
                   </a>
                 </Button>

                 <div className="flex items-center gap-2 px-3 py-2 rounded bg-muted/5 text-sm">
                   <svg aria-hidden className="w-4 h-4 text-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M3 12h18" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                   <div className="flex flex-col">
                     <span className="text-xs text-muted-foreground">Mpesa (send to)</span>
                     <span className="text-sm font-medium">+254 741 902 217</span>
                   </div>
                   <a className="ml-3 text-xs text-primary underline" href="tel:+254741902217">Call / Send</a>
                 </div>
               </div>

               <div className="mt-3 text-xs text-muted-foreground">
                 PayPal (email): <span className="font-mono">amiandah8@gmail.com</span>
               </div>
             </div>
           </div>
         </div>
       </div>
     </section>
   );
 };
 
 export default Services;