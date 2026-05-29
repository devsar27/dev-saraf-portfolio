"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Code,
  Copy,
  Check,
  Send,
  Loader2,
  CheckCircle,
  Sparkles,
} from "lucide-react"
import { Button } from "./ui/Button"

const ContactPage = () => {
  const [headerRef, headerInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [contentRef, contentInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  // Status & Validation State
  const [errors, setErrors] = useState({})
  const [submissionStatus, setSubmissionStatus] = useState("idle") // idle | sending | success
  const [copiedEmail, setCopiedEmail] = useState(false)

  // Handlers
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear validation error on change
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }))
    }
  }

  const validateForm = () => {
    const tempErrors = {}
    if (!formData.name.trim()) tempErrors.name = "Name is required"
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Please enter a valid email"
    }
    if (!formData.subject.trim()) tempErrors.subject = "Subject is required"
    if (!formData.message.trim()) tempErrors.message = "Message is required"

    setErrors(tempErrors)
    return Object.keys(tempErrors).length === 0
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    if (!validateForm()) return

    setSubmissionStatus("sending")

    try {
      const response = await fetch("https://formsubmit.co/ajax/devsaraf71@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      })

      if (response.ok) {
        setSubmissionStatus("success")
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        })
      } else {
        setSubmissionStatus("idle")
        alert("Failed to send message. Please try again or contact via devsaraf71@gmail.com.")
      }
    } catch (error) {
      console.error("Error submitting contact form:", error)
      setSubmissionStatus("idle")
      alert("An error occurred. Please try again or contact via devsaraf71@gmail.com.")
    }
  }

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText("devsaraf71@gmail.com")
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2000)
  }

  return (
    <section className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Page Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-white/5 backdrop-blur-xl rounded-full border border-white/10"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-blue-300 font-medium text-sm">Reach Out</span>
          </motion.div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Contact Me
            </span>
          </h1>

          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-light">
            Have a question, collaboration proposal, or just want to say hi? Feel free to send a message.
          </p>
        </motion.div>

        {/* Contact Content Grid */}
        <div ref={contentRef} className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Contact Cards & Socials */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={contentInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Info Cards */}
            <div className="p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 space-y-6">
              <h3 className="text-xl font-bold text-white mb-2">Contact Details</h3>

              {/* Email Card */}
              <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/5 group hover:border-blue-500/30 transition-all duration-300">
                <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-sm text-gray-400 block">Email</span>
                  <a href="mailto:devsaraf71@gmail.com" className="text-white hover:text-blue-300 transition-colors truncate block font-medium">
                    devsaraf71@gmail.com
                  </a>
                </div>
                <button
                  onClick={copyEmailToClipboard}
                  className="p-2 bg-white/5 hover:bg-white/10 rounded-lg text-gray-400 hover:text-white transition-all duration-200"
                  title="Copy to clipboard"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone Card */}
              <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/5 group hover:border-green-500/30 transition-all duration-300">
                <div className="p-3 bg-green-500/10 rounded-lg text-green-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <span className="text-sm text-gray-400 block">Phone</span>
                  <a href="tel:+918103471101" className="text-white hover:text-green-300 transition-colors font-medium">
                    +91 8103471101
                  </a>
                </div>
              </div>

              {/* Location Card */}
              <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/5 group hover:border-purple-500/30 transition-all duration-300">
                <div className="p-3 bg-purple-500/10 rounded-lg text-purple-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <span className="text-sm text-gray-400 block">Location Availability</span>
                  <span className="text-white font-medium">Remote / Hybrid (India)</span>
                </div>
              </div>
            </div>

            {/* Social Links Box */}
            <div className="p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 space-y-4">
              <h3 className="text-xl font-bold text-white">Find Me Online</h3>
              <div className="grid grid-cols-3 gap-4">
                {/* LinkedIn */}
                <motion.a
                  href="https://www.linkedin.com/in/dev-saraf-0248a4252/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 p-4 bg-white/5 rounded-xl border border-white/5 hover:border-blue-400 hover:bg-blue-500/10 transition-all duration-300 text-gray-400 hover:text-blue-400"
                  whileHover={{ y: -4 }}
                >
                  <Linkedin className="w-6 h-6" />
                  <span className="text-xs font-medium">LinkedIn</span>
                </motion.a>

                {/* GitHub */}
                <motion.a
                  href="https://github.com/devsar27"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 p-4 bg-white/5 rounded-xl border border-white/5 hover:border-white hover:bg-gray-800/45 transition-all duration-300 text-gray-400 hover:text-white"
                  whileHover={{ y: -4 }}
                >
                  <Github className="w-6 h-6" />
                  <span className="text-xs font-medium">GitHub</span>
                </motion.a>

                {/* LeetCode */}
                <motion.a
                  href="https://leetcode.com/u/DevSaraf71"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 p-4 bg-white/5 rounded-xl border border-white/5 hover:border-yellow-400 hover:bg-yellow-500/10 transition-all duration-300 text-gray-400 hover:text-yellow-400"
                  whileHover={{ y: -4 }}
                >
                  <Code className="w-6 h-6" />
                  <span className="text-xs font-medium">LeetCode</span>
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Dynamic Form Container */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={contentInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <div className="relative p-8 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl overflow-hidden min-h-[480px] flex flex-col justify-center">
              
              <AnimatePresence mode="wait">
                {/* Form Submission States */}
                {submissionStatus === "idle" && (
                  <motion.form
                    key="contact-form"
                    onSubmit={handleFormSubmit}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Name field */}
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-semibold text-gray-300 block">Name</label>
                        <input
                          id="name"
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 bg-white/5 border ${errors.name ? "border-red-500" : "border-white/10 focus:border-blue-500"} rounded-xl text-white outline-none transition-all duration-300 focus:ring-2 focus:ring-blue-500/20`}
                          placeholder="Your name"
                        />
                        {errors.name && <span className="text-xs text-red-500 block font-medium">{errors.name}</span>}
                      </div>

                      {/* Email field */}
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-semibold text-gray-300 block">Email</label>
                        <input
                          id="email"
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 bg-white/5 border ${errors.email ? "border-red-500" : "border-white/10 focus:border-blue-500"} rounded-xl text-white outline-none transition-all duration-300 focus:ring-2 focus:ring-blue-500/20`}
                          placeholder="your.email@example.com"
                        />
                        {errors.email && <span className="text-xs text-red-500 block font-medium">{errors.email}</span>}
                      </div>
                    </div>

                    {/* Subject field */}
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-semibold text-gray-300 block">Subject</label>
                      <input
                        id="subject"
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 bg-white/5 border ${errors.subject ? "border-red-500" : "border-white/10 focus:border-blue-500"} rounded-xl text-white outline-none transition-all duration-300 focus:ring-2 focus:ring-blue-500/20`}
                        placeholder="Project Inquiry, Opportunity, etc."
                      />
                      {errors.subject && <span className="text-xs text-red-500 block font-medium">{errors.subject}</span>}
                    </div>

                    {/* Message field */}
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-semibold text-gray-300 block">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows="5"
                        className={`w-full px-4 py-3 bg-white/5 border ${errors.message ? "border-red-500" : "border-white/10 focus:border-blue-500"} rounded-xl text-white outline-none transition-all duration-300 focus:ring-2 focus:ring-blue-500/20 resize-none`}
                        placeholder="Hi Dev, I'd like to talk about..."
                      />
                      {errors.message && <span className="text-xs text-red-500 block font-medium">{errors.message}</span>}
                    </div>

                    {/* Submit Button */}
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 rounded-xl flex items-center justify-center gap-2 shadow-xl hover:shadow-blue-500/25 transition-all duration-300"
                      >
                        <Send className="w-5 h-5" />
                        Send Message
                      </Button>
                    </motion.div>
                  </motion.form>
                )}

                {submissionStatus === "sending" && (
                  <motion.div
                    key="sending-state"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col items-center justify-center space-y-4 text-center py-10"
                  >
                    <Loader2 className="w-16 h-16 text-blue-400 animate-spin" />
                    <h3 className="text-2xl font-bold text-white">Sending Message...</h3>
                    <p className="text-gray-400">Verifying secure pathways and routing details.</p>
                  </motion.div>
                )}

                {submissionStatus === "success" && (
                  <motion.div
                    key="success-state"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col items-center justify-center space-y-6 text-center py-10"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.2 }}
                      className="p-4 bg-green-500/10 rounded-full border border-green-500/30 text-green-400 shadow-2xl shadow-green-500/20"
                    >
                      <CheckCircle className="w-16 h-16" />
                    </motion.div>

                    <div className="space-y-2">
                      <h3 className="text-3xl font-black text-white">Message Sent!</h3>
                      <p className="text-gray-300 max-w-sm leading-relaxed font-light">
                        Thank you for reaching out! Your message was delivered successfully. Dev will get back to you shortly.
                      </p>
                    </div>

                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        onClick={() => setSubmissionStatus("idle")}
                        className="bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-xl py-3 px-6 text-base shadow-lg transition-all duration-300"
                      >
                        Send Another Message
                      </Button>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactPage
