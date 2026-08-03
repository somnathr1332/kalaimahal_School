import React from 'react';
import SEO from '../components/ui/SEO';
import { Link } from 'react-router-dom';
import { HelpCircle, ArrowLeft } from 'lucide-react';
import schoolInfo from '../data/schoolInfo.json';

export default function NotFound() {
  return (
    <>
      <SEO 
        title="404 - Page Not Found"
        description="The page you are looking for does not exist."
      />

      <div className="flex flex-col items-center justify-center min-h-[75vh] p-8 text-center bg-background dark:bg-dark-bg">
        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
          <HelpCircle size={32} />
        </div>
        <h1 className="text-5xl md:text-6xl font-bold font-heading text-primary mb-3">404</h1>
        <h2 className="text-xl font-semibold text-heading dark:text-dark-heading mb-2">Oops! Page Not Found</h2>
        <p className="text-sm text-text dark:text-dark-text max-w-sm mx-auto mb-6">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link to="/" className="btn-primary flex items-center gap-2">
          <ArrowLeft size={16} /> Back to Home
        </Link>
      </div>
    </>
  );
}
