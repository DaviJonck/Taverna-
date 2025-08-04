import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  X,
  Mail,
  Shield,
  FileText,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { sendEmail } from "../config/emailjs";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-[#2a2a2a] rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto">
        <div className="flex justify-between items-center p-6 border-b border-gray-600">
          <h2 className="text-xl font-bold text-white">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        <div className="p-6 text-gray-300">{children}</div>
      </div>
    </div>
  );
};

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  // Estados do formulário de contato
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    // Validação básica
    if (
      !contactForm.name ||
      !contactForm.email ||
      !contactForm.subject ||
      !contactForm.message
    ) {
      setErrorMessage("Por favor, preencha todos os campos.");
      setIsSubmitting(false);
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(contactForm.email)) {
      setErrorMessage("Por favor, insira um email válido.");
      setIsSubmitting(false);
      return;
    }

    try {
      // Configuração do EmailJS
      // Você precisará configurar estas variáveis no EmailJS
      const templateParams = {
        from_name: contactForm.name,
        from_email: contactForm.email,
        subject: contactForm.subject,
        message: contactForm.message,
        to_email: "suportequestr@gmail.com",
      };

      // Enviar email usando EmailJS
      const result = await sendEmail(templateParams);

      if (!result.success) {
        throw new Error("Falha ao enviar email");
      }

      setSubmitStatus("success");
      setContactForm({ name: "", email: "", subject: "", message: "" });

      // Reset do status após 5 segundos
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    } catch (error) {
      console.error("Erro ao enviar email:", error);
      setSubmitStatus("error");
      setErrorMessage("Erro ao enviar mensagem. Tente novamente mais tarde.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setContactForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <>
      <footer className="bg-[#1a1a1a] text-gray-200 py-12 border-t border-gray-400">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex items-center mb-6 md:mb-0">
              <span className="text-2xl font-bold text-white">Questr</span>
            </div>
          </div>

          <div className="border-t border-gray-400 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Questr. {t("footer.copyright")}
            </div>

            <div className="flex gap-6">
              <button
                onClick={() => setPrivacyOpen(true)}
                className="text-gray-200 hover:text-[#ffd700] transition-colors flex items-center gap-2"
              >
                <Shield size={16} />
                {t("footer.legal.privacyPolicy")}
              </button>

              <button
                onClick={() => setContactOpen(true)}
                className="text-gray-200 hover:text-[#ffd700] transition-colors flex items-center gap-2"
              >
                <Mail size={16} />
                {t("footer.legal.contactUs")}
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Privacy Policy Modal */}
      <Modal
        isOpen={privacyOpen}
        onClose={() => setPrivacyOpen(false)}
        title={t("footer.legal.privacyPolicy")}
      >
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white mb-4">
            Política de Privacidade
          </h3>

          <section>
            <h4 className="font-semibold text-white mb-2">
              1. Informações que Coletamos
            </h4>
            <p className="mb-3">
              Coletamos informações que você nos fornece diretamente, como
              quando cria uma conta, se inscreve para receber atualizações ou
              entra em contato conosco.
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Endereço de e-mail</li>
            </ul>
          </section>

          <section>
            <h4 className="font-semibold text-white mb-2">
              2. Como Usamos Suas Informações
            </h4>
            <p className="mb-3">
              Usamos suas informações para fornecer, manter e melhorar nossos
              serviços:
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Conectar você com outros jogadores e mestres</li>
              <li>Personalizar sua experiência na plataforma</li>
              <li>Enviar atualizações sobre novos recursos</li>
              <li>Responder a suas perguntas e solicitações</li>
            </ul>
          </section>

          <section>
            <h4 className="font-semibold text-white mb-2">
              3. Compartilhamento de Informações
            </h4>
            <p>
              Não vendemos, alugamos ou compartilhamos suas informações pessoais
              com terceiros, exceto conforme descrito nesta política ou com seu
              consentimento.
            </p>
          </section>

          <section>
            <h4 className="font-semibold text-white mb-2">4. Segurança</h4>
            <p>
              Implementamos medidas de segurança apropriadas para proteger suas
              informações contra acesso não autorizado, alteração, divulgação ou
              destruição.
            </p>
          </section>

          <div className="mt-6 pt-4 border-t border-gray-600">
            <p className="text-sm text-gray-400">
              Última atualização: 04/08/2025
            </p>
          </div>
        </div>
      </Modal>

      {/* Contact Us Modal */}
      <Modal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
        title={t("footer.legal.contactUs")}
      >
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Entre em Contato
            </h3>
            <p className="text-gray-300 mb-6">
              Tem alguma dúvida, sugestão ou problema? Estamos aqui para ajudar!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-semibold text-white">Canais de Contato</h4>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="text-amber-400" size={20} />
                  <div>
                    <p className="font-medium text-white">Email</p>
                    <p className="text-sm text-gray-400">
                      suportequestr@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Shield className="text-amber-400" size={20} />
                  <div>
                    <p className="font-medium text-white">Discord</p>
                    <p className="text-sm text-gray-400">
                      https://discord.gg/questr
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-white">
                Horário de Atendimento
              </h4>
              <div className="text-sm text-gray-400 space-y-1">
                <p>Segunda a Sexta: 9h às 18h</p>
                <p>Sábado: 10h às 16h</p>
                <p>Domingo: Fechado</p>
              </div>
            </div>
          </div>

          <div className="text-center text-sm text-gray-400">
            <p>Responderemos em até 24 horas em dias úteis.</p>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Footer;
