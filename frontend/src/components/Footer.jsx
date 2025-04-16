import React from 'react';
import { motion } from 'framer-motion';

const footerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const Footer = () => {
  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-gray-900 text-white py-10 px-6 md:px-16"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
        {/* Left Section */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-2">JIGSIMUREXTRA</h2>
          <p className="text-sm text-gray-400">
            60 Ogbowankwo street Ajegunle Apapa Lagos.
          </p>
        </div>

        {/* Right Section */}
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#" className="hover:text-white transition">Home</a></li>
            <li><a href="#" className="hover:text-white transition">Shop</a></li>
            <li><a href="#" className="hover:text-white transition">About Us</a></li>
            <li><a href="#" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
