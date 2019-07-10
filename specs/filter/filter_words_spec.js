"use strict";

const filterWords = require("../../practice/filter/filter_words.js");

describe("choose_words", function() {
  let words = ["spra", "limit", "elit", "exuberant", "destruction", "present"];
  it("choose words length more than six", function() {
    const condition = (word) => {
      return word.length > 6;
    };
    const result = filterWords.filterWordsMoreThanSix(words, condition);

    expect(result).toEqual(["exuberant", "destruction", "present"]);
  });

  it("choose words length more than four", function() {
    const condition = (word) => {
      return word.length > 4;
    };
    const result = filterWords.filterWordsMoreThanFour(words, condition);

    expect(result).toEqual(["limit", "exuberant", "destruction", "present"]);
  });
});
