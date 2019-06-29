"use strict";

describe("pos", () => {
  it("should print text", () => {
    const tags = [
      "ITEM000001",
      "ITEM000001",
      "ITEM000001",
      "ITEM000001",
      "ITEM000001",
      "ITEM000003-2.5",
      "ITEM000005",
      "ITEM000005-2"
    ];

    spyOn(console, "log");

    printReceipt(tags);

    const expectText = `***<没钱赚商店>收据***
名称：雪碧，数量：5瓶，单价：3(元)，小计：12(元)
名称：荔枝，数量：2.5斤，单价：15(元)，小计：37.5(元)
名称：方便面，数量：3袋，单价：4.5(元)，小计：9(元)
----------------------
总计：58.5(元)
节省：7.5(元)
**********************`;

    expect(console.log).toHaveBeenCalledWith(expectText);
  });

  it("test splice string to id and count", () => {
    const result = getIdAndCount("ITEM000003-2.5");
    expect(result).toEqual({
      id: "ITEM000003",
      count: 2.5
    });
  });

  it("test splice string to id and count", () => {
    const result = getIdAndCount("ITEM000005");
    expect(result).toEqual({
      id: "ITEM000005",
      count: 1
    });
  });

  it("test get receipt colletion", () => {
    let idMaps = new Map([
      ["ITEM000001", 5],
      ["ITEM000003", 2.5],
      ["ITEM000005", 3]
    ]);
    let result = getReceiptCollection(idMaps);
    expect(result).toEqual([
      {
        name: "雪碧",
        count: 5,
        unit: "瓶",
        unitPrice: 3,
        totalPrice: 12
      },
      { name: "荔枝", count: 2.5, unit: "斤", unitPrice: 15, totalPrice: 37.5 },
      { name: "方便面", count: 3, unit: "袋", unitPrice: 4.5, totalPrice: 9 }
    ]);
  });

  it("test covert input to id and count map", () => {
    const tags = [
      "ITEM000001",
      "ITEM000001",
      "ITEM000001",
      "ITEM000001",
      "ITEM000001",
      "ITEM000003-2.5",
      "ITEM000005",
      "ITEM000005-2"
    ];
    const result = getIdMaps(tags);
    expect(Array.from(result)).toEqual([
      ["ITEM000001", 5],
      ["ITEM000003", 2.5],
      ["ITEM000005", 3]
    ]);
  });

  it("test get total price", () => {
    const result = calTotalPrice("ITEM000001", 3, 5);
    expect(result).toEqual(12);
  });

  it("test receipt promotion type", () => {
    const result = getPromotionType("ITEM000001");
    expect(result).toEqual("BUY_TWO_GET_ONE_FREE");
  });

  it("test receipt promotion type", () => {
    const result = getPromotionType("ITEM000003");
    expect(result).toEqual(null);
  });

  it("test get a report obj", () => {
    let receipts = [
      {
        name: "雪碧",
        count: 5,
        unit: "瓶",
        unitPrice: 3,
        totalPrice: 12
      },
      { name: "荔枝", count: 2.5, unit: "斤", unitPrice: 15, totalPrice: 37.5 },
      { name: "方便面", count: 3, unit: "袋", unitPrice: 4.5, totalPrice: 9 }
    ];

    let result = getReport(receipts);
    expect(result).toEqual({
      receipts: [
        {
          name: "雪碧",
          count: 5,
          unit: "瓶",
          unitPrice: 3,
          totalPrice: 12
        },
        {
          name: "荔枝",
          count: 2.5,
          unit: "斤",
          unitPrice: 15,
          totalPrice: 37.5
        },
        { name: "方便面", count: 3, unit: "袋", unitPrice: 4.5, totalPrice: 9 }
      ],
      sumPrice: 58.5,
      savePrice: 7.5
    });
  });
});
