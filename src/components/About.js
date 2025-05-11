import React from 'react';
import { FaCheckCircle, FaTruckMoving, FaHandshake, FaCoins } from 'react-icons/fa';
import '../styles/components/About.scss';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2>About Vedanta Ventures</h2>
          <p>Your Trusted Partner in Quality Building Materials</p>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <p>
              Vedanta Ventures is a trusted trading and dealership firm specializing in the supply of high-quality TMT bars, timber, and plywood for construction, infrastructure, and interior projects. With a strong focus on reliability, timely delivery, and product authenticity, we serve contractors, builders, retailers, and industrial clients across India.
            </p>
            <p>
              We source our materials directly from reputed manufacturers and mills to ensure that our clients receive durable, compliant, and cost-effective building materials that meet industry standards.
            </p>
          </div>
          
          <div className="about-values">
            <div className="value-card">
              <div className="icon-container">
                <FaCheckCircle />
              </div>
              <h3>Quality Assurance</h3>
              <p>We guarantee premium materials that meet industry standards and specifications</p>
            </div>
            
            <div className="value-card">
              <div className="icon-container">
                <FaTruckMoving />
              </div>
              <h3>Timely Delivery</h3>
              <p>Reliable logistics ensuring your materials arrive when you need them</p>
            </div>
            
            <div className="value-card">
              <div className="icon-container">
                <FaHandshake />
              </div>
              <h3>Customer Trust</h3>
              <p>Building long-term relationships through transparency and dependability</p>
            </div>
            
            <div className="value-card">
              <div className="icon-container">
                <FaCoins />
              </div>
              <h3>Competitive Pricing</h3>
              <p>Cost-effective solutions without compromising on quality</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
