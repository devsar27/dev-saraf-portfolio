"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { 
  Sparkles, 
  Terminal, 
  Cpu, 
  Code2, 
  Trophy, 
  GraduationCap, 
  Heart, 
  Layers, 
  CheckCircle,
  ArrowRight
} from "lucide-react"
import { Button } from "./ui/Button"
import { useNavigate } from "react-router-dom"

// Focus Areas Data
const focusAreas = [
  {
    title: "AI Agents & Automation",
    description: "Building autonomous workflows, intelligent AI agents, and custom backend automation pipelines using Python.",
    icon: Cpu,
    color: "from-blue-500 to-indigo-500",
    glow: "shadow-blue-500/10",
  },
  {
    title: "Full-Stack Development",
    description: "Creating responsive, visually striking interfaces coupled with scalable servers and optimized databases.",
    icon: Code2,
    color: "from-purple-500 to-pink-500",
    glow: "shadow-purple-500/10",
  },
  {
    title: "Competitive Programming",
    description: "Solving complex algorithmic problems. Gained a 4-star rating on CodeChef through consistent performance.",
    icon: Trophy,
    color: "from-yellow-500 to-orange-500",
    glow: "shadow-yellow-500/10",
  },
  {
    title: "Software Engineering",
    description: "Applying OOP concepts, designing robust REST APIs, and utilizing Git version control workflows.",
    icon: Terminal,
    color: "from-green-500 to-emerald-500",
    glow: "shadow-green-500/10",
  }
]

// Philosophy / Core Values Data
const coreValues = [
  {
    title: "Continuous Learning",
    description: "Technology moves rapidly. I stay ahead of the curve by acquiring cloud and framework certifications from AWS, Google Cloud, Meta, and MongoDB.",
    icon: GraduationCap,
  },
  {
    title: "Performance & UX",
    description: "Aesthetics are critical, but code must run smoothly. I craft responsive layouts, smooth scroll environments, and optimized state handling.",
    icon: Layers,
  },
  {
    title: "Problem Solving",
    description: "Approaching challenges analytically. Whether debugging a complex race condition or optimizing a recursive SQL query, I love finding elegant solutions.",
    icon: CheckCircle,
  }
]

const AboutPage = () => {
  const navigate = useNavigate()
  const [headerRef, headerInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [bioRef, bioInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [focusRef, focusInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [valueRef, valueInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  
  const [hoveredCard, setHoveredCard] = useState(null)

  return (
    <section className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-1/3 w-80 h-80 bg-pink-500/5 rounded-full blur-3xl animate-pulse" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Page Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-white/5 backdrop-blur-xl rounded-full border border-white/10"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-blue-300 font-medium text-sm">Get to Know Me</span>
          </motion.div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h1>

          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-light">
            An inside look into my story, my technical focus areas, and the philosophies driving my development journey.
          </p>
        </motion.div>

        {/* Narrative & Stats Badge Card Section */}
        <div ref={bioRef} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={bioInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6 text-gray-300"
          >
            <h2 className="text-3xl font-bold text-white">
              Who is <span className="text-blue-400">Dev Saraf</span>?
            </h2>
            <p className="text-lg leading-relaxed font-light">
              I am an aspiring AI & Software Developer based in India, driven by a deep curiosity for how intelligence can be embedded into software. Over the past few years, I have worked with languages like Python and JavaScript to engineer clean APIs, automate manual workflows, and build interactive applications.
            </p>
            <p className="text-lg leading-relaxed font-light">
              My journey started with competitive programming, where I discovered the thrill of optimizing code for maximum performance and minimum execution time. This analytical foundation led me directly into full-stack development and the exciting field of AI Agents—creating autonomous tools that think, plan, and act.
            </p>
            <p className="text-lg leading-relaxed font-light">
              I love turning complex constraints into simple, maintainable software systems. When I'm not writing code or building agents, you will find me participating in competitive coding rounds, reading up on new cloud architectures, or exploring human-centered UX design.
            </p>
            
            <div className="pt-4 flex flex-wrap gap-4">
              <Button
                variant="outline"
                className="border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 text-white rounded-xl py-3 px-6 text-base shadow-lg"
                onClick={() => navigate("/projects")}
              >
                Explore Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl py-3 px-6 text-base shadow-lg hover:shadow-blue-500/20"
                onClick={() => navigate("/contact")}
              >
                Let's Collaborate
              </Button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={bioInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <div className="relative p-8 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Terminal className="text-purple-400 w-6 h-6" /> Quick Stats
              </h3>
              
              <div className="space-y-6">
                <div className="flex justify-between items-center pb-4 border-b border-white/10">
                  <span className="text-gray-400 font-medium">Main Focus</span>
                  <span className="text-blue-300 font-bold text-right">AI & Full-Stack Automation</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-white/10">
                  <span className="text-gray-400 font-medium">Core Tech</span>
                  <span className="text-purple-300 font-bold text-right">Python, React, Flask, SQL</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-white/10">
                  <span className="text-gray-400 font-medium">CodeChef Rating</span>
                  <span className="text-yellow-400 font-bold text-right">4-Star Rated (Top 5%)</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-white/10">
                  <span className="text-gray-400 font-medium">Key Certs</span>
                  <span className="text-green-400 font-bold text-right">AWS Dev, Google Cloud, Meta</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 font-medium">Location Availability</span>
                  <span className="text-pink-300 font-bold text-right">Remote / Hybrid</span>
                </div>
              </div>

              {/* Decorative Corner Glow */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-xl pointer-events-none" />
            </div>
          </motion.div>
        </div>

        {/* Focus Areas Grid */}
        <div ref={focusRef} className="mb-24">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Where I Spend My <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Time & Energy</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {focusAreas.map((area, index) => {
              const IconComponent = area.icon
              const isHovered = hoveredCard === index
              
              return (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={focusInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className="group relative"
                >
                  <div className={`p-8 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:shadow-2xl ${area.glow}`}>
                    <div className="flex items-center gap-4 mb-4">
                      <motion.div 
                        className={`p-3 bg-gradient-to-r ${area.color} rounded-xl shadow-lg`}
                        animate={{ rotate: isHovered ? [0, -10, 10, 0] : 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <IconComponent className="w-6 h-6 text-white" />
                      </motion.div>
                      <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                        {area.title}
                      </h3>
                    </div>
                    
                    <p className="text-gray-300 leading-relaxed font-light">
                      {area.description}
                    </p>

                    {/* Gradient Overlay Glow */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-r ${area.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500 pointer-events-none`}
                    />
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Philosophy / Core Values Section */}
        <div ref={valueRef} className="rounded-3xl p-8 md:p-12 bg-white/5 backdrop-blur-xl border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
          
          <h2 className="text-3xl font-bold text-white mb-12 text-center flex items-center justify-center gap-3">
            <Heart className="text-pink-400 fill-pink-400 animate-pulse w-7 h-7" /> Coding Philosophy & Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((value, index) => {
              const IconComponent = value.icon
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={valueInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="space-y-4"
                >
                  <div className="inline-flex p-3 bg-white/10 rounded-xl">
                    <IconComponent className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {value.title}
                  </h3>
                  <p className="text-gray-300 font-light leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}

export default AboutPage
