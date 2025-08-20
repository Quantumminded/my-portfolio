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
                {/* Front Side - Minimal, image-first with glass overlay */}
                <div className="absolute inset-0 [backface-visibility:hidden] rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl">
                  <div className="relative h-full w-full rounded-2xl p-[1px] bg-gradient-to-br from-indigo-500/40 via-purple-500/30 to-teal-500/40">
                    <div className="relative h-full w-full rounded-2xl overflow-hidden bg-white/70 dark:bg-gray-900/50 backdrop-blur-md">
                      <img
                        src={project.imgUrl}
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent dark:from-black/60" />
                      <div className="absolute top-3 right-3">
                        <span className="inline-flex items-center rounded-full px-2 py-1 text-[10px] font-medium bg-white/70 dark:bg-gray-800/70 text-gray-700 dark:text-gray-200 ring-1 ring-black/10 dark:ring-white/10 backdrop-blur-sm">
                          Project #{idx + 1}
                        </span>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <div className="flex flex-col gap-2">
                          <h3 className="text-white text-lg md:text-xl font-semibold drop-shadow-sm">
                            {project.title}
                          </h3>
                          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                            {project.stack.slice(0, 3).map((tech, techIdx) => (
                              <span
                                key={techIdx}
                                title={tech.name}
                                className="inline-flex shrink-0 items-center gap-1 rounded-full bg-white/80 dark:bg-gray-800/80 px-1.5 py-0.5 sm:px-2 sm:py-1 text-[9px] sm:text-[10px] text-gray-700 dark:text-gray-200 ring-1 ring-black/10 dark:ring-white/10 backdrop-blur-sm"
                              >
                                <img src={tech.imgUrl} alt={tech.name} className="w-3.5 h-3.5 object-contain" />
                                {tech.name}
                              </span>
                            ))}
                            {project.stack.length > 3 && (
                              <span className="inline-flex shrink-0 items-center rounded-full bg-white/70 dark:bg-gray-800/70 px-1.5 py-0.5 sm:px-2 sm:py-1 text-[9px] sm:text-[10px] text-gray-700 dark:text-gray-200 ring-1 ring-black/10 dark:ring-white/10 backdrop-blur-sm">
                                +{project.stack.length - 3}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Back Side - Focused text and primary actions */}
                <div className="absolute inset-0 [backface-visibility:hidden] rounded-2xl overflow-hidden shadow-lg [transform:rotateY(180deg)] transition-all duration-300 hover:shadow-xl">
                  <div className="relative h-full w-full rounded-2xl p-[1px] bg-gradient-to-br from-indigo-500/40 via-purple-500/30 to-teal-500/40">
                    <div className="relative h-full w-full rounded-2xl bg-white/85 dark:bg-gray-900/70 backdrop-blur-md flex flex-col">
                      <div className="p-5 pb-3">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                          {project.title}
                        </h3>
                        <div className="mt-2 flex flex-wrap gap-1.5 sm:gap-2">
                          {project.stack.slice(0, 5).map((tech, techIdx) => (
                            <span
                              key={techIdx}
                              title={tech.name}
                              className="inline-flex shrink-0 items-center gap-1 rounded-full bg-gray-100/80 dark:bg-gray-800/70 px-1.5 py-0.5 sm:px-2 sm:py-1 text-[9px] sm:text-[10px] text-gray-700 dark:text-gray-200 ring-1 ring-black/10 dark:ring-white/10"
                            >
                              <img src={tech.imgUrl} alt={tech.name} className="w-3 h-3 sm:w-3.5 sm:h-3.5 object-contain" />
                              {tech.name}
                            </span>
                          ))}
                          {project.stack.length > 5 && (
                            <span className="inline-flex shrink-0 items-center rounded-full bg-gray-100/80 dark:bg-gray-800/70 px-1.5 py-0.5 sm:px-2 sm:py-1 text-[9px] sm:text-[10px] text-gray-700 dark:text-gray-200 ring-1 ring-black/10 dark:ring-white/10">
                              +{project.stack.length - 5}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="px-5 flex-1 overflow-y-auto text-gray-700 dark:text-gray-300">
                        <p className="text-sm leading-relaxed">
                          {project.description}
                        </p>
                      </div>
                      <div className="p-5 pt-3 mt-auto grid grid-cols-2 gap-2 sm:gap-3">
                        <a
                          href={project.git}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-lg px-2 py-1.5 sm:px-3 sm:py-2 text-[12px] sm:text-sm leading-none font-medium text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transition-colors duration-200 shadow-sm"
                        >
                          <FaGithub size={14} aria-hidden />
                          <span>GitHub</span>
                        </a>
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-lg px-2 py-1.5 sm:px-3 sm:py-2 text-[12px] sm:text-sm leading-none font-medium text-white bg-teal-600 hover:bg-teal-700 transition-colors duration-200 shadow-sm"
                        >
                          <FiExternalLink size={14} aria-hidden />
                          <span>Live Demo</span>
                        </a>
                      </div>
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