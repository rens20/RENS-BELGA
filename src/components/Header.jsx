import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaRocket, FaCode } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    {
      id: 1,
      link: 'home',
      label: 'Home'
    },
    {
      id: 2,
      link: 'experience',
      label: 'Experience'
    },
    {
      id: 3,
      link: 'about',
      label: 'About'
    },
    {
      id: 4,
      link: 'project',
      label: 'Projects'
    }
  ];

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: "spring" }}
      className={`fixed w-full h-20 glass text-white z-50 transition-all duration-300 ${
        scrolled ? 'border-b border-blue-500/20 shadow-lg shadow-blue-500/10' : 'border-b border-gray-800/50'
      }`}
    >
      <div className="flex justify-between items-center h-full max-w-7xl mx-auto px-4 sm:px-6">
        {/* Enhanced Logo */}
        <motion.div 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2"
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="text-blue-500"
          >
            <FaRocket size={24} />
          </motion.div>
          <h1 className="text-3xl font-bold text-gradient animate-gradient">
            RENS
          </h1>
        </motion.div>

        {/* Enhanced Desktop Navigation */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-2">
            {links.map(({ id, link, label }, index) => (
              <motion.li 
                key={id} 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="relative"
              >
                <Link
                  to={link}
                  smooth
                  duration={500}
                  className="relative px-4 py-2 cursor-pointer group"
                >
                  <motion.span 
                    className="text-gray-300 group-hover:text-blue-400 transition-colors duration-300 font-medium"
                    whileHover={{ y: -2 }}
                  >
                    {label}
                  </motion.span>
                  {/* Underline animation */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"
                  />
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>

        {/* Enhanced Mobile Menu Button */}
        <motion.button
          onClick={() => setNav(!nav)}
          className="cursor-pointer md:hidden p-2 rounded-lg bg-gray-800/50 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            animate={{ rotate: nav ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="text-blue-400"
          >
            {nav ? <FaTimes size={24} /> : <FaBars size={24} />}
          </motion.div>
        </motion.button>
      </div>

      {/* Enhanced Mobile Menu */}
      <AnimatePresence>
        {nav && (
          <motion.div
            initial={{ opacity: 0, x: '-100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '-100%' }}
            transition={{ duration: 0.3, type: "spring" }}
            className="fixed top-20 left-0 w-full h-screen glass md:hidden"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="flex flex-col items-center justify-start pt-16 space-y-8"
            >
              {links.map(({ id, link, label }, index) => (
                <motion.li
                  key={id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 + index * 0.1 }}
                  className="text-xl font-medium"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, x: 10 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative"
                  >
                    <Link
                      onClick={() => setNav(!nav)}
                      to={link}
                      smooth
                      duration={500}
                      className="cursor-pointer text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center gap-3"
                    >
                      <FaCode className="text-blue-500" size={16} />
                      <span>{label}</span>
                    </Link>
                  </motion.div>
                </motion.li>
              ))}
            </motion.div>
            
            {/* Mobile menu decoration */}
            <div className="absolute bottom-10 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl animate-pulse-glow" />
            <div className="absolute top-10 right-10 w-24 h-24 bg-purple-500/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
