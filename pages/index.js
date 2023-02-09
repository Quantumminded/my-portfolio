import React, { useState } from "react";

import Head from "next/head";

// import components
import Portfolio2 from "../components/Portfolio2";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Landing from "../components/Landing";
import Me from "../components/Me";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Luca Stringhetti Portfolio</title>
        <meta name="Luca Stringhetti Portfolio" content="personal portfolio of luca stringhetti" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      {/* NAVBAR SECTION */}      
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <main className="bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40 ">
        {/* ABOUT SECTION */}
        <section id="home" className="sm:flex-row md-flex-row lg:flex py-28  justify-center lg:gap-40" >
          <Landing />
        </section>

        {/* SKILL SECTION */}
        <section id="skills" className="md:p-10 md:py-20">
          <Skills/>
        </section>

        {/* ME SECTION */}
        <section id="about" className="pt-28">
          <Me  />
        </section>

        {/* PORFOLIO SECTION */}
        <section id="portfolio" className="md:p-10 md:py-20 ">
          <Portfolio2 />
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="pb-10 pt-20">
          <Contact />
        </section>

        {/* FOOTER SECTION */}
        <section className="bg-white dark:bg-gray-900">
          <Footer/>
        </section>
      </main>
    </div>
  );
}
