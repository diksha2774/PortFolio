import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = (): React.ReactElement => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { title: 'Home', to: 'home' },
    { title: 'About', to: 'about' },
    { title: 'Skills', to: 'skills' },
    { title: 'Projects', to: 'projects' },
    { title: 'Contact', to: 'contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white text-gray-800 shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-center">
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-12">
            {menuItems.map((item) => (
              <div key={item.to} className="relative">
                <Link
                  to={item.to}
                  spy={true}
                  smooth={true}
                  duration={500}
                  onSetActive={() => setActiveSection(item.to)}
                  className={`cursor-pointer transition-colors ${
                    scrolled 
                      ? 'text-gray-800 hover:gradient-hover' 
                      : 'text-white hover:gradient-hover'
                  }`}
                >
                  {item.title}
                </Link>
                {activeSection === item.to && (
                  <div className="absolute w-full h-0.5 gradient-bg bottom-0 left-0 mt-1" />
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className={scrolled ? 'text-gray-800' : 'text-white'}>
              {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="flex flex-col items-center space-y-4 pt-4 pb-3">
              {menuItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  smooth={true}
                  duration={500}
                  className={`cursor-pointer transition-colors ${
                    scrolled ? 'text-gray-800 hover:text-primary-500' : 'text-white hover:text-primary-400'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 