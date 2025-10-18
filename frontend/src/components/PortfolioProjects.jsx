import React, { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Hannah Medical Clinic",
    description:
      "A full-stack healthcare management platform built with React and Node.js that streamlines appointment scheduling, patient communication, and electronic medical record management. I designed and implemented a secure REST API using Express and MongoDB, integrated JWT-based authentication for patient and admin access, and developed an intuitive, mobile-friendly frontend with React. The system includes role-based dashboards, appointment reminders, and data validation to ensure smooth clinic operations and secure handling of medical data.",
    techStack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT Auth",
      "Tailwind CSS",
    ],
    demoLink: "https://hannahmedicalapp-1.onrender.com",
    githubLink: "https://github.com/bahman927/HannahMedicalApp",
  },
  {
    title: "Photo Gallery",
    description:
       "A responsive photo-sharing platform that enables users to upload, manage, and explore high-quality images. Built with React for the frontend and Django REST Framework for the backend, the app features JWT-based authentication and secure media handling with AWS S3. I implemented user-specific image management, optimized image loading for performance, and designed a modern, interactive UI using Tailwind CSS. This project demonstrates my ability to integrate cloud storage, RESTful APIs, and authentication seamlessly within a scalable full-stack architecture.",
    techStack: [
      "React",
      "Django REST Framework",
      "PostgreSQL",
      "JWT Auth",
      "AWS S3",
      "Tailwind CSS",
    ],
    demoLink: "https://photo-gallery-frontend-iyvv.onrender.com",
    githubLink: "https://github.com/bahman927/photo-gallery",
  },
];

const PortfolioProjects = () => {
  const [showProjects, setShowProjects] = useState(false);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6 text-gray-800 dark:text-gray-100">
          Featured Projects
        </h2>

        <p className="text-center font-bold text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          Here are a few of my recent projects showcasing full-stack expertise.
        </p>

        {/* Button to trigger animation */}
        <div className="text-center mb-10">
          <button
            onClick={() => setShowProjects(true)}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-500"
          >
            See My Works
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {projects.map((project, index) => (
<motion.div
  key={index}
  initial={{ opacity: 0, y: 50 }} // entrance animation
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 2, delay: index * 0.3, ease: "easeInOut" }}
  whileHover={{
    background:
      "linear-gradient(to bottom, #38bdf8, #06b6d4, #064e3b)",
    backgroundSize: "100% 200%",
    backgroundPosition: ["0% 0%", "0% 100%"],
    transition: {
      duration: 4,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "mirror",
    },
  }}
  className="rounded-2xl shadow-md overflow-hidden p-6 flex flex-col justify-between min-h-[350px] transition-all duration-700 text-gray-800 dark:text-gray-100"
  style={{
    backgroundColor: "#e5e7eb", // gray fallback
  }}
>
  
  <div className="bg-white/80 dark:bg-gray-900/70 p-4 rounded-lg flex flex-col h-full">
    <h3 className="text-xl sm:text-2xl font-semibold mb-2">
      {project.title}
    </h3>

    <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base mb-4 leading-relaxed">
      {project.description}
    </p>

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
  </div>

  <div className="mt-auto flex justify-between items-center">
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
</motion.div>




          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioProjects;
