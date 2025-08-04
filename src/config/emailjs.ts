import emailjs from "emailjs-com";

// Configuração do EmailJS
// Você precisa se registrar em https://www.emailjs.com/ e obter estas credenciais

export const EMAILJS_CONFIG = {
  SERVICE_ID: "YOUR_SERVICE_ID", // Substitua pelo seu Service ID
  TEMPLATE_ID: "YOUR_TEMPLATE_ID", // Substitua pelo seu Template ID
  USER_ID: "YOUR_USER_ID", // Substitua pelo seu User ID
};

// Inicializar EmailJS
export const initEmailJS = () => {
  emailjs.init(EMAILJS_CONFIG.USER_ID);
};

// Função para enviar email
export const sendEmail = async (templateParams: any) => {
  try {
    const response = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      templateParams,
      EMAILJS_CONFIG.USER_ID
    );
    return { success: true, data: response };
  } catch (error) {
    console.error("Erro ao enviar email:", error);
    return { success: false, error };
  }
};
