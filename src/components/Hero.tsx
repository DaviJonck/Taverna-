import React from "react";
import { useInView } from "react-intersection-observer";
import { Sword, Users } from "lucide-react";
import { useTranslation } from "react-i18next";
import EmailSignupForm from "./EmailSignupForm";

const Hero: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#1a1a1a] text-white">
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div
          ref={ref}
          className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-[#ffd700]">
            {t("hero.title")}
          </h1>

          <p className="text-2xl md:text-3xl mb-8 text-amber-100">
            {t("hero.subtitle")}
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <div className="flex items-center space-x-2 bg-gray-800 bg-opacity-70 px-4 py-2 rounded-lg">
              <Sword size={20} className="text-amber-400" />
              {t("hero.forGameMasters")}
            </div>
            <div className="flex items-center space-x-2 bg-gray-800 bg-opacity-70 px-4 py-2 rounded-lg">
              <Users size={20} className="text-amber-400" />
              {t("hero.forPlayers")}
            </div>
          </div>

          <div className="max-w-md mx-auto">
            <EmailSignupForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
