import React from "react";

import { useTranslation } from "react-i18next";

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#1a1a1a] text-gray-200 py-12 border-t border-gray-400">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center mb-6 md:mb-0">
            <span className="text-2xl font-bold text-white">Taverna</span>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="#"
              className="text-gray-200 hover:text-[#ffd700] transition-colors"
            >
              {t("footer.navigation.home")}
            </a>
            <a
              href="#"
              className="text-gray-200 hover:text-[#ffd700] transition-colors"
            >
              {t("footer.navigation.features")}
            </a>
            <a
              href="#"
              className="text-gray-200 hover:text-[#ffd700] transition-colors"
            >
              {t("footer.navigation.howItWorks")}
            </a>
            <a
              href="#"
              className="text-gray-200 hover:text-[#ffd700] transition-colors"
            >
              {t("footer.navigation.beta")}
            </a>
          </div>
        </div>

        <div className="border-t border-gray-400 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Taverna. {t("footer.copyright")}
          </div>

          <div className="flex gap-6">
            <a
              href="#"
              className="text-gray-200 hover:text-[#ffd700] transition-colors"
            >
              {t("footer.legal.privacyPolicy")}
            </a>
            <a
              href="#"
              className="text-gray-200 hover:text-[#ffd700] transition-colors"
            >
              {t("footer.legal.termsOfService")}
            </a>
            <a
              href="#"
              className="text-gray-200 hover:text-[#ffd700] transition-colors"
            >
              {t("footer.legal.contactUs")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
