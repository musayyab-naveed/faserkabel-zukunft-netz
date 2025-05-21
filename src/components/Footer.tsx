
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link to="/" className="inline-block mb-6">
              <img 
                src="/lovable-uploads/0b5cf741-a8da-4919-8bb3-01947d9764d5.png" 
                alt="Faserkabel DG GmbH Logo" 
                className="h-20"
              />
            </Link>
            <p className="text-gray-300 mb-4">
              Ihr regionaler Partner für professionelle Glasfasertechnik, Einblastechnik und Netzinstandhaltung in Nordrhein-Westfalen.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Navigation</h3>
            <ul className="space-y-2">
              <FooterLink to="/">Startseite</FooterLink>
              <FooterLink to="/about">Über uns</FooterLink>
              <FooterLink to="/services">Leistungen</FooterLink>
              <FooterLink to="/references">Referenzen</FooterLink>
              <FooterLink to="/career">Karriere</FooterLink>
              <FooterLink to="/contact">Kontakt</FooterLink>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Leistungen</h3>
            <ul className="space-y-2">
              <FooterLink to="/services#einblasen">Glasfaser Einblasen</FooterLink>
              <FooterLink to="/services#spleissen">Spleißen & Montage</FooterLink>
              <FooterLink to="/services#ftth">FTTH-Nachanschlüsse</FooterLink>
              <FooterLink to="/services#inhouse">Inhouse-Verkabelung</FooterLink>
              <FooterLink to="/services#wartung">Netz-Wartung & Messung</FooterLink>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Kontakt</h3>
            <address className="not-italic text-gray-300">
              <p className="mb-2">Faserkabel DG GmbH</p>
              <p className="mb-2">Wasserfuhr 1</p>
              <p className="mb-2">32108 Bad Salzuflen</p>
            </address>
            <p className="mb-1 mt-4">
              <a href="mailto:info@faserkabel.de" className="text-gray-300 hover:text-brand-green transition">
                info@faserkabel.de
              </a>
            </p>
            <p className="mb-1">
              <a href="tel:01607777997" className="text-gray-300 hover:text-brand-green transition">
                0160 7777 99 7
              </a>
            </p>
            <p>
              <a href="https://www.faserkabel.de" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-brand-green transition">
                www.faserkabel.de
              </a>
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8 text-sm text-gray-400">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {currentYear} Faserkabel DG GmbH. Alle Rechte vorbehalten.</p>
            
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/legal" className="hover:text-brand-green transition">
                Impressum
              </Link>
              <Link to="/legal#datenschutz" className="hover:text-brand-green transition">
                Datenschutz
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLink: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => (
  <li>
    <Link to={to} className="text-gray-300 hover:text-brand-green transition">
      {children}
    </Link>
  </li>
);

export default Footer;
