import React from "react";
import { motion } from "framer-motion";

const AIVisuals = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="w-full py-12 px-4 bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-indigo-700 dark:to-purple-800 text-white text-center rounded-3xl mt-10"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">AI-Generated Visuals</h2>
        <p className="text-lg mb-8">
          Explore the latest AI-generated visuals that showcase the future of design.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 backdrop-blur-lg rounded-xl p-6 shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-2">Creative Concepts</h3>
            <p>AI-generated art and design concepts that push the boundaries of creativity.</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 backdrop-blur-lg rounded-xl p-6 shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-2">Interactive Experiences</h3>
            <p>Immersive experiences created with AI that respond to user interactions.</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 backdrop-blur-lg rounded-xl p-6 shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-2">Dynamic Content</h3>
            <p>Real-time generated content that adapts to user preferences and behavior.</p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default AIVisuals;