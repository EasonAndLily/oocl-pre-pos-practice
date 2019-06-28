"use strict";

function collectSameElements(collectionA, collectionB) {
  return collectionA.filter((item) => collectionB.flat().includes(item));
}
