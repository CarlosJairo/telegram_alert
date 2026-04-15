const axios = require("axios");
const { TOKEN, CHAT_ID } = require("../config");

/**
 * Service to handle outgoing Telegram notifications.
 */
async function sendAlert(message) {
  const url = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

  try {
    return await axios.post(url, {
      chat_id: CHAT_ID,
      text: message,
      parse_mode: "Markdown",
    });
  } catch (error) {
    throw new Error(`Telegram Notification Error: ${error.message}`);
  }
}

module.exports = { sendAlert };
