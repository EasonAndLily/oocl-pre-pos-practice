/*global collectSameElements*/
"use strict";

describe("practice-1-4", () => {
  const collectionA = [
    { key: "a" },
    { key: "e" },
    { key: "h" },
    { key: "t" },
    { key: "f" },
    { key: "c" },
    { key: "g" },
    { key: "b" },
    { key: "d" }
  ];

  it("选出A集合中元素的key属性，跟B对象中value属性中的元素相同的元素", () => {
    const result = mapObjectKeyToCollection(collectionA);

    expect(result).toEqual(["a", "e", "h", "t", "f", "c", "g", "b", "d"]);
  });
});
