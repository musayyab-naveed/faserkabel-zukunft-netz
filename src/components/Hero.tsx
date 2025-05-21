
import React from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-brand-blue">Zukunftssichere</span> <br />
              <span className="text-brand-green">Glasfaserlösungen</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8">
              schnell, zuverlässig, professionell
            </p>
            
            <div className="space-y-4 mb-8">
              <FeatureItem text="Glasfaser Einblasen & Montage" />
              <FeatureItem text="FTTH-Nachanschlüsse" />
              <FeatureItem text="Inhouse-Verkabelung & Dokumentation" />
              <FeatureItem text="Wartung bestehender Netze" />
            </div>
            
            <Link to="/contact" className="btn-primary inline-block">
              Jetzt unverbindlich anfragen
            </Link>
          </div>
          
          <div className="hidden lg:block">
            <img 
              src="/lovable-uploads/0b7dfff9-d1ec-48fe-9cee-37968c52601d.png" 
              alt="Glasfasertechnik Mitarbeiter mit Sicherheitshelm" 
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureItem: React.FC<{ text: string }> = ({ text }) => (
  <div className="flex items-center">
    <div className="bg-brand-green rounded-full p-1 mr-3">
      <Check className="h-4 w-4 text-white" />
    </div>
    <span className="text-gray-800">{text}</span>
  </div>
);

export default Hero;
