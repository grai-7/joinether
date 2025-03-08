import React from 'react';
import { Helmet } from 'react-helmet';

function SEO({ title, description, keywords }) {
  const defaultTitle = 'Ether | All-in-One School Management Solution';
  const defaultDescription = 'Streamline school operations with Ether, the comprehensive B2B SaaS platform designed for modern educational institutions.';
  const defaultKeywords = 'school management system, education software, school administration software, SaaS for schools, student information system';
  
  return (
    <Helmet>
      <title>{title || defaultTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      <meta property="og:title" content={title || defaultTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || defaultTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta charSet="utf-8" />
      <html lang="en" />
    </Helmet>
  );
}

export default SEO;