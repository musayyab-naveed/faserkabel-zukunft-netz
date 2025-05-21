
import React from 'react';
import { Link } from 'react-router-dom';

const ReferencesSection: React.FC = () => {
  return (
    <section id="references" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Referenzen</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Entdecken Sie unsere erfolgreich abgeschlossenen Projekte und zufriedene Kunden.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <ReferenceCard 
            title="Breitbandausbau Gemeinde" 
            category="FTTH-Nachanschlüsse"
            imageUrl="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80"
          />
          <ReferenceCard 
            title="Gewerbegebiet-Vernetzung" 
            category="Glasfaser Einblasen"
            imageUrl="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&q=80"
          />
          <ReferenceCard 
            title="Bürogebäude Modernisierung" 
            category="Inhouse-Verkabelung"
            imageUrl="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&q=80"
          />
        </div>

        <div className="flex justify-center">
          <Link to="/references" className="btn-secondary">
            Alle Projekte ansehen
          </Link>
        </div>

        {/* Client Logos */}
        <div className="mt-20">
          <h3 className="text-xl font-semibold mb-8 text-center">Unsere Kunden</h3>
          <div className="flex flex-wrap justify-center gap-8 items-center opacity-70">
            <div className="w-32 h-12 bg-gray-300 rounded flex items-center justify-center">Logo</div>
            <div className="w-32 h-12 bg-gray-300 rounded flex items-center justify-center">Logo</div>
            <div className="w-32 h-12 bg-gray-300 rounded flex items-center justify-center">Logo</div>
            <div className="w-32 h-12 bg-gray-300 rounded flex items-center justify-center">Logo</div>
            <div className="w-32 h-12 bg-gray-300 rounded flex items-center justify-center">Logo</div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ReferenceCard: React.FC<{ title: string; category: string; imageUrl: string }> = ({ 
  title, 
  category, 
  imageUrl 
}) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl">
    <div className="h-48 overflow-hidden">
      <img 
        src={imageUrl} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
      />
    </div>
    <div className="p-6">
      <span className="inline-block px-3 py-1 bg-brand-blue bg-opacity-10 text-brand-blue rounded-full text-sm mb-3">
        {category}
      </span>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <Link to="/references" className="text-brand-blue font-medium hover:underline">
        Mehr erfahren
      </Link>
    </div>
  </div>
);

export default ReferencesSection;
