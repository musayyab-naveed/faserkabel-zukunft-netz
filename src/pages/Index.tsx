
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import ReferencesSection from '../components/ReferencesSection';
import CareerSection from '../components/CareerSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index: React.FC = () => {
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
