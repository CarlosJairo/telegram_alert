const axios = require("axios");
const cheerio = require("cheerio");
const { URL_SENA } = require("../config");

/**
 * Fetches and parses Spain vacancies from the SENA portal.
 * @returns {Promise<Array>} Sorted array of vacancy objects.
 */
async function getSpainVacancies() {
  try {
    const { data } = await axios.get(URL_SENA, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/120.0.0.0 Safari/537.36",
        "Accept-Language": "es-ES,es;q=0.9",
      },
    });

    const $ = cheerio.load(data);
    const vacancies = [];

    $(".regRow").each((_, element) => {
      const id = $(element).find("td.hidden").text().trim();
      const location = $(element).find("td.regName").text().trim();
      const totalVacancies = $(element).find("td").last().text().trim();

      if (location.toLowerCase().includes("españa")) {
        vacancies.push({
          id,
          location,
          totalVacancies: parseInt(totalVacancies, 10) || 0,
        });
      }
    });

    // Sort by ID to ensure consistent state comparison
    return vacancies.sort((a, b) => a.id.localeCompare(b.id));
  } catch (error) {
    throw new Error(`SENA Scraping Error: ${error.message}`);
  }
}

module.exports = { getSpainVacancies };
