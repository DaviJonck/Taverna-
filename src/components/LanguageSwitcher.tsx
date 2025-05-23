import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => changeLanguage("en")}
        className={`p-1 rounded hover:bg-gray-700 transition-colors ${
          i18n.language === "en" ? "bg-gray-700" : ""
        }`}
        title="English"
      >
        <img
          src="https://flagcdn.com/w20/us.png"
          alt="English"
          className="w-6 h-4"
        />
      </button>
      <button
        onClick={() => changeLanguage("pt-BR")}
        className={`p-1 rounded hover:bg-gray-700 transition-colors ${
          i18n.language === "pt-BR" ? "bg-gray-700" : ""
        }`}
        title="Português"
      >
        <img
          src="https://flagcdn.com/w20/br.png"
          alt="Português"
          className="w-6 h-4"
        />
      </button>
    </div>
  );
};

export default LanguageSwitcher;
