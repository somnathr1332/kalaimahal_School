import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/pagination';

export default function TestimonialSlider({ testimonials }) {
  if (!testimonials || testimonials.length === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={24}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="pb-12"
      >
        {testimonials.map((t) => (
          <SwiperSlide key={t.id}>
            <div className="glass rounded-2xl p-6 h-full flex flex-col relative">
              {/* Quote icon */}
              <Quote
                size={32}
                className="text-primary/15 dark:text-primary/20 absolute top-4 right-4"
              />

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating || 5 }).map((_, i) => (
                  <Star key={i} size={16} className="text-accent fill-accent" />
                ))}
              </div>

              {/* Quote text */}
              <p className="text-sm text-text dark:text-dark-text leading-relaxed flex-grow italic">
                "{t.quote}"
              </p>

              {/* Author */}
              <div className="mt-5 flex items-center gap-3 pt-4 border-t border-gray-200 dark:border-dark-border">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary-500 flex items-center justify-center text-white font-bold text-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-sm text-heading dark:text-dark-heading">{t.name}</p>
                  <p className="text-xs text-text/70 dark:text-dark-text/70">{t.role}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
}
