import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaPassport, 
  FaPlane, 
  FaShieldAlt, 
  FaRobot, 
  FaLock, 
  FaClock, 
  FaUsers, 
  FaKey,
  FaCheckCircle,
  FaBrain,
  FaGlobe,
  FaUserShield,
  FaBriefcase
} from 'react-icons/fa';

const VisaAI = () => {
  const features = [
    {
      icon: <FaBrain className="text-green-400" size={24} />,
      title: "AI-Powered Security",
      description: "Advanced AI algorithms validate credentials and detect threats in real-time"
    },
    {
      icon: <FaShieldAlt className="text-green-400" size={24} />,
      title: "Secure Registration",
      description: "Multi-layer authentication process with biometric verification"
    },
    {
      icon: <FaClock className="text-green-400" size={24} />,
      title: "Real-time Processing",
      description: "Instant application processing with AI-driven decision making"
    },
    {
      icon: <FaUserShield className="text-green-400" size={24} />,
      title: "Fraud Detection",
      description: "Machine learning models identify and prevent fraudulent applications"
    }
  ];

  const visaCategories = [
    { name: "Study Abroad", icon: <FaPassport />, color: "text-green-500" },
    { name: "Work Visa", icon: <FaBriefcase />, color: "text-green-500" },
    { name: "Tourist Visa", icon: <FaPlane />, color: "text-green-500" },
    { name: "PR & Immigration", icon: <FaGlobe />, color: "text-green-500" },
    { name: "Visa Consultation", icon: <FaUsers />, color: "text-green-500" }
  ];

  const stats = [
    { value: "99.9%", label: "Uptime", icon: <FaCheckCircle className="text-green-400" /> },
    { value: "10,000+", label: "Users Protected", icon: <FaUsers className="text-green-400" /> },
    { value: "256-bit", label: "Encryption", icon: <FaLock className="text-green-400" /> },
    { value: "Real-time", label: "AI Monitoring", icon: <FaBrain className="text-green-400" /> }
  ];

  const techStack = ["MongoDB", "Express.js", "React", "Node.js", "TensorFlow.js", "JWT", "bcrypt", "Socket.io", "Redux", "Tailwind CSS"];

  return (
    <div name="visa-ai" className="relative w-full py-20 bg-gradient-to-br from-gray-900 via-green-900/20 to-gray-900">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 right-20 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '3s' }} />
        <div className="absolute top-60 left-1/2 w-64 h-64 bg-green-500/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '5s' }} />
      </div>

      <div className="section-container relative z-10">
        {/* Header Section */}
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
                <FaPassport className="text-green-500" />
                <span className="text-green-500">Visa Powered by AI</span>
                <FaRobot className="text-emerald-500" />
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
            A revolutionary MERN stack visa application system with AI-powered security features,
            real-time processing, and intelligent fraud detection capabilities.
          </motion.p>
        </motion.div>

        {/* Main Hero Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto mb-16"
        >
          {/* Left Side - Philippine Visa Section */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-8 hover-lift"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center">
                <span className="text-2xl">PH</span>
              </div>
              <h3 className="text-2xl font-bold text-white">Philippine Visa</h3>
            </div>
            
            <p className="text-gray-300 mb-6">
              Streamlined visa application process with AI-powered document verification and real-time status tracking.
            </p>

            {/* Visa Categories */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {visaCategories.map((category, index) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg border border-gray-700/50 hover:border-green-500/50 transition-all cursor-pointer"
                >
                  <div className={`${category.color}`}>
                    {category.icon}
                  </div>
                  <span className="text-gray-300 text-sm">{category.name}</span>
                </motion.div>
              ))}
            </div>

            {/* Tech Stack */}
            <div className="mt-6">
              <h4 className="text-lg font-semibold text-white mb-3">Technology Stack</h4>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, y: -1 }}
                    className="px-2 py-1 bg-gradient-to-r from-green-500/10 to-emerald-500/10 text-green-400 text-xs rounded-full border border-green-500/20"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side - AI Security Section */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-green-600 to-green-800 rounded-2xl p-8 text-white hover-lift"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <h3 className="text-3xl font-bold mb-2">AI-POWERED SECURITY</h3>
              <p className="text-green-100 text-lg">Secure registration, powered by AI</p>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.4 }}
              viewport={{ once: true }}
              className="text-green-100 mb-8 leading-relaxed"
            >
              A smarter way to protect your users. Our system validates credentials, detects threats, and enforces strong passwords - all in real time.
            </motion.p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 1.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20"
                >
                  <div className="flex items-center gap-3 mb-2">
                    {feature.icon}
                    <h4 className="font-semibold">{feature.title}</h4>
                  </div>
                  <p className="text-green-100 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 2 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-white text-green-600 font-semibold rounded-lg hover:bg-green-50 transition-colors shadow-lg"
              >
                Create Account
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-transparent border-2 border-green-500 text-green-500 font-semibold rounded-lg hover:bg-green-500 hover:text-white transition-all"
              >
                Learn More
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Statistics Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 2.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 2.4 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass p-6 rounded-xl text-center hover-lift"
            >
              <div className="flex justify-center mb-2">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default VisaAI;
