
import React from 'react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  imageUrl: string;
  to: string;
}

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Unsere Leistungen</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Wir bieten professionelle Dienstleistungen rund um die Glasfasertechnik und sorgen für eine reibungslose Umsetzung Ihres Projekts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard 
            title="Glasfaser Einblasen" 
            description="Modernste Einblastechnologien für Rohrverbände und Speedpipes."
            imageUrl="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80"
            to="/services#einblasen"
          />
          <ServiceCard 
            title="Spleißen & Montage" 
            description="Präzise LWL-Verbindungen für stabile Netzwerke."
            imageUrl="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80"
            to="/services#spleissen"
          />
          <ServiceCard 
            title="FTTH-Nachanschlüsse" 
            description="Nachträgliche Anschlüsse an bestehende Netz-Infrastrukturen."
            imageUrl="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&q=80"
            to="/services#ftth"
          />
          <ServiceCard 
            title="Inhouse-Verkabelung" 
            description="Vom APL bis zum Router – strukturierte Verkabelung im Gebäude."
            imageUrl="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&q=80"
            to="/services#inhouse"
          />
          <ServiceCard 
            title="Netz-Wartung & Messung" 
            description="OTDR-Messung, Fehlersuche, Dokumentation und Instandhaltung."
            imageUrl="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&q=80"
            to="/services#wartung"
          />
          <div className="flex items-center justify-center bg-white p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
            <Link to="/services" className="btn-secondary">
              Alle Leistungen ansehen
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, imageUrl, to }) => (
  <Link to={to} className="block">
    <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl">
      <div className="h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-brand-blue">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  </Link>
);

export default ServicesSection;
