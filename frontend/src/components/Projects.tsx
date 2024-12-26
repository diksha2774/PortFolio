import React from 'react';
import { motion } from 'framer-motion';
import examSeatAllocator from '../assets/images/exam_seat_allocator.png';
import mediumBlog from '../assets/images/medium_blog.png';
import paytmClone from '../assets/images/paytm_clone.png';


interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  githubLink: string;
  imageUrl: string;
}

const ProjectCard = ({ title, category, description, githubLink, imageUrl }: ProjectCardProps): React.ReactElement => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden"
    >
      <motion.a 
        href={githubLink}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ opacity: 0.8 }}
      >
        <img 
          src={imageUrl} 
          alt="Project Image" 
          className="w-full h-48 object-cover" 
        />
      </motion.a>
      <div className="p-6">
        <div className="inline-block px-3 py-1 gradient-bg text-white rounded-full text-sm font-semibold mb-2">
          {category}
        </div>
        <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
};

const Projects = (): React.ReactElement => {
  const projects = [
    {
      title: "Exam Seat Allocator",
      category: "Analytics",
      description: "Exam seat allocation application for BAMU University, automating the seating plan generation process. Worked on the backend development using C# and MySQL for managing student data and seat assignments.",
      githubLink: "https://github.com/diksha2774/BamuProject",
      imageUrl:examSeatAllocator
    },
    {
      title: "Medium Blog application",
      category: "Web Development",
      description: "Checker's game agent for 8 by 8 board built using MinMax Algorithm implemented in Python.",
      githubLink: "https://github.com/diksha2774/Blog_app",
      imageUrl: mediumBlog
    },
    {
      title: "Paytm Clone",
      category: "MERN",
      description: "A Paytm application clone using Express, React, Node.js, and PostgreSQL. Implemented core functionalities like user authentication, money transfer, and other essential features",
      githubLink: "https://github.com/diksha2774/Paytm_demo",
      imageUrl: paytmClone
      
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4 relative pb-3">
          Projects
        </h2>
        <p className="text-center text-gray-600 italic mb-12 relative pb-3">
          "Design is not what it looks like and feels like, design is how it works - Steve Jobs"
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 gradient-bg" />
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
