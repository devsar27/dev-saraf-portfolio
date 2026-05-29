"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Briefcase, Calendar, MapPin, Code2, Building,Sparkles} from "lucide-react"

// Experience data
const experienceData = [
  {
    id: 1,
    position: "Web Development Intern",
    company: "Prodigy InfoTech",
    year: "2024",
    location: "Remote",
    type: "Internship",
    description:
      "Developed responsive web applications using modern frontend technologies and collaborated with senior developers on multiple client projects. Gained hands-on experience in full-stack development, API integration, and agile development methodologies.",
    techStack: ["React.js", "JavaScript", "HTML5", "CSS3", "Node.js", "Git"],
    color: "from-blue-500 to-cyan-500",
    bgColor: "from-blue-500/10 to-cyan-500/10",
  },
  {
    id: 2,
    position: "Frontend Developer",
    company: "TechStart Solutions",
    year: "2023",
    location: "Hybrid",
    type: "Part-time",
    description:
      "Built interactive user interfaces for e-commerce platforms and implemented responsive design principles. Worked closely with UX/UI designers to translate mockups into functional web applications.",
    techStack: ["React.js", "TypeScript", "Tailwind CSS", "Next.js", "Figma", "Redux"],
    color: "from-purple-500 to-pink-500",
    bgColor: "from-purple-500/10 to-pink-500/10",
  }
]

// Tech stack colors
const techColors = {
  "React.js": "bg-blue-500/20 text-blue-400 border-blue-500/30",
  JavaScript: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  TypeScript: "bg-blue-600/20 text-blue-300 border-blue-600/30",
  HTML5: "bg-orange-500/20 text-orange-400 border-orange-500/30",
  CSS3: "bg-blue-400/20 text-blue-300 border-blue-400/30",
  "Node.js": "bg-green-500/20 text-green-400 border-green-500/30",
  "Express.js": "bg-gray-500/20 text-gray-300 border-gray-500/30",
  MongoDB: "bg-green-600/20 text-green-300 border-green-600/30",
  "Next.js": "bg-gray-600/20 text-gray-200 border-gray-600/30",
  "Tailwind CSS": "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
  Redux: "bg-purple-500/20 text-purple-400 border-purple-500/30",
  Git: "bg-red-500/20 text-red-400 border-red-500/30",
  JWT: "bg-indigo-500/20 text-indigo-400 border-indigo-500/30",
  Stripe: "bg-violet-500/20 text-violet-400 border-violet-500/30",
  Figma: "bg-pink-500/20 text-pink-400 border-pink-500/30",
}

const ExperienceCard = ({ experience, index }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })
  const [activeTab, setActiveTab] = useState("overview")

  const tabs = [
    { id: "overview", label: "Overview", icon: Briefcase },
    { id: "tech", label: "Tech Stack", icon: Code2 },
  ]

  const handleTabClick = (tabId) => {
    console.log("Tab clicked:", tabId) // Debug log
    setActiveTab(tabId)
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="mb-6"
    >
      <div
        className={`relative bg-gradient-to-br ${experience.bgColor} backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300 hover:shadow-xl group`}
      >
        {/* Main Card Content */}
        <div className="p-6">
          {/* Header Section */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-4">
            {/* Left Side - Position & Company */}
            <div className="flex items-start gap-3">
              <div className={`p-2 bg-gradient-to-r ${experience.color} rounded-xl shadow-lg flex-shrink-0`}>
                <Building className="w-6 h-6 text-white" />
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-1 group-hover:text-blue-300 transition-colors duration-300">
                  {experience.position}
                </h3>
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <h4 className="text-lg text-blue-300 font-semibold">{experience.company}</h4>
                  <span
                    className={`px-2 py-1 bg-gradient-to-r ${experience.color} bg-opacity-20 rounded-full text-xs font-medium text-white`}
                  >
                    {experience.type}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Side - Date & Location */}
            <div className="flex flex-col sm:flex-row gap-2 lg:text-right">
              <div className="flex items-center gap-2 px-3 py-1 bg-white/10 rounded-lg backdrop-blur-sm">
                <Calendar className="w-4 h-4 text-blue-400" />
                <span className="text-white font-medium text-sm">{experience.year}</span>
              </div>

              <div className="flex items-center gap-2 px-3 py-1 bg-white/10 rounded-lg backdrop-blur-sm">
                <MapPin className="w-4 h-4 text-green-400" />
                <span className="text-white font-medium text-sm">{experience.location}</span>
              </div>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="flex gap-1 bg-white/5 backdrop-blur-sm rounded-xl p-1 mb-4">
            {tabs.map((tab) => {
              const TabIcon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabClick(tab.id)}
                  className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? `bg-gradient-to-r ${experience.color} text-white shadow-lg`
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <TabIcon className="w-4 h-4" />
                  {tab.label}
                </button>
              )
            })}
          </div>

          {/* Tab Content */}
          <div className="min-h-[80px]">
            {activeTab === "overview" && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                <p className="text-gray-300 leading-relaxed text-base">{experience.description}</p>
              </motion.div>
            )}

            {activeTab === "tech" && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {experience.techStack.map((tech, i) => (
                    <div
                      key={i}
                      className={`px-2 py-1 rounded-md text-xs font-medium border transition-all duration-300 hover:scale-105 text-center ${
                        techColors[tech] || "bg-gray-500/20 text-gray-400 border-gray-500/30"
                      }`}
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {/* Hover Effect */}
        <div
          className={`absolute inset-0 bg-gradient-to-r ${experience.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}
        />
      </div>
    </motion.div>
  )
}

const ExperiencePage = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-green-500/5 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.div
            className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-white/5 backdrop-blur-xl rounded-full border border-white/10"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-blue-300 font-medium text-sm">Professional Journey</span>
          </motion.div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Work Experience
            </span>
          </h1>

          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            My professional journey through various roles, showcasing growth and contributions
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="space-y-6">
          {experienceData.map((experience, index) => (
            <ExperienceCard key={experience.id} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExperiencePage
