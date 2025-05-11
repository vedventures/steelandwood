import React, { useRef, useEffect } from 'react';
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
  
  // Refs for touch scrolling
  const marqueeRef = useRef(null);
  const contentRef = useRef(null);
  
  useEffect(() => {
    const marqueeContainer = marqueeRef.current;
    const marqueeContent = contentRef.current;
    
    if (!marqueeContainer || !marqueeContent) return;
    
    // Variables for touch scrolling
    let isDown = false;
    let startX;
    let scrollLeft;
    
    // Check if we're on a mobile device
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    
    // If on mobile, pause the animation by default
    if (isMobile) {
      marqueeContent.style.animationPlayState = 'paused';
    }
    
    // Touch event handlers
    const handleTouchStart = (e) => {
      isDown = true;
      marqueeContent.style.animationPlayState = 'paused';
      startX = e.touches[0].pageX - marqueeContainer.offsetLeft;
      scrollLeft = marqueeContainer.scrollLeft;
    };
    
    const handleTouchEnd = () => {
      isDown = false;
      // Only restart animation on desktop
      if (!isMobile) {
        marqueeContent.style.animationPlayState = 'running';
      }
    };
    
    const handleTouchMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.touches[0].pageX - marqueeContainer.offsetLeft;
      const walk = (x - startX) * 2; // Scroll speed multiplier
      marqueeContainer.scrollLeft = scrollLeft - walk;
    };
    
    // Add event listeners for touch events
    marqueeContainer.addEventListener('touchstart', handleTouchStart);
    marqueeContainer.addEventListener('touchend', handleTouchEnd);
    marqueeContainer.addEventListener('touchmove', handleTouchMove);
    
    // Cleanup event listeners
    return () => {
      marqueeContainer.removeEventListener('touchstart', handleTouchStart);
      marqueeContainer.removeEventListener('touchend', handleTouchEnd);
      marqueeContainer.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  return (
    <section className="brands-section" id="brands">
      <div className="container">
        <h2 className="section-title">Our Trusted Brands</h2>
        <p className="section-subtitle">We partner with the most reputable brands in Bangalore</p>
      </div>
      
      <div className="marquee-container" ref={marqueeRef}>
        <div className="marquee-content" ref={contentRef}>
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
