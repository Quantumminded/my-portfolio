import React from "react";

import { MdExpandMore } from "react-icons/md";

import global from "../public/assets/portfolio/global.png"
import pokedex from "../public/assets/portfolio/pokedex.png"
import todos from "../public/assets/portfolio/todos.png"
import valpiccola from "../public/assets/portfolio/valpiccola.png"



import Link from "next/link";
import Image from "next/image";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      title: "GlobalSpeak",
      imageSrc: global,
      url: "https://globalspeak.netlify.app/",
    },
    {
      id: 2,
      title: "Pokedex",
      imageSrc: pokedex,
      url: "https://sparkling-manatee-860534.netlify.app/",
    },
    {
      id: 3,
      title: "Todo's List",
      imageSrc: todos,
      url: "https://to-dos-listss.netlify.app/",
    },
    {
      id: 4,
      title: "Val piccola",
      imageSrc: valpiccola,
      url: "https://www.valpiccola.com/it",
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

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-20">
          {portfolios.map(({ id, title, imageSrc, url }) => (
            <Link key={id} href={`${url}`}>
              <div className="cursor-pointer group shadow-md shadow-gray-600 overflow-hidden rounded-md">
                <Image
                  src={imageSrc}
                  alt={title}
                  className="rounded-md duration-200
                  hover:scale-110"
                />
                <h2 className="text-center text-base capitalize my-4 font-light duration-200 group-hover:underline underline-offset-4">
                  {title}
                </h2>
                <h3 className="text-center my-4">Description</h3>
                <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quis ut quo dignissimos consequatur nam dolore deleniti, </p>
                <h3 className="text-center my-3">Stack used</h3>
                <ul className="text-center mb-5">
                  <li>Html</li>
                  <li>CSS</li>
                  <li>Tailwind</li>
                  <li>React</li>
                </ul>
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
