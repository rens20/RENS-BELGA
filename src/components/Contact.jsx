import { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const contactInfo = [
  {
    icon: <FaEnvelope size={16} />,
    title: 'Email',
    content: 'wasieacuna@gmail.com',
    link: 'mailto:wasieacuna@gmail.com',
  },
  {
    icon: <FaPhone size={16} />,
    title: 'Phone',
    content: '+1 (234) 567-8900',
    link: 'tel:+12345678900',
  },
  {
    icon: <FaMapMarkerAlt size={16} />,
    title: 'Location',
    content: 'Manila, Philippines',
    link: 'https://maps.google.com/?q=Manila,Philippines',
  },
];

const fieldClass =
  'w-full rounded-xl border border-ink/20 bg-transparent px-4 py-3 text-sm text-ink placeholder:text-ink/35 transition-colors duration-300 focus:border-ink focus:outline-none';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="section-block border-t border-ink/15">
      <div className="section-container">
        <div className="max-w-2xl">
          <p className="eyebrow">04 — Contact</p>
          <h2 className="heading-primary mt-6">
            Get in <span className="font-display italic">touch</span>
          </h2>
          <p className="paragraph mt-6">
            I&apos;m always open to new opportunities and collaborations. Feel
            free to reach out if you&apos;d like to connect.
          </p>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Details */}
          <ul className="space-y-4">
            {contactInfo.map((info) => (
              <li key={info.title}>
                <a
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card group flex items-center gap-5 p-6"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-ink/20 text-ink transition-colors duration-300 group-hover:bg-ink group-hover:text-floral">
                    {info.icon}
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[0.6875rem] uppercase tracking-eyebrow text-ink/45">
                      {info.title}
                    </span>
                    <span className="mt-1 block truncate text-base text-ink">
                      {info.content}
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-[0.6875rem] uppercase tracking-eyebrow text-ink/50"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={fieldClass}
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-[0.6875rem] uppercase tracking-eyebrow text-ink/50"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={fieldClass}
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-[0.6875rem] uppercase tracking-eyebrow text-ink/50"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className={`${fieldClass} resize-none`}
                placeholder="Your message"
              />
            </div>

            <button type="submit" className="btn-solid w-full">
              Send message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
