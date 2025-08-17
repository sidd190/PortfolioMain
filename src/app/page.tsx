"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import IntegratedHeroAbout from "@/components/integrated-hero-about"
import ProjectsSection from "@/components/projects-section"
import SkillsSection from "@/components/skills-section"
import ContactSection from "@/components/contact-section"
import Navigation from "@/components/navigation"
import PageTransition from "@/components/page-transition"
import ScrollIndicator from "@/components/scroll-indicator"

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger)

      document.documentElement.style.scrollBehavior = "smooth"

      // Animate left flowing lines
      const leftPaths = document.querySelectorAll(".left-flow-path")
      leftPaths.forEach((path: any, index) => {
        const pathLength = path.getTotalLength()
        path.style.strokeDasharray = pathLength
        path.style.strokeDashoffset = pathLength

        gsap.to(path, {
          strokeDashoffset: 0,
          duration: 2,
          delay: index * 0.3,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: "body",
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
            onUpdate: (self) => {
              const progress = self.progress
              path.style.strokeDashoffset = pathLength * (1 - progress)
            },
          },
        })
      })

      // Animate right flowing lines
      const rightPaths = document.querySelectorAll(".right-flow-path")
      rightPaths.forEach((path: any, index) => {
        const pathLength = path.getTotalLength()
        path.style.strokeDasharray = pathLength
        path.style.strokeDashoffset = pathLength

        gsap.to(path, {
          strokeDashoffset: 0,
          duration: 2,
          delay: index * 0.4,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: "body",
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
            onUpdate: (self) => {
              const progress = self.progress
              path.style.strokeDashoffset = pathLength * (1 - progress)
            },
          },
        })
      })

      setTimeout(() => {
        ScrollTrigger.refresh()
      }, 500)

      const buttons = document.querySelectorAll('button, a[role="button"], .neubrutalist-button')
      buttons.forEach((button) => {
        const btn = button as HTMLElement

        btn.addEventListener("mouseenter", () => {
          gsap.to(btn, {
            scale: 1.02,
            duration: 0.2,
            ease: "power2.out",
            boxShadow: "2px 2px 0px 0px rgba(0,0,0,1)",
          })
        })

        btn.addEventListener("mouseleave", () => {
          gsap.to(btn, {
            scale: 1,
            duration: 0.2,
            ease: "power2.out",
            boxShadow: "4px 4px 0px 0px rgba(0,0,0,1)",
          })
        })

        btn.addEventListener("mousemove", (e) => {
          const rect = btn.getBoundingClientRect()
          const x = e.clientX - rect.left - rect.width / 2
          const y = e.clientY - rect.top - rect.height / 2

          gsap.to(btn, {
            x: x * 0.05,
            y: y * 0.05,
            duration: 0.2,
            ease: "power2.out",
          })
        })

        btn.addEventListener("mouseleave", () => {
          gsap.to(btn, { x: 0, y: 0, duration: 0.2, ease: "power2.out" })
        })
      })

      // Add parallax effect to background elements
      gsap.utils.toArray(".parallax-element").forEach((element: any) => {
        gsap.to(element, {
          yPercent: -50,
          ease: "none",
          scrollTrigger: {
            trigger: element,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        })
      })

      console.log("[v0] Advanced GSAP animations initialized")
      console.log("[v0] SVG flowing lines initialized with organic curves")
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <PageTransition>
      <div className="relative">
        <div className="fixed inset-0 pointer-events-none z-20">
          {/* Left side flowing lines */}
          <svg
            className="absolute left-0 top-0 w-32 h-full opacity-80"
            viewBox="0 0 120 2000"
            fill="none"
            style={{ minHeight: "100vh" }}
          >
            <path
              className="left-flow-path"
              d="M20 50 Q60 200 40 350 Q20 500 50 650 Q80 800 30 950 Q10 1100 60 1250 Q90 1400 40 1550 Q20 1700 70 1850"
              stroke="#FF0080"
              strokeWidth="12"
              fill="none"
              style={{ filter: "drop-shadow(0 0 15px #FF0080)" }}
            />
            <path
              className="left-flow-path"
              d="M10 100 Q50 250 30 400 Q10 550 40 700 Q70 850 20 1000 Q5 1150 50 1300 Q80 1450 30 1600 Q10 1750 60 1900"
              stroke="#00FF80"
              strokeWidth="10"
              fill="none"
              style={{ filter: "drop-shadow(0 0 12px #00FF80)" }}
            />
            <path
              className="left-flow-path"
              d="M30 150 Q70 300 50 450 Q30 600 60 750 Q90 900 40 1050 Q20 1200 70 1350 Q100 1500 50 1650 Q30 1800 80 1950"
              stroke="#0080FF"
              strokeWidth="8"
              fill="none"
              style={{ filter: "drop-shadow(0 0 10px #0080FF)" }}
            />
          </svg>

          {/* Right side flowing lines */}
          <svg
            className="absolute right-0 top-0 w-32 h-full opacity-80"
            viewBox="0 0 120 2000"
            fill="none"
            style={{ minHeight: "100vh" }}
          >
            <path
              className="right-flow-path"
              d="M100 80 Q60 230 80 380 Q100 530 70 680 Q40 830 90 980 Q110 1130 60 1280 Q30 1430 80 1580 Q100 1730 50 1880"
              stroke="#FFFF00"
              strokeWidth="12"
              fill="none"
              style={{ filter: "drop-shadow(0 0 15px #FFFF00)" }}
            />
            <path
              className="right-flow-path"
              d="M110 130 Q70 280 90 430 Q110 580 80 730 Q50 880 100 1030 Q115 1180 70 1330 Q40 1480 90 1630 Q110 1780 60 1930"
              stroke="#FF8000"
              strokeWidth="10"
              fill="none"
              style={{ filter: "drop-shadow(0 0 12px #FF8000)" }}
            />
            <path
              className="right-flow-path"
              d="M90 180 Q50 330 70 480 Q90 630 60 780 Q30 930 80 1080 Q100 1230 50 1380 Q20 1530 70 1680 Q90 1830 40 1980"
              stroke="#FF0080"
              strokeWidth="8"
              fill="none"
              style={{ filter: "drop-shadow(0 0 10px #FF0080)" }}
            />
          </svg>
        </div>

        <div ref={containerRef} className="min-h-screen bg-background relative z-10">
          <ScrollIndicator />
          <Navigation />

          <main className="relative">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
              <div className="relative">
                <IntegratedHeroAbout />
              </div>
              <div className="relative">
                <ProjectsSection />
              </div>
              <div className="relative">
                <SkillsSection />
              </div>
              <div className="relative">
                <ContactSection />
              </div>
            </motion.div>
          </main>
        </div>
      </div>
    </PageTransition>
  )
}
