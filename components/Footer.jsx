// Updated Footer.jsx component with new design
import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
 return (
 <motion.footer
 initial={{ opacity:0 }}
 animate={{ opacity:1 }}
 transition={{ duration:0.8 }}
 className="w-full py-8 px-4 bg-indigo-600 dark:bg-indigo-800 text-white text-center rounded-t-3xl mt-10"
 style={{ fontFamily: "'Inter', 'Poppins', sans-serif" }}
 >
 <div className="flex flex-col md:flex-row items-center justify-between gap-4 max-w-4xl mx-auto">
 <div className="h4 font-semibold tracking-wide">
 &copy;2022 Created By Luca Stringhetti. All rights reserved.
 </div>
 <div className="flex gap-4">
 <a
 href="https://github.com/Quantumminded"
 target="_blank"
 rel="noopener noreferrer"
 className="a hover:text-pink-300 transition-colors duration-200"
 >
 GitHub
 </a>
 <a
 href="https://www.linkedin.com/in/lucastringhetti/"
 target="_blank"
 rel="noopener noreferrer"
 className="a hover:text-pink-300 transition-colors duration-200"
 >
 LinkedIn
 </a>
 </div>
 </div>
 </motion.footer>
 );
}
