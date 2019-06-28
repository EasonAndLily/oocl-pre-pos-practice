"use strict";

function createUpdatedCollection(collectionA, objectB) {
  return collectionA.map((item) => {
    if (objectB.value.includes(item.key)) {
      item.count = overThreeWillMinusOne(item.count);
    }
    return item;
  });
}

function overThreeWillMinusOne(number) {
  return number - Math.floor(number / 3);
}
