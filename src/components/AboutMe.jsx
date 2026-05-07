import React from 'react';
import { FaCode, FaServer, FaMobile, FaDatabase, FaRocket, FaLightbulb } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Me from "../assets/Me.jpg";
import Background from '../assets/Home-bg.jpg';

const AboutMe = () => {
  const skills = [
    {
      id: 1,
      icon: <FaCode size={40} />,
      title: 'Frontend Development',
      description: 'Experienced in React.js, Next.js, and modern CSS frameworks like Tailwind CSS.',
    },
    {
      id: 2,
      icon: <FaServer size={40} />,
      title: 'Backend Development',
      description: 'Proficient in Node.js, Express,Laravel and RESTful API development.',
    },
    {
      id: 3,
      icon: <FaMobile size={40} />,
      title: 'Responsive Design',
      description: 'Creating mobile-first, responsive web applications that work across all devices.',
    },
    {
      id: 4,
      icon: <FaDatabase size={40} />,
      title: 'Database Management',
      description: 'Working with SQL and NoSQL databases including MongoDB and PostgreSQL.',
    },
  ];

  const technicalSkills = [
    'JavaScript',
    'React',
    'Node.js',
    'MongoDB',
    'PostgreSQL',
    'MySQL',
    'Git',
    'Docker',
    'AWS',
    'TypeScript',
    'PHP',
    'Laravel',
    'tailwind.css',
    'Github',
    'react native',
    'firebase',
    'supabase',
  ];

  return (
    <div name="about" className="relative w-full py-20 bg-gradient-to-br from-gray-900 via-green-900/10 to-gray-900">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 right-20 w-64 h-64 bg-green-500/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '3s' }} />
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
              <span className="text-green-500">About Me</span>
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <p className="paragraph text-gray-300 mb-4">
              I am a dedicated full-stack developer with a passion for creating elegant solutions
              to complex problems.
            </p>
            <p className="paragraph text-gray-400">
              With a strong foundation in both frontend and backend technologies,
              I strive to build scalable and maintainable applications that provide exceptional user experiences.
            </p>
          </motion.div>
        </motion.div>

        {/* Enhanced Skills Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
              viewport={{ once: true }}
              className="glass group hover-lift p-6 border border-gray-700/50 rounded-xl shadow-xl shadow-green-500/5 hover:shadow-green-500/10 transition-all duration-300 relative overflow-hidden"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-start gap-4">
                <motion.div 
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.4, type: "spring" }}
                  viewport={{ once: true }}
                  className="text-green-500 p-4 rounded-xl bg-green-500/10 border border-green-500/20 group-hover:bg-green-500/20 group-hover:scale-110 transition-all duration-300 flex-shrink-0 shadow-lg shadow-green-500/20"
                >
                  {skill.icon}
                </motion.div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-green-400 transition-colors">
                    {skill.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-4">{skill.description}</p>
                </div>
              </div>
              
              {/* Progress indicator */}
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                transition={{ duration: 0.8, delay: index * 0.1 + 0.6 }}
                viewport={{ once: true }}
                className="mt-4 h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full shadow-lg shadow-green-500/30"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Tech Stack Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h3 className="heading-primary mb-4">
              <span className="flex items-center justify-center gap-3">
                <FaRocket className="text-green-500" />
                <span className="text-green-500">Tech Stack</span>
                <FaLightbulb className="text-green-500" />
              </span>
            </h3>
          </motion.div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {technicalSkills.map((skill, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 + 0.9, type: "spring" }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -3, rotate: 5 }}
                className="px-4 py-2 bg-gradient-to-r from-gray-800/50 to-gray-700/50 text-white rounded-full text-sm font-medium
                         border border-gray-600/50 hover:border-green-500/50 hover:from-green-500/10 hover:to-emerald-500/10 transition-all duration-300 cursor-default shadow-lg hover:shadow-green-500/20"
              >
                {skill}
              </motion.span>
            ))}
          </div>
          
          {/* Additional stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            viewport={{ once: true }}
            className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto"
          >
            {[
              { number: "5+", label: "Years Experience" },
              { number: "50+", label: "Projects Completed" },
              { number: "15+", label: "Technologies" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 1.3 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="glass p-4 rounded-xl text-center border border-gray-700/30 shadow-lg shadow-green-500/5 hover:shadow-green-500/10 transition-all duration-300"
              >
                <div className="text-2xl font-bold text-green-400 mb-1">{stat.number}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;




