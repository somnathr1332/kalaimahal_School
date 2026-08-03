import React from 'react';
import { motion } from 'framer-motion';

export default function Card({
  children,
  icon: Icon,
  title,
  description,
  className = '',
  hover = true,
  delay = 0,
  glass = false,
  color,
  onClick,
}) {
  return (
    <motion.div
      className={`
        relative rounded-2xl p-6 overflow-hidden
        ${glass
          ? 'glass'
          : 'bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border shadow-md'
        }
        ${hover ? 'card-hover cursor-pointer' : ''}
        ${className}
      `}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.4, delay: delay * 0.1 }}
      onClick={onClick}
    >
      {/* Colored accent bar at top */}
      {color && (
        <div
          className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
          style={{ backgroundColor: color }}
        />
      )}

      {Icon && (
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
          style={{ backgroundColor: color ? `${color}15` : 'rgba(30,58,138,0.1)' }}
        >
          <Icon
            size={24}
            style={{ color: color || '#1E3A8A' }}
          />
        </div>
      )}

      {title && (
        <h3 className="text-lg font-semibold font-heading text-heading dark:text-dark-heading mb-2">
          {title}
        </h3>
      )}

      {description && (
        <p className="text-sm text-text dark:text-dark-text leading-relaxed">
          {description}
        </p>
      )}

      {children}
    </motion.div>
  );
}
