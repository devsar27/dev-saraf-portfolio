"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import {
  Trophy,
  Award,
  Star,
  Target,
  Code2,
  BookOpen,
  ExternalLink,
  CheckCircle,
  Crown,
  Zap,
  Globe,
  Shield,
} from "lucide-react"

// Achievements data
const achievementsData = [
  {
    id: 1,
    title: "CodeChef 4-Star Rating",
    description: "Achieved 4-star rating on CodeChef with consistent performance in competitive programming contests.",
    icon: Star,
    category: "Competitive Programming",
    date: "2024",
    color: "from-yellow-400 to-orange-500",
    bgColor: "from-yellow-500/10 to-orange-500/10",
    rank: "Top 5%",
  }
]

// Certifications data (removed dates and credential IDs)
const certificationsData = [
  {
    id: 1,
    title: "AWS Certified Developer",
    issuer: "Amazon Web Services",
    description:
      "Comprehensive certification covering AWS services, deployment, and cloud architecture best practices.",
    icon: Shield,
    color: "from-orange-400 to-red-500",
    bgColor: "from-orange-500/10 to-red-500/10",
    verifyLink: "https://aws.amazon.com/verification",
  },
  {
    id: 2,
    title: "React Developer Certification",
    issuer: "Meta (Facebook)",
    description:
      "Advanced React development certification covering hooks, context, performance optimization, and testing.",
    icon: Code2,
    color: "from-blue-400 to-cyan-500",
    bgColor: "from-blue-500/10 to-cyan-500/10",
    verifyLink: "https://meta.com/verification",
  },
  {
    id: 3,
    title: "Full-Stack Web Development",
    issuer: "freeCodeCamp",
    description:
      "Comprehensive full-stack development certification covering frontend, backend, and database technologies.",
    icon: Globe,
    color: "from-green-400 to-emerald-500",
    bgColor: "from-green-500/10 to-emerald-500/10",
    verifyLink: "https://freecodecamp.org/verification",
  },
  {
    id: 4,
    title: "JavaScript Algorithms & Data Structures",
    issuer: "freeCodeCamp",
    description:
      "Advanced JavaScript certification focusing on algorithms, data structures, and problem-solving techniques.",
    icon: Zap,
    color: "from-yellow-400 to-orange-500",
    bgColor: "from-yellow-500/10 to-orange-500/10",
    verifyLink: "https://freecodecamp.org/verification",
  },
  {
    id: 5,
    title: "MongoDB Developer Certification",
    issuer: "MongoDB University",
    description: "Database design, aggregation pipelines, indexing strategies, and MongoDB best practices.",
    icon: BookOpen,
    color: "from-green-500 to-teal-500",
    bgColor: "from-green-600/10 to-teal-500/10",
    verifyLink: "https://university.mongodb.com/verification",
  },
  {
    id: 6,
    title: "Google Cloud Associate",
    issuer: "Google Cloud",
    description: "Cloud computing fundamentals, Google Cloud services, and cloud architecture principles.",
    icon: Target,
    color: "from-blue-500 to-indigo-500",
    bgColor: "from-blue-600/10 to-indigo-500/10",
    verifyLink: "https://cloud.google.com/verification",
  },
]

const AchievementCard = ({ achievement, index }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 })
  const IconComponent = achievement.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative"
    >
      <div
        className={`relative p-6 bg-gradient-to-br ${achievement.bgColor} backdrop-blur-xl rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:shadow-2xl overflow-hidden`}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -translate-y-16 translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full translate-y-12 -translate-x-12"></div>
        </div>

        {/* Header */}
        <div className="relative flex items-start justify-between mb-4">
          <div className={`p-3 bg-gradient-to-r ${achievement.color} rounded-xl shadow-lg`}>
            <IconComponent className="w-6 h-6 text-white" />
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-400">{achievement.date}</div>
            <div className={`text-sm font-bold bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent`}>
              {achievement.rank}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="relative space-y-3">
          <div className="flex items-center gap-2">
            <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
              {achievement.title}
            </h3>
          </div>

          <div className={`inline-block px-3 py-1 bg-gradient-to-r ${achievement.color} bg-opacity-20 rounded-full`}>
            <span className="text-sm font-medium text-gray-300">{achievement.category}</span>
          </div>

          <p className="text-gray-300 text-sm leading-relaxed">{achievement.description}</p>
        </div>

        {/* Hover Effect */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-r ${achievement.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}
        />
      </div>
    </motion.div>
  )
}

const CertificationCard = ({ certification, index }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 })
  const IconComponent = certification.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative"
    >
      <div
        className={`relative p-6 bg-gradient-to-br ${certification.bgColor} backdrop-blur-xl rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:shadow-2xl overflow-hidden`}
      >
        {/* Verification Badge */}
        <div className="absolute top-4 right-4">
          <div className="flex items-center gap-1 bg-green-500/20 border border-green-500/30 rounded-full px-2 py-1">
            <CheckCircle className="w-3 h-3 text-green-400" />
            <span className="text-xs text-green-300 font-medium">Verified</span>
          </div>
        </div>

        {/* Header */}
        <div className="relative flex items-start gap-4 mb-4">
          <div className={`p-3 bg-gradient-to-r ${certification.color} rounded-xl shadow-lg`}>
            <IconComponent className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300 mb-1">
              {certification.title}
            </h3>
            <p className="text-blue-300 font-medium text-sm">{certification.issuer}</p>
          </div>
        </div>

        {/* Content */}
        <div className="relative space-y-4">
          <p className="text-gray-300 text-sm leading-relaxed">{certification.description}</p>

          {/* Verify Button */}
          <motion.a
            href={certification.verifyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white text-sm font-medium transition-all duration-300 group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <ExternalLink className="w-4 h-4" />
            Verify Certificate
          </motion.a>
        </div>

        {/* Hover Effect */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-r ${certification.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}
        />
      </div>
    </motion.div>
  )
}

const AchievementsPage = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [activeTab, setActiveTab] = useState("achievements")

  const tabs = [
    { id: "achievements", label: "Achievements", icon: Trophy, count: achievementsData.length },
    { id: "certifications", label: "Certifications", icon: Award, count: certificationsData.length },
  ]

  return (
    <section className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-green-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-2 mb-6 px-6 py-3 bg-white/5 backdrop-blur-xl rounded-full border border-white/10"
            whileHover={{ scale: 1.05 }}
          >
            <Crown className="w-5 h-5 text-yellow-400" />
            <span className="text-yellow-300 font-medium">Recognition & Growth</span>
          </motion.div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
              Achievements
            </span>
            <br />
            <span className="text-white">& Certifications</span>
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A showcase of my professional milestones, competitive achievements, and continuous learning journey
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex gap-2 bg-white/5 backdrop-blur-xl rounded-2xl p-2 border border-white/10">
            {tabs.map((tab) => {
              const TabIcon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-3 px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? "bg-gradient-to-r from-yellow-600 to-orange-600 text-white shadow-lg"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <TabIcon className="w-5 h-5" />
                  {tab.label}
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${activeTab === tab.id ? "bg-white/20" : "bg-white/10"}`}
                  >
                    {tab.count}
                  </span>
                </button>
              )
            })}
          </div>
        </motion.div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {activeTab === "achievements" && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {achievementsData.map((achievement, index) => (
                  <AchievementCard key={achievement.id} achievement={achievement} index={index} />
                ))}
              </div>
            )}

            {activeTab === "certifications" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {certificationsData.map((certification, index) => (
                  <CertificationCard key={certification.id} certification={certification} index={index} />
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

export default AchievementsPage
