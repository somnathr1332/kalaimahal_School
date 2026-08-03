import React, { useState } from 'react';
import SEO from '../components/ui/SEO';
import { motion } from 'framer-motion';
import {
  BookOpen, FlaskConical, GraduationCap, Blocks,
  Users, Monitor, Compass, ClipboardCheck,
  Award, ChevronRight, TrendingUp, Star, Trophy
} from 'lucide-react';
import PageBanner from '../components/layout/PageBanner';
import SectionHeading from '../components/ui/SectionHeading';
import Card from '../components/ui/Card';
import AnimatedCounter from '../components/ui/AnimatedCounter';
import CTABanner from '../components/ui/CTABanner';
import academicsData from '../data/academics.json';
import schoolInfo from '../data/schoolInfo.json';

const levelIcons = { Blocks, BookOpen, FlaskConical, GraduationCap };
const methodIcons = { Users, Monitor, Compass, ClipboardCheck };

export default function Academics() {
  const [activeLevel, setActiveLevel] = useState(null);

  return (
    <>
      <SEO 
        title="Academics"
        description="Explore our comprehensive academic programs from Primary to Higher Secondary with innovative teaching methodology."
        path="/academics"
      />

      <PageBanner
        title="Academics"
        subtitle="Comprehensive, quality education from kindergarten through higher secondary"
        breadcrumbs={[{ label: 'Academics' }]}
      />

      {/* ===== GRADE LEVELS ===== */}
      <section className="section-padding bg-white dark:bg-dark-card/30">
        <div className="section-container">
          <SectionHeading
            title="Academic Programs"
            subtitle="We offer a well-structured curriculum across four levels, each designed to meet the developmental needs of students."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {academicsData.levels.map((level, i) => {
              const Icon = levelIcons[level.icon] || BookOpen;
              const isActive = activeLevel === level.id;
              return (
                <motion.div
                  key={level.id}
                  className={`rounded-2xl p-6 cursor-pointer transition-all duration-300 border-2 ${
                    isActive
                      ? 'border-primary shadow-xl bg-primary/5 dark:bg-primary/10'
                      : 'border-gray-200 dark:border-dark-border bg-white dark:bg-dark-card hover:border-primary/30 hover:shadow-lg'
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  onClick={() => setActiveLevel(isActive ? null : level.id)}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${level.color}15` }}
                  >
                    <Icon size={24} style={{ color: level.color }} />
                  </div>
                  <h3 className="text-lg font-semibold font-heading text-heading dark:text-dark-heading mb-1">{level.name}</h3>
                  <p className="text-sm font-medium" style={{ color: level.color }}>{level.grades}</p>
                  <p className="text-xs text-text/60 dark:text-dark-text/60 mt-1">{level.ageRange}</p>
                  <p className="text-sm text-text dark:text-dark-text mt-3 line-clamp-3">{level.description}</p>
                  <div className="mt-3 flex items-center text-xs font-medium text-primary">
                    {isActive ? 'Hide Details' : 'View Details'} <ChevronRight size={12} className={`ml-0.5 transition-transform ${isActive ? 'rotate-90' : ''}`} />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Expanded level details */}
          {activeLevel && (() => {
            const level = academicsData.levels.find(l => l.id === activeLevel);
            if (!level) return null;
            return (
              <motion.div
                key={activeLevel}
                className="mt-8 glass rounded-2xl p-6 md:p-8"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-bold font-heading text-heading dark:text-dark-heading mb-4">{level.name} — Details</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-sm text-primary mb-2">Key Highlights</h4>
                    <ul className="space-y-2">
                      {level.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-text dark:text-dark-text">
                          <Star size={12} className="text-accent fill-accent mt-1 flex-shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-primary mb-2">
                      {level.groups ? 'Subject Groups' : 'Subjects Offered'}
                    </h4>
                    {level.groups ? (
                      <div className="space-y-3">
                        {level.groups.map(g => (
                          <div key={g.name}>
                            <p className="text-sm font-medium text-heading dark:text-dark-heading">{g.name}</p>
                            <div className="flex flex-wrap gap-1.5 mt-1">
                              {g.subjects.map(s => (
                                <span key={s} className="px-2 py-0.5 rounded-full text-xs bg-primary/10 text-primary font-medium">{s}</span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="flex flex-wrap gap-1.5">
                        {level.subjects.map(s => (
                          <span key={s} className="px-2.5 py-1 rounded-full text-xs bg-primary/10 text-primary font-medium">{s}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })()}
        </div>
      </section>

      {/* ===== TEACHING METHODOLOGY ===== */}
      <section className="section-padding bg-background dark:bg-dark-bg">
        <div className="section-container">
          <SectionHeading
            title="Teaching Methodology"
            subtitle="Our innovative approach to education ensures every student thrives."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {academicsData.methodology.map((m, i) => {
              const Icon = methodIcons[m.icon] || BookOpen;
              return (
                <Card key={m.title} icon={Icon} title={m.title} description={m.description} delay={i} />
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== EXAM RESULTS ===== */}
      <section className="relative section-padding overflow-hidden bg-gray-950">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-[30%] -left-[10%] w-[50%] h-[70%] rounded-full bg-primary/20 blur-[120px]" />
          <div className="absolute bottom-[0%] -right-[10%] w-[40%] h-[60%] rounded-full bg-accent/20 blur-[100px]" />
        </div>

        <div className="section-container relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6"
            >
              <Award size={18} className="text-accent" />
              <span className="text-sm font-medium text-white tracking-wide uppercase">Academic Excellence</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold font-heading text-white mb-4"
            >
              Exam Results <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-yellow-200">2025</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-white/70"
            >
              Our students continue to achieve outstanding results year after year, reflecting our commitment to academic brilliance.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {Object.entries(academicsData.examResults).map(([key, result], i) => (
              <motion.div
                key={key}
                className="group relative bg-white/5 backdrop-blur-xl rounded-[2rem] p-8 border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:bg-white/10 transition-all duration-500 overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
              >
                {/* Subtle Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="text-2xl font-bold text-white font-heading">
                      {key === 'grade10' ? 'SSLC (Grade 10)' : 'HSC (Grade 12)'}
                    </h3>
                    <div className="p-3 bg-white/10 rounded-xl">
                      <GraduationCap className="text-accent" size={24} />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div className="relative p-6 rounded-2xl bg-gradient-to-b from-white/10 to-white/5 border border-white/5 overflow-hidden group-hover:border-white/10 transition-colors">
                      <div className="absolute top-0 right-0 w-16 h-16 bg-accent/20 rounded-full blur-[20px] -mr-8 -mt-8" />
                      <p className="text-4xl md:text-5xl font-extrabold text-white font-heading mb-2">{result.passRate}%</p>
                      <p className="text-sm text-white/60 font-medium uppercase tracking-wider">Pass Rate</p>
                    </div>
                    <div className="relative p-6 rounded-2xl bg-gradient-to-b from-white/10 to-white/5 border border-white/5 overflow-hidden group-hover:border-white/10 transition-colors">
                      <div className="absolute top-0 right-0 w-16 h-16 bg-primary/30 rounded-full blur-[20px] -mr-8 -mt-8" />
                      <p className="text-4xl md:text-5xl font-extrabold text-white font-heading mb-2">{result.distinctionRate}%</p>
                      <p className="text-sm text-white/60 font-medium uppercase tracking-wider">Distinction</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-5 rounded-2xl bg-black/20 border border-white/5">
                    <div className="flex-shrink-0 p-3 bg-accent/20 rounded-full">
                      <Trophy size={24} className="text-accent" />
                    </div>
                    <div>
                      <p className="text-xs text-white/50 uppercase tracking-widest font-medium mb-1">School Topper</p>
                      <p className="text-lg text-white font-bold mb-0.5">{result.schoolTopperName}</p>
                      <p className="text-sm text-accent font-medium">{result.schoolTopperMarks} <span className="text-white/40">/ {key === 'grade10' ? 500 : 600} marks</span></p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Give Your Child the Best Education"
        subtitle="Join our family of achievers. Admissions are now open for all grades."
      />
    </>
  );
}
