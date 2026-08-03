import React from 'react';
import { motion } from 'framer-motion';

export default function Timeline({ items, colorKey }) {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary-500 to-accent transform md:-translate-x-px" />

      {items.map((item, index) => {
        const isLeft = index % 2 === 0;
        return (
          <motion.div
            key={index}
            className={`relative flex items-start mb-8 md:mb-12 ${
              isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
            } flex-row`}
            initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
          >
            {/* Content */}
            <div className={`ml-12 md:ml-0 md:w-1/2 ${isLeft ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
              <div className="glass rounded-xl p-5">
                {item.year && (
                  <span
                    className="inline-block px-3 py-1 text-xs font-bold rounded-full text-white mb-2"
                    style={{ backgroundColor: colorKey || '#1E3A8A' }}
                  >
                    {item.year}
                  </span>
                )}
                {item.step && (
                  <span
                    className="inline-block px-3 py-1 text-xs font-bold rounded-full text-white mb-2"
                    style={{ backgroundColor: item.color || '#1E3A8A' }}
                  >
                    Step {item.step}
                  </span>
                )}
                <h3 className="text-base font-semibold font-heading text-heading dark:text-dark-heading">
                  {item.title || item.event}
                </h3>
                {item.description && (
                  <p className="text-sm text-text dark:text-dark-text mt-1 leading-relaxed">{item.description}</p>
                )}
              </div>
            </div>

            {/* Dot */}
            <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary border-2 border-white dark:border-dark-bg transform -translate-x-1.5 md:-translate-x-1.5 top-6 z-10 shadow-md" />
          </motion.div>
        );
      })}
    </div>
  );
}
