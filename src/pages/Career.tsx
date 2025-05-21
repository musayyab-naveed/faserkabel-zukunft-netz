
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Career: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    message: '',
    file: null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({
        ...prev,
        file: e.target.files ? e.target.files[0] : null
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Application submitted:', formData);
    alert('Vielen Dank für Ihre Bewerbung! Wir werden uns schnellstmöglich bei Ihnen melden.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      position: '',
      message: '',
      file: null,
    });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <div className="pt-32 pb-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container-custom">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">Karriere</h1>
            <p className="text-lg text-gray-600">
              Werden Sie Teil unseres Teams und gestalten Sie mit uns die Zukunft der digitalen Infrastruktur.
            </p>
          </div>
        </div>

        <section className="section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-brand-blue">Warum bei uns arbeiten?</h2>
                <p className="text-gray-700 mb-4">
                  Bei Faserkabel DG GmbH bieten wir nicht nur spannende berufliche Herausforderungen, 
                  sondern auch ein angenehmes Arbeitsumfeld und attraktive Leistungen:
                </p>
                <ul className="list-disc pl-5 mb-6 text-gray-700 space-y-2">
                  <li>Moderne Ausstattung und Werkzeuge</li>
                  <li>Faire Vergütung und Zusatzleistungen</li>
                  <li>Flache Hierarchien und kollegiales Team</li>
                  <li>Vielseitige Projektarbeit und Weiterentwicklungsmöglichkeiten</li>
                  <li>Langfristige Karriereperspektiven in einem Zukunftsmarkt</li>
                </ul>
              </div>
              <div className="flex justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80" 
                  alt="Team bei der Arbeit" 
                  className="rounded-lg shadow-xl w-full h-auto object-cover"
                />
              </div>
            </div>

            <div className="mb-20">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-brand-blue">Aktuelle Stellenangebote</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <JobCard 
                  title="Glasfasermonteur (m/w/d)" 
                  type="Vollzeit"
                  location="Bad Salzuflen"
                  description="Für unsere Projekte suchen wir erfahrene Glasfasermonteure für die Installation und Einblasen von LWL-Systemen."
                />
                <JobCard 
                  title="Spleißtechniker (m/w/d)" 
                  type="Vollzeit"
                  location="Bad Salzuflen"
                  description="Zur Verstärkung unseres Teams suchen wir qualifizierte Spleißer mit Erfahrung in der präzisen Verbindung von Glasfasern."
                />
                <JobCard 
                  title="Helfer (m/w/d)" 
                  type="Vollzeit"
                  location="Bad Salzuflen"
                  description="Für die Unterstützung unserer Montage-Teams suchen wir motivierte Helfer, auch ohne Vorkenntnisse."
                />
              </div>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-brand-blue">Bewerbungsformular</h2>
              <div className="max-w-2xl mx-auto">
                <p className="text-gray-700 mb-6 text-center">
                  Haben wir Ihr Interesse geweckt? Dann freuen wir uns auf Ihre Bewerbung!
                </p>
                
                <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6 md:p-8">
                  <div className="mb-6">
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
                      E-Mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-700">
                      Telefon *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="position" className="block mb-2 text-sm font-medium text-gray-700">
                      Gewünschte Position *
                    </label>
                    <select
                      id="position"
                      name="position"
                      value={formData.position}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                      required
                    >
                      <option value="">Bitte wählen</option>
                      <option value="glasfasermonteur">Glasfasermonteur (m/w/d)</option>
                      <option value="spleißtechniker">Spleißtechniker (m/w/d)</option>
                      <option value="helfer">Helfer (m/w/d)</option>
                      <option value="andere">Andere Position</option>
                    </select>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">
                      Nachricht / Anschreiben
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                    ></textarea>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="file" className="block mb-2 text-sm font-medium text-gray-700">
                      Lebenslauf hochladen (PDF) *
                    </label>
                    <input
                      type="file"
                      id="file"
                      name="file"
                      onChange={handleFileChange}
                      accept=".pdf"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div className="mb-6 flex items-start">
                    <input
                      type="checkbox"
                      id="privacy"
                      name="privacy"
                      className="mt-1"
                      required
                    />
                    <label htmlFor="privacy" className="ml-2 text-sm text-gray-700">
                      Ich habe die <a href="/legal#datenschutz" className="text-brand-blue hover:underline">Datenschutzerklärung</a> gelesen und stimme der Verarbeitung meiner Daten zu. *
                    </label>
                  </div>
                  
                  <button 
                    type="submit"
                    className="btn-primary w-full"
                  >
                    Bewerbung absenden
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

const JobCard: React.FC<{ 
  title: string; 
  type: string;
  location: string;
  description: string;
}> = ({ title, type, location, description }) => (
  <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-brand-blue">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <div className="flex items-center text-gray-600 mb-4">
      <span className="mr-4">{type}</span>
      <span>{location}</span>
    </div>
    <p className="text-gray-700 mb-6">{description}</p>
    <a 
      href="#bewerbungsformular" 
      className="text-brand-blue font-medium hover:underline"
    >
      Jetzt bewerben
    </a>
  </div>
);

export default Career;
