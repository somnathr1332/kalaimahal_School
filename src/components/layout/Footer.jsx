import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, MapPin, Phone, Mail, GraduationCap, ArrowUp } from 'lucide-react';
import navigationData from '../../data/navigation.json';
import schoolInfo from '../../data/schoolInfo.json';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gray-900 text-gray-300">
      {/* Decorative top border */}
      <div className="h-1 bg-gradient-to-r from-primary via-accent to-secondary" />

      <div className="section-container py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: About */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <img src="/images/logo.png" alt="Kalaimahal School Logo" className="h-10 w-10 object-contain rounded-full bg-white p-0.5" />
              <div>
                <span className="text-base font-bold text-white font-heading">Kalaimahal</span>
                <span className="block text-[10px] text-gray-400 -mt-1">Matric. School</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-gray-400 mb-4">
              Nurturing excellence in education since {schoolInfo.foundedYear}. Empowering young minds with knowledge, values, and skills for a brighter future.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Facebook, href: schoolInfo.socialMedia.facebook, label: 'Facebook' },
                { icon: Instagram, href: schoolInfo.socialMedia.instagram, label: 'Instagram' },
                { icon: Twitter, href: schoolInfo.socialMedia.twitter, label: 'Twitter' },
                { icon: Linkedin, href: schoolInfo.socialMedia.linkedin, label: 'LinkedIn' },
                { icon: Youtube, href: schoolInfo.socialMedia.youtube, label: 'YouTube' },
              ].map(social => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors duration-300"
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-semibold font-heading mb-4">Quick Links</h3>
            <ul className="space-y-2.5">
              {navigationData.footerLinks.quickLinks.map(link => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-gray-400 hover:text-accent transition-colors duration-200 link-underline"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h3 className="text-white font-semibold font-heading mb-4">Resources</h3>
            <ul className="space-y-2.5">
              {navigationData.footerLinks.resources.map(link => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-gray-400 hover:text-accent transition-colors duration-200 link-underline"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-white font-semibold font-heading mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex gap-3 items-start">
                <MapPin size={16} className="text-primary-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-400">
                  {schoolInfo.address.street}, {schoolInfo.address.area}, {schoolInfo.address.city} {schoolInfo.address.pincode}
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone size={16} className="text-primary-400 flex-shrink-0" />
                <a href={`tel:${schoolInfo.contact.phone[0].replace('-', '')}`} className="text-sm text-gray-400 hover:text-accent transition">
                  {schoolInfo.contact.phone[0]}
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <Mail size={16} className="text-primary-400 flex-shrink-0" />
                <a href={`mailto:${schoolInfo.contact.email}`} className="text-sm text-gray-400 hover:text-accent transition break-all">
                  {schoolInfo.contact.email}
                </a>
              </li>
            </ul>

            {/* Office hours */}
            <div className="mt-4 p-3 rounded-lg bg-gray-800/50 border border-gray-700/50">
              <p className="text-xs font-medium text-gray-300">Office Hours</p>
              <p className="text-xs text-gray-400 mt-1">{schoolInfo.timings.officeHours}</p>
              <p className="text-xs text-gray-400">{schoolInfo.timings.workingDays}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="section-container py-5 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-sm text-gray-500">
            &copy; {currentYear} {schoolInfo.shortName}. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <Link to="/privacy" className="hover:text-gray-300 transition">Privacy</Link>
            <span>·</span>
            <Link to="/terms" className="hover:text-gray-300 transition">Terms</Link>
            <span>·</span>
            <Link to="/faq" className="hover:text-gray-300 transition">FAQ</Link>
          </div>
        </div>
      </div>

      {/* Back to top button */}
      <button
        onClick={scrollToTop}
        className="absolute right-6 -top-5 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center shadow-lg hover:bg-primary-700 transition-all hover:-translate-y-0.5"
        aria-label="Back to top"
      >
        <ArrowUp size={18} />
      </button>
    </footer>
  );
};

export default Footer;
