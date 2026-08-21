import { motion } from 'framer-motion';
import {
  FaPassport,
  FaPlane,
  FaShieldAlt,
  FaLock,
  FaClock,
  FaUsers,
  FaCheckCircle,
  FaBrain,
  FaGlobe,
  FaUserShield,
  FaBriefcase,
} from 'react-icons/fa';

const features = [
  {
    icon: <FaBrain size={18} />,
    title: 'AI-Powered Security',
    description:
      'Advanced AI algorithms validate credentials and detect threats in real time.',
  },
  {
    icon: <FaShieldAlt size={18} />,
    title: 'Secure Registration',
    description: 'Multi-layer authentication process with biometric verification.',
  },
  {
    icon: <FaClock size={18} />,
    title: 'Real-time Processing',
    description: 'Instant application processing with AI-driven decision making.',
  },
  {
    icon: <FaUserShield size={18} />,
    title: 'Fraud Detection',
    description:
      'Machine learning models identify and prevent fraudulent applications.',
  },
];

const visaCategories = [
  { name: 'Study Abroad', icon: <FaPassport /> },
  { name: 'Work Visa', icon: <FaBriefcase /> },
  { name: 'Tourist Visa', icon: <FaPlane /> },
  { name: 'PR & Immigration', icon: <FaGlobe /> },
  { name: 'Visa Consultation', icon: <FaUsers /> },
];

const stats = [
  { value: '99.9%', label: 'Uptime', icon: <FaCheckCircle size={14} /> },
  { value: '10,000+', label: 'Users Protected', icon: <FaUsers size={14} /> },
  { value: '256-bit', label: 'Encryption', icon: <FaLock size={14} /> },
  { value: 'Real-time', label: 'AI Monitoring', icon: <FaBrain size={14} /> },
];

const techStack = [
  'MongoDB',
  'Express.js',
  'React',
  'Node.js',
  'TensorFlow.js',
  'JWT',
  'bcrypt',
  'Socket.io',
  'Redux',
  'Tailwind CSS',
];

const VisaAI = () => {
  return (
    <div className="section-block border-t border-ink/15">
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-80px' }}
          className="max-w-2xl"
        >
          <p className="eyebrow">Case study</p>
          <h2 className="heading-primary mt-6">
            Visa powered by <span className="font-display italic">AI</span>
          </h2>
          <p className="paragraph mt-6">
            A MERN stack visa application system with AI-powered security
            features, real-time processing and intelligent fraud detection.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2 lg:gap-8">
          {/* Left: application side */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true, margin: '-60px' }}
            className="card-flat p-8 sm:p-10"
          >
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-ink/20 text-sm font-semibold">
                PH
              </span>
              <h3 className="heading-tertiary text-xl sm:text-2xl">
                Philippine Visa
              </h3>
            </div>

            <p className="paragraph-sm mt-6">
              Streamlined visa application process with AI-powered document
              verification and real-time status tracking.
            </p>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {visaCategories.map((category) => (
                <li
                  key={category.name}
                  className="group flex items-center gap-3 rounded-xl border border-ink/15 px-4 py-3 transition-colors duration-300 hover:border-ink hover:bg-ink hover:text-floral"
                >
                  <span className="text-ink/60 transition-colors duration-300 group-hover:text-floral">
                    {category.icon}
                  </span>
                  <span className="text-sm">{category.name}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 border-t border-ink/12 pt-6">
              <p className="text-[0.6875rem] uppercase tracking-eyebrow text-ink/50">
                Technology stack
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <li key={tech}>
                    <span className="chip">{tech}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right: inverted security panel */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            viewport={{ once: true, margin: '-60px' }}
            className="card-invert p-8 sm:p-10"
          >
            <p className="text-[0.6875rem] uppercase tracking-eyebrow text-floral/50">
              Secure registration, powered by AI
            </p>
            <h3 className="mt-5 font-display text-3xl leading-tight sm:text-4xl">
              AI-powered security
            </h3>

            <p className="mt-5 text-sm leading-relaxed text-floral/70">
              A smarter way to protect your users. The system validates
              credentials, detects threats and enforces strong passwords — all in
              real time.
            </p>

            <ul className="mt-8 grid gap-px overflow-hidden rounded-xl border border-floral/20 bg-floral/20 sm:grid-cols-2">
              {features.map((feature) => (
                <li key={feature.title} className="bg-ink p-5">
                  <div className="flex items-center gap-3">
                    <span className="text-floral/70">{feature.icon}</span>
                    <h4 className="text-sm font-semibold">{feature.title}</h4>
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-floral/60">
                    {feature.description}
                  </p>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-full border border-floral bg-floral px-7 py-3.5 text-sm font-medium text-ink transition-colors duration-300 hover:bg-transparent hover:text-floral"
              >
                Create account
              </button>
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-full border border-floral/50 px-7 py-3.5 text-sm font-medium text-floral transition-colors duration-300 hover:bg-floral hover:text-ink"
              >
                Learn more
              </button>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: '-60px' }}
          className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-ink/15 bg-ink/15 md:grid-cols-4"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="bg-floral p-6 text-center">
              <span className="flex justify-center text-ink/40">{stat.icon}</span>
              <p className="mt-3 text-xl font-semibold text-ink">{stat.value}</p>
              <p className="mt-1 text-xs uppercase tracking-eyebrow text-ink/50">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default VisaAI;
