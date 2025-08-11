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
  },
  {
    id: 2,
    name: "CSS",
    src: css,
  },
  {
    id: 3,
    name: "JavaScript",
    src: javascript,
  },
  {
    id: 4,
    name: "React",
    src: reactImage,
  },
  {
    id: 5,
    name: "Next JS",
    src: nextjs,
  },
  {
    id: 6,
    name: "Tailwind",
    src: tailwind,
  },
  {
    id: 7,
    name: "GraphQL",
    src: graphql,
  },
  {
    id: 8,
    name: "Node JS",
    src: node,
  },
  {
    id: 9,
    name: "Bootstrap",
    src: bootstrap,
  },
  {
    id: 10,
    name: "Svelte",
    src: svelte,
  },
  {
    id: 11,
    name: "MongoDb",
    src: mongo,
  },
  {
    id: 12,
    name: "Postgresql",
    src: postgre,
  },
];

export default function Skills() {
  return (
    <div className="w-full">
      <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className={`${styles.innerWidth} mx-auto flex flex-col`}
        >
          <TypingText title="| Skills" textStyles="text-center dark:text-white" />
          <TitleText
            className="text-black"
            title={<>What I have learned<br className="md:block hidden" /> so far</>}
            textStyles="text-center"
          />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="h2 text-indigo-600 dark:text-indigo-400 mb-8 text-center"
        >
          {/* ...existing heading... */}
        </motion.h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, idx) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ scale: 1.07, boxShadow: "0 8px 32px rgba(108,99,255,0.15)" }}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-xl shadow-lg p-6 flex flex-col items-center transition-all duration-300"
            >
              {/* Icon */}
              <div className="mb-3 text-3xl text-indigo-500 dark:text-indigo-300">
                <Image src={skill.src} width="64px" height="64px" alt={skill.name} />
              </div>
              {/* Skill Name */}
              <div className="h4 font-semibold text-gray-800 dark:text-gray-100">
                {skill.name}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
