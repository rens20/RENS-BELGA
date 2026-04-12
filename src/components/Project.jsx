import React, { useState } from 'react';
import {
  FaShoppingCart,
  FaTooth,
  FaQrcode,
  FaCar,
  FaSeedling,
  FaBoxes,
  FaExternalLinkAlt,
  FaGithub,
  FaRocket,
  FaPassport,
  FaRobot,
  FaShieldAlt
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import Maria from "../assets/Maria.png";
import Cat from "../assets/Cat.png";
import Video from "../assets/Video.png";
import Movie from "../assets/Movie.png";
import Ecommer from "../assets/Ecommer.jpeg";
import Vote from "../assets/Vote.png";
import Auto from "../assets/Auto.png";
import Record from "../assets/Record.png";
import Inventory from "../assets/Inventory.jpeg";
import Dental from "../assets/Dental.png";
import pineapple from "../assets/pineapple.jpg";
import capstone from "../assets/capstone12.png";
import ecommer from "../assets/ecomer-2.png";
import framework  from "../assets/framework.jpg";
import Food from "../assets/food-ordering.jpg";
import jsut10 from "../assets/just10minute.jpg";
import learn from "../assets/learnInsure.jpg";
import lost from "../assets/loast and found.jpg";
import gradlink from "../assets/gradlink.jpg";
import ai from "../assets/ai-ama.jpg";
import scheduling from "../assets/scheduling-ssytem.jpg";
import visa from "../assets/visa.png";
import posWeb from "../assets/pos-web.png";
import ucc from "../assets/ucc.png";
import med from "../assets/med.png";

const Projects = () => {
  const [expandedProjects, setExpandedProjects] = useState({});

  const toggleExpanded = (projectId) => {
    setExpandedProjects(prev => ({
      ...prev,
      [projectId]: !prev[projectId]
    }));
  };

  const projects = [
    {
      id: 1,
      title: "HP Performance Exhaust E-commerce System",
      description: "The HP Performance Exhaust E-commerce System is a capstone project designed to provide an efficient and user-friendly platform for managing and selling performance exhaust products. Built using PHP, Bootstrap, MySQLi, and AI, the system offers seamless functionality for both clients and administrators.",
      image: ecommer,
      icon: <FaShoppingCart className="text-blue-400" size={24} />,
      tags: ["PHP", "Bootstrap", "MySQL", "AI"]
    },
    {
      id: 2,
      title: "Dental Clinic Appointment System",
      description: "The Dental Clinic Appointment Management System is an innovative solution designed to streamline the process of setting and managing appointments. This system is built using PHP, Bootstrap, MySQLi, and AI, providing a seamless experience for both users and administrators.",
      image: Dental,
      icon: <FaTooth className="text-blue-400" size={24} />,
      tags: ["PHP", "Bootstrap", "MySQL", "Appointments"]
    },
    {
      id: 3,
      title: "Attendance Monitoring System",
      description: "A QR code-based attendance monitoring system for efficient student tracking. Features real-time email notifications, user authentication, and comprehensive attendance data management. Built with PHP, MySQL, and Tailwind CSS.",
      image: capstone,
      icon: <FaQrcode className="text-blue-400" size={24} />,
      tags: ["PHP", "MySQL", "Tailwind", "QR Code"]
    },
    {
      id: 4,
      title: "RPJ Insured Auto",
      description: "An insurance agency platform specializing in automobile insurance. Features user authentication, insurance processing, and a modern responsive interface built with PHP, MySQL, and Tailwind CSS.",
      image: Auto,
      icon: <FaCar className="text-blue-400" size={24} />,
      tags: ["PHP", "MySQL", "Tailwind", "Insurance"]
    },
    {
      id: 5,
      title: "RJ Pineapple Farm",
      description: "An e-commerce platform for a pineapple farm featuring real-time chat, order tracking, and admin analytics. Includes visualized revenue graphs and comprehensive order management.",
      image: pineapple,
      icon: <FaSeedling className="text-blue-400" size={24} />,
      tags: ["PHP", "MySQL", "E-commerce", "Analytics"]
    },
    {
      id: 6,
      title: "Inventory Management System",
      description: "A comprehensive Sari-Sari Store inventory management solution built with PHP, MySQL, Tailwind CSS, HTML, and AJAX for efficient product stock handling.",
      image: Inventory,
      icon: <FaBoxes className="text-blue-400" size={24} />,
      tags: ["PHP", "MySQL", "Tailwind", "AJAX"]
    },
    {
      id: 7,
      title: "Food Ordering and Delivery System",
      description: "A full-stack food ordering platform with menu browsing, cart, checkout, and order tracking built using PHP (Laravel), Tailwind CSS, JavaScript, and SQL.",
      image: Food,
      icon: <FaShoppingCart className="text-blue-400" size={24} />,
      tags: ["PHP", "Laravel", "Tailwind CSS", "JavaScript", "SQL"]
    },
    {
      id: 8,
      title: "Framework Starter (Laravel CRUD Template)",
      description: "A reusable Laravel-based CRUD starter with authentication, role-based access, and responsive UI using Tailwind CSS and Alpine/JavaScript backed by SQL.",
      image: framework,
      icon: <FaBoxes className="text-blue-400" size={24} />,
      tags: ["PHP", "Laravel", "Tailwind CSS", "JavaScript", "SQL"]
    },
    {
      id: 9,
      title: "Just 10 Minute",
      description: "A productivity web app that lets users create quick 10-minute tasks/sessions with progress tracking and history, powered by Laravel, Tailwind, JavaScript, and SQL.",
      image: jsut10,
      icon: <FaBoxes className="text-blue-400" size={24} />,
      tags: ["PHP", "Laravel", "Tailwind CSS", "JavaScript", "SQL"]
    },
    {
      id: 10,
      title: "LearnInsure Platform",
      description: "An insurance learning portal featuring courses, quizzes, and user dashboards built with Laravel, Tailwind CSS, JavaScript, and SQL.",
      image: learn,
      icon: <FaBoxes className="text-blue-400" size={24} />,
      tags: ["PHP", "Laravel", "Tailwind CSS", "JavaScript", "SQL"]
    },
    {
      id: 11,
      title: "Lost and Found System",
      description: "A campus lost-and-found management system that lets users post, search, and claim items with admin verification using Laravel, Tailwind CSS, JavaScript, and SQL.",
      image: lost,
      icon: <FaQrcode className="text-blue-400" size={24} />,
      tags: ["PHP", "Laravel", "Tailwind CSS", "JavaScript", "SQL"]
    },
    {
      id: 12,
      title: "GradLink Alumni Portal",
      description: "An alumni networking portal for graduates with profiles, job board, and messaging built using Laravel, Tailwind CSS, JavaScript, and SQL.",
      image: gradlink,
      icon: <FaBoxes className="text-blue-400" size={24} />,
      tags: ["PHP", "Laravel", "Tailwind CSS", "JavaScript", "SQL"]
    },
    {
      id: 13,
      title: "AI AMA Chatbot",
      description: "An 'Ask Me Anything' chatbot interface integrated into a Laravel app with Tailwind CSS, JavaScript interactions, and SQL logging for conversations.",
      image: ai,
      icon: <FaBoxes className="text-blue-400" size={24} />,
      tags: ["PHP", "Laravel", "Tailwind CSS", "JavaScript", "SQL"]
    },
    {
      id: 14,
      title: "Scheduling System",
      description: "A scheduling and calendar management system with appointments, reminders, and role-based access built using Laravel, Tailwind CSS, JavaScript, and SQL.",
      image: scheduling,
      icon: <FaBoxes className="text-blue-400" size={24} />,
      tags: ["PHP", "Laravel", "Tailwind CSS", "JavaScript", "SQL"]
    },
    {
      id: 15,
      title: "Visa Powered by AI",
      description: "A revolutionary MERN stack visa application system with AI-powered security features, real-time processing, and intelligent fraud detection capabilities. Features secure registration, credential validation, and threat detection.",
      image: visa,
      icon: <FaRobot className="text-blue-400" size={24} />,
      tags: ["MongoDB", "Express.js", "React", "Node.js", "TensorFlow.js", "AI", "JWT"]
    },
    {
      id: 16,
      title: "MERN Stack POS System",
      description: "A comprehensive Point of Sale system built with MERN stack and Sass for styling. Features real-time inventory management, sales tracking, customer management, and advanced reporting with responsive design and modern UI/UX. Includes barcode scanning, receipt printing, and multi-store support.",
      image: posWeb,
      icon: <FaShoppingCart className="text-green-400" size={24} />,
      tags: ["MongoDB", "Express.js", "React", "Node.js", "Sass", "Redux", "Socket.io", "Barcode"]
    },
    {
      id: 17,
      title: "UCC School Clinic with AI",
      description: "A comprehensive school clinic management system with AI integration for health monitoring and predictive analytics. Built with React, TypeScript, and Firebase, featuring appointment scheduling, medical records management, AI-powered health insights, and real-time notifications for parents and staff.",
      image: ucc,
      icon: <FaTooth className="text-blue-400" size={24} />,
      tags: ["React", "TypeScript", "Firebase", "AI/ML", "Healthcare", "Real-time", "Analytics"]
    },
    {
      id: 18,
      title: "Philippine Pharmacy Franchising System",
      description: "A comprehensive franchising management system for pharmacy chains in the Philippines. Built with Native PHP, MySQL, and Bootstrap, featuring franchise management, inventory tracking, sales analytics, multi-store operations, and automated reporting for franchise owners and administrators.",
      image: med,
      icon: <FaSeedling className="text-green-400" size={24} />,
      tags: ["Native PHP", "MySQL", "Bootstrap", "Franchising", "Pharmacy", "Analytics", "Multi-store"]
    }
  ];

  return (
    <div name="project" className="relative w-full py-20 bg-gradient-to-b from-gray-900 via-indigo-900/10 to-gray-900">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-60 left-32 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-60 right-32 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '4s' }} />
      </div>
      
      <div className="section-container relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <h2 className="heading-primary mb-4">
              <span className="flex items-center justify-center gap-3">
                <FaRocket className="text-blue-500" />
                <span className="text-gradient animate-gradient">Projects</span>
                <FaRocket className="text-purple-500" />
              </span>
            </h2>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="paragraph max-w-3xl mx-auto"
          >
            Here are some of my recent projects that showcase my skills and experience
            in web development and system design.
          </motion.p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 + 0.3 }}
              viewport={{ once: true }}
              className="glass group hover-lift rounded-xl overflow-hidden shadow-xl"
              whileHover={{ y: -8 }}
            >
              {/* Enhanced Image Container */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 + 0.4 }}
                viewport={{ once: true }}
                className="relative overflow-hidden h-48 bg-gradient-to-br from-gray-800 to-gray-700"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Enhanced overlay with actions */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent flex items-center justify-center gap-4"
                >
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-blue-500/20 backdrop-blur-sm rounded-full border border-blue-500/50 text-blue-400 hover:bg-blue-500/30 transition-colors"
                  >
                    <FaExternalLinkAlt size={16} />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-purple-500/20 backdrop-blur-sm rounded-full border border-purple-500/50 text-purple-400 hover:bg-purple-500/30 transition-colors"
                  >
                    <FaGithub size={16} />
                  </motion.button>
                </motion.div>
                
                {/* Project number badge */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-blue-500/20 backdrop-blur-sm rounded-full border border-blue-500/50 flex items-center justify-center text-blue-400 text-sm font-bold">
                  {project.id}
                </div>
              </motion.div>

              {/* Enhanced Content */}
              <div className="p-6">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 + 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 mb-3"
                >
                  <motion.div
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                    className="text-blue-500"
                  >
                    {project.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors line-clamp-1">
                    {project.title}
                  </h3>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.05 + 0.6 }}
                  viewport={{ once: true }}
                  className="mb-4"
                >
                  <p className={`text-gray-300 text-sm leading-relaxed ${
                    expandedProjects[project.id] ? '' : 'line-clamp-2'
                  }`}>
                    {project.description}
                  </p>
                  
                  {/* Read More/Read Less Button */}
                  {project.description.length > 150 && (
                    <motion.button
                      onClick={() => toggleExpanded(project.id)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-blue-400 text-sm font-medium hover:text-blue-300 transition-colors mt-2 flex items-center gap-1"
                    >
                      {expandedProjects[project.id] ? (
                        <>
                          <span>Read Less</span>
                          <motion.div
                            animate={{ rotate: 180 }}
                            transition={{ duration: 0.3 }}
                          >
                            <FaRocket size={12} />
                          </motion.div>
                        </>
                      ) : (
                        <>
                          <span>Read More</span>
                          <FaRocket size={12} />
                        </>
                      )}
                    </motion.button>
                  )}
                </motion.div>

                {/* Enhanced tags with better layout */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag, tagIndex) => (
                    <motion.span
                      key={tagIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.05 + tagIndex * 0.05 + 0.7 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05, y: -1 }}
                      className="px-2 py-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-400 text-xs rounded-full
                               border border-blue-500/20 hover:border-blue-400/50 transition-all duration-300 cursor-default"
                    >
                      {tag}
                    </motion.span>
                  ))}
                  {project.tags.length > 3 && (
                    <motion.span
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.05 + 0.8 }}
                      viewport={{ once: true }}
                      className="px-2 py-1 bg-gray-700/50 text-gray-400 text-xs rounded-full"
                    >
                      +{project.tags.length - 3}
                    </motion.span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;

