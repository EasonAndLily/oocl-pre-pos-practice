"use strict";

function collectSameElements(collectionA, objectB) {
  return collectionA
    .map((item) => item.key)
    .filter((item) => objectB.value.includes(item));
}
