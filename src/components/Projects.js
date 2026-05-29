"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Github, ExternalLink, Sparkles, Code2, Star, Zap, Eye, ArrowRight } from "lucide-react"

// Only 2 high-quality projects
const projectsData = [
  {
    id: 1,
    name: "LinkedIn Auto Agent: AI-Powered Browser Automation Tool",
    tagline: "The AI agent that manages your LinkedIn networking automatically",
    description:
      "LinkedIn Auto Agent is a Python automation toolkit that combines Playwright (with stealth) and LangChain/OpenAI to automate LinkedIn outreach - sending and withdrawing connection requests and batch-personalized messages from CSV/Excel. It uses pandas/openpyxl for data handling and python-dotenv for config, producing LLM-generated message copy, stealthy browser flows, and exportable activity logs to streamline founder outreach and scale personalized networking.",
    image: "/LinkedIn.jpg",
    techStack: ["Python", "Playwright", "LangChain", "OpenAI", "Pandas", "Openpyxl", "Python-dotenv"],
    features: ["Batch messaging:", "Stealth browser flows", "LLM-generated message copy", "Exportable activity logs"],
    role: "Software Engineer",
  },
  {
    id: 2,
    name: "IntelliCode: Automatic Language Detection, Code Runner, Complexity Analysis ",
    tagline: "The AI code editor that thinks with you",
    description:
      "IntelliCode is an AI-powered code editor that helps you write better code faster. It uses Groq API for AI-powered features like language detection, code generation, and complexity analysis. It also uses Code Mirror for a seamless coding experience.",
    image: "/IntelliCode.jpg",
    techStack: ["Python", "Flask", "Groq API", "Code Mirror"],
    features: ["Supporting 4+ Languages", "Automatic Code Detection", "Complexity Analysis"],
    liveDemo: "https://intellicompiler.onrender.com",
    role: "Software Engineer",
  },
  {
    id: 3,
    name: "NeuroTrait: AI OS Assistant with Voice Commands & Smart Automation ",
    tagline: "Redefining interaction: the AI OS assistant that listens, learns, and acts.",
    description:
      "NeuroTrait is an AI-powered OS assistant that helps you manage your computer and automate tasks using natural language voice commands. It uses Groq API for natural language understanding and response generation, along with a custom Python backend to interact with your operating system, file system, and applications.",
    image: "/NeuroTrait.jpg",
    techStack: ["Python", "Groq API", "OS Automation"],
    features: ["Voice-activated commands", "File and folder management", "Application control", "Smart automation"],
    liveDemo: "https://github.com/devsar27/NeuroTroit-AI-OS-Assistant",
    role: "Software Engineer",
  },
]

// Tech stack with unique colors and icons
const techStackData = {
  "Python": { color: "from-blue-400 to-blue-600", icon: "⚛️" },
  "Playwright": { color: "from-gray-400 to-gray-600", icon: "▲" },
  "LangChain": { color: "from-green-400 to-green-600", icon: "🟢" },
  "OpenAI": { color: "from-blue-500 to-blue-700", icon: "📘" },
  "Pandas": { color: "from-green-500 to-green-700", icon: "🍃" },
  "Openpyxl": { color: "from-yellow-400 to-yellow-600", icon: "🚀" },
  "Python-dotenv": { color: "from-indigo-400 to-indigo-600", icon: "🐘" },
  "Groq API": { color: "from-green-500 to-green-700", icon: "🍃" },
  "Code Mirror": { color: "from-yellow-400 to-yellow-600", icon: "🚀" },
  "Flask": { color: "from-blue-500 to-blue-700", icon: "📘" },
  "OS Automation": { color: "from-blue-500 to-blue-700", icon: "📘" },
}

const ProjectCard = ({ project, index }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [activeTab, setActiveTab] = useState("overview")

  const tabs = [
    { id: "overview", label: "Overview", icon: Eye },
    { id: "features", label: "Features", icon: Star },
    { id: "tech", label: "Tech Stack", icon: Code2 },
  ]

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.3 }}
      className="mb-32"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Project Image Section */}
        <motion.div
          className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <div className="relative group">
            {/* Main Image Container */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-4">
              <motion.img
                src={project.image}
                alt={project.name}
                className="w-full h-80 object-cover rounded-2xl shadow-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              />
            </div>

            {/* Decorative Elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-xl"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            />
            <motion.div
              className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-pink-500/20 to-yellow-500/20 rounded-full blur-xl"
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            />
          </div>
        </motion.div>

        {/* Project Content Section */}
        <motion.div
          className={`space-y-8 ${index % 2 === 1 ? "lg:order-1" : ""}`}
          initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Project Header */}
          <div className="space-y-4">
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-white leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
            >
              {project.name}
            </motion.h2>

            <motion.p
              className="text-xl text-blue-300 font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
            >
              {project.tagline}
            </motion.p>
          </div>

          {/* Tab Navigation */}
          <motion.div
            className="flex gap-1 bg-white/5 backdrop-blur-sm rounded-2xl p-1"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
          >
            {tabs.map((tab) => {
              const TabIcon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-medium transition-all duration-300 ${activeTab === tab.id
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                    }`}
                >
                  <TabIcon className="w-4 h-4" />
                  {tab.label}
                </button>
              )
            })}
          </motion.div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              {activeTab === "overview" && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                  <p className="text-gray-300 leading-relaxed text-lg">{project.description}</p>
                </motion.div>
              )}

              {activeTab === "features" && (
                <div className="grid grid-cols-2 gap-4">
                  {project.features.map((feature, i) => (
                    <motion.div
                      key={i}
                      className="flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/10"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <Zap className="w-5 h-5 text-yellow-400" />
                      <span className="text-white font-medium">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              )}

              {activeTab === "tech" && (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {project.techStack.map((tech, i) => {
                    const techData = techStackData[tech] || { color: "from-gray-400 to-gray-600", icon: "⚙️" }
                    return (
                      <motion.div
                        key={i}
                        className={`flex items-center gap-3 p-3 bg-gradient-to-r ${techData.color} rounded-xl text-white font-medium shadow-lg`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <span className="text-lg">{techData.icon}</span>
                        <span className="text-sm">{tech}</span>
                      </motion.div>
                    )
                  })}
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Action Buttons */}
          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8 }}
          >
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl text-white font-medium transition-all duration-300 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Github className="w-5 h-5" />
              View Code
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.a>

            <motion.a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-xl text-white font-medium transition-all duration-300 group shadow-lg"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <ExternalLink className="w-5 h-5" />
              Live Demo
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}

const ProjectsPage = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-flex items-center gap-2 mb-6 px-6 py-3 bg-white/5 backdrop-blur-xl rounded-full border border-white/10"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-5 h-5 text-blue-400" />
            <span className="text-blue-300 font-medium">Featured Work</span>
          </motion.div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              My Projects
            </span>
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Carefully crafted digital experiences that solve real-world problems with clean code and beautiful design
          </p>
        </motion.div>

        {/* Projects */}
        <div className="space-y-32">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsPage
