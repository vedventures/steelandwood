import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaCheckCircle, FaTruck, FaCertificate, FaHandshake } from 'react-icons/fa';
import '../styles/components/Contact.scss';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiry: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    console.log('Form submitted:', formData);
    alert('Thank you for your message. We will get back to you shortly!');
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      inquiry: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-overlay"></div>
      <div className="container">
        <div className="section-header">
          <h2>Contact Us</h2>
          <p>Get in Touch for Quality Building Materials</p>
        </div>
        
        <div className="contact-wrapper">
          {/* Contact Form Section */}
          <div className="contact-form-section">
            <div className="contact-form-container">
              <h3>Send Us a Message</h3>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-input"
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-input"
                      required
                    />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="inquiry">Inquiry Type</label>
                    <select
                      id="inquiry"
                      name="inquiry"
                      value={formData.inquiry}
                      onChange={handleChange}
                      className="form-input"
                    >
                      <option value="" disabled>Select Inquiry Type</option>
                      <option value="tmt">TMT Bars</option>
                      <option value="timber">Timber</option>
                      <option value="plywood">Plywood</option>
                      <option value="other">Other Inquiry</option>
                    </select>
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="form-input"
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
            </div>
          </div>
          
          {/* Why Choose Us Section */}
          <div className="contact-info-section">
            <div className="why-choose-us-container">
              <h3>Why Choose Vedanta Ventures</h3>
              
              <div className="benefits-accordion">
                <div className="benefit-item">
                  <div className="benefit-header">
                    <div className="icon-container">
                      <FaCheckCircle />
                    </div>
                    <h4>Premium Quality Materials</h4>
                  </div>
                  <div className="benefit-content">
                    <p>We source only the highest quality building materials, ensuring durability and performance that exceeds industry standards.</p>
                  </div>
                </div>
                
                <div className="benefit-item">
                  <div className="benefit-header">
                    <div className="icon-container">
                      <FaTruck />
                    </div>
                    <h4>On-time Delivery</h4>
                  </div>
                  <div className="benefit-content">
                    <p>Our efficient logistics ensure your materials arrive exactly when you need them, helping you stay on schedule with your projects.</p>
                  </div>
                </div>
                
                <div className="benefit-item">
                  <div className="benefit-header">
                    <div className="icon-container">
                      <FaCertificate />
                    </div>
                    <h4>Certified Products</h4>
                  </div>
                  <div className="benefit-content">
                    <p>All our products are certified and comply with industry standards, giving you peace of mind about safety and reliability.</p>
                  </div>
                </div>
                
                <div className="benefit-item">
                  <div className="benefit-header">
                    <div className="icon-container">
                      <FaHandshake />
                    </div>
                    <h4>Expert Consultation</h4>
                  </div>
                  <div className="benefit-content">
                    <p>Our team of experts provides professional advice to help you choose the right materials for your specific construction needs.</p>
                  </div>
                </div>
              </div>
              
              <div className="cta-container">
                <h4>Ready to start your project?</h4>
                <a href="#products" className="btn btn-outline">Explore Our Products</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
