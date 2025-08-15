// Updated Landing.jsx component with new design
import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const Landing = () => {
 return (
 <motion.div
 initial={{ opacity:0, scale:0.95 }}
 animate={{ opacity:1, scale:1 }}
 transition={{ duration:0.8, ease: "easeOut" }}
 className="flex flex-col md:flex-row items-center justify-center gap-10 w-full"
 >
 {/* Profile Image */}
 <motion.img
 src="/profile.jpg"
 alt="Luca Stringhetti"
 className="rounded-3xl shadow-xl w-40 h-40 md:w-56 md:h-56 object-cover border-4 border-indigo-500"
 initial={{ y:0 }}
 animate={{ y: [0, -10,0] }}
 transition={{ repeat: Infinity, duration:3, ease: "easeInOut" }}
 />
 {/* Hero Text */}
 <div className="text-center md:text-left max-w-xl">
 <motion.h1
 initial={{ opacity:0, y:30 }}
 animate={{ opacity:1, y:0 }}
 transition={{ duration:0.7, delay:0.2 }}
 className="text-indigo-600 dark:text-indigo-400 mb-4 leading-tight"
 >
 <p className="h3">Hello, I am</p>
 <p className="h2">Luca Stringhetti</p>
 </motion.h1>
 <h3 className="h3 dark:text-white font-bold ">
 <Typewriter
 options={{
 strings: [
 "Front End Developer",
 "Full Stack Developer",
 "Back End Developer",
 ],
 autoStart: true,
 loop: true,
 }}
 />
 </h3>
 <motion.p
 initial={{ opacity:0, y:20 }}
 animate={{ opacity:1, y:0 }}
 transition={{ duration:0.7, delay:0.4 }}
 className="p text-gray-700 dark:text-gray-200 mb-6"
 >
 A driven full-stack developer with a passion for creating intuitive
 and impactful web applications. With a background in customer service
 management, I bring a unique perspective to my work, honing strong
 problem-solving and communication skills. After completing a
 full-stack coding bootcamp, I am eager to apply my technical knowledge
 and drive to real-world projects. My goal is to use my skills to
 create user-centered digital solutions that make a meaningful impact.
 </motion.p>
 {/* Download CV Button */}
 <motion.a
 href="/cv.pdf"
 download
 whileHover={{
 scale:1.05,
 backgroundColor: "#FF6584",
 color: "#fff",
 }}
 className="inline-block px-6 py-3 rounded-full bg-indigo-500 text-white font-semibold shadow-lg transition-all duration-300"
 >
 Download CV
 </motion.a>
 </div>
 </motion.div>
 );
};

export default Landing;
