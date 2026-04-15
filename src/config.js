try {
  require("dotenv").config();
} catch (e) {}

module.exports = {
  TOKEN: process.env.TELEGRAM_TOKEN,
  CHAT_ID: process.env.TELEGRAM_CHAT_ID,
  URL_SENA: "https://ape.sena.edu.co/spe-web/spe/cartelera",
  FILE_PATH: "./ultimo_estado.json",
};
