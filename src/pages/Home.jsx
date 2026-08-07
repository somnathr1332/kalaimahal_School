import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/ui/SEO';
import { motion } from 'framer-motion';
import { assetPath } from '../utils/assetPath';
import {
  GraduationCap, Users, Trophy, TrendingUp, ArrowRight,
  BookOpen, FlaskConical, Blocks, Calendar, Star,
  Building, ChevronRight
} from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import AnimatedCounter from '../components/ui/AnimatedCounter';
import TestimonialSlider from '../components/ui/TestimonialSlider';
import CTABanner from '../components/ui/CTABanner';
import Card from '../components/ui/Card';
import schoolInfo from '../data/schoolInfo.json';
import academicsData from '../data/academics.json';
import testimonials from '../data/testimonials.json';
import eventsData from '../data/events.json';

const iconMap = { Blocks, BookOpen, FlaskConical, GraduationCap };

export default function Home() {
  const [isVideoOpen, setIsVideoOpen] = React.useState(false);
  const stats = schoolInfo.stats;
  const levels = academicsData.levels;
  const upcomingEvents = eventsData.upcoming.slice(0, 3);

  return (
    <>
      <SEO 
        title="Home"
        description="Kalaimahal Matriculation Higher Secondary School, Mayiladuthurai — Nurturing excellence since 1970. Admissions open."
        path="/"
      />

      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gray-950">
        {/* Background Image Overlay Loop */}
        <div className="absolute inset-0 z-0">
          <img
            src={assetPath('/images/gallery/school-building.webp')}
            alt="School Campus"
            className="w-full h-full object-cover opacity-70 scale-105 transition-all duration-1000"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950/60 via-gray-950/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 via-transparent to-transparent" />
        </div>

        {/* Floating shapes */}
        <div className="absolute top-20 left-[10%] w-64 h-64 rounded-full bg-primary/3 animate-float" />
        <div className="absolute bottom-20 right-[8%] w-48 h-48 shape-blob bg-accent/3 animate-float-delayed" />

        <div className="section-container relative z-10 py-16 md:py-24">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-white/90 text-sm font-medium mb-6">
                  <Star size={14} className="text-secondary fill-secondary" />
                  Celebrating {stats.yearsOfExcellence} Years of Excellence
                </span>
              </motion.div>

              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-heading text-white leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Shaping{' '}
                <span className="text-secondary">Bright</span>{' '}
                Futures Since{' '}
                <span className="text-secondary">{schoolInfo.foundedYear}</span>
              </motion.h1>

              <motion.p
                className="mt-5 text-lg md:text-xl text-white/80 max-w-xl leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {schoolInfo.tagline} — Where every student discovers their potential through knowledge, character, and purpose.
              </motion.p>

              <motion.div
                className="mt-8 flex flex-wrap gap-4 items-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Link to="/admissions" className="inline-flex items-center justify-center px-6 py-3 bg-secondary text-white font-semibold rounded-lg hover:bg-secondary-600 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5">
                  Apply Now
                  <ArrowRight size={18} className="ml-2" />
                </Link>
                <Link
                  to="/campus"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/15 transition-all duration-300"
                >
                  Explore Campus
                </Link>
              </motion.div>
            </div>

            {/* Video Play Button Column */}
            <div className="md:col-span-4 flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="relative"
              >
                <button
                  onClick={() => setIsVideoOpen(true)}
                  className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-accent hover:bg-accent-600 flex items-center justify-center shadow-lg transition-transform hover:scale-105 focus:outline-none relative group"
                  aria-label="Play school video"
                >
                  {/* Pulsing rings */}
                  <span className="absolute inset-0 rounded-full bg-accent/35 animate-ping" />
                  <span className="absolute -inset-4 rounded-full bg-accent/20 animate-pulse-glow" />
                  <svg className="w-8 h-8 md:w-10 md:h-10 text-heading fill-current translate-x-0.5 group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
                <span className="block text-center text-white/90 text-sm font-semibold mt-4 tracking-wider uppercase">
                  Watch Promo Video
                </span>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 40L48 36C96 32 192 24 288 28C384 32 480 48 576 52C672 56 768 48 864 40C960 32 1056 24 1152 28C1248 32 1344 48 1392 56L1440 64V80H0V40Z" className="fill-background dark:fill-dark-bg" />
          </svg>
        </div>
      </section>

      {/* Video Modal Overlay */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4">
          <button
            onClick={() => setIsVideoOpen(false)}
            className="absolute top-4 right-4 text-white hover:text-accent transition p-2"
            aria-label="Close video player"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="w-full max-w-4xl aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black border border-white/10" onClick={(e) => e.stopPropagation()}>
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/KTvolqlcfEE?autoplay=1"
              title="School Tour Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}

      {/* ===== STATS BAR ===== */}
      <section className="section-padding bg-background dark:bg-dark-bg">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <AnimatedCounter end={stats.yearsOfExcellence} suffix="+" label="Years of Excellence" icon={Building} delay={0} />
            <AnimatedCounter end={stats.totalStudents} suffix="+" label="Students" icon={Users} delay={1} />
            <AnimatedCounter end={stats.totalFaculty} suffix="+" label="Faculty Members" icon={GraduationCap} delay={2} />
            <AnimatedCounter end={stats.passRate} suffix="%" label="Pass Rate" icon={TrendingUp} delay={3} />
          </div>
        </div>
      </section>

      {/* ===== ABOUT PREVIEW ===== */}
      <section className="section-padding bg-white dark:bg-dark-card/30 gradient-mesh">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 shadow-xl">
                  <img
                    src={assetPath('/images/gallery/school-building.webp')}
                    alt="Kalaimahal School Building"
                    className="w-full h-full object-cover"
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                  {/* Fallback decorative */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <GraduationCap size={64} className="text-primary/15" />
                  </div>
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl p-4 shadow-lg">
                  <p className="text-2xl font-bold text-primary font-heading">{stats.yearsOfExcellence}+</p>
                  <p className="text-xs text-text dark:text-dark-text">Years of Excellence</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                About Our School
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-heading dark:text-dark-heading mb-4">
                A Legacy of Academic{' '}
                <span className="gradient-text">Excellence</span>
              </h2>
              <p className="text-text dark:text-dark-text leading-relaxed mb-4">
                {schoolInfo.vision}
              </p>
              <p className="text-text dark:text-dark-text leading-relaxed mb-6">
                Founded in {schoolInfo.foundedYear}, {schoolInfo.name} has been a beacon of quality education in {schoolInfo.address.city}, nurturing generations of students into confident, responsible citizens.
              </p>
              <Link to="/about" className="btn-primary group">
                Learn More About Us
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== ACADEMICS HIGHLIGHTS ===== */}
      <section className="section-padding bg-background dark:bg-dark-bg">
        <div className="section-container">
          <SectionHeading
            title="Academic Programs"
            subtitle="Comprehensive education from kindergarten through higher secondary, preparing students for a brilliant future."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {levels.map((level, i) => {
              const Icon = iconMap[level.icon] || BookOpen;
              return (
                <Card
                  key={level.id}
                  icon={Icon}
                  title={level.name}
                  description={level.grades}
                  color={level.color}
                  delay={i}
                >
                  <p className="text-xs text-text/70 dark:text-dark-text/70 mt-2">{level.ageRange}</p>
                  <Link
                    to="/academics"
                    className="inline-flex items-center text-sm font-medium text-primary mt-3 hover:gap-2 transition-all"
                  >
                    Learn More <ChevronRight size={14} className="ml-0.5" />
                  </Link>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="section-padding bg-white dark:bg-dark-card/30">
        <div className="section-container">
          <SectionHeading
            title="What People Say"
            subtitle="Hear from parents, students, and alumni about their experience with Kalaimahal School."
          />
          <TestimonialSlider testimonials={testimonials.testimonials} />
        </div>
      </section>

      {/* ===== UPCOMING EVENTS ===== */}
      <section className="section-padding bg-background dark:bg-dark-bg">
        <div className="section-container">
          <SectionHeading
            title="Upcoming Events"
            subtitle="Stay updated with the latest happenings at our school."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event, i) => {
              const eventDate = new Date(event.date);
              const typeInfo = eventsData.eventTypes[event.type] || {};
              return (
                <motion.div
                  key={event.id}
                  className="glass rounded-2xl overflow-hidden card-hover"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  {/* Date header */}
                  <div className="bg-primary px-5 py-3 flex items-center justify-between">
                    <div className="text-white">
                      <span className="text-2xl font-bold font-heading">{eventDate.getDate()}</span>
                      <span className="ml-2 text-sm text-white/80">
                        {eventDate.toLocaleDateString('en-IN', { month: 'short', year: 'numeric' })}
                      </span>
                    </div>
                    <span
                      className="px-2.5 py-0.5 rounded-full text-xs font-medium text-white"
                      style={{ backgroundColor: typeInfo.color || '#3B82F6' }}
                    >
                      {typeInfo.label || event.type}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold font-heading text-heading dark:text-dark-heading mb-2">{event.title}</h3>
                    <p className="text-sm text-text dark:text-dark-text line-clamp-2">{event.description}</p>
                    <div className="mt-3 flex items-center gap-2 text-xs text-text/60 dark:text-dark-text/60">
                      <Calendar size={12} />
                      {event.time} · {event.location}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
          <div className="text-center mt-8">
            <Link to="/events" className="btn-outline">
              View All Events <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <CTABanner />
    </>
  );
}
