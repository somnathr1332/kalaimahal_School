import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function CTABanner({
  title = "Start Your Child's Journey Today",
  subtitle = 'Admissions are open for the upcoming academic year. Join our family of learners.',
  primaryAction = { label: 'Apply Now', to: '/admissions' },
  secondaryAction = { label: 'Contact Us', to: '/contact' },
}) {
  return (
    <motion.section
      className="relative overflow-hidden bg-background dark:bg-dark-bg py-16 md:py-20 border-y border-gray-200 dark:border-dark-border/50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="section-container relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-heading dark:text-dark-heading mb-4 text-balance">
          {title}
        </h2>
        <p className="text-base md:text-lg text-text/80 dark:text-dark-text/80 max-w-2xl mx-auto mb-8">
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to={primaryAction.to}
            className="btn-primary group"
          >
            {primaryAction.label}
            <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to={secondaryAction.to}
            className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary text-primary dark:text-primary-400 font-semibold rounded-lg hover:bg-primary/5 transition-all duration-300"
          >
            {secondaryAction.label}
          </Link>
        </div>
      </div>
    </motion.section>
  );
}
