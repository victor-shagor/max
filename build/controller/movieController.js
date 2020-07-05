"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _axios = _interopRequireDefault(require("axios"));

var _model = _interopRequireDefault(require("../model"));

var _utilities = require("../helpers/utilities");

var getMovies = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var config, _yield$axios$get, status, data, sorted, comment, commentAccumulator, commentObject, movieData;

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
            return _axios["default"].get('https://swapi.dev/api/films/', config);

          case 3:
            _yield$axios$get = _context.sent;
            status = _yield$axios$get.status;
            data = _yield$axios$get.data;

            if (!(status === 200)) {
              _context.next = 15;
              break;
            }

            sorted = data.results.sort((0, _utilities.sortOrder)('release_date'));
            _context.next = 10;
            return _model["default"].query('SELECT movie FROM comments');

          case 10:
            comment = _context.sent;
            commentAccumulator = sorted.reduce(function (acc, value) {
              acc[value.title] = 0;
              return acc;
            }, {});
            commentObject = comment.rows.reduce(function (acc, value) {
              // eslint-disable-next-line no-restricted-syntax
              for (var _i = 0, _Object$keys = Object.keys(acc); _i < _Object$keys.length; _i++) {
                var key = _Object$keys[_i];

                if (value.movie.toUpperCase() === key.toUpperCase()) {
                  acc[key] += 1;
                }
              }

              return acc;
            }, commentAccumulator);
            movieData = sorted.map(function (res) {
              // eslint-disable-next-line no-restricted-syntax
              for (var _i2 = 0, _Object$keys2 = Object.keys(commentObject); _i2 < _Object$keys2.length; _i2++) {
                var key = _Object$keys2[_i2];

                if (res.title.toUpperCase() === key.toUpperCase()) {
                  // eslint-disable-next-line no-param-reassign
                  res = {
                    title: res.title,
                    openeing_crawl: res.opening_crawl,
                    commentCount: commentObject[key],
                    date: res.release_date
                  };
                }
              }

              return res;
            });
            return _context.abrupt("return", movieData);

          case 15:
            throw error;

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getMovies() {
    return _ref.apply(this, arguments);
  };
}();

var _default = {
  getMovies: getMovies
};
exports["default"] = _default;