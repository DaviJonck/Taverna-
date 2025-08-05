import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import logo from "../../public/Logo.png";
import LanguageSwitcher from "./LanguageSwitcher";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background/90 backdrop-blur-md shadow-lg py-2 `}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img src={logo} alt="Questr" className="w-5 h-5 " />
            <span className="font-cinzel text-xl md:text-2xl font-bold text-gold">
              uestr
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-8">
              {["start", "features", "faq", "beta"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="font-cinzel text-white/80 hover:text-gold transition-colors"
                >
                  {t(`header.${item}`)}
                </button>
              ))}
            </nav>
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white hover:text-gold transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 flex flex-col space-y-4 animate-fadeIn">
            {["start", "features", "faq", "beta"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="font-cinzel text-white/80 hover:text-gold transition-colors py-2 border-b border-background-lighter"
              >
                {t(`header.${item}`)}
              </button>
            ))}
            <div className="pt-4">
              <LanguageSwitcher />
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
