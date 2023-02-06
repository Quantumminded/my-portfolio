import React from "react";

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

import {TypingText, TitleText } from './CustomText'
import styles from '../styles';
import { motion } from 'framer-motion';
import { staggerContainer } from '../utils/motion';


const Skills = () => {
  const experiences = [
    {
      id: 1,
      title: "HTML",
      src: html,
    },
    {
      id: 2,
      title: "CSS",
      src: css,
    },
    {
      id: 3,
      title: "JavaScript",
      src: javascript,
    },
    {
      id: 4,
      title: "React",
      src: reactImage,
    },
    {
      id: 5,
      title: "Next JS",
      src: nextjs,
    },
    {
      id: 6,
      title: "Tailwind",
      src: tailwind,
    },
    {
      id: 7,
      title: "GraphQL",
      src: graphql,
    },
    {
      id: 8,
      title: "Node JS",
      src: node,
    },
    {
      id: 9,
      title: "Bootstrap",
      src: bootstrap,
    },
    {
      id: 10,
      title: "Svelte",
      src: svelte,
    },
    {
      id: 11,
      title: "Mongo",
      src: mongo,
    },
    {
      id: 12,
      title: "Postgre",
      src: postgre,
    },
    
  ];

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
          className='text-black'
          title={<>What i have  learnt<br className="md:block hidden" /> so far</>}
          textStyles="text-center"
        />
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-8">
          {experiences.map(({ id, title, src }) => (
            <div
              key={id}
              className="dark:bg-white flex flex-col lg:flex-row gap-10 lg:gap-0 items-center justify-between p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300
              odd:shadow-rose-400 even:shadow-blue-400"
            >
              <Image src={src} width="64px" height="64px" alt={title} />
              <h3 className="font-light">{title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
