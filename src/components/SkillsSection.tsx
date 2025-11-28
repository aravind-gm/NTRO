"use client";

import { motion } from "framer-motion";
import SkillStack from "./SkillStack";

interface Skill {
  name: string;
  level: number;
  category: string;
  color: string;
}

const skillsData: Skill[] = [
  {
    name: "React",
    level: 90,
    category: "Frontend",
    color: "from-cyan-400 to-blue-500",
  },
  {
    name: "Next.js",
    level: 85,
    category: "Frontend",
    color: "from-cyan-400 to-blue-500",
  },
  {
    name: "JavaScript",
    level: 90,
    category: "Frontend",
    color: "from-cyan-400 to-blue-500",
  },
  {
    name: "TypeScript",
    level: 85,
    category: "Frontend",
    color: "from-cyan-400 to-blue-500",
  },
  {
    name: "Tailwind CSS",
    level: 90,
    category: "Frontend",
    color: "from-cyan-400 to-blue-500",
  },
  {
    name: "HTML/CSS",
    level: 90,
    category: "Frontend",
    color: "from-cyan-400 to-blue-500",
  },
  {
    name: "Python",
    level: 88,
    category: "Backend",
    color: "from-purple-400 to-pink-500",
  },
  {
    name: "FastAPI",
    level: 85,
    category: "Backend",
    color: "from-purple-400 to-pink-500",
  },
  {
    name: "REST APIs",
    level: 88,
    category: "Backend",
    color: "from-purple-400 to-pink-500",
  },
  {
    name: "Supabase",
    level: 85,
    category: "Database",
    color: "from-green-400 to-emerald-500",
  },
  {
    name: "PostgreSQL",
    level: 80,
    category: "Database",
    color: "from-green-400 to-emerald-500",
  },
  {
    name: "OpenCV",
    level: 85,
    category: "AI/ML",
    color: "from-orange-400 to-red-500",
  },
  {
    name: "Scikit-learn",
    level: 80,
    category: "AI/ML",
    color: "from-orange-400 to-red-500",
  },
  {
    name: "Face Recognition",
    level: 85,
    category: "AI/ML",
    color: "from-orange-400 to-red-500",
  },
  {
    name: "Git",
    level: 88,
    category: "Tools",
    color: "from-yellow-400 to-amber-500",
  },
  {
    name: "Data Structures",
    level: 85,
    category: "Core",
    color: "from-indigo-400 to-purple-500",
  },
];

export default function SkillsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-white">Technical </span>
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Languages, frameworks, and tools I use to build modern applications
          </p>
        </motion.div>

        {/* Interactive Skill Stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex justify-center"
        >
          <SkillStack
            skills={skillsData.map((skill, idx) => ({
              ...skill,
              id: idx + 1,
            }))}
            randomRotation={true}
            sensitivity={150}
            cardDimensions={{ width: 300, height: 180 }}
          />
        </motion.div>

        {/* Stats Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 pt-16 border-t border-gray-800"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "Years Learning", value: "3+" },
              { label: "Languages", value: "5+" },
              { label: "Frameworks", value: "8+" },
              { label: "Technologies", value: "16+" },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.1 }}
                className="group cursor-default"
              >
                <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2 group-hover:from-cyan-300 group-hover:to-blue-400 transition-all">
                  {stat.value}
                </div>
                <p className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
