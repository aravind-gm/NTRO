"use client";

import { motion } from "framer-motion";
import { Github, Instagram, Linkedin, Mail, MapPin } from "lucide-react";

export default function ContactSection() {
  const contactMethods = [
    {
      icon: <Mail size={24} />,
      label: "Email",
      value: "aravindgm.dev@gmail.com",
      href: "mailto:aravindgm.dev@gmail.com",
      color: "from-cyan-500 to-blue-500",
    },
    {
      icon: <MapPin size={24} />,
      label: "Location",
      value: "Bangalore, India",
      href: "#",
      color: "from-purple-500 to-pink-500",
    },
  ];

  const socialLinks = [
    {
      icon: <Github size={20} />,
      label: "GitHub",
      href: "https://github.com/aravind-gm",
      color: "from-gray-400 to-gray-600",
    },
    {
      icon: <Linkedin size={20} />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/gm-aravind/",
      color: "from-blue-500 to-blue-700",
    },
    {
      icon: <Instagram size={20} />,
      label: "Instagram",
      href: "https://www.instagram.com/atozaravind/?__pwa=1",
      color: "from-pink-500 to-purple-500",
    },
  ];

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-white">Let's </span>
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind or just want to chat? Feel free to reach out!
            I'm always open to new opportunities and collaborations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Contact Methods */}
          {contactMethods.map((method, idx) => (
            <motion.a
              key={idx}
              href={method.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              className="group"
            >
              <div className="bg-gray-950 border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-all h-full">
                <div
                  className={`w-14 h-14 rounded-lg bg-gradient-to-br ${method.color} flex items-center justify-center mb-4 opacity-80 group-hover:opacity-100 transition-opacity`}
                >
                  <div className="text-white">{method.icon}</div>
                </div>
                <h3 className="font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {method.label}
                </h3>
                <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                  {method.value}
                </p>
              </div>
            </motion.a>
          ))}

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-950 border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-all"
          >
            <h3 className="font-bold text-white mb-4">Follow Me</h3>
            <div className="space-y-3">
              {socialLinks.map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
                >
                  <div
                    className={`w-10 h-10 rounded-lg bg-gradient-to-br ${social.color} flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity`}
                  >
                    <div className="text-white">{social.icon}</div>
                  </div>
                  <span className="text-sm font-medium">{social.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
