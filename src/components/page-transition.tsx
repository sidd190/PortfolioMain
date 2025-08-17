"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { gsap } from "gsap"

interface PageTransitionProps {
  children: React.ReactNode
}

export default function PageTransition({ children }: PageTransitionProps) {
  const overlayRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Page load animation
    const tl = gsap.timeline()

    tl.set(overlayRef.current, { scaleY: 1 }).to(overlayRef.current, {
      scaleY: 0,
      duration: 1,
      ease: "power2.inOut",
      transformOrigin: "top",
    })

    return () => {
      tl.kill()
    }
  }, [])

  return (
    <div className="relative">
      {/* Page transition overlay */}
      <div
        ref={overlayRef}
        className="fixed inset-0 z-50 bg-gradient-to-b from-primary to-secondary pointer-events-none"
        style={{ transformOrigin: "top" }}
      />

      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
