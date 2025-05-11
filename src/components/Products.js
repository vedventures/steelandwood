import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import '../styles/components/Products.scss';

const Products = () => {
  return (
    <section id="products" className="products">
      <div className="container">
        <div className="section-header">
          <h2>Our Product Portfolio</h2>
          <p>Premium Building Materials for Every Construction Need</p>
        </div>
        
        <div className="products-grid">
          {/* TMT Bars Card */}
          <div className="product-card">
            <div className="product-image tmt-bars">
              <div className="product-overlay"></div>
            </div>
            <div className="product-content">
              <h3>TMT Bars</h3>
              <p>Thermo-Mechanically Treated steel bars in various grades and sizes for structural strength and earthquake resistance.</p>
              <ul className="product-features">
                <li><FaCheckCircle /> High tensile strength</li>
                <li><FaCheckCircle /> Superior bendability</li>
                <li><FaCheckCircle /> Excellent ductility</li>
                <li><FaCheckCircle /> Earthquake resistant</li>
              </ul>
            </div>
          </div>
          
          {/* Timber Card */}
          <div className="product-card">
            <div className="product-image timber">
              <div className="product-overlay"></div>
            </div>
            <div className="product-content">
              <h3>Timber</h3>
              <p>Seasoned and chemically treated wood suitable for construction, furniture, and joinery.</p>
              <ul className="product-features">
                <li><FaCheckCircle /> Seasoned hardwood</li>
                <li><FaCheckCircle /> Chemically treated</li>
                <li><FaCheckCircle /> Moisture resistant</li>
                <li><FaCheckCircle /> Custom dimensions</li>
              </ul>
            </div>
          </div>
          
          {/* Plywood Card */}
          <div className="product-card">
            <div className="product-image plywood">
              <div className="product-overlay"></div>
            </div>
            <div className="product-content">
              <h3>Plywood</h3>
              <p>Commercial, waterproof (BWR), and marine-grade plywood for furniture and interior design applications.</p>
              <ul className="product-features">
                <li><FaCheckCircle /> Commercial grade</li>
                <li><FaCheckCircle /> Waterproof (BWR)</li>
                <li><FaCheckCircle /> Marine-grade options</li>
                <li><FaCheckCircle /> Custom thickness</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
