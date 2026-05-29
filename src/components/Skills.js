"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Code2, Layers, Settings, Brain, ChevronRight, Sparkles, Zap, Star} from "lucide-react"

// Skill logos mapping
const skillLogos = {
  Python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "C++": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  HTML5: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  CSS3: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  SQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  Flask: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
  "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
  Bootstrap: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  "Git & GitHub": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  "VS Code": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  Figma: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  Postman: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
}

const skillsData = {
  languages: {
    title: "Languages",
    icon: Code2,
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "Python", level: 90 },
      { name: "SQL", level: 90 },
      { name: "HTML5", level: 98 },
      { name: "CSS3", level: 95 },
    ],
  },
  frameworks: {
    title: "Frameworks & Libraries",
    icon: Layers,
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "Flask", level: 80 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Bootstrap", level: 88 },
    ],
  },
  tools: {
    title: "Tools & Software",
    icon: Settings,
    color: "from-green-500 to-emerald-500",
    skills: [
      { name: "Git & GitHub", level: 80 },
      { name: "VS Code", level: 98 },
      { name: "Figma", level: 85 },
      { name: "Postman", level: 70 },
    ],
  },
  concepts: {
    title: "Concepts & Methodologies",
    icon: Brain,
    color: "from-orange-500 to-red-500",
    skills: [
      { name: "Data Structures", level: 75 },
      { name: "Algorithms", level: 70 },
      { name: "OOP", level: 85 },
      { name: "REST APIs", level: 80 },
    ],
  },
}

const SkillCard = ({ skill, index, categoryColor }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [animatedLevel, setAnimatedLevel] = useState(0)
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 })

  useEffect(() => {
    if (inView) {     
      const timer = setTimeout(() => {
        setAnimatedLevel(skill.level)
      }, index * 100)
      return () => clearTimeout(timer)
    }
  }, [inView, skill.level, index])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10">
        {/* Skill Logo and Name */}
        <div className="flex items-center mb-4">
          {skillLogos[skill.name] && (
            <div className="w-12 h-12 mr-4 p-2 bg-white/10 rounded-xl flex items-center justify-center">
              <img
                src={skillLogos[skill.name] || "/placeholder.svg"}
                alt={`${skill.name} logo`}
                className="w-8 h-8 object-contain"
                onError={(e) => {
                  e.target.style.display = "none"
                }}
              />
            </div>
          )}
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors duration-300">
              {skill.name}
            </h3>
            <motion.span
              className="text-sm font-bold text-blue-400"
              animate={{ scale: isHovered ? 1.1 : 1 }}
              transition={{ duration: 0.2 }}
            >
              {animatedLevel}%
            </motion.span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="relative">
          <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
            <motion.div
              className={`h-full bg-gradient-to-r ${categoryColor} rounded-full relative`}
              initial={{ width: 0 }}
              animate={{ width: `${animatedLevel}%` }}
              transition={{ duration: 1.5, ease: "easeOut", delay: index * 0.1 }}
            >
              <motion.div
                className="absolute inset-0 bg-white/20 rounded-full"
                animate={{ x: isHovered ? "100%" : "-100%" }}
                transition={{ duration: 0.8, repeat: isHovered ? Number.POSITIVE_INFINITY : 0 }}
              />
            </motion.div>
          </div>
        </div>

        {/* Hover Effect Glow */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-r ${categoryColor} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}
          animate={{ scale: isHovered ? 1.02 : 1 }}
          transition={{ duration: 0.3 }}
        />

        {/* Skill Level Indicator */}
        <motion.div
          className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          animate={{ rotate: isHovered ? 360 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <Star className="w-3 h-3 text-white" />
        </motion.div>
      </div>
    </motion.div>
  )
}

const CategorySection = ({ category, data, index }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const IconComponent = data.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="mb-16"
    >
      {/* Category Header */}
      <div className="flex items-center mb-8 group">
        <motion.div
          className={`p-4 bg-gradient-to-r ${data.color} rounded-2xl mr-6 shadow-lg`}
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.3 }}
        >
          <IconComponent className="w-8 h-8 text-white" />
        </motion.div>

        <div className="flex-1">
          <motion.h3
            className="text-3xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300"
            whileHover={{ x: 10 }}
            transition={{ duration: 0.3 }}
          >
            {data.title}
          </motion.h3>
          <motion.div
            className={`h-1 bg-gradient-to-r ${data.color} rounded-full`}
            initial={{ width: 0 }}
            animate={inView ? { width: "100%" } : {}}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </div>

        <motion.div
          className="ml-4 p-2 bg-white/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          whileHover={{ scale: 1.2 }}
        >
          <ChevronRight className="w-6 h-6 text-blue-400" />
        </motion.div>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.skills.map((skill, skillIndex) => (
          <SkillCard key={skill.name} skill={skill} index={skillIndex} categoryColor={data.color} />
        ))}
      </div>
    </motion.div>
  )
}

const SkillsPage = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-green-500/10 rounded-full blur-3xl animate-pulse delay-2000" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-white/5 backdrop-blur-xl rounded-full border border-white/10"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Sparkles className="w-6 h-6 text-blue-400" />
            <span className="text-blue-300 font-medium">My Expertise</span>
            <Zap className="w-6 h-6 text-purple-400" />
          </motion.div>

          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-black mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Technical
            </span>
            <br />
            <span className="text-white">Skills</span>
          </motion.h1>

          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            A comprehensive showcase of my technical expertise across various domains of software development, from
            programming languages to cutting-edge frameworks and methodologies.
          </motion.p>
        </motion.div>

        {/* Skills Categories */}
        <div className="space-y-16">
          {Object.entries(skillsData).map(([category, data], index) => (
            <CategorySection key={category} category={category} data={data} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
         
        </motion.div>
      </div>
    </section>
  )
}

export default SkillsPage
