// Navbar.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.nav 
      className="bg-[#173664] p-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="container mx-auto flex items-center justify-between flex-wrap">
        {/* Logo aligned to the left */}
        <motion.div 
          className="text-2xl font-bold"
          whileHover={{ scale: 1.05, color: '#f06e11' }}
        >
          <a href="#" className="text-white">Logo</a>
        </motion.div>

        {/* Mobile menu toggle button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>

        {/* Centered navigation links for larger screens */}
        <div className="hidden md:flex space-x-8 justify-center flex-grow">
          <motion.a 
            href="/" 
            className="text-white px-3 py-2 rounded-md"
            whileHover={{ color: '#f06e11' }}
            transition={{ duration: 0.3 }}
          >
            Home
          </motion.a>
          <motion.a 
            href="/About" 
            className="text-white px-3 py-2 rounded-md"
            whileHover={{ color: '#f06e11' }}
            transition={{ duration: 0.3 }}
          >
            About
          </motion.a>
          <motion.a 
            href="/Animalprofile" 
            className="text-white px-3 py-2 rounded-md"
            whileHover={{ color: '#f06e11' }}
            transition={{ duration: 0.3 }}
          >
            Animal Profiles
          </motion.a>
          <motion.a 
            href="/Appreciation" 
            className="text-white px-3 py-2 rounded-md"
            whileHover={{ color: '#f06e11' }}
            transition={{ duration: 0.3 }}
          >
            Appreciation
          </motion.a>
          <motion.a 
            href="/Helpcenter" 
            className="text-white px-3 py-2 rounded-md"
            whileHover={{ color: '#f06e11' }}
            transition={{ duration: 0.3 }}
          >
            Help Center
          </motion.a>
        </div>

        {/* Right aligned donate button and phone number */}
        <div className="hidden md:flex items-center space-x-4">
          <motion.a 
            href="tel:+1234567890" 
            className="flex items-center text-white px-3 py-2 rounded-md"
            whileHover={{ color: '#f06e11' }}
            transition={{ duration: 0.3 }}
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10l1 2a9 9 0 004 4l2 1m6-6a9 9 0 00-9 9H5a2 2 0 01-2-2V9a2 2 0 012-2h4a2 2 0 012 2v1" />
            </svg>
            +1 234 567 890
          </motion.a>
          <motion.a 
            href="/Donate" 
            className="bg-[#f06e11] text-white px-4 py-2 rounded-md"
            whileHover={{ scale: 1.05, backgroundColor: '#c0550e' }}
            transition={{ duration: 0.3 }}
          >
            Donate Now
          </motion.a>
        </div>

        {/* Mobile & Tablet menu */}
        <motion.div 
          className={`w-full md:hidden ${isOpen ? 'block' : 'hidden'} mt-2`}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
        >
          <a href="#" className="block text-white hover:bg-[#173664] px-3 py-2 rounded-md">Home</a>
          <a href="/About" className="block text-white hover:bg-[#173664] px-3 py-2 rounded-md">About</a>
          <a href="/Animalprofile" className="block text-white hover:bg-[#173664] px-3 py-2 rounded-md">Animal Profiles</a>
          <a href="/Appreciation" className="block text-white hover:bg-[#173664] px-3 py-2 rounded-md">Appreciation</a>
          <a href="/Helpcenter" className="block text-white hover:bg-[#173664] px-3 py-2 rounded-md">Help Center</a>
          <a href="/Donate" className="block bg-[#f06e11] text-white hover:bg-[#c0550e] px-4 py-2 rounded-md mt-2">Donate Now</a>
          <a href="tel:+1234567890" className="block text-white hover:bg-[#173664] px-3 py-2 rounded-md mt-2 flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10l1 2a9 9 0 004 4l2 1m6-6a9 9 0 00-9 9H5a2 2 0 01-2-2V9a2 2 0 012-2h4a2 2 0 012 2v1" />
            </svg>
            +1 234 567 890
          </a>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
