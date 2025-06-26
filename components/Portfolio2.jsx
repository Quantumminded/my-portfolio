'use client';


import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import styles from '../styles';
import { exploreWorlds } from '../constants/index';

const Portfolio2 = () => {
  return (
    <section className={`${styles.paddings} bg-gradient-to-br from-gray-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-teal-900`} id="portfolio">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-2 text-center tracking-tight">My Projects</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-10 text-center max-w-2xl">A curated selection of my latest work, built with modern technologies and a passion for great user experiences.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {exploreWorlds.map((project) => (
            <div key={project.id} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col overflow-hidden border border-gray-100 dark:border-gray-700">
              <div className="relative group">
                <img src={project.imgUrl} alt={project.title} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <a href={project.git} target="_blank" rel="noopener noreferrer" className="bg-gray-900 bg-opacity-80 hover:bg-teal-500 text-white p-2 rounded-full">
                    <FaGithub size={20} />
                  </a>
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="bg-gray-900 bg-opacity-80 hover:bg-teal-500 text-white p-2 rounded-full">
                    <FiExternalLink size={20} />
                  </a>
                </div>
              </div>
              <div className="flex-1 flex flex-col p-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.stack.map((tech, idx) => (
                    <span key={idx} className="flex items-center gap-1 bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 px-2 py-1 rounded text-xs font-medium">
                      <img src={tech.imgUrl} alt={tech.name} className="w-4 h-4" />
                      {tech.name}
                    </span>
                  ))}
                </div>
                <div className="mt-auto flex gap-3">
                  <a href={project.git} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 font-medium text-sm">
                    <FaGithub /> <span>Code</span>
                  </a>
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 font-medium text-sm">
                    <FiExternalLink /> <span>Live</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio2;