import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { ChevronDown } from "lucide-react";

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 p-1 rounded hover:bg-gray-700 transition-colors"
        title={i18n.language === "en" ? "English" : "Português"}
      >
        <img
          src={
            i18n.language === "en"
              ? "https://flagcdn.com/w20/us.png"
              : "https://flagcdn.com/w20/br.png"
          }
          alt={i18n.language === "en" ? "English" : "Português"}
          className="w-6 h-4"
        />
        <ChevronDown size={16} className="text-gray-300" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-[#2a2a2a] rounded-lg shadow-lg py-1 z-50 border border-gray-700">
          <button
            onClick={() => changeLanguage("en")}
            className={`w-full px-4 py-2 text-left hover:bg-gray-700 flex items-center space-x-2 ${
              i18n.language === "en" ? "bg-gray-700" : ""
            }`}
          >
            <img
              src="https://flagcdn.com/w20/us.png"
              alt="English"
              className="w-6 h-4"
            />
            <span className="text-gray-200">English</span>
          </button>
          <button
            onClick={() => changeLanguage("pt-BR")}
            className={`w-full px-4 py-2 text-left hover:bg-gray-700 flex items-center space-x-2 ${
              i18n.language === "pt-BR" ? "bg-gray-700" : ""
            }`}
          >
            <img
              src="https://flagcdn.com/w20/br.png"
              alt="Português"
              className="w-6 h-4"
            />
            <span className="text-gray-200">Português</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
