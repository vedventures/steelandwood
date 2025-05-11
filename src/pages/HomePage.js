import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Products from '../components/Products';
import Services from '../components/Services';
import BrandsMarquee from '../components/BrandsMarquee';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Products />
      <Services />
      <BrandsMarquee />
      <Testimonials />
      <Contact />
    </>
  );
};

export default HomePage;
