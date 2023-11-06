/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
import { v2 as cloudinary} from 'cloudinary';


const uploader = cloudinary.uploader;
const cloudinaryConfig = (req,res, next) => {
    cloudinary.config({
        cloud_name: 'dv5v8l2lr', 
        api_key: '777541867955751', 
        api_secret: 'qRDV0bXVnLn1mESFmWo5hBxldtA',
    });
    next();
}

export { uploader, cloudinaryConfig}