"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ArrowDown, Code, Palette, Zap, Brain, Database, Cloud, Heart } from "lucide-react"

export default function IntegratedHeroAbout() {
  const containerRef = useRef<HTMLDivElement>(null)
  const progressBarRef = useRef<HTMLDivElement>(null)
  const bentoCardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger)

      // Progressive bar animation
      if (progressBarRef.current) {
        gsap.fromTo(
          progressBarRef.current,
          { height: "0%" },
          {
            height: "100%",
            duration: 2,
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 80%",
              end: "bottom 20%",
              scrub: 1,
            },
          },
        )
      }

      // Bento cards stagger animation
      if (bentoCardsRef.current) {
        const cards = bentoCardsRef.current.querySelectorAll(".bento-card")

        gsap.fromTo(
          cards,
          {
            opacity: 0,
            y: 50,
            scale: 0.9,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "power2.out",
            stagger: 0.2,
            scrollTrigger: {
              trigger: bentoCardsRef.current,
              start: "top 70%",
              end: "bottom 30%",
              toggleActions: "play none none reverse",
            },
          },
        )

        // Individual card fill animations
        cards.forEach((card, index) => {
          const fillElement = card.querySelector(".card-fill")
          if (fillElement) {
            gsap.fromTo(
              fillElement,
              { scaleX: 0 },
              {
                scaleX: 1,
                duration: 1.2,
                ease: "power2.inOut",
                scrollTrigger: {
                  trigger: card,
                  start: "top 80%",
                  end: "bottom 60%",
                  scrub: 1,
                },
                delay: index * 0.1,
              },
            )
          }
        })
      }

      console.log("[v0] Integrated hero-about animations initialized")
    }
  }, [])

  const frontendTech = ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vue.js", "Svelte"]
  const backendTech = ["Node.js", "Python", "PostgreSQL", "MongoDB", "GraphQL", "Express", "FastAPI"]
  const toolsTech = ["Docker", "AWS", "Vercel", "Git", "Figma", "Kubernetes", "GitHub Actions"]

  const bentoCards = [
    {
      title: "ABOUT ME",
      description:
        "I'm God's chosen developer, currently into full-stack development as a full time mental chore. I try to build cool stuff and learn whatever's needed in between.",
      icon: <Brain className="w-8 h-8" />,
      bgColor: "bg-[#FF0080]",
      textColor: "text-white",
      size: "col-span-2 row-span-2",
    },
    {
      title: "TECHNOLOGIES",
      description:
        "Expertise in React, Node, Express, Mongodb, PostgreSQL, ORMS, NextJS, C++, Low level programming, Cloud services, CI/CD pipelines, Docker, etc.",
      icon: <Code className="w-6 h-6" />,
      bgColor: "bg-white",
      textColor: "text-black",
      size: "col-span-2 row-span-2",
      isSpecial: true,
    },
    {
      title: "FRONTEND",
      icon: <Palette className="w-6 h-6" />,
      description:"Crafting interactive digital experiences, not just frontends",
      bgColor: "bg-[#00FF80]",
      textColor: "text-black",
      size: "col-span-1 row-span-2",
      tech: frontendTech,
    },
    {
      title: "BACKEND",
      icon: <Database className="w-6 h-6" />,
      description:"Building real life solutions with the power that backend bestows",
      bgColor: "bg-[#0080FF]",
      textColor: "text-white",
      size: "col-span-1 row-span-2",
      tech: backendTech,
    },
    {
      title: "Low Level Shi",
      icon: <Heart className="w-6 h-6" />,
      bgColor: "bg-[#FFFF00]",
      textColor: "text-black",
      size: "col-span-1 row-span-1",
    },
    {
      title: "CLOUD & DEVOPS",
      icon: <Cloud className="w-6 h-6" />,
      bgColor: "bg-[#FF8000]",
      textColor: "text-white",
      size: "col-span-1 row-span-1",
      tech: toolsTech,
    },
  ]

  const techCategories = [
    { name: "Frontend", techs: ["React", "Next.js", "TypeScript", "Vue"], color: "bg-[#00FF80]" },
    { name: "Backend", techs: ["Node.js", "Python", "PostgreSQL", "GraphQL"], color: "bg-[#0080FF]" },
    { name: "Mobile", techs: ["React Native", "Flutter", "Expo"], color: "bg-[#8000FF]" },
    { name: "Cloud", techs: ["AWS", "Docker", "Vercel", "K8s"], color: "bg-[#FF8000]" },
  ]

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-20"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-background" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Left Side - Hero Content */}
          <div className="lg:col-span-5 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <motion.h1
                  className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight uppercase tracking-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <span className="text-[#FF0080] drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">CURIOUS</span>
                  <br />
                  <span className="text-[#00FF80] drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">CREATOR</span>
                  <br />
                  <span className="text-foreground drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">OF THINGS</span>
                </motion.h1>

                <motion.p
                  className="text-lg md:text-xl text-foreground max-w-lg leading-relaxed font-bold"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  FULL-STACK DEVELOPER WHO TRANSFORMS IDEAS INTO BOLD DIGITAL EXPERIENCES. I BUILD WITH PURPOSE, DESIGN
                  WITH INTENTION, AND CODE WITH PASSION.
                </motion.p>
              </div>

              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <Button size="lg" className="neubrutalist-button group">
                  VIEW MY WORK
                  <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
                </Button>
                <Button size="lg" className="neubrutalist-button bg-[#00FF80] text-black" onClick ={()=>{
                  const url = "https://x.com/sidd190b";
                  window.open(url, "_blank", "noopener, noreferrer"); 
                }}>
                  GET IN TOUCH
                </Button>
              </motion.div>

              <motion.div
                className="flex gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                <Button className="neubrutalist-button bg-[#0080FF] text-white p-3" onClick ={()=>{
                  const url = "https://github.com/sidd190";
                  window.open(url, "_blank", "noopener, noreferrer"); 
                }}>
                  <Github className="h-5 w-5" />
                </Button>
                <Button className="neubrutalist-button bg-[#FFFF00] text-black p-3" onClick ={()=>{
                  const url = "https://www.linkedin.com/in/siddharth-bansal-968531307/";
                  window.open(url, "_blank", "noopener, noreferrer"); 
                }}>
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button className="neubrutalist-button bg-[#FF8000] text-white p-3" onClick ={()=>{
                  const url = "https://github.com/sidd190";
                  window.open(url, "_blank", "noopener, noreferrer"); 
                }}>
                  <Mail className="h-5 w-5" />
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Progressive Bar */}
          <div className="lg:col-span-1 flex justify-center">
            <div className="relative h-96 w-6 bg-muted border-4 border-black overflow-hidden">
              <div
                ref={progressBarRef}
                className="absolute bottom-0 left-0 w-full bg-[#FF0080] border-r-4 border-black"
              />
              {/* Branch indicators with neubrutalist styling */}
              <div className="absolute top-1/4 -right-4 w-8 h-8 bg-[#FF0080] border-4 border-black" />
              <div className="absolute top-1/2 -right-4 w-8 h-8 bg-[#00FF80] border-4 border-black" />
              <div className="absolute top-3/4 -right-4 w-8 h-8 bg-[#0080FF] border-4 border-black" />
            </div>
          </div>

          {/* Right Side - Bento Cards */}
          <div className="lg:col-span-6">
            <div ref={bentoCardsRef} className="grid grid-cols-2 gap-6 h-[700px] auto-rows-fr">
              {bentoCards.map((card, index) => (
                <motion.div
                  key={card.title}
                  className={`bento-card neubrutalist-card relative ${card.size} ${card.bgColor} ${card.textColor} overflow-hidden group hover:translate-x-1 hover:translate-y-1 transition-all duration-150`}
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Card fill animation */}
                  <div className="card-fill absolute inset-0 bg-black/10 origin-left scale-x-0" />

                  <div className="relative z-10 h-full flex flex-col justify-between">
                    {(
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-black/20 border-2 border-black">{card.icon}</div>
                          <h3 className="font-black text-2xl uppercase tracking-wide">{card.title}</h3>
                        </div>
                        <p className="text-lg font-bold leading-relaxed">{card.description}</p>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
