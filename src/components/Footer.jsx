import { FaGithub, FaLinkedin, FaArrowUp } from 'react-icons/fa';
import { Link } from 'react-scroll';

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="border-t border-ink/15 bg-ink text-floral">
      <div className="section-container py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="text-[0.6875rem] uppercase tracking-eyebrow text-floral/50">
              Get in touch
            </p>
            <h2 className="mt-5 font-display text-4xl leading-[1.05] tracking-[-0.02em] sm:text-5xl lg:text-6xl">
              Let&apos;s build something
              <br />
              <span className="italic text-floral/70">worth shipping.</span>
            </h2>

            <a
              href="mailto:wasieacuna@gmail.com"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-floral px-7 py-3.5 text-sm font-medium tracking-wide text-floral transition-colors duration-300 hover:bg-floral hover:text-ink"
            >
              wasieacuna@gmail.com
            </a>
          </div>

          <div className="lg:col-span-5 lg:pl-10">
            <p className="text-[0.6875rem] uppercase tracking-eyebrow text-floral/50">
              Elsewhere
            </p>
            <ul className="mt-5 space-y-px">
              {[
                { label: 'GitHub', href: 'https://github.com/root-19', icon: <FaGithub size={15} /> },
                { label: 'LinkedIn', href: 'https://linkedin.com/in/yourusername', icon: <FaLinkedin size={15} /> },
              ].map((item) => (
                <li key={item.label} className="border-b border-floral/15">
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between py-4 text-floral/70 transition-colors duration-300 hover:text-floral"
                  >
                    <span className="flex items-center gap-3 text-sm">
                      {item.icon}
                      {item.label}
                    </span>
                    <span className="text-xs transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col-reverse items-start justify-between gap-6 border-t border-floral/15 pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-floral/50">
            © {year} Rens Belga Acuña. All rights reserved.
          </p>

          <Link
            to="home"
            smooth
            offset={-88}
            duration={600}
            className="flex cursor-pointer items-center gap-2 text-xs uppercase tracking-eyebrow text-floral/60 transition-colors duration-300 hover:text-floral"
          >
            <span>Back to top</span>
            <FaArrowUp size={10} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
