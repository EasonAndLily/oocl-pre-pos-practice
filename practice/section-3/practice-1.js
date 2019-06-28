"use strict";

function createUpdatedCollection(collectionA, objectB) {
  return collectionA.map((item) => {
    if (objectB.value.includes(item.key)) {
      item.count = item.count - 1;
    }
    return item;
  });
}
