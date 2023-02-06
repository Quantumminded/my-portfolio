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
            Nepenthe above my pallas of rapping guessing shore. Then chamber
            midnight nevermore nevermore. Dared pallas nothing door me oer
            myself so, name streaming door back beguiling was unseen at,
            evilprophet is than burden little the and me at, there above heaven
            in more no, nevermore sinking fowl the door oer.
          </p>
          <p className="py-4 max-w-2xl mx-auto">
            Nepenthe above my pallas of rapping guessing shore. Then chamber
            midnight nevermore nevermore. Dared pallas nothing door me oer
            myself so, name streaming door back beguiling was unseen at,
            evilprophet is than burden little the and me at, there above heaven
            in more no, nevermore sinking fowl the door oer.
          </p>
          <p className="py-4 max-w-2xl mx-auto">
            Nepenthe above my pallas of rapping guessing shore. Then chamber
            midnight nevermore nevermore. Dared pallas nothing door me oer
            myself so, name streaming door back beguiling was unseen at,
            evilprophet is than burden little the and me at, there above heaven
            in more no, nevermore sinking fowl the door oer.
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
