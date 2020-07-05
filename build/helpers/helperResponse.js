"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var helperResponse = {
  clientError: function clientError(res, error) {
    var status = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 400;
    return res.status(status).json({
      success: false,
      error: error
    });
  },
  requestSuccessful: function requestSuccessful(res, payload) {
    var status = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 200;
    return res.status(status).json({
      data: payload
    });
  },
  checkExpressErrors: function checkExpressErrors(res) {
    res.status(500).json({
      message: 'Something failed, try again later',
      success: false
    }); // next();
  }
};
var _default = helperResponse;
exports["default"] = _default;