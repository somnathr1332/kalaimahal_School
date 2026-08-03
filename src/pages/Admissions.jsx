import React from 'react';
import SEO from '../components/ui/SEO';
import { motion } from 'framer-motion';
import { ClipboardList, FileText, PenTool, MessageSquare, CheckCircle, Calendar, Download, ShieldCheck } from 'lucide-react';
import PageBanner from '../components/layout/PageBanner';
import SectionHeading from '../components/ui/SectionHeading';
import Timeline from '../components/ui/Timeline';
import admissionsData from '../data/admissions.json';
import schoolInfo from '../data/schoolInfo.json';

const iconMap = {
  ClipboardList: ClipboardList,
  FileText: FileText,
  PenTool: PenTool,
  MessageSquare: MessageSquare,
  CheckCircle: CheckCircle
};

export default function Admissions() {
  return (
    <>
      <SEO 
        title="Admissions open 2026-27"
        description="Read about our admission criteria, eligibility, timeline, required documents list, fee structure, and scholarships."
        path="/admissions"
      />

      <PageBanner
        title="Admissions Open 2026-27"
        subtitle="Secure your child's seat in one of Mayiladuthurai's premier academic institutions"
        breadcrumbs={[{ label: 'Admissions' }]}
      />

      {/* Process Flow */}
      <section className="section-padding bg-background dark:bg-dark-bg">
        <div className="section-container">
          <SectionHeading
            title="Admission Process"
            subtitle="Follow these simple steps to register and enroll your child at our school."
          />
          <Timeline items={admissionsData.process} />
        </div>
      </section>

      {/* Eligibility & Documents */}
      <section className="section-padding bg-white dark:bg-dark-card/30">
        <div className="section-container">
          <SectionHeading
            title="Eligibility & Criteria"
            subtitle="Find the age requirements and necessary documentation required during admission."
          />

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse rounded-xl overflow-hidden shadow-sm border border-gray-200 dark:border-dark-border">
              <thead>
                <tr className="bg-primary text-white text-sm">
                  <th className="p-4 font-semibold font-heading">Grade Level</th>
                  <th className="p-4 font-semibold font-heading">Age Criteria (as of June 1)</th>
                  <th className="p-4 font-semibold font-heading">Required Documents</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-dark-border text-sm text-text dark:text-dark-text bg-white dark:bg-dark-card">
                {admissionsData.eligibility.map((item, i) => (
                  <tr key={i} className="hover:bg-gray-50/50 dark:hover:bg-dark-border/20 transition-colors">
                    <td className="p-4 font-semibold text-heading dark:text-dark-heading">{item.grade}</td>
                    <td className="p-4">{item.ageRequirement}</td>
                    <td className="p-4 text-xs text-text/80 dark:text-dark-text/80">{item.documents}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="section-padding bg-background dark:bg-dark-bg">
        <div className="section-container">
          <SectionHeading
            title="Fee Structure"
            subtitle="We maintain an affordable fee structure while offering premium educational services and amenities."
          />
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse rounded-xl overflow-hidden shadow-sm border border-gray-200 dark:border-dark-border">
              <thead>
                <tr className="bg-secondary text-white text-sm">
                  <th className="p-4 font-semibold font-heading">Category</th>
                  <th className="p-4 font-semibold font-heading">One-time Admission Fee</th>
                  <th className="p-4 font-semibold font-heading">Annual Tuition Fee</th>
                  <th className="p-4 font-semibold font-heading">Term Fee (per Term)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-dark-border text-sm text-text dark:text-dark-text bg-white dark:bg-dark-card">
                {admissionsData.feeStructure.map((fee, i) => (
                  <tr key={i} className="hover:bg-gray-50/50 dark:hover:bg-dark-border/20 transition-colors">
                    <td className="p-4 font-semibold text-heading dark:text-dark-heading">{fee.category}</td>
                    <td className="p-4">{fee.admissionFee}</td>
                    <td className="p-4">{fee.annualTuition}</td>
                    <td className="p-4">{fee.termFee}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-text/60 dark:text-dark-text/60 mt-3 italic">
            * Note: Fees are subject to change as per regulatory norms. Transportation, uniform, and books are charged separately.
          </p>
        </div>
      </section>

      {/* Scholarships & Important Dates */}
      <section className="section-padding bg-white dark:bg-dark-card/30">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-10">
            {/* Scholarships */}
            <div>
              <h3 className="text-xl font-bold font-heading text-heading dark:text-dark-heading mb-4 flex items-center gap-2">
                <ShieldCheck size={22} className="text-secondary" /> Scholarships Available
              </h3>
              <div className="space-y-4">
                {admissionsData.scholarships.map((s, i) => (
                  <div key={i} className="glass p-5 rounded-2xl">
                    <h4 className="font-semibold text-heading dark:text-dark-heading text-sm">{s.name}</h4>
                    <p className="text-xs text-text/70 dark:text-dark-text/70 mt-1">Criteria: {s.criteria}</p>
                    <p className="text-xs font-bold text-primary mt-2">Benefit: {s.benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Important Dates */}
            <div>
              <h3 className="text-xl font-bold font-heading text-heading dark:text-dark-heading mb-4 flex items-center gap-2">
                <Calendar size={22} className="text-primary" /> Key Dates for 2026-27
              </h3>
              <div className="divide-y divide-gray-200 dark:divide-dark-border bg-white dark:bg-dark-card rounded-2xl border border-gray-200 dark:border-dark-border overflow-hidden">
                {admissionsData.importantDates.map((d, i) => (
                  <div key={i} className="p-4 flex items-center justify-between text-sm">
                    <span className="font-medium text-text dark:text-dark-text">{d.event}</span>
                    <span className="font-bold text-primary dark:text-primary-400">{d.date}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
