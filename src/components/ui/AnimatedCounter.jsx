import React from 'react';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';

export default function AnimatedCounter({
  end,
  suffix = '',
  prefix = '',
  label,
  icon: Icon,
  duration = 2.5,
  delay = 0,
  light = false,
}) {
  const [inView, setInView] = React.useState(false);

  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      onViewportEnter={() => setInView(true)}
    >
      {Icon && (
        <div className={`mx-auto w-12 h-12 rounded-full flex items-center justify-center mb-3 ${
          light ? 'bg-white/15' : 'bg-primary/10 dark:bg-primary/20'
        }`}>
          <Icon size={22} className={light ? 'text-accent' : 'text-primary'} />
        </div>
      )}
      <div className={`text-3xl md:text-4xl font-bold font-heading ${
        light ? 'text-white' : 'text-heading dark:text-dark-heading'
      }`}>
        {prefix}
        {inView ? (
          <CountUp end={end} duration={duration} separator="," />
        ) : (
          '0'
        )}
        {suffix}
      </div>
      <p className={`mt-1 text-sm font-medium ${
        light ? 'text-white/70' : 'text-text dark:text-dark-text'
      }`}>
        {label}
      </p>
    </motion.div>
  );
}
