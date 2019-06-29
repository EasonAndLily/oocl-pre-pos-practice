"use strict";

function grouping_count(collection) {
  let groupedObj = {};
  collection.forEach((item) => {
    let count = 1;
    if (groupedObj[item]) {
      count = groupedObj[item] + 1;
    }

    groupedObj[item] = count;
  });
  return groupedObj;
}

module.exports = grouping_count;
