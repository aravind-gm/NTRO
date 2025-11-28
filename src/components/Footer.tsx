"use client";

import { motion } from "framer-motion";
import { Github, Heart, Instagram, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Github size={20} />,
      href: "https://github.com/aravind-gm",
      label: "GitHub",
      color: "hover:text-gray-400",
    },
    {
      icon: <Linkedin size={20} />,
      href: "https://www.linkedin.com/in/gm-aravind/",
      label: "LinkedIn",
      color: "hover:text-blue-400",
    },
    {
      icon: <Instagram size={20} />,
      href: "https://www.instagram.com/atozaravind/?__pwa=1",
      label: "Instagram",
      color: "hover:text-pink-400",
    },
    {
      icon: <Mail size={20} />,
      href: "mailto:aravindgm.dev@gmail.com",
      label: "Email",
      color: "hover:text-red-400",
    },
  ];

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="border-t border-gray-800 bg-gray-950 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                <span className="font-bold text-white text-sm">AG</span>
              </div>
              <span className="font-bold text-white text-lg">Aravind GM</span>
            </div>
            <p className="text-sm text-gray-500 max-w-xs">
              Full Stack Developer & AI/ML enthusiast building innovative
              digital solutions.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="font-bold text-white mb-4">Navigation</h3>
            <div className="space-y-2">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={idx}
                  href={link.href}
                  whileHover={{ x: 4 }}
                  className="block text-sm text-gray-500 hover:text-cyan-400 transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-bold text-white mb-4">Connect</h3>
            <div className="flex gap-4">
              {socialLinks.map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -4 }}
                  whileTap={{ scale: 0.9 }}
                  className={`text-gray-400 transition-colors ${social.color}`}
                  title={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800" />

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="py-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500"
        >
          {/* Left - Copyright */}
          <div className="text-center sm:text-left">
            <p>
              © {currentYear} Aravind GM. All rights reserved. | Made with{" "}
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="inline-block"
              >
                <Heart size={14} className="text-red-500 inline" />
              </motion.span>{" "}
              using Next.js & Framer Motion
            </p>
          </div>

          {/* Right - Quick Actions */}
          <div className="flex gap-4 text-xs">
            <a
              href="#"
              className="text-gray-500 hover:text-gray-300 transition-colors"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-300 transition-colors"
            >
              Terms
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-300 transition-colors"
            >
              Sitemap
            </a>
          </div>
        </motion.div>
      </div>

      {/* Animated Background Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-10" />
    </footer>
  );
}
