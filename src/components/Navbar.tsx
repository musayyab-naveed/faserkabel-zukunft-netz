
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/2e06c016-47b0-40e1-8a63-c30a4cc69f66.png" 
            alt="Faserkabel DG GmbH Logo" 
            className="h-12 md:h-16"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <NavLink to="/">Startseite</NavLink>
          <NavLink to="/about">Über uns</NavLink>
          <NavLink to="/services">Leistungen</NavLink>
          <NavLink to="/references">Referenzen</NavLink>
          <NavLink to="/career">Karriere</NavLink>
          <NavLink to="/contact">Kontakt</NavLink>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Menü schließen" : "Menü öffnen"}
            className="p-2"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-brand-blue" />
            ) : (
              <Menu className="h-6 w-6 text-brand-blue" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white w-full absolute top-full left-0 shadow-md">
          <div className="container-custom py-4 flex flex-col space-y-4">
            <MobileNavLink to="/" onClick={toggleMenu}>Startseite</MobileNavLink>
            <MobileNavLink to="/about" onClick={toggleMenu}>Über uns</MobileNavLink>
            <MobileNavLink to="/services" onClick={toggleMenu}>Leistungen</MobileNavLink>
            <MobileNavLink to="/references" onClick={toggleMenu}>Referenzen</MobileNavLink>
            <MobileNavLink to="/career" onClick={toggleMenu}>Karriere</MobileNavLink>
            <MobileNavLink to="/contact" onClick={toggleMenu}>Kontakt</MobileNavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

// Desktop Navigation Link
const NavLink: React.FC<{ to: string; children: React.ReactNode }> = ({ 
  to, 
  children 
}) => (
  <Link 
    to={to} 
    className="text-gray-800 font-medium hover:text-brand-blue transition duration-300"
  >
    {children}
  </Link>
);

// Mobile Navigation Link
const MobileNavLink: React.FC<{ 
  to: string;
  children: React.ReactNode;
  onClick: () => void;
}> = ({ to, children, onClick }) => (
  <Link 
    to={to} 
    className="block py-2 text-gray-800 font-medium hover:text-brand-blue transition duration-300"
    onClick={onClick}
  >
    {children}
  </Link>
);

export default Navbar;
