"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var audioController = _interopRequireWildcard(require("../controllers/audio.controller"));
var _audio2 = require("../validators/audio.validator");
var _multer = _interopRequireDefault(require("../middlewares/multer"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
// import { userAuth } from '../middlewares/auth.middleware';

var router = _express["default"].Router();

// //route to get all users
// router.get('', audioController.getAllUsers);

//route to create a new user
router.post('', _audio2.newAudioValidator, _multer["default"].fields, audioController.newAudio);

//route to get a single user by their user id
// router.get('/:_id', userAuth, userController.getUser);

// //route to update a single user by their user id
// router.put('/:_id', userController.updateUser);

// //route to delete a single user by their user id
// router.delete('/:_id', userController.deleteUser);
var _default = exports["default"] = router;