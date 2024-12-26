import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = (): React.ReactElement => {
  return (
    <div className="bg-gray-100 text-gray-800 font-poppins">
      <Navbar />
      <Hero />
      <div className="content-section">
        <About />
        <Certifications />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App; 