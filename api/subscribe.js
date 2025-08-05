// pages/api/subscribe.js - VERSÃO ATUALIZADA PARA BREVO

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { email } = req.body;

  if (!email || !email.includes("@")) {
    return res.status(400).json({ error: "E-mail inválido." });
  }

  const API_KEY = process.env.BREVO_API_KEY;
  const LIST_ID = process.env.BREVO_LIST_ID;

  if (!API_KEY || !LIST_ID) {
    return res.status(500).json({
      error: "Variáveis de ambiente da Brevo não configuradas no servidor.",
    });
  }

  // A URL da API da Brevo para adicionar contatos
  const url = "https://api.brevo.com/v3/contacts";

  // O corpo da requisição é um pouco diferente
  const data = {
    email: email,
    listIds: [Number(LIST_ID)], // O ID da lista precisa ser um número dentro de um array
    updateEnabled: true, // Se o contato já existir, atualiza os dados dele
  };

  const options = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "api-key": API_KEY, // O header de autorização é diferente
    },
    body: JSON.stringify(data),
  };

  try {
    const response = await fetch(url, options);

    // A Brevo retorna 201 para um novo contato e 204 para um contato existente que foi atualizado.
    if (response.status === 201 || response.status === 204) {
      return res
        .status(201)
        .json({ message: "Inscrição realizada com sucesso!" });
    } else {
      const errorData = await response.json();
      // O erro 'duplicate_parameter' significa que o e-mail já está na lista.
      if (errorData.code === "duplicate_parameter") {
        return res
          .status(201)
          .json({ message: "E-mail já inscrito, tudo certo!" });
      }
      return res
        .status(400)
        .json({ error: errorData.message || "Erro ao se inscrever." });
    }
  } catch (error) {
    return res.status(500).json({ error: "Erro interno do servidor." });
  }
}
