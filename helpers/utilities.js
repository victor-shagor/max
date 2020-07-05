/* eslint-disable no-unused-expressions */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-nested-ternary */
export function convertCmtoFeet(cm) {
  const realFeet = (cm * 0.3937) / 12;
  const feet = Math.floor(realFeet);
  const inches = ((realFeet - feet) * 12).toFixed(2);
  return `${feet}ft and ${inches}inches`;
}

export function sortOrder(property, order = 'ascending') {
  return function soring(a, b) {
    let result;
    if (order === 'descending') {
      !isNaN(a[property])
        ? (result = +a[property] > +b[property]
          ? -1
          : +a[property] < +b[property]
            ? 1
            : 0)
        : (result = a[property] > b[property] ? -1 : a[property] < b[property] ? 1 : 0);
    } else {
      !isNaN(a[property])
        ? (result = +a[property] < +b[property]
          ? -1
          : +a[+property] > +b[property]
            ? 1
            : 0)
        : (result = a[property] < b[property]
          ? -1
          : a[+property] > b[property]
            ? 1
            : 0);
    }
    return result;
  };
}
