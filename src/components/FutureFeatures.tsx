import React from "react";
import { useInView } from "react-intersection-observer";
import {
  Star,
  Users,
  Gamepad2,
  MessageSquare,
  Calendar,
  Trophy,
} from "lucide-react";
import { useTranslation } from "react-i18next";

interface FutureFeatureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}

const FutureFeature: React.FC<FutureFeatureProps> = ({
  title,
  description,
  icon,
  delay,
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`bg-[#2a2a2af2] rounded-xl p-6 border border-gray-700 transition-all duration-700 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-center justify-center mb-4 w-12 h-12 bg-amber-500/20 rounded-lg">
        <div className="text-amber-400">{icon}</div>
      </div>
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

const FutureFeatures: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="py-20 px-4 bg-[#1a1a1a] text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("futureFeatures.title")}
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            {t("futureFeatures.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FutureFeature
            title={t("futureFeatures.feature1.title")}
            description={t("futureFeatures.feature1.description")}
            icon={<Users size={24} />}
            delay={100}
          />
          <FutureFeature
            title={t("futureFeatures.feature2.title")}
            description={t("futureFeatures.feature2.description")}
            icon={<Gamepad2 size={24} />}
            delay={200}
          />
          <FutureFeature
            title={t("futureFeatures.feature3.title")}
            description={t("futureFeatures.feature3.description")}
            icon={<MessageSquare size={24} />}
            delay={300}
          />
          <FutureFeature
            title={t("futureFeatures.feature4.title")}
            description={t("futureFeatures.feature4.description")}
            icon={<Calendar size={24} />}
            delay={400}
          />
          <FutureFeature
            title={t("futureFeatures.feature5.title")}
            description={t("futureFeatures.feature5.description")}
            icon={<Trophy size={24} />}
            delay={500}
          />
          <FutureFeature
            title={t("futureFeatures.feature6.title")}
            description={t("futureFeatures.feature6.description")}
            icon={<Star size={24} />}
            delay={600}
          />
        </div>
      </div>
    </section>
  );
};

export default FutureFeatures;
