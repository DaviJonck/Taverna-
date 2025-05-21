import React from "react";
import { useInView } from "react-intersection-observer";
import { Shield, Sparkles } from "lucide-react";
import EmailSignupForm from "./EmailSignupForm";

const CallToAction: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
            <div className="inline-flex items-center justify-center p-2 bg-amber-600/20 rounded-lg mb-4">
              <Sparkles size={24} className="text-amber-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Join Our Beta Program
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Be among the first adventurers to experience Tavern and receive
              exclusive beta tester benefits
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="bg-gray-700 rounded-xl p-6 mb-6">
                <h3 className="text-xl font-bold flex items-center mb-4">
                  <Shield className="text-amber-400 mr-2" size={20} />
                  Beta Tester Benefits
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-amber-400 mr-2">•</span>
                    <span>
                      Early access to all features before public release
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-400 mr-2">•</span>
                    <span>Exclusive "Beta Tester" profile badge</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-400 mr-2">•</span>
                    <span>
                      Special border for your avatar that shows your OG status
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-400 mr-2">•</span>
                    <span>Direct input on new features and improvements</span>
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
