"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _swaggerUiExpress = _interopRequireDefault(require("swagger-ui-express"));

var _cors = _interopRequireDefault(require("cors"));

var _morgan = _interopRequireDefault(require("morgan"));

var _movies = _interopRequireDefault(require("./routes/movies"));

var _characters = _interopRequireDefault(require("./routes/characters"));

var _comment = _interopRequireDefault(require("./routes/comment"));

var _swagger = _interopRequireDefault(require("../swagger.json"));

/* eslint-disable no-console */
var app = (0, _express["default"])(); // view engine setup

app.use((0, _cors["default"])());
app.use((0, _morgan["default"])('dev'));
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
}));
app.use((0, _cookieParser["default"])());
var port = process.env.PORT || 3001;
app.listen(port, function () {
  console.log("Listening from port ".concat(port));
});
app.use('/api-docs', _swaggerUiExpress["default"].serve, _swaggerUiExpress["default"].setup(_swagger["default"]));
app.use('/movies', _movies["default"]);
app.use('/characters', _characters["default"]);
app.use('/comments', _comment["default"]); // app.use("/login", loginRouter);
// app.use("/register", registerRouter);
// app.use("/post", auth, postRouter);

app.get('/', function (req, res) {
  return res.status(200).send({
    message: 'Welcome to Star wars movies'
  });
});
app.use('*', function (req, res) {
  return res.status(404).send({
    message: 'route not found'
  });
});
var _default = app;
exports["default"] = _default;