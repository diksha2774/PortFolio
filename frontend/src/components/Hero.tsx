import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';

const titles = ["Software Developer", "I am a Dancer","I am a Freelancer"];

const Hero = (): React.ReactElement => {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (deleting) {
        if (charIndex > 0) {
          setDisplayText((prev) => prev.slice(0, -1));
          setCharIndex((prev) => prev - 1);
        } else {
          setDeleting(false);
          setIndex((prevIndex) => (prevIndex + 1) % titles.length);
        }
      } else {
        if (charIndex < titles[index].length) {
          setDisplayText((prev) => prev + titles[index][charIndex]);
          setCharIndex((prev) => prev + 1);
        } else {
          setTimeout(() => setDeleting(true), 1000); // Wait 1 second before deleting
        }
      }
    }, 100);

    return () => clearInterval(interval);
  }, [charIndex, deleting, index]);

  return (
    <section id="home" className="hero-section h-screen flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white" style={{ fontFamily: 'Comic Sans MS' }}>
            Hi, I'm <span className="text-white">Diksha Amol Sugandhi</span>
        </h1>


            <div className="h-16 overflow-hidden">
              <motion.h2
                className="text-xl md:text-2xl text-gray-300 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {displayText}
              </motion.h2>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-10 w-full text-center animate-bounce">
        <Link
          to="about"
          smooth={true}
          duration={500}
          className="cursor-pointer text-white hover:text-primary-400"
        >
          <svg 
            className="w-6 h-6 mx-auto" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
