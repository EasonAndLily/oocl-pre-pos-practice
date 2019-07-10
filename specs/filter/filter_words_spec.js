"use strict";

const filterWords = require("../../practice/filter/filter_words.js");

describe("choose_words", function() {
  let words = ["spra", "limit", "elit", "exuberant", "destruction", "present"];

  it("choose words length more than six", function() {
    const result = filterWords.filterWordsMoreThanSix(words);

    expect(result).toEqual(["exuberant", "destruction", "present"]);
  });

  it("choose words length more than four", function() {
    const result = filterWords.filterWordsMoreThanFour(words);

    expect(result).toEqual(["limit", "exuberant", "destruction", "present"]);
  });
});
