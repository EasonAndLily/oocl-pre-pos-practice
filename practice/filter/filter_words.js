"use strict";

function filterWordsByCondition(words, condition) {
  return words.filterWords(condition);
}

Array.prototype.filterWords = function(condition) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    if (condition(this[i])) {
      result.push(this[i]);
    }
  }
  return result;
};

module.exports = {
  filterWordsByCondition: filterWordsByCondition
};
