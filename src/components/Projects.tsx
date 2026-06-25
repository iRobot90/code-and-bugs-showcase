import React, { useState } from "react";
import { motion } from "framer-motion";
import GlassCard from "./GlassCard";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

type Project = {
  name: string;
  status: string;
  client?: string;
  challenge?: string;
  description: string;
  tech: string[];
  liveLink?: string | null;
  dashboardLink?: string;
  repoLink?: string;
  challengeLink?: string;
  isPrivate?: boolean;
};

const getPreviewUrl = (project: Project) => {
  if (project.liveLink && !project.liveLink.includes("github.com")) {
    return project.liveLink;
  }
  if (project.dashboardLink) {
    return project.dashboardLink;
  }
  return null;
};

const ProjectPreview = ({ url, title }: { url: string; title: string }) => {
  const [error, setError] = useState(false);

  if (error) return null;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open ${title} live preview`}
      className="block w-full h-40 overflow-hidden bg-muted border-b border-border"
    >
      <img
        src={`https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&meta=false&embed=screenshot.url`}
        alt={`${title} landing page preview`}
        className="w-full h-full object-cover object-top transition-transform duration-300 hover:scale-[1.02]"
        loading="lazy"
        onError={() => setError(true)}
      />
    </a>
  );
};

const statusStyles: Record<string, string> = {
  Live: "bg-accent/20 text-foreground",
  "In Progress": "bg-muted text-muted-foreground",
  "On Pause": "bg-muted text-muted-foreground",
};

const ProjectCard = ({ project }: { project: Project }) => {
  const previewUrl = getPreviewUrl(project);

  return (
    <GlassCard className="h-full flex flex-col p-0 overflow-hidden">
      {previewUrl && <ProjectPreview url={previewUrl} title={project.name} />}

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className="text-base font-semibold text-foreground">{project.name}</h3>
          <span
            className={`shrink-0 text-xs font-medium px-2 py-0.5 rounded-md ${
              statusStyles[project.status] ?? statusStyles["In Progress"]
            }`}
          >
            {project.status}
          </span>
        </div>

        {project.client && (
          <p className="text-xs text-muted-foreground mb-3">{project.client}</p>
        )}

        <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-grow">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 bg-muted text-muted-foreground rounded text-xs"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.liveLink && (
            <Button size="sm" variant="outline" className="h-8 text-xs border-border" asChild>
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-3 h-3 mr-1" />
                Live
              </a>
            </Button>
          )}
          {project.dashboardLink && (
            <Button size="sm" variant="outline" className="h-8 text-xs border-border" asChild>
              <a href={project.dashboardLink} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-3 h-3 mr-1" />
                Dashboard
              </a>
            </Button>
          )}
          {project.repoLink && project.repoLink !== "#" && (
            <Button size="sm" variant="outline" className="h-8 text-xs border-border" asChild>
              <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
                <Github className="w-3 h-3 mr-1" />
                Code
              </a>
            </Button>
          )}
          {project.challengeLink && (
            <Button size="sm" variant="outline" className="h-8 text-xs border-border" asChild>
              <a href={project.challengeLink} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-3 h-3 mr-1" />
                Brief
              </a>
            </Button>
          )}
        </div>
      </div>
    </GlassCard>
  );
};

const Projects = () => {
  const testsAndChallenges: Project[] = [
    {
      name: "Team Task Management System",
      status: "Live",
      client: "ZNG COMPANY",
      description:
        "Full stack task management web application for small teams with role based access control. Features task CRUD, user management, and JWT authentication.",
      tech: ["React", "Django", "PostgreSQL", "JWT"],
      liveLink: "https://team-task-management-system-three.vercel.app/",
      repoLink: "https://github.com/iRobot90/team-task-management-system",
    },
    {
      name: "PesaDB Edge: Custom RDBMS",
      status: "Live",
      challenge: "Pesapal Junior Developer Challenge",
      description:
        "Custom relational database management system with SQL-like interface, CRUD operations, indexing, and JOIN support. Includes a demo web application.",
      tech: ["Database Systems", "SQL Parser", "REPL"],
      repoLink: "https://github.com/iRobot90/pesadb-edge-rdbms",
      challengeLink: "https://pesapal.freshteam.com/jobs/k6mL4MNNdR7p/junior-developer-26",
    },
  ];

  const clientProjects: Project[] = [
    {
      name: "AIRS",
      status: "Live",
      client: "Green World Campaign",
      description: "Fintech platform using financial incentives to track environmental impact and reward sustainable actions.",
      tech: ["React", "Vite", "Django"],
      liveLink: "https://airsgreenworld.com",
      dashboardLink: "https://app.airsgreenworld.com",
      isPrivate: true,
    },
    {
      name: "SPH Website",
      status: "Live",
      client: "Swahilipot Hub Foundation",
      description: "The digital home of Swahilipot Hub, bringing culture, tech, and youth together in one place.",
      tech: ["Next.js", "Bootstrap"],
      liveLink: "https://www.swahilipothub.co.ke",
      isPrivate: true,
    },
    {
      name: "SPHFM",
      status: "Live",
      client: "Swahilipot Hub Foundation",
      description: "Radio streaming platform for Swahilipot FM.",
      tech: ["React", "Tailwind CSS"],
      liveLink: "https://www.swahilipotfm.co.ke",
      isPrivate: true,
    },
    {
      name: "PIW",
      status: "Live",
      client: "Swahilipot Hub Foundation",
      description: "Pwani Innovation Week's digital platform for innovators.",
      tech: ["Next.js", "Bootstrap"],
      liveLink: "https://www.swahilipothub.co.ke",
      isPrivate: true,
    },
    {
      name: "GWC Kenya",
      status: "In Progress",
      client: "Green World Campaign",
      description: "Digital platform for regenerating landscapes and empowering coastal Kenya communities.",
      tech: ["React", "Vite", "Tailwind CSS"],
      liveLink: "https://escapefromsquarespace-ix3za0zf7-web-weavers-projects-59d3fe3c.vercel.app/",
      isPrivate: true,
    },
  ];

  const startupProjects: Project[] = [
    {
      name: "Petoria",
      status: "In Progress",
      description: "Production web app for product work and deployment.",
      tech: ["Next.js", "TypeScript", "Vercel"],
      liveLink: "https://petoria-web.vercel.app/",
    },
    {
      name: "Haaafla",
      status: "Live",
      description: "Event management platform connecting organizers with vendors, payments, and verification.",
      tech: ["Next.js", "Supabase", "Stripe"],
      liveLink: "https://haaafla.com/",
      isPrivate: true,
    },
  ];

  const personalProjects: Project[] = [
    {
      name: "Twanababyshop",
      status: "In Progress",
      description: "Ecommerce platform for baby products.",
      tech: ["React", "Django"],
      repoLink: "https://github.com/iRobot90/twanababyshop",
    },
    {
      name: "HMS / Rental System",
      status: "On Pause",
      description:
        "Hotel and property rental management system for reservations, guest services, room management, and landlord billing. Same codebase, currently on pause.",
      tech: ["React", "Django", "PostgreSQL"],
    },
    {
      name: "Waste KIKI",
      status: "In Progress",
      description: "Gamified recycling platform with rewards for sustainable behavior.",
      tech: ["Django REST", "Vue/React"],
    },
  ];

  const renderGrid = (
    projects: Project[],
    getId?: (project: Project) => string | undefined
  ) => (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <motion.div
          key={project.name}
          id={getId?.(project)}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.06, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <ProjectCard project={project} />
        </motion.div>
      ))}
    </div>
  );

  return (
    <section className="section-padding" id="projects">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="section-heading">Projects</h2>
          <p className="section-intro">
            Client work, personal builds, and technical challenges across testing and development.
          </p>
        </motion.div>

        <div className="space-y-16">
          <div>
            <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-6">
              Tests & Challenges
            </h3>
            {renderGrid(testsAndChallenges)}
          </div>

          <div>
            <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-6">
              Client Projects
            </h3>
            {renderGrid(clientProjects)}
          </div>

          <div>
            <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-6">
              Startup Projects
            </h3>
            {renderGrid(startupProjects, (p) =>
              p.name === "Petoria" ? "petoria" : p.name === "Haaafla" ? "haaafla" : undefined
            )}
          </div>

          <div>
            <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-6">
              Personal Projects
            </h3>
            {renderGrid(personalProjects, (p) =>
              p.name === "HMS / Rental System" ? "hms" : undefined
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
