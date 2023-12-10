/* eslint-disable prettier/prettier */
import express from 'express';
import * as audioController from '../controllers/audio.controller';
// import { newAudioValidator } from '../validators/audio.validator';
import upload from '../middlewares/multer';
// import { userAuth } from '../middlewares/auth.middleware';

const router = express.Router();

// //route to get all users
router.get('', audioController.getAllAudio);

//route to create a new user
router.post('', upload.fields([
    {name: 'audio', maxCount: 1},
    {name: 'image', maxCount: 1, }
]), audioController.newAudio);

// route to get a single user by their user id
router.get('/:_id', audioController.getAudio);

// //route to update a single user by their user id
// router.put('/:_id', userController.updateUser);

// //route to delete a single user by their user id
// router.delete('/:_id', userController.deleteUser);

export default router;
