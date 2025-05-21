
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Services: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <div className="pt-32 pb-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container-custom">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">Unsere Leistungen</h1>
            <p className="text-lg text-gray-600 max-w-3xl">
              Professionelle Dienstleistungen rund um die Glasfasertechnik – von der Planung bis zur Umsetzung.
            </p>
          </div>
        </div>

        <section className="section-padding" id="einblasen">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <span className="inline-block px-4 py-2 bg-brand-blue bg-opacity-10 text-brand-blue rounded-full text-sm mb-4">
                  Leistung
                </span>
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Glasfaser Einblasen</h2>
                <p className="text-gray-700 mb-4">
                  Wir setzen modernste Einblastechnologien für Rohrverbände und Speedpipes ein, um Glasfaserkabel 
                  effizient und schonend zu verlegen. Unsere erfahrenen Techniker sorgen für eine optimale 
                  Installation bei minimaler Beeinträchtigung.
                </p>
                <p className="text-gray-700 mb-4">
                  Zu unseren Leistungen im Bereich Glasfaser Einblasen gehören:
                </p>
                <ul className="list-disc pl-5 mb-4 text-gray-700 space-y-2">
                  <li>Einblasen von Mikrokabeln in Speedpipes</li>
                  <li>Installation von Glasfaserkabeln in bestehende Infrastrukturen</li>
                  <li>Effizientes Einblasen über lange Strecken</li>
                  <li>Dokumentation und Vermessung der eingeblasenen Strecken</li>
                </ul>
              </div>
              <div className="flex justify-center">
                <img 
                  src="/lovable-uploads/dc416d32-5f96-47ba-8e26-ff4e9d9277e5.png" 
                  alt="Glasfaser Einblasen" 
                  className="rounded-lg shadow-xl w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-gray-50" id="spleissen">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div className="order-2 lg:order-1">
                <img 
                  src="/lovable-uploads/9e714934-1408-43fc-b218-31933671c2d9.png" 
                  alt="Spleißen & Montage" 
                  className="rounded-lg shadow-xl w-full h-auto object-cover"
                />
              </div>
              <div className="order-1 lg:order-2">
                <span className="inline-block px-4 py-2 bg-brand-blue bg-opacity-10 text-brand-blue rounded-full text-sm mb-4">
                  Leistung
                </span>
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Spleißen & Montage</h2>
                <p className="text-gray-700 mb-4">
                  Für präzise LWL-Verbindungen und stabile Netzwerke sorgen unsere erfahrenen Spleißer mit 
                  modernster Ausrüstung. Wir bieten hochpräzise Glasfaserspleißungen für alle Arten von Fasern 
                  und Anwendungen.
                </p>
                <p className="text-gray-700 mb-4">
                  Unsere Leistungen im Bereich Spleißen und Montage umfassen:
                </p>
                <ul className="list-disc pl-5 mb-4 text-gray-700 space-y-2">
                  <li>Präzisionsspleißungen mit minimaler Dämpfung</li>
                  <li>Installation und Bestückung von Verteilern und Muffen</li>
                  <li>Montage von Abschlussboxen und Patchpanels</li>
                  <li>Qualitätsprüfung aller Verbindungen mittels OTDR-Messung</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding" id="ftth">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <span className="inline-block px-4 py-2 bg-brand-blue bg-opacity-10 text-brand-blue rounded-full text-sm mb-4">
                  Leistung
                </span>
                <h2 className="text-2xl md:text-3xl font-bold mb-6">FTTH-Nachanschlüsse</h2>
                <p className="text-gray-700 mb-4">
                  Wir realisieren nachträgliche Anschlüsse an bestehende Netz-Infrastrukturen für Privathaushalte 
                  und Unternehmen. Vom Hauptverteiler bis zur Anschlussdose im Gebäude – wir kümmern uns um 
                  den kompletten Prozess.
                </p>
                <p className="text-gray-700 mb-4">
                  Unser FTTH-Service umfasst:
                </p>
                <ul className="list-disc pl-5 mb-4 text-gray-700 space-y-2">
                  <li>Beratung und Planung von Nachanschlüssen</li>
                  <li>Koordination mit Netzbetreibern</li>
                  <li>Tiefbauarbeiten für Hausanschlüsse</li>
                  <li>Installation und Aktivierung der Anschlüsse</li>
                </ul>
              </div>
              <div className="flex justify-center">
                <img 
                  src="/lovable-uploads/4735ee13-f9bd-4423-bd6c-1cc65bed8a2a.png" 
                  alt="FTTH-Nachanschlüsse" 
                  className="rounded-lg shadow-xl w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-gray-50" id="inhouse">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div className="order-2 lg:order-1">
                <img 
                  src="/lovable-uploads/db4aca4c-ed5a-470d-b7e1-6b1b01accd97.png" 
                  alt="Inhouse-Verkabelung" 
                  className="rounded-lg shadow-xl w-full h-auto object-cover"
                />
              </div>
              <div className="order-1 lg:order-2">
                <span className="inline-block px-4 py-2 bg-brand-blue bg-opacity-10 text-brand-blue rounded-full text-sm mb-4">
                  Leistung
                </span>
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Inhouse-Verkabelung</h2>
                <p className="text-gray-700 mb-4">
                  Vom Abschlusspunkt der Linientechnik (APL) bis zum Router – wir übernehmen die strukturierte 
                  Verkabelung im Gebäude. Unsere Inhouse-Lösungen sind auf maximale Leistung und Zuverlässigkeit 
                  ausgelegt.
                </p>
                <p className="text-gray-700 mb-4">
                  Unsere Inhouse-Verkabelungsleistungen umfassen:
                </p>
                <ul className="list-disc pl-5 mb-4 text-gray-700 space-y-2">
                  <li>Planung und Installation von strukturierter Verkabelung</li>
                  <li>Spleißen und Terminieren von Glasfasern</li>
                  <li>Installation von Netzwerkschränken und Patchpanels</li>
                  <li>Umfassende Dokumentation der Infrastruktur</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding" id="wartung">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-4 py-2 bg-brand-blue bg-opacity-10 text-brand-blue rounded-full text-sm mb-4">
                  Leistung
                </span>
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Netz-Wartung & Messung</h2>
                <p className="text-gray-700 mb-4">
                  Mit unseren OTDR-Messungen, Fehlersuche, Dokumentation und Instandhaltung sorgen wir für 
                  die langfristige Zuverlässigkeit Ihrer Glasfaserinfrastruktur. Regelmäßige Wartung verhindert 
                  Ausfälle und optimiert die Leistung.
                </p>
                <p className="text-gray-700 mb-4">
                  Unser Wartungs- und Messservice umfasst:
                </p>
                <ul className="list-disc pl-5 mb-4 text-gray-700 space-y-2">
                  <li>Regelmäßige OTDR-Messungen der Netzinfrastruktur</li>
                  <li>Schnelle Fehleranalyse und -behebung</li>
                  <li>Präventive Wartung von Glasfasernetzwerken</li>
                  <li>Ausführliche Dokumentation und Berichterstattung</li>
                </ul>
              </div>
              <div className="flex justify-center">
                <img 
                  src="/lovable-uploads/62c1ed95-fc65-4cca-8831-cb8406a8d435.png" 
                  alt="Netz-Wartung & Messung" 
                  className="rounded-lg shadow-xl w-full h-auto object-cover"
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

export default Services;
