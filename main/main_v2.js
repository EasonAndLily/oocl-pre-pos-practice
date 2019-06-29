"use strict";
function printReceipt(inputs) {
  let idMaps = getIdMaps(inputs);
  let report = getReport(getReceiptCollection(idMaps));
  printReport(report);
}

function getIdMaps(inputs) {
  let idMap = new Map();
  inputs.forEach((element) => {
    let obj = getIdAndCount(element);
    if (idMap.has(obj.id)) {
      obj.count = idMap.get(obj.id) + obj.count;
    }
    idMap.set(obj.id, obj.count);
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
      totalPrice: calTotalPrice(id, obj.price, idMap.get(id))
    };
  });
}

function calTotalPrice(id, price, count) {
  let type = getPromotionType(id);
  switch (type) {
    case "BUY_TWO_GET_ONE_FREE":
      return price * (count - 1);
    default:
      return price * count;
  }
}

function getPromotionType(id) {
  let promotions = loadPromotions();
  let promotionType = promotions.filter((item) => item.barcodes.includes(id));
  if (promotionType.length > 0) {
    return promotionType[0].type;
  }

  return null;
}

function getIdAndCount(str) {
  let id = str;
  let count = 1;
  if (str.includes("-")) {
    id = str.split("-")[0];
    count = str.split("-")[1];
  }

  return {
    id: id,
    count: parseFloat(count)
  };
}

function getReport(receipts) {
  return {
    receipts: receipts,
    sumPrice: receipts.map((item) => item.totalPrice).reduce((a, b) => a + b),
    savePrice: receipts
      .map((item) => item.count * item.unitPrice - item.totalPrice)
      .reduce((a, b) => a + b)
  };
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
      "(元)，小计：" +
      receipt.totalPrice +
      "(元)\n";
  });
  console.log(
    "***<没钱赚商店>收据***\n" +
      receiptsStr +
      "----------------------\n" +
      "总计：" +
      report.sumPrice +
      "(元)\n" +
      "节省：" +
      report.savePrice +
      "(元)\n" +
      "**********************"
  );
}
