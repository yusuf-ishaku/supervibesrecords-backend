/* eslint-disable prettier/prettier */
import express from 'express';
// import { userAuth } from '../middlewares/auth.middleware';
import * as UserController from '../controllers/user.controller';

const router = express.Router();

router.post('/signup', UserController.createUser);
router.post('/login', UserController.loginUser);

export default router