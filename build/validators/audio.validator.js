"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.newAudioValidator = void 0;
var _joi = _interopRequireDefault(require("@hapi/joi"));
var newAudioValidator = exports.newAudioValidator = function newAudioValidator(req, res, next) {
  var schema = _joi["default"].object({
    name: _joi["default"].string().min(4).required(),
    imageUrl: _joi["default"].string().required(),
    audioUrl: _joi["default"].string().required()
  });
  var _schema$validate = schema.validate(req.body),
    error = _schema$validate.error,
    value = _schema$validate.value;
  if (error) {
    next(error);
  } else {
    req.validatedBody = value;
    next();
  }
};