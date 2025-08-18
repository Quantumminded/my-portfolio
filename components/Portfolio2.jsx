'use client';
import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import styles from '../styles';
import { exploreWorlds } from '../constants/index';
import { staggerContainer } from '../utils/motion';
import { TypingText } from './CustomText';

const Portfolio2 = () => {
  return (
    <section className={`${styles.paddings}`} id="portfolio">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className={`${styles.innerWidth} mx-auto flex flex-col items-center`}
        >
          <TypingText title="| Projects" textStyles="text-center dark:text-white" />
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 text-center"
          >
            My <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </motion.h2>
        </motion.div>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-10 text-center max-w-2xl">A curated selection of my latest work, built with modern technologies and a passion for great user experiences.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {exploreWorlds.map((project, idx) => (
            <div 
              key={project.id} 
              className="group relative h-80 [perspective:1000px]"
            >
              <div className="relative w-full h-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front Side - Image, Title, and Tech Stack */}
                <div className="absolute inset-0 [backface-visibility:hidden] rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl">
                  <div className="relative w-full h-full bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl flex flex-col border border-indigo-100 dark:border-gray-600">
                    {/* Project image */}
                    <div className="relative w-full h-48 overflow-hidden">
                      <img
                        src={project.imgUrl}
                        alt={project.title}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 flex flex-col p-4">
                      <h3 className="font-bold text-indigo-600 dark:text-indigo-400 text-lg mb-3">
                        {project.title}
                      </h3>
                      
                      {/* Tech stack icons */}
                      <div className="mt-auto">
                        <div className="flex flex-wrap gap-1">
                          {project.stack.map((tech, idx) => (
                            <div
                              key={idx}
                              className="flex flex-col items-center justify-center bg-white dark:bg-gray-700/50 p-1 rounded border border-indigo-200 dark:border-gray-600"
                              title={tech.name}
                            >
                              <img
                                src={tech.imgUrl}
                                alt={tech.name}
                                className="w-4 h-4 object-contain transition-transform duration-300 hover:scale-125"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Back Side - Description and Links */}
                <div className="absolute inset-0 [backface-visibility:hidden] rounded-2xl overflow-hidden shadow-lg [transform:rotateY(180deg)] bg-gradient-to-br from-indigo-50 to-teal-50 dark:from-gray-800 dark:to-gray-900 transition-all duration-300 hover:shadow-xl">
                  <div className="relative w-full h-full rounded-2xl flex flex-col p-5 border border-indigo-200 dark:border-gray-700">
                    {/* Tech stack icons on back */}
                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.stack.map((tech, idx) => (
                        <div
                          key={idx}
                          className="flex flex-col items-center justify-center bg-white dark:bg-gray-700/50 p-1 rounded border border-indigo-200 dark:border-gray-600"
                          title={tech.name}
                        >
                          <img
                            src={tech.imgUrl}
                            alt={tech.name}
                            className="w-4 h-4 object-contain"
                          />
                        </div>
                      ))}
                    </div>
                    <h3 className="font-bold text-indigo-600 dark:text-indigo-400 text-xl mb-3">
                      {project.title}
                    </h3>
                    
                    <div className="flex-1 overflow-y-auto pr-2 mb-4 text-gray-700 dark:text-gray-300 text-sm">
                      <p>{project.description}</p>
                    </div>
                    
                    {/* Action buttons */}
                    <div className="mt-auto flex gap-3">
                      <a 
                        href={project.git} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white p-2 rounded-lg text-sm font-medium transition-all duration-300 flex-1 hover:scale-[1.03]"
                      >
                        <FaGithub size={16} /> GitHub
                      </a>
                      <a 
                        href={project.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white p-2 rounded-lg text-sm font-medium transition-all duration-300 flex-1 hover:scale-[1.03]"
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