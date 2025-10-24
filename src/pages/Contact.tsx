
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    alert('Vielen Dank für Ihre Nachricht! Wir werden uns schnellstmöglich bei Ihnen melden.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <div className="pt-32 pb-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container-custom">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">Kontakt</h1>
            <p className="text-lg text-gray-600">
              Haben Sie Fragen oder benötigen Sie ein Angebot? Wir freuen uns auf Ihre Nachricht!
            </p>
          </div>
        </div>

        <section className="section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-8">
                  <h2 className="text-2xl font-bold mb-6 text-brand-blue">Kontaktinformationen</h2>
                  
                  <div className="space-y-6">
                    <ContactItem 
                      icon={<MapPin className="h-6 w-6 text-brand-green" />}
                      title="Adresse"
                      content="Wasserfuhr 1, 32108 Bad Salzuflen"
                    />
                    <ContactItem 
                      icon={<Mail className="h-6 w-6 text-brand-green" />}
                      title="E-Mail"
                      content="info@faserkabel.de"
                      isLink
                      linkHref="mailto:info@faserkabel.de"
                    />
                    <ContactItem 
                      icon={<Phone className="h-6 w-6 text-brand-green" />}
                      title="Telefon"
                      content="0160 7777 99 7"
                      isLink
                      linkHref="tel:01607777997"
                    />
                    <ContactItem 
                      icon={<Globe className="h-6 w-6 text-brand-green" />}
                      title="Website"
                      content="www.faserkabel.de"
                      isLink
                      linkHref="https://www.faserkabel.de"
                      external
                    />
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
                  <h2 className="text-2xl font-bold mb-6 text-brand-blue">Öffnungszeiten</h2>
                  
                  <table className="w-full">
                    <tbody>
                      <tr className="border-b border-gray-100">
                        <td className="py-2 font-medium">Montag - Donnerstag</td>
                        <td className="py-2 text-right">08:00 - 17:00 Uhr</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-2 font-medium">Freitag</td>
                        <td className="py-2 text-right">08:00 - 15:00 Uhr</td>
                      </tr>
                      <tr>
                        <td className="py-2 font-medium">Samstag - Sonntag</td>
                        <td className="py-2 text-right">geschlossen</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
                <h2 className="text-2xl font-bold mb-6 text-brand-blue">Schreiben Sie uns</h2>
                
                <form onSubmit={handleSubmit}>
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
                      Telefon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-700">
                      Betreff *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                      required
                    >
                      <option value="">Bitte wählen</option>
                      <option value="angebot">Angebotsanfrage</option>
                      <option value="beratung">Beratungsgespräch</option>
                      <option value="support">Technischer Support</option>
                      <option value="sonstiges">Sonstiges</option>
                    </select>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">
                      Nachricht *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                      required
                    ></textarea>
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
                    Nachricht senden
                  </button>
                </form>
              </div>
            </div>
            
            {/* Map */}
            <div className="mt-12" id="standort">
              <h2 className="text-2xl font-bold mb-6">Standort</h2>
              <div className="rounded-lg shadow-md overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2452.1019653987705!2d8.755927076906147!3d52.07787366886875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47ba6adf4d6f867b%3A0x3c8eec8c8aa54412!2sWasserfuhr%201%2C%2032108%20Bad%20Salzuflen!5e0!3m2!1sen!2sde!4v1761297170825!5m2!1sen!2sde"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-96"
                  title="Google Maps Standort Faserkabel DG GmbH"
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

const ContactItem: React.FC<{ 
  icon: React.ReactNode;
  title: string;
  content: string;
  isLink?: boolean;
  linkHref?: string;
  external?: boolean;
}> = ({ icon, title, content, isLink = false, linkHref = "#", external = false }) => (
  <div className="flex items-start">
    <div className="mr-4 mt-1">{icon}</div>
    <div>
      <h4 className="font-medium text-gray-800">{title}</h4>
      {isLink ? (
        <a 
          href={linkHref} 
          className="text-brand-blue hover:underline"
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {content}
        </a>
      ) : (
        <p className="text-gray-600">{content}</p>
      )}
    </div>
  </div>
);

export default Contact;
