import React from 'react';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const TopBar = () => (
  <motion.div
    className="bg-primary text-white py-2 text-center text-sm"
    initial={{ y: -20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <span className="font-medium">Welcome to Kalaimahal Matriculation Higher Secondary School</span>
    <ChevronDown className="inline-block ml-2 animate-bounce" size={14} aria-hidden="true" />
  </motion.div>
);

export default TopBar;
