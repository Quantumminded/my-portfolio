import Image from "next/image";
import React from "react";
import Link from "next/link";

import contact from "../public/contact.png"
import contactus from "../public/assets/contact-us.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import {AiFillMail } from "react-icons/ai";



const Contact = () => {
  return (
    <div className="w-full">
      <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left">

        <h2 className="text-5xl md:text-7xl tracking-wider uppercase text-blue-600 dark:text-teal-400 font-bold text-center">
          contact
        </h2>

        <div className="flex flex-col md:flex-row gap-8 shadow-xl shadow-blue-300 dark:shadow-teal-300 bg-white mt-4 justify-center rounded-3xl">
        
          <div className="w-full md:w-1/2 h-full rounded-xl p-5">
            
          <div className="mb-3">
            <div className=" ml-44 ">
            <Image
              src={contact}
              alt="man with laptop"
              className="rounded-xl"
            />
            </div>
            
            <p className="p-4">
              I am open to talk regarding freelancing or full-time
              opportunities. Fell free to contact me via e-mail at <span className="font-bold">lukkino31@gmail.com</span> or using your preferred
              medium.
            </p>
          </div>
            

            <div className="grid grid-cols-3 mx-auto w-4/5 gap-10 mb-4">
              <div className="flex items-center justify-center rounded-full shadow-md shadow-blue-500 dark:shadow-teal-500 hover:scale-105 duration-200 p-3 cursor-pointer">
                <Link href="https://www.linkedin.com/in/lucastringhetti/" target="_blank">
                <FaLinkedin size={25} />
                </Link>
              </div>
              <div className="flex items-center justify-center rounded-full shadow-md shadow-blue-500 dark:shadow-teal-500 hover:scale-105 duration-200 p-3 cursor-pointer">
              <Link href="https://github.com/Quantumminded" target="_blank">
                <FaGithub size={25} />
                </Link>
              </div>
              <div className="flex items-center justify-center rounded-full shadow-md shadow-blue-500 dark:shadow-teal-500 hover:scale-105 duration-200 p-3 cursor-pointer">
              <Link href="" target="_blank">
                <AiFillMail size={25} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
