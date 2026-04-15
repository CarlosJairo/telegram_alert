const fs = require("fs");
const { FILE_PATH } = require("../config");

/**
 * Handles persistent data storage for state tracking.
 */
const storage = {
  /**
   * Reads the previously saved state from the local file.
   * @returns {string} The raw state string or an empty string if not found.
   */
  getLastState: () => {
    return fs.existsSync(FILE_PATH) ? fs.readFileSync(FILE_PATH, "utf-8") : "";
  },

  /**
   * Persists the current state to a local file.
   * @param {string} newState - The stringified vacancy data.
   */
  saveState: (newState) => {
    fs.writeFileSync(FILE_PATH, newState);
  },
};

module.exports = storage;
