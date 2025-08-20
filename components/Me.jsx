import Link from "next/link";
import React from "react";
import me from "../public/me.png";
import Image from "next/image";
import { TypingText, TitleText } from "./CustomText";
import styles from "../styles";
import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";

import { MdExpandMore } from "react-icons/md";

const Me = () => {
  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className={`${styles.innerWidth} mx-auto flex flex-col items-center mb-16`}
        >
          <TypingText title="| About me" textStyles="text-center dark:text-white" />
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 text-center"
          >
            Discover <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">who I am</span>
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full max-w-lg mx-auto">
              {/* Background gradient circles */}
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-3xl blur-2xl opacity-20"></div>
              <div className="absolute -inset-8 bg-gradient-to-r from-purple-400 to-pink-500 rounded-3xl blur-3xl opacity-10"></div>
              
              {/* Profile image container */}
              <div className="relative bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-2xl border-8 border-white dark:border-gray-800">
                <Image
                  src={me}
                  alt="Luca Stringhetti"
                  className="w-full h-auto object-cover"
                  width={500}
                  height={600}
                />
              </div>
              
              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-2 rounded-full font-semibold shadow-lg"
              >
                Full Stack
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-6 -left-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full font-semibold shadow-lg"
              >
                AI Enthusiast
              </motion.div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
              >
                As a full-stack developer, I am enthusiastic and motivated, driven
                by a deep passion for creating web applications that are both
                intuitive and impactful. My background in customer service
                management has provided me with valuable experience in
                problem-solving and communication, skills that I bring to my work as
                a developer.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
              >
                This unique combination allows me to approach projects
                with a user-centered mindset, ensuring that the solutions I create
                are not only technically sound but also meet the needs and
                expectations of the users. I recently completed a rigorous full-stack 
                coding bootcamp, where I gained hands-on experience with a diverse 
                set of technologies.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
              >
                These experiences have equipped me with the technical knowledge and
                real-world experience necessary to excel as a full-stack developer.
                I am eager to put my skills and drive to use on real-world projects,
                leveraging my ability to deliver impactful and user-centered digital
                solutions. My ultimate goal is to make a meaningful impact by
                creating digital solutions that enhance people's lives.
              </motion.p>
            </div>

            {/* Stats Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="grid grid-cols-3 gap-6 py-8"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">50+</div>
                <div className="text-gray-600 dark:text-gray-300">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">3+</div>
                <div className="text-gray-600 dark:text-gray-300">Years</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">15+</div>
                <div className="text-gray-600 dark:text-gray-300">Technologies</div>
              </div>
            </motion.div>

            {/* Resume Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="flex items-center justify-center lg:justify-start"
            >
              <a 
                href="/resume.pdf" 
                target="_blank"
                className="group flex items-center justify-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 font-bold uppercase rounded-full tracking-wider cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Download Resume
                <span className="ml-2 -rotate-90 duration-300 ease-in group-hover:rotate-0">
                  <MdExpandMore size={25} />
                </span>
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* AI Integration Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 p-8 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 dark:from-indigo-700/20 dark:to-purple-700/20 rounded-3xl backdrop-blur-lg border border-indigo-200 dark:border-indigo-800/50"
        >
          <div className="text-center">
            <h3 className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">
              AI-Driven Development Approach
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Integrating cutting-edge AI tools and methodologies to enhance development 
              processes and create innovative solutions that push the boundaries of what's possible.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-xl p-6 shadow-lg"
              >
                <div className="text-4xl mb-4">🤖</div>
                <h4 className="text-xl font-semibold mb-2">AI-Assisted Coding</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Leveraging AI to accelerate development, improve code quality, 
                  and solve complex problems more efficiently.
                </p>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-xl p-6 shadow-lg"
              >
                <div className="text-4xl mb-4">🎨</div>
                <h4 className="text-xl font-semibold mb-2">AI-Generated Design</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Creating stunning visuals and user experiences with AI-powered 
                  design tools and generative algorithms.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div> */}
      </div>
    </div>
  );
};

export default Me;
