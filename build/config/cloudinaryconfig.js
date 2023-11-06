"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uploader = exports.cloudinaryConfig = void 0;
var _cloudinary = require("cloudinary");
/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */

var uploader = exports.uploader = _cloudinary.v2.uploader;
var cloudinaryConfig = exports.cloudinaryConfig = function cloudinaryConfig(req, res, next) {
  _cloudinary.v2.config({
    cloud_name: 'dv5v8l2lr',
    api_key: '777541867955751',
    api_secret: '***************************'
  });
  next();
};