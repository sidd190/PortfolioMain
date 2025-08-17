"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export default function ScrollIndicator() {
  const progressRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger)
    }

    // Show/hide indicator based on scroll position
    const showTrigger = ScrollTrigger.create({
      start: "top -100",
      end: "max",
      onUpdate: (self) => {
        setIsVisible(self.progress > 0.05)
      },
    })

    // Animate progress bar
    const progressTrigger = ScrollTrigger.create({
      trigger: document.body,
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => {
        if (progressRef.current) {
          gsap.to(progressRef.current, {
            scaleX: self.progress,
            duration: 0.1,
            ease: "none",
          })
        }
      },
    })

    return () => {
      showTrigger.kill()
      progressTrigger.kill()
    }
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : 20,
      }}
      className="fixed top-0 left-0 right-0 z-40 h-1 bg-muted/20"
    >
      <div ref={progressRef} className="h-full bg-gradient-to-r from-primary to-secondary origin-left scale-x-0" />
    </motion.div>
  )
}
