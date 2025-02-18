/*global countSameElements*/
"use strict";

describe("practice-2-1", () => {
  const collection = [
    "a",
    "a",
    "a",
    "e",
    "e",
    "e",
    "e",
    "e",
    "e",
    "e",
    "h",
    "h",
    "h",
    "h",
    "h",
    "h",
    "h",
    "h",
    "h",
    "h",
    "h",
    "t",
    "t",
    "t",
    "t",
    "t",
    "t",
    "t",
    "t",
    "t",
    "t",
    "t",
    "t",
    "t",
    "t",
    "t",
    "t",
    "t",
    "t",
    "t",
    "t",
    "f",
    "f",
    "f",
    "f",
    "f",
    "f",
    "f",
    "f",
    "f",
    "c",
    "c",
    "c",
    "c",
    "c",
    "c",
    "c",
    "c",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "d",
    "d",
    "d",
    "d",
    "d"
  ];

  it("把A集合中相同的元素统计出数量", () => {
    const result = countSameElements(collection);
    console.log(result);
    expect(result).toEqual([
      { key: "a", count: 3 },
      { key: "e", count: 7 },
      { key: "h", count: 11 },
      { key: "t", count: 20 },
      { key: "f", count: 9 },
      { key: "c", count: 8 },
      { key: "g", count: 7 },
      { key: "b", count: 6 },
      { key: "d", count: 5 }
    ]);
  });

  it("把A集合中相同的元素统计出数量为二维数组", () => {
    const result = getMapFromCollection(collection);

    expect(result).toEqual(
      new Map([
        ["a", 3],
        ["e", 7],
        ["h", 11],
        ["t", 20],
        ["f", 9],
        ["c", 8],
        ["g", 7],
        ["b", 6],
        ["d", 5]
      ])
    );
  });

  it("测试将Map对象转为数组对象", () => {
    const result = covertMapToObject(
      new Map([
        ["a", 3],
        ["e", 7],
        ["h", 11],
        ["t", 20],
        ["f", 9],
        ["c", 8],
        ["g", 7],
        ["b", 6],
        ["d", 5]
      ])
    );

    expect(result).toEqual([
      { key: "a", count: 3 },
      { key: "e", count: 7 },
      { key: "h", count: 11 },
      { key: "t", count: 20 },
      { key: "f", count: 9 },
      { key: "c", count: 8 },
      { key: "g", count: 7 },
      { key: "b", count: 6 },
      { key: "d", count: 5 }
    ]);
  });
});
