import React from "react";
import { TypingText } from "./CustomText";
import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";

import { MdExpandMore } from "react-icons/md";

const Me = () => {
  return (
    <section className="w-full py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center space-y-4 mb-16"
        >
          <TypingText title="| About me" textStyles="text-center dark:text-white" />
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-semibold text-gray-900 dark:text-white"
          >
            Discover{" "}
            <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
              who I am
            </span>
          </motion.h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative overflow-hidden rounded-3xl border border-gray-100/80 dark:border-white/10 bg-white dark:bg-gray-900 shadow-xl"
        >
          <div className="px-8 py-12 md:px-16 flex flex-col items-center gap-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-8 text-center max-w-3xl"
            >
              <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                I’m a junior full-stack developer with almost 2 years of hands-on experience building web applications that balance clean code, usability, and performance.
My journey started with a background in customer service and team collaboration, where I developed strong communication and problem-solving skills—abilities I now bring into tech to build solutions that are not only functional, but also user-focused and impactful.

Over the past years, I’ve worked on projects ranging from front-end interfaces with Vue.js to RESTful APIs and database integrations, gaining confidence across the stack. I also enjoy exploring new tools and best practices to constantly sharpen my craft and stay adaptable in a fast-moving field.

My goal is to contribute to products that matter—solutions that help people, empower businesses, and make the web a better place to be.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-6 text-left">
                {[
                  { label: "Projects", value: "7+" },
                  { label: "Years", value: "2+" },
                  { label: "Technologies", value: "12+" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="min-w-[120px] rounded-2xl border border-gray-200/70 dark:border-white/10 bg-white dark:bg-gray-800/70 px-6 py-4 text-center shadow-sm"
                  >
                    <div className="text-2xl font-semibold text-gray-900 dark:text-white">
                      {item.value}
                    </div>
                    <div className="text-sm uppercase tracking-wide text-gray-500 dark:text-gray-400">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-center">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white dark:from-indigo-500 dark:to-purple-500 px-8 py-3 text-sm font-semibold tracking-wide transition duration-300 hover:-translate-y-0.5"
                >
                  Download Resume
                  <span className="ml-1 -rotate-90 transition duration-300 group-hover:rotate-0">
                    <MdExpandMore size={22} />
                  </span>
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Me;
