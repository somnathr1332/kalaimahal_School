import React from 'react';
import PageBanner from '../components/layout/PageBanner';
import SEO from '../components/ui/SEO';
import { motion } from 'framer-motion';
import { Calendar, User } from 'lucide-react';
import blogData from '../data/blog.json';

const Blog = () => {
  return (
    <>
      <SEO 
        title="Student Spotlight & Blog - Kalaimahal School"
        description="Read the latest articles, achievements, and creative works from the students of Kalaimahal School."
      />
      
      <PageBanner 
        title="Student Spotlight" 
        subtitle="Celebrating creativity, achievements, and experiences of our students."
      />

      <section className="section-padding bg-gray-50/50 dark:bg-dark-bg transition-colors">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogData.map((post, index) => (
              <motion.article 
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-dark-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all border border-gray-100 dark:border-dark-border group flex flex-col"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                    {post.category}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold font-heading text-heading dark:text-dark-heading mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-text/70 dark:text-dark-text/70 text-sm mb-4 line-clamp-3 flex-grow">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mt-auto pt-4 border-t border-gray-100 dark:border-dark-border">
                    <div className="flex items-center gap-1.5">
                      <User size={14} />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Calendar size={14} />
                      <span>{post.date}</span>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
