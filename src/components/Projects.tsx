import { motion } from "framer-motion";
import GlassCard from "./GlassCard";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Play, Clock, User } from "lucide-react";

const Projects = () => {
  const clientProjects = [
    {
      name: "AIRS",
      status: "Live",
      client: "Green World Campaign",
      description: " A Fintech Platform for Automated Incentives for Regenerative Stewardship - A fintech platform designed to reward communities for environmental restoration and regenerative practices. Combines impact tracking with digital incentives.",
      tech: ["React", "Vite", "Django"],
      liveLink: "https://airsgreenworld.com",
      dashboardLink: "https://app.airsgreenworld.com",
      repoLink: "#"
    },
    {
      name: "SPH Website",
      status: "Live", 
      client: "Swahilipot Hub Foundation",
      description: "Official site for Swahilipot Hub Foundation, an NGO focused on youth, culture, and tech innovation.",
      tech: ["Next.js", "Bootstrap"],
      liveLink: "https://www.swahilipothub.co.ke",
      repoLink: "#"
    },
    {
      name: "SPHFM",
      status: "Live",
      client: "Swahilipot Hub Foundation",
      description: "A vibrant digital platform for Swahilipot's radio station with embedded streaming integrations.",
      tech: ["React+Vite", "Tailwind CSS"],
      liveLink: "https://www.swahilipotfm.co.ke",
      repoLink: "#"
    },
    {
      name: "PIW",
      status: "Live",
      client: "Swahilipot Hub Foundation",
      description: "Pwani Innovation Week - Annual innovation event site for registration, program highlights, and regional tech entrepreneurship.",
      tech: ["Next.js", "Bootstrap"],
      liveLink: "https://www.swahilipothub.co.ke",
      repoLink: "#"
    }
  ];

  const personalProjects = [
    {
      name: "Afrikart",
      status: "In Progress",
      description: "🛒 A culturally rooted e-commerce concept focused on independent African creators and sustainable goods.",
      tech: ["TypeScript", "Supabase"],
      liveLink: null,
      repoLink: "#"
    },
    {
      name: "Rental System",
      status: "In Progress",
      description: "A tool to manage local rental units, tenant tracking, and digital payments. Built for landlords and community rentals.",
      tech: ["Django", "Bootstrap", "SQLite", "PostgreSQL"],
      liveLink: null,
      repoLink: "#"
    },
    {
      name: "Waste KIKI",
      status: "In Progress",
      description: "♻️ Community-based waste tracking and reward system. Promotes smart waste segregation and gamified collection points.",
      tech: ["Django REST API", "Vue/React", "Gamification"],
      liveLink: null,
      repoLink: "#"
    }
  ];

  const ProjectCard = ({ project, isPersonal = false }: { project: any, isPersonal?: boolean }) => (
    <GlassCard className="h-full">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold text-foreground mb-2">{project.name}</h3>
          <div className="flex items-center gap-2 mb-2">
            <div className={`px-2 py-1 rounded-full text-xs font-mono ${
              project.status === 'Live' 
                ? 'bg-accent/20 text-accent' 
                : 'bg-primary/20 text-primary'
            }`}>
              {project.status === 'Live' ? (
                <div className="flex items-center gap-1">
                  <Play className="w-3 h-3" />
                  Live
                </div>
              ) : (
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  In Progress
                </div>
              )}
            </div>
            {!isPersonal && project.client && (
              <div className="px-2 py-1 bg-secondary/20 text-secondary-foreground rounded-full text-xs font-mono flex items-center gap-1">
                <User className="w-3 h-3" />
                {project.client}
              </div>
            )}
          </div>
        </div>
      </div>

      <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((tech: string) => (
          <span
            key={tech}
            className="px-3 py-1 bg-muted/30 text-foreground rounded-full text-xs font-mono"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-3 mt-auto">
        {project.liveLink && (
          <Button size="sm" variant="outline" className="flex items-center gap-2" asChild>
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          </Button>
        )}
        {project.dashboardLink && (
          <Button size="sm" variant="outline" className="flex items-center gap-2" asChild>
            <a href={project.dashboardLink} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4" />
              Dashboard
            </a>
          </Button>
        )}
        <Button size="sm" variant="outline" className="flex items-center gap-2">
          <Github className="w-4 h-4" />
          Code
        </Button>
      </div>
    </GlassCard>
  );

  return (
    <section className="py-20 px-6" id="projects">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6">
            Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of client work and personal projects that demonstrate my expertise in both testing and development.
          </p>
        </motion.div>

        {/* Client Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-primary mb-8 flex items-center gap-2">
            <User className="w-6 h-6" />
            Client Projects
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {clientProjects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Personal Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-primary mb-8 flex items-center gap-2">
            <Github className="w-6 h-6" />
            Personal Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {personalProjects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ProjectCard project={project} isPersonal={true} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;