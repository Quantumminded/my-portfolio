import Image from "next/image";
import React from "react";

import contactus from "../public/assets/contact-us.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import {AiFillMail } from "react-icons/ai";



const Contact = () => {
  return (
    <div id="contact" className="w-full">
      <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left">
        <h2 className="text-5xl md:text-7xl tracking-wider uppercase text-blue-600 dark:text-teal-400 font-bold text-center">
          contact
        </h2>

        <div className="flex flex-col md:flex-row gap-8 shadow-xl shadow-blue-300 dark:shadow-teal-500 bg-white mt-4 justify-center rounded-3xl">
          <div className="w-full md:w-1/2 h-full rounded-xl p-4">
            <Image
              src={contactus}
              alt="man with laptop"
              className="rounded-xl"
            />
            <p className="pt-2 pb-8">
              I am open to talk regarding freelancing or full-time
              opportunities. Fell free to contact me via e-mail at lukkino31@gmail.com or using your preferred
              medium.
            </p>

            <div className="grid grid-cols-3 mx-auto w-4/5 gap-10 mb-4">
              <div className="flex items-center justify-center rounded-full shadow-md shadow-blue-500 dark:shadow-teal-500 hover:scale-105 duration-200 p-3 cursor-pointer">
                <FaLinkedin size={25} />
              </div>
              <div className="flex items-center justify-center rounded-full shadow-md shadow-blue-500 dark:shadow-teal-500 hover:scale-105 duration-200 p-3 cursor-pointer">
                <FaGithub size={25} />
              </div>
              <div className="flex items-center justify-center rounded-full shadow-md shadow-blue-500 dark:shadow-teal-500 hover:scale-105 duration-200 p-3 cursor-pointer">
                <AiFillMail size={25} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
