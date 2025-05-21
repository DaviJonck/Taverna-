import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md shadow-lg py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div
              className="text-gold mr-2"
              dangerouslySetInnerHTML={{ __html: logo }}
            />
            <span className="font-cinzel text-xl md:text-2xl font-bold text-gold">
              Taverna
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {["Start", "Features", "Faq", "beta"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="font-cinzel text-white/80 hover:text-gold transition-colors"
              >
                {item
                  .split("-")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ")}
              </button>
            ))}
          </nav>

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
            {["features", "for-dms", "for-players", "beta"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="font-cinzel text-white/80 hover:text-gold transition-colors py-2 border-b border-background-lighter"
              >
                {item
                  .split("-")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ")}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
