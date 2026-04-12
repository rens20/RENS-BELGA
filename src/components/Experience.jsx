import React from 'react';
import { FaBriefcase, FaCode, FaLaptopCode, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Senior Developer",
      company: "Appdeep Corporation",
      period: "2025 - Present",
      description: "Working as a senior developer, leading development projects and architecting solutions using Laravel and React Native. Collaborating with cross-functional teams to deliver high-quality software solutions and mentoring junior developers.",
      icon: <FaLaptopCode size={24} />,
      skills: ["Laravel", "React Native", "PHP", "API Development", "Team Leadership"]
    },
    {
      id: 2,
      title: "Software Engineer",
      company: "Just10minute",
      period: "2025",
      description: "Working as a software engineer, developing and maintaining web applications using modern technologies. Collaborating with cross-functional teams to deliver high-quality software solutions.",
      icon: <FaLaptopCode size={24} />,
      skills: ["React", "PHP", "Laravel", "hostinger"]
    },
    {
      id: 3,
      title: "Freelance Full Stack Developer",
      company: "Self-Employed",
      period: "2023 - 2024",
      description: "Developed and delivered custom web applications for various clients. Managed entire project lifecycles from requirement gathering to deployment. Implemented responsive designs and optimized application performance.",
      icon: <FaCode size={24} />,
      skills: ["PHP", "MySQL", "React", "Tailwind CSS", "API Integration"]
    }
  ];

  return (
    <div name="experience" className="relative w-full py-20 bg-gradient-to-b from-gray-900 via-blue-900/10 to-gray-900">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }} />
      </div>
      
      <div className="section-container relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-16"
        >
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="heading-primary text-left mb-4"
          >
            <span className="text-gradient animate-gradient">Experience</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="paragraph text-left"
          >
            My professional journey in software development and engineering.
          </motion.p>
        </motion.div>

        <div className="max-w-4xl">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative pl-8 py-6 group"
            >
              {/* Enhanced Timeline line with gradient */}
              <motion.div 
                initial={{ height: 0 }}
                whileInView={{ height: "100%" }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                viewport={{ once: true }}
                className="absolute top-0 left-8 w-[3px] bg-gradient-to-b from-blue-500/50 to-blue-600/50 group-hover:from-blue-400 group-hover:to-blue-500 transition-all duration-300 shadow-lg shadow-blue-500/20" 
              />
              
              {/* Enhanced Timeline dot with pulse effect */}
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.2 + 0.2 }}
                viewport={{ once: true }}
                className="absolute left-6 top-6 w-8 h-8 bg-gray-900 border-2 border-blue-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
              >
                <motion.div 
                  className="absolute inset-2 bg-blue-500 rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                />
                <div className="relative z-10 text-white text-xs">
                  {exp.id}
                </div>
              </motion.div>

              {/* Enhanced Content with glass morphism */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
                viewport={{ once: true }}
                className="glass ml-8 pt-8 pb-8 group-hover:border-blue-500/50 transition-all duration-300 hover-lift border border-gray-700/50 rounded-xl"
              >
                {/* Header with enhanced layout */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-8">
                  <div className="flex items-start gap-4">
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="text-blue-500 p-3 rounded-full bg-blue-500/10 border border-blue-500/20 flex-shrink-0"
                    >
                      {exp.icon}
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
                        <FaBriefcase className="text-blue-500" size={14} />
                        <span>{exp.company}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Period with enhanced styling */}
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 px-3 py-1 bg-gray-800/50 rounded-full border border-gray-700/50 text-sm"
                  >
                    <FaCalendarAlt className="text-blue-500" size={12} />
                    <span className="text-gray-300">{exp.period}</span>
                  </motion.div>
                </div>

                {/* Enhanced description */}
                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.2 + 0.6 }}
                  viewport={{ once: true }}
                  className="text-gray-300 mb-8 leading-relaxed text-base"
                >
                  {exp.description}
                </motion.p>

                {/* Enhanced skills with better animations */}
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.2 + skillIndex * 0.1 + 0.7 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="px-3 py-1 bg-gradient-to-r from-gray-800/50 to-gray-700/50 text-blue-400 text-sm rounded-full
                               border border-gray-600/50 hover:border-blue-500/50 hover:from-blue-500/10 hover:to-blue-600/10 transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience; 