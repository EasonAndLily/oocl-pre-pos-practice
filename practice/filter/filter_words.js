"use strict";

function filterWordsByCondition(words, condition) {
  let result = [];
  for (let i = 0; i < words.length; i++) {
    if (condition(words[i])) {
      result.push(words[i]);
    }
  }
  return result;
}

module.exports = {
  filterWordsByCondition: filterWordsByCondition
};
