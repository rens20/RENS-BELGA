import { motion } from 'framer-motion';

const experiences = [
  {
    id: 1,
    title: 'Senior Developer',
    company: 'Appdeep Corporation',
    period: '2025 — Present',
    description:
      'Leading development projects and architecting solutions using Laravel and React Native. Collaborating with cross-functional teams to deliver high-quality software and mentoring junior developers.',
    skills: ['Laravel', 'React Native', 'Yii', 'PHP', 'API Development', 'Team Leadership'],
  },
  {
    id: 2,
    title: 'Software Engineer',
    company: 'Just10minute',
    period: '2025',
    description:
      'Developing and maintaining web applications using modern technologies. Collaborating with cross-functional teams to deliver high-quality software solutions.',
    skills: ['React', 'PHP', 'Laravel', 'Hostinger'],
  },
  {
    id: 3,
    title: 'Freelance Full Stack Developer',
    company: 'Self-Employed',
    period: '2023 — 2024',
    description:
      'Delivered custom web applications for a range of clients, managing entire project lifecycles from requirement gathering through deployment, with a focus on responsive design and performance.',
    skills: ['PHP', 'MySQL', 'React', 'Tailwind CSS', 'API Integration'],
  },
];

const Experience = () => {
  return (
    <div className="section-block border-t border-ink/15">
      <div className="section-container">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-80px' }}
          className="max-w-2xl"
        >
          <p className="eyebrow">01 — Experience</p>
          <h2 className="heading-primary mt-6">
            Where I&apos;ve <span className="font-display italic">worked</span>
          </h2>
          <p className="paragraph mt-6">
            My professional journey in software development and engineering.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="mt-16 sm:mt-20">
          {experiences.map((exp, index) => (
            <motion.article
              key={exp.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
              viewport={{ once: true, margin: '-60px' }}
              className="group grid gap-6 border-t border-ink/15 py-10 transition-colors duration-300 hover:border-ink/40 sm:py-12 lg:grid-cols-12 lg:gap-10"
            >
              {/* Meta column */}
              <div className="lg:col-span-4">
                <div className="flex items-baseline gap-4">
                  <span className="font-display text-2xl leading-none text-ink/25 transition-colors duration-300 group-hover:text-ink/60">
                    {String(exp.id).padStart(2, '0')}
                  </span>
                  <p className="text-xs uppercase tracking-eyebrow text-ink/50">
                    {exp.period}
                  </p>
                </div>
                <h3 className="heading-secondary mt-5 text-2xl sm:text-3xl">
                  {exp.title}
                </h3>
                <p className="mt-2 text-sm text-ink/55">{exp.company}</p>
              </div>

              {/* Detail column */}
              <div className="lg:col-span-8 lg:pl-10 lg:border-l lg:border-ink/12">
                <p className="paragraph max-w-2xl">{exp.description}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <li key={skill}>
                      <span className="chip-interactive">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
          <div className="rule" />
        </div>
      </div>
    </div>
  );
};

export default Experience;
