import React from "react";

import { FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";

import { TypingText, TitleText } from "./CustomText";
import styles from "../styles";
import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";

const Contact = () => {
  return (
    <div class="container px-6 mx-auto">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText
          title="| Contact"
          textStyles="text-center dark:text-white"
        />
        <TitleText
          className="text-black"
          title={<>Let's Talk</>}
          textStyles="text-center"
        />
      </motion.div>

      <section class=" text-gray-800">
        <div
          class="relative overflow-hidden bg-no-repeat bg-contain mb-32 lg:mb-32 sm:mb-28 xs:m-16"
          style={{
            backgroundImage: `url(/contact.png)`,
            backgroundPosition: "50%",
            height: "30rem",
          }}
        />
        <div class="container text-gray-800 px-4 md:px-16 ">
          <div
            class="block dark:bg-gray-200 rounded-lg shadow-xl shadow-blue-300 dark:shadow-teal-300 py-10 md:py-12 px-2 md:px-6"
            style={{
              marginTop: "-100px",
              backdropFilter: "blur(30px)",
            }}
          >
            <div class="flex flex-wrap justify-center">
              <div class="grow-0 shrink-0 basis-auto w-full xl:w-7/12">
                <div class="flex flex-wrap">
                  <div class="mb-12 grow-0 shrink-0 basis-auto w-full md:w-6/12 px-3 lg:px-6">
                    <div class="flex items-start">
                      <div class="shrink-0">
                        <div class="p-4 dark:bg-teal-400 bg-blue-600 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                          <div>
                            <AiFillMail size={25} />
                          </div>
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
                        <div class="p-4 dark:bg-teal-400 bg-blue-600 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                          <div>
                            <FaPhone size={25} />
                          </div>
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
                        <div class="p-4 dark:bg-teal-400 bg-blue-600 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                          <a
                            href="https://github.com/Quantumminded"
                            target="_blank"
                          >
                            <FaGithub size={25} />
                          </a>
                        </div>
                      </div>
                      <div class="grow ml-6">
                        <a
                          href="https://github.com/Quantumminded"
                          target="_blank"
                        >
                          <p class=" font-bold py-3 underline">GitHub</p>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="mb-12 grow-0 shrink-0 basis-auto w-full md:w-6/12 px-3 lg:px-6">
                    <div class="flex items-start">
                      <div class="shrink-0">
                        <div class="p-4 dark:bg-teal-400 bg-blue-600 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                          <a
                            href="https://www.linkedin.com/in/lucastringhetti/"
                            target="_blank"
                          >
                            <FaLinkedin size={25} />
                          </a>
                        </div>
                      </div>
                      <div class="grow ml-6">
                        <a
                          href="https://www.linkedin.com/in/lucastringhetti/"
                          target="_blank"
                        >
                          <p class=" font-bold py-3 underline">LinkedIn</p>
                        </a>
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
