/**
 * Utility to compare states and detect changes.
 */
const comparator = {
  /**
   * Compares the current vacancy list with the previous saved state.
   * @param {Array} current - Current array of vacancy objects.
   * @param {string} lastStateStr - Stringified previous state.
   * @returns {boolean} True if changes are detected.
   */
  hasChanges: (current, lastStateStr) => {
    return JSON.stringify(current) !== lastStateStr;
  },
};

module.exports = comparator;
