'use client';
import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import styles from '../styles';
import { exploreWorlds } from '../constants/index';

const Portfolio2 = () => {
  return (
    <section className={`${styles.paddings} bg-gradient-to-br from-gray-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-teal-900`} id="portfolio">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="h2 text-indigo-600 dark:text-indigo-400 mb-8 text-center"
        >
          My Projects
        </motion.h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-10 text-center max-w-2xl">A curated selection of my latest work, built with modern technologies and a passion for great user experiences.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {exploreWorlds.map((project, idx) => (
            <div 
              key={project.id} 
              className="group relative h-80 [perspective:1000px]"
            >
              <div className="relative w-full h-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front Side - Image, Title, and Tech Stack */}
                <div className="absolute inset-0 [backface-visibility:hidden] rounded-2xl overflow-hidden shadow-lg">
                  <div className="relative w-full h-full bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl flex flex-col border border-gray-200 dark:border-gray-700">
                    {/* Project image */}
                    <div className="relative w-full h-3/5 overflow-hidden">
                      <img 
                        src={project.imgUrl} 
                        alt={project.title} 
                        className="w-full h-full object-cover" 
                      />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 flex flex-col p-4">
                      <h3 className="font-bold text-indigo-600 dark:text-indigo-400 text-lg mb-3">
                        {project.title}
                      </h3>
                      
                      {/* Tech stack icons */}
                      <div className="mt-auto">
                        <div className="flex flex-wrap gap-2">
                          {project.stack.map((tech, idx) => (
                            <div 
                              key={idx} 
                              className="flex flex-col items-center justify-center bg-white dark:bg-gray-700/50 p-2 rounded-lg border border-indigo-200 dark:border-gray-600"
                              title={tech.name}
                            >
                              <img src={tech.imgUrl} alt={tech.name} className="w-6 h-6 object-contain mb-1" />
                              <span className="text-xs text-gray-700 dark:text-gray-300">{tech.name}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Back Side - Description and Links */}
                <div className="absolute inset-0 [backface-visibility:hidden] rounded-2xl overflow-hidden shadow-lg [transform:rotateY(180deg)] bg-gradient-to-br from-indigo-50 to-teal-50 dark:from-gray-800 dark:to-gray-900">
                  <div className="relative w-full h-full rounded-2xl flex flex-col p-5 border border-indigo-200 dark:border-gray-700">
                    <h3 className="font-bold text-indigo-600 dark:text-indigo-400 text-xl mb-3">
                      {project.title}
                    </h3>
                    
                    <div className="flex-1 overflow-y-auto pr-2 mb-4">
                      <p className="text-gray-700 dark:text-gray-300 text-sm">
                        {project.description}
                      </p>
                    </div>
                    
                    {/* Action buttons */}
                    <div className="mt-auto flex gap-3">
                      <a 
                        href={project.git} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white p-2 rounded-lg text-sm font-medium transition-colors duration-300 flex-1"
                      >
                        <FaGithub size={16} /> GitHub
                      </a>
                      <a 
                        href={project.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white p-2 rounded-lg text-sm font-medium transition-colors duration-300 flex-1"
                      >
                        <FiExternalLink size={16} /> Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio2;