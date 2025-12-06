const axios = require("axios");

async function sendMessageToRasa(sender, message) {
  try {
    const response = await axios.post(
      "http://localhost:5005/webhooks/rest/webhook",
      { sender, message }
    );
    return response.data.map(r =>({text: r.text, buttons: r.buttons || []}));
  } catch (error) {
    console.error("Error en chatService:", error.message);
    throw new Error("No se pudo conectar con Rasa");
  }
}

module.exports = { sendMessageToRasa };
