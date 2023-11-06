"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
// import { type } from '@hapi/joi/lib/extend';

var audioSchema = new _mongoose.Schema({
  title: {
    type: String
  },
  audioUrl: {
    type: String
  },
  imageUrl: {
    type: String
  },
  artiste: {
    type: String
  }
}, {
  timestamps: true
});
var _default = exports["default"] = (0, _mongoose.model)('Audio', audioSchema);