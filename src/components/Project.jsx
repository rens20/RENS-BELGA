import { useMemo, useState } from 'react';
import { FaExternalLinkAlt, FaGithub, FaPlus, FaMinus } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Auto from '../assets/Auto.png';
import Inventory from '../assets/Inventory.jpeg';
import Dental from '../assets/Dental.png';
import pineapple from '../assets/pineapple.jpg';
import capstone from '../assets/capstone12.png';
import ecommer from '../assets/ecomer-2.png';
import framework from '../assets/framework.jpg';
import Food from '../assets/food-ordering.jpg';
import jsut10 from '../assets/just10minute.jpg';
import learn from '../assets/learnInsure.jpg';
import lost from '../assets/loast and found.jpg';
import gradlink from '../assets/gradlink.jpg';
import ai from '../assets/ai-ama.jpg';
import scheduling from '../assets/scheduling-ssytem.jpg';
import visa from '../assets/visa.png';
import posWeb from '../assets/pos-web.png';
import ucc from '../assets/ucc.png';
import med from '../assets/med.png';

const projects = [
  {
    id: 1,
    title: 'HP Performance Exhaust E-commerce System',
    category: 'E-commerce',
    description:
      'A capstone project providing an efficient, user-friendly platform for managing and selling performance exhaust products. Built with PHP, Bootstrap, MySQLi and AI, offering seamless functionality for both clients and administrators.',
    image: ecommer,
    tags: ['PHP', 'Bootstrap', 'MySQL', 'AI'],
  },
  {
    id: 2,
    title: 'Dental Clinic Appointment System',
    category: 'Healthcare',
    description:
      'An appointment management system that streamlines setting and managing clinic appointments. Built with PHP, Bootstrap, MySQLi and AI for a seamless experience for users and administrators alike.',
    image: Dental,
    tags: ['PHP', 'Bootstrap', 'MySQL', 'Appointments'],
  },
  {
    id: 3,
    title: 'Attendance Monitoring System',
    category: 'Education',
    description:
      'A QR code-based attendance monitoring system for efficient student tracking. Features real-time email notifications, user authentication and comprehensive attendance data management.',
    image: capstone,
    tags: ['PHP', 'MySQL', 'Tailwind', 'QR Code'],
  },
  {
    id: 4,
    title: 'RPJ Insured Auto',
    category: 'Insurance',
    description:
      'An insurance agency platform specialising in automobile insurance. Features user authentication, insurance processing and a modern responsive interface built with PHP, MySQL and Tailwind CSS.',
    image: Auto,
    tags: ['PHP', 'MySQL', 'Tailwind', 'Insurance'],
  },
  {
    id: 5,
    title: 'RJ Pineapple Farm',
    category: 'E-commerce',
    description:
      'An e-commerce platform for a pineapple farm featuring real-time chat, order tracking and admin analytics, including visualised revenue graphs and comprehensive order management.',
    image: pineapple,
    tags: ['PHP', 'MySQL', 'E-commerce', 'Analytics'],
  },
  {
    id: 6,
    title: 'Inventory Management System',
    category: 'Operations',
    description:
      'A comprehensive Sari-Sari Store inventory management solution built with PHP, MySQL, Tailwind CSS, HTML and AJAX for efficient product stock handling.',
    image: Inventory,
    tags: ['PHP', 'MySQL', 'Tailwind', 'AJAX'],
  },
  {
    id: 7,
    title: 'Food Ordering and Delivery System',
    category: 'E-commerce',
    description:
      'A full-stack food ordering platform with menu browsing, cart, checkout and order tracking built using Laravel, Tailwind CSS, JavaScript and SQL.',
    image: Food,
    tags: ['PHP', 'Laravel', 'Tailwind CSS', 'JavaScript', 'SQL'],
  },
  {
    id: 8,
    title: 'Framework Starter (Laravel CRUD Template)',
    category: 'Developer Tools',
    description:
      'A reusable Laravel-based CRUD starter with authentication, role-based access and a responsive UI using Tailwind CSS and Alpine/JavaScript backed by SQL.',
    image: framework,
    tags: ['PHP', 'Laravel', 'Tailwind CSS', 'JavaScript', 'SQL'],
  },
  {
    id: 9,
    title: 'Just 10 Minute',
    category: 'Productivity',
    description:
      'A productivity web app that lets users create quick 10-minute tasks and sessions with progress tracking and history, powered by Laravel, Tailwind, JavaScript and SQL.',
    image: jsut10,
    tags: ['PHP', 'Laravel', 'Tailwind CSS', 'JavaScript', 'SQL'],
  },
  {
    id: 10,
    title: 'LearnInsure Platform',
    category: 'Education',
    description:
      'An insurance learning portal featuring courses, quizzes and user dashboards built with Laravel, Tailwind CSS, JavaScript and SQL.',
    image: learn,
    tags: ['PHP', 'Laravel', 'Tailwind CSS', 'JavaScript', 'SQL'],
  },
  {
    id: 11,
    title: 'Lost and Found System',
    category: 'Education',
    description:
      'A campus lost-and-found management system that lets users post, search and claim items with admin verification, using Laravel, Tailwind CSS, JavaScript and SQL.',
    image: lost,
    tags: ['PHP', 'Laravel', 'Tailwind CSS', 'JavaScript', 'SQL'],
  },
  {
    id: 12,
    title: 'GradLink Alumni Portal',
    category: 'Education',
    description:
      'An alumni networking portal for graduates with profiles, a job board and messaging, built using Laravel, Tailwind CSS, JavaScript and SQL.',
    image: gradlink,
    tags: ['PHP', 'Laravel', 'Tailwind CSS', 'JavaScript', 'SQL'],
  },
  {
    id: 13,
    title: 'AI AMA Chatbot',
    category: 'AI',
    description:
      'An Ask Me Anything chatbot interface integrated into a Laravel app with Tailwind CSS, JavaScript interactions and SQL logging for conversations.',
    image: ai,
    tags: ['PHP', 'Laravel', 'Tailwind CSS', 'JavaScript', 'SQL'],
  },
  {
    id: 14,
    title: 'Scheduling System',
    category: 'Operations',
    description:
      'A scheduling and calendar management system with appointments, reminders and role-based access built using Laravel, Tailwind CSS, JavaScript and SQL.',
    image: scheduling,
    tags: ['PHP', 'Laravel', 'Tailwind CSS', 'JavaScript', 'SQL'],
  },
  {
    id: 15,
    title: 'Visa Powered by AI',
    category: 'AI',
    description:
      'A MERN stack visa application system with AI-powered security features, real-time processing and intelligent fraud detection. Features secure registration, credential validation and threat detection.',
    image: visa,
    tags: ['MongoDB', 'Express.js', 'React', 'Node.js', 'TensorFlow.js', 'AI', 'JWT'],
  },
  {
    id: 16,
    title: 'MERN Stack POS System',
    category: 'E-commerce',
    description:
      'A comprehensive Point of Sale system built with the MERN stack and Sass. Features real-time inventory management, sales tracking, customer management, advanced reporting, barcode scanning, receipt printing and multi-store support.',
    image: posWeb,
    tags: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Sass', 'Redux', 'Socket.io'],
  },
  {
    id: 17,
    title: 'UCC School Clinic with AI',
    category: 'Healthcare',
    description:
      'A school clinic management system with AI integration for health monitoring and predictive analytics. Built with React, TypeScript and Firebase, featuring appointment scheduling, medical records, AI-powered insights and real-time notifications.',
    image: ucc,
    tags: ['React', 'TypeScript', 'Firebase', 'AI/ML', 'Healthcare', 'Analytics'],
  },
  {
    id: 18,
    title: 'Philippine Pharmacy Franchising System',
    category: 'Healthcare',
    description:
      'A franchising management system for pharmacy chains in the Philippines. Built with native PHP, MySQL and Bootstrap, featuring franchise management, inventory tracking, sales analytics, multi-store operations and automated reporting.',
    image: med,
    tags: ['Native PHP', 'MySQL', 'Bootstrap', 'Franchising', 'Analytics'],
  },
];

