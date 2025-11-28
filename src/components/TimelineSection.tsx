"use client";

import { motion } from "framer-motion";
import { BookOpen, Briefcase } from "lucide-react";

interface TimelineItem {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string;
  type: "experience" | "education";
  color: string;
}

const timelineItems: TimelineItem[] = [
  {
    id: 1,
    title: "Software Developer (Intern)",
    company: "Vedanta Limited",
    period: "2024 - 2024",
    description:
      "Developed facial recognition system for automated attendance tracking using OpenCV and FastAPI with real-time processing.",
    type: "experience",
    color: "from-cyan-500 to-blue-500",
  },
  {
    id: 2,
    title: "Full-Stack Developer",
    company: "Cineplex Platform",
    period: "Jan - Mar 2025",
    description:
      "Built movie discovery web application with React frontend, REST API backend, and integrated recommendation system.",
    type: "experience",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 3,
    title: "Research Experience",
    company: "SmartHive Home Automation",
    period: "Nov 2024 - Present",
    description:
      "Researched and implemented cloud-independent IoT solutions using Zigbee/Z-Wave protocols with Raspberry Pi mesh networking.",
    type: "experience",
    color: "from-green-500 to-emerald-500",
  },
  {
    id: 4,
    title: "B.Tech Computer Science",
    company: "Jain University",
    period: "2023 - 2027",
    description:
      "AI/ML Specialization with CGPA 7.2/10. Focus on machine learning, web development, and full-stack applications.",
    type: "education",
    color: "from-orange-500 to-red-500",
  },
];

export default function TimelineSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="experience"
      className="py-24 px-4 sm:px-6 lg:px-8 relative z-10"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-white">Experience & </span>
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My professional journey and academic background
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="space-y-8 relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 md:transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500 opacity-20" />

          {timelineItems.map((item, idx) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className={`relative md:flex md:gap-8 ${
                idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline dot */}
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="absolute left-0 md:left-1/2 md:transform md:-translate-x-1/2 -translate-y-1/2 top-6 w-4 h-4 bg-gray-950 border-2 border-gray-800 rounded-full z-10"
              >
                <div
                  className={`absolute -inset-1 bg-gradient-to-r ${item.color} opacity-0 hover:opacity-50 blur rounded-full transition-opacity`}
                />
              </motion.div>

              {/* Content */}
              <div className="ml-8 md:ml-0 md:w-1/2">
                <motion.div whileHover={{ y: -4 }} className="group">
                  <div
                    className="bg-gray-950 border border-gray-800 rounded-lg p-6 group-hover:border-gray-700 transition-all"
                    style={{
                      boxShadow: `0 0 20px ${
                        item.type === "experience"
                          ? "rgba(0, 217, 255, 0.1)"
                          : "rgba(255, 0, 255, 0.1)"
                      }`,
                    }}
                  >
                    {/* Type Badge */}
                    <div className="flex items-center gap-2 mb-3">
                      <div
                        className={`w-8 h-8 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity`}
                      >
                        {item.type === "experience" ? (
                          <Briefcase size={16} className="text-white" />
                        ) : (
                          <BookOpen size={16} className="text-white" />
                        )}
                      </div>
                      <span className="text-xs font-semibold text-gray-400 uppercase">
                        {item.type === "experience"
                          ? "Experience"
                          : "Education"}
                      </span>
                    </div>

                    {/* Title and Company */}
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-cyan-400 font-semibold mb-2">
                      {item.company}
                    </p>
                    <p className="text-sm text-gray-500 mb-4">{item.period}</p>

                    {/* Description */}
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {item.description}
                    </p>

                    {/* Accent bar */}
                    <div
                      className={`w-1 h-1 bg-gradient-to-r ${item.color} rounded-full mt-4 opacity-0 group-hover:opacity-100 transition-opacity`}
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom accent */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-500 text-sm">
            Want to work together?{" "}
            <span className="text-cyan-400 cursor-pointer hover:text-cyan-300 transition-colors">
              Get in touch
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
