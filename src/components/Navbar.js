import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../styles/components/Navbar.scss';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking on a link
  const closeMobileMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <img src={require('../llogo.png')} alt="Vedanta Ventures Logo" className="logo-image" />
        </Link>

        <div className="menu-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={isMenuOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link" onClick={closeMobileMenu}>
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="#products" className="nav-link" onClick={closeMobileMenu}>
              Products
            </a>
          </li>
          <li className="nav-item">
            <a href="#services" className="nav-link" onClick={closeMobileMenu}>
              Services
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link" onClick={closeMobileMenu}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
