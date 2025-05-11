import React from 'react';
import { FaBoxes, FaTruck, FaComments, FaCertificate } from 'react-icons/fa';
import '../styles/components/Services.scss';

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <h2>Our Services</h2>
          <p>Comprehensive Solutions for Your Material Needs</p>
        </div>
        
        <div className="services-grid">
          <div className="service-card">
            <div className="icon-container">
              <FaBoxes />
            </div>
            <h3>Bulk Supply</h3>
            <p>Cost-effective solutions for large construction and infrastructure projects</p>
          </div>
          
          <div className="service-card">
            <div className="icon-container">
              <FaTruck />
            </div>
            <h3>Logistics Support</h3>
            <p>Reliable transportation and timely delivery to your project site</p>
          </div>
          
          <div className="service-card">
            <div className="icon-container">
              <FaComments />
            </div>
            <h3>Technical Consultation</h3>
            <p>Expert advice on material selection for specific construction requirements</p>
          </div>
          
          <div className="service-card">
            <div className="icon-container">
              <FaCertificate />
            </div>
            <h3>Quality Certification</h3>
            <p>Documentation and certification for all supplied materials</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
