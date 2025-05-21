
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import ReferencesSection from '../components/ReferencesSection';
import CareerSection from '../components/CareerSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index: React.FC = () => {
  const location = useLocation();

  // Handle hash links for smooth scroll on initial page load
  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const element = document.getElementById(location.hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <main>
        <AboutSection />
        <ServicesSection />
        <ReferencesSection />
        <CareerSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
