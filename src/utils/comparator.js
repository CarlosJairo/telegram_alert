const comparator = {
  hasChanges: (current, last) => {
    return JSON.stringify(current) !== last;
  },
};

module.exports = comparator;
