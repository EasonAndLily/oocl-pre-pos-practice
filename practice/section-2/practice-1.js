"use strict";

function countSameElements(collection) {
  let elementsMap = getMapFromCollection(collection);
  return covertMapToObject(elementsMap);
}

function getMapFromCollection(collection) {
  let elementsMap = new Map();
  collection.forEach((item) => {
    let count = 1;
    if (elementsMap.has(item)) {
      count = elementsMap.get(item) + 1;
    }
    elementsMap.set(item, count);
  });
  return elementsMap;
}

function covertMapToObject(elementsMap) {
  return Array.from(elementsMap).map((item) => {
    return {
      key: item[0],
      count: item[1]
    };
  });
}
