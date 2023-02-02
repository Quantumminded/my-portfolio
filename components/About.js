import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import deved from "../public/dev-ed-wave.png";
import Image from "next/image";

import Typical from "react-typical";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const About = () => {
  return (
    <>
      <div className="text-center py-20 px-20">
        <h2 className=" text-blue-600 dark:text-teal-400 text-4xl md:text-6xl tracking-wider uppercase font-bold text-center">
          Hello I'm 
          <Typical steps={["Luca Stringhetti", 1000]} loop={1} />
        </h2>
        <h3 className="text-4xl dark:text-white font-bold">
          <Typewriter
            options={{
              strings: [
                "Front End Developer",
                "Full Stack Developer",
                "Mobile Developer",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </h3>
        <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto px-5">
          A driven full-stack developer with a passion for creating intuitive
          and impactful web applications. With a background in customer service
          management, I bring a unique perspective to my work, honing strong
          problem-solving and communication skills. After completing a
          full-stack coding bootcamp, I am eager to apply my technical knowledge
          and drive to real-world projects. My goal is to use my skills to
          create user-centered digital solutions that make a meaningful impact.
        </p>
      </div>

      <div className="relative mx-auto bg-gradient-to-b dark:from-teal-500 from-blue-600 rounded-full w-80 h-80 overflow-hidden md:my-24 md:h-96 md:w-96">
        <Image src={deved} layout="fill" objectFit="cover" />
      </div>
    </>
  );
};

export default About;
