
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <div className="pt-32 pb-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container-custom">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">Über uns</h1>
            <p className="text-lg text-gray-600">
              Lernen Sie Faserkabel DG GmbH kennen – Ihr Partner für professionelle Glasfasertechnik.
            </p>
          </div>
        </div>

        <section className="section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-brand-blue">Unsere Geschichte</h2>
                <p className="text-gray-700 mb-4">
                  Faserkabel DG GmbH wurde mit dem Ziel gegründet, hochwertige Glasfaserlösungen anzubieten, 
                  die den wachsenden Anforderungen an moderne Kommunikationsinfrastrukturen gerecht werden.
                </p>
                <p className="text-gray-700">
                  Mit langjähriger Erfahrung im Bereich der Glasfasertechnologie haben wir uns als zuverlässiger 
                  Partner für Kommunen, Netzbetreiber und Unternehmen etabliert.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="relative w-full max-w-md">
                  <div className="absolute -top-4 -left-4 w-full h-full border-2 border-brand-green rounded-lg"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&q=80" 
                    alt="Glasfaser Einblasen" 
                    className="rounded-lg shadow-xl w-full h-auto object-cover relative z-10"
                  />
                </div>
              </div>
            </div>

            <div className="mb-20">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-brand-blue">Unser Team</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                  <div className="h-64 bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500">Bild: Dauran Göktas</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-1">Dauran Göktas</h3>
                    <p className="text-brand-blue mb-4">Geschäftsführer</p>
                    <p className="text-gray-600">
                      Mit umfassender Erfahrung im Bereich Glasfasertechnik leitet Herr Göktas 
                      das Unternehmen und sorgt für höchste Qualitätsstandards bei jedem Projekt.
                    </p>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                  <div className="h-64 bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500">Bild: Teammitglied</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-1">Max Mustermann</h3>
                    <p className="text-brand-blue mb-4">Technischer Leiter</p>
                    <p className="text-gray-600">
                      Verantwortlich für die technische Umsetzung aller Projekte und die Einhaltung der höchsten Qualitätsstandards.
                    </p>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                  <div className="h-64 bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500">Bild: Teammitglied</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-1">Erika Musterfrau</h3>
                    <p className="text-brand-blue mb-4">Projektmanagerin</p>
                    <p className="text-gray-600">
                      Koordiniert unsere Projekte und ist die zentrale Ansprechpartnerin für unsere Kunden.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-brand-blue">Standort</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <p className="text-gray-700 mb-4">
                    Unser Unternehmenssitz befindet sich in Bad Salzuflen, von wo aus wir Projekte in ganz 
                    Nordrhein-Westfalen und angrenzenden Regionen betreuen.
                  </p>
                  <address className="not-italic text-gray-700 mb-6">
                    <p className="font-semibold">Faserkabel DG GmbH</p>
                    <p>Wasserfuhr 1</p>
                    <p>D-32108 Bad Salzuflen</p>
                  </address>
                </div>
                <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                  <p className="text-gray-600">Google Maps wird hier eingebunden</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
