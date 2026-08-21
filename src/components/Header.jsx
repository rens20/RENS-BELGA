import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { id: 1, link: 'home', label: 'Home' },
  { id: 2, link: 'experience', label: 'Experience' },
  { id: 3, link: 'about', label: 'About' },
  { id: 4, link: 'projects', label: 'Projects' },
];

const Header = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll while the mobile sheet is open.
  useEffect(() => {
    document.body.style.overflow = nav ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [nav]);

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        className={`fixed inset-x-0 top-0 z-50 h-22 transition-colors duration-300 ${
          scrolled
            ? 'border-b border-ink/12 bg-floral'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <div className="section-container flex h-22 items-center justify-between gap-6">
          {/* Wordmark */}
          <Link
            to="home"
            smooth
            duration={600}
            className="group flex shrink-0 cursor-pointer items-baseline gap-2.5"
          >
            <span className="font-display text-2xl leading-none tracking-[-0.01em] text-ink">
              Rens
            </span>
            <span className="hidden text-[0.6875rem] uppercase tracking-eyebrow text-ink/45 sm:inline">
              Acuña
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:block" aria-label="Primary">
            <ul className="flex items-center gap-9 lg:gap-11">
              {links.map(({ id, link, label }) => (
                <li key={id}>
                  <Link
                    to={link}
                    spy
                    smooth
                    offset={-88}
                    duration={600}
                    onSetActive={() => setActive(link)}
                    className={`nav-link cursor-pointer ${
                      active === link ? 'nav-link--active' : ''
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="https://github.com/root-19"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-5 rounded-full border border-ink px-6 py-2.5 text-sm font-medium text-ink transition-colors duration-300 hover:bg-ink hover:text-floral"
                >
                  Get in touch
                </a>
              </li>
            </ul>
          </nav>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setNav((open) => !open)}
            aria-label={nav ? 'Close menu' : 'Open menu'}
            aria-expanded={nav}
            className="btn-icon md:hidden"
          >
            {nav ? <FaTimes size={16} /> : <FaBars size={16} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile sheet */}
      <AnimatePresence>
        {nav && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 top-22 z-40 bg-floral md:hidden"
          >
            <nav className="section-container pb-10 pt-12" aria-label="Mobile">
              <ul className="flex flex-col">
                {links.map(({ id, link, label }, index) => (
                  <motion.li
                    key={id}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: 0.06 * index }}
                    className="border-b border-ink/12"
                  >
                    <Link
                      to={link}
                      smooth
                      offset={-88}
                      duration={600}
                      onClick={() => setNav(false)}
                      className="flex cursor-pointer items-baseline justify-between py-6"
                    >
                      <span className="font-display text-3xl tracking-[-0.01em] text-ink">
                        {label}
                      </span>
                      <span className="text-[0.6875rem] uppercase tracking-eyebrow text-ink/40">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <motion.a
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.3 }}
                href="https://github.com/root-19"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setNav(false)}
                className="btn-solid mt-10 w-full"
              >
                Get in touch
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
