import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import '../styles/components/Testimonials.scss';

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container">
        <div className="section-header">
          <h2>Client Testimonials</h2>
          <p>What Our Clients Say About Us</p>
        </div>
        
        <div className="testimonials-grid">
          {/* Testimonial 1 */}
          <div className="testimonial-card">
            <div className="quote-icon">
              <FaQuoteLeft />
            </div>
            <p className="testimonial-text">
              "Vedanta Ventures has been our primary supplier for TMT bars and plywood for over three years. Their consistent quality and timely delivery have made them our trusted partner for all construction material needs."
            </p>
            <div className="testimonial-author">
              <div className="author-avatar">
                <span>RS</span>
              </div>
              <div className="author-info">
                <h4>Rajesh Sharma</h4>
                <p>Project Manager, Buildwell Constructions</p>
              </div>
            </div>
          </div>
          
          {/* Testimonial 2 */}
          <div className="testimonial-card">
            <div className="quote-icon">
              <FaQuoteLeft />
            </div>
            <p className="testimonial-text">
              "As an interior design firm, we need reliable suppliers for quality timber and plywood. Vedanta Ventures has consistently provided us with premium materials that meet our exacting standards."
            </p>
            <div className="testimonial-author">
              <div className="author-avatar">
                <span>PP</span>
              </div>
              <div className="author-info">
                <h4>Priya Patel</h4>
                <p>Creative Director, Elegant Interiors</p>
              </div>
            </div>
          </div>
          
          {/* Testimonial 3 */}
          <div className="testimonial-card">
            <div className="quote-icon">
              <FaQuoteLeft />
            </div>
            <p className="testimonial-text">
              "The technical expertise provided by Vedanta Ventures team helped us select the right materials for our challenging infrastructure project. Their knowledge and support were invaluable."
            </p>
            <div className="testimonial-author">
              <div className="author-avatar">
                <span>AK</span>
              </div>
              <div className="author-info">
                <h4>Arjun Kumar</h4>
                <p>Civil Engineer, Urban Infrastructure Ltd</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
