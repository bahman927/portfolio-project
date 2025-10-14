import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
const PortfolioHeader = () => {
  const [visible, setVisible] = useState(true);

  const handleViewWork = () => {
    setVisible(false);
    // scroll smoothly to projects
    setTimeout(() => {
      const section = document.getElementById("projects");
      section?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.section
          id="home"
          initial={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center items-center text-center
                     bg-gradient-to-b from-blue-50 via-white to-gray-100
                     dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 px-6 py-20"
        >
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 
                       text-gray-900 dark:text-white"
          >
            Hi, I’m Bahman Dorand 👋
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-xl"
          >
            Full-Stack Developer specializing in modern web applications.
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={handleViewWork}
            className="inline-block bg-blue-500 text-white font-semibold 
                       px-6 py-3 rounded-full shadow-md hover:bg-blue-600 
                       transition-colors duration-300"
          >
            View My Work ↓
          </motion.button>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default PortfolioHeader;
