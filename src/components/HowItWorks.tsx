import React from "react";
import { useInView } from "react-intersection-observer";
import { Search, PenTool, Users2, Dice1Icon as DiceIcon } from "lucide-react";
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

  return (
    <div
      ref={ref}
      className={`flex flex-col md:flex-row items-start gap-4 transition-all duration-700 ${
        inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
      }`}
      style={{ transitionDelay: `${number * 150}ms` }}
    >
      <div className="flex-shrink-0 bg-[#ffd700] rounded-full w-12 h-12 flex items-center justify-center text-black font-bold text-lg">
        {number}
      </div>
      <div>
        <h3 className="text-xl font-bold mb-2 text-[#ffd700]">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
};

const HowItWorks: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-[#1a1a1a] text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("howItWorks.title")}
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            {t("howItWorks.subtitle")}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-16">
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
