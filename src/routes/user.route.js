/* eslint-disable prettier/prettier */
import express from 'express';
import { userAuth } from '../middlewares/auth.middleware';
import * as UserController from '../controllers/user.controller';

const router = express.router;

router.post('/signup', UserController.createUser);

export default router