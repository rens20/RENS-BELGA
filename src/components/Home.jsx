import React, { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin, FaCode, FaRocket } from 'react-icons/fa';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const Home = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 50; i++) {
        newParticles.push({
          id: i,
          left: Math.random() * 100,
          animationDelay: Math.random() * 10,
          animationDuration: 10 + Math.random() * 20
        });
      }
      setParticles(newParticles);
    };
    generateParticles();
  }, []);

  return (
    <div name="home" className="relative h-screen w-full bg-gradient-to-br from-gray-900 via-green-900/20 to-gray-900 overflow-hidden">
      {/* Particle Background */}
      <div className="particles">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="particle"
            style={{
              left: `${particle.left}%`,
              animationDelay: `${particle.animationDelay}s`,
              animationDuration: `${particle.animationDuration}s`
            }}
          />
        ))}
      </div>

      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 via-emerald-600/10 to-green-600/10 animate-gradient opacity-30" />
      
      <div className="section-container h-full flex flex-col justify-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl"
        >
          {/* Greeting with icon */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-3 mb-4"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="text-green-500"
            >
              <FaRocket size={24} />
            </motion.div>
            <p className="text-green-400 font-bold text-lg">
              Hi, my name is
            </p>
          </motion.div>

          {/* Name with gradient effect */}
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-5xl sm:text-7xl font-bold mb-4"
          >
            <span className="text-green-500 animate-gradient">Rens Acuña</span>
          </motion.h1>

          {/* Role with typing effect */}
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-4xl sm:text-6xl font-bold text-gray-300 mb-6"
          >
            <motion.span
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Full Stack Developer
            </motion.span>
          </motion.h2>
          {/* Enhanced description with better typography */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mb-8"
          >
            <p className="paragraph max-w-2xl mb-4 text-gray-300 leading-relaxed">
              I'm a passionate full-stack developer specializing in building exceptional digital experiences.
            </p>
            <p className="paragraph max-w-2xl text-gray-400 leading-relaxed">
              My focus is on creating responsive and user-friendly web applications that solve real-world problems.
            </p>
          </motion.div>
          
          {/* Enhanced CTA buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 mb-8"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="project"
                smooth
                duration={500}
                className="flex items-center justify-center gap-2 group px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-full text-lg font-semibold transition-colors shadow-lg border border-green-600"
              >
                <span>View Work</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
                  className="inline-block"
                >
                  <HiArrowNarrowRight className="group-hover:translate-x-1 transition-transform" />
                </motion.div>
              </Link>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="/src/assets/rens-resume.pdf"
                download="Rens_Belga_CV"
                className="flex items-center justify-center gap-2 group px-8 py-3 bg-transparent border-2 border-green-500 text-green-500 rounded-full text-lg font-semibold hover:bg-green-500 hover:text-white transition-all"
              >
                <FaCode className="group-hover:rotate-12 transition-transform" />
                <span>Download CV</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Enhanced social links with better animations */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="flex gap-6"
          >
            <motion.a
              href="https://github.com/root-19"
              target="_blank"
              rel="noopener noreferrer"
              className="icon p-3 rounded-full bg-green-500/20 backdrop-blur-sm border border-green-500/50 hover:border-green-400 hover:bg-green-500/30"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub size={24} />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="icon p-3 rounded-full bg-green-500/20 backdrop-blur-sm border border-green-500/50 hover:border-green-400 hover:bg-green-500/30"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin size={24} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
