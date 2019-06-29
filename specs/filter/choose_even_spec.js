"use strict";

var choose_even = require("../../practice/filter/choose_even.js");

describe("choose_even", function() {
  var collection = [0, 1, 2, 3, 4, 6];

  it("choose_even", function() {
    var result = choose_even(collection);

    expect(result).toEqual([0, 2, 4, 6]);
  });
});
