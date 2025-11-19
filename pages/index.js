import React, { useState } from "react";
import Head from "next/head";
// import components
import Portfolio2 from "../components/Portfolio2";
import Skills from "../components/Skills";
import Contact from "../components/Contact.new";
import Landing from "../components/Landing";
import Me from "../components/Me";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import AIVisuals from "../components/AIVisuals";
import { motion } from "framer-motion";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""} style={{ fontFamily: "'Inter', 'Poppins', sans-serif", background: darkMode ? "#22223B" : "#F8F9FA" }}>
      <Head>
        <title>Luca Stringhetti Portfolio</title>
        <meta name="Luca Stringhetti Portfolio" content="personal portfolio of luca stringhetti" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      {/* NAVBAR SECTION */}      
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="bg-white px-4 sm:px-6 md:px-20 lg:px-40 dark:bg-gray-900 transition-colors duration-500">
        {/* ABOUT SECTION */}
        <motion.section
          id="home"
          className="section-spacing flex flex-col lg:flex-row justify-center items-center lg:gap-40"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Landing />
        </motion.section>
        {/* SKILL SECTION */}
        <motion.section
          id="skills"
          className="section-spacing"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Skills/>
        </motion.section>
        {/* ME SECTION */}
        <motion.section
          id="about"
          className="section-spacing"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Me  />
        </motion.section>
        {/* AI VISUALS SECTION */}
        {/* <motion.section
          className="md:p-10 md:py-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.35 }}
        >
          <AIVisuals />
        </motion.section> */}
        {/* PORFOLIO SECTION */}
        <motion.section
          id="portfolio"
          className="section-spacing"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Portfolio2 />
        </motion.section>
        {/* CONTACT SECTION */}
        <motion.section
          id="contact"
          className="section-spacing"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Contact />
        </motion.section>
        {/* FOOTER SECTION */}
        <section className="bg-white dark:bg-gray-900">
          <Footer/>
        </section>
      </main>
      <style jsx global>{`
        body {
          font-family: 'Inter', 'Poppins', sans-serif;
          background: #F8F9FA;
          color: #22223B;
        }
        .dark body {
          background: #22223B;
          color: #F8F9FA;
        }
        h1, h2, h3, h4, h5 {
          font-family: 'Poppins', 'Montserrat', sans-serif;
        }
      `}</style>
    </div>
  );
}
