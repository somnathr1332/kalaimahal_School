import React from 'react';
import SEO from '../components/ui/SEO';
import PageBanner from '../components/layout/PageBanner';
import schoolInfo from '../data/schoolInfo.json';

export default function Privacy() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <SEO 
        title="Privacy Policy"
        description="Privacy policy details for visitors of Kalaimahal School official website."
        path="/privacy"
      />

      <PageBanner
        title="Privacy Policy"
        subtitle="How we manage and protect student, parent, and website visitor data"
        breadcrumbs={[{ label: 'Privacy Policy' }]}
      />

      <section className="section-padding bg-background dark:bg-dark-bg">
        <div className="section-container max-w-4xl">
          <div className="bg-white dark:bg-dark-card p-6 md:p-10 rounded-2xl border border-gray-200 dark:border-dark-border shadow-sm text-sm text-text dark:text-dark-text space-y-6 leading-relaxed">
            <h3 className="text-xl font-bold font-heading text-heading dark:text-dark-heading mb-3">1. Information Collection</h3>
            <p>
              We collect information that you provide directly to us when you fill out admissions enquiries, contact forms, or newsletter subscriptions. This may include your name, email address, phone number, and student details.
            </p>

            <h3 className="text-xl font-bold font-heading text-heading dark:text-dark-heading mb-3">2. Use of Information</h3>
            <p>
              We use the collected information to process admission requests, respond to queries, send updates, and improve school services. We do not sell or share your personal information with third-party marketers.
            </p>

            <h3 className="text-xl font-bold font-heading text-heading dark:text-dark-heading mb-3">3. Data Security</h3>
            <p>
              We implement industry-standard security protocols to protect your personal details from unauthorized access, modification, or disclosure. All offline records are stored in secure school filing systems.
            </p>

            <h3 className="text-xl font-bold font-heading text-heading dark:text-dark-heading mb-3">4. Cookies & Analytics</h3>
            <p>
              Our website uses cookies to enhance browser experience and analyze site traffic patterns. You can choose to disable cookies in your web browser settings.
            </p>

            <h3 className="text-xl font-bold font-heading text-heading dark:text-dark-heading mb-3">5. Updates to this Policy</h3>
            <p>
              We reserve the right to modify this privacy policy at any time. Any changes will be posted on this page with an updated revision date.
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
