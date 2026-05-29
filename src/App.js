"use client"

import { useEffect, useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Lenis from "lenis"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Achievements from "./components/Achievements"
import Experience from "./components/Experience"
import About from "./components/About"
import Contact from "./components/Contact"
import ParticlesBackground from "./components/ParticlesBackground"
import LoadingScreen from "./components/LoadingScreen"
import "./App.css"

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Initialize smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // Show loading screen ONLY on initial portfolio load
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000)

    return () => {
      lenis.destroy()
      clearTimeout(timer)
    }
  }, [])

  // Show loading screen only when first opening portfolio
  if (loading) {
    return <LoadingScreen />
  }

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white relative overflow-hidden">
        <ParticlesBackground />
        <div className="fixed inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 pointer-events-none z-0" />

        <div className="relative z-10">
          <Navbar />
          <main className="pt-20">
            <Routes>
              {/* Home Page */}
              <Route
                path="/"
                element={
                  <div>
                    <Hero />
                  </div>
                }
              />

              {/* Skills Page */}
              <Route path="/skills" element={<Skills />} />

              {/* Projects Page */}
              <Route path="/projects" element={<Projects />} />

              {/* Achievements Page */}
              <Route path="/achievements" element={<Achievements />} />

              {/* Experience Page */}
              <Route path="/experience" element={<Experience />} />

              {/* Other Pages */}
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  )
}

export default App
