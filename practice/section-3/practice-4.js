"use strict";

function createUpdatedCollection(collectionA, objectB) {
  return countSameElements(collectionA).map((item) => {
    if (objectB.value.includes(item.key)) {
      item.count = overThreeWillMinusOne(item.count);
    }
    return item;
  });
}

function countSameElements(collection) {
  let elementsMap = new Map();
  collection
    .map((item) => getCharAndNumber(item))
    .forEach((obj) => {
      let count = obj.count;
      if (elementsMap.has(obj.key)) {
        count = count + elementsMap.get(obj.key);
      }
      elementsMap.set(obj.key, count);
    });
  return covertMapToObject(elementsMap);
}

function covertMapToObject(elementsMap) {
  return Array.from(elementsMap).map((item) => {
    return {
      key: item[0],
      count: item[1]
    };
  });
}

function getCharAndNumber(str) {
  let keys = str.match(/[a-z]/g);
  let key = "";
  if (keys && keys.length > 0) {
    key = keys[0];
  }

  let numbers = str.match(/\d+/g);
  let number = 1;
  if (numbers && numbers.length > 0) {
    number = numbers[0];
  }
  return {
    key: key,
    count: parseInt(number)
  };
}

function overThreeWillMinusOne(number) {
  return number - Math.floor(number / 3);
}
