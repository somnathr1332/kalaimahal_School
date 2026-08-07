import React, { useState, useEffect, useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { ThemeContext } from '../../context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';
import navigationData from '../../data/navigation.json';
import { assetPath } from '../../utils/assetPath';

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

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
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
        <div className="section-container flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group" aria-label="Kalaimahal School Home">
            <img
              src={assetPath('/images/logo.jpg')}
              alt="Kalaimahal School Logo"
              className="h-10 w-10 object-contain rounded-full shadow-sm group-hover:scale-105 transition-transform bg-white p-0.5"
            />
            <div>
              <p className="text-xs sm:text-sm font-bold font-heading text-heading dark:text-dark-heading leading-tight">
                Kalaimahal
              </p>
              <p className="text-[9px] sm:text-[10px] text-text/60 dark:text-dark-text/60 font-medium leading-tight">
                Matric. Hr. Sec. School
              </p>
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

          {/* Mobile Controls */}
          <div className="flex lg:hidden items-center gap-1">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-card transition-colors text-text dark:text-dark-text"
              aria-label="Toggle dark mode"
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} className="text-dark-text" />}
            </button>
            <button
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-card transition-colors text-text dark:text-dark-text"
              onClick={() => setMobileOpen(prev => !prev)}
              aria-controls="mobile-menu"
              aria-expanded={mobileOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* ── Mobile Dropdown Menu ── */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              id="mobile-menu"
              key="mobile-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="lg:hidden overflow-hidden bg-white dark:bg-dark-bg border-t border-gray-100 dark:border-dark-border"
            >
              {/* Nav Links */}
              <nav className="px-4 pt-3 pb-2 space-y-1">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    className={({ isActive }) =>
                      `block w-full px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                        isActive
                          ? 'text-primary bg-primary/10 dark:bg-primary/15 font-semibold'
                          : 'text-gray-700 dark:text-dark-text hover:bg-gray-50 dark:hover:bg-dark-card hover:text-primary'
                      }`
                    }
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.name}
                  </NavLink>
                ))}
              </nav>

              {/* CTA Buttons */}
              <div className="px-4 pb-5 pt-2 border-t border-gray-100 dark:border-dark-border space-y-2 mt-1">
                <Link
                  to="/admissions"
                  className="flex justify-center w-full px-4 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary-700 transition"
                  onClick={() => setMobileOpen(false)}
                >
                  Apply Now
                </Link>
                <Link
                  to="/contact"
                  className="flex justify-center w-full px-4 py-3 border-2 border-primary text-primary rounded-xl font-semibold hover:bg-primary/5 transition"
                  onClick={() => setMobileOpen(false)}
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Backdrop */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="backdrop"
            className="lg:hidden fixed inset-0 bg-black/20 z-40"
            style={{ top: '64px' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