const INITIAL_COUNT = 9;

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [showAll, setShowAll] = useState(false);
  const [expanded, setExpanded] = useState({});

  const categories = useMemo(
    () => ['All', ...Array.from(new Set(projects.map((p) => p.category)))],
    []
  );

  const filtered = useMemo(
    () => (filter === 'All' ? projects : projects.filter((p) => p.category === filter)),
    [filter]
  );

  const visible = showAll ? filtered : filtered.slice(0, INITIAL_COUNT);

  const toggleExpanded = (id) =>
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="section-block border-t border-ink/15">
      <div className="section-container">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-80px' }}
          className="grid gap-10 lg:grid-cols-12"
        >
          <div className="lg:col-span-6">
            <p className="eyebrow">03 — Projects</p>
            <h2 className="heading-primary mt-6">
              Selected <span className="font-display italic">work</span>
            </h2>
          </div>
          <div className="lg:col-span-6 lg:pt-4">
            <p className="paragraph">
              Recent projects that showcase my skills and experience in web
              development and system design.
            </p>
            <p className="mt-4 text-xs uppercase tracking-eyebrow text-ink/50">
              {projects.length} projects total
            </p>
          </div>
        </motion.div>

        {/* Category filter */}
        <div className="-mx-5 mt-12 overflow-x-auto px-5 pb-1 sm:mx-0 sm:px-0">
          <div className="flex min-w-max gap-2 sm:min-w-0 sm:flex-wrap">
            {categories.map((category) => {
              const isActive = filter === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => {
                    setFilter(category);
                    setShowAll(false);
                  }}
                  aria-pressed={isActive}
                  className={`rounded-full border px-4 py-2 text-xs font-medium tracking-wide transition-colors duration-300 sm:text-sm ${
                    isActive
                      ? 'border-ink bg-ink text-floral'
                      : 'border-ink/20 text-ink/60 hover:border-ink hover:text-ink'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {visible.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
              viewport={{ once: true, margin: '-40px' }}
              className="card group flex flex-col overflow-hidden"
            >
              {/* Image */}
              <div className="media aspect-[16/10] border-b border-ink/15">
                <img src={project.image} alt={project.title} loading="lazy" />

                {/* Hover actions */}
                <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute inset-0 bg-ink/60" />
                  <button
                    type="button"
                    aria-label={`Open ${project.title}`}
                    className="relative flex h-10 w-10 items-center justify-center rounded-full border border-floral/60 text-floral transition-colors duration-300 hover:bg-floral hover:text-ink"
                  >
                    <FaExternalLinkAlt size={13} />
                  </button>
                  <button
                    type="button"
                    aria-label={`View ${project.title} source`}
                    className="relative flex h-10 w-10 items-center justify-center rounded-full border border-floral/60 text-floral transition-colors duration-300 hover:bg-floral hover:text-ink"
                  >
                    <FaGithub size={14} />
                  </button>
                </div>

                {/* Index badge */}
                <span className="absolute left-4 top-4 flex h-8 min-w-[2rem] items-center justify-center rounded-full bg-floral px-2 text-xs font-semibold text-ink">
                  {String(project.id).padStart(2, '0')}
                </span>
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col p-6">
                <p className="text-[0.6875rem] uppercase tracking-eyebrow text-ink/45">
                  {project.category}
                </p>

                <h3 className="heading-tertiary mt-3">{project.title}</h3>

                <p
                  className={`paragraph-sm mt-3 ${
                    expanded[project.id] ? '' : 'line-clamp-3'
                  }`}
                >
                  {project.description}
                </p>

                {project.description.length > 150 && (
                  <button
                    type="button"
                    onClick={() => toggleExpanded(project.id)}
                    className="btn-text mt-4 self-start"
                  >
                    {expanded[project.id] ? (
                      <>
                        <FaMinus size={9} />
                        <span>Read less</span>
                      </>
                    ) : (
                      <>
                        <FaPlus size={9} />
                        <span>Read more</span>
                      </>
                    )}
                  </button>
                )}

                <ul className="mt-6 flex flex-wrap gap-2 border-t border-ink/12 pt-5">
                  {project.tags.slice(0, 3).map((tag) => (
                    <li key={tag}>
                      <span className="chip">{tag}</span>
                    </li>
                  ))}
                  {project.tags.length > 3 && (
                    <li>
                      <span className="chip border-transparent bg-ink/[0.06] text-ink/50">
                        +{project.tags.length - 3}
                      </span>
                    </li>
                  )}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Show more */}
        {filtered.length > INITIAL_COUNT && (
          <div className="mt-14 flex flex-col items-center gap-8">
            <div className="rule" />
            <button
              type="button"
              onClick={() => setShowAll((prev) => !prev)}
              className="btn-outline"
            >
              {showAll ? 'Show fewer projects' : `Show all ${filtered.length} projects`}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
