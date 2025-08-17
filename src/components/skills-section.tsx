"use client"

import type React from "react"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import {
  Code2,
  Database,
  Palette,
  Cloud,
  Smartphone,
  GitBranch,
  Zap,
  Globe,
  Server,
  Layers,
  Terminal,
  Cpu,
} from "lucide-react"

interface Skill {
  name: string
  level: number
  years: number
  icon: React.ElementType
  color: string
}

interface SkillCategory {
  title: string
  description: string
  icon: React.ElementType
  skills: Skill[]
  color: string
}

export default function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  const skillCategories: SkillCategory[] = [
    {
      title: "Frontend Development",
      description: "Creating engaging user interfaces and experiences",
      icon: Code2,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React", level: 95, years: 5, icon: Code2, color: "#61DAFB" },
        { name: "Next.js", level: 90, years: 3, icon: Globe, color: "#000000" },
        { name: "TypeScript", level: 88, years: 4, icon: Code2, color: "#3178C6" },
        { name: "Tailwind CSS", level: 92, years: 3, icon: Palette, color: "#06B6D4" },
        { name: "Vue.js", level: 75, years: 2, icon: Code2, color: "#4FC08D" },
        { name: "Framer Motion", level: 85, years: 2, icon: Zap, color: "#FF0055" },
      ],
    },
    {
      title: "Backend Development",
      description: "Building robust server-side applications and APIs",
      icon: Server,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Node.js", level: 90, years: 4, icon: Server, color: "#339933" },
        { name: "Python", level: 85, years: 3, icon: Code2, color: "#3776AB" },
        { name: "PostgreSQL", level: 88, years: 4, icon: Database, color: "#336791" },
        { name: "MongoDB", level: 80, years: 3, icon: Database, color: "#47A248" },
        { name: "GraphQL", level: 75, years: 2, icon: Layers, color: "#E10098" },
        { name: "REST APIs", level: 92, years: 5, icon: Globe, color: "#FF6B35" },
      ],
    },
    {
      title: "Cloud & DevOps",
      description: "Deploying and scaling applications in the cloud",
      icon: Cloud,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "AWS", level: 82, years: 3, icon: Cloud, color: "#FF9900" },
        { name: "Docker", level: 85, years: 3, icon: Layers, color: "#2496ED" },
        { name: "Vercel", level: 90, years: 2, icon: Zap, color: "#000000" },
        { name: "GitHub Actions", level: 78, years: 2, icon: GitBranch, color: "#2088FF" },
        { name: "Kubernetes", level: 70, years: 1, icon: Cpu, color: "#326CE5" },
        { name: "Terraform", level: 65, years: 1, icon: Cloud, color: "#7B42BC" },
      ],
    },
    {
      title: "Mobile & Tools",
      description: "Cross-platform development and productivity tools",
      icon: Smartphone,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "React Native", level: 80, years: 2, icon: Smartphone, color: "#61DAFB" },
        { name: "Git", level: 95, years: 5, icon: GitBranch, color: "#F05032" },
        { name: "VS Code", level: 98, years: 5, icon: Terminal, color: "#007ACC" },
        { name: "Figma", level: 85, years: 3, icon: Palette, color: "#F24E1E" },
        { name: "Storybook", level: 78, years: 2, icon: Layers, color: "#FF4785" },
        { name: "Jest", level: 82, years: 3, icon: Zap, color: "#C21325" },
      ],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level: number) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        delay: 0.2,
      },
    }),
  }

  return (
    <section ref={sectionRef} id="skills" className="py-20 lg:py-32 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-16"
        >
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-foreground drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
              <span className="text-[#00FF80]">SKILLS</span> & <span className="text-[#0080FF]">EXPERTISE</span>
            </h2>
            <p className="text-lg font-bold text-foreground max-w-3xl mx-auto leading-relaxed uppercase tracking-wide">
              A COMPREHENSIVE TOOLKIT BUILT THROUGH YEARS OF HANDS-ON EXPERIENCE AND CONTINUOUS LEARNING
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "TECHNOLOGIES", value: "20+", icon: Code2, color: "bg-[#FF0080]" },
              { label: "YEARS CODING", value: "5+", icon: Terminal, color: "bg-[#00FF80]" },
              { label: "PROJECTS BUILT", value: "50+", icon: Layers, color: "bg-[#0080FF]" },
              { label: "ALWAYS LEARNING", value: "∞", icon: Zap, color: "bg-[#FFFF00]" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={cardVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`neubrutalist-card text-center p-6 ${stat.color} ${
                  stat.color === "bg-[#00FF80]" || stat.color === "bg-[#FFFF00]" ? "text-black" : "text-white"
                } border-4 border-black hover:translate-x-1 hover:translate-y-1 transition-all duration-150`}
              >
                <stat.icon className="w-8 h-8 mx-auto mb-3" />
                <div className="text-3xl font-black mb-1 drop-shadow-[2px_2px_0px_rgba(0,0,0,0.3)]">{stat.value}</div>
                <div className="text-sm font-bold uppercase tracking-wide">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          <div className="space-y-12">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div key={category.title} variants={itemVariants} className="space-y-6">
                {/* Category header */}
                <div className="flex items-center gap-4">
                  <div
                    className={`p-4 border-4 border-black ${
                      categoryIndex % 4 === 0
                        ? "bg-[#FF0080]"
                        : categoryIndex % 4 === 1
                          ? "bg-[#00FF80]"
                          : categoryIndex % 4 === 2
                            ? "bg-[#0080FF]"
                            : "bg-[#FFFF00]"
                    } ${categoryIndex % 4 === 1 || categoryIndex % 4 === 3 ? "text-black" : "text-white"}`}
                  >
                    <category.icon className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-black uppercase tracking-wide text-foreground drop-shadow-[2px_2px_0px_rgba(0,0,0,0.3)]">
                      {category.title}
                    </h3>
                    <p className="text-foreground font-bold uppercase tracking-wide">{category.description}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      variants={cardVariants}
                      whileHover={{ scale: 1.02, y: -2 }}
                      onHoverStart={() => setHoveredSkill(skill.name)}
                      onHoverEnd={() => setHoveredSkill(null)}
                      className="group"
                    >
                      <div className="neubrutalist-card p-4 bg-white border-4 border-black hover:translate-x-1 hover:translate-y-1 transition-all duration-150">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <div
                              className="p-2 border-2 border-black"
                              style={{ backgroundColor: skill.color, color: "white" }}
                            >
                              <skill.icon className="w-4 h-4" />
                            </div>
                            <div>
                              <h4 className="font-black uppercase tracking-wide text-foreground group-hover:text-[#FF0080] transition-colors">
                                {skill.name}
                              </h4>
                              <p className="text-xs font-bold text-foreground uppercase">{skill.years} YEARS</p>
                            </div>
                          </div>
                          <div
                            className={`px-2 py-1 border-2 border-black font-black text-xs uppercase ${
                              hoveredSkill === skill.name ? "bg-[#FF0080] text-white" : "bg-[#00FF80] text-black"
                            } transition-colors`}
                          >
                            {skill.level}%
                          </div>
                        </div>

                        <div className="space-y-2">
                          <div className="flex justify-between text-xs font-bold text-foreground uppercase">
                            <span>PROFICIENCY</span>
                            <span>{skill.level}%</span>
                          </div>
                          <div className="h-3 bg-gray-200 border-2 border-black overflow-hidden">
                            <motion.div
                              className="h-full bg-[#FF0080] border-r-2 border-black"
                              variants={progressVariants}
                              initial="hidden"
                              animate={isInView ? "visible" : "hidden"}
                              custom={skill.level}
                            />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="text-center space-y-6">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-3xl font-black uppercase tracking-wide text-foreground mb-4 drop-shadow-[2px_2px_0px_rgba(0,0,0,0.3)]">
                <span className="text-[#FFFF00]">ALWAYS</span> LEARNING
              </h3>
              <p className="text-foreground font-bold leading-relaxed mb-6 uppercase tracking-wide">
                TECHNOLOGY EVOLVES RAPIDLY, AND SO DO I. I'M CONSTANTLY EXPLORING NEW FRAMEWORKS, TOOLS, AND
                METHODOLOGIES TO STAY AT THE FOREFRONT OF DEVELOPMENT.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {["WEBASSEMBLY", "RUST", "THREE.JS", "AI/ML", "WEB3", "MICRO-FRONTENDS"].map((tech, index) => (
                  <motion.div key={tech} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <div
                      className={`px-4 py-2 border-2 border-black font-black text-sm uppercase tracking-wide hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-150 ${
                        index % 4 === 0
                          ? "bg-[#FF0080] text-white"
                          : index % 4 === 1
                            ? "bg-[#00FF80] text-black"
                            : index % 4 === 2
                              ? "bg-[#0080FF] text-white"
                              : "bg-[#FFFF00] text-black"
                      }`}
                    >
                      {tech}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
