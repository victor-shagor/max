"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dotenv = _interopRequireDefault(require("dotenv"));

var _pg = require("pg");

_dotenv["default"].config();

_pg.types.setTypeParser(1700, function (value) {
  return parseFloat(value);
});

var connectionString = process.env.NODE_ENV === 'test' ? process.env.DATABASE_TEST : process.env.DATABASE_URL;
var pool = new _pg.Pool({
  connectionString: connectionString
});
var _default = pool;
exports["default"] = _default;