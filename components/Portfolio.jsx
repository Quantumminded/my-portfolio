import React from "react";

import { MdExpandMore } from "react-icons/md";
import { motion } from "framer-motion";

import global from "../public/assets/portfolio/global.png";
import pokedex from "../public/assets/portfolio/pokedex.png";
import todos from "../public/assets/portfolio/todos.png";
import valpiccola from "../public/assets/portfolio/valpiccola.png";

import html from "../public/assets/experience/html.png";
import css from "../public/assets/experience/css.png";
import javascript from "../public/assets/experience/javascript.png";
import reactImage from "../public/assets/experience/react.png";
import nextjs from "../public/assets/experience/nextjs.png";
import tailwind from "../public/assets/experience/tailwind.png";
import graphql from "../public/assets/experience/graphql.png";
import node from "../public/assets/experience/node.png";
import bootstrap from "../public/assets/experience/bootstrap.png";
import express from "../public/assets/experience/express.png";
import mongo from "../public/assets/experience/mongo.png";
import postgre from "../public/assets/experience/postgre.png";
import svelte from "../public/assets/experience/svelte.png";
import strapi from "../public/assets/experience/strapi.png";
import stripe from "../public/assets/experience/stripe.png";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

import Link from "next/link";
import Image from "next/image";

// import Swiper JS
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, A11y} from 'swiper';
// import Swiper styles
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/mousewheel';


const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      title: "GlobalSpeak",
      imageSrc: global,
      url: "https://globalspeak.netlify.app/",
      stack: [css, nextjs, html, bootstrap, stripe],
      git: "https://github.com/Quantumminded/front-end",
    },
    {
      id: 2,
      title: "Pokedex",
      imageSrc: pokedex,
      url: "https://sparkling-manatee-860534.netlify.app/",
      stack: [reactImage, javascript, node],
      git: "https://github.com/AdaN6/PokeFight_frontend",
    },
    {
      id: 3,
      title: "Todo's List",
      imageSrc: todos,
      url: "https://to-dos-listss.netlify.app/",
      stack: [javascript, html, css, tailwind],
      git: "https://github.com/Quantumminded/To-do-list",
    },
    {
      id: 4,
      title: "Val piccola",
      imageSrc: valpiccola,
      url: "https://www.valpiccola.com/it",
      stack: [html, css, svelte, tailwind, strapi],
      git: "https://github.com/Valpiccola",
    },
  ];

  return (
    <div className="w-full">
      <div className="md:px-10 text-center  ">
        {/* Title & desciption */}
        <h2 className="text-5xl md:text-7xl tracking-wider uppercase text-blue-600 dark:text-teal-400 font-bold text-center">
          portfolio
        </h2>
        <p className="py-4 mx-auto max-w-lg text-center dark:text-gray-200">
          While only that hauntedtell many purple no lent cushions more heart.
          Soul cushions the still if i, hath lamplight mortals the rapping have
          me and.
        </p>
        {/*Cards */}
        {/* <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-20 my-6"> */}
        <div className=""> 
        <Swiper 
          modules={[Navigation, Pagination, Mousewheel, A11y]}
          mousewheel
          navigation
          pagination={{ clickable: true }}
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          className=""
          
        >
          
          {portfolios.map(({ id, title, imageSrc, url, stack, git }) => (
            <SwiperSlide className="" >
              <div key={id} className="cursor-pointer ">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <div className="wrapper bg-transparent antialiased text-gray-900 ">
                    <div className="md:px-8">
                      <div className="rounded-xl object-contain ">
                        <Image
                          src={imageSrc}
                          alt={title}
                          // height="1300"
                          // className="w-full  object-fill object-center rounded-lg shadow-md"
                          className="rounded-lg shadow-md"
                        />
                      </div>

                      <div className="relative px-4 -mt-16">
                        <div className="bg-white p-6 rounded-lg shadow-xl mt-4 shadow-blue-300 dark:shadow-teal-300">
                          <div className="p-4">
                            <h2 className="mt-2 mb-2  font-bold text-center">
                              {title}
                            </h2>
                            <p className="text-sm">
                              Cras justo odio, dapibus ac facilisis in, egestas
                              eget quam. Donec ullamcorper nulla non metus
                              auctor fringilla. Cras justo odio, dapibus ac
                              facilisis in, egestas eget quam. Donec ullamcorper
                              nulla non metus auctor fringilla.
                            </p>
                          </div>
                          <div className="py-4 border-t border-b text-xs text-gray-700 border-blue-400 dark:border-teal-400">
                            <ul className="flex justify-center gap-8 ">
                              {stack.map((item, index) => (
                                <li className=" " key={index}>
                                  {/* <motion.button
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.9 }}
                                > */}
                                  <Image
                                    src={item}
                                    width="44px"
                                    height="44px"
                                    alt={title}
                                    className=""
                                  />
                                  {/* </motion.button> */}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className=" flex items-center justify-center align-middle text-sm text-gray-600 gap-8 p-3">
                            <div className="flex items-center justify-center rounded-full shadow-md shadow-blue-500 dark:shadow-teal-300 hover:scale-105 duration-200 p-3 cursor-pointer">
                              <Link href={git} target="_blank">
                                <FaGithub size={25} />
                              </Link>
                            </div>

                            <div className="flex items-center justify-center rounded-full shadow-md shadow-blue-500 dark:shadow-teal-300 hover:scale-105 duration-200 p-3 cursor-pointer">
                              <a href={url} target="_blank">
                                <FiExternalLink size={25} />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.button>
                
              </div>
            </SwiperSlide>
          ))}
          
        </Swiper>
      
        </div>

        {/* </div> */}
        {/* Button to all project */}
        <div className="flex items-center justify-center">
          <Link href="https://github.com/Quantumminded">
            <div className="group flex items-center justify-center my-8 bg-blue-500 dark:bg-teal-400 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
              all projects
              <span className="-rotate-90 duration-100 ease-in group-hover:translate-x-5">
                <MdExpandMore size={25} />
              </span>
            </div>
          </Link>
        </div>
        {/* End button */}
        {/* <AwesomeSlider animation="fallAnimation">
   <div data-src="/nextlogo.png" />
   <div data-src="/twitter-green.png" />
   <div data-src="/unsplash.png" />
  </AwesomeSlider> */}
      </div>
    </div>
  );
};

export default Portfolio;
