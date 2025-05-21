
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
            imageUrl="/lovable-uploads/dc416d32-5f96-47ba-8e26-ff4e9d9277e5.png"
            to="/services#einblasen"
          />
          <ServiceCard 
            title="Spleißen & Montage" 
            description="Präzise LWL-Verbindungen für stabile Netzwerke."
            imageUrl="/lovable-uploads/9e714934-1408-43fc-b218-31933671c2d9.png"
            to="/services#spleissen"
          />
          <ServiceCard 
            title="FTTH-Nachanschlüsse" 
            description="Nachträgliche Anschlüsse an bestehende Netz-Infrastrukturen."
            imageUrl="/lovable-uploads/4735ee13-f9bd-4423-bd6c-1cc65bed8a2a.png"
            to="/services#ftth"
          />
          <ServiceCard 
            title="Inhouse-Verkabelung" 
            description="Vom APL bis zum Router – strukturierte Verkabelung im Gebäude."
            imageUrl="/lovable-uploads/db4aca4c-ed5a-470d-b7e1-6b1b01accd97.png"
            to="/services#inhouse"
          />
          <ServiceCard 
            title="Netz-Wartung & Messung" 
            description="OTDR-Messung, Fehlersuche, Dokumentation und Instandhaltung."
            imageUrl="/lovable-uploads/62c1ed95-fc65-4cca-8831-cb8406a8d435.png"
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
