"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _cloudinary = require("cloudinary");
var _multerStorageCloudinary = require("multer-storage-cloudinary");
var _multer = _interopRequireDefault(require("multer"));
/* eslint-disable prettier/prettier */

var storage = new _multerStorageCloudinary.CloudinaryStorage({
  cloudinary: _cloudinary.v2,
  params: function () {
    var _params = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, file) {
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", {
              folder: 'samples',
              resource_type: 'auto',
              allowedFormats: ['jpeg', 'png', 'img', 'mp3', 'jpg'],
              path: file.path
            });
          case 1:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    function params(_x, _x2) {
      return _params.apply(this, arguments);
    }
    return params;
  }()
});
var upload = (0, _multer["default"])({
  storage: storage
});
var _default = exports["default"] = upload;