"use client";

import { motion } from "framer-motion";
import { ArrowRight, Eye, Github, Mail } from "lucide-react";
import Particles from "./Particles";

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7 },
    },
  };

  const codeLines = [
    { color: "text-cyan-400", text: "const developer = {" },
    { color: "text-gray-300", text: '  name: "Aravind GM",' },
    { color: "text-gray-300", text: '  role: "Full Stack Developer",' },
    {
      color: "text-gray-300",
      text: '  skills: ["React", "FastAPI", "AI/ML"],',
    },
    { color: "text-cyan-400", text: "}" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen bg-black pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Particles background */}
      <div className="absolute inset-0 z-0">
        <Particles
          particleCount={150}
          particleSpread={8}
          speed={0.15}
          particleColors={["#00d9ff", "#3a86ff", "#9d4edd"]}
          moveParticlesOnHover={true}
          particleBaseSize={80}
          alphaParticles={true}
          disableRotation={false}
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto relative z-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Greeting */}
            <div className="space-y-4">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-cyan-400 text-lg font-mono"
              >
                ~ Hello, I'm
              </motion.p>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-white">Aravind</span>
                <br />
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-300 bg-clip-text text-transparent">
                  GM
                </span>
              </h1>
            </div>

            {/* Role */}
            <motion.div variants={itemVariants} className="space-y-3">
              <h2 className="text-2xl sm:text-3xl text-gray-100 font-semibold">
                Full Stack Developer & AI/ML Enthusiast
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                Building modern web applications and intelligent solutions.
                Currently pursuing B.Tech in CSE (AI/ML) at Jain University.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 flex-wrap"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                className="group px-6 py-3 bg-cyan-500 text-black font-bold rounded-lg flex items-center justify-center gap-2 hover:bg-cyan-400 transition-colors cursor-target"
              >
                <Mail size={20} />
                Get in Touch
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </motion.a>

              <motion.a
                href="https://github.com/aravind-gm"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 border-2 border-cyan-500 text-cyan-400 font-bold rounded-lg flex items-center justify-center gap-2 hover:bg-cyan-500 hover:text-black transition-colors cursor-target"
              >
                <Github size={20} />
                View GitHub
              </motion.a>

              <motion.a
                href="/cv/Aravind_GM_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 border-2 border-purple-500 text-purple-400 font-bold rounded-lg flex items-center justify-center gap-2 hover:bg-purple-500 hover:text-black transition-colors cursor-target"
              >
                <Eye size={20} />
                View CV
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Side - Code Block */}
          <motion.div variants={itemVariants} className="hidden lg:block">
            <motion.div whileHover={{ scale: 1.02 }} className="relative group">
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity blur-xl" />

              {/* Code block */}
              <div className="relative bg-gray-950 border border-gray-800 rounded-xl p-6 font-mono text-sm overflow-hidden">
                {/* Header */}
                <div className="flex items-center gap-2 mb-4 pb-4 border-b border-gray-800">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="text-gray-500 text-xs ml-auto">
                    aravind.js
                  </span>
                </div>

                {/* Code */}
                <div className="space-y-2">
                  {codeLines.map((line, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + idx * 0.1 }}
                      className="flex"
                    >
                      <span className="text-gray-600 mr-4 w-8 text-right select-none">
                        {idx + 1}
                      </span>
                      <span className={line.color}>{line.text}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Cursor animation */}
                <motion.div
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="absolute bottom-6 right-6 w-2 h-6 bg-cyan-400 rounded-sm"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator - subtle */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="text-gray-600 text-center text-xs font-mono">
          <p>Scroll to explore</p>
          <div className="mt-2">↓</div>
        </div>
      </motion.div>
    </section>
  );
}
