import React from 'react';
import { motion } from 'framer-motion';
import natraj from '../assets/images/natraj.png';
import vcriate from '../assets/images/vcriate.png';

interface CertificationCardProps {
  title: string;
  organization: string;
  date: string;
  image: string;
}

const CertificationCard = ({ title, organization, date, image }: CertificationCardProps): React.ReactElement => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden relative group transform transition-all duration-300 w-full"
    >
      <a href={image} target="_blank" rel="noopener noreferrer">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-64 object-cover group-hover:scale-110 transition-all duration-300"
        />
      </a>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <div className="flex justify-between items-center">
          <span>{organization}</span>
          <span>{date}</span>
        </div>
      </div>
    </motion.div>
  );
};

const Certifications = (): React.ReactElement => {
  const certifications = [
    {
      title: "Desktop Development",
      organization: "Natraj Services",
      date: "February, 2023",
      image: natraj
    },
    {
      title: "Content Associate",
      organization: "Vcriate Internet Services",
      date: "June, 2024",
      image: vcriate
    }
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">
          COURSES AND CERTIFICATIONS
        </h2>
        <p className="text-center text-gray-600 mb-4"> {/* Reduced the bottom margin here */}
          What you focus on <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 font-semibold">grows</span>!
        </p>
        <div className="relative text-center">
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500" />
        </div>
        <br />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {certifications.map((cert, index) => (
            <div className="w-full max-w-xs lg:max-w-md" key={index}>
              <CertificationCard {...cert} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
