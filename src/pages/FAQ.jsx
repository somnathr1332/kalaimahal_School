import React, { useState } from 'react';
import SEO from '../components/ui/SEO';
import { Search, HelpCircle } from 'lucide-react';
import PageBanner from '../components/layout/PageBanner';
import SectionHeading from '../components/ui/SectionHeading';
import AccordionItem from '../components/ui/AccordionItem';
import CTABanner from '../components/ui/CTABanner';
import faqData from '../data/faq.json';
import schoolInfo from '../data/schoolInfo.json';

export default function FAQ() {
  const [searchQuery, setSearchQuery] = useState('');
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (globalIndex) => {
    setOpenIndex(openIndex === globalIndex ? null : globalIndex);
  };

  // Flatten FAQs with global index and category context
  const allFaqs = faqData.categories.reduce((acc, category) => {
    const itemsWithCategory = category.items.map(item => ({
      ...item,
      categoryName: category.name
    }));
    return [...acc, ...itemsWithCategory];
  }, []).map((item, idx) => ({ ...item, globalIndex: idx }));

  const filteredFaqs = allFaqs.filter(
    item =>
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <SEO 
        title="Frequently Asked Questions"
        description="Find answers to common questions about admissions, fees, transport, exams, curriculum, and school hours."
        path="/faq"
      />

      <PageBanner
        title="Frequently Asked Questions"
        subtitle="Answers to common questions about admissions, academics, and school facilities"
        breadcrumbs={[{ label: 'FAQ' }]}
      />

      <section className="section-padding bg-background dark:bg-dark-bg">
        <div className="section-container">
          <SectionHeading
            title="Search FAQs"
            subtitle="Can't find what you are looking for? Try searching or browse by category."
          />

          {/* Search bar */}
          <div className="max-w-xl mx-auto mb-10 relative">
            <input
              type="text"
              placeholder="Search for answers..."
              className="w-full px-5 py-3.5 pl-12 rounded-2xl border border-gray-200 dark:border-dark-border bg-white dark:bg-dark-card text-sm focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-text/50" />
          </div>

          {/* Filtered Results */}
          <div className="max-w-3xl mx-auto">
            {searchQuery ? (
              <div>
                <p className="text-xs text-text/60 dark:text-dark-text/60 mb-4 font-semibold">
                  Found {filteredFaqs.length} results matching "{searchQuery}"
                </p>
                {filteredFaqs.length > 0 ? (
                  filteredFaqs.map((faq) => (
                    <AccordionItem
                      key={faq.globalIndex}
                      question={faq.question}
                      answer={faq.answer}
                      isOpen={openIndex === faq.globalIndex}
                      onToggle={() => handleToggle(faq.globalIndex)}
                      index={faq.globalIndex}
                    />
                  ))
                ) : (
                  <div className="text-center p-8 bg-white dark:bg-dark-card rounded-2xl border border-gray-200 dark:border-dark-border">
                    <HelpCircle size={40} className="mx-auto text-text/30 mb-2" />
                    <p className="text-sm font-semibold text-text dark:text-dark-text">No matches found.</p>
                  </div>
                )}
              </div>
            ) : (
              // Grouped by Category
              <div className="space-y-8">
                {faqData.categories.map((category, catIdx) => {
                  const categoryFaqs = allFaqs.filter(f => f.categoryName === category.name);
                  return (
                    <div key={catIdx}>
                      <h3 className="text-lg font-bold font-heading text-primary mb-3.5 px-1">{category.name}</h3>
                      <div className="space-y-3">
                        {categoryFaqs.map((faq) => (
                          <AccordionItem
                            key={faq.globalIndex}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openIndex === faq.globalIndex}
                            onToggle={() => handleToggle(faq.globalIndex)}
                            index={faq.globalIndex}
                          />
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </section>

      <CTABanner
        title="Still have questions?"
        subtitle="Feel free to reach out directly to our administrative office for any specific clarifications."
        primaryAction={{ label: 'Contact Us', to: '/contact' }}
      />
    </>
  );
}
