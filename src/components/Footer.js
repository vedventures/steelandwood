import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedinIn, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import '../styles/components/Footer.scss';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h2>Vedanta Ventures</h2>
            <p>Trusted supplier of premium building materials</p>
            <div className="social-links">
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <FaWhatsapp />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
          
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#products">Products</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h3>Contact Information</h3>
            <p><strong>Address:</strong> #17, 2nd Floor, 7th Main Road, 2nd Stage, Indiranagar, Bengaluru - 560038</p>
            <p><strong>Phone:</strong> +91 9979972714</p>
            <p><strong>Email:</strong> vedantaventures1@gmail.com</p>
            <p><strong>Hours:</strong> Monday - Saturday: 9:00 AM - 6:00 PM</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Vedanta Ventures. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
