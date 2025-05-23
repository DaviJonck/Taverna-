import React from "react";
import { useInView } from "react-intersection-observer";
import { Shield, Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";
import EmailSignupForm from "./EmailSignupForm";
import Wizard from "../assets/wizard.png";

const CallToAction: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-[#1e1e1e] text-white relative overflow-hidden">
      {/* Decorative elements */}

      <div className="container mx-auto px-4 relative z-10">
        <div
          ref={ref}
          className={`max-w-4xl mx-auto bg-[#2a2a2af2] p-8 md:p-12 rounded-2xl border border-amber-600/20 backdrop-blur-sm transition-all duration-1000 ${
            inView ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center p-2 mb-4">
              <img src={Wizard} alt="Wizard" className="w-10 h-10" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t("callToAction.title")}
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              {t("callToAction.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="bg-gray-700 rounded-xl p-6 mb-6">
                <h3 className="text-xl font-bold flex items-center mb-4">
                  <Shield className="text-amber-400 mr-2" size={20} />
                  {t("callToAction.benefits.title")}
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-amber-400 mr-2">•</span>
                    <span>{t("callToAction.benefits.earlyAccess")}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-400 mr-2">•</span>
                    <span>{t("callToAction.benefits.exclusiveBadge")}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-400 mr-2">•</span>
                    <span>{t("callToAction.benefits.specialBorder")}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-400 mr-2">•</span>
                    <span>{t("callToAction.benefits.directInput")}</span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <EmailSignupForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
