
import React from 'react';
import { Link } from 'react-router-dom';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Über uns</h2>
            <p className="text-lg text-gray-700 mb-4">
              Faserkabel DG GmbH ist Ihr regionaler Partner für professionelle Glasfasertechnik, 
              Einblastechnik und Netzinstandhaltung in Nordrhein-Westfalen.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Mit langjähriger Erfahrung im Bereich Glasfasertechnik bieten wir Ihnen 
              zuverlässige und zukunftssichere Lösungen für Ihre Projekte.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              Unter der Leitung von Dauran Göktas sorgen wir für präzise Ausführungen 
              und termingerechte Fertigstellungen.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link to="/about" className="btn-primary">
                Mehr über uns
              </Link>
              <Link to="/contact" className="border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white px-6 py-3 rounded-md font-medium transition duration-300">
                Kontakt aufnehmen
              </Link>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-brand-green rounded-lg"></div>
              <img 
                src="/lovable-uploads/9e714934-1408-43fc-b218-31933671c2d9.png" 
                alt="Glasfasertechniker bei der Arbeit" 
                className="rounded-lg shadow-xl w-full h-auto object-cover relative z-10"
              />
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ValueCard 
            title="Zuverlässigkeit" 
            description="Wir halten, was wir versprechen – termingerecht und präzise."
          />
          <ValueCard 
            title="Präzision" 
            description="Jeder Handgriff sitzt, jede Verbindung ist perfekt."
          />
          <ValueCard 
            title="Qualität" 
            description="Wir arbeiten nach höchsten Standards für langlebige Lösungen."
          />
          <ValueCard 
            title="Zukunftssicherheit" 
            description="Unsere Infrastrukturen sind für kommende Anforderungen gerüstet."
          />
        </div>
      </div>
    </section>
  );
};

const ValueCard: React.FC<{ title: string; description: string }> = ({ title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-brand-blue">
    <h3 className="text-xl font-semibold mb-3 text-brand-blue">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default AboutSection;
