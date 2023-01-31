import React from 'react';
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import deved from "../public/dev-ed-wave.png";
import Image from "next/image";

const About = () => {
  return (
    <>
    <div className="text-center p-10">
            <h2 className="py-2 text-blue-600 dark:text-teal-400 text-5xl md:text-7xl tracking-wider uppercase font-bold text-center">
              Luca Stringhetti
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Full Stack Web Developer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto">
              A driven full-stack developer with a passion for creating
              intuitive and impactful web applications. With a background in
              customer service management, I bring a unique perspective to my
              work, honing strong problem-solving and communication skills.
              After completing a full-stack coding bootcamp, I am eager to apply
              my technical knowledge and drive to real-world projects. My goal
              is to use my skills to create user-centered digital solutions that
              make a meaningful impact.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
            <a href="https://www.linkedin.com/in/lucastringhetti/">
              <AiFillLinkedin />
            </a>
            <a href="https://github.com/Quantumminded">
              <AiFillGithub />
            </a>
          </div>
          <div className="relative mx-auto bg-gradient-to-b dark:from-teal-500 from-blue-600 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
            <Image src={deved} layout="fill" objectFit="cover" />
          </div>
          </>
  )
}

export default About