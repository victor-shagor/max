"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _model = _interopRequireDefault(require("../model"));

/* eslint-disable no-console */
var createTables = "\n  CREATE TABLE IF NOT EXISTS comments (\n   id SERIAL PRIMARY KEY,\n   movie VARCHAR,\n   comment VARCHAR,\n   commenterIp VARCHAR,\n   createdAt TIMESTAMP\n  );\n";

var createDatabaseTables = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _model["default"].query(createTables).then(function () {
              console.log('Tables successfully created');
            });

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function createDatabaseTables() {
    return _ref.apply(this, arguments);
  };
}();

createDatabaseTables();