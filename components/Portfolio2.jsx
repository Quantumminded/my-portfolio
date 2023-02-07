'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

import styles from '../styles';
import { exploreWorlds } from '../constants/index';
import { staggerContainer } from '../utils/motion';
import ExploreCard from './ExploreCard';
import {TypingText, TitleText } from './CustomText'




const Portfolio2 = () => {
  const [active, setActive] = useState('4');
 console.log(exploreWorlds)
  return (
    <section className={`${styles.paddings}`} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| Portfolio" textStyles="text-center dark:text-white" />
        <TitleText
          className='text-black'
          title={<>Have a look at my projects</>}
          textStyles="text-center"
        />
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {exploreWorlds.map((world, index) => (
            <ExploreCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};
export default Portfolio2;