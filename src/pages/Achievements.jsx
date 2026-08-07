import React, { useState } from 'react';
import SEO from '../components/ui/SEO';
import { motion } from 'framer-motion';
import { Award, Trophy, Music, GraduationCap, Star, Heart, Stethoscope, Landmark, Code } from 'lucide-react';
import { assetPath } from '../utils/assetPath';
import PageBanner from '../components/layout/PageBanner';
import SectionHeading from '../components/ui/SectionHeading';
import Card from '../components/ui/Card';
import AnimatedCounter from '../components/ui/AnimatedCounter';
import CTABanner from '../components/ui/CTABanner';
import achievementsData from '../data/achievements.json';
import schoolInfo from '../data/schoolInfo.json';

const iconMap = {
  Award: Award,
  Trophy: Trophy,
  Music: Music,
  GraduationCap: GraduationCap,
  Star: Star,
  Heart: Heart
};

const alumniIconMap = {
  Stethoscope,
  Landmark,
  Code,
  Trophy
};

export default function Achievements() {
  const [activeTab, setActiveTab] = useState('all');
  const stats = achievementsData.stats;

  const allItems = achievementsData.categories.reduce((acc, cat) => {
    const itemsWithCat = cat.items.map(item => ({ ...item, categoryId: cat.id, categoryName: cat.name }));
    return [...acc, ...itemsWithCat];
  }, []);

  const filteredItems = activeTab === 'all'
    ? allItems
    : allItems.filter(item => item.categoryId === activeTab);

  return (
    <>
      <SEO
        title="Achievements & Alumni"
        description="Discover our students' achievements in academics, sports, and cultural competitions, along with our notable alumni."
        path="/achievements"
      />

      <PageBanner
        title="Achievements & Alumni"
        subtitle="Celebrating our legacy of awards, sports championships, and successful alumni"
        breadcrumbs={[{ label: 'Achievements' }]}
      />

      {/* Stats Counters */}
      <section className="section-padding bg-white dark:bg-dark-card/30">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <AnimatedCounter end={stats.totalAwards} suffix="+" label="Total Awards Won" icon={Trophy} delay={0} />
            <AnimatedCounter end={stats.stateToppers} suffix="+" label="State Board Toppers" icon={Award} delay={1} />
            <AnimatedCounter end={stats.districtChampionships} suffix="+" label="District Championships" icon={Star} delay={2} />
            <AnimatedCounter end={stats.nationalParticipants} suffix="+" label="National Level Participants" icon={GraduationCap} delay={3} />
          </div>
        </div>
      </section>

      {/* Achievements Showcase */}
      <section className="section-padding bg-background dark:bg-dark-bg">
        <div className="section-container">
          <SectionHeading
            title="Student Achievements"
            subtitle="Honouring the dedication and outstanding performance of our students in various fields."
          />

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === 'all'
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-white dark:bg-dark-card text-text dark:text-dark-text hover:bg-primary/10'
                }`}
            >
              All Achievements
            </button>
            {achievementsData.categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === cat.id
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-white dark:bg-dark-card text-text dark:text-dark-text hover:bg-primary/10'
                  }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Grid of achievements */}
          <motion.div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" layout>
            {filteredItems.map((item, i) => {
              const category = achievementsData.categories.find(c => c.id === item.categoryId);
              const Icon = iconMap[category?.icon] || Trophy;

              return (
                <Card
                  key={i}
                  icon={Icon}
                  title={item.title}
                  description={item.description}
                  color={item.highlight ? '#D97706' : '#1E3A8A'}
                  delay={i}
                  className={item.highlight ? 'ring-2 ring-secondary/30 dark:ring-secondary/20' : ''}
                >
                  <div className="mt-4 flex items-center justify-between text-xs font-semibold">
                    <span className="text-primary">{item.categoryName}</span>
                    <span className="text-text/50 dark:text-dark-text/50">{item.year}</span>
                  </div>
                </Card>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Academic Toppers */}
      <section className="section-padding bg-primary/5 dark:bg-primary/5">
        <div className="section-container">
          <SectionHeading
            title="Academic Toppers"
            subtitle="Celebrating our highest achievers in the state board examinations."
          />

          <div className="mb-32">
            <h3 className="text-3xl font-bold font-heading text-primary mb-16 flex items-center justify-center gap-3">
              <Award className="text-accent" size={32} /> Grade 12 (HSC) Top Performers
            </h3>

            <div className="relative flex flex-col md:block items-center justify-center gap-16 md:gap-0 min-h-[auto] md:min-h-[500px]">

              {/* Rank 1 (Center - First on mobile) */}
              <div className="md:absolute md:left-1/2 md:-translate-x-1/2 md:top-0 z-30 flex flex-col items-center gap-5 order-1 md:order-none">
                <motion.div
                  className="w-56 h-56 md:w-72 md:h-72 bg-transparent rounded-full shadow-[0_0_60px_rgba(250,204,21,0.5)] md:shadow-[0_0_80px_rgba(250,204,21,0.6)] cursor-pointer relative group"
                  initial={{ opacity: 0, scale: 0.5, y: 50 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  animate={{ y: [0, -15, 0] }}
                  transition={{ opacity: { duration: 0.6 }, scale: { duration: 0.6 }, y: { repeat: Infinity, duration: 5, ease: "easeInOut" } }}
                  whileHover={{ scale: 1.05, boxShadow: "0 0 100px rgba(250,204,21,0.8)" }}
                >
                  <div className="w-full h-full bg-transparent rounded-full overflow-hidden relative">
                    <img src={assetPath('/images/toppers/grade12/1.png')} alt="Grade 12 Rank 1" className="w-full h-full object-cover object-top" />
                    <div className="absolute inset-0 rounded-full shadow-[inset_0_0_40px_rgba(250,204,21,0.4)] pointer-events-none group-hover:shadow-[inset_0_0_20px_rgba(250,204,21,0.6)] transition-all duration-300 mix-blend-overlay" />
                  </div>

                  {/* Glowing Trophy Badge - Borderless */}
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-yellow-200 to-yellow-500 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(250,204,21,0.8)] backdrop-blur-md">
                    <Trophy size={24} className="text-yellow-900 drop-shadow-md md:w-7 md:h-7" />
                  </div>
                </motion.div>

                <div className="text-center bg-gradient-to-r from-accent/90 to-yellow-500/90 backdrop-blur-xl px-6 py-2 md:px-8 md:py-2.5 rounded-full shadow-[0_15px_40px_rgba(217,119,6,0.4)] mt-2 md:mt-4">
                  <span className="font-extrabold text-white text-base md:text-lg drop-shadow-md">Rank 1 School Topper</span>
                </div>
              </div>

              {/* Rank 2 (Left - Second on mobile) */}
              <div className="md:absolute md:left-[5%] lg:left-[15%] md:top-24 z-20 flex flex-col items-center gap-4 md:gap-5 order-2 md:order-none w-full md:w-auto">
                <motion.div
                  className="w-40 h-40 md:w-56 md:h-56 bg-transparent rounded-full overflow-hidden shadow-[0_0_30px_rgba(156,163,175,0.4)] md:shadow-[0_0_40px_rgba(156,163,175,0.5)] cursor-pointer relative group"
                  initial={{ opacity: 0, scale: 0.5, x: -50 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  animate={{ y: [0, -12, 0] }}
                  transition={{ opacity: { duration: 0.6 }, scale: { duration: 0.6 }, x: { duration: 0.6 }, y: { repeat: Infinity, duration: 4.5, ease: "easeInOut" } }}
                  whileHover={{ scale: 1.1, rotate: -5, boxShadow: "0 0 60px rgba(156,163,175,0.7)" }}
                >
                  <img src={assetPath('/images/toppers/grade12/2.png')} alt="Grade 12 Rank 2" className="w-full h-full object-cover object-top" />
                  <div className="absolute inset-0 rounded-full shadow-[inset_0_0_20px_rgba(255,255,255,0.3)] pointer-events-none group-hover:shadow-[inset_0_0_15px_rgba(255,255,255,0.5)] transition-all duration-300 mix-blend-overlay" />
                </motion.div>

                <div className="text-center bg-white/40 dark:bg-dark-card/40 backdrop-blur-2xl px-5 py-1.5 md:px-6 md:py-2 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.1)]">
                  <span className="font-extrabold text-gray-800 dark:text-gray-200 text-sm md:text-base">Rank 2</span>
                  <span className="mx-2 text-primary/30">|</span>
                  <span className="text-xs md:text-sm font-bold text-text/70 dark:text-dark-text/70 uppercase tracking-widest">Science</span>
                </div>
              </div>

              {/* Rank 3 (Right - Third on mobile) */}
              <div className="md:absolute md:right-[5%] lg:right-[15%] md:top-28 z-10 flex flex-col items-center gap-4 md:gap-5 order-3 md:order-none w-full md:w-auto">
                <motion.div
                  className="w-40 h-40 md:w-52 md:h-52 bg-transparent rounded-full overflow-hidden shadow-[0_0_30px_rgba(180,83,9,0.4)] md:shadow-[0_0_40px_rgba(180,83,9,0.5)] cursor-pointer relative group"
                  initial={{ opacity: 0, scale: 0.5, x: 50 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  animate={{ y: [0, -10, 0] }}
                  transition={{ opacity: { duration: 0.6 }, scale: { duration: 0.6 }, x: { duration: 0.6 }, y: { repeat: Infinity, duration: 4, ease: "easeInOut" } }}
                  whileHover={{ scale: 1.1, rotate: 5, boxShadow: "0 0 60px rgba(180,83,9,0.7)" }}
                >
                  <img src={assetPath('/images/toppers/grade12/3.png')} alt="Grade 12 Rank 3" className="w-full h-full object-cover object-top" />
                  <div className="absolute inset-0 rounded-full shadow-[inset_0_0_20px_rgba(255,255,255,0.3)] pointer-events-none group-hover:shadow-[inset_0_0_15px_rgba(255,255,255,0.5)] transition-all duration-300 mix-blend-overlay" />
                </motion.div>

                <div className="text-center bg-white/40 dark:bg-dark-card/40 backdrop-blur-2xl px-5 py-1.5 md:px-6 md:py-2 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.1)]">
                  <span className="font-extrabold text-amber-700 dark:text-amber-500 text-sm md:text-base">Rank 3</span>
                  <span className="mx-2 text-primary/30">|</span>
                  <span className="text-xs md:text-sm font-bold text-text/70 dark:text-dark-text/70 uppercase tracking-widest">Science</span>
                </div>
              </div>

            </div>
          </div>

          <div className="pb-16">
            <h3 className="text-3xl font-bold font-heading text-primary mb-16 flex items-center justify-center gap-3">
              <Award className="text-secondary" size={32} /> Grade 10 (SSLC) Top Performers
            </h3>

            <div className="relative flex flex-col md:block items-center justify-center gap-16 md:gap-0 min-h-[auto] md:min-h-[500px]">

              {/* Rank 1 (Center - First on mobile) */}
              <div className="md:absolute md:left-1/2 md:-translate-x-1/2 md:top-4 z-30 flex flex-col items-center gap-5 order-1 md:order-none">
                <motion.div
                  className="w-56 h-56 md:w-72 md:h-72 bg-transparent rounded-full shadow-[0_0_60px_rgba(59,130,246,0.5)] md:shadow-[0_0_80px_rgba(59,130,246,0.6)] cursor-pointer relative group"
                  initial={{ opacity: 0, scale: 0.5, y: 50 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  animate={{ y: [0, -12, 0] }}
                  transition={{ opacity: { duration: 0.6 }, scale: { duration: 0.6 }, y: { repeat: Infinity, duration: 5.2, ease: "easeInOut" } }}
                  whileHover={{ scale: 1.05, boxShadow: "0 0 100px rgba(59,130,246,0.8)" }}
                >
                  <div className="w-full h-full bg-transparent rounded-full overflow-hidden relative">
                    <img src={assetPath('/images/toppers/grade10/1.png')} alt="Grade 10 Rank 1" className="w-full h-full object-cover object-top" />
                    <div className="absolute inset-0 rounded-full shadow-[inset_0_0_40px_rgba(96,165,250,0.4)] pointer-events-none group-hover:shadow-[inset_0_0_20px_rgba(96,165,250,0.6)] transition-all duration-300 mix-blend-overlay" />
                  </div>

                  {/* Glowing Trophy Badge - Borderless */}
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-blue-300 to-blue-600 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.8)] backdrop-blur-md">
                    <Trophy size={24} className="text-white drop-shadow-md md:w-7 md:h-7" />
                  </div>
                </motion.div>

                <div className="text-center bg-gradient-to-r from-secondary/90 to-blue-500/90 backdrop-blur-xl px-6 py-2 md:px-8 md:py-2.5 rounded-full shadow-[0_15px_40px_rgba(59,130,246,0.4)] mt-2 md:mt-4">
                  <span className="font-extrabold text-white text-base md:text-lg drop-shadow-md">Rank 1 School Topper</span>
                </div>
              </div>

              {/* Rank 2 (Left - Second on mobile) */}
              <div className="md:absolute md:left-[5%] lg:left-[15%] md:top-28 z-20 flex flex-col items-center gap-4 md:gap-5 order-2 md:order-none w-full md:w-auto">
                <motion.div
                  className="w-40 h-40 md:w-56 md:h-56 bg-transparent rounded-full overflow-hidden shadow-[0_0_30px_rgba(156,163,175,0.4)] md:shadow-[0_0_40px_rgba(156,163,175,0.5)] cursor-pointer relative group"
                  initial={{ opacity: 0, scale: 0.5, x: -50 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  animate={{ y: [0, -10, 0] }}
                  transition={{ opacity: { duration: 0.6 }, scale: { duration: 0.6 }, x: { duration: 0.6 }, y: { repeat: Infinity, duration: 4.2, ease: "easeInOut" } }}
                  whileHover={{ scale: 1.1, rotate: -5, boxShadow: "0 0 60px rgba(156,163,175,0.7)" }}
                >
                  <img src={assetPath('/images/toppers/grade10/2.png')} alt="Grade 10 Rank 2" className="w-full h-full object-cover object-top" />
                  <div className="absolute inset-0 rounded-full shadow-[inset_0_0_20px_rgba(255,255,255,0.3)] pointer-events-none group-hover:shadow-[inset_0_0_15px_rgba(255,255,255,0.5)] transition-all duration-300 mix-blend-overlay" />
                </motion.div>

                <div className="text-center bg-white/40 dark:bg-dark-card/40 backdrop-blur-2xl px-5 py-1.5 md:px-6 md:py-2 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.1)]">
                  <span className="font-extrabold text-gray-800 dark:text-gray-200 text-sm md:text-base">Rank 2</span>
                  <span className="mx-2 text-primary/30">|</span>
                  <span className="text-xs md:text-sm font-bold text-text/70 dark:text-dark-text/70 uppercase tracking-widest">General</span>
                </div>
              </div>

              {/* Rank 3 (Right - Third on mobile) */}
              <div className="md:absolute md:right-[5%] lg:right-[15%] md:top-32 z-10 flex flex-col items-center gap-4 md:gap-5 order-3 md:order-none w-full md:w-auto">
                <motion.div
                  className="w-40 h-40 md:w-52 md:h-52 bg-transparent rounded-full overflow-hidden shadow-[0_0_30px_rgba(180,83,9,0.4)] md:shadow-[0_0_40px_rgba(180,83,9,0.5)] cursor-pointer relative group"
                  initial={{ opacity: 0, scale: 0.5, x: 50 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  animate={{ y: [0, -14, 0] }}
                  transition={{ opacity: { duration: 0.6 }, scale: { duration: 0.6 }, x: { duration: 0.6 }, y: { repeat: Infinity, duration: 4.8, ease: "easeInOut" } }}
                  whileHover={{ scale: 1.1, rotate: 5, boxShadow: "0 0 60px rgba(180,83,9,0.7)" }}
                >
                  <img src={assetPath('/images/toppers/grade10/3.png')} alt="Grade 10 Rank 3" className="w-full h-full object-cover object-top" />
                  <div className="absolute inset-0 rounded-full shadow-[inset_0_0_20px_rgba(255,255,255,0.3)] pointer-events-none group-hover:shadow-[inset_0_0_15px_rgba(255,255,255,0.5)] transition-all duration-300 mix-blend-overlay" />
                </motion.div>

                <div className="text-center bg-white/40 dark:bg-dark-card/40 backdrop-blur-2xl px-5 py-1.5 md:px-6 md:py-2 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.1)]">
                  <span className="font-extrabold text-amber-700 dark:text-amber-500 text-sm md:text-base">Rank 3</span>
                  <span className="mx-2 text-primary/30">|</span>
                  <span className="text-xs md:text-sm font-bold text-text/70 dark:text-dark-text/70 uppercase tracking-widest">General</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Notable Alumni Spotlight */}
      <section className="section-padding bg-white dark:bg-dark-card/30">
        <div className="section-container">
          <SectionHeading
            title="Notable Alumni"
            subtitle="Our alumni carry the flag of Kalaimahal School worldwide, inspiring generations to come."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievementsData.notableAlumni.map((alum, i) => {
              const Icon = alumniIconMap[alum.icon] || GraduationCap;
              return (
                <motion.div
                  key={alum.name}
                  className="glass p-6 rounded-2xl flex flex-col items-center text-center card-hover"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 text-primary">
                    <Icon size={24} />
                  </div>
                  <h3 className="font-bold font-heading text-heading dark:text-dark-heading mb-1">{alum.name}</h3>
                  <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-secondary/10 text-secondary mb-3">
                    Batch of {alum.batch}
                  </span>
                  <p className="text-xs text-text dark:text-dark-text leading-relaxed">{alum.achievement}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
