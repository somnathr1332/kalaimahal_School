import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { assetPath } from '../../utils/assetPath';

// Add the names of your popup images here
const promoImages = [
  '/images/popup1.jpg',
  '/images/popup2.jpg'
];

export default function PromoPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  useEffect(() => {
    // Check if the user has already seen the popup in this session
    const hasSeenPopup = sessionStorage.getItem('promo_popup_seen');
    if (!hasSeenPopup) {
      // Pick a random image from the array
      const randomImage = promoImages[Math.floor(Math.random() * promoImages.length)];
      setCurrentImage(randomImage);
      
      // Delay before showing the popup
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('promo_popup_seen', 'true');
  };

  return (
    <AnimatePresence>
      {isOpen && currentImage && (
        <div 
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={handleClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-md md:max-w-lg lg:max-w-xl mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleClose}
              className="absolute -top-12 right-0 md:-right-12 md:top-0 w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white transition-all hover:rotate-90 shadow-lg"
              aria-label="Close popup"
            >
              <X size={20} />
            </button>
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl relative">
              <img 
                src={assetPath(currentImage)} 
                alt="Admissions Announcement" 
                className="w-full h-auto max-h-[85vh] object-contain"
                onError={(e) => {
                  // Fallback if image is not loaded yet (CDN propagation)
                  e.target.alt = 'Image is loading or missing...';
                }}
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
