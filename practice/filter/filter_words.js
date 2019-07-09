"use strict";

function filterWordsMoreThanSix(words) {
  let result = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > 6) {
      result.push(words[i]);
    }
  }
  return result;
}

function filterWordsMoreThanFour(words) {
  let result = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > 4) {
      result.push(words[i]);
    }
  }
  return result;
}

module.exports = {
  filterWordsMoreThanSix: filterWordsMoreThanSix,
  filterWordsMoreThanFour: filterWordsMoreThanFour
};
