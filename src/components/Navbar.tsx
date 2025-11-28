"use client";

import { motion } from "framer-motion";
import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  Menu,
  Moon,
  Sun,
  X,
} from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Experience", id: "experience" },
    { label: "Contact", id: "contact" },
  ];

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
    setIsOpen(false);
  };

  const socialLinks = [
    {
      icon: <Github size={16} />,
      href: "https://github.com/aravind-gm",
      label: "GitHub",
    },
    {
      icon: <Linkedin size={16} />,
      href: "https://www.linkedin.com/in/gm-aravind/",
      label: "LinkedIn",
    },
    {
      icon: <Instagram size={16} />,
      href: "https://www.instagram.com/atozaravind/?__pwa=1",
      label: "Instagram",
    },
    {
      icon: <Mail size={16} />,
      href: "mailto:aravindgm.dev@gmail.com",
      label: "Email",
    },
  ];

  return (
    <>
      {/* Top Social Bar */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 w-full z-50 border-b border-gray-800 bg-black/80 backdrop-blur-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex justify-end gap-4">
          {socialLinks.map((social, idx) => (
            <motion.a
              key={idx}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-400 hover:text-cyan-400 transition-colors cursor-target"
              title={social.label}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Main Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-10 w-full z-40 glass"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold gradient-text cursor-pointer"
            >
              Aravind GM
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => handleScroll(item.id)}
                  whileHover={{ y: -2 }}
                  className={`text-sm font-medium transition-smooth cursor-target ${
                    activeSection === item.id
                      ? "text-neon-cyan"
                      : "text-gray-300 hover:text-neon-cyan"
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="underline"
                      className="h-0.5 bg-gradient-to-r from-neon-cyan to-neon-pink"
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* Theme Toggle & Mobile Menu */}
            <div className="flex items-center gap-4">
              <motion.button
                whileHover={{ rotate: 20 }}
                whileTap={{ rotate: -20 }}
                onClick={() => setIsDark(!isDark)}
                className="p-2 rounded-lg bg-dark-800 hover:bg-dark-700 transition-smooth"
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </motion.button>

              {/* Mobile Menu Button */}
              <motion.button
                whileTap={{ rotate: 90 }}
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 rounded-lg bg-dark-800 hover:bg-dark-700 transition-smooth"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden pb-4"
            >
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => handleScroll(item.id)}
                  className="block w-full text-left px-4 py-2 text-sm hover:text-neon-cyan transition-smooth"
                >
                  {item.label}
                </motion.button>
              ))}
            </motion.div>
          )}
        </div>
      </motion.nav>
    </>
  );
}
