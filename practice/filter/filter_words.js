"use strict";

function filterWordsByCondition(words, condition) {
  return words.filter(condition);
}

module.exports = {
  filterWordsByCondition: filterWordsByCondition
};
