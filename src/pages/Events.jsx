import React, { useState } from 'react';
import SEO from '../components/ui/SEO';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Tag } from 'lucide-react';
import PageBanner from '../components/layout/PageBanner';
import SectionHeading from '../components/ui/SectionHeading';
import CTABanner from '../components/ui/CTABanner';
import eventsData from '../data/events.json';
import schoolInfo from '../data/schoolInfo.json';

export default function Events() {
  const [filter, setFilter] = useState('all');

  const filteredUpcoming = filter === 'all'
    ? eventsData.upcoming
    : eventsData.upcoming.filter(e => e.type === filter);

  const filteredPast = filter === 'all'
    ? eventsData.past
    : eventsData.past.filter(e => e.type === filter);

  return (
    <>
      <SEO 
        title="Events Calendar"
        description="View our calendar of upcoming school events, festivals, sports meets, and key academic dates."
        path="/events"
      />

      <PageBanner
        title="Events & Activities"
        subtitle="Stay updated with school events, cultural celebrations, and academic meets"
        breadcrumbs={[{ label: 'Events' }]}
      />

      {/* Filter Tabs */}
      <section className="pt-12 bg-background dark:bg-dark-bg">
        <div className="section-container">
          <div className="flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === 'all'
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-white dark:bg-dark-card text-text dark:text-dark-text hover:bg-primary/10'
              }`}
            >
              All Events
            </button>
            {Object.entries(eventsData.eventTypes).map(([typeKey, info]) => (
              <button
                key={typeKey}
                onClick={() => setFilter(typeKey)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === typeKey
                    ? 'text-white shadow-md'
                    : 'bg-white dark:bg-dark-card text-text dark:text-dark-text hover:bg-primary/10'
                }`}
                style={filter === typeKey ? { backgroundColor: info.color } : {}}
              >
                {info.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="section-padding bg-background dark:bg-dark-bg">
        <div className="section-container">
          <SectionHeading
            title="Upcoming Events"
            subtitle="Mark your calendar for these exciting upcoming events and important school schedules."
          />

          {filteredUpcoming.length === 0 ? (
            <div className="text-center p-12 glass rounded-2xl">
              <Calendar size={48} className="mx-auto text-text/30 mb-3" />
              <p className="text-text/70 dark:text-dark-text/70 font-medium">No upcoming events listed for this category.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-8">
              {filteredUpcoming.map((event, i) => {
                const eventDate = new Date(event.date);
                const typeInfo = eventsData.eventTypes[event.type] || {};

                return (
                  <motion.div
                    key={event.id}
                    className={`glass rounded-2xl overflow-hidden flex flex-col sm:flex-row shadow-md card-hover ${
                      event.highlight ? 'ring-2 ring-accent' : ''
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                  >
                    {/* Date Block */}
                    <div
                      className="p-6 flex flex-col justify-center items-center text-white text-center sm:w-36 flex-shrink-0"
                      style={{ backgroundColor: typeInfo.color || '#1E3A8A' }}
                    >
                      <span className="text-4xl font-bold font-heading">{eventDate.getDate()}</span>
                      <span className="text-sm font-semibold uppercase tracking-wider mt-1">
                        {eventDate.toLocaleDateString('en-IN', { month: 'short' })}
                      </span>
                      <span className="text-xs opacity-75 mt-0.5">{eventDate.getFullYear()}</span>
                    </div>

                    {/* Details Block */}
                    <div className="p-6 flex-grow flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <span
                            className="px-2 py-0.5 rounded-full text-[10px] font-bold text-white uppercase tracking-wider"
                            style={{ backgroundColor: typeInfo.color || '#3B82F6' }}
                          >
                            {typeInfo.label || event.type}
                          </span>
                          {event.highlight && (
                            <span className="text-[10px] font-bold text-secondary flex items-center gap-0.5">
                              <Tag size={10} className="fill-secondary" /> FEATURED
                            </span>
                          )}
                        </div>
                        <h3 className="text-lg font-bold font-heading text-heading dark:text-dark-heading mb-2">
                          {event.title}
                        </h3>
                        <p className="text-sm text-text dark:text-dark-text mb-4 leading-relaxed line-clamp-3">
                          {event.description}
                        </p>
                      </div>

                      <div className="space-y-1.5 pt-3 border-t border-gray-200 dark:border-dark-border text-xs text-text/60 dark:text-dark-text/60">
                        <div className="flex items-center gap-2">
                          <Clock size={13} className="text-primary" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin size={13} className="text-primary" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Past Events */}
      <section className="section-padding bg-white dark:bg-dark-card/30">
        <div className="section-container">
          <SectionHeading
            title="Past Event Highlights"
            subtitle="A look back at some of the successful events and activities organized recently."
          />
          {filteredPast.length === 0 ? (
            <p className="text-center text-text/60 dark:text-dark-text/60">No past events found in this category.</p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPast.map((event, i) => {
                const eventDate = new Date(event.date);
                const typeInfo = eventsData.eventTypes[event.type] || {};

                return (
                  <motion.div
                    key={event.id}
                    className="p-5 rounded-2xl border border-gray-200 dark:border-dark-border bg-white dark:bg-dark-card flex flex-col justify-between"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                  >
                    <div>
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-xs text-text/50 dark:text-dark-text/50 font-medium">
                          {eventDate.toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
                        </span>
                        <span
                          className="px-2 py-0.5 rounded-full text-[9px] font-bold text-white uppercase"
                          style={{ backgroundColor: typeInfo.color }}
                        >
                          {typeInfo.label}
                        </span>
                      </div>
                      <h3 className="font-semibold font-heading text-heading dark:text-dark-heading mb-2">{event.title}</h3>
                      <p className="text-xs text-text dark:text-dark-text leading-relaxed mb-4">{event.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <CTABanner />
    </>
  );
}
