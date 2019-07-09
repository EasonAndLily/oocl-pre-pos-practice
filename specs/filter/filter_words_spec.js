"use strict";

var filterWordsByLength = require("../../practice/filter/filter_words.js");

describe("choose_words", function() {
  let words = [
    "spray",
    "limit",
    "elite",
    "exuberant",
    "destruction",
    "present"
  ];

  it("choose words length more than six", function() {
    var result = filterWordsByLength(words, 6);

    expect(result).toEqual(["exuberant", "destruction", "present"]);
  });
});
