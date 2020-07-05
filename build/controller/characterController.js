"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _axios = _interopRequireDefault(require("axios"));

var _utilities = require("../helpers/utilities");

/* eslint-disable no-return-assign */
var getCharacters = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(sort, order, filter) {
    var config, _yield$axios$get, status, data, sorted, filtered, heightCalculation, heightToFeet, characterData;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            config = {
              headers: {
                'Content-Type': 'application/json'
              }
            };
            _context.next = 3;
            return _axios["default"].get('https://swapi.dev/api/people/', config);

          case 3:
            _yield$axios$get = _context.sent;
            status = _yield$axios$get.status;
            data = _yield$axios$get.data;

            if (!(status === 200)) {
              _context.next = 13;
              break;
            }

            sorted = data.results.sort((0, _utilities.sortOrder)(sort, order));
            filtered = filter ? sorted.filter(function (res) {
              return res.gender.toUpperCase() === filter.toUpperCase();
            }) : sorted; // eslint-disable-next-line no-param-reassign

            heightCalculation = filtered.reduce(function (acc, res) {
              return acc += +res.height;
            }, 0);
            heightToFeet = (0, _utilities.convertCmtoFeet)(heightCalculation);
            characterData = [{
              count: filtered.length,
              totalHeightInFt: heightToFeet,
              totalHeightInCM: "".concat(heightCalculation, "cm"),
              characters: filtered
            }];
            return _context.abrupt("return", characterData);

          case 13:
            throw error;

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getCharacters(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

var _default = {
  getCharacters: getCharacters
};
exports["default"] = _default;