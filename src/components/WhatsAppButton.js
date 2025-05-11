import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import '../styles/components/WhatsAppButton.scss';

const WhatsAppButton = () => {
  const phoneNumber = '919979972714'; // Added country code (91 for India)
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}`;

  return (
    <a 
      href={whatsappUrl} 
      className="whatsapp-button" 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="whatsapp-icon" />
      <span className="whatsapp-tooltip">Chat with us</span>
    </a>
  );
};

export default WhatsAppButton;
