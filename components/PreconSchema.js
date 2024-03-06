const PreconSchema = () => {
  return {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: "Empire Canals - NEW PHASE NOW SELLING FROM $589,990",
    image: "/rendering1.jpeg",
    description:
      "New Towns & Detached In Welland From $589,990. Family-friendly streetscapes, on-site schools, community amenities and scenic trails, creeks and parks",
    brand: "Empire Communities",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "20",
    },
    offers: {
      "@type": "AggregateOffer",
      url: `https://empirecanalhomes.ca`,
      priceCurrency: "CAD",
      lowPrice: 589990,
      highPrice: 739990,
    },
  };
};

export default PreconSchema;
