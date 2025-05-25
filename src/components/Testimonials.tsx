import React from "react";
import { useInView } from "react-intersection-observer";
import { Star } from "lucide-react";
import { useTranslation } from "react-i18next";

interface TestimonialProps {
  quote: string;
  name: string;
  role: string;
  rating: number;
  delay: number;
}

const Testimonial: React.FC<TestimonialProps> = ({
  quote,
  name,
  role,
  rating,
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
      <div className="flex mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={18}
            className={
              i < rating ? "text-amber-400 fill-amber-400" : "text-gray-600"
            }
          />
        ))}
      </div>
      <p className="text-gray-300 mb-6 italic">{quote}</p>
      <div>
        <p className="font-semibold text-white">{name}</p>
        <p className="text-sm text-gray-400">{role}</p>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="py-20 bg-[#1e1e1e] text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("betaFeedback.title")}
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            {t("betaFeedback.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Testimonial
            quote={t("betaFeedback.feedback1.title")}
            name={t("betaFeedback.feedback1.name")}
            role={t("betaFeedback.feedback1.type")}
            rating={5}
            delay={100}
          />
          <Testimonial
            quote={t("betaFeedback.feedback2.title")}
            name={t("betaFeedback.feedback2.name")}
            role={t("betaFeedback.feedback2.type")}
            rating={5}
            delay={200}
          />
          <Testimonial
            quote={t("betaFeedback.feedback3.title")}
            name={t("betaFeedback.feedback3.name")}
            role={t("betaFeedback.feedback3.type")}
            rating={5}
            delay={300}
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
