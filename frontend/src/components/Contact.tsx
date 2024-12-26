import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import profileImage from "../assets/images/profile.jpg";

const Contact = (): React.ReactElement => {
  const contactInfo = [
    {
      icon: <FaMapMarkerAlt size={20} className="text-blue-500" />,
      text: "Chh. Sambhajinagar, Maharashtra, India",
    },
    {
      icon: <FaPhone size={20} className="text-blue-500" />,
      text: "(+91) 9834-567-890",
    },
    {
      icon: <MdEmail size={20} className="text-blue-500" />,
      text: "dikshasugandhi277@gmail.com",
    },
  ];

  const socialLinks = [
    {
      icon: <FaGithub size={24} />,
      url: 'https://github.com/diksha2774',
      label: 'GitHub'
    },
    {
      icon: <FaLinkedin size={24} />,
      url: 'https://www.linkedin.com/in/diksha-sugandhi-968023231/',
      label: 'LinkedIn'
    },
    {
      icon: <FaInstagram size={24} />,
      url: 'https://instagram.com/yourusername',
      label: 'Instagram'
    },
    {
      icon: <MdEmail size={24} />,
      url: 'mailto:dikshasugandhi277@gmail.com',
      label: 'Email'
    }
  ];

  return (
    <section 
      id="contact" 
      className="py-20 relative"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${profileImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg p-8 max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-black pb-3 relative inline-block">
            Get in Touch
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 gradient-bg" />
          </h2>
          
          <div className="space-y-6 text-center mt-6">
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-center justify-center space-x-3 text-black">
                {info.icon}
                <span>{info.text}</span>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center space-x-6 mt-8">
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:gradient-hover transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                title={link.label}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
