import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, FlaskConical, Monitor, Presentation, Dumbbell, Theater, Palette, Heart, Building } from 'lucide-react';

const IconMap = {
  BookOpen,
  FlaskConical,
  Monitor,
  Presentation,
  Dumbbell,
  Theater,
  Palette,
  Heart,
  Building
};

export default function FacilityCard({ facility, index = 0 }) {
  const Icon = IconMap[facility.icon] || Building;

  return (
    <motion.div
      className="group relative rounded-2xl overflow-hidden bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border shadow-md card-hover"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
    >
      {/* Image */}
      <div className="relative h-48 bg-gradient-to-br from-primary/10 to-primary/5 dark:from-primary/5 dark:to-primary/3 overflow-hidden">
        <img
          src={facility.image}
          alt={facility.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
          onError={(e) => {
            e.target.style.display = 'none';
          }}
        />
        {/* Fallback icon if image fails */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Icon size={48} className="text-primary/20 dark:text-primary/15" />
        </div>
        {/* Stats badge */}
        {facility.stats && (
          <div className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold bg-primary text-white shadow-md">
            {facility.stats}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-center gap-2 mb-2">
          <Icon size={18} className="text-primary" />
          <h3 className="font-semibold font-heading text-heading dark:text-dark-heading">{facility.name}</h3>
        </div>
        <p className="text-sm text-text dark:text-dark-text leading-relaxed">{facility.description}</p>
      </div>
    </motion.div>
  );
}
