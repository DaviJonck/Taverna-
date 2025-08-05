import React from "react";
import { useInView } from "react-intersection-observer";
import {
  Search,
  PenTool,
  Users2,
  Dice1Icon as DiceIcon,
  Map,
  Sword,
  Shield,
  Crown,
} from "lucide-react";
import { useTranslation } from "react-i18next";

interface StepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  number: number;
}

const Step: React.FC<StepProps> = ({ title, description, number }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Ícones temáticos para cada etapa
  const stepIcons = [
    <Map key="map" size={24} className="text-amber-400" />,
    <Sword key="sword" size={24} className="text-amber-400" />,
    <Shield key="shield" size={24} className="text-amber-400" />,
    <Crown key="crown" size={24} className="text-amber-400" />,
  ];

  return (
    <div
      ref={ref}
      className={`flex flex-col md:flex-row items-start gap-6 transition-all duration-700 ${
        inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
      }`}
      style={{ transitionDelay: `${number * 150}ms` }}
    >
      <div className="flex-shrink-0 relative">
        {/* Círculo principal com design moderno */}
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800 flex items-center justify-center shadow-xl border border-amber-500/30 relative overflow-hidden group  ">
          {/* Efeito de brilho sutil */}

          {/* Ícone temático central */}
          <div className="relative z-10">{stepIcons[number - 1]}</div>

          {/* Número no canto inferior direito */}
        </div>

        {/* Linha conectora elegante */}
        {number < 4 && (
          <div className="hidden md:block absolute top-20 left-1/2 transform -translate-x-1/2 w-px h-20 bg-gradient-to-b from-amber-500/30 via-amber-400/20 to-transparent"></div>
        )}
      </div>

      <div className="flex-1">
        <h3 className="text-xl font-bold mb-3 text-[#ffd700] flex items-center gap-2">
          <span className="text-2xl text-[#3b4bd8]">⚔️</span>
          {title}
        </h3>
        <p className="text-gray-300 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

const HowItWorks: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-[#1a1a1a] text-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#ffd700]">
            {t("howItWorks.title")}
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            {t("howItWorks.subtitle")}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-20">
            <Step
              icon={<Search size={24} className="text-amber-400" />}
              title={t("howItWorks.step1.title")}
              description={t("howItWorks.step1.description")}
              number={1}
            />
            <Step
              icon={<PenTool size={24} className="text-amber-400" />}
              title={t("howItWorks.step2.title")}
              description={t("howItWorks.step2.description")}
              number={2}
            />
            <Step
              icon={<Users2 size={24} className="text-amber-400" />}
              title={t("howItWorks.step3.title")}
              description={t("howItWorks.step3.description")}
              number={3}
            />
            <Step
              icon={<DiceIcon size={24} className="text-amber-400" />}
              title={t("howItWorks.step4.title")}
              description={t("howItWorks.step4.description")}
              number={4}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
