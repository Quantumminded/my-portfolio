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

export const exploreWorlds = [
    {
      id: '1',
      imgUrl: '/global.png',
      title: 'GlobalSpeak',
      url: "https://globalspeak.netlify.app/",
      stack: ['/css.png', '/nextjs.png', '/html.png', '/bootstrap.png', '/stripe.png'],
      git: "https://github.com/Quantumminded/front-end",
    },
    {
      id: '2',
      imgUrl: '/pokedex.png',
      title: 'Pokedex',
      url: "https://sparkling-manatee-860534.netlify.app/",
      stack: [reactImage, javascript, node],
      git: "https://github.com/AdaN6/PokeFight_frontend",
    },
    {
      id: '3',
      imgUrl: '/todos.png',
      title: 'Todos List',
      url: "https://to-dos-listss.netlify.app/",
      stack: [javascript, html, css, tailwind],
      git: "https://github.com/Quantumminded/To-do-list",
    },
    {
      id: '4',
      imgUrl: '/valpiccola.png',
      title: 'Valpiccola',
      url: "https://www.valpiccola.com/it",
      stack: [html, css, svelte, tailwind, strapi],
      git: "https://github.com/Valpiccola",
    },
    {
      id: 'world-5',
      imgUrl: '/planet-05.png',
      title: 'Hawkins Labs',
    },
  ];
  
  export const startingFeatures = [
    'Find a world that suits you and you want to enter',
    'Enter the world by reading basmalah to be safe',
    'No need to beat around the bush, just stay on the gas and have fun',
  ];
  
  export const newFeatures = [
    {
      imgUrl: '/vrpano.svg',
      title: 'A new world',
      subtitle:
          'we have the latest update with new world for you to try never mind',
    },
    {
      imgUrl: '/headset.svg',
      title: 'More realistic',
      subtitle:
          'In the latest update, your eyes are narrow, making the world more realistic than ever',
    },
  ];
  
  export const insights = [
    {
      imgUrl: '/planet-07.png',
      title: 'The launch of the Metaverse makes Elon musk ketar-ketir',
      subtitle:
          'Magna etiam tempor orci eu lobortis elementum nibh tellus molestie. Diam maecenas sed enim ut sem viverra alique.',
    },
    {
      imgUrl: '/planet-07.png',
      title: '7 tips to easily master the madness of the Metaverse',
      subtitle:
          'Vitae congue eu consequat ac felis donec. Et magnis dis parturient montes nascetur ridiculus mus. Convallis tellus id interdum',
    },
    {
      imgUrl: '/planet-08.png',
      title: 'With one platform you can explore the whole world virtually',
      subtitle:
          'Quam quisque id diam vel quam elementum. Viverra nam libero justo laoreet sit amet cursus sit. Mauris in aliquam sem',
    },
  ];