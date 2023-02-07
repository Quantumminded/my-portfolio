import React from "react";
import deved from "../public/dev-ed-wave.png";
import Image from "next/image";


import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const Landing = () => {


  return (
    <>
      <div className="text-center py-24 ">
        <h2 className=" text-blue-600 dark:text-teal-400 text-3xl md:text-6xl tracking-wider uppercase font-bold text-center ">
        
          <motion.div
            initial={{ opacity: 0, x: "+100vh" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", duration: 2.5, }}
          >
            <p className="">Hello, I'm</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: "-100vh" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", bounce: 0.6 , duration: 2.5, }}
          >
            <p className="">Luca Stringhetti</p>
          </motion.div>
        </h2>
        <h3 className="text-2xl md:text-3xl lg:text-5xl dark:text-white font-bold ">
          <Typewriter
            options={{
              strings: [
                "Front End Developer",
                "Full Stack Developer",
                "Beck End Developer",
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

      {/* <div className="relative mx-auto bg-gradient-to-b dark:from-teal-500 from-blue-600 rounded-full w-80 h-80 overflow-hidden md:my-24  md:h-96 md:w-96">
        <Image src={deved} layout="fill" objectFit="cover" />
      </div> */}

      <motion.div
        className="flex justify-center object-contain"
        border-radius="50%"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          default: {
            duration: 4.5,
            ease: [0, 0.71, 0.2, 1.01],
          },
          scale: {
            type: "spring",
            damping: 5,
            stiffness: 100,
            restDelta: 0.001,
          },
        }}
      >
        <div className="relative mx-auto bg-gradient-to-b dark:from-teal-500 from-blue-600 rounded-full w-80 h-80 overflow-hidden md:my-24 md:h-96 md:w-96 sm:mx-10">
          <Image src={deved} layout="fill" objectFit="cover" />
        </div>
      </motion.div>
    </>
  );
};

export default Landing;
