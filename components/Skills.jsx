import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import html from "../public/assets/experience/html.png";
import css from "../public/assets/experience/css.png";
import javascript from "../public/assets/experience/javascript.png";
import reactImage from "../public/assets/experience/react.png";
import nextjs from "../public/assets/experience/nextjs.png";
import tailwind from "../public/assets/experience/tailwind.png";
import graphql from "../public/assets/experience/graphql.png";
import node from "../public/assets/experience/node.png";
import bootstrap from "../public/assets/experience/bootstrap.png";
import express from "../public/assets/experience/express.png";
import mongo from "../public/assets/experience/mongo.png";
import postgre from "../public/assets/experience/postgre.png";
import svelte from "../public/assets/experience/svelte.png";

import { TypingText, TitleText } from "./CustomText";
import styles from "../styles";
import { staggerContainer } from "../utils/motion";

const skills = [
  {
    id: 1,
    name: "HTML",
    src: html,
    category: "Frontend"
  },
  {
    id: 2,
    name: "CSS",
    src: css,
    category: "Frontend"
  },
  {
    id: 3,
    name: "JavaScript",
    src: javascript,
    category: "Frontend"
  },
  {
    id: 4,
    name: "React",
    src: reactImage,
    category: "Frontend"
  },
  {
    id: 5,
    name: "Next JS",
    src: nextjs,
    category: "Frontend"
  },
  {
    id: 6,
    name: "Tailwind",
    src: tailwind,
    category: "Frontend"
  },
  {
    id: 7,
    name: "GraphQL",
    src: graphql,
    category: "Backend"
  },
  {
    id: 8,
    name: "Node JS",
    src: node,
    category: "Backend"
  },
  {
    id: 9,
    name: "Bootstrap",
    src: bootstrap,
    category: "Frontend"
  },
  {
    id: 10,
    name: "Svelte",
    src: svelte,
    category: "Frontend"
  },
  {
    id: 11,
    name: "MongoDB",
    src: mongo,
    category: "Database"
  },
  {
    id: 12,
    name: "PostgreSQL",
    src: postgre,
    category: "Database"
  },
];

const SkillCard = ({ skill, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{
        y: -15,
        transition: { duration: 0.3 }
      }}
      className="relative group"
    >
      {/* Glow effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-all duration-500"></div>
      
      {/* Card */}
      <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100 dark:border-gray-700 group-hover:border-indigo-300 dark:group-hover:border-indigo-500 transition-all duration-300 h-full flex flex-col items-center justify-center text-center">
        {/* Icon container */}
        <div className="mb-3 sm:mb-4 relative">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/30 flex items-center justify-center p-2.5 sm:p-3 group-hover:rotate-6 transition-transform duration-300">
            <Image
              src={skill.src}
              width={48}
              height={48}
              alt={skill.name}
              className="group-hover:scale-110 transition-transform duration-300"
            />
          </div>
        </div>
        
        {/* Skill Name */}
        <h3 className="text-base sm:text-lg font-bold text-gray-800 dark:text-gray-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300 mb-2">
          {skill.name}
        </h3>
        
        {/* Category badge */}
        <div className="mt-auto">
          <span className="inline-block px-2.5 py-0.5 text-[10px] sm:text-xs font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-100 dark:bg-indigo-900/30 rounded-full">
            {skill.category}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");
  
  // Get unique categories
  const categories = ["All", ...new Set(skills.map(skill => skill.category))];
  
  // Filter skills based on active category
  const filteredSkills = activeCategory === "All" 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <div className="w-full py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className={`${styles.innerWidth} mx-auto flex flex-col items-center`}
        >
          <TypingText title="| Skills" textStyles="text-center dark:text-white" />
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 text-center"
          >
            What I have <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">learned</span> so far
          </motion.h2>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg shadow-indigo-500/30"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Showcase */}
        <div className="overflow-hidden">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 sm:gap-6 mt-4 mb-1">
            {filteredSkills.map((skill, index) => (
              <SkillCard key={skill.id} skill={skill} index={index} />
            ))}
          </div>
        </div>

        {/* AI Skills Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-24 p-8 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 dark:from-indigo-700/20 dark:to-purple-700/20 rounded-3xl backdrop-blur-lg border border-indigo-200 dark:border-indigo-800/50"
        >
          <div className="text-center">
            <h3 className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">
              AI-Enhanced Development
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Leveraging cutting-edge AI tools and techniques to enhance development workflows 
              and create innovative solutions.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <motion.div
                whileHover={{ y: -10 }}
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl blur opacity-0 group-hover:opacity-20 transition-all duration-500"></div>
                <div className="relative bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
                  <div className="text-3xl mb-4">🤖</div>
                  <h4 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">AI Code Generation</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Utilizing AI to accelerate development and improve code quality.
                  </p>
                </div>
              </motion.div>
              
              <motion.div
                whileHover={{ y: -10 }}
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl blur opacity-0 group-hover:opacity-20 transition-all duration-500"></div>
                <div className="relative bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
                  <div className="text-3xl mb-4">🎨</div>
                  <h4 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">AI Design Tools</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Integrating AI-generated visuals and design concepts into projects.
                  </p>
                </div>
              </motion.div>
              
              <motion.div
                whileHover={{ y: -10 }}
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl blur opacity-0 group-hover:opacity-20 transition-all duration-500"></div>
                <div className="relative bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
                  <div className="text-3xl mb-4">⚡</div>
                  <h4 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">Smart Optimization</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Using AI to optimize performance and user experience.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div> */}
      </div>
    </div>
  );
}
