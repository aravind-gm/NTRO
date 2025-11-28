"use client";

import { motion } from "framer-motion";
import { Star, Trophy, Zap } from "lucide-react";

interface Achievement {
  id: number;
  title: string;
  issuer: string;
  date: string;
  category: "award" | "certification" | "milestone" | "achievement";
  icon: React.ReactNode;
  color: string;
}

const achievements: Achievement[] = [
  {
    id: 1,
    title: "Code Relay Finalist",
    issuer: "Jain University",
    date: "2024",
    category: "award",
    icon: <Trophy size={24} />,
    color: "from-yellow-500 to-orange-500",
  },
  {
    id: 2,
    title: "Introduction to HTML5",
    issuer: "University of Michigan",
    date: "2024",
    category: "certification",
    icon: <Star size={24} />,
    color: "from-cyan-500 to-blue-500",
  },
  {
    id: 3,
    title: "Introduction to CSS3",
    issuer: "University of Michigan",
    date: "2024",
    category: "certification",
    icon: <Star size={24} />,
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 4,
    title: "Programming with JavaScript",
    issuer: "Meta",
    date: "2024",
    category: "certification",
    icon: <Zap size={24} />,
    color: "from-orange-500 to-red-500",
  },
  {
    id: 5,
    title: "3x Hackathon Finalist",
    issuer: "Jain & KPR University",
    date: "2024",
    category: "achievement",
    icon: <Trophy size={24} />,
    color: "from-green-500 to-emerald-500",
  },
  {
    id: 6,
    title: "AI-ML Specialization",
    issuer: "Jain University B.Tech",
    date: "2023-2027",
    category: "milestone",
    icon: <Zap size={24} />,
    color: "from-indigo-500 to-purple-500",
  },
];

const stats = [
  { label: "Projects Built", value: "15+", color: "from-cyan-500 to-blue-500" },
  {
    label: "Hackathon Finalist",
    value: "3x",
    color: "from-purple-500 to-pink-500",
  },
  { label: "Certifications", value: "4", color: "from-orange-500 to-red-500" },
  {
    label: "Best Accuracy",
    value: "98%",
    color: "from-green-500 to-emerald-500",
  },
];

export default function AchievementsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="achievements"
      className="py-24 px-4 sm:px-6 lg:px-8 relative z-10"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-white">Achievements & </span>
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Awards, certifications, and milestones in my journey
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {achievements.map((achievement) => (
            <motion.div
              key={achievement.id}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group"
            >
              {/* Background glow */}
              <div
                className={`absolute -inset-0.5 bg-gradient-to-r ${achievement.color} rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur`}
              />

              {/* Card */}
              <div className="relative bg-gray-950 border border-gray-800 rounded-xl p-6 h-full flex flex-col group-hover:border-gray-700 transition-colors">
                {/* Icon Container */}
                <div
                  className={`w-14 h-14 rounded-lg bg-gradient-to-br ${achievement.color} flex items-center justify-center mb-4 opacity-80 group-hover:opacity-100 transition-opacity`}
                >
                  <div className="text-white">{achievement.icon}</div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors flex-grow">
                  {achievement.title}
                </h3>

                {/* Issuer and Date */}
                <div className="space-y-2 mb-4">
                  <p className="text-sm text-cyan-400 font-semibold">
                    {achievement.issuer}
                  </p>
                  <p className="text-xs text-gray-500">{achievement.date}</p>
                </div>

                {/* Category Badge */}
                <div className="flex gap-2">
                  <span
                    className={`text-xs px-3 py-1 rounded-full bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent border border-gray-800 group-hover:border-gray-700 transition-colors`}
                  >
                    {achievement.category.charAt(0).toUpperCase() +
                      achievement.category.slice(1)}
                  </span>
                </div>

                {/* Accent */}
                <div
                  className={`w-0 h-0.5 bg-gradient-to-r ${achievement.color} mt-4 opacity-0 group-hover:w-full group-hover:opacity-100 transition-all duration-300`}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gray-950 border border-gray-800 rounded-2xl p-8 md:p-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="text-center group cursor-default"
              >
                {/* Stat Value */}
                <div
                  className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-3 group-hover:text-white transition-colors`}
                >
                  {stat.value}
                </div>

                {/* Stat Label */}
                <p className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors font-medium">
                  {stat.label}
                </p>

                {/* Underline */}
                <motion.div
                  className={`h-0.5 bg-gradient-to-r ${stat.color} mt-3 opacity-0 group-hover:opacity-100 transition-opacity`}
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 mb-6">
            Interested in my qualifications?{" "}
            <span className="text-cyan-400 cursor-pointer hover:text-cyan-300 transition-colors font-semibold">
              Download my resume
            </span>
          </p>
          <motion.a
            href="https://github.com/aravind-gm"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 border border-cyan-500 text-cyan-400 font-bold rounded-lg hover:bg-cyan-500 hover:text-black transition-colors"
          >
            View Full Profile
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
