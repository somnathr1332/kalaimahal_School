import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({ 
  title, 
  description, 
  name = 'Kalaimahal Matriculation Higher Secondary School', 
  type = 'website',
  path = '',
  image = '/images/gallery/school-building.webp',
  keywords = 'Kalaimahal School, Mayiladuthurai, CBSE, Matriculation, Higher Secondary, Admissions, Best School'
}) {
  const domain = 'https://www.kalaimahalschool.com'; // Placeholder, replace with actual production domain
  const url = `${domain}${path}`;
  const fullTitle = `${title} | ${name}`;

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": name,
    "description": description,
    "url": domain,
    "logo": `${domain}/images/logo.jpg`,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Mayiladuthurai",
      "addressRegion": "Tamil Nadu",
      "addressCountry": "IN"
    }
  };

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{fullTitle}</title>
      <meta name='description' content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />

      {/* OpenGraph tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={`${domain}${image}`} />
      <meta property="og:site_name" content={name} />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter tags */}
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${domain}${image}`} />

      {/* Schema.org JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
}
