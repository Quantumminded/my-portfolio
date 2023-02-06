import Link from "next/link";
import React from "react";
import me from "../public/me.png"
import Image from "next/image";
import {TypingText, TitleText } from './CustomText'
import styles from '../styles';
import { motion } from 'framer-motion';
import { staggerContainer } from '../utils/motion';

import { MdExpandMore } from "react-icons/md";

const Me = () => {
  return (
    <div className="w-full md:flex-row lg:flex items-center">
      <div className="">
      <Image
        src={me}
        alt=""
        className=""
      />
      </div>
      <div className="max-w-screen-xl mx-auto px-16 py-16 text-center md:text-left">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
      <TypingText title="| About me" textStyles="text-center dark:text-white" />
        <TitleText
          className='text-black'
          title={<>Discover who i'm </>}
          textStyles="text-center"
        />
      </motion.div>
        <div className=" shadow-xl shadow-blue-300 dark:shadow-teal-300 my-2 px-8 dark:bg-white rounded-3xl py-4">
          <p className="py-4 max-w-2xl mx-auto">
          As a full-stack developer, I am enthusiastic and motivated, driven by a deep passion for creating web applications that are both intuitive and impactful. My background in customer service management has provided me with valuable experience in problem-solving and communication, skills that I bring to my work as a developer. This unique combination allows me to approach projects with a user-centered mindset, ensuring that the solutions I create are not only technically sound but also meet the needs and expectations of the users.
          </p>
          <p className="py-4 max-w-2xl mx-auto">
          I recently completed a rigorous full-stack coding bootcamp, where I gained hands-on experience with a diverse set of technologies, including HTML, CSS, Tailwind, Bootstrap, React, Node, Express, SQL, and NoSQL. During the bootcamp, I developed a full-stack project from start to finish, working in a team environment utilizing the Scrum method and tools such as GitHub to manage the workflow. Our team's hard work and dedication paid off as we successfully deployed the web site on Netlify, showcasing our ability to build, test, and deploy a full-stack web application.
          </p>
          <p className="py-4 max-w-2xl mx-auto">
          These experiences have equipped me with the technical knowledge and real-world experience necessary to excel as a full-stack developer. I am eager to put my skills and drive to use on real-world projects, leveraging my ability to deliver impactful and user-centered digital solutions. My ultimate goal is to make a meaningful impact by creating digital solutions that enhance people's lives. I am highly dedicated to continuously improving my skills and producing exceptional work that exceeds expectations.
          </p>

          
        </div>

        <div className="flex items-center justify-center p-6">
          <a href="/resume.pdf" target="_blank">
            <div className="group flex items-center justify-center bg-blue-600 dark:bg-teal-400 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
              resume
              <span className="-rotate-90 duration-100 ease-in group-hover:rotate-0">
                <MdExpandMore size={25} />
              </span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Me;
