import React from 'react';
import { FaArrowRight, FaShieldAlt, FaMedal, FaLeaf } from 'react-icons/fa';
import '../styles/components/Hero.scss';



const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-background">
        <div className="hero-overlay"></div>
        <div className="hero-pattern"></div>
      </div>
      
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-tagline">VEDANTA VENTURES</div>
          <h1>
            <span className="heading-highlight">Premium</span> Building
            <br />Materials for <span className="heading-highlight">Quality</span>
            <br />Construction
          </h1>
          
          <p className="hero-description">Trusted supplier of TMT bars, timber, and plywood for construction, infrastructure, and interior projects across India.</p>
          
          <div className="hero-badges">
            <div className="hero-badge">
              <FaShieldAlt />
              <span>Quality Assured</span>
            </div>
            
            <div className="hero-badge">
              <FaMedal />
              <span>ISO Certified</span>
            </div>
            
            <div className="hero-badge">
              <FaLeaf />
              <span>Sustainable</span>
            </div>
          </div>
          
          <div className="hero-cta">
            <a href="#products" className="btn btn-primary">
              Explore Products <FaArrowRight className="btn-icon" />
            </a>
            <a href="#contact" className="btn btn-outline">Contact Us</a>
          </div>
        </div>
        
        <div className="hero-media">
          <div className="hero-image-carousel" id="product-carousel">
            <div className="carousel-item active" id="tmt-bars" data-index="0">
              <div className="image-overlay"></div>
              <div className="product-label">TMT Bars</div>
            </div>
            <div className="carousel-item" id="timber" data-index="1">
              <div className="image-overlay"></div>
              <div className="product-label">Timber</div>
            </div>
            <div className="carousel-item" id="plywood" data-index="2">
              <div className="image-overlay"></div>
              <div className="product-label">Plywood</div>
            </div>
          </div>
          <div className="hero-image-accent"></div>
          <div className="hero-floating-element floating-1"></div>
          <div className="hero-floating-element floating-2"></div>
        </div>
      </div>
      
      <div className="hero-scroll-indicator">
        <div className="scroll-line"></div>
        <span>Scroll</span>
      </div>
    </section>
  );
};

export default Hero;
