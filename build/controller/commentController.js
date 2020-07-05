"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _model = _interopRequireDefault(require("../model"));

var getComments = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var data;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _model["default"].query('SELECT * FROM comments ORDER BY createdat DESC');

          case 2:
            data = _context.sent;
            return _context.abrupt("return", data.rows);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getComments() {
    return _ref.apply(this, arguments);
  };
}();

var postComment = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(movie, comment, ip) {
    var date, data;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            date = new Date();
            _context2.next = 3;
            return _model["default"].query('INSERT INTO comments (movie, comment, commenterip, createdat) VALUES ($1, $2, $3, $4) RETURNING *', [movie, comment, ip, date]);

          case 3:
            data = _context2.sent;
            return _context2.abrupt("return", data.rows);

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function postComment(_x, _x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();

var _default = {
  getComments: getComments,
  postComment: postComment
};
exports["default"] = _default;