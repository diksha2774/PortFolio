import React from 'react';

const Footer = (): React.ReactElement => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 text-center text-gray-400">
      <div className="container mx-auto px-4">
        <p>© {currentYear} Diksha amol sugandhi. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; 