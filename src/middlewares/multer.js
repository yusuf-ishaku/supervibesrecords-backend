/* eslint-disable prettier/prettier */
import {v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import multer from 'multer';

const storage = new CloudinaryStorage({
    cloudinary,
    params: async(req, file) =>{
        return {
            folder: 'samples',
            resource_type: 'auto',
            allowedFormats: ['jpeg', 'png', 'img', 'mp3', 'jpg'],
            path: file.path
        }
    },
});
const upload = multer({storage});

export default upload;