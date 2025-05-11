import React from 'react';
import '../styles/components/BrandsMarquee.scss';

const BrandsMarquee = () => {
  // Array of brand objects
  const brands = [
    // TMT Brands
    { id: 1, name: 'JSW Steel', category: 'TMT' },
    { id: 2, name: 'Tata Steel', category: 'TMT' },
    { id: 3, name: 'Jindal Steel', category: 'TMT' },
    { id: 4, name: 'SAIL', category: 'TMT' },
    { id: 5, name: 'Bhuwalka Steel', category: 'TMT' },
    { id: 6, name: 'Indus TMT', category: 'TMT' },
    { id: 7, name: 'Sunvik Steel', category: 'TMT' },
    { id: 8, name: 'RD Steel', category: 'TMT' },
    { id: 9, name: 'Kamdhenu', category: 'TMT' },
    { id: 10, name: 'Shyam Steel', category: 'TMT' },
    
    // Plywood Brands
    { id: 11, name: 'Century Ply', category: 'Plywood' },
    { id: 12, name: 'Greenply', category: 'Plywood' },
    { id: 13, name: 'Kitply', category: 'Plywood' },
    { id: 14, name: 'Archidply', category: 'Plywood' },
    { id: 15, name: 'Duro', category: 'Plywood' },
    { id: 16, name: 'Sharon Ply', category: 'Plywood' },
    { id: 17, name: 'Mayur Ply', category: 'Plywood' },
    
    // Timber Brands
    { id: 18, name: 'Merino', category: 'Timber' },
    { id: 19, name: 'Action TESA', category: 'Timber' },
    { id: 20, name: 'Durian', category: 'Timber' },
    { id: 21, name: 'Welwood', category: 'Timber' },
    { id: 22, name: 'Woodbuzz', category: 'Timber' },
  ];
  
  // Duplicate the brands to create a seamless loop
  const duplicatedBrands = [...brands, ...brands];

  return (
    <section className="brands-section" id="brands">
      <div className="container">
        <h2 className="section-title">Our Trusted Brands</h2>
        <p className="section-subtitle">We partner with the most reputable brands in Bangalore</p>
      </div>
      
      <div className="marquee-container">
        <div className="marquee-content">
          {duplicatedBrands.map((brand, index) => (
            <div className="brand-item" key={`${brand.id}-${index}`}>
              <div className="brand-logo-container">
                <div className="text-logo">{brand.name.split(' ')[0]}</div>
              </div>
              <div className="brand-info">
                <h3>{brand.name}</h3>
                <span className="brand-category">{brand.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsMarquee;
