"use client"
import Link from "next/link"
import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Play, ArrowRight } from "lucide-react"

interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  image: string
  technologies: string[]
  category: string
  githubUrl: string
  liveUrl: string
  featured: boolean
}

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)

  // Added "In Progress" for Coupler
  const categories = ["All", "Web Apps", "Design Systems", "In Progress"]

  // === YOUR PROJECTS ===
  const projects: Project[] = [
    {
      id: "dimsee",
      title: "Dimsee",
      description:
        "Full-stack platform with real-time experiences, modern auth, and a polished UI.",
      longDescription:
        // Edit this copy to match Dimsee precisely
        "A production-grade app built with a modern web stack. It features secure authentication, real-time interactions, robust data modeling, and a crisp, accessible UI. I focused on performance (SSR/ISR), DX, and clean component architecture.",
      image: "../../../public/dimsee-hero.png",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Auth.js", "Tailwind CSS", "WebSockets"],
      category: "Web Apps",
      githubUrl: "https://github.com/sidd190/Dimsee",
      liveUrl: "https://dimsee.netlify.app",
      featured: true,
    },
    {
      id: "coupler",
      title: "Coupler (Upcoming)",
      description:
        "Upcoming data/reporting tool—my build focuses on UX, reliability, and integrations.",
      longDescription:
        // High-level placeholder—replace with specifics of your upcoming build
        "An in-progress project exploring automated data pipelines and report building. I’m designing a streamlined onboarding, robust integration layer, and shareable dashboards. The emphasis is on modular architecture and delightful UX.",
      image: "/projects/coupler-upcoming.png",
      technologies: ["Next.js", "TypeScript", "tRPC", "PostgreSQL", "Prisma", "Tailwind CSS"],
      category: "In Progress",
      githubUrl: "#",
      liveUrl: "#",
      featured: true,
    },
    {
      id: "club-website",
      title: "Club Website",
      description:
        "Fast, accessible club site with events, media, and CMS-powered content.",
      longDescription:
        "A modern club website featuring events, announcements, photo/video galleries, and a blog. Built for performance and maintainability with a headless CMS so non-devs can update content easily.",
      image: "/projects/club-website.png",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "MDX/Headless CMS", "Vercel"],
      category: "Web Apps",
      githubUrl: "#",
      liveUrl: "#",
      featured: false,
    },
    {
      id: "chatting-platform",
      title: "Chatting Platform",
      description:
        "Realtime chat with DMs, group rooms, presence, and typing indicators.",
      longDescription:
        "A realtime messaging app featuring 1:1 and group chats, presence, typing indicators, unread counts, and optimistic UI updates. Clean socket abstractions and a modular UI kit.",
      image: "/projects/chat-app.png",
      technologies: ["Next.js", "TypeScript", "WebSockets", "Redis", "Tailwind CSS"],
      category: "Web Apps",
      githubUrl: "#",
      liveUrl: "#",
      featured: false,
    },
    {
      id: "notes-app",
      title: "Notes App",
      description:
        "Markdown notes with tags, search, offline mode, and sync.",
      longDescription:
        "A minimalist notes app supporting Markdown, keyboard shortcuts, full-text search, tagging, and offline-first sync. Emphasis on snappy UX and robust data model.",
      image: "/projects/notes-app.png",
      technologies: ["Next.js", "TypeScript", "IndexedDB", "PWA", "Tailwind CSS"],
      category: "Web Apps",
      githubUrl: "#",
      liveUrl: "#",
      featured: false,
    },
    {
      id: "pinterest-clone",
      title: "Pinterest Clone",
      description:
        "Masonry grid, saves, boards, and infinite scroll—clean, responsive UI.",
      longDescription:
        "A visual discovery clone with Masonry layout, pin creation, board organization, and infinite scrolling. Focused on accessibility and polished interactions.",
      image: "/projects/pinterest-clone.png",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Cloudinary", "PostgreSQL"],
      category: "Web Apps",
      githubUrl: "#",
      liveUrl: "#",
      featured: false,
    },
    // If your LinkedIn post includes additional frontend-only builds, add them here
    // using the same shape.
  ]

  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((project) => project.category === selectedCategory)

  const featuredProjects = projects.filter((project) => project.featured)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  return (
    <section ref={sectionRef} id="projects" className="py-20 lg:py-32 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-16"
        >
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-foreground drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
              <span className="text-[#FF0080]">FEATURED</span> <span className="text-[#00FF80]">PROJECTS</span>
            </h2>
            <p className="text-lg font-bold text-foreground max-w-3xl mx-auto leading-relaxed uppercase tracking-wide">
              A SHOWCASE OF MY RECENT WORK—FROM FULL-STACK PLATFORMS TO UPCOMING BUILDS
            </p>
          </motion.div>

          {/* Highlighted (first two featured) */}
          <motion.div variants={itemVariants} className="space-y-8">
            <h3 className="text-3xl font-black uppercase tracking-wide text-foreground drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
              <span className="text-[#0080FF]">HIGHLIGHTED</span> WORK
            </h3>
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredProjects.slice(0, 2).map((project) => (
                <motion.div
                  key={project.id}
                  variants={cardVariants}
                  whileHover={{ scale: 1.02, y: -5 }}
                  onHoverStart={() => setHoveredProject(project.id)}
                  onHoverEnd={() => setHoveredProject(null)}
                  className="group cursor-pointer"
                >
                  <div className="neubrutalist-card bg-white border-4 border-black overflow-hidden hover:translate-x-1 hover:translate-y-1 transition-all duration-150">
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <div className="flex gap-2">
                          <Link href={project.liveUrl} aria-label="View live project">
                            <Button className="neubrutalist-button bg-[#FF0080] text-white">
                              <Play className="w-4 h-4 mr-2" />
                              LIVE DEMO
                            </Button>
                          </Link>
                          <Link href={project.githubUrl} aria-label="View source code">
                            <Button className="neubrutalist-button bg-[#00FF80] text-black">
                              <Github className="w-4 h-4 mr-2" />
                              CODE
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="p-6 space-y-4">
                      <div className="space-y-2">
                        <h4 className="text-2xl font-black uppercase tracking-wide text-foreground group-hover:text-[#FF0080] transition-colors drop-shadow-[2px_2px_0px_rgba(0,0,0,0.3)]">
                          {project.title}
                        </h4>
                        <p className="text-foreground font-bold leading-relaxed">{project.longDescription}</p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <div
                            key={tech}
                            className={`px-3 py-1 border-2 border-black font-black text-xs uppercase tracking-wide ${
                              techIndex % 4 === 0
                                ? "bg-[#FF0080] text-white"
                                : techIndex % 4 === 1
                                  ? "bg-[#00FF80] text-black"
                                  : techIndex % 4 === 2
                                    ? "bg-[#0080FF] text-white"
                                    : "bg-[#FFFF00] text-black"
                            }`}
                          >
                            {tech}
                          </div>
                        ))}
                      </div>
                      <div className="flex items-center justify-between pt-2">
                        <div className="flex gap-3">
                          <a
                            href={project.liveUrl}
                            className="p-2 bg-[#FF0080] text-white border-2 border-black hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-150"
                            aria-label="View live project"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                          <a
                            href={project.githubUrl}
                            className="p-2 bg-[#00FF80] text-black border-2 border-black hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-150"
                            aria-label="View source code"
                          >
                            <Github className="w-4 h-4" />
                          </a>
                        </div>
                        <motion.div animate={{ x: hoveredProject === project.id ? 4 : 0 }} className="text-[#FF0080]">
                          <ArrowRight className="w-6 h-6" />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Filters + Grid */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => (
                <Button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`neubrutalist-button font-black uppercase tracking-wide ${
                    selectedCategory === category
                      ? "bg-[#FF0080] text-white"
                      : index % 4 === 0
                        ? "bg-[#00FF80] text-black"
                        : index % 4 === 1
                          ? "bg-[#0080FF] text-white"
                          : index % 4 === 2
                            ? "bg-[#FFFF00] text-black"
                            : "bg-white text-black"
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={cardVariants}
                  whileHover={{ scale: 1.02, y: -5 }}
                  onHoverStart={() => setHoveredProject(project.id)}
                  onHoverEnd={() => setHoveredProject(null)}
                  className="group cursor-pointer"
                  layout
                >
                  <div className="neubrutalist-card bg-white border-4 border-black overflow-hidden hover:translate-x-1 hover:translate-y-1 transition-all duration-150 h-full flex flex-col">
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute top-2 right-2">
                        {project.featured && (
                          <div className="bg-[#FF0080] text-white px-2 py-1 border-2 border-black font-black text-xs uppercase">
                            FEATURED
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="p-4 space-y-3 flex-1 flex flex-col">
                      <div className="space-y-2 flex-1">
                        <h4 className="font-black uppercase tracking-wide text-foreground group-hover:text-[#FF0080] transition-colors">
                          {project.title}
                        </h4>
                        <p className="text-sm text-foreground font-bold leading-relaxed">{project.description}</p>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.slice(0, 3).map((tech, techIndex) => (
                          <div
                            key={tech}
                            className={`px-2 py-1 border border-black font-bold text-xs uppercase ${
                              techIndex % 3 === 0
                                ? "bg-[#00FF80] text-black"
                                : techIndex % 3 === 1
                                  ? "bg-[#0080FF] text-white"
                                  : "bg-[#FFFF00] text-black"
                            }`}
                          >
                            {tech}
                          </div>
                        ))}
                        {project.technologies.length > 3 && (
                          <div className="px-2 py-1 border border-black font-bold text-xs uppercase bg-[#FF8000] text-white">
                            +{project.technologies.length - 3}
                          </div>
                        )}
                      </div>
                      <div className="flex items-center justify-between pt-2">
                        <div className="flex gap-2">
                          <a
                            href={project.liveUrl}
                            className="p-1.5 bg-[#FF0080] text-white border border-black hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-150"
                            aria-label="View live project"
                          >
                            <ExternalLink className="w-3 h-3" />
                          </a>
                          <a
                            href={project.githubUrl}
                            className="p-1.5 bg-[#00FF80] text-black border border-black hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-150"
                            aria-label="View source code"
                          >
                            <Github className="w-3 h-3" />
                          </a>
                        </div>
                        <motion.div animate={{ x: hoveredProject === project.id ? 4 : 0 }} className="text-[#FF0080]">
                          <ArrowRight className="w-4 h-4" />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="text-center space-y-6">
            <p className="text-foreground font-bold uppercase tracking-wide">
              INTERESTED IN SEEING MORE OF MY WORK OR DISCUSSING A PROJECT?
            </p>
            <Link href="https://x.com/Sidd190b">
              <Button className="neubrutalist-button bg-[#FF0080] text-white text-lg px-8 py-4 font-black uppercase tracking-wide">
                <motion.span whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-flex items-center gap-2">
                  LET'S WORK TOGETHER
                  <ArrowRight className="w-5 h-5" />
                </motion.span>
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
