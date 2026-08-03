import React from 'react';
import SEO from '../components/ui/SEO';
import PageBanner from '../components/layout/PageBanner';
import SectionHeading from '../components/ui/SectionHeading';
import GalleryGrid from '../components/ui/GalleryGrid';
import CTABanner from '../components/ui/CTABanner';
import galleryData from '../data/gallery.json';
import schoolInfo from '../data/schoolInfo.json';

export default function Gallery() {
  return (
    <>
      <SEO 
        title="School Gallery"
        description="Browse our school photo gallery featuring events, sports, classrooms, laboratories, and campus views."
        path="/gallery"
      />

      <PageBanner
        title="Photo Gallery"
        subtitle="Moments of learning, achievement, and celebration at Kalaimahal School"
        breadcrumbs={[{ label: 'Gallery' }]}
      />

      <section className="section-padding bg-background dark:bg-dark-bg">
        <div className="section-container">
          <SectionHeading
            title="Life at Kalaimahal"
            subtitle="Glimpses of daily activities, special celebrations, labs, and modern campus infrastructure."
          />
          <GalleryGrid images={galleryData.images} categories={galleryData.categories} />
        </div>
      </section>

      <CTABanner />
    </>
  );
}
