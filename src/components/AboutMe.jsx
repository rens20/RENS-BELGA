import { FaCode, FaServer, FaMobileAlt, FaDatabase } from 'react-icons/fa';
import { motion } from 'framer-motion';

const capabilities = [
  {
    id: 1,
    icon: <FaCode size={20} />,
    title: 'Frontend Development',
    description:
      'Experienced in React.js, Next.js, and modern CSS frameworks like Tailwind CSS.',
  },
  {
    id: 2,
    icon: <FaServer size={20} />,
    title: 'Backend Development',
    description:
      'Proficient in Node.js, Express, Laravel and RESTful API development.',
  },
  {
    id: 3,
    icon: <FaMobileAlt size={20} />,
    title: 'Responsive Design',
    description:
      'Creating mobile-first, responsive web applications that work across all devices.',
  },
  {
    id: 4,
    icon: <FaDatabase size={20} />,
    title: 'Database Management',
    description:
      'Working with SQL and NoSQL databases including MongoDB and PostgreSQL.',
  },
];

const technicalSkills = [
  'JavaScript',
  'TypeScript',
  'React',
  'React Native',
  'Node.js',
  'PHP',
  'Laravel',
  'Tailwind CSS',
  'MongoDB',
  'PostgreSQL',
  'MySQL',
  'Firebase',
  'Supabase',
  'Docker',
  'AWS',
  'Git',
  'GitHub',
];

const AboutMe = () => {
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
          <div className="lg:col-span-5">
            <p className="eyebrow">02 — About</p>
            <h2 className="heading-primary mt-6">
              A little <span className="font-display italic">about me</span>
            </h2>
          </div>

          <div className="lg:col-span-7 lg:pt-4">
            <p className="text-xl leading-relaxed text-ink sm:text-2xl">
              I am a dedicated full-stack developer with a passion for creating
              elegant solutions to complex problems.
            </p>
            <p className="paragraph mt-5">
              With a strong foundation in both frontend and backend technologies,
              I build scalable, maintainable applications that provide
              exceptional user experiences.
            </p>
          </div>
        </motion.div>

        {/* Capabilities */}
        {/* 1px gaps over an ink container read as hairline dividers. */}
        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-ink/15 bg-ink/15 sm:mt-20 sm:grid-cols-2">
          {capabilities.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true, margin: '-60px' }}
              className="group relative bg-floral p-8 transition-colors duration-300 hover:bg-ink sm:p-10"
            >
              <div className="flex items-center gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-ink/20 text-ink transition-colors duration-300 group-hover:border-floral/40 group-hover:text-floral">
                  {item.icon}
                </span>
                <span className="font-display text-xl text-ink/25 transition-colors duration-300 group-hover:text-floral/40">
                  {String(item.id).padStart(2, '0')}
                </span>
              </div>

              <h3 className="heading-tertiary mt-7 transition-colors duration-300 group-hover:text-floral">
                {item.title}
              </h3>
              <p className="paragraph-sm mt-3 max-w-sm transition-colors duration-300 group-hover:text-floral/70">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Tech stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-60px' }}
          className="mt-16 sm:mt-20"
        >
          <div className="flex flex-wrap items-baseline justify-between gap-4 border-t border-ink/15 pt-10">
            <h3 className="heading-secondary text-2xl sm:text-3xl">Tech stack</h3>
            <p className="text-xs uppercase tracking-eyebrow text-ink/50">
              {technicalSkills.length} technologies
            </p>
          </div>

          <ul className="mt-8 flex flex-wrap gap-2.5">
            {technicalSkills.map((skill, index) => (
              <motion.li
                key={skill}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                viewport={{ once: true }}
              >
                <span className="chip-interactive px-4 py-2 text-sm">{skill}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;
