const chatService = require("../service/chatService");

async function chat(req, res) {
  const { sender, message } = req.body;

  try {
    const replies = await chatService.sendMessageToRasa(sender, message);
    res.json({ replies });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

module.exports = { chat };
