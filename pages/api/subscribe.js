// pages/api/subscribe.js

export default async function handler(req, res) {
  // Valida que a requisição é um POST
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { email } = req.body;

  if (!email || !email.includes("@")) {
    return res.status(400).json({ error: "E-mail inválido." });
  }

  // Pega as variáveis de ambiente
  const API_KEY = process.env.MAILCHIMP_API_KEY;
  const API_SERVER = process.env.MAILCHIMP_API_SERVER;
  const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;

  // Monta a URL da API do Mailchimp
  const url = `https://${API_SERVER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`;

  const data = {
    email_address: email,
    status: "subscribed", // ou 'pending' para double opt-in
  };

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${Buffer.from(`anystring:${API_KEY}`).toString("base64")}`,
    },
    body: JSON.stringify(data),
  };

  try {
    const response = await fetch(url, options);

    // Se o Mailchimp retornar um erro (ex: e-mail já inscrito)
    if (!response.ok) {
      const errorData = await response.json();
      return res
        .status(400)
        .json({ error: errorData.title || "Erro ao se inscrever." });
    }

    // Se tudo deu certo
    return res
      .status(201)
      .json({ message: "Inscrição realizada com sucesso!" });
  } catch (error) {
    return res.status(500).json({ error: "Erro interno do servidor." });
  }
}
