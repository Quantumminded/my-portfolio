// Updated Navbar.jsx component with new design
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BsFillMoonStarsFill } from "react-icons/bs";
import logo from "../public/Logo.png";
import Image from "next/image";
import { 
  FaBars, 
  FaTimes, 
  FaFacebook, 
  FaGithub, 
  FaTwitter, 
  FaLinkedin, 
} from "react-icons/fa";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#skills", label: "Skills" },
  { href: "#about", label: "About" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#contact", label: "Contact" },
];

const Navbar = ({ darkMode, setDarkMode }) => {
  const [navigation, setNavigation] = useState(false);
  const [pageScroll, setPageScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => setPageScroll(window.scrollY >= 90);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-500 ${
        pageScroll ? "bg-white/90 dark:bg-gray-900/90 shadow-lg" : "bg-white/70 dark:bg-gray-900/80"
      } backdrop-blur-lg flex items-center justify-between px-6 py-4`}
      style={{
        borderRadius: "0 24px 24px",
        fontFamily: "'Poppins', 'Montserrat', sans-serif",
      }}
    >
      {/* Logo or Name */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="h1 font-extrabold tracking-wide text-indigo-600 dark:text-indigo-400"
      >
        Luca Stringhetti
      </motion.div>
      {/* Desktop Navigation */}
      <ul className="hidden md:flex gap-6 items-center">
        {navLinks.map((link) => (
          <motion.li
            key={link.href}
            whileHover={{ scale: 1.1 }}
            className="relative"
          >
            <a
              href={link.href}
              className="a font-semibold text-gray-700 dark:text-gray-100 px-2 py-1 transition-colors duration-200 hover:text-indigo-500 dark:hover:text-indigo-300"
              style={{ letterSpacing: "0.03em" }}
            >
              {link.label}
              <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-indigo-500 scale-x-0 hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </a>
          </motion.li>
        ))}
        {/* Dark mode toggle */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setDarkMode(!darkMode)}
          className="ml-4 rounded-full bg-indigo-500 dark:bg-indigo-400 text-white px-3 py-1 shadow-md transition-colors duration-300"
          aria-label="Toggle dark mode"
        >
          {darkMode ? "🌙" : "☀️"}
        </motion.button>
      </ul>
      {/* Mobile Hamburger */}
      <div className="md:hidden flex items-center">
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setNavigation(!navigation)}
          className="text-indigo-600 dark:text-indigo-400 text-2xl focus:outline-none"
          aria-label="Open menu"
        >
          {navigation ? <FaTimes /> : <FaBars />}
        </motion.button>
      </div>
      {/* Mobile Menu */}
      <AnimatePresence>
        {navigation && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 w-3/4 max-w-xs h-screen bg-white dark:bg-gray-900 shadow-lg z-50 flex flex-col items-center pt-24 gap-8"
          >
            <ul className="flex flex-col gap-6 items-center w-full">
              {navLinks.map((link) => (
                <li key={link.href} className="w-full text-center">
                  <a
                    href={link.href}
                    className="a block font-semibold text-gray-700 dark:text-gray-100 px-4 py-2 transition-colors duration-200 hover:text-indigo-500 dark:hover:text-indigo-300"
                    onClick={() => setNavigation(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <button
                onClick={() => {
                  setDarkMode(!darkMode);
                  setNavigation(false);
                }}
                className="mt-4 rounded-full bg-indigo-500 dark:bg-indigo-400 text-white px-4 py-2 shadow-md transition-colors duration-300"
                aria-label="Toggle dark mode"
              >
                {darkMode ? "🌙" : "☀️"}
              </button>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
