import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, ExternalLink, Rocket } from 'lucide-react';
import { Button } from "../components/ui/Button";
import { useInView } from "react-intersection-observer";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [showHello, setShowHello] = useState(false);
  const [currentLetterIndex, setCurrentLetterIndex] = useState(-1);
  const [showDisappear, setShowDisappear] = useState(false);
  const [disappearStage, setDisappearStage] = useState(0);
  const [showFinal, setShowFinal] = useState(false);

  const letters = ["D", "E", "V", " ", "S", "A", "R", "A", "F"];
  const devLetters = ["D", "E", "V"];
  const sarafLetters = ["S", "A", "R", "A", "F"];

  useEffect(() => {
    if (inView) {
      setTimeout(() => setShowHello(true), 1000);

      setTimeout(() => {
        const letterInterval = setInterval(() => {
          setCurrentLetterIndex((prev) => {
            if (prev < letters.length - 1) {
              return prev + 1;
            } else {
              clearInterval(letterInterval);
              setTimeout(() => setShowDisappear(true), 1000);
              return prev;
            }
          });
        }, 200);
      }, 2000);
    }
  }, [inView, letters.length]);

  useEffect(() => {
    if (showDisappear) {
      setTimeout(() => setDisappearStage(1), 1000);
      setTimeout(() => setDisappearStage(2), 2000);
      setTimeout(() => {
        setDisappearStage(3);
        setShowFinal(true);
      }, 2500);
    }
  }, [showDisappear]);

  const renderAnimatedLetters = () => {
    if (disappearStage >= 3) return null;

    return (
      <div className="text-6xl md:text-7xl lg:text-8xl font-black flex items-center justify-center lg:justify-start">
        <div className="flex">
          <div className="flex">
            {devLetters.map((letter, index) => (
              <motion.span
                key={`dev-${index}`}
                initial={{ opacity: 0, scale: 0.5, y: 50 }}
                animate={{
                  opacity: currentLetterIndex >= index && disappearStage < 2 ? 1 : 0,
                  scale: currentLetterIndex >= index && disappearStage < 2 ? 1 : 0.5,
                  y: currentLetterIndex >= index && disappearStage < 2 ? 0 : 50,
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="text-white"
              >
                {letter}
              </motion.span>
            ))}
          </div>

          <motion.span
            initial={{ opacity: 0 }}
            animate={{
              opacity: currentLetterIndex >= 3 && disappearStage < 2 ? 1 : 0,
            }}
            transition={{ duration: 0.4 }}
            className="w-4"
          />

          <div className="flex">
            {sarafLetters.map((letter, index) => (
              <motion.span
                key={`saraf-${index}`}
                initial={{ opacity: 0, scale: 0.5, y: 50 }}
                animate={{
                  opacity: currentLetterIndex >= index + 4 && disappearStage < 1 ? 1 : 0,
                  scale: currentLetterIndex >= index + 4 && disappearStage < 1 ? 1 : 0.5,
                  y: currentLetterIndex >= index + 4 && disappearStage < 1 ? 0 : 50,
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="text-blue-400"
              >
                {letter}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const renderFinalName = () => {
    if (!showFinal) return null;

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-6xl md:text-7xl lg:text-8xl font-black flex items-center justify-center lg:justify-start"
      >
        <span className="text-white">Dev </span>
        <span className="text-blue-400">Saraf</span>
      </motion.div>
    );
  };

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          <div className="space-y-6 text-center lg:text-left">
            <motion.div variants={itemVariants} className="space-y-3">
              <div className="space-y-2">
                <AnimatePresence>
                  {showHello && (
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                      className="text-xl text-gray-300 font-light tracking-wide"
                    >
                      Hello, I'm
                    </motion.p>
                  )}
                </AnimatePresence>

                {renderAnimatedLetters()}
                {renderFinalName()}

                <motion.div variants={itemVariants} className="space-y-2 pt-4">
                  <h2 className="text-2xl md:text-3xl text-gray-200 font-semibold">AI & Software Developer</h2>
                </motion.div>
              </div>
            </motion.div>

            <motion.p variants={itemVariants} className="text-lg text-gray-300 leading-relaxed max-w-2xl font-light">
              Aspiring AI & Software Developer with experience in Python, AI agents, and automation.
              Passionate about building intelligent solutions, learning new technologies,
              and solving complex problems through software engineering
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 border border-white/10"
                  onClick={() => window.open("#", "_blank")}
                >
                  <ExternalLink className="mr-3 h-5 w-5" />
                  View Resume
                  <Rocket className="ml-3 h-5 w-5" />
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 border border-white/10"
                  onClick={() => {
                    const link = document.createElement("a");
                    link.href = "#";
                    link.download = "Dev_Saraf_Resume.pdf";
                    link.click();
                  }}
                >
                  <Download className="mr-3 h-5 w-5" />
                  Download CV
                </Button>
              </motion.div>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="flex justify-center lg:justify-end">
            <motion.div className="relative" whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
              <div className="relative p-8 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl">
                <div className="w-80 h-80 rounded-2xl overflow-hidden relative">
                  <img
                    src="/dev.jpg"
                    alt="Dev Saraf - Professional headshot"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 via-transparent to-purple-500/20" />
                </div>
              </div>

              <motion.div
                className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-xl"
                animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-8 -left-8 w-20 h-20 bg-gradient-to-r from-pink-500/30 to-yellow-500/30 rounded-full blur-xl"
                animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;