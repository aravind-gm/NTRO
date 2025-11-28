'use client'

import { motion } from 'framer-motion'
import { Code2, Zap, Users, Lightbulb } from 'lucide-react'

export default function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const features = [
    {
      icon: <Code2 size={24} />,
      title: 'Full Stack Development',
      description: 'Building scalable applications with React, Next.js, FastAPI, and cloud technologies.',
      color: 'from-cyan-500 to-blue-500',
    },
    {
      icon: <Zap size={24} />,
      title: 'AI/ML Integration',
      description: 'Implementing machine learning models and computer vision solutions for real-world problems.',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: <Users size={24} />,
      title: 'Collaborative Problem Solver',
      description: 'Working with teams to deliver production-ready applications and innovative solutions.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: <Lightbulb size={24} />,
      title: 'Continuous Learner',
      description: 'Always exploring new technologies, frameworks, and best practices in software development.',
      color: 'from-purple-500 to-pink-500',
    },
  ]

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-white">About </span>
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Me</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          {/* Left Column - Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-gray-950 border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-colors">
              <h3 className="text-2xl font-bold text-white mb-4">Hi, I'm Aravind GM</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                I'm a B.Tech Computer Science student at Jain University specializing in AI/ML. I'm passionate about building innovative solutions at the intersection of web development and machine learning. With hands-on experience in full-stack development, computer vision, and IoT, I love tackling complex technical challenges.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Whether it's developing responsive web applications, implementing ML models, or designing IoT systems, I bring creativity and technical excellence to every project. Currently, I'm exploring scalable architectures and cloud-native solutions.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Experience Level', value: 'Intermediate' },
                { label: 'Current Focus', value: 'Full Stack + AI/ML' },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-950 border border-gray-800 rounded-lg p-4 hover:border-gray-700 transition-colors group"
                >
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1 group-hover:text-gray-400 transition-colors">
                    {stat.label}
                  </p>
                  <p className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    {stat.value}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Features */}
          <motion.div
            className="space-y-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ x: 8 }}
                className="group"
              >
                <div className="bg-gray-950 border border-gray-800 rounded-lg p-4 group-hover:border-gray-700 transition-all">
                  <div className="flex gap-4 items-start">
                    {/* Icon */}
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center flex-shrink-0 opacity-80 group-hover:opacity-100 transition-opacity`}>
                      <div className="text-white">{feature.icon}</div>
                    </div>

                    {/* Content */}
                    <div className="flex-grow">
                      <h4 className="font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Tech Stack Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gray-950 border border-gray-800 rounded-xl p-8 hover:border-gray-700 transition-colors"
        >
          <h3 className="text-2xl font-bold text-white mb-6">Tech Stack Highlights</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                category: 'Frontend',
                techs: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
                color: 'from-cyan-500 to-blue-500',
              },
              {
                category: 'Backend',
                techs: ['Python', 'FastAPI', 'PostgreSQL', 'Supabase'],
                color: 'from-purple-500 to-pink-500',
              },
              {
                category: 'AI/ML & IoT',
                techs: ['OpenCV', 'Scikit-learn', 'Raspberry Pi', 'Zigbee'],
                color: 'from-orange-500 to-red-500',
              },
            ].map((stack, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -4 }}
                className="group"
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className={`w-1 h-6 bg-gradient-to-b ${stack.color} rounded`} />
                  <h4 className="font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {stack.category}
                  </h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {stack.techs.map((tech, tidx) => (
                    <span
                      key={tidx}
                      className="text-xs px-3 py-1 rounded-full bg-gray-900 text-gray-300 border border-gray-700 group-hover:border-gray-600 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 mb-6">
            Ready to collaborate on something amazing?
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-black font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
