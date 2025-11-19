// Completely redesigned Landing.jsx component with modern 2025 trends
import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Landing = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center lg:text-left"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Hi, I'm
            </span>
            <br />
            <span className="text-gray-900 dark:text-white">Luca Stringhetti</span>
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-2xl md:text-3xl font-semibold mb-8 text-gray-600 dark:text-gray-300"
          >
            Full Stack Developer
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto lg:mx-0"
          >
            I craft modern, user-centered web applications with clean code and scalable architecture.
            Passionate about AI-powered visuals, intuitive design, and emerging web trends, I enjoy turning ideas into immersive digital experiences that balance creativity and functionality.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <motion.a
              href="/resume.pdf"
              target="_blank"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Download Resume
            </motion.a>
            
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 font-semibold rounded-full hover:bg-indigo-600 hover:text-white transition-all duration-300"
            >
              Get In Touch
            </motion.a>
          </motion.div>
          
          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.0 }}
            className="flex justify-center lg:justify-start gap-6 mt-12"
          >
            <motion.a
              href="https://github.com/Quantumminded"
              whileHover={{ y: -5 }}
              className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
              target="_blank" rel="noopener noreferrer"
            >
              <FaGithub size={32} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/lucastringhetti/"
              whileHover={{ y: -5 }}
              className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
              target="_blank" rel="noopener noreferrer"
            >
              <FaLinkedin size={32} />
            </motion.a>
          </motion.div>
        </motion.div>
        
        {/* Visual Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="relative"
        >
          <div className="relative mx-auto w-full max-w-[82vw] sm:max-w-[420px] md:w-96 md:h-96 aspect-square">
            {/* Background gradient circles */}
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
            <div className="absolute inset-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full blur-2xl opacity-20 animate-pulse delay-1000"></div>
            
            {/* Profile image container */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative w-full h-full rounded-full overflow-hidden border-8 border-white dark:border-gray-900 shadow-2xl"
            >
              <img
                src="/dev-ed-wave.png"
                alt="Luca Stringhetti"
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            {/* Floating elements */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-2 right-2 sm:-top-4 sm:-right-4 w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg"
            >
              DEV
            </motion.div>
            
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute bottom-2 left-2 sm:-bottom-4 sm:-left-4 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg"
            >
              UX
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Landing;
