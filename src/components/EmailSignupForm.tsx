import React, { useState } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

const EmailSignupForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const { t } = useTranslation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setError(t("emailSignup.errorEnterEmail"));
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email }),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        const data = await response.json();
        setError(data.error || t("emailSignup.errorGeneric"));
      }
    } catch (err) {
      setError(t("emailSignup.errorNetwork"));
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-gray-800 p-6 rounded-lg border border-[#ffd70033] text-center">
        <CheckCircle className="mx-auto mb-4 text-amber-400" size={40} />
        <h3 className="text-xl font-bold text-white mb-2">
          {t("emailSignup.success")}
        </h3>
        <p className="text-gray-300">{t("emailSignup.successMessage")}</p>
      </div>
    );
  }

  return (
    <div className="bg-[#2a2a2af2] p-6 rounded-lg border border-[#ffd70033]">
      <h3 className="text-xl font-bold text-white mb-2">
        {t("emailSignup.title")}
      </h3>
      <p className="text-gray-300 mb-4">{t("emailSignup.subtitle")}</p>

      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
        <div className="flex-grow">
          <div className="relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t("emailSignup.inputPlaceholder")}
              className={`w-full px-4 font-poppins py-3 rounded-lg bg-gray-600 text-white border ${
                error ? "border-red-500" : "border-gray-600"
              } focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent`}
            />
          </div>
          {error && (
            <div className="h-6 mt-1">
              {" "}
              {/* Container com altura fixa para a mensagem */}
              <p className="text-red-500 text-sm">{error}</p>
            </div>
          )}
        </div>

        <div className="sm:self-start">
          {" "}
          {/* Container para o botão alinhado ao topo */}
          <button
            type="submit"
            disabled={isLoading}
            className="h-[46px] bg-[#ffd700] hover:amber-400 text-black font-bold py-3 px-6 
            rounded-md transition-all duration-200 flex items-center whitespace-nowrap
             hover:shadow-[0_0_20px_rgba(251,191,36,0.3)]"
          >
            {isLoading ? (
              <span className="flex items-center">
                <svg
                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                {t("emailSignup.joining")}
              </span>
            ) : (
              <span className="flex items-center">
                {t("emailSignup.button")}{" "}
                <ArrowRight className="ml-1" size={16} />
              </span>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EmailSignupForm;
