import { motion } from "framer-motion";
import GlassCard from "./GlassCard";
import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  Github,
  Play,
  Clock,
  User,
  FlaskConical,
  Rocket,
} from "lucide-react";

const Projects = () => {
  const testsAndChallenges = [
    {
      name: "Team Task Management System",
      status: "Live",
      client: "ZNG COMPANY",
      description:
        "Full stack task management web application for small teams with role based access control (Admin, Manager, Member). Features task CRUD operations, user management, task assignment, status tracking, and filtering. Demonstrates clean OOP design and modern best practices.",
      tech: [
        "React 18+",
        "Django 5+",
        "Qwik",
        "PostgreSQL",
        "JWT",
        "Nginx",
        "Gunicorn",
      ],
      features: [
        "Role Based Access Control (RBAC)",
        "Task management with assignment and status tracking",
        "User management and role assignment",
        "JWT authentication",
        "Task filtering by status and assignee",
      ],
      liveLink: "https://team-task-management-system-three.vercel.app/",
      repoLink: "https://github.com/iRobot90/team-task-management-system",
      deployment: "Nginx + Gunicorn on DigitalOcean VPS",
    },
    {
      name: "PesaDB Edge: Custom RDBMS",
      status: "In Progress",
      challenge: "Pesapal Junior Developer Challenge",
      description:
        "Custom relational database management system built from scratch with SQL like interface, CRUD operations, indexing, primary/unique keys, and JOIN support. Includes demo web application showcasing CRUD operations.",
      tech: ["Database Systems", "SQL Parser", "REPL", "Web Demo"],
      features: [
        "Custom RDBMS engine with storage and indexing",
        "SQL-like query interface with interactive REPL",
        "CRUD operations and JOIN support",
        "Primary and unique key constraints",
        "Demo web application",
      ],
      liveLink: null,
      repoLink: "https://github.com/iRobot90/pesadb-edge-rdbms",
      challengeLink:
        "https://pesapal.freshteam.com/jobs/k6mL4MNNdR7p/junior-developer-26",
    },
  ];

  const clientProjects = [
    {
      name: "AIRS",
      status: "Live",
      client: "Green World Campaign",
      description:
        "Fintech meets eco warriors. Use financial incentives to save the planet? You bet. Tracking impact and rewarding good vibes.",
      tech: ["React", "Vite", "Django"],
      liveLink: "https://airsgreenworld.com",
      dashboardLink: "https://app.airsgreenworld.com",
      repoLink: "#",
    },
    {
      name: "SPH Website",
      status: "Live",
      client: "Swahilipot Hub Foundation",
      description:
        "The digital face of Swahilipot Hub. Culture, tech, and youth all in one place. It's the hub, literally.",
      tech: ["Next.js", "Bootstrap"],
      liveLink: "https://www.swahilipothub.co.ke",
      repoLink: "#",
    },
    {
      name: "SPHFM",
      status: "Live",
      client: "Swahilipot Hub Foundation",
      description:
        "Radio for the digital age. Streaming beats and good talk directly to your device.",
      tech: ["React Vite", "Tailwind CSS"],
      liveLink: "https://www.swahilipotfm.co.ke",
      repoLink: "#",
    },
    {
      name: "PIW",
      status: "Live",
      client: "Swahilipot Hub Foundation",
      description:
        "Pwani Innovation Week's digital home. Where innovators meet, greet, and compete.",
      tech: ["Next.js", "Bootstrap"],
      liveLink: "https://www.swahilipothub.co.ke",
      repoLink: "#",
    },
    {
      name: "GWC Kenya",
      status: "In Progress",
      client: "Green World Campaign",
      description:
        "A digital platform for Green World Campaign Kenya, focusing on regenerating landscapes and empowering communities across coastal Kenya through agroforestry and climate literacy.",
      tech: ["React", "Vite", "Tailwind CSS"],
      liveLink:
        "https://escapefromsquarespace-ix3za0zf7-web-weavers-projects-59d3fe3c.vercel.app/",
      repoLink: "#",
    },
  ];

  const personalProjects = [
    {
      name: "Twanababyshop",
      status: "In Progress",
      description:
        "Ecommerce for the little ones. Not deployed yet, but the code is looking fresh.",
      tech: ["React", "Django"],
      liveLink: "https://github.com/iRobot90/twanababyshop",
      repoLink: "https://github.com/iRobot90/twanababyshop",
    },
    {
      name: "Afrikart",
      status: "In Progress",
      description:
        "Cultural ecommerce. Connecting independent African creators with the world. Authentic goods only.",
      tech: ["TypeScript", "Supabase"],
      liveLink: null,
      repoLink: "#",
    },
    {
      name: "Rental System",
      status: "In Progress",
      description:
        "For landlords who hate spreadsheets. Manage units, tenants, and payments without the headache.",
      tech: ["Django", "Bootstrap", "SQLite", "PostgreSQL"],
      liveLink: null,
      repoLink: "#",
    },
    {
      name: "Waste KIKI",
      status: "In Progress",
      description:
        "Gamifying trash? Yes. Earn rewards for recycling. Clean streets, happy people.",
      tech: ["Django REST API", "Vue/React", "Gamification"],
      liveLink: null,
      repoLink: "#",
    },
  ];

  const startupProjects = [
    {
      name: "Haaafla",
      status: "Live",
      description:
        "A comprehensive event management platform connecting event organizers with vendors. Features vendor booking, event creation, payment processing, and organizer verification.",
      tech: ["Next.js", "TypeScript", "Supabase", "Stripe", "Tailwind CSS"],
      features: [
        "Event creation and management",
        "Vendor booking system with real-time availability",
        "Integrated payment processing",
        "Organizer verification workflow",
        "Role-based access control",
      ],
      liveLink: "https://haaafla.chrisdevcode.com",
      repoLink: "#",
      isPrivate: true,
    },
    {
      name: "HMS (Hotel Management System)",
      status: "In Progress",
      description:
        "A comprehensive hotel management system for streamlining reservations, guest services, room management, and billing operations.",
      tech: ["React", "Django", "PostgreSQL", "REST API"],
      features: [
        "Room reservation and availability tracking",
        "Guest check-in/check-out management",
        "Billing and payment processing",
        "Staff management and role-based access",
      ],
      liveLink: null,
      repoLink: "#",
    },
  ];

  const ProjectCard = ({
    project,
    isPersonal = false,
    isTestChallenge = false,
  }: {
    project: any;
    isPersonal?: boolean;
    isTestChallenge?: boolean;
  }) => (
    <GlassCard className="h-full p-0 flex flex-col overflow-hidden group">
      {project.liveLink && !project.liveLink.includes("github.com") && (
        <div className="w-full h-48 overflow-hidden bg-muted relative">
          <img
            src={`https://api.microlink.io/?url=${encodeURIComponent(project.liveLink)}&screenshot=true&meta=false&embed=screenshot.url`}
            alt={`${project.name} preview`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
        </div>
      )}

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-2">
              {project.name}
            </h3>
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <div
                className={`px-2 py-1 rounded-full text-xs font-mono ${project.status === "Live"
                  ? "bg-accent/20 text-accent"
                  : "bg-primary/20 text-primary"
                  }`}
              >
                {project.status === "Live" ? (
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
              {project.challenge && (
                <div className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-mono flex items-center gap-1">
                  <FlaskConical className="w-3 h-3" />
                  {project.challenge}
                </div>
              )}
              {project.isPrivate && (
                <div className="px-2 py-1 bg-orange-500/20 text-orange-300 rounded-full text-xs font-mono">
                  Private Repo
                </div>
              )}
            </div>
          </div>
        </div>

        <p className="text-muted-foreground text-sm mb-4">
          {project.description}
        </p>

        {project.features && (
          <div className="mb-4">
            <p className="text-xs font-semibold text-foreground mb-2">
              Key Features:
            </p>
            <ul className="text-xs text-muted-foreground space-y-1">
              {project.features.map((feature: string, idx: number) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-accent mt-0.5">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

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

        {project.deployment && (
          <p className="text-xs text-muted-foreground mb-4">
            <span className="font-semibold">Deployment:</span>{" "}
            {project.deployment}
          </p>
        )}

        <div className="flex gap-3 mt-auto flex-wrap">
          {project.liveLink && (
            <Button
              size="sm"
              variant="outline"
              className="flex items-center gap-2"
              asChild
            >
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            </Button>
          )}
          {project.dashboardLink && (
            <Button
              size="sm"
              variant="outline"
              className="flex items-center gap-2"
              asChild
            >
              <a
                href={project.dashboardLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="w-4 h-4" />
                Dashboard
              </a>
            </Button>
          )}
          {project.repoLink && project.repoLink !== "#" && (
            <Button
              size="sm"
              variant="outline"
              className="flex items-center gap-2"
              asChild
            >
              <a
                href={project.repoLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-4 h-4" />
                Code
              </a>
            </Button>
          )}
          {project.challengeLink && (
            <Button
              size="sm"
              variant="outline"
              className="flex items-center gap-2"
              asChild
            >
              <a
                href={project.challengeLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="w-4 h-4" />
                Challenge Brief
              </a>
            </Button>
          )}
        </div>
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
            A showcase of client work, personal projects, and technical
            challenges that demonstrate my expertise in both testing and
            development.
          </p>
        </motion.div>

        {/* Tests & Challenges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-primary mb-8 flex items-center gap-2">
            <FlaskConical className="w-6 h-6" />
            Tests & Challenges
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {testsAndChallenges.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ProjectCard project={project} isTestChallenge={true} />
              </motion.div>
            ))}
          </div>
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

        {/* Startup Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-primary mb-8 flex items-center gap-2">
            <Rocket className="w-6 h-6" />
            Startup Projects
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {startupProjects.map((project, index) => (
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
