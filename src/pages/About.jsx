import React from 'react';
import SEO from '../components/ui/SEO';
import { motion } from 'framer-motion';
import {
  GraduationCap, Shield, Heart, Lightbulb, Users, Clock,
  Eye, Target, Quote, Phone, Mail, MapPin
} from 'lucide-react';
import PageBanner from '../components/layout/PageBanner';
import SectionHeading from '../components/ui/SectionHeading';
import Card from '../components/ui/Card';
import Timeline from '../components/ui/Timeline';
import CTABanner from '../components/ui/CTABanner';
import schoolInfo from '../data/schoolInfo.json';
import facultyData from '../data/faculty.json';
import institutionsData from '../data/institutions.json';

const coreValueIcons = { GraduationCap, Shield, Heart, Lightbulb, Users, Clock };

export default function About() {
  return (
    <>
      <SEO 
        title="About Us"
        description={`Learn about ${schoolInfo.name} — our history, vision, mission, and core values since ${schoolInfo.foundedYear}.`}
        path="/about"
      />

      <PageBanner
        title="About Our School"
        subtitle={`A proud legacy of academic excellence and character building since ${schoolInfo.foundedYear}`}
        breadcrumbs={[{ label: 'About Us' }]}
      />

      {/* ===== SCHOOL HISTORY ===== */}
      <section className="section-padding bg-white dark:bg-dark-card/30 gradient-mesh">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-heading dark:text-dark-heading mb-5">
                {schoolInfo.stats.yearsOfExcellence}+ Years of Nurturing{' '}
                <span className="gradient-text">Young Minds</span>
              </h2>
              <div className="space-y-4 text-text dark:text-dark-text leading-relaxed">
                <p>
                  Founded in {schoolInfo.foundedYear} by visionary educators, {schoolInfo.name} began its journey with just 50 students and a dream to provide quality education to the children of {schoolInfo.address.city}.
                </p>
                <p>
                  Over five decades, the school has grown into one of the most respected educational institutions in {schoolInfo.address.district} district, nurturing thousands of students who have gone on to excel in diverse fields — from medicine and engineering to civil services and the arts.
                </p>
                <p>
                  Today, with over {schoolInfo.stats.totalStudents.toLocaleString()} students and {schoolInfo.stats.totalFaculty}+ dedicated faculty members, we continue our mission of fostering academic excellence, character development, and holistic growth.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 shadow-xl">
                <img
                  src="/images/gallery/school-building.webp"
                  alt={schoolInfo.name}
                  className="w-full h-full object-cover"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <GraduationCap size={64} className="text-primary/15" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== VISION & MISSION ===== */}
      <section className="section-padding bg-background dark:bg-dark-bg">
        <div className="section-container">
          <SectionHeading title="Vision & Mission" subtitle="The guiding principles that drive our pursuit of educational excellence." />
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              className="glass rounded-2xl p-8 relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary-500" />
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <Eye size={28} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold font-heading text-heading dark:text-dark-heading mb-3">Our Vision</h3>
              <p className="text-text dark:text-dark-text leading-relaxed">{schoolInfo.vision}</p>
            </motion.div>

            <motion.div
              className="glass rounded-2xl p-8 relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary to-accent" />
              <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-5">
                <Target size={28} className="text-secondary" />
              </div>
              <h3 className="text-xl font-bold font-heading text-heading dark:text-dark-heading mb-3">Our Mission</h3>
              <p className="text-text dark:text-dark-text leading-relaxed">{schoolInfo.mission}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== CORE VALUES ===== */}
      <section className="section-padding bg-white dark:bg-dark-card/30">
        <div className="section-container">
          <SectionHeading title="Core Values" subtitle="The foundational values that shape our educational philosophy." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {schoolInfo.coreValues.map((value, i) => {
              const Icon = coreValueIcons[value.icon] || Heart;
              return (
                <Card
                  key={value.title}
                  icon={Icon}
                  title={value.title}
                  description={value.description}
                  delay={i}
                  hover={false}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== PRINCIPAL'S MESSAGE ===== */}
      <section className="section-padding bg-background dark:bg-dark-bg gradient-mesh">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="glass rounded-2xl p-8 md:p-10 relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Quote size={40} className="text-primary/10 absolute top-6 right-6" />
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-primary-600 flex items-center justify-center text-white text-2xl font-bold font-heading shadow-lg">
                    {schoolInfo.principal.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                  </div>
                </div>
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-accent/20 text-secondary-700 dark:text-accent text-sm font-medium mb-3">
                    Principal's Message
                  </span>
                  <p className="text-text dark:text-dark-text leading-relaxed italic mb-5">
                    "{schoolInfo.principal.message}"
                  </p>
                  <div>
                    <p className="font-bold text-heading dark:text-dark-heading font-heading">{schoolInfo.principal.name}</p>
                    <p className="text-sm text-text/70 dark:text-dark-text/70">{schoolInfo.principal.qualification}</p>
                    <p className="text-xs text-text/50 dark:text-dark-text/50">{schoolInfo.principal.experience}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== FACULTY HIGHLIGHTS ===== */}
      <section className="section-padding bg-white dark:bg-dark-card/30">
        <div className="section-container">
          <SectionHeading title="Our Faculty" subtitle="Experienced, passionate educators dedicated to your child's success." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {facultyData.departments.slice(0, 8).map((dept, i) => (
              <motion.div
                key={dept.name}
                className="text-center glass rounded-2xl p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary-600 flex items-center justify-center mx-auto mb-4 text-white text-lg font-bold font-heading shadow-md">
                  {dept.head.split(' ').pop().charAt(0)}
                </div>
                <h3 className="font-semibold text-heading dark:text-dark-heading font-heading text-sm">{dept.head}</h3>
                <p className="text-xs text-primary font-medium mt-0.5">{dept.name} Department</p>
                <p className="text-xs text-text/60 dark:text-dark-text/60 mt-1">{dept.qualification}</p>
                <p className="text-xs text-text/50 dark:text-dark-text/50">{dept.experience}</p>
              </motion.div>
            ))}
          </div>
          {/* Faculty stats */}
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Total Teachers', value: facultyData.stats.totalTeachers },
              { label: 'Ph.D. Holders', value: facultyData.stats.phdHolders },
              { label: 'Avg. Experience', value: `${facultyData.stats.avgExperience} yrs` },
              { label: 'Student:Teacher', value: facultyData.stats.studentTeacherRatio },
            ].map((stat, i) => (
              <div key={stat.label} className="text-center p-4 rounded-xl bg-primary/5 dark:bg-primary/10">
                <p className="text-xl font-bold text-primary font-heading">{stat.value}</p>
                <p className="text-xs text-text/70 dark:text-dark-text/70 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== OUR INSTITUTIONS / BRANCHES ===== */}
      <section className="section-padding bg-white dark:bg-dark-card/30">
        <div className="section-container">
          <SectionHeading
            title="Our Group of Institutions"
            subtitle="The Kalaimahal Educational Trust runs a network of schools and colleges to provide top-quality education in the region."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {institutionsData.institutions.map((inst, i) => (
              <motion.div
                key={inst.id}
                className="group relative rounded-2xl overflow-hidden bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border shadow-md card-hover flex flex-col justify-between"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <div>
                  {/* Image wrapper */}
                  <div className="relative h-44 bg-gradient-to-br from-primary/10 to-primary/5 dark:from-primary/5 dark:to-primary/3 overflow-hidden">
                    <img
                      src={inst.image}
                      alt={inst.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                    {/* Fallback pattern */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <GraduationCap size={44} className="text-primary/15" />
                    </div>
                    {/* Branch type badge */}
                    <div className={`absolute top-3 right-3 px-2.5 py-0.5 rounded-full text-[10px] font-bold text-white shadow-md ${
                      inst.type === 'College' ? 'bg-secondary' : 'bg-primary'
                    }`}>
                      {inst.type}
                    </div>
                  </div>
                  {/* Info content */}
                  <div className="p-5">
                    <a 
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(inst.name + ' ' + inst.location)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[10px] font-bold text-primary hover:text-accent transition-colors uppercase tracking-wider"
                    >
                      <MapPin size={10} />
                      {inst.location}
                    </a>
                    <h3 className="font-semibold font-heading text-heading dark:text-dark-heading text-sm mt-1 leading-snug">{inst.name}</h3>
                    <p className="text-xs text-text dark:text-dark-text leading-relaxed mt-2">{inst.description}</p>
                    
                    {/* Contact Details */}
                    <div className="mt-4 pt-3 border-t border-gray-200 dark:border-dark-border/20 space-y-1.5">
                      {inst.phone && (
                        <div className="flex items-center gap-2 text-[11px] text-text/80 dark:text-dark-text/80">
                          <Phone size={11} className="text-primary" />
                          <span>{inst.phone}</span>
                        </div>
                      )}
                      {inst.email && (
                        <div className="flex items-center gap-2 text-[11px] text-text/80 dark:text-dark-text/80 break-all">
                          <Mail size={11} className="text-primary" />
                          <span>{inst.email}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                {/* Footer details */}
                <div className="px-5 pb-4 pt-3 border-t border-gray-50 dark:border-dark-border/30 flex justify-between items-center text-[10px] text-text/60 dark:text-dark-text/60">
                  <span>Estd. {inst.established}</span>
                  <span className="font-semibold text-primary">Learn More &rarr;</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SCHOOL TIMELINE ===== */}
      <section className="section-padding bg-background dark:bg-dark-bg">
        <div className="section-container">
          <SectionHeading title="Our Journey" subtitle="Key milestones in our five decades of educational excellence." />
          <Timeline items={schoolInfo.milestones} />
        </div>
      </section>

      <CTABanner />
    </>
  );
}
