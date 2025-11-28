"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  color: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Facial Recognition Attendance",
    description:
      "Real-time face detection system with FastAPI backend and Supabase integration for automated attendance tracking.",
    tags: ["FastAPI", "OpenCV", "Supabase", "Python"],
    liveUrl: "https://github.com/aravind-gm",
    githubUrl: "https://github.com/aravind-gm",
    color: "from-cyan-500 to-blue-500",
  },
  {
    id: 2,
    title: "Cineplex Movie Platform",
    description:
      "Responsive movie discovery app with search, recommendations, and watchlists. RESTful API integration with React frontend.",
    tags: ["React", "JavaScript", "Bootstrap", "REST APIs"],
    liveUrl: "https://github.com/aravind-gm",
    githubUrl: "https://github.com/aravind-gm",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 3,
    title: "SmartHive IoT System",
    description:
      "Cloud-independent smart home automation using Zigbee/Z-Wave protocols with Raspberry Pi and mesh networking.",
    tags: ["Python", "IoT", "Raspberry Pi", "Zigbee"],
    liveUrl: "https://github.com/aravind-gm",
    githubUrl: "https://github.com/aravind-gm",
    color: "from-green-500 to-emerald-500",
  },
  {
    id: 4,
    title: "AI Supply Chain Detector",
    description:
      "AI-based fraud detection system with 98% accuracy. Full-stack Next.js + FastAPI + PostgreSQL. Hackathon finalist.",
    tags: ["Next.js", "FastAPI", "PostgreSQL", "AI/ML"],
    liveUrl: "https://github.com/aravind-gm",
    githubUrl: "https://github.com/aravind-gm",
    color: "from-orange-500 to-red-500",
  },
  {
    id: 5,
    title: "Image Comparison Tool",
    description:
      "Web-based visual diff analysis tool combining JavaScript frontend with Python image processing utilities.",
    tags: ["JavaScript", "Python", "HTML/CSS", "Image Processing"],
    liveUrl: "https://github.com/aravind-gm/image-comparison-main",
    githubUrl: "https://github.com/aravind-gm/image-comparison-main",
    color: "from-indigo-500 to-purple-500",
  },
  {
    id: 6,
    title: "Phishing Detector MVP",
    description:
      "TypeScript-based security tool for analyzing URLs and detecting phishing attempts with heuristic analysis.",
    tags: ["TypeScript", "Node.js", "Security", "Web Dev"],
    liveUrl: "https://github.com/aravind-gm/Phishing-Detector-MVP",
    githubUrl: "https://github.com/aravind-gm/Phishing-Detector-MVP",
    color: "from-yellow-500 to-orange-500",
  },
];

export default function ProjectsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-white">Featured </span>
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore my latest work across full-stack development, AI/ML, and IoT
            solutions
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative"
            >
              {/* Card background with gradient */}
              <div
                className={`absolute -inset-0.5 bg-gradient-to-r ${project.color} rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur`}
              />

              {/* Card content */}
              <div className="relative bg-gray-950 border border-gray-800 rounded-xl p-6 h-full flex flex-col hover:border-gray-700 transition-colors">
                {/* Badge */}
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-br ${project.color} flex items-center justify-center mb-4 opacity-80 group-hover:opacity-100 transition-opacity`}
                >
                  <span className="text-white text-xl font-bold">
                    {project.id}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4 flex-grow leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2.5 py-1 rounded-full bg-gray-900 text-gray-300 border border-gray-800 group-hover:border-gray-700 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer Links */}
                <div className="flex gap-3 pt-4 border-t border-gray-800">
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-white text-sm font-semibold rounded-lg flex items-center justify-center gap-2 transition-colors"
                  >
                    <ExternalLink size={16} />
                    Live
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 px-4 py-2 border border-gray-700 hover:border-gray-600 text-gray-300 hover:text-white text-sm font-semibold rounded-lg flex items-center justify-center gap-2 transition-colors"
                  >
                    <Github size={16} />
                    Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center mt-16"
        >
          <motion.a
            href="https://github.com/aravind-gm"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border-2 border-cyan-500 text-cyan-400 font-bold rounded-lg hover:bg-cyan-500 hover:text-black transition-colors"
          >
            Explore All Projects
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
