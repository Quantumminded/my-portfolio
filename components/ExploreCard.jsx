"use client";

import { motion } from "framer-motion";
import styles from "../styles/index";
import { fadeIn } from "../utils/motion";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const ExploreCard = ({
  id,
  imgUrl,
  title,
  index,
  active,
  handleClick,
  url,
  stack,
  git,
  description,
}) => (
  // <motion.div
  //   variants={fadeIn("right", "spring", index * 0.5, 0.75)}
  //   className={`relative ${
  //     active === id ? "lg:flex-[3.5] flex-[10]" : "lg:flex-[0.5] flex-[2]"
  //   } flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
  //   onClick={() => handleClick(id)}
  // >
  //   
  //   {active !== id ? (
  //     <h3 className="font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
  //       {title}
  //     </h3>
  //   ) : (
  //     <div className="absolute bottom-0 p-4 flex justify-start w-full flex-col bg-[rgba(0,0,0,0.85)] rounded-b-[24px] rounded-xl xs:p-3 md:p-6">
  //       <div
  //         className={`flex justify-items-center w-[65px] h-[65px] rounded-[24px] glassmorphism mb-[-35px] gap-8`}
  //       >
  //         {stack.map((item, index) => (
  //           <img
  //             key={index}
  //             src={item}
  //             alt={title}
  //             className="w-1/2 h-1/2 object-contain xs:pb-2"
  //           />
  //         ))}
  //       </div>
  //       
  //       
  //   )}
  // </motion.div>
     
  <motion.div
  variants={fadeIn("right", "spring", index * 0.5, 0.75)}
  className={`relative ${
    active === id ? "lg:flex-[3.5] flex-[10]" : "lg:flex-[0.5] flex-[2]"
  } flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
  onClick={() => handleClick(id)}
>
  <img
    src={imgUrl}
    alt={title}
    className="absolute w-full h-full object-cover rounded-[24px]"
  />
  {active !== id ? (
    <h3 className="font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
      {title}
    </h3>
  ) : (
    <div className="absolute bottom-0 p-4 flex justify-start w-full flex-col bg-[rgba(0,0,0,0.85)] rounded-b-[24px] rounded-xl xs:p-3 md:p-6">
      <h2 className=" font-semibold sm:text-[32px] text-[24px] text-white text-center">
        {title}
      </h2>
      <p className="font-normal text-[16px] leading-[20.16px] text-white xs:text-[10px] sm:text-[13px] mb-3 text-center">
        {description}
      </p>
      
      <div
        className={`flex justify-items-center  w-[65px] h-[65px] rounded-[24px] glassmorphism mb-[-35px] gap-8 `}
      >
        
        {stack.map((item, index) => (
          <img
            key={index}
            src={item.imgUrl}
            alt={item.name}
            title={item.name}
            className="w-1/2 h-1/2 object-contain xs:pb-2"
          />
        ))}
        
      </div>

      <div className=" flex items-center justify-center align-middle text-sm text-gray-600 gap-8 p-2">
        <div className="flex items-center justify-center rounded-full dark:bg-teal-400 bg-blue-600  hover:scale-105 duration-200 p-3 cursor-pointer">
          <a href={git} target="_blank">
            <FaGithub size={20} className="fill-white dark:fill-black"/>
          </a>
        </div>

        <div className="flex items-center justify-center rounded-full dark:bg-teal-400 bg-blue-600 hover:scale-105 duration-200 p-3 cursor-pointer">
          <a href={url} target="_blank">
            <FiExternalLink size={20} className="bg-white dark:bg-transparent rounded-full p-1" />
          </a>
        </div>
      </div>

    </div>
  )}
</motion.div>


);

export default ExploreCard;
