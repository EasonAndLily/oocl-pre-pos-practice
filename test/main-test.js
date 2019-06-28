"use strict";

describe("pos", () => {
  it("should print text", () => {
    const inputs = [
      "ITEM000000",
      "ITEM000000",
      "ITEM000000",
      "ITEM000000",
      "ITEM000000",
      "ITEM000001",
      "ITEM000001",
      "ITEM000004"
    ];

    spyOn(console, "log");

    printReceipt(inputs);

    const expectText = `***<没钱赚商店>收据***
名称：可口可乐，数量：5瓶，单价：3.00(元)，小计：15.00(元)
名称：雪碧，数量：2瓶，单价：3.00(元)，小计：6.00(元)
名称：电池，数量：1个，单价：2.00(元)，小计：2.00(元)
----------------------
总计：23.00(元)
**********************`;

    expect(console.log).toHaveBeenCalledWith(expectText);
  });

  it("should get id map", () => {
    const inputs = [
      "ITEM000000",
      "ITEM000000",
      "ITEM000000",
      "ITEM000000",
      "ITEM000000",
      "ITEM000001",
      "ITEM000001",
      "ITEM000004"
    ];
    const result = getIdMaps(inputs);
    expect(result).toEqual(
      new Map([["ITEM000000", 5], ["ITEM000001", 2], ["ITEM000004", 1]])
    );
  });

  it("should return a collection of receipt", () => {
    let idMap = new Map([
      ["ITEM000000", 5],
      ["ITEM000001", 2],
      ["ITEM000004", 1]
    ]);

    const result = getReceiptCollection(idMap);
    expect(result).toEqual([
      {
        name: "可口可乐",
        count: 5,
        unit: "瓶",
        unitPrice: 3.0,
        totalPrice: 15.0
      },
      { name: "雪碧", count: 2, unit: "瓶", unitPrice: 3.0, totalPrice: 6.0 },
      { name: "电池", count: 1, unit: "个", unitPrice: 2.0, totalPrice: 2.0 }
    ]);
  });

  it("should return a report obj", () => {
    let receipts = [
      { name: "可口可乐", count: 5, unitPrice: 3.0, totalPrice: 15.0 },
      { name: "雪碧", count: 2, unitPrice: 3.0, totalPrice: 6.0 },
      { name: "电池", count: 1, unitPrice: 2.0, totalPrice: 2.0 }
    ];

    const result = getReport(receipts);
    expect(result).toEqual({
      receipts: [
        { name: "可口可乐", count: 5, unitPrice: 3.0, totalPrice: 15.0 },
        { name: "雪碧", count: 2, unitPrice: 3.0, totalPrice: 6.0 },
        { name: "电池", count: 1, unitPrice: 2.0, totalPrice: 2.0 }
      ],
      sumPrice: 23.0
    });
  });
});
