import { FaGithub, FaLinkedin, FaArrowDown } from 'react-icons/fa';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import Portrait from '../assets/my_profile.jpg';
import Resume from '../assets/rens-resume.pdf';

const stats = [
  { value: '5+', label: 'Years building' },
  { value: '50+', label: 'Projects shipped' },
  { value: '15+', label: 'Technologies' },
];

const Home = () => {
  return (
    <div className="relative overflow-hidden pt-22">
      {/* Dot-grid texture, ink at low opacity — no third colour. */}
      <div
        aria-hidden="true"
        className="bg-dots mask-fade-b pointer-events-none absolute inset-x-0 top-0 h-[32rem] opacity-60"
      />

      <div className="section-container relative">
        <div className="grid items-center gap-14 py-16 sm:py-20 lg:grid-cols-12 lg:gap-16 lg:py-28">
          {/* ---- Copy ---- */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
            className="lg:col-span-7"
          >
            <p className="eyebrow">Available for work</p>

            <h1 className="mt-6 font-display text-[3rem] leading-[0.98] tracking-[-0.03em] text-ink sm:text-7xl lg:text-[5.25rem]">
              Rens Acuña
            </h1>

            <p className="mt-4 flex flex-wrap items-baseline gap-x-3 text-xl text-ink/60 sm:text-2xl">
              <span className="font-display italic text-ink">Full Stack Developer</span>
              <span aria-hidden="true" className="hidden h-px w-10 bg-ink/25 sm:block" />
              <span className="text-base sm:text-lg">Manila, Philippines</span>
            </p>

            <p className="paragraph mt-8 max-w-2xl">
              I build AI-powered business applications that combine full-stack
              development, intelligent automation, and large language models to
              streamline workflows, enhance decision-making, and solve complex
              real-world problems.
            </p>

            <p className="paragraph mt-4 max-w-2xl text-ink/55">
              From recruitment platforms and HR systems to productivity tools, I
              create scalable, user-focused software that delivers measurable
              impact.
            </p>

            {/* Actions */}
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link to="projects" smooth offset={-88} duration={600}>
                <button type="button" className="btn-solid group w-full sm:w-auto">
                  <span>View work</span>
                  <HiArrowNarrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>
              </Link>

              <a
                href={Resume}
                download="Rens_Belga_CV.pdf"
                className="btn-outline w-full sm:w-auto"
              >
                Download CV
              </a>

              <div className="mt-2 flex gap-3 sm:ml-3 sm:mt-0">
                <a
                  href="https://github.com/root-19"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="btn-icon"
                >
                  <FaGithub size={17} />
                </a>
                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="btn-icon"
                >
                  <FaLinkedin size={17} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* ---- Portrait ---- */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
            className="lg:col-span-5"
          >
            <div className="group relative mx-auto max-w-sm lg:max-w-none">
              <div className="media relative aspect-[4/5] rounded-2xl">
                <img src={Portrait} alt="Portrait of Rens Acuña" loading="eager" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* ---- Stats strip ---- */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="border-t border-ink/15 py-10 sm:py-12"
        >
          <div className="grid grid-cols-3 gap-6 sm:gap-10">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="numeral">{stat.value}</p>
                <p className="mt-2 text-xs uppercase tracking-eyebrow text-ink/50 sm:text-[0.8125rem]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Scroll cue */}
        <div className="hidden justify-center pb-10 lg:flex">
          <Link
            to="experience"
            smooth
            offset={-88}
            duration={600}
            className="flex cursor-pointer flex-col items-center gap-3 text-ink/40 transition-colors duration-300 hover:text-ink"
          >
            <span className="text-[0.6875rem] uppercase tracking-eyebrow">Scroll</span>
            <motion.span
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            >
              <FaArrowDown size={12} />
            </motion.span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
