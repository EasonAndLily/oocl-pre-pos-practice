"use strict";

function printReceipt(inputs) {
  let idMaps = getIdMaps(inputs);
  let report = getReport(getReceiptCollection(idMaps));
  printReport(report);
}

function printReport(report) {
  let receiptsStr = "";
  report.receipts.forEach((receipt) => {
    receiptsStr =
      receiptsStr +
      "名称：" +
      receipt.name +
      "，数量：" +
      receipt.count +
      receipt.unit +
      "，单价：" +
      receipt.unitPrice +
      ".00(元)，小计：" +
      receipt.totalPrice +
      ".00(元)\n";
  });
  console.log(
    "***<没钱赚商店>收据***\n" +
      receiptsStr +
      "----------------------\n" +
      "总计：" +
      report.sumPrice +
      ".00(元)\n" +
      "**********************"
  );
}

function getIdMaps(inputs) {
  let idMap = new Map();
  inputs.forEach((element) => {
    let count = 1;
    if (idMap.has(element)) {
      count = idMap.get(element) + 1;
    }
    idMap.set(element, count);
  });
  return idMap;
}

function getReceiptCollection(idMap) {
  let data = loadAllItems();
  return Array.from(idMap.keys()).map((id) => {
    let obj = data.filter((item) => item.barcode == id)[0];
    return {
      name: obj.name,
      count: idMap.get(id),
      unit: obj.unit,
      unitPrice: obj.price,
      totalPrice: idMap.get(id) * obj.price
    };
  });
}

function getReport(receipts) {
  return {
    receipts: receipts,
    sumPrice: receipts.map((item) => item.totalPrice).reduce((a, b) => a + b)
  };
}
