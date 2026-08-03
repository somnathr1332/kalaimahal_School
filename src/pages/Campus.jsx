import React from 'react';
import SEO from '../components/ui/SEO';
import { motion } from 'framer-motion';
import { Building, BookOpen, Monitor, Cctv } from 'lucide-react';
import PageBanner from '../components/layout/PageBanner';
import SectionHeading from '../components/ui/SectionHeading';
import FacilityCard from '../components/ui/FacilityCard';
import AnimatedCounter from '../components/ui/AnimatedCounter';
import CTABanner from '../components/ui/CTABanner';
import campusData from '../data/campus.json';
import schoolInfo from '../data/schoolInfo.json';

export default function Campus() {
  return (
    <>
      <SEO 
        title="Campus & Facilities"
        description="Explore our world-class campus facilities including smart classrooms, science labs, library, sports complex, and more."
        path="/campus"
      />

      <PageBanner
        title="Campus & Facilities"
        subtitle="A modern, well-equipped campus designed to inspire learning and growth"
        breadcrumbs={[{ label: 'Campus' }]}
      />

      {/* Campus Stats */}
      <section className="section-padding gradient-primary banner-pattern">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { label: 'Campus Area', value: campusData.campusStats.totalArea, icon: Building },
              { label: 'Buildings', value: campusData.campusStats.buildings, icon: Building },
              { label: 'Classrooms', value: campusData.campusStats.classrooms, icon: BookOpen },
              { label: 'Laboratories', value: campusData.campusStats.laboratories, icon: Monitor },
              { label: 'Library Books', value: `${(campusData.campusStats.libraryBooks / 1000).toFixed(0)}K+`, icon: BookOpen },
              { label: 'CCTV Cameras', value: campusData.campusStats.cctvCameras, icon: Cctv },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <div className="w-12 h-12 rounded-full bg-white/15 flex items-center justify-center mx-auto mb-2">
                  <stat.icon size={20} className="text-accent" />
                </div>
                <p className="text-2xl font-bold text-white font-heading">{stat.value}</p>
                <p className="text-xs text-white/70">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="section-padding bg-background dark:bg-dark-bg">
        <div className="section-container">
          <SectionHeading
            title="Our Facilities"
            subtitle="State-of-the-art infrastructure to support academic excellence and all-round development."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {campusData.facilities.map((facility, i) => (
              <FacilityCard key={facility.id} facility={facility} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Security */}
      <section className="section-padding bg-white dark:bg-dark-card/30">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeading
              title="Safe & Secure Campus"
              subtitle="Your child's safety is our top priority."
            />
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { title: 'CCTV Surveillance', desc: '80+ cameras covering the entire campus with 24/7 monitoring.' },
                { title: 'Trained Staff', desc: 'Security personnel and trained staff ensure a safe environment at all times.' },
                { title: 'Medical Facility', desc: 'On-campus medical room with a qualified nurse for immediate health care.' },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  className="glass rounded-xl p-5"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <h3 className="font-semibold font-heading text-heading dark:text-dark-heading mb-2">{item.title}</h3>
                  <p className="text-sm text-text dark:text-dark-text">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Visit Our Campus"
        subtitle="Schedule a campus tour to see our world-class facilities firsthand."
        primaryAction={{ label: 'Schedule a Tour', to: '/contact' }}
      />
    </>
  );
}
