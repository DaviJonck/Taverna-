import React from "react";
import { useInView } from "react-intersection-observer";
import { Star } from "lucide-react";

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
  return (
    <section className="py-20 bg-[#1e1e1e] text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Beta Testers Say
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Hear from players and DMs who've already joined our tavern
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Testimonial
            quote="As a DM, I've always struggled finding consistent players. Tavern helped me build a reliable group in less than a week!"
            name="Marcus Tilverton"
            role="Dungeon Master"
            rating={5}
            delay={100}
          />
          <Testimonial
            quote="I moved to a new city and thought my D&D days were over. Thanks to Tavern, I found an amazing campaign that fits my schedule perfectly."
            name="Elora Windwood"
            role="Player"
            rating={5}
            delay={200}
          />
          <Testimonial
            quote="The filtering options are amazing. I was able to find a group that plays exactly the way I enjoy - heavy roleplay with tactical combat."
            name="Dominic Blackthorn"
            role="Player"
            rating={4}
            delay={300}
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
