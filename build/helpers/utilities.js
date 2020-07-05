"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convertCmtoFeet = convertCmtoFeet;
exports.sortOrder = sortOrder;

/* eslint-disable no-unused-expressions */

/* eslint-disable no-restricted-globals */

/* eslint-disable no-nested-ternary */
function convertCmtoFeet(cm) {
  var realFeet = cm * 0.3937 / 12;
  var feet = Math.floor(realFeet);
  var inches = ((realFeet - feet) * 12).toFixed(2);
  return "".concat(feet, "ft and ").concat(inches, "inches");
}

function sortOrder(property) {
  var order = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'ascending';
  return function soring(a, b) {
    var result;

    if (order === 'descending') {
      !isNaN(a[property]) ? result = +a[property] > +b[property] ? -1 : +a[property] < +b[property] ? 1 : 0 : result = a[property] > b[property] ? -1 : a[property] < b[property] ? 1 : 0;
    } else {
      !isNaN(a[property]) ? result = +a[property] < +b[property] ? -1 : +a[+property] > +b[property] ? 1 : 0 : result = a[property] < b[property] ? -1 : a[+property] > b[property] ? 1 : 0;
    }

    return result;
  };
}