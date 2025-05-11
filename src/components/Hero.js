import React from 'react';
import { FaArrowRight, FaShieldAlt, FaMedal } from 'react-icons/fa';
import '../styles/components/Hero.scss';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-background">
        <div className="hero-overlay"></div>
        <div className="hero-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>
      
      <div className="container hero-container">
        <div className="hero-content">
          <h1>
            <span className="heading-highlight">Premium</span> Building Materials
            for <span className="heading-highlight">Quality</span> Construction
          </h1>
          
          <p>Trusted supplier of TMT bars, timber, and plywood for construction, infrastructure, and interior projects</p>
          
          <div className="hero-features">
            <div className="hero-feature">
              <div className="feature-icon">
                <FaShieldAlt />
              </div>
              <span>Quality Assured</span>
            </div>
            
            <div className="hero-feature">
              <div className="feature-icon">
                <FaMedal />
              </div>
              <span>ISO Certified</span>
            </div>
          </div>
          
          <div className="hero-buttons">
            <a href="#products" className="btn btn-primary">
              Explore Products <FaArrowRight className="btn-icon" />
            </a>
            <a href="#contact" className="btn btn-outline">Contact Us</a>
          </div>
        </div>
        
        <div className="hero-image-container">
          <div className="hero-image">
            <div className="image-decoration"></div>
          </div>
        </div>
      </div>
      
      <div className="hero-bottom-decor"></div>
    </section>
  );
};

export default Hero;
