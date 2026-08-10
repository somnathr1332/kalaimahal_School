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
import { MapPin } from 'lucide-react';

const InteractiveMap = () => {
  const mapLocations = [
    { name: "Main Block", x: "20%", y: "30%", color: "bg-blue-500", desc: "Administrative offices and senior classrooms" },
    { name: "Science Labs", x: "45%", y: "45%", color: "bg-purple-500", desc: "Physics, Chemistry, and Biology labs" },
    { name: "Library", x: "70%", y: "25%", color: "bg-emerald-500", desc: "Central library with 15k+ books" },
    { name: "Sports Ground", x: "60%", y: "75%", color: "bg-orange-500", desc: "Football field and athletic tracks" },
    { name: "Auditorium", x: "25%", y: "65%", color: "bg-rose-500", desc: "Main event hall with 1000+ seating" }
  ];

  return (
    <div className="relative w-full max-w-4xl mx-auto h-[400px] bg-gray-100 dark:bg-gray-800 rounded-3xl border-4 border-white dark:border-dark-border shadow-inner overflow-hidden mb-16">
      {/* Background Pattern for Map */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(45deg,#000_25%,transparent_25%,transparent_75%,#000_75%,#000_100%),linear-gradient(45deg,#000_25%,transparent_25%,transparent_75%,#000_75%,#000_100%)] bg-[length:20px_20px] bg-[position:0_0,10px_10px]"></div>
      
      {/* Locations */}
      {mapLocations.map((loc, i) => (
        <div key={i} className="absolute group cursor-pointer" style={{ left: loc.x, top: loc.y }}>
          <div className="relative -ml-4 -mt-4">
            <div className={`w-8 h-8 rounded-full ${loc.color} text-white flex items-center justify-center shadow-lg transform group-hover:scale-125 transition-all z-10 relative`}>
              <MapPin size={16} />
            </div>
            {/* Ping animation */}
            <div className={`absolute inset-0 rounded-full ${loc.color} animate-ping opacity-75`}></div>
            
            {/* Tooltip */}
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 bg-white dark:bg-dark-card text-heading dark:text-dark-heading px-4 py-2 rounded-xl shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-20 border border-gray-100 dark:border-dark-border">
              <h4 className="font-bold">{loc.name}</h4>
              <p className="text-xs text-text/70 dark:text-dark-text/70 mt-0.5">{loc.desc}</p>
            </div>
          </div>
        </div>
      ))}
      <div className="absolute bottom-4 right-4 bg-white/80 dark:bg-dark-card/80 backdrop-blur-sm px-4 py-2 rounded-lg text-xs font-semibold shadow-sm">
        Hover over pins to explore
      </div>
    </div>
  );
};

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

      {/* Interactive Map */}
      <section className="section-padding bg-background dark:bg-dark-bg border-b border-gray-100 dark:border-dark-border">
        <div className="section-container">
          <SectionHeading
            title="Interactive Campus Map"
            subtitle="Explore our sprawling 5-acre campus and locate key facilities."
            alignment="center"
          />
          <InteractiveMap />
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
