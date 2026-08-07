import React, { useState, useEffect, useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Sun, Moon, GraduationCap } from 'lucide-react';
import { ThemeContext } from '../../context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';
import navigationData from '../../data/navigation.json';

const navLinks = navigationData.mainNav;

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
      ? 'bg-white/95 dark:bg-dark-bg/95 backdrop-blur-md shadow-md border-b border-gray-200 dark:border-dark-border/50'
      : 'bg-white/80 dark:bg-dark-bg/85 backdrop-blur-md border-b border-gray-200/50 dark:border-dark-border/30'
      }`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4 }}
      aria-label="Primary navigation"
    >
      <div className="section-container flex items-center justify-between h-16 md:h-18">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group" aria-label="Kalaimahal School Home">
          <img src="/images/logo.jpg" alt="Kalaimahal School Logo" className="h-10 w-10 object-contain rounded-full shadow-sm group-hover:scale-105 transition-transform bg-white p-0.5" />
          <div className="block">
            <span className="text-xs sm:text-base font-bold font-heading text-heading dark:text-dark-heading leading-tight">
              Kalaimahal
            </span>
            <span className="block text-[9px] sm:text-[10px] text-text/60 dark:text-dark-text/60 -mt-0.5 font-medium leading-tight">
              Matric. School
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `relative px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'text-primary dark:text-primary-400 bg-primary/5 dark:bg-primary/10'
                    : 'text-text dark:text-dark-text hover:text-primary dark:hover:text-primary-400 hover:bg-gray-50 dark:hover:bg-dark-card'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-2">
          <Link
            to="/admissions"
            className="px-4 py-2 text-sm font-semibold bg-primary text-white rounded-lg hover:bg-primary-700 transition-all shadow-sm hover:shadow-md"
          >
            Apply Now
          </Link>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-card transition-colors"
            aria-label="Toggle dark mode"
          >
            {theme === 'light' ? <Moon size={18} className="text-text" /> : <Sun size={18} className="text-dark-text" />}
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-card transition-colors text-text dark:text-dark-text"
            aria-label="Toggle dark mode"
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} className="text-dark-text" />}
          </button>
          <button
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-card transition-colors text-text dark:text-dark-text"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-controls="mobile-menu"
            aria-expanded={mobileOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/30 z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />
            {/* Menu */}
            <motion.div
              id="mobile-menu"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-full xs:w-[85vw] max-w-[300px] bg-white dark:bg-dark-bg shadow-2xl z-50 lg:hidden overflow-y-auto overscroll-contain"
            >
              {/* Drawer Header with school branding */}
              <div className="flex items-center justify-between px-5 py-4 bg-gradient-to-r from-primary to-primary-700 text-white">
                <Link
                  to="/"
                  className="flex items-center gap-2.5"
                  onClick={() => setMobileOpen(false)}
                  aria-label="Home"
                >
                  <img
                    src="/images/logo.jpg"
                    alt="Kalaimahal Logo"
                    className="h-9 w-9 rounded-full object-contain bg-white p-0.5 shadow"
                  />
                  <div>
                    <p className="text-sm font-bold font-heading leading-tight">Kalaimahal</p>
                    <p className="text-[10px] text-white/80 leading-tight">Matric. Hr. Sec. School</p>
                  </div>
                </Link>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-1.5 rounded-lg bg-white/20 hover:bg-white/30 transition"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Nav Links */}
              <div className="p-4">
                <div className="space-y-1">
                  {navLinks.map(link => (
                    <NavLink
                      key={link.to}
                      to={link.to}
                      className={({ isActive }) =>
                        `block px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                          isActive
                            ? 'text-primary bg-primary/8 dark:bg-primary/15 font-semibold'
                            : 'text-text dark:text-dark-text hover:bg-gray-50 dark:hover:bg-dark-card hover:text-primary dark:hover:text-primary-400'
                        }`
                      }
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.name}
                    </NavLink>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="mt-6 pt-4 border-t border-gray-200 dark:border-dark-border space-y-2">
                  <Link
                    to="/admissions"
                    className="flex items-center justify-center w-full px-4 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary-700 transition shadow-sm"
                    onClick={() => setMobileOpen(false)}
                  >
                    Apply Now
                  </Link>
                  <Link
                    to="/contact"
                    className="flex items-center justify-center w-full px-4 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition"
                    onClick={() => setMobileOpen(false)}
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
