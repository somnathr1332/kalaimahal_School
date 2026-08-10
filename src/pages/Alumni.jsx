import React from 'react';
import PageBanner from '../components/layout/PageBanner';
import SEO from '../components/ui/SEO';
import SectionHeading from '../components/ui/SectionHeading';
import CTABanner from '../components/ui/CTABanner';
import { Users, GraduationCap, Briefcase, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const Alumni = () => {
  const alumniBenefits = [
    {
      title: 'Networking Events',
      description: 'Connect with fellow alumni at our annual meets and regional chapter gatherings.',
      icon: Users
    },
    {
      title: 'Career Support',
      description: 'Access mentorship programs, job boards, and professional development resources.',
      icon: Briefcase
    },
    {
      title: 'Global Community',
      description: 'Join a worldwide network of proud Kalaimahal graduates making a difference.',
      icon: Globe
    },
    {
      title: 'Continuing Education',
      description: 'Exclusive access to webinars, workshops, and guest lectures by industry experts.',
      icon: GraduationCap
    }
  ];

  const notableAlumni = [
    { name: "Alumni Name 1", job: "Software Engineer, Tech Corp", year: "2010" },
    { name: "Alumni Name 2", job: "Doctor, General Hospital", year: "2008" },
    { name: "Alumni Name 3", job: "Entrepreneur, StartUp Inc", year: "2015" },
    { name: "Alumni Name 4", job: "Professor, University", year: "2005" },
    { name: "Alumni Name 5", job: "Senior Manager, MNC", year: "2012" },
    { name: "Alumni Name 6", job: "Scientist, Research Labs", year: "2009" }
  ];

  return (
    <>
      <SEO 
        title="Alumni Network - Kalaimahal School"
        description="Connect with the global network of Kalaimahal School alumni. Join the association, discover success stories, and give back to your alma mater."
      />
      
      <PageBanner 
        title="Alumni Network" 
        subtitle="A lifelong connection to your alma mater and fellow graduates."
      />

      {/* Welcome Section */}
      <section className="section-padding bg-gray-50/50 dark:bg-dark-bg transition-colors">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeading 
              title="Welcome Back" 
              subtitle="Our Pride, Our Ambassadors"
              alignment="center"
            />
            <p className="text-text/80 dark:text-dark-text/80 leading-relaxed mb-6">
              Since our founding in 1978, Kalaimahal School has produced thousands of successful graduates who are now excelling in various fields across the globe. Our alumni are our greatest ambassadors and a testament to the quality of education and values instilled at our institution.
            </p>
            <p className="text-text/80 dark:text-dark-text/80 leading-relaxed">
              The Kalaimahal Alumni Association aims to foster a strong, lifelong bond between the school and its graduates. We invite you to reconnect with your classmates, share your achievements, and contribute to the growth of our current students through mentorship and guidance.
            </p>
          </div>
        </div>
      </section>

      {/* Notable Alumni Section */}
      <section className="section-padding bg-white dark:bg-dark-card transition-colors">
        <div className="section-container">
          <SectionHeading 
            title="Our Proud Alumni" 
            subtitle="Making a mark across the globe"
            alignment="center"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {notableAlumni.map((alumni, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-dark-bg p-6 rounded-2xl border border-gray-100 dark:border-dark-border text-center hover:shadow-lg transition-all"
              >
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Users size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold text-heading dark:text-dark-heading mb-1">{alumni.name}</h3>
                <p className="text-primary font-medium mb-2">{alumni.job}</p>
                <p className="text-sm text-text/60 dark:text-dark-text/60">Class of {alumni.year}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-gray-50/50 dark:bg-dark-bg transition-colors">
        <div className="section-container">
          <SectionHeading 
            title="Why Join the Alumni Network?" 
            alignment="center"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {alumniBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-dark-bg p-6 rounded-2xl border border-gray-100 dark:border-dark-border hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <benefit.icon size={24} />
                </div>
                <h3 className="text-lg font-semibold text-heading dark:text-dark-heading mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-text/70 dark:text-dark-text/70">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Form / CTA */}
      <section className="section-padding bg-gray-50/50 dark:bg-dark-bg transition-colors">
        <div className="section-container">
          <div className="max-w-4xl mx-auto bg-white dark:bg-dark-card rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 dark:border-dark-border">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold font-heading text-heading dark:text-dark-heading mb-4">
                Update Your Details
              </h2>
              <p className="text-text/80 dark:text-dark-text/80">
                Are you a proud alumnus? Fill out the form below to join our official directory and stay updated with alumni news and events.
              </p>
            </div>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-heading dark:text-dark-heading mb-2">Full Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-dark-bg border border-gray-200 dark:border-dark-border focus:outline-none focus:ring-2 focus:ring-primary/50 dark:text-dark-text" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-heading dark:text-dark-heading mb-2">Year of Passing</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-dark-bg border border-gray-200 dark:border-dark-border focus:outline-none focus:ring-2 focus:ring-primary/50 dark:text-dark-text" placeholder="e.g. 2015" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-heading dark:text-dark-heading mb-2">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-dark-bg border border-gray-200 dark:border-dark-border focus:outline-none focus:ring-2 focus:ring-primary/50 dark:text-dark-text" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-heading dark:text-dark-heading mb-2">Current Profession / Company</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-dark-bg border border-gray-200 dark:border-dark-border focus:outline-none focus:ring-2 focus:ring-primary/50 dark:text-dark-text" placeholder="Software Engineer at Tech Corp" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-heading dark:text-dark-heading mb-2">Share a memorable moment or message</label>
                <textarea rows="4" className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-dark-bg border border-gray-200 dark:border-dark-border focus:outline-none focus:ring-2 focus:ring-primary/50 dark:text-dark-text" placeholder="I fondly remember..."></textarea>
              </div>
              <div className="text-center">
                <button type="button" className="px-8 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary-700 transition shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                  Submit Details
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <CTABanner 
        title="Want to Give Back?"
        subtitle="Support scholarships, infrastructure, or mentor a student. Contact us to find out how you can contribute."
        buttonText="Contact Administration"
        buttonLink="/contact"
      />
    </>
  );
};

export default Alumni;
