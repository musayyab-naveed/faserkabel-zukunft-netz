
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
            imageUrl="/lovable-uploads/dc416d32-5f96-47ba-8e26-ff4e9d9277e5.png"
          />
          <ReferenceCard 
            title="Gewerbegebiet-Vernetzung" 
            category="Glasfaser Einblasen"
            imageUrl="/lovable-uploads/4735ee13-f9bd-4423-bd6c-1cc65bed8a2a.png"
          />
          <ReferenceCard 
            title="Bürogebäude Modernisierung" 
            category="Inhouse-Verkabelung"
            imageUrl="/lovable-uploads/db4aca4c-ed5a-470d-b7e1-6b1b01accd97.png"
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
          <div className="flex flex-wrap justify-center gap-8 items-center">
            <div className="w-32 h-16 flex items-center justify-center">
              <img src="/lovable-uploads/831bd765-f09a-435f-b080-98a40678821c.png" alt="Sumitomo Electric" className="max-h-full max-w-full" />
            </div>
            <div className="w-32 h-16 flex items-center justify-center">
              <img src="/lovable-uploads/46f6ea96-6e35-4e27-a8d9-c487a93796da.png" alt="Opternus" className="max-h-full max-w-full" />
            </div>
            <div className="w-32 h-16 flex items-center justify-center">
              <img src="/lovable-uploads/87107b4c-281d-41f1-8faa-d576ad7cd760.png" alt="Hilti" className="max-h-full max-w-full" />
            </div>
            <div className="w-40 h-16 flex items-center justify-center">
              <img src="/lovable-uploads/48b5aeb9-724d-4cb5-bb71-85a557abc2e2.png" alt="Kaeser Kompressoren" className="max-h-full max-w-full" />
            </div>
            <div className="w-32 h-16 flex items-center justify-center">
              <img src="/lovable-uploads/a0599622-8a51-412c-bd8c-6a0eeb7253de.png" alt="Würth" className="max-h-full max-w-full" />
            </div>
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
