import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, Code, Trophy } from 'lucide-react';

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com",
    color: "hover:text-gray-300",
    bgColor: "hover:bg-gray-800/50",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com",
    color: "hover:text-blue-400",
    bgColor: "hover:bg-blue-500/20",
  },
  {
    name: "LeetCode",
    icon: Code,
    href: "https://leetcode.com",
    color: "hover:text-yellow-400",
    bgColor: "hover:bg-yellow-500/20",
  },
  {
    name: "CodeChef",
    icon: Trophy,
    href: "https://codechef.com",
    color: "hover:text-orange-400",
    bgColor: "hover:bg-orange-500/20",
  },
];

const Footer = () => {
  return (
    <motion.footer
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-slate-900/80 backdrop-blur-xl border-t border-white/10 mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <motion.div className="text-center md:text-left" whileHover={{ scale: 1.05 }}>
              <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent flex items-center justify-center md:justify-start">
                <span className="mr-3 text-2xl">👨‍💻</span>
                Dev Saraf
              </h3>
              <p className="text-sm text-gray-400 mt-1">AI & Software Developer</p>
            </motion.div>

            <div className="flex justify-center space-x-4">
              {socialLinks.map((link, index) => {
                const IconComponent = link.icon;
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.2, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-xl bg-white/5 border border-white/10 text-gray-400 ${link.color} ${link.bgColor} transition-all duration-300 hover:shadow-lg backdrop-blur-sm block`}
                      title={link.name}
                    >
                      <IconComponent className="h-5 w-5" />
                    </a>
                  </motion.div>
                );
              })}
            </div>

            <div className="text-center md:text-right space-y-2">
              <motion.div
                className="flex items-center justify-center md:justify-end text-sm text-gray-300 hover:text-white transition-colors duration-300 group"
                whileHover={{ x: -5 }}
              >
                <Mail className="h-4 w-4 mr-2 group-hover:text-blue-400 transition-colors duration-300" />
                <a href="mailto:dev@example.com" className="hover:underline">
                  devsaraf71@gmail.com
                </a>
              </motion.div>
              <motion.div
                className="flex items-center justify-center md:justify-end text-sm text-gray-300 hover:text-white transition-colors duration-300 group"
                whileHover={{ x: -5 }}
              >
                <Phone className="h-4 w-4 mr-2 group-hover:text-green-400 transition-colors duration-300" />
                <a href="tel:+918103471101" className="hover:underline">
                  +91 8103471101
                </a>
              </motion.div>
            </div>
          </div>

          <motion.div
            className="mt-8 pt-6 border-t border-white/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <p className="text-center text-sm text-gray-400 flex items-center justify-center gap-2">
              Copyright © 2025 || Dev Saraf. All Rights Reserved.
              <span className="flex items-center gap-1">
              </span>
            </p>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;