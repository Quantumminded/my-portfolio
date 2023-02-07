import Image from "next/image";
import React from "react";
import Link from "next/link";

import contact from "../public/contact.png"
import contactus from "../public/assets/contact-us.jpg";
import { FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";
import {AiFillMail } from "react-icons/ai";

import {TypingText, TitleText } from './CustomText'
import styles from '../styles';
import { motion } from 'framer-motion';
import { staggerContainer } from '../utils/motion';


const Contact = () => {
  return (
    // <div className="w-full">
    //   <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left">

    //     <h2 className="text-5xl md:text-7xl tracking-wider uppercase text-blue-600 dark:text-teal-400 font-bold text-center">
    //       contact
    //     </h2>

    //     <div className="flex flex-col md:flex-row gap-8 shadow-xl shadow-blue-300 dark:shadow-teal-300 bg-white mt-4 justify-center rounded-3xl">
        
    //       <div className="w-full md:w-1/2 h-full rounded-xl p-5">
            
    //       <div className="mb-3 ">
    //         <div className=" ml-28">
    //         <Image
    //           src={contact}
    //           alt="man with laptop"
    //           className="rounded-xl "
    //         />
    //         </div>
            
    //         <p className="p-4">
    //           I am open to talk regarding freelancing or full-time
    //           opportunities. Fell free to contact me via e-mail at <span className="font-bold">lukkino31@gmail.com</span> or using your preferred
    //           medium.
    //         </p>
    //       </div>
            

    //         <div className="grid grid-cols-3 mx-auto w-4/5 gap-10 mb-4">
    //           <div className="flex items-center justify-center rounded-full shadow-md shadow-blue-500 dark:shadow-teal-500 hover:scale-105 duration-200 p-3 cursor-pointer">
    //             <Link href="https://www.linkedin.com/in/lucastringhetti/" target="_blank">
    //             <FaLinkedin size={25} />
    //             </Link>
    //           </div>
    //           <div className="flex items-center justify-center rounded-full shadow-md shadow-blue-500 dark:shadow-teal-500 hover:scale-105 duration-200 p-3 cursor-pointer">
    //           <Link href="https://github.com/Quantumminded" target="_blank">
    //             <FaGithub size={25} />
    //             </Link>
    //           </div>
    //           <div className="flex items-center justify-center rounded-full shadow-md shadow-blue-500 dark:shadow-teal-500 hover:scale-105 duration-200 p-3 cursor-pointer">
    //           <Link href="" target="_blank">
    //             <AiFillMail size={25} />
    //             </Link>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div class="container my-24 px-6 mx-auto">
     <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
      <TypingText title="| Contact" textStyles="text-center dark:text-white" />
        <TitleText
          className='text-black'
          title={<>Let's Talk</>}
          textStyles="text-center"
        />
      </motion.div>
  
  <section class="mb-32 text-gray-800">

    <div class="relative overflow-hidden bg-no-repeat bg-contain mb-32 lg:mb-32 sm:m-28 xs:m-16"
      style={{ 
        backgroundImage: `url(/contact.png)`, 
        backgroundPosition: "50%", 
        height: "30rem" 
        
      }} />
    <div class="container text-gray-800 px-4 md:px-12">
      <div class="block rounded-lg shadow-lg py-10 md:py-12 px-2 md:px-6"
        style={{
          marginTop: "-100px", 
          background: "hsla(0, 0%, 100%, 0.8)", 
          backdropFilter: "blur(30px)"}}>
        <div class="flex flex-wrap justify-center">
          
          <div class="grow-0 shrink-0 basis-auto w-full xl:w-7/12">
            <div class="flex flex-wrap">
              <div class="mb-12 grow-0 shrink-0 basis-auto w-full md:w-6/12 px-3 lg:px-6">
                <div class="flex items-start">
                  <div class="shrink-0">
                    <div class="p-4 bg-blue-600 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                      <Link href="" target="_blank">
                        <AiFillMail size={25} />
                      </Link>
                    </div>
                  </div>
                  <div class="grow ml-6">
                    <p class="font-bold pt-3">Email</p>
                    <p class="text-gray-500">lukkino31@gmail.com</p>
                  </div>
                </div>
              </div>
              <div class="mb-12 grow-0 shrink-0 basis-auto w-full md:w-6/12 px-3 lg:px-6">
                <div class="flex items-start">
                  <div class="shrink-0">
                    <div class="p-4 bg-blue-600 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                      <Link href="https://www.linkedin.com/in/lucastringhetti/" target="_blank">
                        <FaPhone size={25} />
                      </Link>

                      
                    </div>
                  </div>
                  <div class="grow ml-6">
                    <p class="font-bold pt-3">Phone</p>
                    <p class="text-gray-500">+4915731487217</p>
                  </div>
                </div>
              </div>
              <div class="mb-12 md:mb-0 grow-0 shrink-0 basis-auto w-full md:w-6/12 px-3 lg:px-6">
                <div class="flex align-start">
                  <div class="shrink-0">
                    <div class="p-4 bg-blue-600 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                      <Link href="https://github.com/Quantumminded" target="_blank">
                        <FaGithub size={25} />
                      </Link>
                    </div>
                  </div>
                  <div class="grow ml-6">
                    
                    <p class=" font-bold py-3">GitHub</p>
                   
                  </div>
                </div>
              </div>
              <div class="mb-12 grow-0 shrink-0 basis-auto w-full md:w-6/12 px-3 lg:px-6">
                <div class="flex items-start">
                  <div class="shrink-0">
                    <div class="p-4 bg-blue-600 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                      <Link href="https://www.linkedin.com/in/lucastringhetti/" target="_blank">
                        <FaLinkedin size={25} />
                      </Link>
                    </div>
                  </div>
                  <div class="grow ml-6">
                    
                    <p class=" font-bold py-3">LinkedIn</p>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </section>

</div>
  );
};

export default Contact;
