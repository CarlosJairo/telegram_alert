const { URL_SENA } = require("../config");

/**
 * Utility to format data into user-friendly strings for notifications.
 */
const formatter = {
  /**
   * Formats a list of vacancies into a Markdown-ready Telegram message.
   * @param {Array} vacancies - Array of vacancy objects.
   * @returns {string} Formatted message.
   */
  formatTelegramMessage: (vacancies) => {
    const lines = vacancies.map(
      (v) =>
        `📍 *${v.location}*\n   - Vacantes: ${v.totalVacancies} (ID: ${v.id})`,
    );

    return (
      `🚀 *NUEVAS VACANTES PARA ESPAÑA* 🚀\n\n` +
      `${lines.join("\n\n")}\n\n` +
      `🔗 [View Board](${URL_SENA})`
    );
  },
};

module.exports = formatter;
