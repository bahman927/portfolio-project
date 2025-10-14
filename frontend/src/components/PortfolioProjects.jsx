import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Hannah Medical Clinic",
    description:
      "A modern healthcare web app built with React and Node.js. It allows patients to book appointments, manage health records, and access services online.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "JWT Auth"],
    demoLink: "https://hannahmedicalapp-1.onrender.com",
    githubLink: "https://github.com/bahman927/HannahMedicalApp", 
  },
  {
    title: "Photo Gallery App",
    description:
      "A responsive photo-sharing platform developed with React and Django. Users can upload, view, and manage images securely using JWT authentication.",
    techStack: ["React", "Django", "PostgreSQL", "JWT Auth", "AWS S3"],
    demoLink: "https://photo-gallery-frontend-iyvv.onrender.com",
    githubLink: "https://github.com/bahman927/photo-gallery",
  },
];

const PortfolioProjects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-3xl sm:text-4xl font-bold text-center mb-6 text-gray-800 dark:text-gray-100"
        >
          Featured Projects
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center font-bold text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto"
        >
          Here are a few of my recent projects showcasing both front-end and
          back-end expertise.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex flex-col bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-2xl overflow-hidden transition-all"
            >
              

              {/* Info */}
              <div className="flex flex-col  p-6">
                <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base mb-4">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs sm:text-sm bg-blue-100 text-blue-700 dark:bg-blue-800 dark:text-blue-200 px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="mt-auto flex flex-wrap justify-between items-center gap-3">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm sm:text-base text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200 font-medium transition-colors"
                  >
                    <ExternalLink size={18} /> Live Demo
                  </a>

                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm sm:text-base text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white font-medium transition-colors"
                  >
                    <Github size={18} /> GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioProjects;
