"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _express = _interopRequireDefault(require("express"));

var _helperResponse = _interopRequireDefault(require("../helpers/helperResponse"));

var _commentController = _interopRequireDefault(require("../controller/commentController"));

var router = _express["default"].Router();

router.get('/', /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var data;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _commentController["default"].getComments();

          case 3:
            data = _context.sent;
            return _context.abrupt("return", _helperResponse["default"].requestSuccessful(res, data, 200));

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", _helperResponse["default"].checkExpressErrors(res));

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
router.post('/', /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _req$body, movie, comment, ip, data;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body = req.body, movie = _req$body.movie, comment = _req$body.comment;
            ip = req.ip;

            if (!(!movie || !comment)) {
              _context2.next = 4;
              break;
            }

            return _context2.abrupt("return", _helperResponse["default"].clientError(res, 'movie and comment is required'));

          case 4:
            if (!(comment.length > 500)) {
              _context2.next = 6;
              break;
            }

            return _context2.abrupt("return", _helperResponse["default"].clientError(res, 'comment cannot be more than 500 characters'));

          case 6:
            _context2.prev = 6;
            _context2.next = 9;
            return _commentController["default"].postComment(movie, comment, ip);

          case 9:
            data = _context2.sent;
            return _context2.abrupt("return", _helperResponse["default"].requestSuccessful(res, data, 200));

          case 13:
            _context2.prev = 13;
            _context2.t0 = _context2["catch"](6);
            return _context2.abrupt("return", _helperResponse["default"].checkExpressErrors(res));

          case 16:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[6, 13]]);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());
var _default = router;
exports["default"] = _default;