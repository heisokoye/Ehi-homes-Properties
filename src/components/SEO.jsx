import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({
  title = "EHI Homes & Properties Ltd | Real Estate Agency & Luxury Land in Lagos, Nigeria",
  description = "EHI Homes & Properties Ltd helps individuals, families, and investors find genuine, secure, and affordable land and luxury property opportunities in Isheri and across Lagos State, Nigeria.",
  canonical = "https://ehihomes.ng/",
  ogImage = "https://ehihomes.ng/house_hero.png",
  ogType = "website",
  jsonLdData = null,
}) => {
  const siteUrl = "https://ehihomes.ng/";

  // Default JSON-LD for RealEstateListing and Place schema per property
  const defaultPropertySchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "RealEstateListing",
        "@id": `${siteUrl}#listing-isheri-grace-land`,
        "name": "Luxury Land Plots & Residential Estates - Isheri Grace Land, Lagos",
        "description": "Genuine, verified residential land plots with Certificate of Ownership (C of O), Excision, and Registered Survey Plans in Isheri, Lagos State.",
        "url": siteUrl,
        "image": [
          `${siteUrl}house_hero.png`,
          `${siteUrl}parlour.webp`
        ],
        "offers": {
          "@type": "AggregateOffer",
          "priceCurrency": "NGN",
          "price": "Contact for pricing",
          "availability": "https://schema.org/InStock"
        },
        "itemOffered": {
          "@type": "Place",
          "name": "Isheri Olofu Grace Land Estate",
          "description": "Secure residential estate development by EHI Homes & Properties Ltd.",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Five Point Business Hub, Opposite Community Primary School, Isheri Olofu Grace Land",
            "addressLocality": "Isheri",
            "addressRegion": "Lagos State",
            "addressCountry": "NG"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "6.6433",
            "longitude": "3.3769"
          }
        }
      }
    ]
  };

  const activeJsonLd = jsonLdData || defaultPropertySchema;

  return (
    <Helmet>
      {/* Primary Page Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph / Facebook / WhatsApp Share Preview */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="EHI Homes & Properties Ltd" />
      <meta property="og:locale" content="en_NG" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* JSON-LD Structured Data Schema */}
      <script type="application/ld+json">
        {JSON.stringify(activeJsonLd)}
      </script>
    </Helmet>
  );
};

export default SEO;
