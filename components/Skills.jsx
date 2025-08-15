import React from "react";
import { motion } from "framer-motion";

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
import Image from "next/image";

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
    name: "MongoDb",
    src: mongo,
    category: "Database"
  },
  {
    id: 12,
    name: "Postgresql",
    src: postgre,
    category: "Database"
  },
];

const SkillCategory = ({ category, skills }) => (
  <div className="mb-12">
    <motion.h3
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-6 flex items-center gap-3"
    >
      <span className="w-8 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></span>
      {category}
    </motion.h3>
    
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {skills.map((skill, idx) => (
        <motion.div
          key={skill.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: idx * 0.1 }}
          whileHover={{ 
            scale: 1.05, 
            boxShadow: "0 20px 40px rgba(108,99,255,0.2)",
            y: -5
          }}
          className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl shadow-xl p-6 flex flex-col items-center transition-all duration-300 group hover:bg-gradient-to-br from-white to-indigo-50 dark:from-gray-800 dark:to-indigo-900/20"
        >
          {/* Icon container with glow effect */}
          <div className="mb-4 relative">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/50 dark:to-purple-900/50 flex items-center justify-center p-3 group-hover:shadow-lg group-hover:shadow-indigo-500/20 transition-all duration-300">
              <Image 
                src={skill.src} 
                width="48px" 
                height="48px" 
                alt={skill.name} 
                className="group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          
          {/* Skill Name */}
          <div className="text-lg font-semibold text-gray-800 dark:text-gray-100 text-center group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
            {skill.name}
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

export default function Skills() {
  // Group skills by category
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});

  return (
    <div className="w-full py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className={`${styles.innerWidth} mx-auto flex flex-col items-center mb-16`}
        >
          <TypingText title="| Skills" textStyles="text-center dark:text-white" />
          <TitleText
            className="text-black"
            title={<>What I have learned<br className="md:block hidden" /> so far</>}
            textStyles="text-center"
          />
        </motion.div>

        {/* Skills by category */}
        <div className="space-y-8">
          {Object.entries(groupedSkills).map(([category, skills]) => (
            <SkillCategory key={category} category={category} skills={skills} />
          ))}
        </div>

        {/* AI Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20 p-8 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 dark:from-indigo-700/20 dark:to-purple-700/20 rounded-3xl backdrop-blur-lg border border-indigo-200 dark:border-indigo-800/50"
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
                whileHover={{ scale: 1.05 }}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-xl p-6 shadow-lg"
              >
                <div className="text-3xl mb-4">🤖</div>
                <h4 className="text-xl font-semibold mb-2">AI Code Generation</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Utilizing AI to accelerate development and improve code quality.
                </p>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-xl p-6 shadow-lg"
              >
                <div className="text-3xl mb-4">🎨</div>
                <h4 className="text-xl font-semibold mb-2">AI Design Tools</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Integrating AI-generated visuals and design concepts into projects.
                </p>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-xl p-6 shadow-lg"
              >
                <div className="text-3xl mb-4">⚡</div>
                <h4 className="text-xl font-semibold mb-2">Smart Optimization</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Using AI to optimize performance and user experience.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
