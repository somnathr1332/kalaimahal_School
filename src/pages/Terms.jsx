import React from 'react';
import SEO from '../components/ui/SEO';
import PageBanner from '../components/layout/PageBanner';
import schoolInfo from '../data/schoolInfo.json';

export default function Terms() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <SEO 
        title="Terms & Conditions"
        description="Terms and conditions for using Kalaimahal School website."
        path="/terms"
      />

      <PageBanner
        title="Terms & Conditions"
        subtitle="Terms and guidelines for using our official school portal and services"
        breadcrumbs={[{ label: 'Terms & Conditions' }]}
      />

      <section className="section-padding bg-background dark:bg-dark-bg">
        <div className="section-container max-w-4xl">
          <div className="bg-white dark:bg-dark-card p-6 md:p-10 rounded-2xl border border-gray-200 dark:border-dark-border shadow-sm text-sm text-text dark:text-dark-text space-y-6 leading-relaxed">
            <h3 className="text-xl font-bold font-heading text-heading dark:text-dark-heading mb-3">1. Terms of Use</h3>
            <p>
              By accessing this website, you agree to comply with these terms, all applicable laws, and regulations. If you do not agree with any of these terms, you are prohibited from using this site.
            </p>

            <h3 className="text-xl font-bold font-heading text-heading dark:text-dark-heading mb-3">2. Website Content</h3>
            <p>
              All materials on this website, including text, designs, circulars, graphics, logos, and images, are the property of {schoolInfo.name} and are protected by intellectual property laws.
            </p>

            <h3 className="text-xl font-bold font-heading text-heading dark:text-dark-heading mb-3">3. Disclaimer</h3>
            <p>
              The information provided on this website is for general informational purposes only. While we strive to keep it accurate, we make no warranties regarding the completeness or reliability of the content.
            </p>

            <h3 className="text-xl font-bold font-heading text-heading dark:text-dark-heading mb-3">4. Admission & Fees</h3>
            <p>
              Submission of online forms or enquiry forms does not guarantee admission. Admissions are confirmed only after assessment, fee payment, and documentation checks at the school premises. Fees once paid are non-refundable.
            </p>

            <h3 className="text-xl font-bold font-heading text-heading dark:text-dark-heading mb-3">5. External Links</h3>
            <p>
              Our website may contain links to external sites (such as education boards or exam portals). We are not responsible for the content or privacy practices of those external websites.
            </p>

            <div className="pt-6 border-t border-gray-200 dark:border-dark-border text-xs text-text/50 dark:text-dark-text/50">
              Last updated: January 2026 | &copy; {currentYear} {schoolInfo.shortName}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
