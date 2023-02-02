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
      stack: [ javascript, html, css, tailwind],
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
        <h2 className="text-5xl md:text-7xl tracking-wider uppercase text-blue-600 dark:text-teal-400 font-bold text-center">
          portfolio
        </h2>
        <p className="py-4 mx-auto max-w-lg text-center dark:text-gray-200">
          While only that hauntedtell many purple no lent cushions more heart.
          Soul cushions the still if i, hath lamplight mortals the rapping have
          me and.
        </p>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-20 ">
          {portfolios.map(({ id, title, imageSrc, url, stack, git }) => (
            <Link key={id} href={`${url}`}>
              <div className="cursor-pointer group shadow-md shadow-gray-600 overflow-hidden rounded-md dark:bg-white p-3">
                
                <Image
                  src={imageSrc}
                  alt={title}
                  className="rounded-md duration-200
                  hover:scale-110 shadow-lg"
                  height="1000px"
                />
                
                <h2 className="text-center capitalize my-6 font-bold text-2xl duration-200 group-hover:underline underline-offset-4">
                  {title}
                </h2>
                <div>
                  <p className="text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                    quis ut quo dignissimos consequatur nam dolore deleniti, Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                    quis ut quo dignissimos consequatur nam dolore deleniti,Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                  </p>
                </div>
                <h3 className="text-center my-4 font-bold text-lg">Stack used:</h3>
                <div className="py-5 rounded-xl hover:scale-105 ease-in duration-300">
                 <ul className="flex justify-center gap-8">
                  {stack.map((item, index) => (
                    <li>
                    <Image
                      key={index}
                      src={item}
                      width="64px"
                      height="64px"
                      alt={title}
                      className="m-5"
                    />
                    </li>
                  ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-center my-4 font-bold text-lg">
                    Source code
                  </h3>
                  <div className="flex justify-center py-3">
                    <Link href={git}>
                      <FaGithub size={52} />
                    </Link>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

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
      </div>
    </div>
  );
};

export default Portfolio;
