
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send the form data to a server
    console.log('Form submitted:', formData);
    alert('Vielen Dank für Ihre Nachricht! Wir werden uns schnellstmöglich bei Ihnen melden.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
  };

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Kontakt</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Haben Sie Fragen zu unseren Leistungen oder benötigen Sie ein Angebot? 
            Wir freuen uns auf Ihre Nachricht!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
            <h3 className="text-2xl font-semibold mb-6 text-brand-blue">Schreiben Sie uns</h3>
            
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
              
              <button 
                type="submit"
                className="btn-primary w-full"
              >
                Nachricht senden
              </button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div className="flex flex-col justify-between">
            <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-6">
              <h3 className="text-2xl font-semibold mb-6 text-brand-blue">Kontaktinformationen</h3>
              
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
            
            {/* Map Placeholder */}
            <div className="bg-gray-200 rounded-lg shadow-md h-64 flex items-center justify-center">
              <p className="text-gray-600">Google Maps wird hier eingebunden</p>
            </div>
          </div>
        </div>
      </div>
    </section>
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

export default ContactSection;
