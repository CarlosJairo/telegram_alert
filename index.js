const senaService = require("./src/services/senaService");
const telegramService = require("./src/services/telegramService");
const storage = require("./src/utils/storage");
const formatter = require("./src/utils/formatter");
const comparator = require("./src/utils/comparator");

async function runWatchCycle() {
  console.log("🔍 Checking vacancies...");

  try {
    const currentVacancies = await senaService.getSpainVacancies();
    const lastStateStr = storage.getLastState();

    if (comparator.hasChanges(currentVacancies, lastStateStr)) {
      console.log("✨ Changes detected!");

      if (currentVacancies.length > 0) {
        const message = formatter.formatTelegramMessage(currentVacancies);
        await telegramService.sendAlert(message);
      }

      storage.saveState(JSON.stringify(currentVacancies));
    } else {
      console.log("😴 No changes found.");
    }
  } catch (error) {
    console.error("❌ Error:", error.message);
  }
}

const startApp = async () => {
  const MINUTES = 5;
  while (true) {
    await runWatchCycle();
    console.log(`⏳ Waiting ${MINUTES} min...`);
    await new Promise((resolve) => setTimeout(resolve, MINUTES * 60 * 1000));
  }
};

startApp();
