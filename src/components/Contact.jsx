import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: <FaEnvelope className="text-green-500" size={24} />,
      title: 'Email',
      content: 'rensbelga@example.com',
      link: 'mailto:rensbelga@example.com',
    },
    {
      icon: <FaPhone className="text-green-500" size={24} />,
      title: 'Phone',
      content: '+1 (234) 567-8900',
      link: 'tel:+12345678900',
    },
    {
      icon: <FaMapMarkerAlt className="text-green-500" size={24} />,
      title: 'Location',
      content: 'Manila, Philippines',
      link: 'https://maps.google.com/?q=Manila,Philippines',
    },
  ];

  return (
    <div name="contact" className="w-full py-20 bg-gradient-to-b from-gray-900 via-green-900/10 to-gray-900">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="heading-primary">Contact Me</h2>
          <p className="paragraph">
            I'm always open to new opportunities and collaborations.
            Feel free to reach out if you'd like to connect!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="grid gap-8">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card flex items-center hover:border-green-500 transition duration-300"
                >
                  <div className="mr-4">{info.icon}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      {info.title}
                    </h3>
                    <p className="text-gray-400">{info.content}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-2"
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
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg 
                           text-white focus:outline-none focus:border-green-500 transition duration-300"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
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
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg 
                           text-white focus:outline-none focus:border-green-500 transition duration-300"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg 
                           text-white focus:outline-none focus:border-green-500 transition duration-300"
                  placeholder="Your message"
                ></textarea>
              </div>

              <button
                type="submit"
                className="button-primary w-full"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
