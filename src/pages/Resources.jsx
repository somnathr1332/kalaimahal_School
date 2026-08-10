import React, { useState } from 'react';
import PageBanner from '../components/layout/PageBanner';
import SEO from '../components/ui/SEO';
import { motion } from 'framer-motion';
import { FileText, Download, Search, FileArchive } from 'lucide-react';
import resourcesData from '../data/resources.json';

const Resources = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredResources = resourcesData.filter(resource => 
    resource.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    resource.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <SEO 
        title="Student Portal & Resources - Kalaimahal School"
        description="Download syllabus, academic calendars, question papers, and school guidelines."
      />
      
      <PageBanner 
        title="Student Resources" 
        subtitle="Everything you need for your academic journey in one place."
      />

      <section className="section-padding bg-gray-50/50 dark:bg-dark-bg transition-colors min-h-[50vh]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Search Bar */}
          <div className="relative mb-10">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-12 pr-4 py-4 bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-2xl text-heading dark:text-dark-text shadow-sm focus:ring-2 focus:ring-primary/50 focus:border-transparent outline-none transition-all"
              placeholder="Search for syllabus, guidelines, or question papers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Resources List */}
          <div className="bg-white dark:bg-dark-card rounded-2xl shadow-sm border border-gray-100 dark:border-dark-border overflow-hidden">
            {filteredResources.length > 0 ? (
              <ul className="divide-y divide-gray-100 dark:divide-dark-border">
                {filteredResources.map((resource, index) => (
                  <motion.li 
                    key={resource.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="p-4 hover:bg-gray-50 dark:hover:bg-dark-bg/50 transition-colors flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center flex-shrink-0">
                        {resource.type === 'ZIP' ? <FileArchive size={24} /> : <FileText size={24} />}
                      </div>
                      <div>
                        <h4 className="font-semibold text-heading dark:text-dark-heading group-hover:text-primary transition-colors">
                          {resource.title}
                        </h4>
                        <div className="flex items-center gap-3 text-xs text-text/60 dark:text-dark-text/60 mt-1">
                          <span className="bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded">{resource.category}</span>
                          <span>{resource.type} • {resource.size}</span>
                        </div>
                      </div>
                    </div>
                    <button className="p-3 text-gray-400 hover:text-primary hover:bg-primary/10 rounded-full transition-all" title="Download">
                      <Download size={20} />
                    </button>
                  </motion.li>
                ))}
              </ul>
            ) : (
              <div className="p-8 text-center text-gray-500">
                No resources found matching "{searchTerm}"
              </div>
            )}
          </div>

        </div>
      </section>
    </>
  );
};

export default Resources;
