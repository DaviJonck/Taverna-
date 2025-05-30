import React from "react";
import { useInView } from "react-intersection-observer";
import { Scroll, Users, Compass, Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  delay,
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`bg-[#2a2a2af2] rounded-xl p-6 border border-[#ffd70033] transition-all duration-700 ease-out ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="rounded-full w-12 h-12 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-[#ffd700]">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-[#1e1e1e] text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("features.title")}
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            {t("features.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            icon={<Scroll size={24} className="text-amber-400" />}
            title={t("features.feature1.title")}
            description={t("features.feature1.description")}
            delay={100}
          />
          <FeatureCard
            icon={<Users size={24} className="text-amber-400" />}
            title={t("features.feature2.title")}
            description={t("features.feature2.description")}
            delay={200}
          />
          <FeatureCard
            icon={<Compass size={24} className="text-amber-400" />}
            title={t("features.feature3.title")}
            description={t("features.feature3.description")}
            delay={300}
          />
          <FeatureCard
            icon={<Sparkles size={24} className="text-amber-400" />}
            title={t("features.feature4.title")}
            description={t("features.feature4.description")}
            delay={400}
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
