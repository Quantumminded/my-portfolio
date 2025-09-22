import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="w-full mt-10 bg-gradient-to-r from-indigo-900 to-purple-900 dark:from-indigo-950 dark:to-purple-950 text-white rounded-t-3xl"
    >
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand section */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-bold mb-4">Luca Stringhetti</h3>
            <p className="text-gray-300 text-sm mb-6">
              Full-stack developer specializing in modern web technologies and UX design.
            </p>
            <div className="flex gap-4">
              <a href="https://github.com/Quantumminded" target="_blank" rel="noopener noreferrer" 
                 className="bg-indigo-700 hover:bg-indigo-600 p-2 rounded-full transition-colors duration-300">
                <FaGithub className="text-xl" />
              </a>
              <a href="https://www.linkedin.com/in/lucastringhetti/" target="_blank" rel="noopener noreferrer" 
                 className="bg-indigo-700 hover:bg-indigo-600 p-2 rounded-full transition-colors duration-300">
                <FaLinkedinIn className="text-xl" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="col-span-1 md:col-span-1">
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a></li>
              <li><a href="#portfolio" className="text-gray-300 hover:text-white transition-colors">Projects</a></li>
              <li><a href="#skills" className="text-gray-300 hover:text-white transition-colors">Skills</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1 md:col-span-1">
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-gray-300">
                <FiMail /> lukkino31@gmail.com
              </li>
              <li className="text-gray-300">Berlin, Germany</li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-indigo-800 mt-12 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Luca Stringhetti. All rights reserved.</p>
          <p className="mt-2">Designed and built with ❤️ in Berlin</p>
        </div>
      </div>
    </motion.footer>
  );
}
