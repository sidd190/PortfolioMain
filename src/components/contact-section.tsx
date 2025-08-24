"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Mail,
  MessageCircle,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Send,
  Clock,
  CheckCircle,
  ArrowRight,
} from "lucide-react"

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: "", email: "", subject: "", message: "" })

    // Reset success state after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      description: "Drop me a line anytime",
      value: "sidd190bansal@gmail.com",
      action: "mailto:sidd190bansal@gmail.com",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: MessageCircle,
      title: "Let's Chat",
      description: "Schedule a call",
      value: "Get instant answers",
      action: "https://x.com/Sidd190b",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: MapPin,
      title: "Location",
      description: "Based in",
      value: "New Delhi, India",
      action: "https://en.wikipedia.org/wiki/New_Delhi",
      color: "from-purple-500 to-pink-500",
    },
  ]

  const socialLinks = [
    { icon: Github, href: "https://github.com/sidd190", label: "GitHub", color: "#333" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/siddharth-bansal-968531307/", label: "LinkedIn", color: "#0077B5" },
    { icon: Twitter, href: "https://x.com/Sidd190b", label: "X", color: "#1DA1F2" },
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

  return (
    <section ref={sectionRef} id="contact" className="py-20 lg:py-32 bg-background relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-16"
        >
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-foreground neubrutalist-text">
              LET'S CONNECT
            </h2>
            <p className="text-xl font-bold text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ready to build something AMAZING together? Drop me a message!
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex justify-center">
            <div className="neubrutalist-button bg-[#00FF80] text-black px-6 py-3 font-black text-lg">
              🟢 AVAILABLE FOR NEW PROJECTS
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="grid md:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                variants={cardVariants}
                whileHover={{ scale: 1.05, rotate: 1 }}
                className="group cursor-pointer"
              >
                <div className="neubrutalist-card bg-card p-6 text-center">
                  <div className={`inline-flex p-4 rounded-none bg-[#FF0080] mb-4`}>
                    <method.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-black text-xl text-foreground mb-2 group-hover:text-[#FF0080] transition-colors">
                    {method.title}
                  </h3>
                  <p className="text-sm font-bold text-muted-foreground mb-3">{method.description}</p>
                  <a
                    href={method.action}
                    className="text-[#0080FF] hover:text-[#FF0080] font-black text-lg transition-colors"
                  >
                    {method.value}
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Main content grid */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-3xl font-black text-foreground neubrutalist-text">SEND MESSAGE</h3>
                <p className="font-bold text-muted-foreground">Fill this out and I'll get back to you FAST!</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-black text-foreground uppercase">
                      NAME
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your name"
                      required
                      className="neubrutalist-input bg-white border-4 border-black focus:border-[#FF0080] font-bold"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-black text-foreground uppercase">
                      EMAIL
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      required
                      className="neubrutalist-input bg-white border-4 border-black focus:border-[#FF0080] font-bold"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-black text-foreground uppercase">
                    SUBJECT
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What's this about?"
                    required
                    className="neubrutalist-input bg-white border-4 border-black focus:border-[#FF0080] font-bold"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-black text-foreground uppercase">
                    MESSAGE
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project..."
                    rows={5}
                    required
                    className="neubrutalist-input bg-white border-4 border-black focus:border-[#FF0080] font-bold resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting || isSubmitted}
                  className="neubrutalist-button w-full bg-[#00FF80] hover:bg-[#FF0080] text-black hover:text-white font-black text-lg py-4"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                      SENDING...
                    </div>
                  ) : isSubmitted ? (
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      MESSAGE SENT!
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Send className="w-4 h-4" />
                      SEND MESSAGE
                    </div>
                  )}
                </Button>
              </form>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-8">
              {/* Response time */}
              <div className="neubrutalist-card bg-[#FFFF00] p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-black rounded-none">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-black text-xl text-black mb-2">QUICK RESPONSE</h4>
                    <p className="text-black font-bold text-sm leading-relaxed">
                      I respond to ALL inquiries within 24 hours. Urgent? Just say so!
                    </p>
                  </div>
                </div>
              </div>

              {/* Project types */}
              <div className="space-y-4">
                <h4 className="font-black text-xl text-foreground neubrutalist-text">WHAT I BUILD</h4>
                <div className="space-y-3">
                  {[
                    "🚀 Full-stack web apps",
                    "📱 Reverse Engineering",
                    "🎨 Systems design",
                    "🚀 Low level programming",
                    "⚡ API development",
                    "🔧 Performance optimization",
                    "💡 Technical consulting",
                    "🛠️ Custom software solutions",
                  ].map((service, index) => (
                    <motion.div
                      key={service}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="neubrutalist-button bg-white text-black px-4 py-2 font-bold text-sm inline-block mr-2 mb-2"
                    >
                      {service}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Social links */}
              <div className="space-y-4">
                <h4 className="font-black text-xl text-foreground neubrutalist-text">SOCIAL LINKS</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className="neubrutalist-button p-4 bg-[#0080FF] hover:bg-[#FF0080] transition-colors group"
                      aria-label={social.label}
                    >
                      <social.icon className="w-6 h-6 text-white" />
                    </motion.a>
                  ))}
                </div>
              </div>

            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
