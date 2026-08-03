import React from 'react';
import { motion } from 'framer-motion';

export default function SectionHeading({ title, subtitle, centered = true, light = false, className = '' }) {
  return (
    <motion.div
      className={`mb-10 md:mb-14 ${centered ? 'text-center' : 'text-left'} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
    >
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-bold font-heading ${
          light ? 'text-white' : 'text-heading dark:text-dark-heading'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-3 text-base md:text-lg max-w-2xl ${centered ? 'mx-auto' : ''} ${
            light ? 'text-white/80' : 'text-text dark:text-dark-text'
          }`}
        >
          {subtitle}
        </p>
      )}
      <div className={`mt-4 flex ${centered ? 'justify-center' : 'justify-start'} gap-1`}>
        <span className={`block w-10 h-1 rounded-full ${light ? 'bg-accent' : 'bg-primary'}`} />
        <span className={`block w-3 h-1 rounded-full ${light ? 'bg-white/50' : 'bg-secondary'}`} />
        <span className={`block w-1.5 h-1 rounded-full ${light ? 'bg-white/30' : 'bg-accent'}`} />
      </div>
    </motion.div>
  );
}
