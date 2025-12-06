const axios = require("axios");

async function sendMessageToRasa(sender, message) {
  try {
    const response = await axios.post(
      "https://super-funicular-vrgw5r5xq5xf6gqg-5005.app.github.dev/webhooks/rest/webhook",
      { sender, message }
    );
    return response.data.map(r =>({text: r.text, buttons: r.buttons || []}));
  } catch (error) {
    console.error("Error en chatService:", error.message);
    throw new Error("No se pudo conectar con Rasa");
  }
}

module.exports = { sendMessageToRasa };
