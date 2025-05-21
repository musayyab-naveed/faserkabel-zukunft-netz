
import React from 'react';
import { Link } from 'react-router-dom';

const CareerSection: React.FC = () => {
  return (
    <section id="career" className="section-padding">
      <div className="container-custom">
        <div className="bg-brand-blue text-white rounded-xl p-8 md:p-12 lg:p-16 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-white bg-opacity-5 -skew-x-12 transform -translate-x-32"></div>
          
          <div className="relative z-10 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Karriere</h2>
            <p className="text-xl mb-6">
              Wir suchen Monteure, Spleißtechniker und Helfer – jetzt bewerben!
            </p>
            <p className="mb-8 text-gray-100">
              Werden Sie Teil unseres Teams und gestalten Sie die digitale Infrastruktur der Zukunft mit. 
              Wir bieten spannende Aufgaben, faire Vergütung und ein kollegiales Arbeitsumfeld.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/career" 
                className="bg-white text-brand-blue hover:bg-gray-100 px-6 py-3 rounded-md font-medium transition duration-300"
              >
                Offene Stellen ansehen
              </Link>
              <Link 
                to="/contact" 
                className="bg-brand-green text-white hover:bg-opacity-90 px-6 py-3 rounded-md font-medium transition duration-300"
              >
                Initiativbewerbung senden
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerSection;
