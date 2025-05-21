
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const References: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <div className="pt-32 pb-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container-custom">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">Referenzen</h1>
            <p className="text-lg text-gray-600">
              Entdecken Sie unsere erfolgreich abgeschlossenen Projekte und zufriedene Kunden.
            </p>
          </div>
        </div>

        <section className="section-padding">
          <div className="container-custom">
            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">Ausgewählte Projekte</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <ProjectCard 
                title="Breitbandausbau Gemeinde" 
                category="FTTH-Nachanschlüsse"
                imageUrl="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80"
                description="Realisierung von über 200 FTTH-Anschlüssen in einer ländlichen Gemeinde. Komplette Umsetzung von der Planung bis zur Inbetriebnahme."
              />
              <ProjectCard 
                title="Gewerbegebiet-Vernetzung" 
                category="Glasfaser Einblasen"
                imageUrl="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&q=80"
                description="Vernetzung eines Gewerbegebiets mit Hochleistungs-Glasfaserkabeln. Installation von über 5 km Glasfaserstrecke und zugehöriger Infrastruktur."
              />
              <ProjectCard 
                title="Bürogebäude Modernisierung" 
                category="Inhouse-Verkabelung"
                imageUrl="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&q=80"
                description="Vollständige Erneuerung der Netzwerkinfrastruktur eines 6-stöckigen Bürogebäudes mit strukturierter Glasfaserverkabelung."
              />
              <ProjectCard 
                title="Gemeinde-Backbone" 
                category="Spleißen & Montage"
                imageUrl="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&q=80"
                description="Installation und Spleißen des Backbone-Netzwerks für eine mittelgroße Gemeinde. Über 500 Spleißverbindungen mit höchster Präzision."
              />
              <ProjectCard 
                title="Schulcampus-Vernetzung" 
                category="Glasfaser Einblasen"
                imageUrl="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80"
                description="Vollständige Vernetzung eines Schulcampus mit 5 Gebäuden. Einblasen von Mikrokabeln und Installation von Verteilern."
              />
              <ProjectCard 
                title="Industriegebiet Wartung" 
                category="Netz-Wartung & Messung"
                imageUrl="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80"
                description="Laufende Wartung und Prüfung der Glasfaserinfrastruktur eines großen Industriegebiets. Regelmäßige OTDR-Messungen und Fehlerbehebung."
              />
            </div>

            {/* Client Logos */}
            <div className="mt-20">
              <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">Unsere Kunden</h2>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                {[...Array(10)].map((_, i) => (
                  <div 
                    key={i} 
                    className="h-24 bg-white rounded-lg shadow-md flex items-center justify-center p-4"
                  >
                    <div className="w-full h-12 bg-gray-200 rounded flex items-center justify-center">
                      <span className="text-gray-500">Kundenlogo</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonials */}
            <div className="mt-20">
              <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">Das sagen unsere Kunden</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Testimonial 
                  content="Die Zusammenarbeit mit Faserkabel DG GmbH war durchweg professionell. Das Team hat unsere Erwartungen übertroffen und das Projekt termingerecht abgeschlossen."
                  author="Max Mustermann"
                  position="Bürgermeister"
                  company="Gemeinde XYZ"
                />
                <Testimonial 
                  content="Hervorragende Arbeit bei der Installation unserer Glasfaserinfrastruktur. Wir schätzen besonders die hohe Qualität und die detaillierte Dokumentation."
                  author="Erika Musterfrau"
                  position="CTO"
                  company="Technik GmbH"
                />
                <Testimonial 
                  content="Schnelle Reaktionszeiten, kompetente Beratung und eine saubere Umsetzung. Wir werden Faserkabel DG GmbH definitiv weiterempfehlen."
                  author="Thomas Test"
                  position="Netzwerkadministrator"
                  company="Industrie AG"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

const ProjectCard: React.FC<{ 
  title: string; 
  category: string; 
  imageUrl: string;
  description: string;
}> = ({ title, category, imageUrl, description }) => (
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
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const Testimonial: React.FC<{ 
  content: string; 
  author: string;
  position: string;
  company: string;
}> = ({ content, author, position, company }) => (
  <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-brand-blue">
    <div className="mb-4">
      {/* Stars */}
      <div className="flex text-yellow-400 mb-4">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="text-xl">★</span>
        ))}
      </div>
      <p className="text-gray-700 italic mb-6">"{content}"</p>
    </div>
    <div>
      <p className="font-semibold">{author}</p>
      <p className="text-gray-600 text-sm">{position}, {company}</p>
    </div>
  </div>
);

export default References;
