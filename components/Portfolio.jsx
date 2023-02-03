import React from "react";

import { MdExpandMore } from "react-icons/md";

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

import Link from "next/link";
import Image from "next/image";

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
    <div id="portfolio" className="w-full">
      <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left ">
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
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-20 my-6">
          {portfolios.map(({ id, title, imageSrc, url, stack, git }) => (
            <Link key={id} href={`${url}`}>
            
                <div className="wrapper bg-white dark:bg-gray-900 antialiased text-gray-900">
                  <div>
                    <Image
                      src={imageSrc}
                      alt={title}
                      height="1300px"
                      className="w-full object-fill object-center rounded-lg shadow-md duration-700 
                      hover:scale-110"
                    />

                    <div className="relative px-4 -mt-16  ">
                      <div className="bg-white p-6 rounded-lg shadow-lg mt-4">
                        <div className="flex items-baseline">
                          <span className="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                            New
                          </span>
                          <div className="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
                            2 baths &bull; 3 rooms
                          </div>
                        </div>

                        <div className="p-4">
                          <span className="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">
                            Highlight
                          </span>
                          <h2 className="mt-2 mb-2  font-bold">
                            {title}
                          </h2>
                          <p className="text-sm">
                            Cras justo odio, dapibus ac facilisis in, egestas
                            eget quam. Donec ullamcorper nulla non metus auctor
                            fringilla. Cras justo odio, dapibus ac facilisis in, egestas
                            eget quam. Donec ullamcorper nulla non metus auctor
                            fringilla.
                          </p>
                          
                        </div>
                        <div className="py-4 border-t border-b text-xs text-gray-700">
                        <ul className="flex justify-center gap-8 ">
                    {stack.map((item, index) => (
                      <li className=" ">
                        <Image
                          key={index}
                          src={item}
                          width="44px"
                          height="44px"
                          alt={title}
                          className="duration-700 
                          hover:scale-110"
                        />
                      </li>
                    ))}
                  </ul>
                        </div>
                        <div className="p-4 flex items-center text-sm text-gray-600">
                          <svg
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 fill-current text-yellow-500"
                          >
                            <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
                          </svg>
                          <svg
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 fill-current text-yellow-500"
                          >
                            <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
                          </svg>
                          <svg
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 fill-current text-yellow-500"
                          >
                            <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
                          </svg>
                          <svg
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 fill-current text-yellow-500"
                          >
                            <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
                          </svg>
                          <svg
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 fill-current text-gray-400"
                          >
                            <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
                          </svg>
                          <span className="ml-2">34 Bewertungen</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </Link>
          ))}
        </div>
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
      </div>
    </div>
  );
};

export default Portfolio;
