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

var _characterController = _interopRequireDefault(require("../controller/characterController"));

var router = _express["default"].Router();

router.get('/', /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$query, sort, order, filter, data;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$query = req.query, sort = _req$query.sort, order = _req$query.order, filter = _req$query.filter;

            if (!sort) {
              _context.next = 4;
              break;
            }

            if (!(sort !== 'name' && sort !== 'height')) {
              _context.next = 4;
              break;
            }

            return _context.abrupt("return", _helperResponse["default"].clientError(res, 'sort can only be name or height'));

          case 4:
            if (!order) {
              _context.next = 7;
              break;
            }

            if (!(order !== 'ascending' && order !== 'descending')) {
              _context.next = 7;
              break;
            }

            return _context.abrupt("return", _helperResponse["default"].clientError(res, 'order can only be ascending or descending'));

          case 7:
            _context.prev = 7;
            _context.next = 10;
            return _characterController["default"].getCharacters(sort, order, filter);

          case 10:
            data = _context.sent;
            return _context.abrupt("return", _helperResponse["default"].requestSuccessful(res, data, 200));

          case 14:
            _context.prev = 14;
            _context.t0 = _context["catch"](7);
            return _context.abrupt("return", _helperResponse["default"].checkExpressErrors(res));

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[7, 14]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
var _default = router;
exports["default"] = _default;