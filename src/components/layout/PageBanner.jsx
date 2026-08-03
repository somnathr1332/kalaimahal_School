import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export default function PageBanner({ title, subtitle, breadcrumbs = [] }) {
  return (
    <section className="relative overflow-hidden bg-background dark:bg-dark-bg border-b border-gray-200 dark:border-dark-border/50">
      {/* Decorative elements */}
      <div className="absolute top-10 right-20 w-40 h-40 rounded-full bg-primary/5 animate-float" />
      <div className="absolute bottom-5 left-10 w-24 h-24 shape-blob bg-accent/5 animate-float-delayed" />

      <div className="section-container relative z-10 py-12 md:py-16">
        {/* Breadcrumbs */}
        {breadcrumbs.length > 0 && (
          <motion.nav
            className="flex items-center gap-1 text-sm text-text/60 dark:text-dark-text/60 mb-4 font-medium"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            aria-label="Breadcrumb"
          >
            <Link to="/" className="hover:text-primary dark:hover:text-primary-400 transition flex items-center gap-1">
              <Home size={14} />
              Home
            </Link>
            {breadcrumbs.map((crumb, i) => (
              <React.Fragment key={i}>
                <ChevronRight size={14} />
                {crumb.to ? (
                  <Link to={crumb.to} className="hover:text-primary dark:hover:text-primary-400 transition">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-primary dark:text-primary-400">{crumb.label}</span>
                )}
              </React.Fragment>
            ))}
          </motion.nav>
        )}

        <motion.h1
          className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-heading dark:text-dark-heading"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            className="mt-3 text-base md:text-lg text-text/80 dark:text-dark-text/80 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {subtitle}
          </motion.p>
        )}

        {/* Decorative divider */}
        <motion.div
          className="flex gap-1 mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <span className="block w-10 h-1.5 rounded-full bg-primary" />
          <span className="block w-3 h-1.5 rounded-full bg-primary/40" />
          <span className="block w-1.5 h-1.5 rounded-full bg-primary/20" />
        </motion.div>
      </div>
    </section>
  );
}
